<template>
  <div class="todo-list">
    <ul></ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TodoList"
});
</script>

<style scoped>
.todo-list {
  margin: 1em auto;
  min-height: 20rem;
  box-shadow: 8px 8px 10px #888;
  width: 51rem;
  display: block;
  margin: 30px auto 0 auto;
  padding: 2rem 3rem;
  border-radius: 5px;
  max-width: calc(100% - 50px);
}
</style>
