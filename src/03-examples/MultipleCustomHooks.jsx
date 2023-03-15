import React from "react";
import { useCounter, useFetch,  } from '../hooks';
// import { PokemonCard } from "./PokemonCard";
// import { LoadingComponent } from "./LoadingComponent";

import { LoadingComponent, PokemonCard } from './';



export const MultipleCustomHooks = () => {

    
    const pokeId = 1;  

    const { 
        counter,
        increment,
        decrement,
        reset 
    } = useCounter( pokeId );

    // console.log( counter );
    
    const { data, isLoading, hasError } = useFetch( `https://pokeapi.co/api/v2/pokemon/${ counter }` );     
    const { id, name, types } = !!data && data
    const  urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;  
    const { type } = !!types && types[0]
       
    
    return (
        <>
            <h1>Pokemon - Api</h1>
            <hr />

            {
               isLoading 
               ? <LoadingComponent /> 
               : <PokemonCard 
                    urlImg={urlImg} 
                    name={name}
                    type={type}
               />           
            }

            <button 
            className="btn btn-primary mt-4"
            disabled= { isLoading }
            onClick={ ()=>decrement() } > Anterior </button>

            <button 
            className="btn btn-primary mt-4"
            disabled= { isLoading } 
            onClick={ ()=>increment() } > Siguiente </button>
            
            <button 
            className="btn btn-primary mt-4"
            disabled= { isLoading } 
            onClick={ ()=>reset() } > Reset </button>
            

        </>
    );
};
