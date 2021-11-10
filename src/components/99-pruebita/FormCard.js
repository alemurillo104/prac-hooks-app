import React from 'react'
import { Form } from './Form'

// import BackgroundImage from '../../assets/img/backgroundForm.png'

import './formCard.css'

export const FormCard = () => {
    return (
        <div className="containerNew" > 
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
    )
}
