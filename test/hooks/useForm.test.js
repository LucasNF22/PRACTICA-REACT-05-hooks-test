import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en UseForm', () => {

    const initialForm ={

        name: 'Lucas',
        email: 'lucas@correo.com'
    }
    
    test('Debe retornar los valores por defecto', () => {
        
        const { result } = renderHook( () => useForm( initialForm ) );
       expect(result.current).toEqual( {
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm:  expect.any( Function ),
      });
        
    })
    
    
    test('Debe cambiar el nombre del formulario', () => {

        const newValue = 'Lucas'
        //montar el hook
        // onInputChange // act.evnt..
        //expect, result.current.name = Lucas
        //expect, result.current.formState.name = Lucas

        const { result } = renderHook( () => useForm( initialForm ))
        const { onInputChange } = result.current;
        
        act( () => {
           onInputChange( { target: { name: newValue } } );           
        });



        expect( result.current.name ).toBe( newValue );
        expect( result.current.formState.name ).toBe( newValue );

    });

    test('Debe realizar el reset del formulario', () => {

        const newValue = 'Lucas'
    
        const { result } = renderHook( () => useForm( initialForm ))
        const { onInputChange, onResetForm } = result.current;
        
        act( () => {
            onInputChange( { target: { name: newValue } } );
            onResetForm();           
        });

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );

    });

})