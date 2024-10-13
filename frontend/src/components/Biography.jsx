import Gabriel from "../assets/resource/gabriel2.jpg";
import Biografia from "../assets/js/Biografia";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../assets/js/Utils";

const Biography = () => {
  return (
    <div className='w-full min-h-screen flex flex-col lg:flex-row items-center justify-around'>
      <div className='flex justify-center w-full lg:w-1/2 p-8'>
        {" "}
        {/* Asegura el centrado */}
        <Tilt className='w-full flex justify-center'>
          {" "}
          {/* Centra el Tilt */}
          <motion.div
            variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
            className='w-full flex justify-center'>
            {" "}
            {/* Centra el motion */}
            <div className='flex justify-center'>
              <img
                className='rounded-3xl drop-shadow-lg shadow-[0_0_15px_rgba(119,78,36,0.7)] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]'
                src={Gabriel}
                alt='Gabriel'
              />
            </div>
          </motion.div>
        </Tilt>
      </div>
      <div className='flex flex-col items-center justify-center w-full lg:w-1/2 p-8 text-[#dcab6b]'>
        <div>
          <Tilt>
            <motion.div
              variants={fadeIn("left", "spring", 1 * 0.5, 0.75)}
              className='w-auto flex flex-col justify-center'>
              <div className='border-2 border-[#dcab6b] bg-[#6e0d25] opacity-[.7] rounded-3xl drop-shadow-lg shadow-[0_0_15px_rgba(119,78,36,0.7)] p-3'>
                <h2 className='text-lg md:text-xl lg:text-3xl font-bold p-4 text-center'>
                  {Biografia.title}
                </h2>
                <br />
                <p
                  className='text-sm md:text-md lg:text-lg text-justify px-4'
                  style={{ textIndent: "1.5rem" }}>
                  {Biografia.paragraph1}
                </p>
                <br />
                <p
                  className='text-sm md:text-md lg:text-lg text-justify px-4'
                  style={{ textIndent: "1.5rem" }}>
                  {Biografia.paragraph2}
                </p>
                <br />
                <p
                  className='text-sm md:text-md lg:text-lg text-justify px-4'
                  style={{ textIndent: "1.5rem" }}>
                  {Biografia.paragraph3}
                </p>
                <br />
                <p
                  className='text-sm md:text-md lg:text-lg text-justify px-4'
                  style={{ textIndent: "1.5rem" }}>
                  {Biografia.paragraph4}
                </p>
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Biography;
