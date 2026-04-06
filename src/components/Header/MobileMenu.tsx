"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const MobileMenu = () => {
  /**
   * Toggle Menu open/close
   */
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>{isOpen ? <FiX /> : <FiMenu />}</button>
      </div>
    </>
  );
};

export default MobileMenu;
