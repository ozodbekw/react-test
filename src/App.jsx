import { useState } from "react";
import "./App.css";
import ApexChart from "./ApexChart";
import ApexLineChart from "./ApexLineCHart";
import PieChart from "./PieChart";
import RangeChart from "./RangeChart";
import ApexColumnChart from "./ApexColumnChart";

function App() {
  return (
    <div className="app-wrapper">
      <ApexColumnChart />
      <ApexChart />
      <ApexLineChart />
      <PieChart />
      <RangeChart />
    </div>
  );
}

export default App;
