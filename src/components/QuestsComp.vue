<script>
export default {
  name: "QuestComp",
  props: {
    question: String,
  },
};
</script>

<template>
  <div>
    <div class="quest">
      <div class="border">
        <h3>{{ question }}</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quest {
  height: 70px;
  width: 85%;
  margin: auto;
  text-align: center;
  border: 1px solid #fff;
  line-height: 70px;
  border-radius: 20px;
}
</style>
