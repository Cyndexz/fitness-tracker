import React from "react";

import { Line } from "react-chartjs-2";

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);



const Home = ({weight,calories}) => {
  
    const data = {
        labels: "1234567890",
        datasets: [
          {
            label: 'End of day total',
            data: ['100','200','220'],
            fill: true,
            backgroundColor: "rgba(33,150,243,0.2)",
            borderColor: "rgba(33,150,243,1)",
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