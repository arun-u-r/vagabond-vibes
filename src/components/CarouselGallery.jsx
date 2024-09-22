import React, { useState } from 'react';
import gallery from '../assets/data/gallery.js'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

const CarouselGallery = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevImg = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? 0 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const nextImg = () =>{
        const isLastSlide = currentIndex === gallery.images.length - 1;
        const newIndex = isLastSlide ? gallery.images.length - 1 : currentIndex + 1;
        setCurrentIndex(newIndex);

    }

  return (
    <div className='max-w-[1140px]  w-full h-[650px] m-auto relative group '>
        <div style={{backgroundImage: `url(${gallery.images[currentIndex].src})`}} 
        className=" w-full h-full bg-center rounded-2xl bg-cover duration-300 ">
        </div>
        {/* left arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] 
        left-5 text-2xl rounded-full p-2 bg-black/40 text-white/90 cursor-pointer' >
        <BsChevronCompactLeft size={30} onClick={prevImg}/>
        </div>
        {/* right arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl 
        rounded-full p-2 bg-black/40 text-white/90 cursor-pointer' >
        <BsChevronCompactRight size={30} onClick={nextImg}/>
        </div>



    </div>
  )
}

export default CarouselGallery