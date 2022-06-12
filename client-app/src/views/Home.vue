<template>
  <div>
    <div class="shadow-lg rounded-lg overflow-hidden">
      <div class="py-3 px-5 bg-gray-50 font-bold">Annual Income 2021</div>
      <canvas class="p-10" id="planet-chart"></canvas>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js";

const planetChartData = {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],

    datasets: [
      {
        label: "Income",
        data: [
          3200000, 3000000, 2200000, 4000000, 2500000, 3000000, 3500000,
          3600000, 3200000, 3000000, 4000000, 3500000,
        ],
        backgroundColor: "rgba(54,73,93,.5)",
        borderColor: "#36495d",
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (value) {
              return value.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              });
            },
            beginAtZero: true,
            padding: 25,
          },
        },
      ],
    },
  },
};

export default {
  name: "HomePage",
  data() {
    return {
      planetChartData: planetChartData,
    };
  },
  mounted() {
    console.log(this.planetChartData, "INI PLANET DATA");
    const ctx = document.getElementById("planet-chart");
    new Chart(ctx, this.planetChartData);
  },
};
</script>
