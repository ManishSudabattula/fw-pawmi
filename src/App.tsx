
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import all pages
import HomePage from "./pages/HomePage";
import BrowsePage from "./pages/BrowsePage";
import FavoritesPage from "./pages/FavoritesPage";
import PetDetailPage from "./pages/PetDetailPage";
import AdoptionForm from "./pages/AdoptionForm";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MyListingsPage from "./pages/MyListingsPage";
import AddPetPage from "./pages/AddPetPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/browse" element={<BrowsePage />}/>
          <Route path="/favorites" element={<FavoritesPage />}/>
          <Route path="/pets/:id" element={<PetDetailPage />}/>
          <Route path="/adopt/:id" element={<AdoptionForm />}/>
          <Route path="/signin" element={<SignInPage />}/>
          <Route path="/signup" element={<SignUpPage />}/>
          <Route path="/my-listings" element={<MyListingsPage />}/>
          <Route path="/add-pet" element={<AddPetPage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
