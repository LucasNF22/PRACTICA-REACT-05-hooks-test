import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        console.log(inputRef);
        inputRef.current.select();
    }


    return (
        <>
            <div>Focus Screen</div>
            <hr />

            <input
                ref= { inputRef }
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <button 
                className="btn btn-warning mt-4"
                onClick={ onClick }
            >
            Set Focus</button>
        </>
    );
};
