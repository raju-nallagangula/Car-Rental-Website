import React from "react";
import { useState, useEffect } from "react"
import img1 from './assets/images/fixed5.jpeg'
import img10 from './assets/images/highway.jpg'
import img21 from './assets/images/hors.jpg'

import img01 from './assets/images/mercedes.jpeg'
import img2 from './assets/images/lamborghini.jpeg'
import img3 from './assets/images/ferrari2.jpeg'
import img4 from './assets/images/mini.jpeg'
import img5 from './assets/images/hors.jpg'
import img6 from './assets/images/range1.jpeg'
import img7 from './assets/images/audi.webp'
import img8 from './assets/images/bmw.jpeg'

const ClassifiedList = () => {
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

  
  return (
    <div>
      <header className="row  ">
       <img src={img10} width={1000} height={600} className="heed1"/>
       <div className="col-md-4 head2">
          <h2 className="text-white"><strong style={{ color: 'red' }} >M</strong>OTORS</h2>
        </div>
        <div className="col-md-6 head3">
            <ul className="list-unstyled d-flex gap-5 ">
                <li>Home</li>
                <li>Inventory</li>
                <li>Listin</li>
                <li>Pricing</li>
                <li>Pages</li>
                <li>Dealer</li>
               
            </ul>
        </div>
        <div className="col-md-2 head4">
        <button className="bg-success text-white pb-2 pt-2">ADD YOUR ITEM</button>
        </div>
        <div className="number">
            <h1><strong style={{color:"orange"}}>15,000+</strong></h1>
            <h2><strong style={{color:"white"}}>Vehicles Available</strong></h2>
        </div>
      </header>
      <section>
     
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
      <section className="parallax1 text-white d-flex justify-content-around aligin-items-center pt-5 pb-5">
        <div className="">
            <h2 className=""><i class="fa-solid fa-car just"></i>15500+</h2>
            <p>CARS FOR SALE</p>
        </div>
        <div className="">
            <h2><i class="fa-solid fa-users just"></i>1750+</h2>
            <p>VISITORS PER DAY</p>
        </div>
        <div className="">
            <h2><i class="fa-solid fa-ranking-star just"></i>3500+</h2>
            <p>DEALER REVIEWS</p>
        </div>
        <div className="">
            <h2><i class="fa-solid fa-square-check just"></i>250+</h2>
            <p>VERIFIED DEALERS</p>
        </div>
      </section>
      
    </div>
  )
}
export default ClassifiedList 