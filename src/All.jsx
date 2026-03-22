import React from "react";

import { useNavigate } from "react-router-dom";

function All() {

    const navigate = useNavigate();

    const trans = () => {
      navigate("/Cardealership");
    };
    const trans1 = () => {
        navigate("/ClassifiedList");
      };
   

    

    return (
        <div>
            <div className="row container ms-4 mt-3 ">
                <div className="col-md-4 move">
                    <img src="/images/built1.avif" alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">CAR DEALERSHIP ONE</p>
                </div>
                <div className="col-md-4 move">
                    <img src="/images/built0.avif" alt="Built Websites" width={300} onClick={trans1} className="radius"/>
                    <p className="one">CLASSIFIED LISTING</p>
                </div>
                <div className="col-md-4 move">
                    <img src="/images/built2.avif" alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">AUTO RENTAL</p>
                </div>
            </div>
            <div className="row container ms-5 pt-4 mt-4">
                <div className="col-md-4 move">
                    <img src="/images/built11.avif" alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">AUTO RENTAL TWO</p>
                </div>
                <div className="col-md-4 move">
                    <img src="/images/built22.avif" alt="Built Websites" width={300} onClick={trans1} className="radius"/>
                    <p className="one">MULTI-LISTING TYPES</p>
                </div>
                <div className="col-md-4 move">
                    <img src="/images/built1.avif" alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">ELECTRICAL VEHICLE DEALERSHIP</p>
                </div>
            </div>
            <div className="row container ms-5 pt-4 mt-4">
                <div className="col-md-4 move">
                    <img src="/images/built30.avif" alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">CAR DEALERSHIP TWO</p>
                </div>
                <div className="col-md-4 move">
                    <img src="/images/built33.avif" alt="Built Websites" width={300} onClick={trans1} className="radius"/>
                    <p className="one">CLASSIFIED LISTING THREE</p>
                </div>
                <div className="col-md-4 move">
                    <img src="/images/built32.avif" alt="Built Websites" width={300} onClick={trans1} className="radius"/>
                    <p className="one">CLASSIFIED LISTING FOUR</p>
                </div>
            </div>
            <div className="row container ms-5 pt-4 mt-4">
                <div className="col-md-4 move">
                    <img src="/images/buitl41.avif" alt="Built Websites" width={300}  onClick={trans1} className="radius"/>
                    <p className="one">AUTO RENTAL TWO</p>
                </div>
                <div className="col-md-4 move">
                    <img src="/images/built43.avif" alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">MOTORCYCLE DEALER</p>
                </div>
                <div className="col-md-4 move">
                    <img src="/images/built43.avif" alt="Built Websites" width={300} onClick={trans1} className="radius"/>
                    <p className="one">CLASSIFIED LISTING TWO</p>
                </div>
            </div>
            <div className="row container ms-5 pt-4 mt-4">
                <div className="col-md-4 move">
                    <img src="/images/built51.avif" alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">EQUIPMENT</p>
                </div>
                <div className="col-md-4 move">
                    <img src="/images/built52.avif" alt="Built Websites" width={300}  onClick={trans1} className="radius"/>
                    <p className="one">AIRCRAFT</p>
                </div>
                <div className="col-md-4 move">
                    <img src="/images/built53.avif" alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">AUTO PARTS SHOP</p>
                </div>
            </div>
            <div className="row container ms-5 pt-4 mt-4">
                <div className="col-md-4 move">
                    <img src="/images/built61.avif" alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">BOAT DEALERSHIP</p>
                </div>
                <div className="col-md-4 move">
                    <img src="/images/built62.avif" alt="Built Websites" width={300}  onClick={trans1} className="radius"/>
                    <p className="one">CAR MAGAZINE</p>
                </div>
                <div className="col-md-4 move">
                    <img src="/images/built63.avif" alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">RTL CAR DEALERSHIP</p>
                </div>
            </div>


        </div>
    )
}
export default All