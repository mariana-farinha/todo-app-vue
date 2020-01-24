new Vue({
  el: ".todo",
  data: {
    todoItems: [],
    newItem: ""
  },
  methods: {
    onAddButtonClicked(event) {
      event.preventDefault();
      const inputField = document.querySelector(".todo__input");
      this._addNewItem({
        label: inputField.value,
        isDone: false,
        id: Math.random()
          .toString(36)
          .substr(2, 9)
      });
    },
    _addNewItem(item) {
      if (this.isNewItemValid(item)) {
        this.todoItems.push(item);
        this.newItem = "";
      }
    },
    _removeItem(index) {
      this.todoItems[index].isDone = true;
    },
    onItemClicked(item) {
      const itemMatch = this.todoItems.filter(elem => elem.id === item.id)[0];
      const index = this.todoItems.indexOf(itemMatch);
      this._removeItem(index);
    },
    onCleanButtonClicked(event) {
      event.preventDefault();
      this.todoItems = this.todoItems.filter(el => el.isDone !== true);
    },
    isNewItemValid(item) {
      return item.label.trim() != "";
    }
  }
});
