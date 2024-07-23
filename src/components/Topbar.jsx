import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
import Vagabond from './extraComp/Vagabond';



const Topbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2 h-[38px] bg-slate-300'>
        <div className='flex items-center'>
        <Vagabond  />
        </div>
        <div className='flex items-center'>
            <div className='hidden md:flex px-6 items-center'>
                <AiOutlineClockCircle size={20} className='mr-2'/>
                <p className='text-gray-700 text-sm'>8am - 9am</p>
            </div>
            <div className='hidden md:flex px-6 items-center'>
                <AiFillPhone size={20} className='text-violet-800 mr-2'/>
                <p className='text-gray-700 text-sm'>123-456-7890</p>
            </div>
            <button className='hover:scale-105 hover:text-black px-2 py-1 border bg-gradient-to-r from-violet-800 to-blue-500 text-white rounded'>Get Amazed</button>
        </div>
    </div>
  )
}

export default Topbar