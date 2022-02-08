import React from "react";

import { Line } from "react-chartjs-2";

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);



const Home = ({weight, date, label}) => {
  
    const data = {
        labels: date,
        datasets: [
          {
            label: label,
            data: weight,
            fill: true,
            backgroundColor: "rgba(118,226,248,0.5)",
            borderColor:  "rgba(75,185,236,1)",
          },
        ]
      };

      return (
        <div className="App">
          <Line data={data}  />
        </div>
      );    
}

export default Home