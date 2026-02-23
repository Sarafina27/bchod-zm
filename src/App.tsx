import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./components/Projects";
import { ProjectDetail } from "./components/ProjectDetail";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


// Import from components folder
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About"; // if you create an About component

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Navbar always visible */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />     {/* new */}
          <Route path="/services" element={<Services />} />   {/* new */}
          <Route path="/about" element={<About />} />         {/* optional */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer always visible */}
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
