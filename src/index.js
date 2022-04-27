import _ from 'lodash';
import './style.css';

const todos = [{
  description: 'Go to the Gym',
  completed: false,
  index: 0
}, {
  description: 'Take the dog out',
  completed: false,
  index: 1
}, {
  description: 'Play videogames',
  completed: false,
  index: 2
}];

const listItems = () => {
  for (let i = 0; i < todos.length; i++) {
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    const listItem = document.createElement('li');
    listItem.innerHTML = todos[i].description;
    listItem.id = `list${i}`;
    listItem.prepend(checkBox);
    const todo = document.getElementById('todolist');
    todo.append(listItem);
  }
}

listItems();
