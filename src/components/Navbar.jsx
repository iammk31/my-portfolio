import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full py-4 bg-gray-900 text-white fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-lg font-bold">Mohit Kumar</h1>
       
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#works" className="hover:text-gray-400">Works</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="#faq" className="hover:text-gray-400">FAQ</a>
          </li>
        </ul>

       
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-400 focus:outline-none">
            ☰
          </button>
        </div>
      </div>

     
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 bg-gray-800 py-4 px-4">
          <li>
            <a href="#home" className="block hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#works" className="block hover:text-gray-400">Works</a>
          </li>
          <li>
            <a href="#about" className="block hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="#faq" className="block hover:text-gray-400">FAQ</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
