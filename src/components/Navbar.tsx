import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Search, User, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface NavbarProps {
  isAuthenticated?: boolean;
}
const Navbar: React.FC<NavbarProps> = ({
  isAuthenticated = false
}) => {
  return <nav className="bg-white py-4 px-4 md:px-6 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img alt="Pawmi Logo" src="/lovable-uploads/1b8c2fb2-356d-4c6b-9ebf-24e90126bbfb.png" className="h-8 w-8 mr-2 object-scale-down" />
            <span className="text-xl font-bold text-pawmi-orange">Pawmi</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-pawmi-orange transition">Home</Link>
          <Link to="/browse" className="text-gray-700 hover:text-pawmi-orange transition">Browse Pets</Link>
          <Link to="/about" className="text-gray-700 hover:text-pawmi-orange transition">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-pawmi-orange transition">Contact</Link>
        </div>
        
        {isAuthenticated ? <div className="flex items-center space-x-4">
            <Link to="/favorites" className="text-gray-700 hover:text-pawmi-orange" aria-label="Favorites">
              <Heart className="h-5 w-5" />
            </Link>
            <Link to="/messages" className="text-gray-700 hover:text-pawmi-orange" aria-label="Messages">
              <MessageCircle className="h-5 w-5" />
            </Link>
            <Link to="/add-pet" className="text-gray-700 hover:text-pawmi-orange" aria-label="Add Pet">
              <Plus className="h-5 w-5" />
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-pawmi-orange" aria-label="Profile">
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <User className="h-5 w-5" />
              </div>
            </Link>
          </div> : <div className="flex items-center space-x-2">
            <Link to="/signin">
              <Button variant="ghost" className="text-pawmi-orange hover:text-pawmi-orange hover:bg-pawmi-peach/50">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-pawmi-orange hover:bg-pawmi-orange/90 text-white">Sign Up</Button>
            </Link>
          </div>}
      </div>
    </nav>;
};
export default Navbar;