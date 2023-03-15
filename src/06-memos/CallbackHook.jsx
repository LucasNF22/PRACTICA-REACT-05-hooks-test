import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    const incrementarFather = useCallback(
        (value)=>{
            setCounter( (count) => count + value )
        },
        [],
    )
        

  return (
    <>
        <div>useCallback Hook: { counter } </div>
        <hr />

        <ShowIncrement increment={ incrementarFather } />
    
    
    </>
  )
}
