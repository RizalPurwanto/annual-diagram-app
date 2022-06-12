<template>
  <div class="min-h-screen bg-blue-800">
    <div class="relative flex grid grid-cols-1 divide-y text-center">
      <div class="flex justify-center">
        <form
          action=""
          @submit.prevent="postLogin"
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4 w-1/3"
        >
          <div class="flex justify-center mb-5">
            <div
              class="bg-blue-700 w-100 py-2 px-2 rounded-full border border-gray-200 border-2"
            >
              <h2 class="text-gray-200 font-bold">DigitalDive</h2>
            </div>
          </div>

          <h3 class="font-bold">Login</h3>

          <div class="text-gray-700 md:flex md:items-center py-2">
            <div class="mb-1 md:mb-0 md:w-1/3">
              <label for="email" class="font-bold">Email</label>
            </div>
            <div class="md:w-2/3 md:flex-grow">
              <input
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                name="email"
                id="email"
              />
            </div>
          </div>

          <div class="text-gray-700 md:flex md:items-center py-2">
            <div class="mb-1 md:mb-0 md:w-1/3">
              <label for="password" class="font-bold">Password</label>
            </div>
            <div class="md:w-2/3 md:flex-grow">
              <input
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </div>

          <div class="mt-8 md:flex py-2">
            <div class="md:w-1/2 md:flex-grow">
              <button
                type="submit"
                class="bg-blue-800 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 border border-blue-700 rounded"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
  methods: {
    postLogin(submitEvent) {
      this.email = submitEvent.target.elements.email.value;
      this.password = submitEvent.target.elements.password.value;

      const body = {
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch("doLogin", body);
    },
  },
};
</script>
