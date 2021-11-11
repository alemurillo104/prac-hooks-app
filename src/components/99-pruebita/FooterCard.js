import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faCoffee, faHome, faEnvelope, faPhone, faPrint } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFacebook, faTwitter, faInstagram, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faUser, faCoffee);

export const FooterCard = () => {
    return (
        <div>
           <FontAwesomeIcon icon="user" />
           <FontAwesomeIcon icon="coffee" />
           <FontAwesomeIcon icon={faGithub} style={{ width: 80, height: 80 }} />
            <footer className="text-center text-lg-start bg-light text-muted">
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
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
                                    <i className="fas fa-gem me-3"></i>Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Angular</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">React</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Vue</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Laravel</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p> <FontAwesomeIcon icon={faHome} /> New York, NY 10012, US</p>
                                <p>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    info@example.com
                                </p>
                                <p> <FontAwesomeIcon icon={faPhone} /> + 01 234 567 88</p>
                                <p> <FontAwesomeIcon icon={faPrint} /> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4" style={{ backgroundColor: "black" }}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </div>
    )
}
