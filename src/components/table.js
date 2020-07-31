import React from "react";
import { Table as AntdTable }  from "antd";

class Table extends React.Component {
    render() {
        const dataSource = this.props.data;
        const columns = [
            {
                title: 'Country',
                dataIndex: 'countryName',
                key: 'countryName'
            },
            {
                title: 'New Cases',
                dataIndex: 'cases',
                key: 'cases'
            },
            {
                title: 'Cases / 1M pop ',
                dataIndex: 'casesPerPop',
                key: 'casesPerPop'
            },
            {
                title: 'New Deaths',
                dataIndex: 'deaths',
                key: 'deaths'
            },
            {
                title: 'Deaths / 1M pop',
                dataIndex: 'deathsPerPop',
                key: 'deathsPerPop'
            },

        ];
        return (
            <div>
                <AntdTable dataSource={dataSource} columns={columns} />;
            </div>
        );
    }
}

export default Table;