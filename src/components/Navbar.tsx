import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { useTheme } from '../context/useTheme';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'ABOUT', path: '/about' },
    { name: 'BRANCHES', path: '/branches' },
    { name: 'ENQUIRY', path: '/enquiry' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-charcoal-900 dark:bg-[#0C0D0E] text-[#ECE9E2] text-[11px] border-b border-charcoal-800 dark:border-dark-border py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
            <span className="font-semibold text-charcoal-300 dark:text-dark-textMuted tracking-wider text-[10px] uppercase">
              COMMERCIAL FREIGHT & MULTIMODAL LOGISTICS
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${COMPANY_INFO.rawPhone}`}
              className="flex items-center gap-1.5 text-[#ECE9E2] hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-accent-orange" />
              <span className="font-semibold tracking-wide">{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Editorial Navbar */}
      <nav
        className={`transition-all duration-200 ${
          isScrolled
            ? 'bg-[#F5F3EE]/95 dark:bg-[#111214]/95 backdrop-blur-md border-b border-steel dark:border-dark-border shadow-subtle dark:shadow-dark-subtle py-3.5'
            : 'bg-[#F5F3EE]/90 dark:bg-[#111214]/90 backdrop-blur-sm border-b border-steel dark:border-dark-border py-4 sm:py-5'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Wordmark: SUPER PARCEL LOGISTICS */}
          <Link
            to="/"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-charcoal-900 dark:text-[#EDEDEC]">
              SUPER PARCEL LOGISTICS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-orange shrink-0" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs tracking-wider font-bold transition-colors duration-150 py-1 ${
                    isActive
                      ? 'text-charcoal-900 dark:text-white border-b-2 border-accent-orange'
                      : 'text-charcoal-600 dark:text-dark-textMuted hover:text-charcoal-900 dark:hover:text-[#EDEDEC]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 rounded-md border border-steel dark:border-dark-border text-charcoal-700 dark:text-dark-text hover:text-charcoal-900 dark:hover:text-white hover:bg-warm-surface dark:hover:bg-dark-surfaceMuted transition-colors focus:outline-none focus:ring-2 focus:ring-accent-orange"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-accent-orange" />
              ) : (
                <Moon className="w-4 h-4 text-charcoal-700" />
              )}
            </button>

            <Link
              to="/enquiry"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-charcoal-900 hover:bg-black dark:bg-dark-surfaceMuted dark:hover:bg-charcoal-800 dark:border dark:border-dark-border text-white text-xs font-bold tracking-wider uppercase transition-colors"
            >
              <span>ENQUIRE NOW</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent-orange" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 rounded-md border border-steel dark:border-dark-border text-charcoal-700 dark:text-dark-text hover:bg-warm-surface dark:hover:bg-dark-surfaceMuted focus:outline-none"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-accent-orange" />
              ) : (
                <Moon className="w-4 h-4 text-charcoal-700" />
              )}
            </button>

            <Link
              to="/enquiry"
              className="px-3 py-2 rounded bg-charcoal-900 dark:bg-dark-surfaceMuted text-white text-[11px] font-bold tracking-wider uppercase"
            >
              ENQUIRE
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-charcoal-900 dark:text-[#EDEDEC] hover:bg-[#ECE9E2] dark:hover:bg-dark-surfaceMuted focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F3EE] dark:bg-dark-surface border-b border-steel dark:border-dark-border px-6 py-6 space-y-4 shadow-elevated dark:shadow-dark-elevated">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 text-sm font-bold tracking-wider border-b border-steel/50 dark:border-dark-border ${
                    isActive ? 'text-accent-orange' : 'text-charcoal-900 dark:text-[#EDEDEC]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 space-y-3">
            <a
              href={`tel:${COMPANY_INFO.rawPhone}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-white dark:bg-dark-surfaceMuted border border-steel dark:border-dark-border text-xs font-bold text-charcoal-900 dark:text-[#EDEDEC]"
            >
              <Phone className="w-3.5 h-3.5 text-accent-orange" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
            <Link
              to="/enquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-accent-orange text-white text-xs font-bold uppercase tracking-wider hover:bg-accent-orangeHover transition-colors"
            >
              <span>ENQUIRE NOW</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
