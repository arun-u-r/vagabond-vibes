import React from "react"
import Gallery from "./Gallery"
import CarouselGallery from "./CarouselGallery"


const Showcase = () => {
  return (
    <div id='gallery'className={`max-w-[1140px] w-full m-auto px-4 pb-4 `} >
      <h2 className="text-center text-gray-700 p-2">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4" >
        <div className="sm:col-span-3 col-span-2 row-span-2 overflow-x-auto">
         
          <CarouselGallery/>
        </div>
        <div className={`hover:scale-105 hover:blur-md `}>
          <img className="w-full h-full rounded-2xl object-cover hover:scale-100" src='/assets/img/pexels-kamaji-ogino-5066802.jpg ' alt='/'/>
        </div>
        <div className="hover:scale-105"> 
          <img  className="w-full h-full rounded-2xl object-cover"src='/assets/img/pexels-kyle-miller-15578965.jpg' alt='/'/>
        </div>
        <div className="hover:scale-105">
          <img className="w-full h-full rounded-2xl object-cover" src='/assets/img/pexels-ryutaro-tsukata-5472304.jpg' alt='/'/>
        </div>
        <div className="hover:scale-105">
          <img className="w-full h-full rounded-2xl object-cover" src='/assets/img/pexels-ekaterina-bolovtsova-4672579.jpg' alt='/'/>
        </div>
      </div>
        
    </div>
  )
}

export default Showcase