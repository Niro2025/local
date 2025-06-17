import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <img 
                src="/ut.jpg" 
                alt="Unique Trust Investment" 
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-lg font-bold">Unique Trust Investment</span>
            </Link>
            <p className="text-gray-300 mb-3 text-sm">
              Providing expert financial solutions since 2010. We help businesses and individuals achieve their financial goals with confidence through our innovative products.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-300 hover:text-accent-400 transition" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-400 transition" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-400 transition" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-400 transition" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1.5">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-400 transition text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-400 transition text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent-400 transition text-sm">Services</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-accent-400 transition text-sm">Careers</Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-300 hover:text-accent-400 transition text-sm">Feedback</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-400 transition text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-base font-semibold mb-3">Our Products</h3>
            <ul className="space-y-1.5">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent-400 transition text-sm">Divimaga</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent-400 transition text-sm">Peramaga</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent-400 transition text-sm">Leasing Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent-400 transition text-sm">Investment Management</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent-400 transition text-sm">Financial Planning</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent-400 transition text-sm">Trust Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 text-accent-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">123 Finance Street, New York, NY 10001</span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 text-accent-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">(555) 123-4567</span>
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 text-accent-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">info@uniquetrust.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
          <p className="mb-3 text-sm">© {currentYear} Unique Trust Investment. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <Link to="/privacy" className="hover:text-accent-400 transition text-sm">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent-400 transition text-sm">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-accent-400 transition text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;