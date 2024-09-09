import StarsCanvas from "./Stars";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../assets/js/Utils";

const Technology = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full'>
      <div className='w-full lg:w-1/2 flex flex-col justify-center items-center'>
        <div className='relative'>
          <h2 className='text-lg md:text-xl lg:text-3xl font-bold text-[#dcab6b] pb-4'>
            Tecnologías que manejo
          </h2>
          <div className='absolute top-0 right-0 h-2 w-16 bg-[#6e0d25] rounded-full'></div>
        </div>
        <div className='flex justify-center w-full lg:w-1/2 pt-8'>
          <Tilt className='w-full flex justify-center'>
            <motion.div
              variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
              className='flex border-2 border-[#dcab6b] bg-[#6e0d25] opacity-[.7] rounded-3xl drop-shadow-lg shadow-[0_0_15px_rgba(119,78,36,0.7)]'>
              <div className='flex flex-wrap justify-center items-center space-y-4 py-6 px-7'>
                <ul className='text-[#dcab6b] font-bold text-lg'>
                  <li className='hover:text-white transition duration-300'>Photoshop</li>
                  <li className='hover:text-white transition duration-300'>
                    Illustrator
                  </li>
                  <li className='hover:text-white transition duration-300'>Blender</li>
                  <li className='hover:text-white transition duration-300'>Azure</li>
                </ul>
                <ul className='text-[#dcab6b] font-bold text-lg pl-8'>
                  <li className='hover:text-white transition duration-300'>AWS</li>
                  <li className='hover:text-white transition duration-300'>Docker</li>
                  <li className='hover:text-white transition duration-300'>Millanote</li>
                  <li className='hover:text-white transition duration-300'>Jira</li>
                </ul>
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>

      <div className='relative w-full lg:w-1/2 h-full flex justify-center items-center z-50'>
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Technology;
