import { useEffect, useRef, useState } from "react";
import { navLinks } from "../constants/index";
import { Link } from "react-router-dom";

interface NavItemProps {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const NavItems = ({ onClick }: NavItemProps) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, emoji, name, color }) => (
        <Link
          key={id}
          to={href}
          className="nav-li_a"
          aria-label={name}
          onClick={onClick}
        >
          <li
            style={{ "--hover-color": color } as React.CSSProperties}
            className="nav-li drop-shadow-2xl hover:text-[var(--hover-color)]"
          >
            <span className="nav-emoji">{emoji}</span>
            {name}
          </li>
        </Link>
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

  function ScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }

  useEffect(() => {
    ScrollToTop();
    const interval = setInterval(() => {
      if (logo.current) {
        logo.current.classList.toggle("rotate");
      }
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <header
      className={
        "absolute top-0 left-0 right-0 z-10 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/60 before:to-transparent before:-z-10"
      }
    >
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center sm:py-3 max-sm:py-2 mx-auto c-space">
          <Link to="/" className="cursor-pointer">
            <img
              ref={logo}
              src="./img/logo.svg"
              className="sm:h-[40px] max-sm:h-[30px] logo"
              alt="logo"
            />
          </Link>
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
      <div className={`nav-bg ${isOpen ? "open" : ""}`}></div>
      <div
        className={`nav-sidebar ${isOpen ? "h-screen open" : "opacity-0 h-0"}`}
      >
        <nav className="p-5">
          <NavItems onClick={toggleMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
