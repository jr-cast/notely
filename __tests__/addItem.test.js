import TodosList from "../src/modules/todosListClass";
import Item from "../src/modules/itemClass"

const todos = new TodosList();
todos.List = [
  {
    description: "Go to the Gym",
    completed: false,
    index: "1"
  },
  {
    description: "Take Dog Out",
    completed: false,
    index: "2"
  },
  {
    description: "LOL",
    completed: false,
    index: "3"
  }];

document.body.innerHTML = '<div class="wrapper">'
  + '<div id="todolist">'
  + '<div id="heading">'
  + '<h3>Today\'s To Do</h3>'
  + '<i class="fa-solid fa-rotate"></i>'
  + '</div>'
  + '<form id="inputForm">' + '<input id="input" type="text" placeholder="Add to your list..." required>'
  + '<i class="fa-solid fa-floppy-disk"></i>'
  + '</form>'
  + '</div >'
  + '<div id="clear"><a id="clearA" href="#clear">Clear all completed</a></div>'
  + '</div >';

describe('Add items', () => {
  test('Display items stored in localStorage', () => {
    document.body.innerHTML;
    const input = document.getElementById('input');
    todos.listItems();
    const items = document.getElementsByClassName('task');
    expect(items.length).toBe(3);;
  });

  test('Add item when Enter key is pressed', () => {
    document.body.innerHTML;
    const input = document.getElementById('input');
    input.value = 'IT WORKS!!';
    Event.code = 'Enter';
    let stringData = JSON.stringify(todos.List);
    let listedItem;
    input.addEventListener('keydown', (evt) => {
      if (evt.code === 'Enter') {
        listedItem = new Item();
        listedItem.description = input.value;
        listedItem.index = `${todos.List.length + 1}`;
        todos.List.push(listedItem);
        stringData = JSON.stringify(todos.List);
        localStorage.setItem('todoList', stringData);
        todos.UpdateList();
      }
    });
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter' }));
    expect(input.value).toBe('IT WORKS!!');
    expect(todos.List).toHaveLength(4);
  });
});
