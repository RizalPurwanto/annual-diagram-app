<template>
  <div>
    <div class="shadow-lg rounded-lg overflow-hidden">
      <div class="py-3 px-5 bg-gray-50 font-bold">Annual Income 2021</div>
      <canvas class="p-10" id="income"></canvas>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js";

//let incomeData = {};
export default {
  name: "HomePage",
  data() {
    return {
      dataReady: false,
      // other data
    };
  },
  methods: {
    async fetchIncome() {
      await this.$store.dispatch("fetchIncome");
    },
  },
  computed: {
    income() {
      return this.$store.state.income;
    },
    incomeData() {
      return {
        type: "bar",
        data: {
          labels: this.$store.state.income.map((el) => {
            return el.month;
          }),

          datasets: [
            {
              label: "Income",
              data: this.$store.state.income.map((el) => {
                return el.income;
              }),
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
    },
  },

  async mounted() {
    await this.fetchIncome().then(() => {
      const ctx = document.getElementById("income");
      new Chart(ctx, this.incomeData);
    });
  },
};
</script>
