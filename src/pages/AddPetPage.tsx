
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, Calendar, Upload, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PetFormData {
  name: string;
  type: 'dog' | 'cat' | '';
  breed: string;
  age: string;
  gender: 'male' | 'female' | '';
  location: string;
  foundDate: string;
  description: string;
  healthConditions: {
    healthy: boolean;
    injured: boolean;
    needsCare: boolean;
    vaccinated: boolean;
    notVaccinated: boolean;
  };
  behaviors: {
    friendly: boolean;
    shy: boolean;
    energetic: boolean;
    calm: boolean;
    goodWithKids: boolean;
    goodWithPets: boolean;
  };
}

const AddPetPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<PetFormData>({
    name: '',
    type: '',
    breed: '',
    age: '',
    gender: '',
    location: '',
    foundDate: '',
    description: '',
    healthConditions: {
      healthy: false,
      injured: false,
      needsCare: false,
      vaccinated: false,
      notVaccinated: false,
    },
    behaviors: {
      friendly: false,
      shy: false,
      energetic: false,
      calm: false,
      goodWithKids: false,
      goodWithPets: false,
    }
  });
  
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleHealthChange = (name: keyof typeof formData.healthConditions, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      healthConditions: {
        ...prev.healthConditions,
        [name]: checked
      }
    }));
  };
  
  const handleBehaviorChange = (name: keyof typeof formData.behaviors, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      behaviors: {
        ...prev.behaviors,
        [name]: checked
      }
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you'd send the data to your API
      console.log('Pet Data:', formData);
      
      toast({
        title: "Pet listing created",
        description: "Your pet has been posted successfully.",
        duration: 3000,
      });
      
      setIsSubmitting(false);
      navigate('/my-listings');
    }, 1500);
  };
  
  const handleClear = () => {
    setFormData({
      name: '',
      type: '',
      breed: '',
      age: '',
      gender: '',
      location: '',
      foundDate: '',
      description: '',
      healthConditions: {
        healthy: false,
        injured: false,
        needsCare: false,
        vaccinated: false,
        notVaccinated: false,
      },
      behaviors: {
        friendly: false,
        shy: false,
        energetic: false,
        calm: false,
        goodWithKids: false,
        goodWithPets: false,
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="bg-white shadow-sm rounded-xl p-6 md:p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl md:text-3xl font-bold">Add a Pet</h1>
              <p className="text-gray-600 mt-1">Help us find a home for this pet</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Image Upload */}
              <div className="mb-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="flex flex-col items-center">
                    <Upload className="h-10 w-10 text-gray-400 mb-4" />
                    <p className="text-gray-700 font-medium">Drop your image here, or browse</p>
                    <p className="text-sm text-gray-500 mt-1">JPG, PNG up to 10MB</p>
                    
                    <div className="mt-4">
                      <label 
                        htmlFor="file-upload" 
                        className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pawmi-orange hover:bg-pawmi-orange/90 focus:outline-none cursor-pointer"
                      >
                        Browse Files
                      </label>
                      <input 
                        id="file-upload" 
                        name="file-upload" 
                        type="file" 
                        className="sr-only" 
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type" className="after:content-['*'] after:ml-0.5 after:text-red-500">Pet Type</Label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleTextChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pawmi-orange/50"
                    required
                  >
                    <option value="" disabled>Select type</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gender" className="after:content-['*'] after:ml-0.5 after:text-red-500">Gender</Label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleTextChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pawmi-orange/50"
                    required
                  >
                    <option value="" disabled>Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              
              {/* Health Condition */}
              <div className="space-y-2">
                <Label className="after:content-['*'] after:ml-0.5 after:text-red-500">Health Condition</Label>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-white border border-gray-200 rounded-full px-4 py-2 flex items-center">
                    <Checkbox
                      id="healthy"
                      checked={formData.healthConditions.healthy}
                      onCheckedChange={(checked) => handleHealthChange('healthy', !!checked)}
                      className="mr-2"
                    />
                    <Label htmlFor="healthy" className="cursor-pointer text-sm">Healthy</Label>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-full px-4 py-2 flex items-center">
                    <Checkbox
                      id="injured"
                      checked={formData.healthConditions.injured}
                      onCheckedChange={(checked) => handleHealthChange('injured', !!checked)}
                      className="mr-2"
                    />
                    <Label htmlFor="injured" className="cursor-pointer text-sm">Injured</Label>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-full px-4 py-2 flex items-center">
                    <Checkbox
                      id="needsCare"
                      checked={formData.healthConditions.needsCare}
                      onCheckedChange={(checked) => handleHealthChange('needsCare', !!checked)}
                      className="mr-2"
                    />
                    <Label htmlFor="needsCare" className="cursor-pointer text-sm">Needs Care</Label>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-full px-4 py-2 flex items-center">
                    <Checkbox
                      id="vaccinated"
                      checked={formData.healthConditions.vaccinated}
                      onCheckedChange={(checked) => handleHealthChange('vaccinated', !!checked)}
                      className="mr-2"
                    />
                    <Label htmlFor="vaccinated" className="cursor-pointer text-sm">Vaccinated</Label>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-full px-4 py-2 flex items-center">
                    <Checkbox
                      id="notVaccinated"
                      checked={formData.healthConditions.notVaccinated}
                      onCheckedChange={(checked) => handleHealthChange('notVaccinated', !!checked)}
                      className="mr-2"
                    />
                    <Label htmlFor="notVaccinated" className="cursor-pointer text-sm">Not Vaccinated</Label>
                  </div>
                </div>
              </div>
              
              {/* Behavior */}
              <div className="space-y-2">
                <Label>Behavior</Label>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-white border border-gray-200 rounded-full px-4 py-2 flex items-center">
                    <Checkbox
                      id="friendly"
                      checked={formData.behaviors.friendly}
                      onCheckedChange={(checked) => handleBehaviorChange('friendly', !!checked)}
                      className="mr-2"
                    />
                    <Label htmlFor="friendly" className="cursor-pointer text-sm">Friendly</Label>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-full px-4 py-2 flex items-center">
                    <Checkbox
                      id="shy"
                      checked={formData.behaviors.shy}
                      onCheckedChange={(checked) => handleBehaviorChange('shy', !!checked)}
                      className="mr-2"
                    />
                    <Label htmlFor="shy" className="cursor-pointer text-sm">Shy</Label>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-full px-4 py-2 flex items-center">
                    <Checkbox
                      id="energetic"
                      checked={formData.behaviors.energetic}
                      onCheckedChange={(checked) => handleBehaviorChange('energetic', !!checked)}
                      className="mr-2"
                    />
                    <Label htmlFor="energetic" className="cursor-pointer text-sm">Energetic</Label>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-full px-4 py-2 flex items-center">
                    <Checkbox
                      id="calm"
                      checked={formData.behaviors.calm}
                      onCheckedChange={(checked) => handleBehaviorChange('calm', !!checked)}
                      className="mr-2"
                    />
                    <Label htmlFor="calm" className="cursor-pointer text-sm">Calm</Label>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-full px-4 py-2 flex items-center">
                    <Checkbox
                      id="goodWithKids"
                      checked={formData.behaviors.goodWithKids}
                      onCheckedChange={(checked) => handleBehaviorChange('goodWithKids', !!checked)}
                      className="mr-2"
                    />
                    <Label htmlFor="goodWithKids" className="cursor-pointer text-sm">Good with kids</Label>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-full px-4 py-2 flex items-center">
                    <Checkbox
                      id="goodWithPets"
                      checked={formData.behaviors.goodWithPets}
                      onCheckedChange={(checked) => handleBehaviorChange('goodWithPets', !!checked)}
                      className="mr-2"
                    />
                    <Label htmlFor="goodWithPets" className="cursor-pointer text-sm">Good with pets</Label>
                  </div>
                </div>
              </div>
              
              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="after:content-['*'] after:ml-0.5 after:text-red-500">Location Found</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    id="location"
                    name="location"
                    placeholder="Enter location"
                    value={formData.location}
                    onChange={handleTextChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              {/* Date Found */}
              <div className="space-y-2">
                <Label htmlFor="foundDate" className="after:content-['*'] after:ml-0.5 after:text-red-500">Date & Time Found</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    id="foundDate"
                    name="foundDate"
                    type="date"
                    value={formData.foundDate}
                    onChange={handleTextChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              {/* Additional Notes */}
              <div className="space-y-2">
                <Label htmlFor="description">Additional Notes</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Add any additional information about the pet..."
                  value={formData.description}
                  onChange={handleTextChange}
                  className="min-h-[100px]"
                  maxLength={250}
                />
                <p className="text-xs text-gray-500 text-right">{formData.description.length}/250</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  type="submit" 
                  className="bg-pawmi-orange hover:bg-pawmi-orange/90 text-white flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Posting...
                    </>
                  ) : (
                    'Post Pet'
                  )}
                </Button>
                <Button 
                  type="button"
                  variant="outline" 
                  onClick={handleClear}
                  className="border-gray-300 text-gray-700 flex-1"
                >
                  Clear
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AddPetPage;
