import React from 'react';
import { LOCATIONS } from '../data/company';

export const BranchesPage: React.FC = () => {
  return (
    <div className="pt-32 sm:pt-40 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="mb-14 sm:mb-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-charcoal-900 dark:text-[#EDEDEC] leading-none">
          OUR LOCATIONS
        </h1>
        <p className="text-charcoal-600 dark:text-dark-textMuted text-base sm:text-xl font-medium mt-4">
          Connect with Super Parcel Logistics.
        </p>
      </div>

      {/* Premium Editorial List */}
      <div className="border-t border-steel dark:border-dark-border divide-y divide-steel dark:divide-dark-border">
        {LOCATIONS.map((loc) => (
          <div
            key={loc.city}
            className="py-6 sm:py-9 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-8 group transition-colors hover:bg-black/[0.015] dark:hover:bg-white/[0.02] px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-xl"
          >
            {/* Left: Number + City */}
            <div className="flex items-baseline gap-4 sm:gap-8">
              <span className="font-mono text-sm sm:text-base font-bold text-accent-orange shrink-0 w-6">
                {loc.number}
              </span>
              <span className="text-2xl sm:text-4xl font-extrabold text-charcoal-900 dark:text-[#EDEDEC] tracking-tight">
                {loc.city}
              </span>
            </div>

            {/* Right: Clickable Phone Number */}
            <div className="pl-10 sm:pl-0">
              <a
                href={`tel:${loc.rawPhone}`}
                className="font-mono text-lg sm:text-2xl font-bold text-charcoal-800 dark:text-dark-text hover:text-accent-orange dark:hover:text-accent-orange transition-colors tracking-tight inline-block"
              >
                {loc.phone}
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
