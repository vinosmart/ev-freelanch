<template>
  <div class="mt-[88px]">
    <!-- main -->
    <div class="flex flex-col items-center justify-center bg-[#020015] py-32">
      <h2 class="mb-4 text-3xl font-semibold text-white">
        <span class="text-stroke">FAQ</span>
      </h2>
      <p class="font-[14px] text-white">
        Home / <span class="text-[#9FF550]">FAQ</span>
      </p>
    </div>
    <div class="bg-[#020015]">
      <!-- questions  -->
      <div class="flex w-[1344px] justify-center items-center mx-auto pb-40">
        <div>
          <p class="mt-5 text-4xl font-normal text-white">
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
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default {
  data() {
    return {
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
  },
};
</script>
