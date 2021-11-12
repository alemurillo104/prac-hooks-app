import React from 'react'

import './carrouselcard.css'

export const CarrouselCard = () => {
    return (
        <div>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="col-md-3 ml-md-auto">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                </div>

            <div className="carousel-inner">
                <div className="item active">
                    <img src="./images/01.png" alt="Los Angeles" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>

                <div className="item">
                <img src="./images/02.jpg" alt="Chicago" />
                </div>

                <div className="item">
                <img src="./images/03.jpg" alt="New York" />
                </div>
            </div>

            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
           
        </div>
    )
}
