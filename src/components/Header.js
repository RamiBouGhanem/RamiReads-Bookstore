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
  className={`pl-16 pr-8 py-6 flex items-center space-x-24 ${
    isTransparent ? "bg-zinc-950 opacity-90" : "bg-black backdrop-blur-lg"
  }`}
>
  <h1 className="text-4xl font-bold text-white tracking-wider ml-20 mr-8">
    <span className="text-red-400">R</span>@mi
    <span className="text-red-600 font-extrabold tracking-tight">Reads</span>
    <p className="text-lg text-gray-300 font-light italic">
      Your gateway to great stories
    </p>
  </h1>

  <nav className="flex items-center space-x-12">
    {[
      { icon: <FaHeart />, label: "Categories", id: "categories" },
      { icon: <FaBookOpen />, label: "More", id: "more" },
      { icon: <FaPhone />, label: "Contact", id: "contact" },
      { icon: <FaUser />, label: "Sign In", onClick: () => navigate("/loginpage") },
      { icon: <FaShoppingCart />, label: "Others" }
    ].map((item, index) => (
      <li
        key={index}
        className="text-gray-600 hover:text-gray-800 list-none text-xl cursor-pointer flex items-center"
        onClick={item.onClick || (() => scrollToSection(item.id))}
        aria-label={item.label}
      >
        {item.icon}
        <span className="ml-2">{item.label}</span>
      </li>
    ))}
  </nav>
</header>

  );
};

export default Header;
