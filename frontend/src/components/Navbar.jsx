import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (nav) => {
    setActiveNav(nav);
    setMenuOpen(false); // Cerrar el menú al hacer click en un link
    document.body.classList.remove("overflow-hidden");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  const links = [
    { id: 2, link: "#About Me", label: "About Me" },
    { id: 3, link: "#Projects", label: "Projects" },
    { id: 4, link: "#Contact", label: "Contact" },
  ];

  const navLinks = links.map((link) => (
    <li
      key={link.id}
      className={`${
        activeNav === link.link ? "text-[#dcab6b]" : "text-white"
      } hover:text-[#dcab6b] cursor-pointer font-bold text-lg transition-transform duration-200 hover:scale-110`}>
      <Link to={link.link} onClick={() => handleClick(link.link)}>
        {link.label}
      </Link>
    </li>
  ));

  return (
    <nav className='w-full h-20 bg-[#6e0d25]'>
      <div className='flex justify-between items-center w-full h-full px-4 md:px-16'>
        {/* Logo */}
        <h1 className='text-3xl font-bold sm:text-4xl text-[#dcab6b]'>Developer</h1>

        {/* Desktop Menu */}
        <ul className='hidden md:flex md:gap-10'>{navLinks}</ul>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden' onClick={toggleMenu} aria-label='Toggle menu'>
          <IoMenu size={25} className='text-white' />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className='md:hidden absolute bg-[#0f0f0f] top-20 left-0 w-full flex flex-col items-center space-y-4 py-6'>
          {navLinks}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
