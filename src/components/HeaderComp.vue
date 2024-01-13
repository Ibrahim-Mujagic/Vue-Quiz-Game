<script>
import { store } from "../data/store";
export default {
  name: "HeaderComp",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <img :src="store.getImage('logo.png')" alt="" />
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 300px;
  background-color: #150e8d;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
  }
}
</style>
