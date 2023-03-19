import { todoReducer } from '../../src/hooks/todoReducer';

describe("Pruebas en todoreducer", () => {
    
    const initialState = [{
        id: 1,
        description: 'Demo tool',
        done: false,
    }];


    test("Debe retornar el valor inicial", () => {

        const newState = todoReducer( initialState, {} );
        expect( newState ).toBe( initialState );

    });

    test('Debe agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id:2,
                description: 'todo 2',
                done: false,
            }
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload )

    });

    test('Debe eliminar todo un TODO', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
            
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 0 );
        

    });

    test('Debe realizar el Toggle del todo', () => {
        
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
            
        };

        const newState = todoReducer( initialState, action );
        // console.log(newState);
        expect( newState.done ).toBeTruthy;

    })

});
