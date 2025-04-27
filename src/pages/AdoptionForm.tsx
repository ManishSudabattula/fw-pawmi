
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { pets as petsData } from '@/data/petData';

const AdoptionForm = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [pet, setPet] = useState<any>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredTime: '',
    reason: '',
    hasPetExperience: '',
    petExperienceDetails: '',
    agreesToTerms: false,
  });
  
  useEffect(() => {
    const foundPet = petsData.find(p => p.id === id);
    if (foundPet) {
      setPet(foundPet);
    }
  }, [id]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, hasPetExperience: value }));
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreesToTerms: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.reason || !formData.hasPetExperience || !formData.agreesToTerms) {
      toast({
        title: "Form incomplete",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would submit the form data to your backend
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Adoption request submitted",
      description: `Your request to adopt ${pet?.name} has been sent. The caretaker will contact you soon.`,
      duration: 5000,
    });
    
    // Navigate to the confirmation page or pet detail
    setTimeout(() => {
      navigate(`/pets/${id}`);
    }, 2000);
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
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="bg-white shadow-sm rounded-xl p-6 md:p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl md:text-3xl font-bold">Request to Adopt {pet.name}</h1>
              <p className="text-gray-600 mt-1">Your request will be reviewed by {pet.name}'s current caretaker</p>
            </div>
            
            {/* Pet info summary */}
            <div className="flex items-center p-4 bg-gray-50 rounded-lg mb-8">
              <img 
                src={pet.image} 
                alt={pet.name} 
                className="w-20 h-20 rounded-lg object-cover mr-4"
              />
              <div>
                <h2 className="font-medium">{pet.name}</h2>
                <p className="text-sm text-gray-600">{pet.breed} • {pet.age} old</p>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  {pet.location}
                </div>
                <div className="flex items-center text-sm text-green-600 mt-1">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                  <span>Healthy, Vaccinated</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Contact Time</Label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pawmi-orange/50"
                      >
                        <option value="" disabled>Select time</option>
                        <option value="morning">Morning (8am - 12pm)</option>
                        <option value="afternoon">Afternoon (12pm - 5pm)</option>
                        <option value="evening">Evening (5pm - 9pm)</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">About Your Interest</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reason">Why would you like to adopt {pet.name}?</Label>
                      <Textarea
                        id="reason"
                        name="reason"
                        placeholder={`Tell us why you'd like to adopt ${pet.name} and what kind of home you can provide...`}
                        value={formData.reason}
                        onChange={handleChange}
                        required
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Do you have experience with pets?</Label>
                      <RadioGroup 
                        value={formData.hasPetExperience}
                        onValueChange={handleRadioChange}
                        className="flex space-x-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="yes" />
                          <Label htmlFor="yes" className="cursor-pointer">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="no" />
                          <Label htmlFor="no" className="cursor-pointer">No</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    {formData.hasPetExperience === 'yes' && (
                      <div className="space-y-2">
                        <Label htmlFor="petExperienceDetails">If yes, please tell us about your experience...</Label>
                        <Textarea
                          id="petExperienceDetails"
                          name="petExperienceDetails"
                          placeholder="Please describe your experience with pets..."
                          value={formData.petExperienceDetails}
                          onChange={handleChange}
                          className="min-h-[100px]"
                        />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="pt-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="terms" 
                      checked={formData.agreesToTerms}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-700">
                      I understand that adoption approval is based on pet compatibility and the final decision rests with the current caretaker.
                    </Label>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-800">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <p>We care deeply about finding the perfect match for both pets and adopters. Your request will be carefully reviewed by {pet.name}'s caretaker, who will reach out to discuss the next steps in the adoption process.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button 
                      type="submit" 
                      className="w-full bg-pawmi-orange hover:bg-pawmi-orange/90 text-white py-6 text-lg"
                    >
                      Send Adoption Request
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdoptionForm;
