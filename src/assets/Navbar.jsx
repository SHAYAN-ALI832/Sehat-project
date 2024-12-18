import React, { useState } from 'react';
import srsp from './srsp.png';
import mpcl from './mpcl.png';
import admin from './admin.png';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // To handle the active state manually

  return (
    <div className="w-screen h-[55px] flex items-center justify-between bg-white px-4 fixed top-0 z-10 whitespace-nowrap shadow-md">
      {/* Left Section: Logo and Title */}
      <div className="flex items-center gap-x-2">
        <img src={srsp} alt="SRSP Logo" className="w-[30px] h-[30px] md:w-[50px] md:h-[52px] rounded-md" />
        <img src={mpcl} alt="MPCL Logo" className="w-[30px] h-[30px] md:w-[50px] md:h-[52px] rounded-md" />
        <p className="text-[13px] md:text-[17px] font-semibold">Sehat Umeed Project Waziristan</p>
      </div>

      {/* Hamburger Menu for small screens */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <GiHamburgerMenu className="text-gray-700 text-2xl" />
        </button>
      </div>

      {/* Navigation Section */}
      <nav
        className={`absolute md:static top-[55px] left-0 bg-white w-full md:w-auto flex flex-col md:flex-row md:items-center gap-6 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <Link
          to="/DashBoard"
          className={`duration-200 border-b-2 ${
            location.pathname === '/DashBoard' ? 'text-orange-400 border-orange-400' : 'text-gray-700 border-transparent'
          } hover:text-orange-400 hover:border-orange-400`}
        >
          Dashboard
        </Link>
        <Link
          to="/Patients"
          className={`duration-200 border-b-2 ${
            location.pathname === '/Patients' ? 'text-orange-400 border-orange-400' : 'text-gray-700 border-transparent'
          } hover:text-orange-400 hover:border-orange-400`}
        >
          Patients
        </Link>
        <Link
          to="/Success"
          className={`duration-200 border-b-2 ${
            location.pathname === '/Success' ? 'text-orange-400 border-orange-400' : 'text-gray-700 border-transparent'
          } hover:text-orange-400 hover:border-orange-400`}
        >
          Success
        </Link>
      </nav>

      {/* Right Section: Admin */}
      <div className="hidden md:flex items-center gap-2">
        <img src={admin} alt="Admin" className="w-8 h-8 rounded-full" />
        <Link className="text-gray-700 font-medium">Admin</Link>
      </div>
    </div>
  );
}

export default Navbar;
