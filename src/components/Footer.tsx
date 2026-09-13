import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, LOCATIONS } from '../data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-900 text-[#ECE9E2] border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        
        {/* Brand Headline */}
        <div className="pb-12 sm:pb-16 border-b border-charcoal-800">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-accent-orange uppercase block mb-3">
                FREIGHT & COMMERCIAL TRANSPORTATION
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
                SUPER PARCEL LOGISTICS
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-sm text-charcoal-400 leading-relaxed">
                Moving cargo. Keeping business in motion. Multimodal freight coordination connecting commercial hubs.
              </p>
            </div>
          </div>
        </div>

        {/* Minimal Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 py-12 sm:py-16 border-b border-charcoal-800">
          
          {/* Column 1: Locations List */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] text-white uppercase block">
              OUR LOCATIONS
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {LOCATIONS.map((loc) => (
                <div key={loc.city} className="flex items-center gap-2 text-charcoal-300">
                  <span className="text-accent-orange font-mono text-[11px]">{loc.number}</span>
                  <span className="font-semibold">{loc.city}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] text-white uppercase block">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs font-semibold text-charcoal-300">
              <li>
                <Link to="/" className="hover:text-accent-orange transition-colors flex items-center gap-1">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent-orange transition-colors flex items-center gap-1">
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent-orange transition-colors flex items-center gap-1">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/branches" className="hover:text-accent-orange transition-colors flex items-center gap-1">
                  <span>Branches</span>
                </Link>
              </li>
              <li>
                <Link to="/enquiry" className="hover:text-accent-orange transition-colors flex items-center gap-1">
                  <span>Enquiry</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Telephone Contact */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] text-white uppercase block">
              CONTACT DESK
            </span>
            <div className="space-y-2">
              <a
                href={`tel:${COMPANY_INFO.rawPhone}`}
                className="inline-flex items-center gap-2 text-xl sm:text-2xl font-extrabold text-white hover:text-accent-orange transition-colors"
              >
                <Phone className="w-5 h-5 text-accent-orange shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <p className="text-xs text-charcoal-400">
                Direct telephone & WhatsApp coordination
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/enquiry"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent-orange hover:bg-accent-orangeHover text-white text-xs font-bold tracking-wider uppercase transition-colors"
              >
                <span>SEND AN ENQUIRY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Legal Line */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-charcoal-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/branches" className="hover:text-white transition-colors">
              Locations
            </Link>
            <span>•</span>
            <Link to="/enquiry" className="hover:text-white transition-colors">
              Enquiry Desk
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
