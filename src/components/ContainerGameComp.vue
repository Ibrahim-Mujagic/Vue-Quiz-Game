<script>
import { store } from "../data/store";
import QuestsComp from "../components/QuestsComp.vue";
import AnswersComp from "../components/AnswersComp.vue";
export default {
  name: "ContainerGameComp",
  components: {
    QuestsComp,
    AnswersComp,
  },
  data() {
    return {
      store,
      uniqueQuestsIndexes: [],
      userAnswers: [],
    };
  },
  methods: {
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getUniqueQuest() {
      let randomIndex;
      while (this.uniqueQuestsIndexes.length < store.dataQuests.length) {
        randomIndex = this.getRandomNumber(0, store.dataQuests.length - 1);
        if (!this.uniqueQuestsIndexes.includes(randomIndex)) {
          this.uniqueQuestsIndexes.push(randomIndex);
        }
      }
    },
    sendQuestAnswers(key) {
      return this.store.dataQuests[
        this.uniqueQuestsIndexes[this.store.counterIndexes]
      ]?.[key];
    },
    getUserAnswers(answer, isTrue) {
      const userAnswerObj = {
        answer,
        isTrue,
      };
      this.userAnswers.push(userAnswerObj);
    },
  },
  created() {
    this.getUniqueQuest();
  },
};
</script>

<template>
  <div class="quest-answers-cont">
    <div class="quests-container">
      <QuestsComp :question="sendQuestAnswers('question')" />
    </div>
    <div class="answers-container">
      <AnswersComp
        v-for="(answers, index) in sendQuestAnswers('answers')"
        :key="index"
        :answers="answers"
        @answerQuestion="getUserAnswers"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quest-answers-cont {
  .quests-container {
    width: 100%;
    padding: 10px;
  }
  .answers-container {
    min-height: 300px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
