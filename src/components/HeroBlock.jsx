import React from "react"

const HeroBlock = () => {
    return (
        <div className="w-full h-[90vh] ">
            <img src="wp13100987-vagabond-pc-wallpapers.png" alt="v-v-favicon-black.svg"
                className="w-full h-full object-cover"
            />
            <div className="max-w-[1140px] m-auto">
                <div className="absolute top-[10%] w-full md:-[50%] max-w-[500px] h-full flex flex-col text-white p-4 ">
                    <img src="v-v-logo-white.svg" alt="" className=" ml-10 p-2 w-[9rem] h-[9rem] object-cover " />
                    <h1 className="text-2xl md:text-4xl lg:text-2xl mt-4 ">find Somthing that u lost</h1>
                    <h2 className="text-xl md:text-2xl lg:text-4xl mb-5">With Vagabond vibes</h2>
                    <p style={{ color: '#F6D448' }} className="text-sm md:text-base lg:text-lg">
                    &quot;Discover a world of freedom, adventure, and connection with Vagabond Vibes. 
                    Whether you&apos;re seeking tranquil retreats, vibrant festivals, or unique off-the-grid 
                    experiences, our app is your gateway to the ultimate hippie lifestyle.&quot;
                    <br/>
                    <span className="text-white font-semibold text-xl inline-block mt-5">Find your next soulful escape.!</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroBlock