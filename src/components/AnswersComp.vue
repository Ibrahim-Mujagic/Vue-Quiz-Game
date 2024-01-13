<script>
import { store } from "../data/store";
export default {
  name: "AnswersComp",
  props: {
    answers: Object,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    sendUserAnswer(answer, isTrue) {
      this.$emit("answerQuestion", answer, isTrue);

      setTimeout(() => {
        store.counterIndexes++;
      }, 500);
    },
  },
};
</script>

<template>
  <div @click="sendUserAnswer(answers.answer, answers.isTrue)" class="answer">
    <p>{{ answers.answer }}</p>
  </div>
</template>

<style lang="scss" scoped>
.answer {
  height: 60px;
  width: calc(100% / 2 - 80px);
  min-width: 350px;
  border: 1px solid#fff;
  border-radius: 10px;
  margin: auto;
  text-align: center;
  line-height: 60px;

  &.correct {
    background-color: green;
  }
  &.in-correct {
    background-color: crimson;
  }

  &:hover {
    background-color: rgb(123, 121, 121);
    cursor: pointer;
  }
}
</style>
