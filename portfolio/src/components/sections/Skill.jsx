import { useState } from "react";
import { skill } from "../../data/skill&Tool";

export const Skill = () => {
  const [data, setData] = useState(skill);

  return (
    <section
      id="skill"
      className="m-auto p-2 max-w-6xl w-full sm:w-9/10 lg:w-4/5 mt-28 h-auto"
    >
      <h1 className="heading text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-11 sm:leading-16 tracking-wider mt-6 lg:mt-16">
        Technical Skills <span className="text-red-600">&</span> Tools
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-1 gap-x-10 gap-y-15 mt-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center py-4 transition-transform duration-300 hover:scale-105"
          >
            {/* Icon */}
            <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full m-0 bg-[#e9ecef] text-white shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),_0px_8px_16px_-8px_rgba(0,0,0,0.3)]
">
              <img src={item.link} alt="Skill_Image" className="w-[60px] h-[60px] flex items-center justify-center" />
            </div>

            {/* Title */}
            <div className="border-2 w-[130px] h-[40px] flex items-center justify-center rounded-3xl mt-[-25px]  text-white bg-black border-black shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),_0px_8px_16px_-8px_rgba(0,0,0,0.3)]
">
              <p className="text-center tracking-widest">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
