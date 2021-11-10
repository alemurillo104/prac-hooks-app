import React, { useEffect, useState } from 'react'

export const Message = () => {


    const [coors, setCoors] = useState({ x: 0, y: 0 });

    const { x, y } = coors;

    useEffect(() => {
        
        // console.log('componente montado')

        const mouseMove = (e) => {
            setCoors( {
                x: e.x,
                y: e.y
            });
        }

        window.addEventListener( 'mousemove', mouseMove )
        
        return () => {
            window.removeEventListener( 'mousemove', mouseMove )
        }
    }, [])

    return (
        <div>
            <h3>Eres genial!</h3>
            <p> x: { x } y: { y }</p>
        </div>
    )
}