import { useState } from "react";

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue );

    const increment = ( value = 1 ) => {
        setCounter( (current) => current + value ); // Se modifico para poder hacer es test con un solo ACT
    };
    
    const decrement = ( value = 1 ) => {
        if( counter == 1 ) return; // usar el minimo segun sea necesario

        setCounter( (current) => current - value );
    };
    
    const reset = () => {
        setCounter( initialValue );
    };

    return{
        counter,
        increment,
        decrement,
        reset,
    };


};
