<script>
import HeaderComp from "./components/HeaderComp.vue";
import ContainerGameComp from "./components/ContainerGameComp.vue";
export default {
  name: "App",
  components: {
    HeaderComp,
    ContainerGameComp,
  },
};
</script>

<template>
  <div class="container-general">
    <HeaderComp />
    <ContainerGameComp />
  </div>
</template>

<style lang="scss"></style>
