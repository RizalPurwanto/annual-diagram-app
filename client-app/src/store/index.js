import Vue from "vue";
import Vuex from "vuex";
import Swal from "sweetalert2";
import axios from "axios";
import router from "@/router";

const LOCAL_URL = "http://localhost:3000";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: localStorage.access_token ? true : false,
    income: [],
  },

  mutations: {
    SET_LOGIN(state, boolean) {
      state.isLogin = boolean;
    },
    SET_INCOME(state, income) {
      state.income = income;
    },
    SET_USER_DATA(state, payload) {
      state.userData = payload;

      localStorage.setItem("access_token", state.userData.access_token);

      localStorage.setItem("email", state.userData.email);
      localStorage.setItem("username", state.userData.username);
    },
  },
  actions: {
    async fetchIncome(context) {
      let url = `${LOCAL_URL}/income`;
      const headers = { access_token: localStorage.getItem("access_token") };
      axios
        .get(url, { headers })
        .then((response) => {
          context.commit("SET_INCOME", response.data);
          console.log(this.state.income, "INI INCOME API CALL");
          // router.push('/').catch(()=>{});
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
        });
    },
    async doLogin(context, body) {
      axios
        .post(`${LOCAL_URL}/login`, body)
        .then((response) => {
          context.commit("SET_USER_DATA", response.data);
          context.commit("SET_LOGIN", true);
          router.push("/");
          Swal.fire(`You are successfully logged in`);
        })
        .catch((error) => {
          if (Array.isArray(error.response.data.message)) {
            Swal.fire(error.response.data.message.join(", "));
          } else {
            Swal.fire(error.response.data.message);
          }
        });
    },
  },
  modules: {},
});
