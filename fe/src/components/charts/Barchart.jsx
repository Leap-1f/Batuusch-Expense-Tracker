import { useEffect } from "react";
import { Chart } from "chart.js";
function BarChart() {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        datasets: [
          {
            data: [0, 1000000, 2000000],
            label: "Income",
            borderColor: "#84CC16",
            backgroundColor: "#84CC16",
            borderWidth: 2,
          },
          {
            data: [1000000, 2000000, 50000],
            label: "Expenses",
            borderColor: "#F97316",
            backgroundColor: "#F97316",
            borderWidth: 2,
          },
        ],
      },
    });
  }, []);

  return (
    <div className="w-[48%]">
      <div className="  flex mt-10">
        <div className="border border-white rounded-xl  w-full h-fit  shadow-xl">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </div>
  );
}

export default BarChart;
