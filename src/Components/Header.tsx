import { useEffect, useRef, useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <a key={id} href={href} className="nav-li_a">
          <li className="nav-li">{name}</li>
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
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            <img ref={logo} src="/img/logo.svg" className="h-[40px]" />
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Header;
