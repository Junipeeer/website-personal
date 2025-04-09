import { useEffect, useRef, useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, emoji, name }) => (
        <a key={id} href={href} className="nav-li_a" aria-label={name}>
          <li className="nav-li">
            <span className="sm:hidden inline-block p-1 nav-emoji">
              {emoji}
            </span>
            {name}
          </li>
        </a>
      ))}
    </ul>
  );
};

const Header = () => {
  const logo = useRef<HTMLImageElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (logo.current) {
        logo.current.classList.toggle("rotate");
      }
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="cursor-pointer">
            <img
              ref={logo}
              src="/img/logo.svg"
              className="h-[40px] logo"
              alt="logo"
            />
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <div className={isOpen ? "hamburger open" : "hamburger"}>
              <div className="pattie"></div>
            </div>
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div
        className={`nav-sidebar ${isOpen ? "h-screen open" : "opacity-0 h-0"}`}
      >
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
      <div className={`nav-bg sm:hidden ${isOpen ? "open" : ""}`}></div>
    </header>
  );
};

export default Header;
