import React, { useState } from 'react';
import { Menu, X, Waves } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black/90 to-black/60 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Waves className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold">Screenwave</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full font-semibold transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <NavLink href="#home" mobile>Home</NavLink>
            <NavLink href="#services" mobile>Services</NavLink>
            <NavLink href="#about" mobile>About</NavLink>
            <NavLink href="#contact" mobile>Contact</NavLink>
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full font-semibold transition-all w-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) {
  const baseClasses = "text-gray-300 hover:text-white transition-colors";
  const mobileClasses = mobile ? "block py-2" : "";
  
  return (
    <a href={href} className={`${baseClasses} ${mobileClasses}`}>
      {children}
    </a>
  );
}