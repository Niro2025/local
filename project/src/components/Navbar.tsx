import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2">
            <img 
              src="/ut.jpg" 
              alt="Unique Trust Investment" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-primary-900">Unique Trust Investment</span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `font-medium transition hover:text-primary-600 ${
                  isActive ? 'text-primary-600' : isScrolled ? 'text-gray-800' : 'text-gray-800'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `font-medium transition hover:text-primary-600 ${
                  isActive ? 'text-primary-600' : isScrolled ? 'text-gray-800' : 'text-gray-800'
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `font-medium transition hover:text-primary-600 ${
                  isActive ? 'text-primary-600' : isScrolled ? 'text-gray-800' : 'text-gray-800'
                }`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/careers" 
              className={({ isActive }) => 
                `font-medium transition hover:text-primary-600 ${
                  isActive ? 'text-primary-600' : isScrolled ? 'text-gray-800' : 'text-gray-800'
                }`
              }
            >
              Careers
            </NavLink>
            <NavLink 
              to="/feedback" 
              className={({ isActive }) => 
                `font-medium transition hover:text-primary-600 ${
                  isActive ? 'text-primary-600' : isScrolled ? 'text-gray-800' : 'text-gray-800'
                }`
              }
            >
              Feedback
            </NavLink>
            <NavLink 
              to="/contact" 
              className="ml-2 px-4 py-2 bg-primary-600 text-white rounded-md transition hover:bg-primary-700"
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 z-50">
            <nav className="flex flex-col gap-3">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `p-2 font-medium ${isActive ? 'text-primary-600' : 'text-gray-800'}`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `p-2 font-medium ${isActive ? 'text-primary-600' : 'text-gray-800'}`
                }
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/services"
                className={({ isActive }) => 
                  `p-2 font-medium ${isActive ? 'text-primary-600' : 'text-gray-800'}`
                }
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
              <NavLink 
                to="/careers" 
                className={({ isActive }) => 
                  `p-2 font-medium ${isActive ? 'text-primary-600' : 'text-gray-800'}`
                }
                onClick={() => setIsOpen(false)}
              >
                Careers
              </NavLink>
              <NavLink 
                to="/feedback" 
                className={({ isActive }) => 
                  `p-2 font-medium ${isActive ? 'text-primary-600' : 'text-gray-800'}`
                }
                onClick={() => setIsOpen(false)}
              >
                Feedback
              </NavLink>
              <NavLink 
                to="/contact" 
                className="mt-2 px-4 py-2 bg-primary-600 text-white rounded-md text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;