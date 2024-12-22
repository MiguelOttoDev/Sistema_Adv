import React, { useState } from "react";
import { FaHome, FaCog, FaUser, FaSignOutAlt, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import Cards from "./cards";
import List from "./List";

export default function Sidebar() {
  // Inicializando isOpen como false para deixar a sidebar fechada por padrão
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white h-screen transition-all duration-300 ${isOpen ? "w-64" : "w-16"} fixed top-0 left-0 z-10`}
      >
        {/* Header da Sidebar */}
        <div className="flex items-center justify-between p-4">
          <h1
            className={`text-2xl font-bold transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          >
            {isOpen && <p><FaUserCircle /></p>}
          </h1>
          <button
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white focus:outline-none flex items-center justify-center w-8 h-8"
          >
            <div className="transition-transform duration-300">
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>
          </button>
        </div>

        {/* Navegação */}
        <nav className="mt-4">
          <ul>
            <li className="flex items-center gap-4 p-4 hover:bg-gray-700">
              <FaHome size={20} />
              {isOpen && <span className="text-sm">Dashboard</span>}
            </li>
            <li className="flex items-center gap-4 p-4 hover:bg-gray-700">
              <FaCog size={20} />
              {isOpen && <span className="text-sm">Settings</span>}
            </li>
            <li className="flex items-center gap-4 p-4 hover:bg-gray-700">
              <FaUser size={20} />
              {isOpen && <span className="text-sm">Profile</span>}
            </li>
            <li className="flex items-center gap-4 p-4 hover:bg-gray-700">
              <FaSignOutAlt size={20} />
              {isOpen && <span className="text-sm">Logout</span>}
            </li>
          </ul>
        </nav>
      </div>

      {/* Botão para reabrir a Sidebar quando fechada */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none flex items-center justify-center"
        >
          <div className="transition-transform duration-300">
            <FaBars size={20} />
          </div>
        </button>
      )}

      {/* Main Content */}
      <div
        className={`flex-1 bg-gray-100 p-6 overflow-y-auto ${isOpen ? "ml-64" : "ml-16"}`}
      >
        <Cards />
        <List />
      </div>
    </div>
  );
}
