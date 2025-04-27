
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, MapPin, Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PetCard from '@/components/PetCard';
import { pets as petsData, Pet } from '@/data/petData';
import { useToast } from '@/hooks/use-toast';

const PetDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [pet, setPet] = useState<Pet | null>(null);
  const [similarPets, setSimilarPets] = useState<Pet[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImage, setActiveImage] = useState('');
  
  useEffect(() => {
    // Find the pet from our data
    const foundPet = petsData.find(p => p.id === id);
    
    if (foundPet) {
      setPet(foundPet);
      setActiveImage(foundPet.image);
      
      // Find similar pets (same type, different ID)
      const similar = petsData
        .filter(p => p.type === foundPet.type && p.id !== foundPet.id)
        .slice(0, 4);
      setSimilarPets(similar);
    }
  }, [id]);
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: !isFavorite ? "Added to favorites" : "Removed from favorites",
      description: !isFavorite ? `${pet?.name} has been added to your favorites.` : `${pet?.name} has been removed from your favorites.`,
      duration: 3000,
    });
  };
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Pet profile link has been copied to your clipboard.",
      duration: 3000,
    });
  };
  
  if (!pet) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar isAuthenticated />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl text-gray-600">Pet not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pet Images */}
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <img 
                  src={activeImage} 
                  alt={pet.name} 
                  className="w-full h-96 object-cover"
                />
              </div>
              
              {pet.galleryImages && pet.galleryImages.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {pet.galleryImages.map((img, index) => (
                    <button 
                      key={index}
                      onClick={() => setActiveImage(img)}
                      className={`rounded-lg overflow-hidden border-2 ${activeImage === img ? 'border-pawmi-orange' : 'border-transparent'}`}
                    >
                      <img 
                        src={img} 
                        alt={`${pet.name} ${index + 1}`} 
                        className="w-full h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Pet Details */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-1">{pet.name}</h1>
                  <p className="text-gray-600">{pet.breed}</p>
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={toggleFavorite}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                    aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart 
                      className={`h-5 w-5 ${isFavorite ? 'fill-pawmi-orange text-pawmi-orange' : 'text-gray-500'}`} 
                    />
                  </button>
                  <button 
                    onClick={handleShare}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                    aria-label="Share"
                  >
                    <Share2 className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>
              
              {/* Tags */}
              <div className="mb-6">
                <span className="pet-tag">{pet.type}</span>
                <span className="pet-tag">{pet.gender}</span>
                <span className={`status-badge ${
                  pet.status === 'Available' ? 'status-available' : 
                  pet.status === 'Adopted' ? 'status-adopted' : 'status-pending'
                }`}>{pet.status}</span>
                
                {pet.healthStatus.map((status, index) => (
                  <span key={index} className="pet-tag">{status}</span>
                ))}
                
                {pet.behavior.includes('Good with kids') && (
                  <span className="pet-tag">Good with Kids</span>
                )}
              </div>
              
              {/* Location and details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <MapPin className="h-5 w-5 mr-2 text-pawmi-orange" />
                  <span>Found near {pet.location}</span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Calendar className="h-5 w-5 mr-2 text-pawmi-orange" />
                  <span>Found on {new Date(pet.foundDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <User className="h-5 w-5 mr-2 text-pawmi-orange" />
                  <span>Posted by {pet.postedBy}</span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 mr-2 text-pawmi-orange" />
                  <span>Posted {new Date(pet.postedDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">About {pet.name}</h2>
                <p className="text-gray-700">{pet.description}</p>
                
                <div className="mt-4">
                  <h3 className="font-semibold mb-1">Personality</h3>
                  <div className="flex flex-wrap gap-2">
                    {pet.behavior.map((trait, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Adoption CTA */}
              <div className="space-y-4">
                <Link to={`/adopt/${pet.id}`} className="block">
                  <Button 
                    className="w-full bg-pawmi-orange hover:bg-pawmi-orange/90 text-white py-6 text-lg"
                    disabled={pet.status !== 'Available'}
                  >
                    {pet.status === 'Available' ? 'Adopt This Pet' : 
                     pet.status === 'Adopted' ? 'Already Adopted' : 'Adoption Pending'}
                  </Button>
                </Link>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="border-pawmi-orange text-pawmi-orange hover:bg-pawmi-orange/10">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                    </svg>
                    Copy Link
                  </Button>
                  <Button variant="outline" className="border-pawmi-orange text-pawmi-orange hover:bg-pawmi-orange/10">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path>
                    </svg>
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Similar Pets */}
          {similarPets.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">More Pets Nearby</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {similarPets.map(pet => (
                  <div key={pet.id} className="pet-card">
                    <Link to={`/pets/${pet.id}`}>
                      <div className="relative">
                        <img 
                          src={pet.image} 
                          alt={pet.name} 
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg">{pet.name}</h3>
                        <p className="text-sm text-gray-500">{pet.type}</p>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          {pet.location.split(',')[0]}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PetDetailPage;
