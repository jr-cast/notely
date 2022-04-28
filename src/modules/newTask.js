const input = document.getElementById('input');

export const addNew = input.addEventListener('keydown', (evt) => {
  let name = evt.key;
  let code = evt.code;

  if (name === 'Enter' && code === 'Enter') {
    todos.push(input.value);
  }
});



