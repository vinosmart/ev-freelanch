<template>
  <div class="flex justify-center w-full bg-black">
    <nav
      class="flex items-center bg-black w-full fixed lg:justify-center p-[15px] px-[30px]"
    >
      <div
        class="flex justify-between items-center md:gap-10 lg:gap-[300px] bg-black w-full max-w-7xl"
      >
        <div class="md:w-[180px] md:h-[59px]">
          <img
            src="https://script.bugfinder.net/hyippro/screaminlizard/assets/uploads/logo/logo.png"
            alt=""
          />
        </div>

        <div class="lg:hidden">
          <div class="bg-white rounded-md" @click="show()">
            <div class="md:w-[30px] md:h-[30px]">bars</div>
          </div>
        </div>
        <div class="hidden lg:block">
          <div class="flex gap-10 text-base text-white">
            <NuxtLink to="./home">
              <p>Home</p>
            </NuxtLink>
            <NuxtLink to="./about">
              <p>About</p>
            </NuxtLink>
            <NuxtLink to="./plan">
              <p>Plan</p>
            </NuxtLink>
            <NuxtLink to="./blog">
              <p>Blog</p>
            </NuxtLink>
            <NuxtLink to="./faq">
              <p>Faq</p>
            </NuxtLink>
            <NuxtLink to="./contact">
              <p>Contact</p>
            </NuxtLink>

            <NuxtLink to="./login">
              <a>Login</a>
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
    <div v-if="isShow">
      <div class="flex flex-col w-full gap-10 text-base text-white">
        <NuxtLink to="./home">
          <a>Home</a>
        </NuxtLink>
        <a href="#">About</a>
        <a href="#">Plan</a>
        <a href="#">Blog</a>
        <a href="#">Faq</a>
        <a href="#">Contact</a>
        <NuxtLink to="./login">
          <a>Login</a>
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
