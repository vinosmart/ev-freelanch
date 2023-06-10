<template>
  <div class="">
    <!-- main -->
    <div class="bg-[url('/bg/all.png')] bg-no-repeat bg-cover w-full">
      <div class="flex flex-col items-center justify-center py-32">
        <h2 class="mb-4 text-3xl font-semibold text-white">
          <span class="text-stroke">BLOG</span>
        </h2>
        <p class="font-[14px] text-white">
          Home / <span class="text-[#9FF550]">BLOG</span>
        </p>
      </div>
    </div>

    <!-- block -->
    <div class="bg-[#020015]  pb-20 mx-auto text-center w-full">
      <!-- content -->
      <div class="flex flex-col items-center mb-[70px]">
        <p class="text-base text-[#9FF550] font-medium">LATEST POSTS</p>
        <p class="mt-5 text-[32px] md:text-5xl font-normal text-white">
          Read Our Blogs
        </p>
        <p class="my-[15px] text-sm text-[#bdbadb]">
          HELP AGENCIES TO DEFINE THEIR NEW BUSINESS OBJECTIVES AND THEN CREATE
          PROFESSIONAL SOFTWARE.
        </p>
      </div>

      <!-- card -->
      <div
        class="flex flex-wrap justify-center mx-auto md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px] gap-2 max-w-full"
      >
        <div v-for="(card, index) in cards" :key="index">
          <div
            class="w-full md:w-[238px] lg:w-[328px] xl:w-[450px] px-6 md:px-2 mt-22 text-left"
          >
            <img
              :src="card.image"
              alt=""
              class=" w-full xl:w-[400px] xl:h-[224px] bg-cover md:w-[235px] md:h-[121px] lg:w-[380px] lg:h-[157px] rounded-md"
            />
            <p class="text-[#bdbadb] pb-[15px] text-xs pt-5">
              {{ card.date }}
            </p>
            <NuxtLink to="./blog/blog1" class="text-2xl text-white">
              {{ card.title }}
            </NuxtLink>
            <p class="text-[#bdbadb] pt-[15px] pb-[15px] text-sm">
              {{ card.description }}
            </p>
            <p class="text-[#9ff550] font-normal flex gap-1">
              READ MORE
              <NuxtLink to="./blog/blog1" class="text-[#9ff550] font-normal">
                <img src="/arrow.png" alt="" class="w-[19px] h-[16px] mt-1" />
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default {
  data() {
    return {
      cards: [
        {
          image:
            "https://script.bugfinder.net/hyippro/screaminlizard/assets/uploads/content/thumb_62c41816f34b81657018390.jpg",
          date: "17 Dec, 2021",
          title: "Crypto Economy's 10 Most Expensive Assets Per Unit In 2022",
          description:
            "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret.Peived determine de...",
        },
        {
          image:
            "https://script.bugfinder.net/hyippro/screaminlizard/assets/uploads/content/thumb_62c4182976a5c1657018409.jpg",
          date: "17 Dec, 2021",
          title:
            "Using Meta Advantage To Simplify Your Facebook Whatsapp Inst...",
          description:
            "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret.Peived determine de...",
        },
        {
          image:
            "https://script.bugfinder.net/hyippro/screaminlizard/assets/uploads/content/thumb_62c418343716c1657018420.jpg",
          date: "17 Dec, 2021",
          title: "MyBTC Ca Welcomes ETH Here's What You Need To Know",
          description:
            "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret.Peived determine de...",
        },
      ],
    };
  },
};
</script>
