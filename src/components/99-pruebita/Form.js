import React from 'react'

import './form.css'

export const Form = () => {
    return (
        <form style={{ padding: 15}}>
            
            <div className="mb-3">
                <label htmlFor="ci" className="form-label">
                   <strong>Carnet de Identidad (CI):</strong> 
                </label>
                <input type="ci" name="ci" className="form-control" id="ci" aria-describedby="ciHelp" />
                <div id="ciHelp" className="form-text">Ejm.: 12345678</div>
            </div>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    <strong>Nombre:</strong>
                </label>
                <input type="name" name="name" className="form-control" id="name" aria-describedby="nameHelp" />
                <div id="nameHelp" className="form-text">Ejm.: Andy Perez</div>
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    <strong>Email:</strong>
                </label>
                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">Ejm.: aperez@gmail.com</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    <strong>Contraseña:</strong>
                </label>
                <input type="password" className="form-control" id="password" />
            </div>
            
            <div className="mb-3">
                <label htmlFor="cellphone" className="form-label">
                    <strong>Celular:</strong>
                </label>
                <input type="cellphone" name="cellphone" className="form-control" id="cellphone" aria-describedby="cellphoneHelp" />
                <div id="cellphoneHelp" className="form-text">Ejm.: 71234567</div>
            </div>
           

            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Si acepto los términos y condiciones del sistema</label>
            </div>
            <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
    )
}
