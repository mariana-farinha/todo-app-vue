<template>
  <div class="todo-list">
    <ul>
      <TodoListItem
        v-bind:item="item"
        v-for="item in todoItems"
        v-bind:key="item.id"
      />
    </ul>
    <TodoForm v-on:new="onNewTodoItem" v-on:clean="onCleanTodoList" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoListItem from "./TodoListItem.vue";
import TodoForm from "./TodoForm.vue";

export default Vue.extend({
  data: function() {
    return {
      todoItems: []
    };
  },
  components: {
    TodoListItem,
    TodoForm
  },
  methods: {
    onNewTodoItem(eventData) {
      this.todoItems.push(eventData.item);
    },
    onCleanTodoList() {
      this.todoItems = this.todoItems.filter(item => item.isDone === false);
    }
  }
});
</script>

<style scoped>
.todo-list {
  margin: 1em auto;
  min-height: 16rem;
  box-shadow: 8px 8px 10px #888;
  width: 51rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px auto 0 auto;
  padding: 2rem 3rem;
  border-radius: 5px;
  max-width: calc(100% - 50px);
}

ul {
  display: block;
  padding-left: 0;
  list-style-position: inside;
  margin-bottom: 2em;
}
</style>
