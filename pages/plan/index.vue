<template>
  <div class="mt-[88px] relative">
    <!-- main -->
    <div class="flex flex-col items-center justify-center bg-[#020015] py-32">
      <h2 class="mb-4 text-3xl font-semibold text-white">
        <span class="text-stroke">Plan</span>
      </h2>
      <p class="font-[14px] text-white">
        Home / <span class="text-[#9FF550]">PLAN</span>
      </p>
    </div>
    <!-- card design  -->
    <div class="bg-[#020015]">
      <!-- content -->
      <div class="flex flex-col items-center mb-[70px]">
        <p class="text-base text-[#9FF550] font-medium">INVEST OFFICER</p>
        <p class="mt-5 text-5xl font-normal text-white">
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
        <div class="flex flex-wrap justify-center">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="flex px-6 py-[60px]"
          >
            <div
              class="text-center w-[400px] h-[527px] px-10 bg-[#090b25] rounded-md"
            >
              <div class="text-white pt-[60px] text-left">
                <p class="mb-4 text-2xl font-normal font-space-grotesk">
                  <span class="font-space-grotesk">{{ card.heading }}</span>
                </p>
                <p class="text-[#9FF550] text-5xl font-normal">
                  {{ card.price }}
                </p>
                <p class="mt-[15px] mb-10 border-b-[1px] border-gray-900 pb-10">
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
                class="custom-gradient w-[319px] h-[58px] rounded-md mt-10 text-[#284325]"
                @click="cardOpen(index)"
              >
                INVEST NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- BLOCKS -->
      <div
        class="bg-[#020015] py-[125px] flex flex-col items-center justify-center w-[1344px] mx-auto"
      >
        <!-- content -->
        <div class="flex flex-col items-center text-white mb-[48px]">
          <p class="text-base text-[#9FF550] font-medium">CHOOSE INVESTMENT</p>

          <p class="mt-5 text-5xl font-normal text-white">
            Why Choose <span class="text-stroke">InvestmentPlans</span>
          </p>
          <p class="my-[15px] text-sm text-[#bdbadb]">
            Help agencies to define their new business objectives and then
            create professional software.
          </p>
        </div>
        <!-- block list  -->
        <div>
          <div class="flex flex-wrap mt-[48px] items-center py-[48px] px-6px">
            <div v-for="(block, index) in blocks" :key="index" class="px-6">
              <div class="w-[624px] h-[146px] px-[30px] mb-[30px]">
                <div class="flex">
                  <img
                    :src="block.image"
                    alt=""
                    class="w-[62px] h-[64px] bg-[0a0c26] rounded-full"
                  />
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
      <div>
        <!-- content -->
        <div>
          <div class="flex flex-col items-center text-white mb-[48px]">
            <p class="text-base text-[#9FF550] font-medium">
              NOT HIDDEN CHARGE
            </p>

            <p class="mt-5 text-5xl font-normal text-white">
              Last Deposits & <span class="text-stroke">Withdrawals</span>
            </p>
            <p class="my-[15px] text-sm text-[#bdbadb]">
              Help agencies to define their new business objectives and then
              create professional software.
            </p>
          </div>

          <div class="flex justify-center gap-1 tex-white">
            <button class="w-[149px] h-[47px] custom-gradient rounded-md">
              LAST DEPOSIT
            </button>
            <button
              class="w-[189px] h-[47px] border border-[#98d968] text-[#98d968] rounded-md hover:bg-[#98d968] hover:text-[#020015]"
            >
              LAST WITHDRAWAL
            </button>
          </div>
        </div>
        <!-- table data -->
        <div>
          <div class="flex items-center justify-center pb-20 mt-20 rounded-md">
            <table
              class="bg-[#020015] w-[1320px] text-[#93badb] border border-gray-900 rounded-md"
            >
              <thead class="bg-green-200">
                <tr
                  class="text-left bg-[#82f95b] text-[#020015] border rounded-lg"
                >
                  <th class="px-5 py-[25px] border-b-[1px]">NAME</th>
                  <th class="px-4 py-[25px] border-b-[1px]">AMOUNT</th>
                  <th class="px-4 py-[25px] border-b-[1px]">GATEWAY</th>
                  <th class="px-4 py-[25px] border-b-[1px]">DATE</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in tableData" :key="index">
                  <td class="p-[25px] border-b-[1px] border-gray-900">
                    {{ item.name }}
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
            </table>
          </div>
        </div>
      </div>
      <!-- questions  -->
      <div class="flex w-[1344px] justify-center items-center mx-auto">
        <div>
          <p class="mt-5 text-3xl font-normal text-white">
            ANY <span class="text-stroke">QUESTIONS</span>
          </p>
          <p class="my-[15px] text-sm text-[#bdbadb]">We've Got Answers</p>
          <p
            class="p-[30PX] mt-[48px] text-sm text-[#bdbadb] bg-[#03091b] w-[399px] h-[102px]"
          >
            Help agencies to define their new business objectives and then
            create professional software
          </p>
        </div>

        <div class="w-[895px] px-[48px]">
          <div
            v-for="(item, index) in questions"
            :key="index"
            class="w-[824px] pt-[30px]"
          >
            <div
              class="flex justify-between pt-5 text-white"
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
    <div
      v-if="open == true"
      class="absolute left-0 z-20 mt-[100px] bg-gray-200"
    >
      <div class="w-[500px] h-[460px] bg-[#050c20]">
        <div class="flex justify-between">
          <p class="text-lg text-white">Invest Now</p>
          <span class="w-[10px] h-4">x</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default {
  data() {
    return {
      open: false,
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
          amount: "$100",
          gateway: "PayPal",
          date: "2023-06-01",
        },
        {
          name: "Jane Smith",
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
    cardOpen(index) {
      console.log(index);
      this.open == true;
    },
  },
};
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
</style>
