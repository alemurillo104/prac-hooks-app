import React from 'react'

import './inputs.css'

export const LoginForm = (
    { 
        loginFormSubmit = () => console.log('help')
    }) => {
    return (
        <div>
          
            <div className="col-sm-12 col-md-6 col-lg-4 container maxCard">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title text-uppercase text-center">
                            <strong>Iniciar Sesion</strong>
                        </div>
                        <div className="card-text">
                            <div className="md-4 mb-2">
                                <label htmlFor="email" className="form-label"> 
                                    <strong>Email:</strong>
                                </label>
                                <input name="email" type="text" className="form-control" id="email" />
                            </div>
                            <div className="md-4 mb-2">
                                <label htmlFor="password" className="form-label"> 
                                    <strong>Contraseña:</strong>
                                </label>
                                <input name="password" type="password" className="form-control" id="password" />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <button className="btn btn-primary float-end" type="button" id="toright" onClick={ loginFormSubmit }>Iniciar Sesion</button>
                        <button className="btn btn-light float-end" type="button" id="more">Atras</button>
                    </div>

                </div>
            </div>
       </div>
    )
}
