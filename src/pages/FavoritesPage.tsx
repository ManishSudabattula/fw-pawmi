
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PetCard from '@/components/PetCard';
import FilterBar from '@/components/FilterBar';
import { pets as petsData } from '@/data/petData';

const FavoritesPage: React.FC = () => {
  // In a real app, this would come from user data or context
  const [favorites, setFavorites] = useState<string[]>(['1', '2', '3']);
  const [activeFilter, setActiveFilter] = useState('all');
  const [petType, setPetType] = useState<'all' | 'dogs' | 'cats'>('all');
  
  const toggleFavorite = (id: string) => {
    setFavorites(prev => prev.filter(petId => petId !== id));
  };
  
  // Filter pets by favorite status and additional filters
  const filteredPets = petsData.filter(pet => {
    if (!favorites.includes(pet.id)) return false;
    
    if (activeFilter !== 'all' && activeFilter.toLowerCase() !== pet.status.toLowerCase()) return false;
    
    if (petType !== 'all') {
      const petTypeFilter = petType === 'dogs' ? 'Dog' : 'Cat';
      if (pet.type !== petTypeFilter) return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated />
      
      <main className="flex-grow">
        <section className="bg-white py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2">Favorites</h1>
            <p className="text-gray-600 mb-8">Pets you've fallen in love with</p>
            
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
              <FilterBar 
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                petType={petType}
                onPetTypeChange={setPetType}
              />
            </div>
            
            {filteredPets.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPets.map(pet => (
                  <PetCard
                    key={pet.id}
                    id={pet.id}
                    name={pet.name}
                    image={pet.image}
                    location={pet.location}
                    status={pet.status}
                    description={pet.description}
                    isFavorite={true}
                    onFavoriteToggle={() => toggleFavorite(pet.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No favorites found.</p>
                <p className="text-gray-500 mt-2">Start adding pets to your favorites!</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FavoritesPage;
