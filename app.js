// Este é o array que vai os itens a fazer (TODO)
let todoItems = [];

// Esta função vai criar um novo objeto tarefa(ToDo) baseado no
// texto que foi digitado no input text , e adiciona-lo dentro
// do array `todoItems` 
function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };
  
  todoItems.push(todo);
  console.log(todoItems);
}

  // Seleciona o elemento form
const form = document.querySelector('.js-form');
// Add o submit event listener
form.addEventListener('submit', event => {
  // evitar submissão com refresh
  event.preventDefault();
  // seleciona o input text
  const input = document.querySelector('.js-todo-input');

  // Pega o valor do input e remove espaços em branco
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
console.log(todoItems);
