<script>
import { store } from "../data/store";
import QuestsComp from "../components/QuestsComp.vue";
import AnswersComp from "../components/AnswersComp.vue";
import ResultComponent from "./ResultComponent.vue";
export default {
  name: "ContainerGameComp",
  components: {
    QuestsComp,
    AnswersComp,
    ResultComponent,
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
    getCorrectAnswers() {
      const correctAnswers = this.userAnswers.filter((answ) => {
        return answ.isTrue === true;
      });
      console.log(correctAnswers);
      return correctAnswers.length;
    },
    resetGame() {
      store.counterIndexes = 0;
      this.uniqueQuestsIndexes = [];
      this.userAnswers = [];
      this.getUniqueQuest();
    },
  },
  created() {
    this.getUniqueQuest();
  },
};
</script>

<template>
  <div
    v-if="userAnswers.length < store.dataQuests.length"
    class="quest-answers-cont"
  >
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
  <div v-else class="output">
    <button @click="resetGame">PLAY AGAIN</button>
    <h4>{{ getCorrectAnswers() + "/" + store.dataQuests.length }}</h4>
    <ResultComponent v-for="item in userAnswers" :resultData="item" />
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
.output {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    cursor: pointer;
    padding: 10px;
    border-radius: 30px;
    color: greenyellow;
    border: 1px solid greenyellow;
    background-color: transparent;
    margin: 15px 0px;
    box-shadow: 0px 0px 10px greenyellow;
    text-shadow: 0px 0px 10px greenyellow;

    &:hover {
      box-shadow: 0px 0px 15px greenyellow;
    }

    &:active {
      box-shadow: 0px 0px 35px greenyellow;
    }
  }
}
</style>
