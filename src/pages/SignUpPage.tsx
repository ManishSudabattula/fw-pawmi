import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff } from 'lucide-react';
const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, you'd handle registration here
    console.log('Register with:', formData);
    toast({
      title: "Account created successfully",
      description: "Welcome to Pawmi! Let's find some furry friends.",
      duration: 3000
    });

    // Navigate to home page after successful registration
    navigate('/');
  };
  return <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <Link to="/" className="inline-flex items-center mb-8">
              <img alt="Pawmi Logo" src="/lovable-uploads/53d0b19c-f43d-447c-afb4-97e8263bedaf.png" className="h-10 w-10 mr-2 object-scale-down" />
              <span className="text-2xl font-bold text-pawmi-orange">Pawmi</span>
            </Link>
            <h1 className="text-2xl font-bold">Create Your Account</h1>
            <p className="text-gray-600 mt-2">Let's find some furry friends a home together</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <Input id="fullName" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} required className="w-full" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <Input id="email" name="email" type="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required className="w-full" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Create a password" value={formData.password} onChange={handleChange} required className="w-full pr-10" />
                <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <Input id="confirmPassword" name="confirmPassword" type={showPassword ? 'text' : 'password'} placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required className="w-full" />
            </div>
            
            <Button type="submit" className="w-full bg-pawmi-orange hover:bg-pawmi-orange/90 text-white py-6">
              Create Account
            </Button>
            
            <div className="text-center text-sm text-gray-600">
              <p className="mb-6">Or sign up with</p>
              <div className="flex justify-center space-x-4">
                <button type="button" className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Google
                </button>
              </div>
            </div>
            
            <div className="mt-8 text-center text-sm">
              <p className="text-gray-600">
                Already have an account? <Link to="/signin" className="text-pawmi-orange font-medium hover:underline">Sign in</Link>
              </p>
            </div>
          </form>
          
          <div className="mt-8 text-center text-xs text-gray-500">
            <p>By creating an account, you agree to our <Link to="/terms" className="underline">Terms of Service</Link> and <Link to="/privacy" className="underline">Privacy Policy</Link></p>
          </div>
        </div>
      </div>
      
      {/* Right side - Image */}
      <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{
      backgroundImage: `url('/lovable-uploads/3ef3b678-8c04-422b-8c60-247504a2b38b.png')`
    }}>
        <div className="h-full w-full backdrop-blur-sm flex items-center justify-center p-8 bg-[#f38d36]/[0.39]">
          <div className="max-w-md text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Companion</h2>
            <p className="text-lg">Join thousands of pet lovers who've found their forever friends through Pawmi</p>
          </div>
        </div>
      </div>
    </div>;
};
export default SignUpPage;