import { Todo } from '../classes';
import { todoList } from '../index';

// HTML
const divTodoList = document.getElementById('todo-list');
const divNewTodo  = document.getElementById('new-todo');

export const createTodoHTML = ( todo ) => {

    const htmlTodo = `
    <li class="${ ( todo.completed ) ? 'completed': '' }" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ ( todo.completed ) ? 'checked': '' }>
            <label>${ todo.task }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;
}

// Events
divNewTodo.addEventListener('keyup', ( event ) => {

    if( event.keyCode === 13 && divNewTodo.value.length > 0 ) {
        const newTask = new Todo( divNewTodo.value );
        todoList.newTodo( newTask );

        createTodoHTML( newTask );
        divNewTodo.value = '';
    }

});

divTodoList.addEventListener('click', ( event ) => {
    const nameElement  = event.target.localName;
    const todoElement  = event.target.parentElement.parentElement;
    const todoId       = todoElement.getAttribute('data-id');
    
    if( nameElement.includes('input') ) {
        todoList.checkCompleted( todoId );
        todoElement.classList.toggle('completed');

    } else if( nameElement.includes('button') ) {
        todoList.deleteTodo( todoId );
        divTodoList.removeChild( todoElement );
    }

});