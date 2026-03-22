import React, { useEffect, useRef} from "react";

import { useLocation } from "react-router-dom";

  const Dealership = () => {
    const dealerRef = useRef(null)
    const location = useLocation()
  
  useEffect(() =>{
    if(location.state?.scrollTo === "dealer" && dealerRef.current){
        dealerRef.current.scrollIntoView({behavior: "smooth"})
    }
  },[location])
  
    return (
        <div ref={dealerRef}>
            <div  className="row container ms-4 mt-3">
                <div className="col-md-4 move">
                    <img src="/images/built1.avif" alt="Built Websites" width={300} className="radius"/>
                    <p className="one">CAR DEALERSHIP ONE</p>
                </div>
                <div className="col-md-4 move">
                    <img src="/images/built30.avif" alt="Built Websites" width={300} className="radius"/>
                    <p className="one">CAR DEALERSHIP TWO</p>
                </div>
                <div className="col-md-4 move">
                    <img src="/images/built42.avif" alt="Built Websites" width={300} className="radius"/>
                    <p className="one">MOTORCYCLE DEALER</p>
                </div>
            </div>
            <div className="row container ms-5 pt-4 mt-4">
                <div className="col-md-4 move">
                    <img src="/images/built61.avif'" alt="Built Websites" width={300} className="radius"/>
                    <p className="one">BOAT DEALERSHIP</p>
                </div>
                <div className="col-md-4 move">
                    <img src="/images/built62.avif" alt="Built Websites" width={300} className="radius"/>
                    <p className="one">CAR MAGAZINE</p>
                </div>
                <div className="col-md-4 move">
                    <img src="assets/images/built63.avif" alt="Built Websites" width={300} className="radius"/>
                    <p className="one">RTL CAR DEALERSHIP</p>
                </div>
            </div>

        </div>
    )
}

export default Dealership