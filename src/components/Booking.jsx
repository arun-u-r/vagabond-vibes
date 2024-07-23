import { useState } from "react";
import { BsFillPeaceFill } from "react-icons/bs";
import { GiPeaceDove } from "react-icons/gi";

const Booking = () => {

    const [hoverPeace, setHoverPeace] = useState(false)

    return (
        <div className="bg-[#C0C0C0] w-full h-full">
            <div id="deals" className="max-w-[1140px] m-auto w-full p-4 ">
                <form className="lg:flex lg:justify-between w-full items-center p-2 gap-4" >
                    <div className="flex flex-col my-2 p-2 lg:max-w-[250px]">

                        <label htmlFor="name">Destination</label>
                        <select className="lg:w-[-300px] p-1 rounded-md">
                            <option value="1">Paris</option>
                            <option value="2">London</option>
                            <option value="3">New York</option>
                        </select>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full">
                        <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
                            <label htmlFor="name">Check-in</label>
                            <input type="datetime-local" name="check-in" id="check-in" className="border rounded-md pl-2" />
                        </div>
                        <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2 gap" >
                            <label htmlFor="name">Check-out</label>
                            <input type="datetime-local" name="check-out" id="check-out" className="border rounded-md pl-2" />
                        </div>
                    </div>
                    <div className="flex flex-col item w-[10em] lg:max-w-[250px] my-2 p-2">
                        <label htmlFor="name">Adults</label>
                        <input type="number" name="adults" id="adults" className="border rounded-md pl-2" />
                    </div>
                    <div className="flex flex-col my-2 p-1 w-full items-center"
                        onMouseEnter={() => setHoverPeace(true)}
                        onMouseLeave={() => setHoverPeace(false)}>
                        <label htmlFor="search" className="pb-2">
                            {hoverPeace
                                ?
                                <GiPeaceDove size={25}  />
                                :
                                <BsFillPeaceFill size={25} />}
                        </label>

                        <button
                            className="mt-2 cursor-pointer text-white font-bold relative text-[14px] w-full h-[3em] 
                         text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% 
                        to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy
                         hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px]
                          before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% 
                         before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:200%] 
                         before:-z-10 before:rounded-[35px] before:hover:blur-md before:transition-all 
                         before:ease-in-out before:duration-[1s] before:hover:bg-[length:100%] active:bg-violet-700 focus:ring-violet-700"
                        >
                            <span className="hover:scale-110 inline-block hover:text-black" >Check Availabilty </span>
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Booking