import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter with Hook: { counter } </h1>

            <button 
                className="btn btn-secondary" 
                onClick={ () => increment( 2 ) } >
                +1
            </button>

            <button 
                className="btn btn-secondary"
                onClick={ reset } >
                reset
            </button>

            <button 
                className="btn btn-secondary"
                onClick={ () => decrement( 2 ) } >
                -1
            </button>
        </>
    );
};
