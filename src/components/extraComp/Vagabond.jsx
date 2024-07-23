import { FaBookOpenReader } from 'react-icons/fa6';
import { GiSecretBook } from 'react-icons/gi';
import { PiBookOpenTextFill } from "react-icons/pi";


const Vagabond = () => {
  return (
    <div className="group relative flex justify-center items-center text-sm font-bold">
      <div className="flex items-center group-hover:gap-2 p-1 duration-300">
      <GiSecretBook size={30} className="text-violet-800 mr-2 group-hover:hidden transition-opacity  ease-in-out" />
        <PiBookOpenTextFill size={30} className="text-violet-800 mr-2 hidden group-hover:block transition-transform  ease-in-out" />

        <span className="text-[0px] group-hover:text-sm duration-300 cursor-default">Vagabond vibes</span>
      </div>
    </div>
  );
};

export default Vagabond;
