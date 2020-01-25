<template>
  <header>
    <h1>Todo - Vue.js + TypeScript App</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
  </header>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "TopBar"
});
</script>

<style scoped>
header {
  background-color: #222;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

h1 {
  color: #fff;
  margin: 0;
}

img {
  width: 2rem;
}

h1 + img {
  margin-left: 0.3em;
}
</style>
