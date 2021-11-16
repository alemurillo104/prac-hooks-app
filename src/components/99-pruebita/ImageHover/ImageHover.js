import React from 'react'


import './imagehover.css'

export const ImageHover = () => {
    return (
        <div>
            <div className="row md-6">
                <div className="col md-4">
                    <img  src="/images/p1.png"  />
                    {/* <img src="/images/p1.png" ><span>some text here ?</span></img> */}
                    <span>omg</span>
                </div>
                <div className="col md-4">
                    <img  src="/images/p22.png"  />
                    <span>omg1</span>
                </div>
                <div className="col md-4">
                    <img  src="/images/p4.png"  />
                    <span>omg2</span>
                </div>
                <p>Hover here<span>some text here ?</span></p>
            </div>
        </div>
    )
}
