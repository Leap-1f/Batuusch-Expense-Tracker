import { useEffect } from "react";
import { Chart } from "chart.js";
function Donutchart() {
  useEffect(() => {
    var ctx = document.getElementById("myyChart").getContext("2d");
    var myyChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Bills", "Food", "Shopping", "Insurance", "Clothing"],
        datasets: [
          {
            data: [10000, 500000, 2000000, 4000000, 500000],
            borderColor: [
              "#1C64F2",
              "#E74694",
              "#FDBA8C",
              "#16BDCA",
              "#F2901C",
            ],
            backgroundColor: [
              "#1C64F2",
              "#E74694",
              "#FDBA8C",
              "#16BDCA",
              "#F2901C",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
      },
    });
  }, []);

  return (
    <div className=" w-[48%] bg-white mt-10 rounded-xl shadow-xl ">
      <div className="flex ">
        <div className="border border-white w-full">
          <canvas id="myyChart"></canvas>
        </div>
      </div>
    </div>
  );
}

export default Donutchart;
