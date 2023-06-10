<template>
  <div class="">
    <!-- main -->
    <div
      class="flex flex-col items-center justify-center mx-auto bg-[#020015] py-32"
    >
      <h2 class="mb-4 text-3xl font-semibold text-white">
        <span class="text-stroke">Plan</span>
      </h2>
      <p class="font-[14px] text-white">
        Home / <span class="text-[#9FF550]">PLAN</span>
      </p>
    </div>
    <!-- card design  -->
    <div class="bg-[#020015] pb-20">
      <!-- content -->
      <div
        class="flex flex-col items-center mb-[70px] mx-auto w-[336px] md:w-[696px] text-center"
      >
        <p class="text-base text-[#9FF550] font-medium">INVEST OFFICER</p>
        <p
          class="mt-5 text-[32px] text-5xl md:font-normal text-white md:text-5xl"
        >
          Investment <span class="text-stroke">Plans</span>
        </p>
        <p class="my-[15px] text-sm text-[#bdbadb]">
          Help agencies to define their new business objectives and then create
          professional software.
        </p>
      </div>

      <!-- cards  -->
      <div>
        <!-- card -->
        <div class="flex justify-center">
          <div
            class="flex flex-wrap items-center justify-center xl:w-[1344px] gap-10 xl:gap-16"
          >
            <div
              v-for="(card, index) in cards"
              :key="index"
              class="flex w-full md:w-auto py-[20px] lg:py-[60px] px-5 md:px-0 justify-center md:justify-normal flex-wrap"
            >
              <div
                class="text-center w-full md:w-[336px] xl:w-[400px] md:h-[527px] px-5 lg:px-10 bg-[#03091b] rounded-md"
              >
                <div class="text-white pt-[60px] text-left px-[20px]">
                  <p class="mb-4 text-2xl font-normal font-space-grotesk">
                    <span class="font-space-grotesk">{{ card.heading }}</span>
                  </p>
                  <p class="text-[#9FF550] text-[32px] lg:text-5xl font-normal">
                    {{ card.price }}
                  </p>
                  <p
                    class="mt-[15px] mb-10 border-b-[1px] border-gray-900 pb-10"
                  >
                    {{ card.tag }}
                  </p>

                  <div class="mt-[41px] text-left">
                    <p class="mt-[15px] font-">{{ card.list1 }}</p>
                    <p class="mt-[15px]">
                      {{ card.list2 }}
                      <span class="bg-[#26cc8c] px-1 rounded-md">{{
                        card.listTag
                      }}</span>
                    </p>
                    <p class="mt-[15px]">{{ card.list3 }}</p>
                  </div>
                </div>
                <button
                  class="custom-gradient w-full h-[58px] rounded-md mt-10 text-[#284325]"
                  @click="cardOpen(index)"
                >
                  INVEST NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BLOCKS -->
      <div
        class="bg-[#020015] pt-[125px] flex flex-col items-center justify-center text-center mx-auto px-[30px]"
      >
        <div
          class="flex flex-col items-center w-full text-white mb-[20px] md:mb-[48px]"
        >
          <p class="text-base text-[#9FF550] font-medium">CHOOSE INVESTMENT</p>

          <p class="flex mt-5 text-2xl font-normal text-white w md:text-[36px]">
            Why Choose <span class="text-stroke">InvestmentPlans</span>
          </p>
          <p class="my-[15px] text-sm text-[#bdbadb]">
            Help agencies to define their new business objectives and then
            create professional software.
          </p>
        </div>
        <div
          class="xl:w-[1344px] bg-[url('/bg/logincard.png')] bg-no-repeat bg-contain bg-inherit xl:bg-center"
        >
          <div
            class="grid grid-cols-1 md:grid-cols-2 my-[20px] lg:mt-[48px] items-center py-[48px] px-6px"
          >
            <div v-for="(block, index) in blocks" :key="index" class="px-6">
              <div
                class="h-[245px] lg:h-[146px] lg:px-[30px] mb-[30px] text-left"
              >
                <div class="flex">
                  <div
                    class="w-[122px] h-[64px] bg-[#BDBADB] bg-opacity-5 px-3 rounded-full flex justify-center items-center"
                  >
                    <img
                      :src="block.image"
                      alt=""
                      class="rounded-full w-[32px] h-[32px]"
                    />
                  </div>

                  <div class="pl-5">
                    <p
                      class="text-[#6bfd64] text-2xl pb-[30px] border-b-[1px] border-gray-900"
                    >
                      {{ block.heading }}
                    </p>
                    <p class="pb-[15px] text-sm text-[#bdbadb] pt-[30px]">
                      {{ block.content }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- table  -->
      <div class="w-full">
        <div
          class="bg-[#BDBADB] bg-opacity-5 border-gray-900 rounded-t-3xl border-t"
        >
          <div
            class="flex flex-col items-center text-center mx-auto mt-6 text-white mb-[48px] lg:px-[30px]"
          >
            <p class="text-base text-[#9FF550] font-medium">
              NOT HIDDEN CHARGE
            </p>

            <p class="md:mt-5 font-normal text-white text-[32px] md:text-5xl">
              Last Deposits & <span class="text-stroke">Withdrawals</span>
            </p>
            <p class="my-[15px] text-sm text-[#bdbadb]">
              Help agencies to define their new business objectives and then
              create professional software.
            </p>
          </div>

          <div class="flex items-center justify-center gap-1.5">
            <button
              class="w-[189px] h-[47px] border bg-black border-[#98d968] text-[#98d968] rounded-md"
              :class="{ activeTab: activeTab === 1 }"
              @click="activateTab(1)"
            >
              LAST DEPOSIT
            </button>
            <button
              class="w-[189px] h-[47px] border bg-black border-[#98d968] text-[#98d968] rounded-md"
              :class="{ activeTab: activeTab === 2 }"
              @click="activateTab(2)"
            >
              LAST WITHDRAWAL
            </button>
          </div>
        </div>

        <!-- table for mobile view  -->
        <div class="w-full md:hidden px-3.5">
          <div class="w-full">
            <div class="p-[15px]">
              <p class="text-[#83acdc]">Name</p>
              <div class="flex gap-1">
                <img src="/user.png" alt="" class="w-[25px] h-[25px]" />
                <p class="text-[#83acdc]">Josew Ather</p>
              </div>
            </div>
            <div class="flex justify-between p-[15px] text-[#83acdc]">
              <p>Amount</p>
              <p>$ 5000</p>
            </div>
            <div class="flex justify-between p-[15px] text-[#83acdc]">
              <p>Gateway</p>
              <p>Flutterwave</p>
            </div>
            <div class="flex justify-between p-[15px] text-[#83acdc]">
              <p>Date</p>
              <p>19 May, 2023 10:57 AM</p>
            </div>
          </div>
          <div class="">
            <div class="flex justify-between p-[15px]">
              <p class="text-[#83acdc]">Name</p>
              <div class="flex gap-1">
                <img src="/user.png" alt="" class="w-[25px] h-[25px]" />
                <p class="text-[#83acdc]">Yousef Amer</p>
              </div>
            </div>
            <div class="flex justify-between p-[15px] text-[#83acdc]">
              <p>Amount</p>
              <p>$ 100</p>
            </div>
            <div class="flex justify-between p-[15px] text-[#83acdc]">
              <p>Gateway</p>
              <p>Flutterwave</p>
            </div>
            <div class="flex justify-between p-[15px] text-[#83acdc]">
              <p>Date</p>
              <p>10 May, 2023 08:03 AM</p>
            </div>
          </div>
          <div class="border border-gray-900 rounded-md">
            <div class="flex justify-between p-[15px]">
              <p class="text-[#83acdc]">Name</p>
              <div class="flex gap-1">
                <img src="/user.png" alt="" class="w-[25px] h-[25px]" />
                <p class="text-[#83acdc]">Yousef Amer</p>
              </div>
            </div>
            <div class="flex justify-between p-[15px] text-[#83acdc]">
              <p>Amount</p>
              <p>$ 50</p>
            </div>
            <div class="flex justify-between p-[15px] text-[#83acdc]">
              <p>Gateway</p>
              <p>Mollie</p>
            </div>
            <div class="flex justify-between p-[15px] text-[#83acdc]">
              <p>Date</p>
              <p>27 Apr, 2023 06:11 AM</p>
            </div>
          </div>
          <div class="border border-gray-900 rounded-md">
            <div class="flex justify-between p-[15px]">
              <p class="text-[#83acdc]">Name</p>
              <div class="flex gap-1">
                <img src="/user.png" alt="" class="w-[25px] h-[25px]" />
                <p class="text-[#83acdc]">Josew Ather</p>
              </div>
            </div>
            <div class="flex justify-between p-[15px] text-[#83acdc]">
              <p>Amount</p>
              <p>$ 80</p>
            </div>
            <div class="flex justify-between p-[15px] text-[#83acdc]">
              <p>Gateway</p>
              <p>RazorPay</p>
            </div>
            <div class="flex justify-between p-[15px] text-[#83acdc]">
              <p>Date</p>
              <p>17 Apr, 2023 03:55 PM</p>
            </div>
          </div>
        </div>
        <!-- table lg size  data -->
        <div class="hidden w-full md:block">
          <div
            class="flex items-center justify-center pb-20 mt-20 rounded-md px-[15px]"
          >
            <table
              class="bg-[#020015] lg:w-[1320px] text-[#93badb] rounded-3xl w-full"
            >
              <thead class="w-full border rounded-3xl">
                <tr class="text-left bg-[#82f95b] l text-[#020015]">
                  <th class="px-5 py-[25px] border-b-[1px]">NAME</th>
                  <th class="px-4 py-[25px] border-b-[1px]">AMOUNT</th>
                  <th class="px-4 py-[25px] border-b-[1px]">GATEWAY</th>
                  <th class="px-4 py-[25px] border-b-[1px]">DATE</th>
                </tr>
              </thead>
              <tbody v-if="activeTab === 1">
                <tr v-for="(item, index) in tableData" :key="index">
                  <td class="p-[25px] border-b-[1px] border-gray-900">
                    <div class="flex gap-1">
                      <img
                        :src="item.user"
                        alt=""
                        class="w-[25px] h-[25px] rounded-full"
                      />
                      <p>{{ item.name }}</p>
                    </div>
                  </td>
                  <td class="p-[25px] border-b-[1px] border-gray-900">
                    {{ item.amount }}
                  </td>
                  <td class="p-[25px] border-b-[1px] border-gray-900">
                    {{ item.gateway }}
                  </td>
                  <td class="p-[25px] border-b-[1px] border-gray-900">
                    {{ item.date }}
                  </td>
                </tr>
              </tbody>

              <tbody v-if="activeTab === 2">
                <tr>
                  <td class="p-[25px] border-b-[1px] border-gray-900">
                    <div class="flex gap-1">
                      <!-- <img
                        :src="item.user"
                        alt=""
                        class="w-[25px] h-[25px] rounded-full"
                      /> -->
                      <p>jj</p>
                    </div>
                  </td>
                  <td class="p-[25px] border-b-[1px] border-gray-900">ss</td>

                  dd
                  <td class="p-[25px] border-b-[1px] border-gray-900">ss</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <!-- main -->
        <div
          class="flex flex-col items-center justify-center bg-[#020015] py-32"
        >
          <h2 class="mb-4 text-3xl font-semibold text-white">
            <span class="text-stroke">FAQ</span>
          </h2>
          <p class="font-[14px] text-white">
            Home / <span class="text-[#9FF550]">FAQ</span>
          </p>
        </div>
        <div class="bg-[#020015]">
          <!-- questions  -->
          <div class="flex justify-center">
            <div
              class="flex flex-col lg:flex-row lg:max-w-[1344px] mx:mx-auto items-center lg:items-start justify-center pb-40 md:min-w-[768px] xl:w-[1440px]"
            >
              <div class="px-3 md:w-[695px] lg:w-[328px] xl:w-[447px]">
                <p class="mt-5 text-2xl font-normal text-white md:text-4xl">
                  ANY <span class="text-stroke">QUESTIONS</span>
                </p>
                <p class="my-[15px] text-sm text-[#bdbadb]">
                  We've Got Answers
                </p>
                <p
                  class="p-[30PX] mt-[48px] text-sm text-[#bdbadb] bg-[#03091b] lg:max-w-[399px]"
                >
                  Help agencies to define their new business objectives and then
                  create professional software
                </p>
              </div>

              <div class="lg:w-[895px] lg:px-[48px] xl:px-0 md:w-[699px]">
                <div
                  v-for="(item, index) in questions"
                  :key="index"
                  class="pt-[30px] px-2 md:w-[699px] lg:w-[574px] xl:w-[823px]"
                >
                  <div
                    class="flex justify-between pt-5 text-xl text-white"
                    :class="{
                      'border-t-2 border-gray-900': !item.showAnswer,
                      'border-t-2 border-[#9ff550]': item.showAnswer,
                    }"
                    @click="toggleAnswer(index)"
                  >
                    <p
                      :class="{
                        'text-white': !item.showAnswer,
                        'text-[#9ff550]': item.showAnswer,
                      }"
                    >
                      {{ item.question }}
                    </p>
                    <p
                      :class="{
                        'text-white': !item.showAnswer,
                        'text-[#9ff550]': item.showAnswer,
                      }"
                    >
                      {{ index + 1 }}
                    </p>
                  </div>
                  <div
                    v-if="item.showAnswer"
                    class="pt-[30px] text-sm text-[#bdbadb]"
                  >
                    {{ item.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="showModel"
      class="z-20 fixed inset-0 flex items-center justify-center w-full h-screen bg-[#000000]/75"
    >
      <div class="w-[500px] h-[460px] absolute bg-green-100">
        <div class="" @click="closeModel()">xx</div>
        <div class="bg-[#050c20]">
          <div class="flex justify-between">
            <p class="text-lg text-white">Invest Now</p>
            <span class="w-[10px] h-4">x</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
<script>
import { defineComponent } from "vue";
definePageMeta({ layout: "default" });

export default defineComponent({
  data() {
    return {
      showModel: false,
      activeTab: 1,
      cards: [
        {
          heading: "Business Plan",
          price: "$69 - $999",
          tag: "6% Every Day",
          list1: "Profit For Lifetime",
          list2: " Capital will back :",
          listTag: "Yes",
          list3: "Lifetime Earning",
        },
        {
          heading: "Baby Plan",
          price: "$99 - $888",
          tag: "*6 Every Day",
          list1: "Profit For Every Day",
          list2: " Capital will back :",
          listTag: "Yes",
          list3: "TOTAL 0 USD +",
        },
        {
          heading: "Hatchling Plan",
          price: "$120",
          tag: "6 Every Day",
          list1: "Profit For Every Day",
          list2: " Capital will back :",
          listTag: "Yes",
          list3: "LIFE TIME EARNING",
        },
        {
          heading: "Secondary Pack",
          price: "$89 - $666",
          tag: "*3 Every Day",
          list1: "Profit For Every Day",
          list2: " Capital will back :",
          listTag: "Yes",
          list3: "TOTAL 1020 USD +",
        },
        {
          heading: "Starter Pack",
          price: "$50 - $400",
          tag: "1% Every Day",
          list1: "Profit For Every Day",
          list2: " Capital will back :",
          listTag: "Yes",
          list3: "LIFETIME EARNING",
        },
      ],
      blocks: [
        {
          image:
            "https://script.bugfinder.net/hyippro/screaminlizard/assets/uploads/content/63ac1031952101672220721.png",
          heading: "Expert Management",
          content:
            "Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create.",
        },
        {
          image:
            "https://script.bugfinder.net/hyippro/screaminlizard/assets/uploads/content/63ac103b79dad1672220731.png",
          heading: "Registered Company",
          content:
            "Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create.",
        },
        {
          image:
            "https://script.bugfinder.net/hyippro/screaminlizard/assets/uploads/content/63ac1043c78011672220739.png",
          heading: "Secure Investment",
          content:
            "Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create.",
        },
        {
          image:
            "https://script.bugfinder.net/hyippro/screaminlizard/assets/uploads/content/63ac104f998a11672220751.png",
          heading: "Verified Security",
          content:
            "Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create.",
        },
        {
          image:
            "https://script.bugfinder.net/hyippro/screaminlizard/assets/uploads/content/63ac10576a5051672220759.png",
          heading: "Instant Withdrawal",
          content:
            "Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create.",
        },
        {
          image:
            "https://script.bugfinder.net/hyippro/screaminlizard/assets/uploads/content/63ac1060947cf1672220768.png",
          heading: "Registered Company",
          content:
            "Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create.",
        },
      ],
      tableData: [
        {
          name: "John Doe",
          user: "/user.png",
          amount: "$100",
          gateway: "PayPal",
          date: "2023-06-01",
        },
        {
          name: "Jane Smith",
          user: "/user.png",
          amount: "$200",
          gateway: "Stripe",
          date: "2023-06-02",
        },
      ],
      questions: [
        {
          question: " What About Loan Programs?",
          answer:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus adipisci ullam quos voluptate officiis ab exercitationem? Molestiae deserunt incidunt, inventore cumque explicabo rerum accusantium dolor natus quas eveniet ad molestias!",
          showAnswer: false,
        },
        {
          question: " What passages of Lorem can i contact you?",
          answer:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus adipisci ullam quos voluptate officiis ab exercitationem? Molestiae deserunt incidunt, inventore cumque explicabo rerum accusantium dolor natus quas eveniet ad molestias!",
          showAnswer: false,
        },
        {
          question: " What About Loan Programs?",
          answer:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus adipisci ullam quos voluptate officiis ab exercitationem? Molestiae deserunt incidunt, inventore cumque explicabo rerum accusantium dolor natus quas eveniet ad molestias!",
          showAnswer: false,
        },
      ],
      questions: [
        {
          question: " What About Loan Programs?",
          answer:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus adipisci ullam quos voluptate officiis ab exercitationem? Molestiae deserunt incidunt, inventore cumque explicabo rerum accusantium dolor natus quas eveniet ad molestias!",
          showAnswer: false,
        },
        {
          question: " What passages of Lorem can i contact you?",
          answer:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus adipisci ullam quos voluptate officiis ab exercitationem? Molestiae deserunt incidunt, inventore cumque explicabo rerum accusantium dolor natus quas eveniet ad molestias!",
          showAnswer: false,
        },
        {
          question: " What About Loan Programs?",
          answer:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus adipisci ullam quos voluptate officiis ab exercitationem? Molestiae deserunt incidunt, inventore cumque explicabo rerum accusantium dolor natus quas eveniet ad molestias!",
          showAnswer: false,
        },
        {
          question: " What About Loan Programs?",
          answer:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus adipisci ullam quos voluptate officiis ab exercitationem? Molestiae deserunt incidunt, inventore cumque explicabo rerum accusantium dolor natus quas eveniet ad molestias!",
          showAnswer: false,
        },
        {
          question: " What About Loan Programs?",
          answer:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus adipisci ullam quos voluptate officiis ab exercitationem? Molestiae deserunt incidunt, inventore cumque explicabo rerum accusantium dolor natus quas eveniet ad molestias!",
          showAnswer: false,
        },
      ],
    };
  },

  methods: {
    toggleAnswer(index) {
      if (this.activeQuestionIndex === index) {
        this.activeQuestionIndex = -1;
      } else {
        this.activeQuestionIndex = index;
      }
      this.questions.forEach((item, i) => {
        item.showAnswer = i === this.activeQuestionIndex;
      });
    },
    activateTab(tab) {
      this.activeTab = tab;
    },

    cardOpen() {
      this.showModel = true;
    },
    closeModel() {
      this.showModel = false;
    },
  },
});
</script>

<style>
.custom-gradient {
  background-image: linear-gradient(to right, #b8f146, #6bfd64);
}
.font-bruno {
  font-family: "Bruno Ace SC", cursive;
}
.font-space-grotesk {
  font-family: "Space Grotesk", sans-serif;
}
.text-stroke {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  -moz-text-fill-color: transparent;
  -moz-text-stroke-width: 1px;
  -moz-text-stroke-color: white;
  text-fill-color: transparent;
  text-stroke-width: 1px;
  text-stroke-color: white;
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
}

.activeTab {
  background-color: #b8f146;
  color: black !important;
  font-weight: 600;
}
</style>
