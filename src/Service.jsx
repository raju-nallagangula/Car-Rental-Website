import React,{ useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import img1 from './assets/images/fixed5.jpeg'
import img2 from './assets/images/fixed.jpeg'
import img3 from './assets/images/fixed2.jpeg';
import img22 from './assets/images/details.webp'
import img23 from './assets/images/listing.avif'

import { Link } from "react-router-dom"
import { useRef } from "react";






function Service() {

    let navigate = useNavigate()
    const Back = () => {
        navigate('/Collections')
    }
    /*let navigate1 = useNavigate() */
    const Back1 = () => {
        navigate('/')
    }
    

    const Back2 = () => {
        window.open("https://www.youtube.com/watch?v=bWlgfsU9JJk", "_blank");
    };

    const prebuiltRef = useRef(null);

    const scrollToPrebuilt = () => {
        prebuiltRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    
    /*const navigate2 = useNavigate()*/
    const goToDealership = () =>{
        navigate("/Service/Dealership", {state: {scrollTo: "dealer"}})
    }
     
    const goToRental = () => {
        navigate("/Service/Rental", {state: {scrollToRental: "rental"}})
    }
    const goToClassified = () => {
        navigate("/Service/Classified", {state: {scrollToClassified: "classified"}})
    }
    
    return (
        <div>
            
                
                 <div className="parallax space sticky-top "> 
                        <header className="row header  pt-5 ">
                            <div className="row ms-2 ">
                                <div className="col-md-2 ">
                                    <h3 onClick={Back1}><strong style={{ color: 'red' }} >M</strong>OTORS</h3>
                                </div>
                                <div
                                    className="col-md-2 move position-relative"
                                    onMouseEnter={() => setShow(true)}
                                    onMouseLeave={() => setShow(false)}>
                                
                                    <h3 className="text-white mouse">DEMOS</h3>

                                    
                                    <div className={`mega-menu p-4 ${show ? "show" : ""}`}>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <a className="dropdown-item mb-2" href="#"><i class="fa-solid fa-arrow-right colorr"></i> Car Dealership One</a>
                                                <a className="dropdown-item" href="#"><i class="fa-solid fa-arrow-right colorr"></i> Classified Listing Two</a>
                                             
                                            </div>
                                            <div className="col-md-4">
                                                <a className="dropdown-item mb-2" href="#"><i class="fa-solid fa-arrow-right colorr"></i> Auto Rental Two</a>
                                                <a className="dropdown-item" href="#"><i class="fa-solid fa-arrow-right colorr"></i> Repair Service</a>
                                               
                                            </div>
                                            <div className="col-md-4">
                                                <a className="dropdown-item mb-2" href="#"><i class="fa-solid fa-arrow-right colorr"></i> Boat Dealership</a>
                                                <a className="dropdown-item" href="#"><i class="fa-solid fa-arrow-right colorr"></i> Auto Parts Shop</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div> 

                                <div
                                    className="col-md-2 move position-relative"
                                    onMouseEnter={() => setShow1(true)}
                                    onMouseLeave={() => setShow1(false)}>
                                
                                    <h3 className="text-white mouse">FEATURES</h3>

                                    
                                    <div className={`mega-menu p-4 ${show1 ? "show" : ""}`}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <a className="dropdown-item mb-2" href="#"><i class="fa-solid fa-arrow-right colorr"></i> Advantage Search and Filters</a>
                                                <a className="dropdown-item" href="#"><i class="fa-solid fa-arrow-right colorr"></i> Membership & Paid Ads Listings</a>
                                             
                                            </div>
                                            <div className="col-md-6">
                                                <a className="dropdown-item mb-2" href="#"><i class="fa-solid fa-arrow-right colorr"></i> Multiple Listings Types </a>
                                                <a className="dropdown-item" href="#"><i class="fa-solid fa-arrow-right colorr"></i> AutoManager DMS Integration</a>
                                               
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div> 
                                <div
                                    className="col-md-2 move position-relative"
                                    onMouseEnter={() => setShow2(true)}
                                    onMouseLeave={() => setShow2(false)}>
                                
                                    <h3 className="text-white mouse">INDUSTRIES</h3>

                                    
                                    <div className={`mega-menu p-4 ${show2 ? "show" : ""}`}>
                                        <div className="row">
                                            <div className="col-md-6 ">
                                                <a className="dropdown-item mb-2" href="#"><i class="fa-solid fa-arrow-right colorr"></i> Car Vehicle Dealership</a>
                                                <a className="dropdown-item " href="#"><i class="fa-solid fa-arrow-right colorr"></i> Car Rental</a>
                                             
                                            </div>
                                            <div className="col-md-6">
                                                <a className="dropdown-item mb-2" href="#"><i class="fa-solid fa-arrow-right colorr"></i> Classifiedm Listings</a>
                                                <a className="dropdown-item" href="#"><i class="fa-solid fa-arrow-right colorr"></i> Auto Parts Shop</a>
                                               
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div> 
                                <div className="col-md-2 ">
                                    <button className="but pb-2 pt-2" onClick={Back1}>BACK-END DEMO</button>
                                </div>
                                <div className="col-md-2 ">
                                    <button className="btn btn-primary " onClick={Back}>PURCHASE</button>
                                </div>
                            </div>
                         </header>
                    </div>
                   
                   
                        <div className="row ps-4 pb-5 mt-5 pt-4 back1 ">
                            <div className="col-md-4 mt-5">
                                <h3 className="text-yellow-400 text-xl font-bold">4.67 ★ Rated</h3>
                                <p>Based on 906 ratings</p>
                                <div>
                                    <h2>THE BEST  <strong style={{ color: 'red' }}>CAR DEALER<br></br></strong>WORDPRESS THEME</h2>
                                </div>
                                <div>
                                    <p className="pt-3">for Auto Dealers,Classified Listing,Auto<br></br>Rental,Boats<br></br>Repair Services and Motocycle Dealers.</p>
                                </div>
                                <div>
                                    <button className="btn btn-primary me-4 pt-3 pb-3 bt" onClick={scrollToPrebuilt}> VIEW DEMOS</button>
                                    <button className="btn  border  me-4 pt-3 pb-3 color" onClick={Back2}> watch videos</button>

                                </div>
                            </div>
                            <div className="col-md-8 ">
                                <div className="flex  justify-center items-center min-h-screen bg-[#0b1a2a] text-white">
                                    <div className="row mt-5 ">
                                        <div className="col-md-4 move">
                                            <div className="skew-card relative" onClick={goToDealership}>
                                                <img src={img1} alt="CAR DEALERSHIP" className="skew-img" />
                                                <div className="overlay bg-blue-900/50 ">

                                                </div>
                                            </div>
                                            <p className="font" >CAR DEALERSHIP </p>
                                        </div>
                                        <div className="col-md-4 move">
                                            <div className="skew-card relative " onClick={goToRental}>
                                                <img src={img2}  alt="AUTO RENTAL SERVICE" className="skew-img" />
                                                <div className="overlay bg-red-600/60"></div>

                                            </div>
                                            <p className="font">AUTO RENTAL SERVICE</p>
                                        </div>
                                        <div className="col-md-4 move">
                                            <div className="skew-card relative" onClick={goToClassified}>
                                                <img src={img3} alt="Classified Listing" className="skew-img" />
                                                <div className="overlay bg-black/40"></div>

                                            </div>
                                            <p className="font ">CLASSIFIED LISTING</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                  
                <section className="  parallax top" >
                    <div className="motor row pb-5 mb-5 ">
                        <h1 className="text-center pb-5 colo">MOTORS <strong style={{ color: 'red' }}>FEATURED ON</strong> </h1>
                        <div className="col-md-3 motors  ps-5">
                            <h3>envanto <button className="border bg-success">BLOG</button></h3>
                            <p className="size">“The Motors theme has a highly <br></br>professional look and feel that will<br></br> give your online car dealer <br></br>website instant creditability and<br></br> appeal.”</p>
                        </div>
                        <div className="col-md-3 motors1 ms-4 ">
                            <h3 className="text-center">colorlib.</h3>
                            <p className="size ps-5"> "Motors is packed with all the <br></br>features a modern car dealership website needs, all wrapped up in a modern and professional design.”</p>
                        </div>
                        <div className="col-md-3 motors1 ms-4 ">
                            <h3 className="text-center"> speckyboy .</h3>
                            <p className="size ps-4"> “Motors and its prebuilt modes<br></br> make this a highly versatile theme,<br></br>for anyone in the automotive industry who needs a professional<br></br> website.”</p>
                        </div>
                    </div>
                </section>
            

            <section className=" parallax pre top">

                <h1 ref={prebuiltRef} className="text-center built" > <strong style={{ color: 'red' }}>PRE-BUILT </strong> WEBSITES</h1>
                <div className="justify-center text-center ">
                    <div className="list-unstyled  d-flex justify-content-center  mt-5 mb-5 built1">
                        <nav className="gap-5 justify-center d-flex">
                        <Link to="/Service/All" className="move1">All</Link>
                        <Link to="/Service/Dealership" className="move1">DEALERSHIP</Link>
                        <Link  to="/Service/Classified" className="move1">CLASSIFIED LISTINGS</Link>
                        <Link  to="/Service/Rental" className="move1">RENTAL SERVICE</Link>
                        <Link  to="/Service/Misc" className="move1">MISC</Link>
                        </nav>
                    </div>
                    <Outlet />
                </div>
               
            </section>
            <section className="parallax ">
                <div className="paragraph ">
                    <p>Motors — The Car Dealer WordPress Theme was developed specifically to satisfy the automotive industry’s needs. <br></br>.
                        It’s never been easier to create a website and manage and update your inventory using contemporary and intuitive<br>
                        </br> tools, and to guarantee a superior user experience for both dealers and buyers.</p>
                </div>

            </section>
            <section className="parallax type1 top">
                <div className="row container ">
                    <div className="col-md-7 ps-5 ">
                        <h2 style={{ color: 'white' }}><strong style={{ color: 'red' }}>BUILD MULTIPLE LISTING TYPES</strong><br></br> WITH DIFFERENT VEHICLE DETAILS</h2>

                        <p className="details">Create any type of vehicle listing whether it's a car,<br></br> boat, bike, aircraft, or special equipment.</p>
                        <div className="row">
                            <div className="col-md-3">
                                <p className="car move"><i class="fa-solid fa-car-side"></i></p>
                                <h3 className="icons">Cars</h3>
                            </div>
                            <div className="col-md-3">
                                <p className="car move"><i class="fa-solid fa-motorcycle"></i></p>
                                <h3 className="icons">Motors</h3>
                            </div>
                            <div className="col-md-3">
                                <p className="car move"><i class="fa-solid fa-plane-departure"></i></p>
                                <h3 className="icons">Aircrafts</h3>
                            </div>
                            <div className="col-md-3">
                                <p className="car move"><i class="fa-solid fa-sailboat"></i></p>
                                <h3 className="icons">Boats</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 pic22">
                        <img src={img22} width={550} />
                    </div>
                </div>
            </section>
            <section className="parallax top">
                <div className="row container ms-3">
                    <div className="col-md-5 ps-4 pic22">
                        <img src={img23} width={500} />
                    </div>
                    <div className="col-md-7 ">
                        <h2 className="single "><strong style={{ color: 'red' }}>CUSTOMIZABLE</strong><br></br>SINGLE VEHICLE LISTING</h2>
                        <div className=" row">
                            <div className="col-md-6 ">
                                <ul className="list-unstyled list ">
                                    <li className="pb-4 "><strong style={{ color: 'red' }}><i class="fa-solid fa-check pe-4"></i></strong>Trade-in Form</li>
                                    <li className="pb-4 "><strong style={{ color: 'red' }}><i class="fa-solid fa-check pe-4"></i></strong>Add to Compare Module</li>
                                    <li className="pb-4 "><strong style={{ color: 'red' }}><i class="fa-solid fa-check pe-4"></i></strong>Financing Calculator</li>
                                    <li className="pb-4 "><strong style={{ color: 'red' }}><i class="fa-solid fa-check pe-4"></i></strong>VIN Report</li>
                                    <li className="pb-4 "><strong style={{ color: 'red' }}><i class="fa-solid fa-check pe-4"></i></strong>Offer Price Form</li>
                                    <li className="pb-4 "><strong style={{ color: 'red' }}><i class="fa-solid fa-check pe-4"></i></strong>Test Drive Form</li>
                                    <li className="pb-4 "><strong style={{ color: 'red' }}><i class="fa-solid fa-check pe-4"></i></strong>Multiple Price Options</li>
                                    <li className="pb-4 "><strong style={{ color: 'red' }}><i class="fa-solid fa-check pe-4"></i></strong>WhatsApp Chat Module</li>
                                </ul>
                            </div>
                            <div className="col-md-6 list1 ">
                                <ul className="list-unstyled ms-4">
                                    <li className="pb-4 "><strong style={{ color: 'red' }}><i class="fa-solid fa-check pe-4"></i></strong>Variety Image and Video Options</li>
                                    <li className="pb-4 "><strong style={{ color: 'red' }}><i class="fa-solid fa-check pe-4"></i></strong>Vehicle Listing Info Blocks</li>
                                    <li className="pb-4 "><strong style={{ color: 'red' }}><i class="fa-solid fa-check pe-4"></i></strong>Car Location</li>
                                    <li className="pb-4 "><strong style={{ color: 'red' }}><i class="fa-solid fa-check pe-4"></i></strong>Contact Information</li>
                                    <li className="pb-4 "><strong style={{ color: 'red' }}><i class="fa-solid fa-check pe-4"></i></strong>Sold and Special Label Options</li>
                                    <li className="pb-4 "><strong style={{ color: 'red' }}><i class="fa-solid fa-check pe-4"></i></strong>Blink Listing Search</li>
                                    <li className="pb-4 "><strong style={{ color: 'red' }}><i class="fa-solid fa-check pe-4"></i></strong>Related Cars Carousel</li>

                                </ul>
                                <p className="matter">And more additional modules and features for a single vehicle listing!</p>
                                <button className="btn  btn-danger mt-3 mb-5" onClick={Back}>SINGLE ITEM PAGE</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



        </div>

    )
}
export default Service