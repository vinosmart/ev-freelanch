<template>
  <div class="flex justify-center w-full bg-black z-[9999]">
    <nav
      class="flex items-center bg-black w-full fixed lg:justify-center p-[15px] px-[30px]"
    >
      <div
        class="flex justify-between items-center md:gap-10 lg:gap-[300px] bg-black w-full max-w-7xl"
      >
        <div class="md:w-[180px] md:h-[59px]">
          <img
            src="https://script.bugfinder.net/hyippro/screaminlizard/assets/uploads/logo/logo.png"
            class="w-[130px] md:w-[180px] h-[60px] bg-cover"
            alt=""
          />
        </div>

        <div class="lg:hidden">
          <div
            class="bg-gradient-to-r from-[#B8F146] to-[#6DFD63] text-white rounded-md"
            @click="show()"
          >
            <div class="p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="hidden lg:block">
          <div class="flex gap-10 text-base text-white">
            <NuxtLink :class="{ active: $route.path === '/home' }" to="/home">
              <p class="hover:text-[#B8F146]">Home</p>
            </NuxtLink>
            <NuxtLink
              :class="{ active: $route.path === '/about' }"
              to="./about"
            >
              <p class="hover:text-[#B8F146]">About</p>
            </NuxtLink>
            <NuxtLink :class="{ active: $route.path === '/plan' }" to="./plan">
              <p class="hover:text-[#B8F146]">Plan</p>
            </NuxtLink>
            <NuxtLink :class="{ active: $route.path === '/blog' }" to="./blog">
              <p class="hover:text-[#B8F146]">Blog</p>
            </NuxtLink>
            <NuxtLink :class="{ active: $route.path === '/faq' }" to="./faq">
              <p class="hover:text-[#B8F146]">Faq</p>
            </NuxtLink>
            <NuxtLink
              :class="{ active: $route.path === '/contact' }"
              to="./contact"
            >
              <p class="hover:text-[#B8F146]">Contact</p>
            </NuxtLink>

            <NuxtLink
              :class="{ active: $route.path === '/login' }"
              to="./login"
            >
              <p class="hover:text-[#B8F146]">Login</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
    <div v-if="isShow">
      <div class="flex flex-col w-full gap-10 text-base mt-[125px] text-white">
        <NuxtLink :class="{ active: $route.path === '/home' }" to="/home">
          <p class="hover:text-[#B8F146] cursor-pointer" @click="show()">
            Home
          </p>
        </NuxtLink>
        <NuxtLink :class="{ active: $route.path === '/about' }" to="./about">
          <p class="hover:text-[#B8F146] cursor-pointer" @click="show()">
            About
          </p>
        </NuxtLink>
        <NuxtLink :class="{ active: $route.path === '/plan' }" to="./plan">
          <p class="hover:text-[#B8F146] cursor-pointer" @click="show()">
            Plan
          </p>
        </NuxtLink>
        <NuxtLink :class="{ active: $route.path === '/blog' }" to="./blog">
          <p class="hover:text-[#B8F146] cursor-pointer" @click="show()">
            Blog
          </p>
        </NuxtLink>
        <NuxtLink :class="{ active: $route.path === '/faq' }" to="./faq">
          <p class="hover:text-[#B8F146] cursor-pointer" @click="show()">Faq</p>
        </NuxtLink>
        <NuxtLink
          :class="{ active: $route.path === '/contact' }"
          to="./contact"
        >
          <p class="hover:text-[#B8F146] cursor-pointer" @click="show()">
            Contact
          </p>
        </NuxtLink>

        <NuxtLink :class="{ active: $route.path === '/login' }" to="./login">
          <p class="hover:text-[#B8F146]">Login</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
<style>
.active {
  color: #b8f146;
}
</style>
