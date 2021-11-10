import React from 'react'

import UserLogo from '../../assets/img/userlogo.png';
// import UserLogo from '../assets/img/userlogo.png'

export const CardImage =  ( 
    {   
        srcImage = UserLogo ,
        title    = "Default title", 
        textBody    = "Default text body", 
        btnTitle = "Click me", 
        imgSize  = 200,
        onClickButton = () => console.log('clicking button')
    } ) => {

    return (
        <div>
             <div className="card" style={{ width: imgSize }} >
                <img src={srcImage} className="card-img-top" style={{ width: imgSize - 10, padding: 10 }} alt="Logo" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{textBody}</p>
                    <button 
                        className="btn btn-primary"
                        onClick={onClickButton}
                    >{btnTitle}</button>
                </div>
            </div>
        </div>
    )
}
