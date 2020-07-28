import React from "react";
import { ResponsiveLine } from "@nivo/line";

class Graph extends React.Component {
  render() {
    const deaths = this.props.deaths;
    const cases = this.props.cases;
    const data = [
      {
        id: "deaths",
        color: "hsl(201, 70%, 50%)",
        data: deaths,
      },
      {
        id: "cases",
        color: "hsl(96, 70%, 50%)",
        data: cases,
      },
    ];
    return (
      <div className="App">
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{
            type: "time",
            format: "%Y-%m-%dT%H:%M:%S.%LZ",
            precision: "day",
          }}
          indexBy="date"
          xFormat="time:%Y-%m-%dT%H:%M:%S.%L%Z"
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickValues: "every 10 day",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: "%d.%m.%Y",
            legend: "Covid 19 Cases",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          colors={{ scheme: "nivo" }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
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
