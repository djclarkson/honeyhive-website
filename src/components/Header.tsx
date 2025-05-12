import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface HeaderProps {
  onLoginClick: () => void;
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, isAuthenticated, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo width={140} height={28} />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">Features</a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors">Testimonials</a>
          <Link to="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</Link>
          
          {isAuthenticated ? (
            <button 
              onClick={onLogout}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 transition-colors"
            >
              Logout
            </button>
          ) : (
            <button 
              onClick={onLoginClick}
              className="px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors"
            >
              Login
            </button>
          )}
        </div>
        
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <Link
              to="/contact" 
              className="text-gray-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {isAuthenticated ? (
              <button 
                onClick={() => {
                  onLogout();
                  setIsMenuOpen(false);
                }}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 transition-colors w-full"
              >
                Logout
              </button>
            ) : (
              <button 
                onClick={() => {
                  onLoginClick();
                  setIsMenuOpen(false);
                }}
                className="px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors w-full"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;