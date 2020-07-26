import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Graph from "./graph.js";
import { Input } from "antd";

function App() {
  const [data, setData] = useState({
    cases: [
      {
        x: "14/06/2020",
        y: "10",
      },
      {
        x: "13/06/2020",
        y: "20",
      },
    ],
    deaths: [
      {
        x: "14/06/2020",
        y: "5",
      },
      {
        x: "13/06/2020",
        y: "20",
      },
    ],
    geoId: "AF",
  });

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch("localhost:5000/country", requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data));
    // Run! Like go get some data from an API.
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch("localhost:5000/cases/byCountry/" + value, requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <Input placeholder="country" />
      </form>
      <Graph data={data} />
    </div>
  );
}

export default App;
