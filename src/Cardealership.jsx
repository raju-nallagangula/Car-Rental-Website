import React from "react";
import { useState, useEffect } from "react"
import img1 from './assets/images/andrew.jpg'
import img10 from './assets/images/ferr.jpg'
import img21 from './assets/images/hors.jpg'

import img01 from './assets/images/mercedes.jpeg'
import img2 from './assets/images/lamborghini.jpeg'
import img3 from './assets/images/ferrari.jpeg'
import img4 from './assets/images/copper.jpeg'
import img5 from './assets/images/rolls royce.webp'
import img6 from './assets/images/defender.jpeg'
import img7 from './assets/images/audi.webp'
import img8 from './assets/images/bmw.jpeg'

const Cardealership = () => {
  let [users, setUsers] = useState([
    {
      img: img1,
      heading: "Mercedes-Benz AMG SL",
      para0: "price : Rs. 7.50 Cr On-Road Price",
      para1: "Engine : 5204cc",
      para2: "Power: 630.3",

      para4: "Automatic",
    },
    {
      img: img2,
      heading: "Lamborghini Huracan",
      para0: "price : Rs. 7.50 Cr On-Road Price",
      para1: "Engine : 3982cc",
      para2: "Power:  469.35",

      para4: "Automatic",
    },
    {
      img: img3,
      heading: "Ferrari 812 Superfast",
      para0: "price : Rs. 7.50 Cr On-Road Price",
      para1: "Engine : 6496cc",
      para2: "Power: 788.52",
      para3: "Torque : 700 Nm ",
      para4: "Automatic",
    },
    {
      img: img4,
      heading: "Mini Cooper 3 DOOR",
      para0: "price : Rs. 7.50 Cr On-Road Price",
      para1: "Engine : 1998cc",
      para2: "Power: 189.08",

      para4: "Automatic",
    },
    {
      img: img5,
      heading: "Rolls-Royce Spectre",
      para0: "price : Rs. 7.50 Cr On-Road Price",
      para1: "Engine : 1998cc",
      para2: "Power: 576.63",

      para4: "Automatic",
    },
    {
      img: img6,
      heading: "Land Rover Defender",
      para0: "price : Rs.2.79 Cr On-Road Price",
      para1: "Engine : 5000cc",
      para2: "Power: 626",

      para4: "Automatic",
    },
    {
      img: img7,
      heading: "Audi RS e-tron GT",
      para0: "price : Rs. 7.50 Cr On-Road Price",
      para1: "Engine : 3982cc",
      para2: "Power: 469.35",

      para4: "Automatic",
    },
    {
      img: img8,
      heading: "BMW 2 Series Gran Coupe",
      para0: "Rs.48.90 Lakh On-Road Price",
      para1: "Engine : 3982cc",
      para2: "Power: 636.98",

      para4: "Automatic",
    }
  ])

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img01, img10, img21]

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 2000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1)
  }
  return (
    <div>
      <header className="row  heed">
        <div className="col-md-5">
          <h2 className="text-white ms-3"><strong style={{ color: 'red' }} >M</strong>OTORS</h2>
        </div>
        <div className="col-md-7">
          <ul className="list-unstyled row headd text-white">
            <li className="col-md-5"><i class="fa-solid fa-location-dot icon pe-3 "></i>1840 E GARVEY AVE SOUTH WEST COVINA,CA 9791</li>
            <li className="col-md-3"><i class="fa-solid fa-phone icon pe-4 "></i><strong style={{ color: "brown" }}>PHONE : </strong><br></br>879-9675-4555</li>
            <li className="col-md-4"><strong style={{ color: "brown" }}>SERVICE:</strong> 878-9876-5678 <br></br> <strong style={{ color: "brown" }}>PARTS:</strong> 878-0505-0440</li>

          </ul>
        </div>
      </header>
      <section>
      <div className="parallax1 ">

        <img src={images[currentIndex]} className="edjust" />
        <button onClick={prevSlide} className="slide ">  ◀ </button>
        <button onClick={nextSlide} className="slide1"> ▶ </button>
       </div>
       </section>
       <section>
        <div className="parallax1">
          <div className="row down ">
            {users.map((user) => {
              return (
                <div className="col-md-3 car1  ">
                  <div className="container ">
                    <div className=" mt-5 ">
                      <div className="img-style11">
                        <img src={user.img} width={267} height={150} />
                      </div>
                      <div className="adj">
                        <h5 className="a">{user.heading}</h5>
                        <p className="a">{user.para0}</p>
                        <div className="ad">
                          <ul className="list-unstyled row">
                            <li className="col-md-4 smal"><i class="fas fa-wrench cc"></i>{user.para1} </li>
                            <li className="col-md-4 smal"><i class="fas fa-fire cc"></i>  {user.para2} </li>
                            <li className="col-md-4 smal"><i class="fas fa-sliders-h cc"></i>  {user.para4} </li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              )
            })}
          </div>


        </div>
      </section>
      <section className="parallax1">
        <div className=" boxes ">
           <div className=" boxe">
            <h3><strong style={{color:"black"}}><i class="fa-solid fa-car look"></i>Are You Loopking For a Car?</strong></h3>
            <p className="ps-5">Our cars are delivered fully-registered with all<br></br> requirements completed. We’ll deliver your car<br></br> wherever you are.</p>
           </div>
        
        <div className=" boxe1">
          <h3><strong style={{color:"black"}}><i class="fa-solid fa-car look"></i>Do You Want To sell a Car?</strong></h3>
          <p className="ps-5">What’s your car worth? Receive the absolute <br></br>best value for your trade-in vehicle.<br></br> We even handle all paperwork. </p>
        </div>
        </div>
      </section>
      
    </div>
  )
}
export default Cardealership