import React from 'react';
import { CLIENT_BRANDS } from '../data/company';

export const BrandsDeliveredTo: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 border-y border-steel dark:border-dark-border bg-[#ECE9E2] dark:bg-dark-surfaceMuted transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-[11px] font-bold tracking-[0.25em] text-accent-orange uppercase block mb-2">
            DELIVERY PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-charcoal-900 dark:text-[#EDEDEC]">
            BRANDS WE'VE DELIVERED TO
          </h2>
        </div>

        {/* Clean Editorial Logo Wall */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-steel dark:border-dark-border bg-white dark:bg-dark-surface shadow-subtle dark:shadow-dark-subtle">
          {CLIENT_BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="p-8 sm:p-10 flex flex-col items-center justify-center text-center border-r border-b border-steel dark:border-dark-border min-h-[130px] group transition-colors hover:bg-[#F5F3EE] dark:hover:bg-dark-surfaceMuted"
            >
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-charcoal-900 dark:text-[#EDEDEC] group-hover:text-accent-orange transition-colors">
                {brand.name}
              </span>
              <span className="text-[10px] tracking-wider text-charcoal-400 dark:text-dark-textMuted font-semibold uppercase mt-1">
                {brand.sector}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
