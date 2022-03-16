import './style.css';

import { Todo, TodoList } from './classes';
import { createTodoHTML } from './js/components';

export const todoList = new TodoList();
const task = new Todo('Aprender JS');

todoList.newTodo(task);
console.log(todoList);

createTodoHTML( task );