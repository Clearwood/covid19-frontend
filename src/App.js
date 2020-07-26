import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Graph from "./graph.js";
function App() {
  const data = [
    {
      id: "japan",
      color: "hsl(335, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 147,
        },
        {
          x: "helicopter",
          y: 284,
        },
        {
          x: "boat",
          y: 125,
        },
        {
          x: "train",
          y: 20,
        },
        {
          x: "subway",
          y: 51,
        },
        {
          x: "bus",
          y: 58,
        },
        {
          x: "car",
          y: 265,
        },
        {
          x: "moto",
          y: 238,
        },
        {
          x: "bicycle",
          y: 9,
        },
        {
          x: "horse",
          y: 8,
        },
        {
          x: "skateboard",
          y: 44,
        },
        {
          x: "others",
          y: 40,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(107, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 73,
        },
        {
          x: "helicopter",
          y: 151,
        },
        {
          x: "boat",
          y: 227,
        },
        {
          x: "train",
          y: 111,
        },
        {
          x: "subway",
          y: 181,
        },
        {
          x: "bus",
          y: 16,
        },
        {
          x: "car",
          y: 256,
        },
        {
          x: "moto",
          y: 97,
        },
        {
          x: "bicycle",
          y: 200,
        },
        {
          x: "horse",
          y: 95,
        },
        {
          x: "skateboard",
          y: 298,
        },
        {
          x: "others",
          y: 204,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(271, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 203,
        },
        {
          x: "helicopter",
          y: 109,
        },
        {
          x: "boat",
          y: 277,
        },
        {
          x: "train",
          y: 52,
        },
        {
          x: "subway",
          y: 88,
        },
        {
          x: "bus",
          y: 90,
        },
        {
          x: "car",
          y: 20,
        },
        {
          x: "moto",
          y: 168,
        },
        {
          x: "bicycle",
          y: 41,
        },
        {
          x: "horse",
          y: 5,
        },
        {
          x: "skateboard",
          y: 62,
        },
        {
          x: "others",
          y: 11,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(201, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 85,
        },
        {
          x: "helicopter",
          y: 100,
        },
        {
          x: "boat",
          y: 53,
        },
        {
          x: "train",
          y: 123,
        },
        {
          x: "subway",
          y: 80,
        },
        {
          x: "bus",
          y: 280,
        },
        {
          x: "car",
          y: 154,
        },
        {
          x: "moto",
          y: 168,
        },
        {
          x: "bicycle",
          y: 33,
        },
        {
          x: "horse",
          y: 96,
        },
        {
          x: "skateboard",
          y: 245,
        },
        {
          x: "others",
          y: 239,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(96, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 45,
        },
        {
          x: "helicopter",
          y: 21,
        },
        {
          x: "boat",
          y: 33,
        },
        {
          x: "train",
          y: 28,
        },
        {
          x: "subway",
          y: 238,
        },
        {
          x: "bus",
          y: 242,
        },
        {
          x: "car",
          y: 148,
        },
        {
          x: "moto",
          y: 64,
        },
        {
          x: "bicycle",
          y: 22,
        },
        {
          x: "horse",
          y: 224,
        },
        {
          x: "skateboard",
          y: 89,
        },
        {
          x: "others",
          y: 281,
        },
      ],
    },
  ];
  return <Graph data={data} />;
}

export default App;
