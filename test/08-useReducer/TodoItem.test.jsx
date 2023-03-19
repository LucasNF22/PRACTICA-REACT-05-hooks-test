import { act, fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en TodoItem', () => {

    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() ); // Limpia los mocks antes de cada test


    test('Debe mostrar el TODO pendiente', () => {
        
        render( 
            < TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock }
            /> 
        );

        const liElement = screen.getByRole( 'listitem' );
        const divElement = screen.getByLabelText('nombreTodo')
        // console.log( liElement.innerHTML );
        // console.log( divElement.className );

        expect( liElement.className ).toBe( 'list-group-item d-flex justify-content-between' );
        expect( divElement.className ).toContain( 'margin-l' );
        expect( divElement.className ).not.toContain( 'text-decoration-line-through' );

    });

    test('Debe mostrar el TODO Completado', () => {

        todo.done= true
        
        render( 
            < TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock }
            /> 
        );

        const divElement = screen.getByLabelText('nombreTodo');
        // console.log( divElement.className );

        expect( divElement.className ).toContain( 'text-decoration-line-through' );

    });

    test('El input debe llamar al toggleTodo con el click', () => {

        render( 
            < TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock }
            /> 
        );

        const inputElement = screen.getByLabelText('input');
        fireEvent.click( inputElement );
        expect( onToggleTodoMock ).toHaveBeenCalled();
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );

    });

    test('El input debe llamar al deleteTodo con el click', () => {

        render( 
            < TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock }
            /> 
        );

        const buttonElement = screen.getByRole('button');
        console.log();
        fireEvent.click( buttonElement );
        expect( onDeleteTodoMock ).toHaveBeenCalled();
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

    })

});