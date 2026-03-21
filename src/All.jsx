import React from "react";
import img4 from './assets/images/built1.avif'
import img5 from './assets/images/built0.avif'
import img6 from './assets/images/built2.avif'
import img7 from './assets/images/built11.avif'
import img8 from './assets/images/built22.avif'
import img10 from './assets/images/built30.avif'
import img11 from './assets/images/built33.avif'
import img12 from './assets/images/built32.avif'
import img13 from './assets/images/buitl41.avif'
import img14 from './assets/images/built42.avif'
import img15 from './assets/images/built43.avif'
import img16 from './assets/images/built51.avif'
import img17 from './assets/images/built52.avif'
import img18 from './assets/images/built53.avif'
import img19 from './assets/images/built61.avif'
import img20 from './assets/images/built62.avif'
import img21 from './assets/images/built63.avif'
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
                    <img src={img4} alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">CAR DEALERSHIP ONE</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img5} alt="Built Websites" width={300} onClick={trans1} className="radius"/>
                    <p className="one">CLASSIFIED LISTING</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img6} alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">AUTO RENTAL</p>
                </div>
            </div>
            <div className="row container ms-5 pt-4 mt-4">
                <div className="col-md-4 move">
                    <img src={img7} alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">AUTO RENTAL TWO</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img8} alt="Built Websites" width={300} onClick={trans1} className="radius"/>
                    <p className="one">MULTI-LISTING TYPES</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img4} alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">ELECTRICAL VEHICLE DEALERSHIP</p>
                </div>
            </div>
            <div className="row container ms-5 pt-4 mt-4">
                <div className="col-md-4 move">
                    <img src={img10} alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">CAR DEALERSHIP TWO</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img11} alt="Built Websites" width={300} onClick={trans1} className="radius"/>
                    <p className="one">CLASSIFIED LISTING THREE</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img12} alt="Built Websites" width={300} onClick={trans1} className="radius"/>
                    <p className="one">CLASSIFIED LISTING FOUR</p>
                </div>
            </div>
            <div className="row container ms-5 pt-4 mt-4">
                <div className="col-md-4 move">
                    <img src={img13} alt="Built Websites" width={300}  onClick={trans1} className="radius"/>
                    <p className="one">AUTO RENTAL TWO</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img14} alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">MOTORCYCLE DEALER</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img15} alt="Built Websites" width={300} onClick={trans1} className="radius"/>
                    <p className="one">CLASSIFIED LISTING TWO</p>
                </div>
            </div>
            <div className="row container ms-5 pt-4 mt-4">
                <div className="col-md-4 move">
                    <img src={img16} alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">EQUIPMENT</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img17} alt="Built Websites" width={300}  onClick={trans1} className="radius"/>
                    <p className="one">AIRCRAFT</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img18} alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">AUTO PARTS SHOP</p>
                </div>
            </div>
            <div className="row container ms-5 pt-4 mt-4">
                <div className="col-md-4 move">
                    <img src={img19} alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">BOAT DEALERSHIP</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img20} alt="Built Websites" width={300}  onClick={trans1} className="radius"/>
                    <p className="one">CAR MAGAZINE</p>
                </div>
                <div className="col-md-4 move">
                    <img src={img21} alt="Built Websites" width={300} onClick={trans} className="radius"/>
                    <p className="one">RTL CAR DEALERSHIP</p>
                </div>
            </div>


        </div>
    )
}
export default All