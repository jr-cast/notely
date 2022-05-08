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

describe('Delete 1 item', () => {
  test('Delete a single item from list', () => {
    document.body.innerHTML;
    todos.listItems();
    const xBtns = document.getElementsByClassName('delete');
    for (let i = 0; i < xBtns.length; i++) {
      xBtns[i].click();
      todos.removeItem();
    }
    const items = document.getElementsByClassName('task');
    expect(items.length).toBe(1);;
  });

  test('Deletes only item in list!', () => {
    document.body.innerHTML;
    const xBtn = document.querySelector('.delete');
    xBtn.click();
    todos.removeItem();
    const items = document.getElementsByClassName('task');
    expect(items.length).toBe(0);
  });
});

