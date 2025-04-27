
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PetCard from '@/components/PetCard';
import FilterBar from '@/components/FilterBar';
import { pets as petsData } from '@/data/petData';
import { Search } from 'lucide-react';

const BrowsePage: React.FC = () => {
  const [petType, setPetType] = useState<'all' | 'dogs' | 'cats'>('all');
  const [sortBy, setSortBy] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => 
      prev.includes(id) ? prev.filter(petId => petId !== id) : [...prev, id]
    );
  };
  
  const filteredPets = petsData.filter(pet => {
    // Filter by pet type
    if (petType !== 'all') {
      const petTypeFilter = petType === 'dogs' ? 'Dog' : 'Cat';
      if (pet.type !== petTypeFilter) return false;
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        pet.name.toLowerCase().includes(query) ||
        pet.breed.toLowerCase().includes(query) ||
        pet.location.toLowerCase().includes(query)
      );
    }
    
    return true;
  });

  // Sort pets based on selected option
  const sortedPets = [...filteredPets].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
      case 'oldest':
        return new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime();
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated />
      
      <main className="flex-grow">
        <section className="bg-white py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2">Find Your Perfect Pet</h1>
            <p className="text-gray-600 mb-8">Browse pets available for adoption near you</p>
            
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search by name, breed, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pawmi-orange/50"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            
            <FilterBar 
              activeFilter="all"
              onFilterChange={() => {}}
              petType={petType}
              onPetTypeChange={setPetType}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
            
            {sortedPets.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedPets.map(pet => (
                  <PetCard
                    key={pet.id}
                    id={pet.id}
                    name={pet.name}
                    image={pet.image}
                    location={pet.location}
                    status={pet.status}
                    description={pet.description}
                    isFavorite={favorites.includes(pet.id)}
                    onFavoriteToggle={() => toggleFavorite(pet.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No pets found matching your criteria.</p>
                <p className="text-gray-500 mt-2">Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BrowsePage;
