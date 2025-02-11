import React, { useState, useEffect } from "react";
import "./HeadingAnimation.css"; // Ensure you have imported the CSS

export const AnimatedHeading = () => {
  const [currentSection, setCurrentSection] = useState(0);

  // Array of sections
  const sections = ["Frontend Developer", "FullStack Developer", "Backend Developer"];

  // Change sections every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length); // Loops through the sections
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="overflow-hidden text-center flex justify-center items-center w-full mx-auto lg:p-1 p-0 sm:p-1">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold relative w-full text-black flex items-center justify-center gap-2 my-5 md:my-1 ">
        {/* Static text */}
        <span className="inline-block">Hire as a</span>
        {/* Animated text */}
        <span className="inline-block relative w-[200px] sm:w-[300px] md:w-[350px] h-[50px] sm:h-[55px] md:h-[60px]  overflow-hidden text-red-500">
          {sections.map((section, index) => (
            <span
              key={index}
              className={`absolute left-0 right-0 transition-all duration-1000 ${
                currentSection === index
                  ? "animate-slideUp opacity-100"
                  : "opacity-0"
              }`}
            >
              {section}
            </span>
          ))}
        </span>
      </h1>
    </div>
  );
};