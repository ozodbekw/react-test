import ReactApexChart from "react-apexcharts";
import { useState } from "react";

const PieChart = () => {
  const [state, setState] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Brownie", "Pie", "Macaron", "Tiramisu", "Baklava"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <section>
      <h2>Desserts Best category with sales</h2>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="pie"
          width={380}
        />
      </div>
      <div id="html-dist"></div>
    </section>
  );
};

export default PieChart;
