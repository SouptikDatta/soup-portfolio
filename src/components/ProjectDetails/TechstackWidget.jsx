import { FaCaretRight } from "react-icons/fa";
import PatternImg2 from "../../img/patternImg2.jpg";

const TechstackWidget = ({ techStack }) => {
  return (
    <div className="widgetBox relative w-full">
      <div className="relative px-6 md:px-10 pt-4 pb-4">
        <div
          className="before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-xl before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
          style={{ backgroundImage: `url(${PatternImg2})` }}
        ></div>
        <h3 className="text-[1.2rem] md:text-[1.5rem] text-accent2 font-Caveat font-bold">
          Technologies Used
        </h3>
        <i className="bg-[#d5daf2] h-[1px] border-0 relative before:absolute before:bg-accent before:w-[10.125rem] before:h-[3px] before:z-[1] block before:mt-[-1px] mt-2 mb-4"></i>
        <ul className="flex flex-col gap-2 md:gap-4 w-full">
          {techStack.map((tech, index) => (
            <li
              className="flex items-center relative font-NunitoSans text-[1rem] md:text-[1.0625rem] font-semibold"
              key={index}
            >
             <FaCaretRight className="left-0 top-[2px] mr-2 fill-accent"></FaCaretRight>
             {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechstackWidget;
