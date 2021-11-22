import React from 'react'

export const Small =  React.memo(( { value } ) => {

    console.log( 'omg' );

    return (
        <small>
             { value } 
        </small>
    )
})
