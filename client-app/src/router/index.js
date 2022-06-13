import Vue from "vue";
import VueRouter from "vue-router";
//import HomeView from "../views/HomeView.vue";
import HomePage from "../views/Home.vue";
import LoginPage from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !localStorage.access_token) {
    next("/login");
  } else if (to.name == "login" && localStorage.access_token) {
    next("/");
  } else {
    next();
  }
});

export default router;
