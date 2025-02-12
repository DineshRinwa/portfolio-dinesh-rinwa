import profile from "../../assets/profile.jpg";
import profile1 from "../../assets/profile1.jpg";
import { AnimatedHeading } from "../common/HeadingAnimation";

export const Home = () => {
  const buttonLinks = [
    {
      href: "https://www.linkedin.com/in/dinesh-rinwa/",
      icon: <i className="fa-brands fa-linkedin"></i>,
      label: "LinkedIn",
      bgColor: "bg-[#0077b5] hover:bg-[#005582]",
    },
    {
      href: "https://github.com/DineshRinwa",
      icon: <i className="fa-brands fa-github"></i>,
      label: "GitHub",
      bgColor: "bg-[#333] hover:bg-[#444]",
    },
    {
      href: "",
      icon: <i className="fa-regular fa-file"></i>,
      label: "Resume",
      bgColor: "bg-[#555] hover:bg-[#666]",
    },
  ];
  return (
    <section
      id="home"
      className="w-[90%] md:w-4/5 flex flex-col-reverse md:flex-row mx-auto py-10 sm:py-20 max-w-6xl sm:mt-10"
    >
      {/* Left Container */}
      <div className="left-container flex flex-col w-full sm:w-4/5 md:w-3/5 lg:3/5 py-8">
        <AnimatedHeading />

        <p className="p-4 text-center tracking-wider text-md ">
          A proactive Full Stack Web Developer with a strong foundation in HTML,
          CSS, JavaScript, React, Node.js, Express, and MongoDB, alongside
          expertise in Tailwind CSS for modern UI design. Focused on delivering
          scalable, efficient, and user-friendly applications using the latest
          tools like ChatGPT, DeepSeek, and more. Committed to leveraging
          advanced technologies to create innovative and high-impact solutions.
        </p>

        <div className="flex w-full mt-5">
          {buttonLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              className={`relative inline-flex text-[13px] sm:text-[.8rem] md:text-[.9rem] items-center mx-0 gap-2 
            px-4 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2 lg:py-2  lg:px-4 text-white  tracking-widest font-medium rounded-full transition-all duration-300 shadow-md overflow-hidden 
                ${
                  index === 0
                    ? "bg-[#0077b5] hover:bg-[#005582]"
                    : "bg-[#333] hover:bg-[#444]"
                }
                hover:shadow-lg hover:-translate-y-1`}
            >
              <span className="absolute inset-0 bg-white/15 rounded-full scale-0 transition-transform duration-300 group-hover:scale-100"></span>
              {item.icon}
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right Container */}
      <div className="right-container w:4/5 sd:w-4/5">
        <div className="flex items-center justify-center p-4">
          <img
            className="sm:w-[330px] sm:h-[330px] w-[200px] h-[200px]  rounded-full object-cover border-4 border-[#b1ca9ff8] shadow-[0_8px_40px_rgba(69,219,5,0.475),0_0_10px_rgba(69,219,5,0.5)_inset] transition-transform duration-400 ease-in-out hover:scale-105 hover:shadow-[0_12px_50px_rgba(69,219,5,0.6),0_0_15px_rgba(69,219,5,0.6)_inset]"
            src={profile1}
            alt="Profile Image"
          />
        </div>
      </div>
    </section>
  );
};
