import React from 'react';
import { Play } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="bg-[#0e0b14] py-4 border-b border-gray-800">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center mr-8">
            <Play className="w-8 h-8 text-blue-500 fill-current" />
            <span className="ml-2 text-xl font-bold">BenFarr.com</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <NavLink href="/welcome" active={location.pathname === '/welcome'}>Welcome</NavLink>
            <NavLink href="/" active={location.pathname === '/'}>CDN Project</NavLink>
            <NavLink href="/about" active={location.pathname === '/about'}>About</NavLink>
            <NavLink href="/analysis" active={location.pathname === '/analysis'}>Data Analysis</NavLink>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, active }) => {
  return (
    <Link 
      to={href} 
      className={`text-sm font-medium transition-colors hover:text-blue-400 ${active ? 'text-white' : 'text-gray-400'}`}
    >
      {children}
    </Link>
  );
};

export default Header;