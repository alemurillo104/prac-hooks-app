import React from 'react'

import UserLogo from '../../assets/img/userlogo.png';
// import UserLogo from '../assets/img/userlogo.png'

export const CardImage =  ( 
    {   src="#",
    // {   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_K-LOrpiJ8PLzDfc_xi98jJ8bs7-TXAi2g&usqp=CAU", 
        title="Default title", 
        texto="Default text body", 
        btnTitle="Click me", 
        imgSize=200
    } ) => {

    return (
        <div>
             <div className="card" style={{ width: imgSize }} >
                <img src={UserLogo} className="card-img-top" style={{ width: imgSize - 10, padding: 10 }} alt="Logo" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{texto}</p>
                    <a href="/#" className="btn btn-primary">{btnTitle}</a>
                </div>
            </div>
        </div>
    )
}
