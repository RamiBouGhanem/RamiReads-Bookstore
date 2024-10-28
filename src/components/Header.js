import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaHeart, FaPhone, FaUser, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [isTransparent, setIsTransparent] = useState(false);

  const navigate = useNavigate();

  const handleScroll = () => {
    setIsTransparent(window.scrollY > 5); // if (greater than 5) --> true --> transparent (otherwise, it is false!)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);      // Ids will be taken when clicking on navlinks!
    if (section) {                                    // it is used for 'others' links so clicking on it will do nothing!
      section.scrollIntoView({ behavior: "smooth" }); // contact.scrollIntoView --> will be scrolled into it (viewed as a screen).
    }
  };

  return (
    <header
      className={`pl-16 bg-zinc-950 shadow-md py-6 pr-8 flex items-center space-x-24 ease-in-out ${
        isTransparent ? "bg-zinc-950 opacity-90" : "bg-black backdrop-blur-lg"
      }`}
    >
      <h1 className="text-4xl font-bold text-white tracking-wider mb-2 flex-col pr-0 ml-20 mr-8">
        <span className="text-red-400">R</span>@mi
        <span className="text-red-600 font-extrabold tracking-tight">
          Reads
        </span>
        <p className="text-lg text-gray-300 font-light italic">
          Your gateway to great stories
        </p>
      </h1>

      <nav className="flex space-between items-center ml-0 md:flex space-x-12">
      <li
          className="text-gray-600 hover:text-gray-800 list-none text-xl cursor-pointer flex items-center"
          onClick={() => scrollToSection("categories")}
        >
          <FaHeart className="mr-2" />
          Categories
        </li>
        <li
          className="text-gray-600 hover:text-gray-800 list-none text-xl cursor-pointer flex items-center"
          onClick={() => scrollToSection("more")}
        >
          <FaBookOpen className="mr-2" />
          More
        </li>
        <li
          className="text-gray-600 hover:text-gray-800 list-none text-xl cursor-pointer flex items-center"
          onClick={() => scrollToSection("contact")}
        >
          <FaPhone className="mr-2"/>
          Contact
        </li>
        <li
          className="text-gray-600 hover:text-gray-800 list-none text-xl cursor-pointer flex items-center"
          onClick={() => {
            navigate("/loginpage");
          }}
        >
          <FaUser className="mr-2" />
          Sign In
        </li>
        <li className="text-gray-600 hover:text-gray-800 list-none text-xl cursor-pointer flex items-center">
          <FaShoppingCart className="mr-2" />
          Others
        </li>
      </nav>
      {/* <div className="hidden md:flex">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border border-gray-500 bg-gray-100 rounded-md"
        />
      </div> */}
    </header>
  );
};

export default Header;
