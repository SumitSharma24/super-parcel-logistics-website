import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const GoogleMapEmbed: React.FC = () => {
  return (
    <div className="bg-[#ECE9E2] dark:bg-dark-surface rounded-3xl p-6 sm:p-10 border border-steel dark:border-dark-border shadow-subtle dark:shadow-dark-subtle space-y-6 transition-colors duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold tracking-[0.25em] text-accent-orange uppercase block mb-1">
            PHYSICAL FACILITY LOCATION
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal-900 dark:text-[#EDEDEC] flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent-orange" />
            <span>Bengaluru Operations Center</span>
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 dark:text-dark-textMuted mt-1">
            {COMPANY_INFO.address.full}
          </p>
        </div>

        <a
          href={COMPANY_INFO.googleMapsDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-dark-surfaceMuted border border-steel dark:border-dark-border text-charcoal-900 dark:text-[#EDEDEC] hover:text-accent-orange dark:hover:text-accent-orange hover:border-charcoal-900 dark:hover:border-accent-orange text-xs font-bold uppercase tracking-wider transition-colors self-start sm:self-auto shadow-sm"
        >
          <span>Get Directions</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Map iframe container */}
      <div className="rounded-2xl overflow-hidden border border-steel dark:border-dark-border h-72 sm:h-96 w-full relative bg-charcoal-900 shadow-inner">
        <iframe
          src="https://maps.google.com/maps?q=Seema+Manzil,+26/4,+3rd+Main+Rd,+4N+Block,+Ramchandrapuram,+Srirampura,+Bengaluru,+Karnataka+560021&t=&z=15&ie=UTF8&iwloc=&output=embed"
          title="SUPER PARCEL LOGISTICS Facility Location"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Google Map showing Super Parcel Logistics Bengaluru facility"
        />
      </div>
    </div>
  );
};
