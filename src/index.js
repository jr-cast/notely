import { remove } from 'lodash';
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

  updateIndex() {
    for (let i = 0; i < this.List.length; i++) {
      this.List[i].index = i + 1;
      const stringData = JSON.stringify(this.List);
      localStorage.setItem('todoList', stringData);
      this.UpdateList();
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
    todos.UpdateList();
  }
});

// display items
const listItems = () => {
  for (let i = 0; i < todos.List.length; i += 1) {
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = `check${i}`
    const item = document.createElement('div');
    item.id = `item${i}`;
    const task = document.createElement('input');
    task.className = 'task';
    task.id = `task${i}`;
    task.value = todos.List[i].description;
    item.classList.toggle('item');
    item.append(checkBox);
    item.append(task);
    const str = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    const icon = document.createElement('i');
    icon.id = `icon${i}`;
    icon.innerHTML = str;
    item.append(icon);
    let str2 = '<i class="fa-light fa-x"></i>';
    let trashCan = document.createElement('i');
    trashCan.className = 'delete';
    trashCan.id = `trash${i}`;
    trashCan.innerHTML = str2;
    trashCan.classList.add('hidden');
    item.append(trashCan);
    const todo = document.getElementById('todolist');
    todo.append(item);
  }
};

listItems();

// add remove icon to item 
let removeItem = document.getElementsByClassName('item');
for (let i = 0; i < removeItem.length; i += 1) {
  removeItem[i].addEventListener('mouseover', () => {
    document.getElementById(`trash${i}`).classList.remove('hidden');
    document.getElementById(`icon${i}`).classList.add('hidden');
  });
}
// remove remove icon from item 
let removedX = document.getElementsByClassName('item');
for (let i = 0; i < removedX.length; i += 1) {
  removedX[i].addEventListener('mouseout', () => {
    let trashCan = document.createElement('i');
    document.getElementById(`trash${i}`).classList.add('hidden');
    document.getElementById(`icon${i}`).classList.remove('hidden');
  });
};

// add event listener to X button
let xBtns = document.getElementsByClassName('delete');
for (let i = 0; i < todos.List.length; i++) {
  let description = todos.List[i].description;
  let deletedItem = document.getElementById(`item${i}`);
  xBtns[i].addEventListener('click', () => {
    const filtered = todos.List.filter((items) => items.description !== description);
    const stringData = JSON.stringify(filtered);
    localStorage.setItem('todoList', stringData);
    todos.UpdateList();
    deletedItem.remove();
    todos.updateIndex();
  });
};


// remove items from localstorage
for (let i = 0; i < todos.List.length; i += 1) {
  document.getElementById(`check${i}`).addEventListener('change', () => {
    if (todos.List[i].completed === false) {
      todos.List[i].completed = true;
    } else if (todos.List[i].completed === true) {
      todos.List[i].completed = false;
    }
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
