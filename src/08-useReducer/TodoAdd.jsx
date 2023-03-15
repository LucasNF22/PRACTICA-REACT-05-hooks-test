import React from "react";
import { useForm } from "../hooks/useForm";


const icSuma = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
               </svg>


export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = ( e ) => {
        e.preventDefault();
        if(description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo( newTodo );
        onResetForm();

    }


    return (
        <>
            <form onSubmit={ onFormSubmit }>
                <input
                    type="text"
                    placeholder="¿Que hay que hacer?"
                    className="form-control"
                    name="description"
                    value={ description }
                    onChange={ onInputChange }              
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary m-0 mt-2 "
                >
                    {icSuma} Agregar
                </button>
            </form>
        </>
    );
};
