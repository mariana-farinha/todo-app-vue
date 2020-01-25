<template>
  <li
    v-bind:class="{ 'todo-list_item--done': item.isDone }"
    v-on:click="onItemClicked"
    class="todo-list_item"
  >
    {{ item.label }}
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["item"],
  methods: {
    onItemClicked() {
      this.item.isDone = !this.item.isDone;
    }
  }
});
</script>

<style scoped>
.todo-list_item--done {
  text-decoration: line-through;
}
</style>
