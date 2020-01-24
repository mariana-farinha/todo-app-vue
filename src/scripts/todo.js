new Vue({
  el: ".todo",
  data: {
    todoItems: ["Hello"],
    newItem: ""
  },
  methods: {
    onAddNewItem(event) {
      event.preventDefault();
      const inputField = document.querySelector(".todo__input");
      this.addNewItem(inputField.value);
    },
    addNewItem(item) {
      this.todoItems.push(item);
    }
  }
});
