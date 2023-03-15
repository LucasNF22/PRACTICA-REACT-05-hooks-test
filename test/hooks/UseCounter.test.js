import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";


describe('Pruebas en el UserCounter', () => {
    
    test('debe retornar los valores por defecto', () => {

        const { result } = renderHook( () => useCounter() );  // asi se renderiza un hook
        const { counter, increment, decrement, reset } = result.current;

        expect( counter ).toBe(10);
        expect( increment ).toEqual( expect.any( Function ) );
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );    

    });

    test('Debe retornar un valor de 100', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect( counter ).toBe(100);

    });

    test('Debe de increment el contador', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter, increment } = result.current;

        act( () => {
            increment();           
            increment(2);           
        });

        expect( result.current.counter ).toBe( 103 );
    });

    test('Debe de increment el contador', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement } = result.current;

        act( () => {
            decrement();           
            decrement(2);           
        });

        expect( result.current.counter ).toBe( 97 );
    });

    test('Debe de resetear el contador', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter, reset, increment } = result.current;

        act( () => {
            increment(100)
            reset();                     
        });

        expect( result.current.counter ).toBe( 100 );
    });

});