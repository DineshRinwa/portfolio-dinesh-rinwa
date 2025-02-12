import { skill } from "../../data/skillTool"; // Ensure correct filename

export const Skill = () => {
  return (
    <section
      id="skill"
      className="m-auto p-2 max-w-6xl w-full sm:w-9/10 lg:w-4/5 mt-28 h-auto"
    >
      <h1 className="heading text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-11 sm:leading-16 tracking-wider mt-6 lg:mt-16">
        Technical Skills <span className="text-red-600">&</span> Tools
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-10 mt-20">
        {skill.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center py-4 transition-transform duration-300 hover:scale-105"
          >
            {/* Icon */}
            <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-[#e9ecef] shadow-lg">
              <img
                src={item.link}
                alt={`${item.title} icon`}
                className="w-[60px] h-[60px]"
              />
            </div>

            {/* Title */}
            <div className="border-2 w-[130px] h-[40px] flex items-center justify-center rounded-3xl -mt-6 text-white bg-black border-black shadow-lg">
              <p className="text-center tracking-widest">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};