
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { pets as petsData } from '@/data/petData';

interface MyPet {
  id: string;
  name: string;
  image: string;
  location: string;
  status: 'Available' | 'Adopted' | 'Pending';
  postedDate: string;
}

const MyListingsPage: React.FC = () => {
  const { toast } = useToast();
  // Mock user's pets (in a real app, this would come from an API or context)
  const [myPets, setMyPets] = useState<MyPet[]>(
    petsData.slice(0, 6).map(pet => ({
      id: pet.id,
      name: pet.name,
      image: pet.image,
      location: pet.location,
      status: pet.status,
      postedDate: pet.postedDate
    }))
  );
  
  const handleMarkAsAdopted = (id: string) => {
    setMyPets(prevPets => 
      prevPets.map(pet => 
        pet.id === id ? { ...pet, status: 'Adopted' as const } : pet
      )
    );
    
    toast({
      title: "Pet marked as adopted",
      description: "This pet's status has been updated to Adopted.",
      duration: 3000,
    });
  };
  
  const handleDeleteListing = (id: string) => {
    setMyPets(prevPets => prevPets.filter(pet => pet.id !== id));
    
    toast({
      title: "Listing removed",
      description: "The pet listing has been removed.",
      duration: 3000,
    });
  };
  
  // Filter function for the "all" filter (can be expanded for more filters)
  const filterAll = () => myPets;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">My Listings</h1>
              <p className="text-gray-600">Manage your pet listings and track their adoption status</p>
            </div>
            
            <Link to="/add-pet">
              <Button className="mt-4 md:mt-0 bg-pawmi-orange hover:bg-pawmi-orange/90 text-white">
                <PlusCircle className="mr-2 h-5 w-5" />
                Add a Pet
              </Button>
            </Link>
          </div>
          
          <div className="mb-6">
            <button className="bg-pawmi-orange text-white px-4 py-2 rounded-full text-sm">
              all
            </button>
          </div>
          
          {myPets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterAll().map(pet => (
                <div key={pet.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="relative">
                    <img 
                      src={pet.image} 
                      alt={pet.name} 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold">{pet.name}</h3>
                        <p className="text-gray-600 text-sm">{pet.location}</p>
                      </div>
                      <span 
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          pet.status === 'Available' ? 'bg-green-100 text-green-800' :
                          pet.status === 'Adopted' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {pet.status}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-500 mb-4">
                      Posted on {new Date(pet.postedDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Link to={`/edit-pet/${pet.id}`}>
                        <Button 
                          variant="outline" 
                          className="w-full border-gray-300 text-gray-700"
                        >
                          Edit
                        </Button>
                      </Link>
                      
                      {pet.status !== 'Adopted' ? (
                        <Button 
                          onClick={() => handleMarkAsAdopted(pet.id)}
                          className="w-full bg-pawmi-orange hover:bg-pawmi-orange/90 text-white"
                        >
                          Mark as Adopted
                        </Button>
                      ) : (
                        <Button 
                          onClick={() => handleDeleteListing(pet.id)}
                          variant="outline" 
                          className="w-full border-red-300 text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="mb-4">
                <PlusCircle className="mx-auto h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No pet listings yet</h3>
              <p className="text-gray-600 mb-6">Get started by adding your first pet for adoption</p>
              <Link to="/add-pet">
                <Button className="bg-pawmi-orange hover:bg-pawmi-orange/90 text-white">
                  Add Your First Pet
                </Button>
              </Link>
            </div>
          )}
          
          {myPets.length > 0 && (
            <div className="flex justify-center mt-8">
              <nav className="inline-flex">
                <button className="px-3 py-1 rounded-l-md bg-pawmi-orange text-white">
                  1
                </button>
                <button className="px-3 py-1 text-gray-700 hover:bg-gray-100">
                  2
                </button>
                <button className="px-3 py-1 text-gray-700 hover:bg-gray-100">
                  3
                </button>
                <button className="px-3 py-1 rounded-r-md text-gray-700 hover:bg-gray-100">
                  &gt;
                </button>
              </nav>
              
              <div className="text-sm text-gray-500 ml-4 flex items-center">
                Showing 1-6 of 6 results
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MyListingsPage;
