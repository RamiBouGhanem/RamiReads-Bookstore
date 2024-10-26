import React, { useState, useEffect } from "react";

const Header = () => {
  const [isTransparent, setIsTransparent] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 5) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  };

  return (
    <header className={`pl-16 bg-black shadow-md py-6 pr-8 flex items-center space-x-24 ease-in-out ${isTransparent ? 'bg-black opacity-90' : 'bg-black backdrop-blur-lg'}`}>
      <h1 className="text-4xl font-bold text-white tracking-wider mb-2 flex-col pr-0">
        <span className="text-red-400">R</span>@mi
        <span className="text-red-600 font-extrabold tracking-tight">Reads</span>
        <p className="text-lg text-gray-300 font-light italic">Your gateway to great stories</p>
      </h1>

      <nav className="flex space-between items-center ml-0 md:flex space-x-12">
        <li
          className="text-gray-600 hover:text-gray-800 list-none text-xl cursor-pointer"
          onClick={() => scrollToSection('more')}
        >
          More
        </li>
        <li
          className="text-gray-600 hover:text-gray-800 list-none text-xl cursor-pointer"
          onClick={() => scrollToSection('categories')}
        >
          Categories
        </li>
        <li
          className="text-gray-600 hover:text-gray-800 list-none text-xl cursor-pointer"
          onClick={() => scrollToSection('blog')}
        >
          Blog
        </li>
        <li
          className="text-gray-600 hover:text-gray-800 list-none text-xl cursor-pointer"
          onClick={() => scrollToSection('pages')}
        >
          Pages
        </li>
        <li
          className="text-gray-600 hover:text-gray-800 list-none text-xl cursor-pointer"
          onClick={() => scrollToSection('others')}
        >
          Others
        </li>
      </nav>
      <div className="hidden md:flex">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border border-gray-500 bg-gray-100 rounded-md"
        />
      </div>
    </header>
  );
};

export default Header;