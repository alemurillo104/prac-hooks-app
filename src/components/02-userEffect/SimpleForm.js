import React, { useEffect } from 'react'

import './effects.css'


export const SimpleForm = () => {


    //useEffect permite ejecutar algun efecto secundario, cuando algo suceda en nuestros componentes

    useEffect( ( ) => {
        fetch("https://random-recipes.p.rapidapi.com/ai-quotes/10", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "random-recipes.p.rapidapi.com",
                "x-rapidapi-key": "ef0e683726msh8e68d28784092acp195b8djsnc8a075bab5a3"
            }
        })
        .then(response => response.json().then( console.log )
        )
        .catch(err => {
            console.error(err);
        });
    })


    return (
        <>
         <h1>useEffect</h1>   
         <hr/>


        </>
    )
}
