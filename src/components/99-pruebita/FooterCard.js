import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faCoffee, faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFacebook, faTwitter, faInstagram, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faUser, faCoffee);

export const FooterCard = () => {
    return (
        <div>
            <footer className="text-center text-lg-start bg-light text-muted">
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                    <div className="me-5 d-none d-lg-block">
                        <span>Contáctanos en nuestras redes sociales:</span>
                    </div>
                    <div>
                        <a href="/#" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="/#" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="/#" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faGoogle} />
                        </a>
                        <a href="/#" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="/#" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="/#" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Mister Car
                                </h6>
                                <p>
                                    Un poco de información acerca de la empresa.
                                    Este es el cuerpo del párrafo en el footer.
                                </p>
                            </div>
                         
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contacto
                                </h6>
                                <p> <FontAwesomeIcon icon={faHome} /> Santa Cruz, Bolivia, BO</p>
                                <p>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    info@mistercar.com
                                </p>
                                <p> <FontAwesomeIcon icon={faPhone} /> + 591 71234567</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4" style={{ backgroundColor: "black" }}>
                    © 2021 Copyright: 
                    <a className="text-reset fw-bold" href="/#">_mistercar.com.bo</a>
                </div>
            </footer>
        </div>
    )
}
