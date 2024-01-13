<script>
export default {
  name: "ResulComponent",
  props: {
    resultData: Object,
  },
};
</script>

<template>
  <div class="card-output">
    <h4>
      {{ resultData.answer }}
    </h4>
    <div>{{ resultData.isTrue ? "✅​" : "❌​" }}</div>
  </div>
</template>

<style lang="scss" scoped>
.card-output {
  height: 70px;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  margin: 10px 0px;
}
</style>
