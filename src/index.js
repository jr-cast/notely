import './style.css';
import todos from './modules/todosObject.js';

const listItems = () => {
  for (let i = 0; i < todos.length; i += 1) {
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    const item = document.createElement('div');
    item.innerHTML = todos[i].description;
    item.classList.toggle('item');
    item.prepend(checkBox);
    const todo = document.getElementById('todolist');
    todo.append(item);
  }
};

listItems();
