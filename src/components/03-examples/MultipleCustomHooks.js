
import React from 'react'
import { useFetch } from '../../hooks/useFetch'

import '../02-userEffect/effects.css'

export const MultipleCustomHooks = ( ) => {
    



    const { data, error, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    console.log(data);

    const { author, quote } = !!data && data[0];

    console.log( author, quote );
    
    return (
        <div>
            <h1>Breaking Bad Quotes!!!</h1>
            <hr/>

            { 
              (loading) 
              ? 
                ( 
                    <div className="alert alert-info text-center"> 
                        Loading...
                    </div> 
                )
              : 
                (
                    <blockquote className="blockquote text-end" >
                        <p className="mb-0" style={{ paddingBottom:13 }} > { quote } </p>
                <footer className="blockquote-footer"> { author } </footer>
                    </blockquote>
                )
            }


            { 
                (data != null)  
                ? 
                    (
                        data.forEach( ({ quote }) => {
                            // <p>{quote}</p>
                            console.log('omg');
                            console.log(quote);
                            return <p>quote</p>
                        })
                    )
                
                : (console.log('no tiene data'))
            
            }
            {/* { state.data?.forEach(({ quote }) => {
                // console.log(quote)
                <p>{quote}</p>
            })} */}
        </div>
    )
}
