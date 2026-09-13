import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { LOGISTICS_IMAGES } from '../data/company';

interface ModeInfo {
  number: string;
  title: string;
  mode: string;
  tagline: string;
  image: string;
  description: string;
  spec: string;
}

const MODES: ModeInfo[] = [
  {
    number: "01",
    title: "ROAD FREIGHT",
    mode: "Surface Transport",
    tagline: "High-Capacity Container Linehaul",
    image: LOGISTICS_IMAGES.roadFreight,
    description: "Scheduled surface linehaul operating containerized trailers and heavy trucks connecting primary industrial and commercial corridors.",
    spec: "Full Truckload (FTL) & Less than Truckload (LTL)"
  },
  {
    number: "02",
    title: "RAIL FREIGHT",
    mode: "Intermodal Rail",
    tagline: "High-Volume Container Movement",
    image: LOGISTICS_IMAGES.railFreight,
    description: "Intermodal container train transport providing high-tonnage capacity and reliable transit cycles for industrial and commercial goods.",
    spec: "Bulk Cargo & Inter-State Container Transit"
  },
  {
    number: "03",
    title: "AIR CARGO",
    mode: "Aviation Freight",
    tagline: "Time-Critical Cargo Transit",
    image: LOGISTICS_IMAGES.airFreight,
    description: "Accelerated airport-to-airport domestic air cargo coordination for urgent commercial stock, high-value parts, and priority consignments.",
    spec: "Express Dispatch & Priority Tarmac Handling"
  }
];

export const MultiModalShowcase: React.FC = () => {
  return (
    <section className="space-y-12 sm:space-y-16">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-steel dark:border-dark-border pb-8">
        <div className="max-w-2xl">
          <span className="text-[11px] font-bold tracking-[0.25em] text-accent-orange uppercase block mb-3">
            MULTIMODAL TRANSPORTATION
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-charcoal-900 dark:text-[#EDEDEC] leading-none">
            ROAD. RAIL. AIR.
          </h2>
          <p className="mt-4 text-charcoal-600 dark:text-dark-textMuted text-base sm:text-lg leading-relaxed">
            Super Parcel Logistics balances transit speed, payload volume, and cost predictability across three core transportation modes.
          </p>
        </div>

        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-charcoal-900 dark:text-[#EDEDEC] hover:text-accent-orange dark:hover:text-accent-orange transition-colors pb-1"
        >
          <span>VIEW ALL SERVICE SPECS</span>
          <ArrowRight className="w-4 h-4 text-accent-orange" />
        </Link>
      </div>

      {/* 3 Balanced Large Editorial Image Compositions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
        {MODES.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-between bg-white dark:bg-dark-surface border border-steel dark:border-dark-border rounded-3xl overflow-hidden shadow-subtle dark:shadow-dark-subtle group hover:shadow-elevated dark:hover:shadow-dark-elevated transition-all duration-300"
          >
            <div>
              {/* Large 16:9 Image Crop */}
              <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-900">
                <img
                  src={item.image}
                  alt={`${item.title} - Super Parcel Logistics`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded bg-charcoal-900/85 text-white font-mono text-xs font-bold tracking-wider">
                    {item.number}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-bold tracking-widest text-accent-orange uppercase block">
                    {item.mode}
                  </span>
                </div>
              </div>

              {/* Editorial Content */}
              <div className="p-6 sm:p-8 space-y-3">
                <h3 className="text-2xl font-extrabold text-charcoal-900 dark:text-[#EDEDEC] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-accent-orange uppercase tracking-wider">
                  {item.tagline}
                </p>
                <p className="text-charcoal-600 dark:text-dark-textMuted text-sm leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Bottom Spec Footer */}
            <div className="p-6 sm:p-8 pt-0">
              <div className="pt-4 border-t border-steel dark:border-dark-border flex items-center justify-between">
                <span className="text-[11px] font-semibold text-charcoal-500 dark:text-dark-textMuted">
                  {item.spec}
                </span>
                <Link
                  to="/services"
                  className="text-charcoal-900 dark:text-[#EDEDEC] hover:text-accent-orange dark:hover:text-accent-orange transition-colors"
                  aria-label={`Learn more about ${item.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
