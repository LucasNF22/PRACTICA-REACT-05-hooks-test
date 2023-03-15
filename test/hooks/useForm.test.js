import { renderHook } from '@testing-library/react';
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
    

})