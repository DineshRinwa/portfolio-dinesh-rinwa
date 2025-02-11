import { useState } from "react";
import { projects } from "../../data/project.js";

export const Project = () => {
  const [data, setData] = useState(projects);

  return (
    <section
      id="project"
      className="border-2 w-4/5 m-auto p-2 mt-28 max-w-6xl h-auto"
    >
      <h1 className="heading text-6xl text-center font-bold leading-14 tracking-wider mt-16">
        Future-Ready Projects with <span className="text-red-600">AI</span>
      </h1>

      <div className="project-card border-2">
        {data.map((item, index) => (
          <div key={index} className="">
            <img key={index + 1} src={item.image} alt="Project-Image" />
            <h1 key={index + 11}>{item.heading}</h1>
            <p key={index + 111}>{item.description}</p>

            {/* All Tech */}
            <div>
              {item.tech.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>

            {/* Btn */}
            <div>
              <a key={index + 2} href={item.githubURL}>
                GitHub
              </a>
              <a key={index + 3} href={item.liveDemo}>
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
