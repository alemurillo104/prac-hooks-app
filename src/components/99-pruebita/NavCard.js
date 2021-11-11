import React from 'react'

import './navcard.css'

export const NavCard = () => {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-black" >
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light" > */}
                <a className="navbar-brand" href="/#" >MISTER CAR</a>       

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNavDropdown" 
                    aria-controls="navbarNavDropdown" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav  mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">Inicio <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Contáctanos</a>
                        </li>
                       
                    </ul>
                    <ul className="navbar-nav ml-auto" >
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle" 
                                href="/#" 
                                id="navbarDropdownMenuLink" 
                                data-toggle="dropdown" 
                                // aria-haspopup="true" 
                                aria-expanded="false"
                            >
                                Usuario Usuario Usuario
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/#">Perfil</a>
                                <a className="dropdown-item" href="/#">Dashboard</a>
                                <a className="dropdown-item" href="/#">Cerrar Sesión</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )

    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
    //     <a className="navbar-brand" href="/#">Navbar</a>
    //     <ul className="navbar-nav mr-auto">
    //         <li className="nav-item active">
    //             <a className="nav-link">Left Link 1</a>
    //         </li>
    //         <li className="nav-item">
    //             <a className="nav-link">Left Link 2</a>
    //         </li>
    //     </ul>
    //     <ul className="navbar-nav ml-auto">
    //         <li className="nav-item">
    //             <a className="nav-link">Right Link 1</a>
    //         </li>
    //         <li className="nav-item dropdown">
    //             <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">            Dropdown on Right</a>
    //             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //                 <a className="dropdown-item" href="/#">Action</a>
    //                 <a className="dropdown-item" href="/#">Another action with a lot of text inside of an item</a>
    //             </div>
    //         </li>
    //     </ul>
    // </nav>
}
