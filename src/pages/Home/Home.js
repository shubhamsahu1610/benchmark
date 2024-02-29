import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Home = () => {
  // Define the chart options
  const chartOptions = {
    title: {
      text: "Sample Chart Title",
    },
    series: [
      {
        data: [1, 2, 3, 4, 5],
      },
    ],
  };

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page!</p>

      {/* HighchartsReact component */}
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default Home;
