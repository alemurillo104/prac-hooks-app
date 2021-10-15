import React, { useEffect } from 'react'

import './effects.css'


export const SimpleForm = () => {
    
    useEffect( ( ) => {
        fetch("https://random-recipes.p.rapidapi.com/ai-quotes/10", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "random-recipes.p.rapidapi.com",
                "x-rapidapi-key": "my-api-key"
            }
        })
        .then(response => response.json().then( console.log )
        )
        .catch(err => {
            console.error(err);
        });
    })


  

    //useEffect permite ejecutar algun efecto secundario, cuando algo suceda en nuestros componentes



    return (
        <>
         <h1>useEffect</h1>   
         <hr/>


        </>
    )
}
