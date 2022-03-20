import { Todo } from "./todo.class";

export class TodoList {

    constructor() {

        this.loadLocalStorage();

    }

    // Create
    newTodo( todo ) {
        this.todos.push(todo);
        this.saveLocalStorage();
    }

    // Delete
    deleteTodo( id ) {
        this.todos = this.todos.filter( todo => todo.id != id );
        this.saveLocalStorage();
    }

    deleteCompletes() {
        
        this.todos = this.todos.filter( todo => !todo.completed );
        this.saveLocalStorage();

    }

    // Update
    checkCompleted( id ) {

        for( const todo of this.todos ) {

            if( todo.id == id ) {
                todo.completed = !todo.completed;
                this.saveLocalStorage();
                break;
            }
        }
    }

    // Save
    saveLocalStorage() {

        localStorage.setItem('todo', JSON.stringify( this.todos ));

    }

    loadLocalStorage() {
        
        this.todos = ( localStorage.getItem('todo') ) ? 
                    JSON.parse( localStorage.getItem('todo') ) 
                    : [];

        this.todos = this.todos.map( Todo.fromJSON );

    }


}