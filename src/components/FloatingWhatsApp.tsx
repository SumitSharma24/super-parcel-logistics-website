import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
      aria-label="Direct WhatsApp contact"
    >
      {/* Editorial Tooltip */}
      {showTooltip && (
        <div className="bg-charcoal-900 text-white text-xs px-3.5 py-2 rounded-xl shadow-elevated border border-charcoal-800 flex items-center gap-2 max-w-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-orange shrink-0 animate-pulse" />
          <span className="font-semibold">Quick Freight Rates on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-charcoal-400 hover:text-white ml-1"
            aria-label="Dismiss message preview"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Trigger */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
          'Hello Super Parcel Logistics, I would like to make an enquiry about cargo or commercial freight transit.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 p-3.5 rounded-2xl bg-charcoal-900 hover:bg-black text-white shadow-elevated border border-charcoal-700 flex items-center justify-center transition-all duration-200 hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-accent-orange"
        aria-label="Chat directly with Super Parcel Logistics on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 text-accent-orange transition-transform group-hover:scale-110" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent-orange rounded-full border-2 border-white" />
      </a>
    </aside>
  );
};
