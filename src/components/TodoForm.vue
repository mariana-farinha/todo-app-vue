<template>
  <form>
    <input class="todo_input" v-model="newItem" type="text" />
    <button
      v-on:click="onAddButtonClicked"
      class="todo_button todo_button--submit"
    >
      Add
    </button>
    <button
      v-on:click="onCleanButtonClicked"
      class="todo_button todo_button--clean"
    >
      Clean Completed
    </button>
  </form>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data: function() {
    return {
      newItem: ""
    };
  },
  methods: {
    onAddButtonClicked(event) {
      event.preventDefault();
      this.newItem = this.newItem.trim();
      if (this.newItem !== "") {
        const item = {
          id: Math.random()
            .toString(36)
            .substr(2, 9),
          label: this.newItem,
          isDone: false
        };
        this.$emit("new", { item });
        this.newItem = "";
      }
    },
    onCleanButtonClicked(event) {
      event.preventDefault();
      this.$emit("clean");
    }
  }
});
</script>

<style scoped>
.todo_input {
  max-width: 38rem;
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-bottom: 1em;
}

.todo_input:focus {
  color: #495057;
  background-color: #fff;
  border-color: #04c5be;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.todo_button {
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.25rem 0.8rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
}

.todo_button--submit {
  color: #fff;
  background-color: #04c5be;
  border-color: #04c5be;
}

.todo_button--clean {
  color: #fff;
  background-color: #222;
  border-color: #222;
}

button + button {
  margin-left: 1em;
}
</style>
