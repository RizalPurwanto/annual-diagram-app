<template>
  <div>
    <div class="shadow-lg flex flex-col justify-center overflow-hidden">
      <div
        class="py-3 rounded-full px-5 bg-gray-200 w-1/3 my-5 font-bold m-auto"
      >
        Annual Income 2021
      </div>
      <div class="w-3/4 m-auto mb-10">
        <diagram-bar></diagram-bar>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js";
import DiagramBar from "../components/DiagramBar.vue";

//let incomeData = {};
export default {
  components: { DiagramBar },
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
              backgroundColor: "rgba(51,51,255,.5)",
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
