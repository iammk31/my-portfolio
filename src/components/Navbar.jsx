import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/home" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/works" className="hover:text-gray-400">Works</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-gray-400">FAQ</Link>
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
            <Link to="/home" className="block hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/works" className="block hover:text-gray-400">Works</Link>
          </li>
          <li>
            <Link to="/about" className="block hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link to="/faq" className="block hover:text-gray-400">FAQ</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
