
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-pawmi-peach/30 to-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Find Your Perfect Companion
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Join thousands who've given pets a forever home
                </p>
                <Link to="/browse">
                  <Button className="bg-pawmi-orange hover:bg-pawmi-orange/90 text-white text-lg px-8 py-6">
                    Start Adopting
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/lovable-uploads/893a89ce-5c34-4be1-8304-884c34f541be.png" 
                  alt="Dog and cat together" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="bg-pawmi-peach/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-10 w-10 text-pawmi-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Browse Pets</h3>
                <p className="text-gray-600">Search local strays by location and preferences</p>
              </div>
              
              <div className="text-center">
                <div className="bg-pawmi-peach/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-pawmi-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Meet & Match</h3>
                <p className="text-gray-600">Schedule a meet-up with your potential companion</p>
              </div>
              
              <div className="text-center">
                <div className="bg-pawmi-peach/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="h-10 w-10 text-pawmi-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Welcome Home</h3>
                <p className="text-gray-600">Complete adoption process and give them a forever home</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16 bg-pawmi-peach/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex flex-col items-center mb-4">
                  <img 
                    src="/lovable-uploads/32bc3869-4ce3-4bff-a7b0-cfea520c54af.png"
                    alt="Pet success story" 
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <p className="text-gray-700 italic text-center mb-4">
                    "Finding Max was the best decision of my life. He brings so much joy to our family!"
                  </p>
                  <div className="text-center">
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">New York, NY</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex flex-col items-center mb-4">
                  <img 
                    src="/lovable-uploads/99c01924-5fb7-421f-86ee-eda296008b2d.png"
                    alt="Pet success story" 
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <p className="text-gray-700 italic text-center mb-4">
                    "Luna went from a scared stray to the most loving cat. Thank you Pawmi!"
                  </p>
                  <div className="text-center">
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-sm text-gray-500">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex flex-col items-center mb-4">
                  <img 
                    src="/lovable-uploads/baa8ae45-ff06-4d10-bf7b-cbc58ff24bc1.png"
                    alt="Pet success story" 
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <p className="text-gray-700 italic text-center mb-4">
                    "The adoption process was so smooth. Now we have our perfect furry friend!"
                  </p>
                  <div className="text-center">
                    <h4 className="font-semibold">Emily Davis</h4>
                    <p className="text-sm text-gray-500">Austin, TX</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/success-stories">
                <Button variant="outline" className="border-pawmi-orange text-pawmi-orange hover:bg-pawmi-orange/10">
                  Read More Stories
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
