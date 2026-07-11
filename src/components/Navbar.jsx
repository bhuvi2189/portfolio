import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 1, text: "Home", link: "home" },
    { id: 2, text: "About", link: "about" },
    { id: 3, text: "Projects", link: "portfolio" },
    { id: 4, text: "Skills", link: "skills" },
    { id: 5, text: "Contact", link: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/homeimg.jpeg"
              alt="Bhuvanesh"
              className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover object-top"
            />

            <div>
              <h1 className="text-xl font-bold text-white">
                Bhuvanesh
              </h1>

              <p className="text-sm text-gray-400">
                AWS Cloud & DevOps Engineer
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-white">
            {navItems.map(({ id, text, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  activeClass="text-blue-400"
                  className="cursor-pointer hover:text-blue-400 transition duration-300"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-white">
            {isMobileMenuOpen ? (
              <IoCloseSharp
                className="text-3xl cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            ) : (
              <AiOutlineMenu
                className="text-3xl cursor-pointer"
                onClick={() => setIsMobileMenuOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 rounded-lg py-4">
            <ul className="flex flex-col items-center space-y-5 text-white">
              {navItems.map(({ id, text, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="cursor-pointer hover:text-blue-400"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}