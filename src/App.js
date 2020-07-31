import React, { useState, useEffect } from "react";
import "./App.css";
import { Layout, Menu, Upload, Button, DatePicker, Spin } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Graph from "./components/graph.js";
import Selection from "./components/selection.js";
import Table from "./components/table";
import "antd/dist/antd.css";
import { useAlert } from "react-alert";
import moment from 'moment';

const { Header, Content } = Layout;

function App() {
  const alert = useAlert();
  const [data, setData] = useState(null);
  const [countries, setCountries] = useState([]);
  const date = moment(new Date());
  const [selectedDate, setSelectedDate] = useState(date);
  const [tableData, setTableData] = useState([]);

  useEffect(fetchCountries, []);
  useEffect(fetchTableData, [selectedDate]);

  function fetchCountries() {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://localhost:3100/country", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        data.unshift({name:"All", geoId: "all"});
        setCountries(data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }
  function fetchTableData() {
    if (selectedDate) {
      setUploading(true);
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const dateString = moment(selectedDate).utc(true).hour(0).minute(0).second(0).millisecond(0).toISOString();
      fetch(`http://localhost:3100/cases/world/${dateString}`, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            setTableData(data.sort((a, b) => b.cases - a.cases));
            setUploading(false);
          })
          .catch((err) => {
            throw new Error(err);
          });
    }
  }

  const submitForm = (value) => {
    if (value && value !== "all") {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      fetch("http://localhost:3100/cases/byCountry/" + value, requestOptions)
          .then((response) => response.json())
          .then((newData) => {
            setData(newData);
            setCurrent({current: "graph"});
          })
          .catch((err) => {
            throw new Error(err);
          });
    } else {
      setCurrent({current: "table"});
      fetchTableData()
    }
  };
  const [current, setCurrent] = useState({ current: "table" });
  const [uploading, setUploading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const props = {
    beforeUpload: (file) => {
      setFileList([file]);
      return false;
    },
    fileList,
  };
  const handleClick = (e) => {
    setCurrent({ current: e.key });
  };
  const handleBatchUpload = async (content) => {
    let batch = [];
    for (let i = 0; i < content.length; i++) {
      batch.push(content[i]);
      if (i % 250 === 0) {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(batch),
        };
        batch = [];
        console.log(batch);
        console.log(i);
        await fetch("http://localhost:3100/cases/init", requestOptions);
      }
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(batch),
    };
    await fetch("http://localhost:3100/cases/init", requestOptions);
  };
  const handleUpload = () => {
    const file = fileList[0];
    const success = function (content) {
      content = JSON.parse(content)["records"];
      handleBatchUpload(content).then(() => {
        setUploading(false);
        alert.show("Successfully uploaded data");
        setCurrent({ current: "table" });
        fetchCountries();
      });
      //console.log(JSON.stringify(content));
    };
    setUploading(true);
    const fileReader = new FileReader();
    fileReader.onload = function (evt) {
      success(evt.target.result);
    };
    fileReader.readAsText(file);
  };
  return (
      <Layout className="layout">
        <Header>
          <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="table">Dashboard</Menu.Item>
            <Menu.Item key="upload">Upload</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          {current.current === "upload" ? (
              <div>
                <Upload {...props}>
                  <Button>
                    <UploadOutlined /> Select File
                  </Button>
                </Upload>
                <Button
                    type="primary"
                    onClick={handleUpload}
                    disabled={fileList.length === 0}
                    loading={uploading}
                    style={{ marginTop: 16 }}
                >
                  {uploading ? "Uploading" : "Start Upload"}
                </Button>
              </div>
          ) : (
              <div id="one">
                <Selection onSubmit={submitForm} countries={countries} />
                {current.current === "table" ? (
                    <div style={{float: 'right'}}>
                      {uploading ? (<Spin style={{float: 'left', margin: 'auto 2em' }} size="large" />) : ('')}
                      <DatePicker onChange={setSelectedDate} />
                    </div>
                ) : ('')}
                {current.current === "graph" ? (
                    <div style={{ marginTop: 32, height: '100%' }}>
                      <Graph data={data.cases} title={"Cases"} color={"blue"}/>
                      <Graph data={data.deaths} title={"Deaths"} color={"red"}/>
                    </div>
                ) : (
                    <div style={{ marginTop: 32 }}>
                      <Table data={tableData}/>
                    </div>
                )}
            </div>
          )}
        </Content>
      </Layout>
  );
}

export default App;
