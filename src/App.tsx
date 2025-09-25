import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import MobileNavigation from "./components/MobileNavigation";
import PatientProfile from "./pages/Profile";
import MedicalShopSearch from "./pages/Pharmacist";
import MedicalChatbot from "./pages/Chatbot";
import DoctorProfile from "./pages/DoctorProfile";
import PharmacyProfile from "./pages/PharmacyProfile";
import HealthcareHomepage from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<HealthcareHomepage />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/profile" element={<PatientProfile />} />
        <Route path="/pharmacist" element={<MedicalShopSearch />} />
        <Route path="/chatbot" element={<MedicalChatbot />} />
        <Route path="/doctor/dummyDoctor" element={<DoctorProfile />} />
        <Route path="/pharmacy/dummyPharmacy" element={<PharmacyProfile />} />

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MobileNavigation />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
