import { useState } from 'react'
import { FaFacebook, FaTwitter, FaGooglePlusG, FaInstagram, FaBars } from 'react-icons/fa'
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {

    const [nav, setNav] = useState(false)


    const handleClick = () => setNav(!nav)



    return (
        <div className='flex justify-between items-center w-full min-h-[50px] absolute z-10 text-white bg-gray-700/80 '>
            <ul className='hidden sm:flex px-4'>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#gallery'>gallery</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
            <div className='flex justify-between'>
                <FaFacebook className='mx-4' />
                <FaTwitter className='mx-4' />
                <FaGooglePlusG className='mx-4' />
                <FaInstagram className='mx-4' />
            </div>

            {/* hamburger icon */}

            <div onClick={handleClick} className='sm:hidden z-10 justify-between'>
                {!nav ? <FaBars size={22} className='mr-4 cursor-pointer' /> : <IoCloseSharp size={22} className='mr-4 cursor-pointer'/>}
            </div>

            {/* mobile view */}

            <div className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen w-full bg-black/90 px-4 py-7 flex flex-col'
                : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>

                <ul className='h-full w-full text-center pt-12'>
                    <li className='text-2xl py-8 hover:text-white hover:scale-105  duration-300'>
                        <a href='#home' className=''>Home</a>
                    </li>
                    <li className='text-2xl py-8 hover:text-white hover:scale-105  duration-300'>
                        <a href='#about' className=''>About</a>
                    </li>
                    <li className='text-2xl py-8 hover:text-white hover:scale-105  duration-300'>
                        <a href='#Deals' >About</a>
                    </li>
                    <li className='text-2xl py-8 hover:text-white hover:scale-105  duration-300'>
                        <a href='#gallery'>Gallery</a>
                    </li>
                    <li className='text-2xl py-8 hover:text-white hover:scale-105  duration-300'>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>



        </div>
    )
}

export default Navbar