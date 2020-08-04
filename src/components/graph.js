import React from "react";
import { ResponsiveLine } from "@nivo/line";
import moment from 'moment';

class Graph extends React.Component {
  render() {
    const data = [
      {
        id: this.props.title,
        data: this.props.data
      },
    ];
    return (
      <div className="graph">
        <h3 className="graph-header">New Covid 19 {this.props.title} by day</h3>
        <ResponsiveLine
          data={data}
          enablePoints={false}
          margin={{ top: 15, right: 110, bottom: 50, left: 60 }}
          xScale={{
            type: "time",
            format: "%Y-%m-%dT%H:%M:%S.%LZ",
          }}
          xFormat = {(date) => moment(date).utc(false).format("DD.MM.yyyy")}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickValues: "every 8 days",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: "%b %d",
            legendOffset: 30,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -50,
            legendPosition: "middle",
          }}
          colors={this.props.color}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="value"
          pointLabelYOffset={-12}
          useMesh={true}
          curve="monotoneX"
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    );
  }
}

export default Graph;
