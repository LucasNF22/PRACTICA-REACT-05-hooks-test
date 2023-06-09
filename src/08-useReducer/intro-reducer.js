

const initialState = [{
    id: 1,
    todo: 'Recolectar la gema del Alma',
    done: false
}];

const todoReducer = ( state = initialState, action = {} ) => {

    if( action.type === '[TODO] add todo' ){
        return [ ...state, newTodo ]
    }


    return state;
};


let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la gema de la mente',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction );



console.log( {state: todos} );