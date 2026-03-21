import React, { useEffect, useRef, useState } from "react";
import img6 from './assets/images/built2.avif'
import img7 from './assets/images/built11.avif'
import img13 from './assets/images/buitl41.avif'
import img18 from './assets/images/built53.avif'
import { useLocation } from "react-router-dom";

 const Rental = ()=> {

    const rentalRef = useRef(null)
    const location = useLocation()

    useEffect(() => {
        if(location.state?.scrollToRental === "rental" && rentalRef.current){
            rentalRef.current.scrollIntoView({behavior: "smooth"})
        }
    },[location])
   
    const trans = () => {
        navigate("/Cardealership");
      };
      const trans1 = () => {
          navigate("/ClassifiedList");
        };
    

    return (
        <div ref={rentalRef}>
            <div className="row container ms-4 mt-3">
                <div className="col-md-4 move">
                    <img src={img6} alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">AUTO RENTAL</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img7} alt="Built Websites" width={300} onClick={trans1} className="radius"/>
                    <p className="one">AUTO RENTAL TWO</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img13} alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">AUTO RENTAL TWO</p>
                </div>
            </div>
            <div className="row container ms-5 pt-4 mt-4">
                <div className="col-md-4 move">
                    <img src={img18} alt="Built Websites" width={300} onClick={trans1} className="radius"/>
                    <p className="one">AUTO PARTS SHOP</p>
                </div>

            </div>

        </div>
    )
}
export default Rental