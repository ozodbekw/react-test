import ReactApexChart from "react-apexcharts";
import { useState } from "react";

const ApexChart = () => {
  const [state, setState] = useState({
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 600],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
    },
  });

  return (
    <section>
      <h2>Our best Desserts</h2>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </section>
  );
};

export default ApexChart;
