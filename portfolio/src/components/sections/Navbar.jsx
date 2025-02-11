// import { useState } from "react";

// export const Navbar = () => {
//   const [navbar, setNavbar] = useState([
//     { href: "#home", label: "Home" },
//     { href: "#project", label: "Project" },
//     { href: "#skill", label: "Skill" },
//     { href: "#education", label: "Education" },
//     { href: "#contact", label: "Contact" },
//   ]);

//   const [icon, setIcon] = useState([
//     {
//       href: "#home",
//       icon: <span class="material-symbols-outlined">home</span>,
//     },
//     {
//       href: "#project",
//       icon: <span class="material-symbols-outlined">work</span>,
//     },
//     {
//       href: "#skill",
//       icon: <span class="material-symbols-outlined">brush</span>,
//     },
//     { href: "#education", icon: <i class="fa-solid fa-building-columns"></i> },
//     {
//       href: "#contact",
//       icon: <span class="material-symbols-outlined">contacts_product</span>,
//     },
//   ]);
//   return (
//     <>
//       <section
//         id="navbar"
//         className="hidden sm:block fixed top-0  border-b-orange-50 bg-[#000] text-white left-1/2 transform -translate-x-1/2 w-4/5 p-2 md:px-15 max-w-6xl"
//         style={{
//           boxShadow:
//             "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
//         }}
//       >
//         <ul className="w-full">
//           <li className="flex w-full">
//             {navbar.map((item) => (
//               <a
//                 href={item.href}
//                 className="flex-1 text-center tracking-widest hover:text-yellow-400"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </li>
//         </ul>
//       </section>

//       <section
//         id="navbar"
//         className="block sm:hidden fixed bottom-0  border-b-orange-50 bg-[#000] text-white w-full p-4 transition-all duration-300"
//         style={{
//           boxShadow:
//             "rgba(0, 0, 0, 0.25) 0px -6px 15px, rgba(0, 0, 0, 0.12) 0px 4px 6px",
//         }}
//       >
//         <ul className="w-full">
//           <li className="flex w-full">
//             {icon.map((item) => (
//               <a
//                 href={item.href}
//                 className="flex-1 text-center tracking-widest hover:text-yellow-400 transition-all duration-300"
//                 style={{
//                   boxShadow:
//                     "rgba(0, 0, 0, 0.25) 0px -6px 15px, rgba(0, 0, 0, 0.12) 0px 4px 6px",
//                 }}
//               >
//                 {item.icon}
//               </a>
//             ))}
//           </li>
//         </ul>
//       </section>
//     </>
//   );
// };




import { useState } from "react";

export const Navbar = () => {
  const [navbar, setNavbar] = useState([
    { id: 1, href: "#home", label: "Home" },
    { id: 2, href: "#project", label: "Project" },
    { id: 3, href: "#skill", label: "Skill" },
    { id: 4, href: "#education", label: "Education" },
    { id: 5, href: "#contact", label: "Contact" },
  ]);

  const [icon, setIcon] = useState([
    {
      id: 1,
      href: "#home",
      icon: <span className="material-symbols-outlined">home</span>,
    },
    {
      id: 2,
      href: "#project",
      icon: <span className="material-symbols-outlined">work</span>,
    },
    {
      id: 3,
      href: "#skill",
      icon: <span className="material-symbols-outlined">brush</span>,
    },
    {
      id: 4,
      href: "#education",
      icon: <i className="fa-solid fa-building-columns"></i>,
    },
    {
      id: 5,
      href: "#contact",
      icon: <span className="material-symbols-outlined">contacts_product</span>,
    },
  ]);

  return (
    <>
      {/* Desktop Navbar */}
      <section
        id="navbar-desktop"
        className="hidden sm:block fixed w-4/5 sm:w-[90%] md:w-4/5 transform -translate-x-1/2 left-1/2 m-auto top-0 max-w-6xl p-2 md:px-15 border-b-orange-50 bg-[#000] text-white z-50 shadow-navbar"
      >
        <ul className="w-full m-auto">
          <li className="flex w-full">
            {navbar.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="flex-1 text-center tracking-widest hover:text-yellow-400 transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </li>
        </ul>
      </section>

      {/* Mobile Navbar */}
      <section
        id="navbar-mobile"
        // className="block sm:hidden fixed bottom-0 border-b-orange-50 bg-[#000] text-white w-full p-4 transition-all duration-300 shadow-navbar"
        className="inline sm:full sm:hidden fixed bottom-0 border-b-orange-50 bg-[#000] text-white w-full p-4  shadow-navbar z-50"
      >
        <ul className="w-full">
          <li className="flex w-full">
            {icon.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="flex-1 text-center tracking-widest hover:text-yellow-400 transition-all duration-300"
                aria-label={navbar.find((nav) => nav.id === item.id)?.label}
              >
                {item.icon}
              </a>
            ))}
          </li>
        </ul>
      </section>
    </>
  );
};
