import React from 'react'

import './prueba.css'


export const Prueba = ( { src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_K-LOrpiJ8PLzDfc_xi98jJ8bs7-TXAi2g&usqp=CAU", 
                          title="Default title", 
                          texto="Default text body", 
                          btnTitle="Click me", 
                          imgSize=250 
                        } ) => {

    return (
        <div>
            <h1>Omg</h1>
            <hr />
            <div className="card" style={{ width: imgSize }} >
                <img src={src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{texto}</p>
                    <a href="#" className="btn btn-primary">{btnTitle}</a>
                </div>
            </div>

            {/* <div className="card" >
                <div className="card-header" >Holiwis</div>
                <div className="card-body" >Body Holiwis</div>
            </div> */}
        </div>
    )
}
