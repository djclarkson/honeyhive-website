import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../assets/images/honeyhivelogo.svg';

interface LogoProps {
  className?: string;
  width?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', width = 130 }) => {
  return (
    <Link to="/" className={`inline-block ${className}`}>
      <img 
        src={logoSvg} 
        alt="Honeyhive Logo" 
        width={width} 
        className="h-auto"
      />
    </Link>
  );
};

export default Logo; 