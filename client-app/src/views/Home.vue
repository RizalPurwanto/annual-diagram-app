<template>
  <div>
    <div class="shadow-lg rounded-lg overflow-hidden">
      <div
        class="py-2 px-5 bg-gray-200 rounded-full w-1/3 mt-2 font-bold mx-auto"
      >
        Annual Income 2021
      </div>

      <div class="w-full px-10 mb-10 m-auto">
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
