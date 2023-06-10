<template>
  <div>
    <!-- main -->
    <div class="flex flex-col items-center justify-center bg-[#020015] py-32">
      <h2 class="mb-4 text-3xl font-semibold text-white">
        <span class="text-stroke">CONTACT</span>
      </h2>
      <p class="font-[14px] text-white">
        HOME / <span class="text-[#9FF550]">CONTACT</span>
      </p>
    </div>
    <!-- contact  -->
    <div class="bg-[#020015] flex flex-col justify-center items-center">
      <div class="h-[800px] flex w-[1320px] justify-center gap-[109px]">
        <!-- form -->
        <div class="w-[526px] h-[562px] bg-[#04091b] px-[50px]">
          <div class="flex flex-col items-center justify-center px-3 pt-6">
            <input
              type="text"
              placeholder="Full name"
              class="text-[#bdbadb] border-b-[1px] border-gray-900 bg-[#04091b] outline-none w-[426px] h-[50px] my-[15px] text-sm font-normal px-[2px] hover:border-[#9FF550]"
              required
            />
            <input
              type="email"
              placeholder="Email address"
              class="text-[#bdbadb] border-b-[1px] border-gray-900 bg-[#04091b] outline-none w-[426px] h-[50px] my-[15px] text-sm font-normal px-[2px] hover:border-[#9FF550]"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              class="text-[#bdbadb] border-b-[1px] border-gray-900 bg-[#04091b] outline-none w-[426px] h-[50px] my-[15px] text-sm font-normal px-[2px] hover:border-[#9FF550]"
              required
            />
            <textarea
              placeholder="Your message"
              class="text-[#bdbadb] border-b-[1px] border-gray-900 bg-[#04091b] outline-none w-[426px] h-[150px] my-[15px] text-sm font-normal px-[2px] hover:border-[#9FF550]"
            ></textarea>
            <button
              class="custom-gradient w-[426px] h-[58px] rounded-md mt-10 text-[#284325] pt-22"
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
        <!-- contacts -->
        <div class="w-[638px] h-[554px] pt-6 px-3">
          <div class="flex flex-col justify-start mb-[70px]">
            <p class="text-base text-[#9FF550] font-medium">Contact Us</p>
            <p class="mt-5 text-4xl font-normal text-white">
              GET IN <span class="text-stroke">TOUCH</span>
            </p>
            <p class="my-[15px] text-sm text-[#bdbadb]">
              Let's Ask Your Questions
            </p>
          </div>
          <!-- box2 -->
          <div class="flex">
            <div>
              <div class="flex gap-5 pb-12 w-[330px] h-[100px]">
                <div
                  class="w-[60px] h-[60px] bg-[#04091b] flex items-center justify-center rounded-md"
                >
                  <img
                    src="https://script.bugfinder.net/hyippro/screaminlizard/assets/themes/screaminlizard/img/icon/email.png"
                    alt=""
                    class="w-6 h-6"
                  />
                </div>
                <div class="">
                  <p class="text-white text-md">EMAIL</p>
                  <p class="pt-[15px] text-sm text-[#bdbadb]">
                    email@website.com
                  </p>
                </div>
              </div>
              <div class="flex gap-5 pb-12 w-[330px] h-[100px]">
                <div
                  class="w-[60px] h-[60px] bg-[#04091b] flex items-center justify-center rounded-md"
                >
                  <img
                    src="https://script.bugfinder.net/hyippro/screaminlizard/assets/themes/screaminlizard/img/icon/email.png"
                    alt=""
                    class="w-6 h-6"
                  />
                </div>
                <div class="">
                  <p class="text-white text-md">LOCATION</p>
                  <p class="pt-[15px] text-sm text-[#bdbadb]">
                    22 Baker Street, London
                  </p>
                </div>
              </div>
            </div>
            <!-- phone & link -->
            <div>
              <div class="flex gap-5 pb-12 w-[330px] h-[100px]">
                <div
                  class="w-[60px] h-[60px] bg-[#04091b] flex items-center justify-center rounded-md"
                >
                  <img
                    src="https://script.bugfinder.net/hyippro/screaminlizard/assets/themes/screaminlizard/img/icon/phone.png"
                    alt=""
                    class="w-6 h-6"
                  />
                </div>
                <div class="">
                  <p class="text-white text-md">EMAIL</p>
                  <p class="pt-[15px] text-sm text-[#bdbadb]">
                    email@website.com
                  </p>
                </div>
              </div>
              <!-- media -->
              <div>
                <p class="text-lg text-white mb-[9px]">
                  Follow our social media
                </p>
                <div class="flex gap-1 w-[266px]">
                  <a href="https://www.facebook.com/" class="facebook">
                    <img
                      src="/facebook.png"
                      alt=""
                      class="w-10 h-10 rounded-full"
                    />
                  </a>
                  <a href="https://twitter.com/" class="facebook">
                    <img
                      src="/twitter.png"
                      alt=""
                      class="w-10 h-10 rounded-full"
                    />
                  </a>
                  <a href="https://bd.linkedin.com/" class="facebook">
                    <img
                      src="/linkedin.png"
                      alt=""
                      class="w-10 h-10 rounded-full"
                    />
                  </a>
                  <a href="https://www.instagram.com/" class="facebook">
                    <img
                      src="/insta.png"
                      alt=""
                      class="w-10 h-10 rounded-full"
                    />
                  </a>
                </div>
              </div>
            </div>
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
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
      },
    ],
  },
};
</script>
