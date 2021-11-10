import React from 'react'
import { Form } from './Form'

import BackgroundImage from '../../assets/img/backgroundForm.png'

import './formCard.css'

export const FormCard = () => {
    return (
        <div>
        {/* <div style={{ padding:20 }}> */}
            {/* <img src={BackgroundImage} style={{ width: 100, padding: 10 }} alt="Logo" /> */}
            <div className="containerNew" > 
            {/* <div className="container" style={{ backgroundImage: BackgroundImage  }}>  */}
                <div className="card">
                    <p 
                        className="text-center text-uppercase font-weight-bold" 
                        style={{ paddingTop:15 }}
                    > 
                        <strong>Formulario de Registro</strong>
                    </p>
                    <Form />
                </div>
            </div>
        </div>
    )
}
