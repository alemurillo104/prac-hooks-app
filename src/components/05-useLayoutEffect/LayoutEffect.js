
import React, { useLayoutEffect, useRef } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

export const LayoutEffect = ( ) => {
    
    const { counter, increment } = useCounter(1);
    
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0];
  

    const pTag = useRef();

    useLayoutEffect(() => {
        
        console.log('heyy');
    }, [])
       
    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr/>

            <blockquote className="blockquote text-end" >
                <p 
                    className="mb-0" 
                    style={{ paddingBottom:13 }} 
                    ref={ pTag }
                > { quote } </p>
            </blockquote>

            <button className="btn btn-primary" onClick={ increment } > Next quote </button>

        </div>
    )
}
