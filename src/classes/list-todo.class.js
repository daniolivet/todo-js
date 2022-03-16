export class TodoList {

    constructor() {

        this.todos = [];

    }

    // Create
    newTodo( todo ) {
        this.todos.push(todo);
    }

    // Delete
    deleteTodo( id ) {
        this.todos = this.todos.filter( todo => todo.id != id );
    }

    deleteCompletes() {

    }

    // Update
    checkCompleted( id ) {

        for( const todo of this.todos ) {

            if( todo.id == id ) {
                todo.completed = !todo.completed;
                break;
            }
        }
    }



}