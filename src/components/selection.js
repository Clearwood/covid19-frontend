import { Select } from "antd";
import React from "react";
import "antd/dist/antd.css";
const { Option } = Select;

class Selection extends React.Component {
  render() {
    function onBlur() {}

    function onFocus() {}

    function onSearch(val) {
      //console.log("search:", val);
    }

    return (
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a country"
        optionFilterProp="children"
        onChange={this.props.onSubmit}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {this.props.countries.map((country) => (
          <Option key={country.geoId} value={country.geoId}>
            {country.name}
          </Option>
        ))}
      </Select>
    );
  }
}

export default Selection;
