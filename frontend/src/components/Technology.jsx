import StarsCanvas from "./Stars";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../assets/js/Utils";

const Technology = () => {
  return (
    <div className='flex flex-col items-center justify-center lg:flex-row w-full min-h-screen'>
      <div className='w-full lg:w-1/2 flex flex-col justify-center items-center'>
        <div className='flex justify-center w-full h-full lg:w-1/2 pt-8'>
          <Tilt className='w-full h-full flex justify-center items-center'>
            <motion.div
              variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
              className='flex items-center justify-center border-2 border-[#dcab6b] bg-[#6e0d25] opacity-[.7] rounded-3xl drop-shadow-lg shadow-[0_0_15px_rgba(119,78,36,0.7)]'>
              <div className='flex flex-wrap justify-center items-center space-y-4 py-6 px-7'>
                <div className='relative'>
                  <h2 className='text-lg md:text-xl lg:text-3xl font-bold text-[#dcab6b] pb-4'>
                    Tecnologías & Herramientas
                  </h2>
                  <div className='absolute top-0 right-0 h-2 w-16 bg-[#774e24] rounded-full'></div>
                </div>
                <ul className='text-[#dcab6b] font-bold text-lg'>
                  <li className='hover:text-white transition duration-300'>
                    Adobe Photoshop
                  </li>
                  <li className='hover:text-white transition duration-300'>
                    Adobe Illustrator
                  </li>
                  <li className='hover:text-white transition duration-300'>Blender</li>
                  <li className='hover:text-white transition duration-300'>Azure</li>
                </ul>
                <ul className='text-[#dcab6b] font-bold text-lg pl-4'>
                  <li className='hover:text-white transition duration-300'>AWS</li>
                  <li className='hover:text-white transition duration-300'>Docker</li>
                  <li className='hover:text-white transition duration-300'>Millanote</li>
                  <li className='hover:text-white transition duration-300'>Jira</li>
                </ul>
                <ul className='text-[#dcab6b] font-bold text-lg pl-6'>
                  <li className='hover:text-white transition duration-300'>Git</li>
                  <li className='hover:text-white transition duration-300'>GitHub</li>
                  <li className='hover:text-white transition duration-300'>GitLab</li>
                  <li className='hover:text-white transition duration-300'>
                    Visual Studio Code
                  </li>
                </ul>
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>

      <div className='relative w-full lg:w-1/2 h-full flex flex-col justify-center items-center z-20'>
        <Tilt className='w-full flex justify-center relative z-30'>
          <motion.div
            variants={fadeIn("left", "spring", 1 * 0.5, 0.75)}
            className='flex w-auto justify-center px-8'>
            <div className='relative z-40 flex flex-col w-full items-center justify-center border-2 border-[#dcab6b] bg-[#6e0d25] opacity-[.7] rounded-3xl drop-shadow-lg shadow-[0_0_15px_rgba(119,78,36,0.7)] '>
              <h2 className='text-lg md:text-xl lg:text-3xl font-bold text-[#dcab6b] p-4'>
                Lenguajes de Programación & Frameworks
              </h2>
              <StarsCanvas />
            </div>
          </motion.div>
        </Tilt>
      </div>
    </div>
  );
};

export default Technology;
