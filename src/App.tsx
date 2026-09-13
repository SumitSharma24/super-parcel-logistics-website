import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { BranchesPage } from './pages/BranchesPage';
import { EnquiryPage } from './pages/EnquiryPage';
import { ThemeProvider } from './context/ThemeContext';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-charcoal-900 focus:text-white dark:focus:bg-accent-orange dark:focus:text-white focus:rounded-md focus:shadow-elevated text-xs font-bold uppercase tracking-wider"
        >
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col bg-[#F5F3EE] dark:bg-[#111214] text-[#17191B] dark:text-[#EDEDEC] font-sans selection:bg-[#ED5A24] selection:text-white transition-colors duration-200">
          <Navbar />
          
          <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/branches" element={<BranchesPage />} />
              <Route path="/enquiry" element={<EnquiryPage />} />
            </Routes>
          </main>

          <Footer />
          <FloatingWhatsApp />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
