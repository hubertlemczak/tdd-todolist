toDoList = require('../src/TodoList.js');

describe('to do list', () => {
  it('creates a todo item', () => {
    const newToDoList = new toDoList();
    const expected = {
      id: 1,
      description: 'turn the heating on!',
      completeStatus: false,
    };
    const result = newToDoList.create('turn the heating on!');
    expect(result).toEqual(expected);
  });
  it('shows all todo items', () => {
    const newToDoList = new toDoList();
    const expected = [
      {
        id: 1,
        description: 'turn the heating on!',
        completeStatus: false,
      },
      {
        id: 2,
        description: 'turn the heating off please!',
        completeStatus: false,
      },
      {
        id: 3,
        description: "it's wayy too hot here!",
        completeStatus: false,
      },
    ];
    newToDoList.create('turn the heating on!');
    newToDoList.create('turn the heating off please!');
    newToDoList.create("it's wayy too hot here!");
    const result = newToDoList.getAll();
    expect(result).toEqual(expected);
  });
  it('removes todo items', () => {
    const newToDoList = new toDoList();
    const expected = [
      {
        id: 1,
        description: 'turn the heating on!',
        completeStatus: false,
      },
      {
        id: 3,
        description: "it's wayy too hot here!",
        completeStatus: false,
      },
    ];
    newToDoList.create('turn the heating on!');
    newToDoList.create('turn the heating off please!');
    newToDoList.create("it's wayy too hot here!");
    newToDoList.delete(2);
    const result = newToDoList.getAll();
    expect(result).toEqual(expected);
  });
  it('toggles todo items status to true', () => {
    const newToDoList = new toDoList();
    const expected = [
      {
        id: 1,
        description: 'turn the heating on!',
        completeStatus: false,
      },
      {
        id: 2,
        description: "it's wayy too hot here!",
        completeStatus: true,
      },
    ];
    newToDoList.create('turn the heating on!');
    newToDoList.create("it's wayy too hot here!");
    newToDoList.toggleStatusTrue(2);
    const result = newToDoList.getAll();
    expect(result).toEqual(expected);
  });
  it('sort all todo items that are complete', () => {
    const newToDoList = new toDoList();
    const expected = [
      {
        id: 1,
        description: 'turn the heating on!',
        completeStatus: true,
      },
      {
        id: 3,
        description: "it's wayy too hot here!",
        completeStatus: true,
      },
    ];
    newToDoList.create('turn the heating on!');
    newToDoList.create('turn the heating off please!');
    newToDoList.create("it's wayy too hot here!");
    newToDoList.create("guy's i'm a bit cold");
    newToDoList.toggleStatusTrue(1);
    newToDoList.toggleStatusTrue(3);
    const result = newToDoList.sortByStatus(true);
    expect(result).toEqual(expected);
  });
  it('sort all todo items that are incomplete', () => {
    const newToDoList = new toDoList();
    const expected = [
      {
        id: 2,
        description: 'turn the heating off please!',
        completeStatus: false,
      },
      {
        id: 4,
        description: "guy's i'm a bit cold",
        completeStatus: false,
      },
    ];
    newToDoList.create('turn the heating on!');
    newToDoList.create('turn the heating off please!');
    newToDoList.create("it's wayy too hot here!");
    newToDoList.create("guy's i'm a bit cold");
    newToDoList.toggleStatusTrue(1);
    newToDoList.toggleStatusTrue(3);
    const result = newToDoList.sortByStatus(false);
    expect(result).toEqual(expected);
  });
  it('sort all todo items that by search', () => {
    const newToDoList = new toDoList();
    const expected = [
      {
        id: 3,
        description: "it's wayy too hot here!",
        completeStatus: true,
      },
    ];
    newToDoList.create('turn the heating on!');
    newToDoList.create('turn the heating off please!');
    newToDoList.create("it's wayy too hot here!");
    newToDoList.create("guy's i'm a bit cold");
    newToDoList.toggleStatusTrue(1);
    newToDoList.toggleStatusTrue(3);
    const result = newToDoList.searchToDoItem(3);
    expect(result).toEqual(expected);
  });
});
