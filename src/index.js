import './style.css';
// import todos from './modules/todosObject.js';
// import { addNew } from './modules/newTask.js';

class todosList {
  constructor() {
    this.List = [];
  }

  UpdateList() {
    if (localStorage.todoList) {
      this.List = JSON.parse(localStorage.todoList);
    }
  }
}

class item {
  constructor() {
    this.description = '';
    this.completed = false;
    this.index = `${index}`;
  }
}

let index = 0;
const todos = new todosList();
todos.UpdateList();

// add items to localstorage
const input = document.getElementById('input');
let stringData = JSON.stringify(todos.List);
let listedItem;
input.addEventListener('keydown', (evt) => {
  let code = evt.code;
  if (code === 'Enter') {
    listedItem = new item();
    listedItem.description = input.value;
    listedItem.index = `${todos.List.length + 1}`;
    todos.List.push(listedItem);
    stringData = JSON.stringify(todos.List);
    localStorage.setItem('todoList', stringData);
  }
});

// displayt items
const listItems = () => {
  for (let i = 0; i < todos.List.length; i += 1) {
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = `check${i}`
    const item = document.createElement('div');
    item.id = `item${i}`;
    const p = document.createElement('p');
    p.innerHTML = todos.List[i].description;
    item.classList.toggle('item');
    item.append(checkBox);
    item.append(p);
    const str = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    const icon = document.createElement('i');
    icon.innerHTML = str;
    item.append(icon);
    const todo = document.getElementById('todolist');
    todo.append(item);
  }
};

listItems();

// remove items from localstorage
let bool = false;
for (let i = 0; i < todos.List.length; i += 1) {
  document.getElementById(`check${i}`).addEventListener('change', () => {
    todos.List[i].completed = (bool = !bool);
  })
};

document.getElementById('clearA').addEventListener('click', () => {
  for (let i = 0; i < todos.List.length; i += 1) {
    const listedItem = document.getElementById(`item${i}`);
    const filtered = todos.List.filter((items) => items.completed === false);
    const stringData = JSON.stringify(filtered);
    localStorage.setItem('todoList', stringData);
    listedItem.remove();
    window.location.reload();
  };
});

// const clearBtn = document.getElementById('clearA');
// clearBtn.addEventListener('click', () => {
// });