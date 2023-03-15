
import React, { useEffect, useState } from 'react'
import { Menssage } from './Menssage';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'lucas',
        email: 'lucas@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [ name ]: value
        });
    };


    useEffect(() => {
    //   console.log('use effect called');
    
    }, [])
    
    useEffect(() => {
    //   console.log('formState change');
    
    }, [formState])
    
    useEffect(() => {
    //   console.log('email change');
    
    }, [email])
    
    

    
  return (
    <>
        <h1>Formulario Simple</h1>

        <input 
            type="text" 
            className='form-control mt-2'
            placeholder='Username'
            name='username'
            value={ username }
            onChange= { onInputChange }
        />
        
        <input 
            type="email" 
            className='form-control mt-2'
            placeholder='email@gmail.com'
            name='email'
            value={ email }
            onChange= { onInputChange }
        />
        {
          username === 'lucas' && <Menssage />

        }
        
        
    </>
  )
}
