import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../assets/js/Experiences";
import ExperiencesCard from "./ExperiencesCard"; // Importamos el componente ExperiencesCard
import { motion } from "framer-motion";
import { textVariant } from "../assets/js/Utils";

const Experiences = () => {
  return (
    <div className='w-full min-h-screen text-[#dcab6b]'>
      <motion.div variants={textVariant()}>
        <p className='text-center uppercase tracking-wider text-lg md:text-xl lg:text-3xl'>
          Lo Que He Hecho Hasta Ahora
        </p>
        <h2 className='font-black text-lg md:text-xl lg:text-3xl text-center'>
          Experiencia En La Industria
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor='#774e24'>
          {experiences.map((experience, index) => (
            <ExperiencesCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experiences;
