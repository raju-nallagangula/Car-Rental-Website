import React, { useState, useRef } from "react";
import img5 from './assets/images/built0.avif'
import img11 from './assets/images/built33.avif'
import img12 from './assets/images/built32.avif'
import img15 from './assets/images/built43.avif'
import { useLocation } from "react-router-dom";

const Classified =()=> {

    const trans = () => {
        navigate("/Cardealership");
      };
      const trans1 = () => {
        navigate("/ClassifiedList");
      };
 
    const classifiedRef = useRef(null)
    const location = useLocation()

    if(location.state?.scrollToClassified === "classified" && classifiedRef.current){
        classifiedRef.current.scrollIntoView({behavior: "smooth"})
    }

    return (
        <div ref={classifiedRef}> 
            <div className="row container ms-4 mt-3">
                <div className="col-md-4 move">
                    <img src={img5} alt="Built Websites" width={300} onClick={trans1} className="radius"/>
                    <p className="one">CLASSIFIED LISTING</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img11} alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">CLASSIFIED LISTING THREE</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img12} alt="Built Websites" width={300} onClick={trans1} className="radius"/>
                    <p className="one">CLASSIFIED LISTING FOUR</p>
                </div>
            </div>
            <div className="row container ms-5 pt-4 mt-4">
                <div className="col-md-4 move">
                    <img src={img15} alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">CLASSIFIED LISTING TWO</p>
                </div>

            </div>

        </div>
    )
}
export default Classified