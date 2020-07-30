import React from "react";

class Table extends React.Component {
    render() {
        const dataSource = this.props.data;
        const columns = [
            {
                title: 'Country',
                dataIndex: 'countryLabel',
                key: 'countryLabel'
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
                dataIndex: 'deathPerPop',
                key: 'deathPerPop'
            },

        ];
        return (
            <div>
                <Table dataSource={dataSource} columns={columns} />;
            </div>
        );
    }
}

export default Table;