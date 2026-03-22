import React, { useState, useRef } from "react";

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
                    <img src="/images/built0.avif" alt="Built Websites" width={300} onClick={trans1} className="radius"/>
                    <p className="one">CLASSIFIED LISTING</p>
                </div>
                <div className="col-md-4 move">
                    <img src="/images/built33.avif" alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">CLASSIFIED LISTING THREE</p>
                </div>
                <div className="col-md-4 move">
                    <img src="/images/built32.avif" alt="Built Websites" width={300} onClick={trans1} className="radius"/>
                    <p className="one">CLASSIFIED LISTING FOUR</p>
                </div>
            </div>
            <div className="row container ms-5 pt-4 mt-4">
                <div className="col-md-4 move">
                    <img src="/images/built43.avif" alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">CLASSIFIED LISTING TWO</p>
                </div>

            </div>

        </div>
    )
}
export default Classified