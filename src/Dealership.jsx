import React, { useEffect, useRef} from "react";
import img4 from './assets/images/built1.avif'
import img10 from './assets/images/built30.avif'
import img14 from './assets/images/built42.avif'
import img19 from './assets/images/built61.avif'
import img20 from './assets/images/built62.avif'
import img21 from './assets/images/built63.avif'
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
                    <img src={img4} alt="Built Websites" width={300} className="radius"/>
                    <p className="one">CAR DEALERSHIP ONE</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img10} alt="Built Websites" width={300} className="radius"/>
                    <p className="one">CAR DEALERSHIP TWO</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img14} alt="Built Websites" width={300} className="radius"/>
                    <p className="one">MOTORCYCLE DEALER</p>
                </div>
            </div>
            <div className="row container ms-5 pt-4 mt-4">
                <div className="col-md-4 move">
                    <img src={img19} alt="Built Websites" width={300} className="radius"/>
                    <p className="one">BOAT DEALERSHIP</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img20} alt="Built Websites" width={300} className="radius"/>
                    <p className="one">CAR MAGAZINE</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img21} alt="Built Websites" width={300} className="radius"/>
                    <p className="one">RTL CAR DEALERSHIP</p>
                </div>
            </div>

        </div>
    )
}

export default Dealership