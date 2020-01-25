<template>
  <div id="app">
    <TopBar />
    <TodoList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopBar from "./components/TopBar.vue";
import TodoList from "./components/TodoList.vue";

export default Vue.extend({
  components: {
    TopBar,
    TodoList
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
</style>
