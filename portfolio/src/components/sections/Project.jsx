import { useState } from "react";
import { projects } from "../../data/project.js";

export const Project = () => {
  const [data, setData] = useState(projects);

  return (
    <section
      id="project"
      className="w-full sm:w-9/10 md:w-8/10 lg:w-4/5 m-auto p-2 mt-28 max-w-6xl h-auto"
    >
      <h1 className="heading text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-11 sm:leading-16 tracking-wider mt-6 lg:mt-16">
        Future-Ready Projects with <span className="text-red-600">AI</span>
      </h1>

      <div className="mt-15 md:mt-30 p-4 grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-10 gap-y-35">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-[0px_10px_36px_0px_rgba(0,0,0,0.16),_0px_0px_0px_1px_rgba(0,0,0,0.06)] bg-[#ffe5ec] transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt="Project-Image"
              className="rounded-t-2xl w-full"
            />
            <h1
              className="text-2xl sm:text-3xl text-center font-bold tracking-wider my-4 text-red-600"
            >
              {item.heading}
            </h1>
            <p className="text-center px-5 tracking-wider">
              {item.description}
            </p>

            {/* All Tech */}
            <div className="flex flex-wrap m-4">
              {item.tech.map((tech, index) => (
                <p
                  key={index}
                  className="bg-black text-white px-3 py-1 rounded-lg tracking-wider"
                >
                  {tech}
                </p>
              ))}
            </div>

            {/* Btn */}
            <div className="my-6 flex gap-4">
              <a
                href={item.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative inline-flex text-[13px] sm:text-[.8rem] md:text-[.9rem] items-center mx-0 gap-2 
      px-4 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2 lg:py-2 lg:px-4 text-white tracking-widest font-medium 
      rounded-full transition-all duration-300 shadow-md overflow-hidden 
      bg-[#333] hover:bg-[#444] hover:shadow-lg hover:-translate-y-1`}
              >
                <span className="absolute inset-0 bg-white/15 rounded-full scale-0 transition-transform duration-300 group-hover:scale-100"></span>
                <i className="fa-brands fa-github"></i>
                GitHub
              </a>

              <a
                href={item.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative inline-flex text-[13px] sm:text-[.8rem] md:text-[.9rem] items-center mx-0 gap-2 
      px-4 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2 lg:py-2 lg:px-4 text-white tracking-widest font-medium 
      rounded-full transition-all duration-300 shadow-md overflow-hidden 
      bg-[#0077b5] hover:bg-[#005582] hover:shadow-lg hover:-translate-y-1`}
              >
                <span className="absolute inset-0 bg-white/15 rounded-full scale-0 transition-transform duration-300 group-hover:scale-100"></span>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
