
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PetCardProps {
  id: string;
  name: string;
  image: string;
  location: string;
  status: 'Available' | 'Adopted' | 'Pending';
  description: string;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
}

const PetCard: React.FC<PetCardProps> = ({
  id,
  name,
  image,
  location,
  status,
  description,
  isFavorite = false,
  onFavoriteToggle,
}) => {
  const getStatusClass = () => {
    switch (status) {
      case 'Available':
        return 'status-available';
      case 'Adopted':
        return 'status-adopted';
      case 'Pending':
        return 'status-pending';
      default:
        return '';
    }
  };

  return (
    <div className="pet-card">
      <div className="relative">
        <Link to={`/pets/${id}`}>
          <img 
            src={image} 
            alt={`${name} - Pet for adoption`} 
            className="w-full h-64 object-cover"
          />
        </Link>
        <button 
          onClick={onFavoriteToggle}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            className={`h-5 w-5 ${isFavorite ? 'fill-pawmi-orange text-pawmi-orange' : 'text-gray-500'}`} 
          />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/pets/${id}`} className="hover:text-pawmi-orange">
            <h3 className="text-xl font-semibold">{name}</h3>
          </Link>
          <span className={`status-badge ${getStatusClass()}`}>{status}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">
          <svg className="inline h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </p>
        
        <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>
        
        <Link to={`/adopt/${id}`} className="block">
          <Button 
            className="w-full bg-pawmi-orange hover:bg-pawmi-orange/90 text-white"
            disabled={status === 'Adopted'}
          >
            {status === 'Adopted' ? 'Already Adopted' : 'Adopt Now'}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PetCard;
