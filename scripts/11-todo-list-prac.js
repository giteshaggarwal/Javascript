const todoList=[];

function addTodo(){
const inputElement = document.querySelector('.js-name-inputt')

const namee = inputElement.value;

todoList.push(namee);

console.log(todoList);

inputElement.value = '';
};
