import React, { useState } from 'react' 
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';


import '../02-userEffect/effects.css'

export const RealExampleUseRef = () => { 

    const [show, setShow] = useState(false);

    const handleShowing = () => {
        setShow( !show );
    }

    return ( 
       <div> 
          <h1> RealExampleUseRef </h1> 
          <hr /> 

          { (show) && <MultipleCustomHooks />}

          <button 
            className="btn btn-primary mt-3"
            onClick={ handleShowing }
          > Show it </button>
       </div> 

   ); 
} 
