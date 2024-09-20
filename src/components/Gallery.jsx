import React, { useState, useEffect } from 'react';
import { FaBackwardFast, FaForwardFast } from "react-icons/fa6"; 
import gallery from '../assets/data/gallery'; 

const Gallery = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === gallery.images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(id);
  }, [gallery.images]); // Dependency array to re-run the effect if images change

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? gallery.images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === gallery.images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="carouselDarkVariant" className="relative w-full p-" data-twe-carousel-init data-twe-ride="carousel ">
      <div className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-twe-carousel-indicators>
        {gallery.images.map((_, index) => (
          <button
            key={gallery.images[index].id} // Unique id
            data-twe-target="#carouselDarkVariant"
            data-twe-slide-to={index}
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial 
              cursor-pointer border-0 border-y-[10px] border-solid  
              border-transparent bg-black bg-clip-padding p-0  -indent-[999px] opacity-50 transition-opacity duration-[600ms] 
               ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${index === activeIndex ? 'opacity-100' : ''}`}
            aria-current={index === activeIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>

      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {gallery.images.map((image, index) => (
          <div
            key={image.id} // Using unique id here for carousel items
            className={`relative float-left -mr-[100%] w-full !transform-none 
              transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none 
              ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            data-twe-carousel-fade
            data-twe-carousel-item
            data-twe-carousel-active={index === activeIndex}
          >
            <img src={image.src} className=" w-full h-full bg-cover" alt={image.label} />
            <div className="absolute bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">{image.label}</h5>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center                            
          justify-center border-0 bg-none p-0 text-center text-black opacity-50 
          transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] 
          hover:text-black hover:no-underline hover:opacity-90 hover:outline-none
          focus:text-black focus:no-underline focus:opacity-90 focus:outline-none
          motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselDarkVariant"
        data-twe-slide="prev"
        onClick={handlePrev}
      >
        <span className="inline-block h-8 w-8 dark:grayscale">
          <FaBackwardFast />
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] 
        items-center justify-center border-0 bg-none p-0 text-center 
        text-black opacity-50 transition-opacity duration-150 
        ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black
        hover:no-underline hover:opacity-90 hover:outline-none 
        focus:text-black focus:no--underline focus:opacity-90 
        focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselDarkVariant"
        data-twe-slide="next"
        onClick={handleNext}
      >
        <span className="inline-block h-8 w-8 dark:grayscale">
          <FaForwardFast />
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default Gallery;
