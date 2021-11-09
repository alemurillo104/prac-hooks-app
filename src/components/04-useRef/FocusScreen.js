import React, { useRef } from 'react'

import '../02-userEffect/effects.css'


export const FocusScreen = () => {

    const inputRef = useRef();
    // console.log(inputRef);

    const handleClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
        console.log(`inputRef`, inputRef)
    }

    return (
        <div>
            <h1>Hola mundo</h1>
            <hr />

            <input 
                ref={ inputRef }
                className="form-control"
                placeholder="Su nombre"
            />

            <button 
                className="btn btn-outline-primary mt-3" 
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}
