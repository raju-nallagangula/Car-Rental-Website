import React, { useState } from "react";
import img16 from './assets/images/built51.avif'
import img17 from './assets/images/built52.avif'
import img20 from './assets/images/built62.avif'
import { useNavigate } from "react-router-dom";
function Misc() {

    const navigate = useNavigate();

    const trans = () => {
      navigate("/Cardealership");
    };
    const trans1 = () => {
        navigate("/ClassifiedList");
      };

    return (
        <div>
            <div className="row container ms-4 mt-3">
                <div className="col-md-4 move">
                    <img src={img16} alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">EQUIPMENT</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img17} alt="Built Websites" width={300}  onClick={trans1} className="radius"/>
                    <p className="one">AIRCRAFT</p>
                </div>
                <div className="col-md-4 move">
                    <div className="col-md-4 move">
                        <img src={img20} alt="Built Websites" width={300} onClick={trans} className="radius"/>
                        <p className="one">CAR MAGAZINE</p>
                    </div>


                </div>

            </div>
        </div>
            )
}
            export default Misc