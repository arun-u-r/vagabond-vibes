import React, { useState } from 'react';

const Gallery = () => {
  const images = [
    {
      src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp",
      label: "First slide label",
      description: "Some representative placeholder content for the first slide."
    },
    {
      src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp",
      label: "Second slide label",
      description: "Some representative placeholder content for the second slide."
    },
    {
      src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp",
      label: "Third slide label",
      description: "Some representative placeholder content for the third slide."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="carouselDarkVariant" className="relative" data-twe-carousel-init data-twe-ride="carousel">
      <div className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-twe-carousel-indicators>
        {images.map((_, index) => (
          <button
            key={index}
            data-twe-target="#carouselDarkVariant"
            data-twe-slide-to={index}
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${index === activeIndex ? 'opacity-100' : ''}`}
            aria-current={index === activeIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>

      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative float-left -mr-[100%] w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            data-twe-carousel-fade
            data-twe-carousel-item
            data-twe-carousel-active={index === activeIndex}
          >
            <img src={image.src} className="block w-full" alt={image.label} />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">{image.label}</h5>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselDarkVariant"
        data-twe-slide="prev"
        onClick={handlePrev}
      >
        <span className="inline-block h-8 w-8 dark:grayscale">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselDarkVariant"
        data-twe-slide="next"
        onClick={handleNext}
      >
        <span className="inline-block h-8 w-8 dark:grayscale">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default Gallery;
