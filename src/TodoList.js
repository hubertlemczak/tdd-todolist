class toDoList {
  constructor() {
    this.id = 1;
    this.completeStatus = false;
    this.itemList = [];
  }
  create(description) {
    const toDoItem = {
      id: this.id++,
      description: description,
      completeStatus: this.completeStatus,
    };
    this.itemList.push(toDoItem);
    return toDoItem;
  }
  delete(id) {
    for (let i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].id === id) {
        this.itemList.splice(i, 1);
        break;
      }
    }
  }
  toggleStatusTrue(id) {
    for (let i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].id === id && this.itemList[i].completeStatus === false) {
        this.itemList[i].completeStatus = true;
        break;
      }
    }
  }
  getAll() {
    return this.itemList;
  }
  sortByStatus(completeStatus) {
    this.sortedItemList = [];
    for (let i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].completeStatus === completeStatus) {
        this.sortedItemList.push(this.itemList[i]);
      }
    }
    return this.sortedItemList;
  }
  searchToDoItem(id) {
    this.searchOutcome = [];
    for (let i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].id === id) {
        this.searchOutcome.push(this.itemList[i]);
        break;
      }
    }
    return this.searchOutcome;
  }
}
// const newToDoList = new toDoList();
// newToDoList.create('turn the heating on!');
// newToDoList.create('turn the heating off please!');
// newToDoList.create("it's wayy too hot here!");
// newToDoList.create("guy's i'm a bit cold");
// newToDoList.toggleStatusTrue(1);
// // console.log(newToDoList.getAll());
// // newToDoList.searchToDoItem(3);
// newToDoList.toggleStatusTrue(3);
// // newToDoList.sortByStatus(false);
// console.log(newToDoList.getAll());
// console.log(newToDoList.searchToDoItem(2));
// newToDoList.getAll();
// console.log('hehe', newToDoList.sortByStatus(false));

module.exports = toDoList;
