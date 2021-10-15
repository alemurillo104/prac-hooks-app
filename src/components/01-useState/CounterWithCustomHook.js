import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } =  useCounter( 100 );

    const factor = 5;

    return (
        <>
            <h1>Counter with Hook: { state } </h1>
            <hr />

            <button className="btn" onClick={ () => increment(factor) } > +1 </button>
            <button className="btn" onClick={ reset } > Reset </button>
            <button className="btn" onClick={ () => decrement(factor) } > -1 </button>
        </>
    )
}
