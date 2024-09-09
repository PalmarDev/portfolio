import { VerticalTimelineElement } from "react-vertical-timeline-component";
import PropTypes from "prop-types";

const ExperiencesCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#6e0d25",
        opacity: 0.7,
        color: "#dcab6b",
        borderRadius: "30px",
        boxShadow: "0 0 15px rgba(119,78,36,0.7)",
        border: "2px solid #dcab6b",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #6e0d25" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, border: "2px solid #6e0d25" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }>
      <div>
        <h3 className='text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-[16px] font-semibold' style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

ExperiencesCard.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ExperiencesCard;
