<template>
  <nav
    class="bg-blue-900 rounded-lg w-full h-200 flex flex-wrap items-center justify-between py-3"
  >
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/login">Logout</router-link> -->
    <div
      class="bg-blue-700 py-2 px-2 rounded-full border border-gray-200 border-2"
    >
      <h2 class="text-gray-200 font-bold">DigitalDive</h2>
    </div>
    <div
      @click.prevent="logoutHandler"
      class="flex hover:bg-blue-700 px-2 rounded-lg border border-2"
    >
      <h1 class="font-bold">
        <a href="" class="text-gray-200">
          <i class="fa font-bold fa-sign-out" aria-hidden="true"></i>
          Logout</a
        >
      </h1>
    </div>
  </nav>
</template>
<script>
import Swal from "sweetalert2";
export default {
  name: "NavBar",
  methods: {
    logoutHandler() {
      this.$store.state.isLogin = false;
      localStorage.clear();

      this.$router.push("/login");
      Swal.fire("You have logged out");
    },
  },
};
</script>
