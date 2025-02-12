export const Navbar = () => {
  const navbar = [
    { id: 1, href: "#home", label: "Home" },
    { id: 2, href: "#project", label: "Project" },
    { id: 3, href: "#skill", label: "Skill" },
    { id: 4, href: "#education", label: "Education" },
    { id: 5, href: "#contact", label: "Contact" },
  ];

  const icon = [
    { id: 1, href: "#home", icon: <i className="fa-solid fa-house"></i> },
    { id: 2, href: "#project", icon: <i className="fa-solid fa-folder"></i> },
    { id: 3, href: "#skill", icon: <i className="fa-solid fa-chalkboard-user"></i> },
    { id: 4, href: "#education", icon: <i className="fa-solid fa-graduation-cap"></i> },
    { id: 5, href: "#contact", icon: <i className="fa-solid fa-user"></i> },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <section
        id="navbar-desktop"
        className="hidden sm:block fixed w-4/5  sm:w-full lg:w-4/5 transform -translate-x-1/2 left-1/2 m-auto top-0 max-w-6xl p-2 md:px-15 border-b-orange-50 bg-black text-white z-50 shadow-navbar rounded-b-lg"
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
        className="sm:hidden fixed bottom-0 border-b-orange-50 bg-black text-white w-full p-4 shadow-navbar z-50"
      >
        <ul className="w-full">
          <li className="flex w-full">
            {icon.map((item) => {
              const navLabel = navbar.find((nav) => nav.id === item.id)?.label;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="flex-1 text-center tracking-widest hover:text-yellow-400 transition-all duration-300"
                  aria-label={navLabel || "Navigation Link"}
                >
                  {item.icon}
                </a>
              );
            })}
          </li>
        </ul>
      </section>
    </>
  );
};