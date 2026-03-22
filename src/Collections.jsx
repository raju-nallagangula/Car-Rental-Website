import React, { useState } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';



function Collections() {
  let [users, setUsers] = useState([
    {
      img: "/images/mercedes.jpeg",
      heading: "Mercedes-Benz AMG SL",
      para0: "price : Rs. 7.50 Cr*Get On-Road Price",
      para1: "Engine : 5204 cc",
      para2: "Power :602.11 - 630.3 bhp",
      para3: "Torque : 700 Nm @ 2000 rpm",
      para4: "Transmission : Automatic",
    },
    {
      img: "/images/lamborghini.jpeg",
      heading: "Lamborghini Huracan",
      para0: "price : Rs. 7.50 Cr*Get On-Road Price",
      para1: "Engine : 3982 cc",
      para2: "Power :469.35 bhp @ 5500 rpm",
      para3: "Torque : 700 Nm @ 2000 rpm",
      para4: "Transmission : Automatic",
    },
    {
      img: "/images/ferrari.jpeg",
      heading: "Ferrari 812 Superfast",
      para0: "price : Rs. 7.50 Cr*Get On-Road Price",
      para1: "Engine : 6496 cc",
      para2: "Power :788.52 bhp @ 5500 rpm",
      para3: "Torque : 700 Nm @ 2000 rpm",
      para4: "Transmission : Automatic",
    },
    {
      img: "/images/copper.jpeg",
      heading: "Mini Cooper 3 DOOR",
      para0: "price : Rs. 7.50 Cr*Get On-Road Price",
      para1: "Engine : 1998 cc",
      para2: "Power :189.08 bhp @ 5500 rpm",
      para3: "Torque : 700 Nm @ 2000 rpm",
      para4: "Transmission : Automatic",
    },
    {
      img: "/images/rolls royce.webp",
      heading: "Rolls-Royce Spectre",
      para0: "price : Rs. 7.50 Cr*Get On-Road Price",
      para1: "Engine : 1998 cc",
      para2: "Power :576.63 bhp @ 5500 rpm",
      para3: "Torque : 1998 cc @ 2000 rpm",
      para4: "Transmission : Automatic",
    },
    {
      img: "/images/defender.jpeg",
      heading: "Land Rover Defender",
      para0: "price : RRs.1.05 -2.79 Cr*Get On-Road Price",
      para1: "Engine : 1997 cc - 5000 cc",
      para2: "Power :296 - 626 bhp @ 5500 rpm",
      para3: "Torque :400 Nm -750 @2000rpm",
      para4: "Transmission : Automatic",
    },
    {
      img: "/images/audi.webp",
      heading: "Audi RS e-tron GT",
      para0: "price : Rs. 7.50 Cr*Get On-Road Price",
      para1: "Engine : 3982 cc",
      para2: "Power :469.35 bhp @ 5500 rpm",
      para3: "Torque : 700 Nm @ 2000 rpm",
      para4: "Transmission : Automatic",
    },
    {
      img: "/images/bmw.jpeg",
      heading: "BMW 2 Series Gran Coupe",
      para0: "Rs. 46.90 - 48.90 Lakh On-Road Price",
      para1: "Engine : 3982 cc",
      para2: "Power :636.98 bhp @ 5500 rpm",
      para3: "Torque : 700 Nm @ 2000 rpm",
      para4: "Transmission : Automatic",
    }
  ])


  return (
    <div className="row">
      {users.map((user) => {
        return (

          <div className="col-md-3  back">
            <div className="container">
              <div className="card mb-3 mt-5 img-style1">
                <div className="img-style">
                  <img src={user.img} width={267} height={150} />
                </div>
                <div className="style ">
                  <h5 className="adjust">{user.heading}</h5>
                  <p className="adjust">{user.para0}</p>
                  <p className="adjust">{user.para1}</p>
                  <p className="adjust">{user.para2}</p>
                  <p className="adjust">{user.para3}</p>
                  <p className="adjust">{user.para4}</p>
                  <button className="botton1  " ><span>Buy</span></button>
                </div>
              </div>
            </div>
            </div>

            )
    })}
          </div>

        )
      }
export default  Collections;
