import React from "react";
import { useNavigate } from "react-router-dom";
import img from "./assets/images/spots.jpg";


function Home() {
  const navigate = useNavigate();

  const transferData = () => {
    navigate("/Login");
  };
 
   
  const transfer1 = () => {
    navigate("/Shop");
  };

  return (
    <div >
      <section className="image mt-4">

        <div className="homepage " > 
          <div className="head pb-4 pt-4 ">
          <h1 className=" ps-4 ms-4 ">Motors - Car Dealer, Rental & Listing WordPress theme</h1>
          <ul className="list-unstyled ps-4 ms-4 mt-3 d-flex  gap-4 flex">

            <li className="by">By Stylemix Themes</li>
            <li className="by">22,671 sales</li>
            <li className="by"> <strong style={{ color: 'green' }}>Recently Updated</strong></li>
            <li className="by"><strong style={{ color: 'green' }}>Well Documented</strong></li>
           
          </ul>
         </div> 
          <div className="row mt-4">
          <div className="col-md-8">
           <div className="img1  mt-2">
            <img src={img} className="img" onClick={transferData} />
            
            </div>
            <h1 className="over"><strong style={{color:"red"}}>M</strong>OTORS</h1>
            <h1 className="over1">#1</h1>
            <h2 className="over2"><strong style={{color:"red"}}>cars dealer</strong><br></br>& listings theme</h2>
            <div className="over3 row  ">
            <ul className="col-md-4 list-unstyled ps-5 font-style">
              <li><i class="fa-solid fa-users me-2 mt-3"></i>21,000+</li>
              <li className="ps-3">customers</li>
            </ul>
            <ul className="col-md-4 list-unstyled font-style ">
              <li><i class="fa-regular fa-star me-2 mt-3"></i>800+</li>
              <li className="ps-4">Reviews</li>
            </ul>
            <ul className="col-md-4 list-unstyled font-style mt-3">
              <li>Power Elite</li>
              <li>Author</li>
            </ul>
            </div>
          </div>
          <div className="col-md-4 theme mt-5 pb-4 pt-4">
            <h2 className="theme0 pb-4 ">Regular License</h2>
            <p className="theme1 ms-2"><i class="fa-solid fa-check theme2 "></i>Quality checked by Envato</p>
            <p className="theme1 ms-2"><i class="fa-solid fa-check theme2 "></i>Future updates</p>
            <p className="theme1 ms-2"><i class="fa-solid fa-check theme2 "></i>6 months support from BuddhaThemes</p>
            <label>
              <input type="checkbox" className="form ms-1 mb-4" /><span className="ms-2 check">Extend support to 12 months</span><del className="text-muted">$38.50</del>
              <span className="ms-2 text-success fw-bold">$16.50</span>
            </label>
            <button className="button btn  btn-success w-100" onClick={transfer1}>Add to Cart</button>
            <p className="fst-italic ms-3 mt-3 font">Price is in US dollars and excludes tax and handling fees</p>
          </div>
      </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
