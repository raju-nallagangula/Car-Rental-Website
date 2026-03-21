import React from "react";
import {useState, useEffect} from "react"
import img1 from './assets/images/andrew.jpg'
import img10 from './assets/images/ferr.jpg'
import img21 from './assets/images/hors.jpg'

const Element =() =>{
 const[currentIndex, setCurrentIndex] = useState(0);

    const images = [img1, img10, img21]

    useEffect(() => {
        const interval = setInterval(() =>{
            nextSlide()
        },3000)

        return () => clearInterval(interval)
    },[currentIndex])
  
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex ===  images.length -1 ? 0 : prevIndex +1
        )
    }
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length -1 : prevIndex -1)
    }

    return(
        <div>
             <div className="parallax1 ">
            
            <img src={images[currentIndex]} className="adjust"/>
            <button onClick={prevSlide} className="slide ">  ◀ </button>
            <button onClick={nextSlide} className="slide1"> ▶ </button>
            </div>
        </div>
    )
}
export default Element