import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const AboutPage: React.FC = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-pawmi-peach/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Pawmi</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-700">
              We're on a mission to connect stray animals with loving homes, making pet adoption simple, accessible, and joyful.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2020, Pawmi was born from a simple yet powerful idea: every pet deserves a loving home. 
                  Our founder, Sarah, witnessed countless stray animals in her city lacking proper care and shelter. 
                  Determined to make a difference, she created Pawmi as a platform to simplify and streamline the pet adoption process.
                </p>
                <p className="text-gray-700">
                  Today, we've helped thousands of pets find their forever homes. Our community of pet lovers, rescuers, 
                  and adopters continues to grow, united by a shared love for animals and a commitment to their wellbeing.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img alt="Dog and cat together" src="/lovable-uploads/789366d5-284a-411f-9e52-0fa8bfb0e0f2.png" className="w-full h-auto object-scale-down" />
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Mission & Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 bg-pawmi-orange/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-pawmi-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Compassion First</h3>
                <p className="text-gray-700">
                  We believe in treating every animal with dignity and respect. Each pet's welfare is at the heart of everything we do.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 bg-pawmi-orange/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-pawmi-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Perfect Matches</h3>
                <p className="text-gray-700">
                  We're committed to creating lasting bonds between pets and adopters, ensuring both find their perfect companion.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 bg-pawmi-orange/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-pawmi-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Community Focused</h3>
                <p className="text-gray-700">
                  We build connections between pet lovers, shelters, and rescuers to create a supportive network for animal welfare.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-gray-700 mb-8">
                Whether you're looking to adopt, volunteer, or support our cause, there's a place for you in the Pawmi community. 
                Together, we can ensure every pet finds the loving home they deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/browse" className="bg-pawmi-orange hover:bg-pawmi-orange/90 text-white px-6 py-3 rounded-md font-medium">
                  Find a Pet
                </a>
                <a href="/contact" className="border border-pawmi-orange text-pawmi-orange hover:bg-pawmi-orange/10 px-6 py-3 rounded-md font-medium">
                  Get Involved
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default AboutPage;