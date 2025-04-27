
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff } from 'lucide-react';

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you'd handle authentication here
    console.log('Login with:', { email, password });
    
    toast({
      title: "Signed in successfully",
      description: "Welcome back to Pawmi!",
      duration: 3000,
    });
    
    // Navigate to home page after successful login
    navigate('/');
  };
  
  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <Link to="/" className="inline-flex items-center mb-8">
              <img 
                src="/lovable-uploads/65c87fbc-19f7-4321-83ab-50f77fbd2649.png" 
                alt="Pawmi Logo" 
                className="h-10 w-10 mr-2" 
              />
              <span className="text-2xl font-bold text-pawmi-orange">Pawmi</span>
            </Link>
            <h1 className="text-2xl font-bold">Welcome back to Pawmi!</h1>
            <p className="text-gray-600 mt-2">Find your perfect companion today</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <a href="#" className="text-sm text-pawmi-orange hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-pawmi-orange hover:bg-pawmi-orange/90 text-white py-6"
            >
              Sign In
            </Button>
            
            <div className="text-center text-sm text-gray-600">
              <p className="mb-6">Or continue with</p>
              <div className="flex justify-center space-x-4">
                <button className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </button>
              </div>
            </div>
            
            <div className="mt-8 text-center text-sm">
              <p className="text-gray-600">
                Don't have an account? <Link to="/signup" className="text-pawmi-orange font-medium hover:underline">Sign up</Link>
              </p>
            </div>
          </form>
          
          <div className="mt-8 text-center text-xs text-gray-500">
            <p>By continuing, you agree to our <Link to="/terms" className="underline">Terms of Service</Link> and <Link to="/privacy" className="underline">Privacy Policy</Link></p>
          </div>
        </div>
      </div>
      
      {/* Right side - Image */}
      <div 
        className="hidden md:block md:w-1/2 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url('/lovable-uploads/a317a5ff-c6bb-48e7-9967-36d3ed4e481f.png')` 
        }}
      >
        <div className="h-full w-full bg-pawmi-orange/20 backdrop-blur-sm flex items-center justify-center p-8">
          <div className="max-w-md text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Companion</h2>
            <p className="text-lg">Join thousands who've found their forever friends through Pawmi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
