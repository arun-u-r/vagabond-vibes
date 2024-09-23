import { motion } from "framer-motion"


const iconVarient = (duration)=>({
  initial:{Y:-5},
  animate:{
    y:[5,-5],
    transition:{duration:duration,repeat:Infinity, repeatType:'reverse', ease:"easeInOut"}
  }
})

const OtherActivity = () => {
  return (
    <div className="other-activity bg-[#C0C0C0] z-30">
    <div className="max-w-[1140px] w-full m-auto mt-[-80px] md:flex justify-evenly z-30">
        <motion.div className="relative p-5 z-30" variants={iconVarient(2)} initial='initial' animate='animate' > 
            <h1 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold">Other Activity</h1>
            <img src={`${import.meta.env.BASE_URL}plane.jpg`} alt="" className="w-full h-full object-cover relative border-2 rounded-md shadow-lg"/>
        </motion.div>
        <motion.div className="relative p-5 z-30" variants={iconVarient(1.5)} initial='initial' animate='animate' > 
            <h1 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold">Other Activity</h1>
            <img src={`${import.meta.env.BASE_URL}space-wallpapers.jpg`} alt="/" className="w-full h-full object-cover relative border-2 rounded-md shadow-lg"/>
        </motion.div>
        <motion.div className="relative p-5 z-30" variants={iconVarient(2)} initial='initial' animate='animate' > 
            <h1 className="absolute z-10 shadow-black top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold">Other Activity</h1>
            <img src={`${import.meta.env.BASE_URL}plane.jpg`} alt="" className="w-full h-full object-cover relative border-2 rounded-md shadow-lg"/>
        </motion.div>

    </div>
    </div>
  )
}

export default OtherActivity