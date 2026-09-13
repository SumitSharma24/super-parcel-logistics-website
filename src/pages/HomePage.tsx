import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  CheckCircle2
} from 'lucide-react';
import {
  COMPANY_INFO,
  VALUE_PROPOSITIONS,
  LOGISTICS_IMAGES,
  LOCATIONS
} from '../data/company';
import { MultiModalShowcase } from '../components/MultiModalShowcase';
import { BrandsDeliveredTo } from '../components/BrandsDeliveredTo';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 sm:space-y-36 pt-24 sm:pt-28 pb-20">
      
      {/* ========================================================
          SECTION 01: HERO (H01 — Road Freight / Commercial Truck)
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-charcoal-900 text-white min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center border border-charcoal-800 shadow-elevated">
          
          {/* Background Image H01: Semi-truck on road (positioned center-right, negative space left) */}
          <div className="absolute inset-0 z-0">
            <img
              src={LOGISTICS_IMAGES.heroTruck}
              alt="Heavy commercial linehaul truck in transit - Super Parcel Logistics"
              className="w-full h-full object-cover object-[75%_center] sm:object-right brightness-[0.42] lg:brightness-[0.48]"
              fetchPriority="high"
            />
            {/* Editorial dark gradient mask ensuring strong left-side text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-transparent sm:max-w-2xl lg:max-w-3xl" />
          </div>

          {/* Left Hero Content */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-16 max-w-2xl space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-accent-orange" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-accent-orange uppercase">
                COMMERCIAL FREIGHT & LOGISTICS
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              MOVING CARGO. <br />
              <span className="text-white">KEEPING BUSINESS</span> <br />
              <span className="text-white">IN MOTION.</span>
            </h1>

            <p className="text-charcoal-300 text-base sm:text-lg leading-relaxed max-w-lg">
              Commercial road, rail, and air freight transportation engineered for manufacturers, traders, and enterprise supply chains.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-accent-orange hover:bg-accent-orangeHover text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-150 shadow-sm"
              >
                <span>ENQUIRE NOW</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold tracking-wider uppercase backdrop-blur-sm transition-colors border border-white/15"
              >
                <span>EXPLORE SERVICES</span>
              </Link>
            </div>

            {/* Hub Ticker */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-[11px] text-charcoal-400 font-semibold">
              <span className="text-white">Operating Hubs:</span>
              {LOCATIONS.map((loc, idx) => (
                <React.Fragment key={loc.city}>
                  <span className="text-charcoal-300">{loc.city}</span>
                  {idx < LOCATIONS.length - 1 && <span className="text-charcoal-600">•</span>}
                </React.Fragment>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 02: MULTIMODAL TRANSPORT MODES (ROAD, RAIL, AIR)
          (H03 Road, H04 Rail, H05 Air with equal visual stature)
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <MultiModalShowcase />
      </section>

      {/* ========================================================
          SECTION 03: CARGO OPERATIONS (H02 — Cargo & Forklift)
          (Layout: ~55% image / 45% text)
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: 55% Image (H02 Forklift loading cargo on truck, 4:5 crop) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-steel dark:border-dark-border aspect-[4/5] sm:aspect-[16/11] bg-charcoal-900 group shadow-subtle dark:shadow-dark-subtle">
              <img
                src={LOGISTICS_IMAGES.cargoForklift}
                alt="Professional cargo handling and forklift loading on freight truck"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 dark:bg-dark-surface/95 backdrop-blur-sm border border-steel dark:border-dark-border shadow-subtle">
                <span className="text-[10px] font-bold tracking-[0.2em] text-accent-orange uppercase block">
                  INDUSTRIAL CARGO HANDLING
                </span>
                <div className="text-sm font-extrabold text-charcoal-900 dark:text-[#EDEDEC] mt-1">
                  Disciplined Staging, Palletization & Mechanical Loading
                </div>
              </div>
            </div>
          </div>

          {/* Right: 45% Text Focus on Cargo, Handling, Movement, Reliability */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-bold tracking-[0.25em] text-accent-orange uppercase block">
              OPERATIONAL PRECISION
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-charcoal-900 dark:text-[#EDEDEC] leading-tight">
              Disciplined Cargo Handling at Every Stage.
            </h2>

            <p className="text-charcoal-600 dark:text-dark-textMuted text-base leading-relaxed">
              Logistics reliability is determined by origin protocols. At Super Parcel Logistics, commercial consignments are inspected, verified against manifests, palletized, and secured with heavy-duty lashing prior to vehicle departure.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-extrabold text-charcoal-900 dark:text-[#EDEDEC]">Mechanical Forklift & Dock Handling</h4>
                  <p className="text-xs text-charcoal-600 dark:text-dark-textMuted mt-0.5">Heavy industrial cargo and palletized merchandise loaded with specialized mechanical equipment.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-extrabold text-charcoal-900 dark:text-[#EDEDEC]">Load Stabilization & Protective Stacking</h4>
                  <p className="text-xs text-charcoal-600 dark:text-dark-textMuted mt-0.5">Engineered weight distribution and heavy strapping protect freight from vibration and transit shock.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-extrabold text-charcoal-900 dark:text-[#EDEDEC]">Direct Human Coordination</h4>
                  <p className="text-xs text-charcoal-600 dark:text-dark-textMuted mt-0.5">Our operations controllers provide live status updates on telephone and WhatsApp without automated delays.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-charcoal-900 dark:text-[#EDEDEC] hover:text-accent-orange dark:hover:text-accent-orange transition-colors"
              >
                <span>DISCOVER OUR OPERATIONS</span>
                <ArrowRight className="w-4 h-4 text-accent-orange" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 04: OPERATIONAL STANDARDS (EDITORIAL VALUE BLOCKS)
         ======================================================== */}
      <section className="bg-[#ECE9E2] dark:bg-dark-surfaceMuted py-20 sm:py-28 border-y border-steel dark:border-dark-border transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 sm:mb-16">
            <span className="text-[11px] font-bold tracking-[0.25em] text-accent-orange uppercase block mb-2">
              CORE PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-charcoal-900 dark:text-[#EDEDEC] leading-tight">
              Built for Commercial Dependability.
            </h2>
            <p className="mt-3 text-charcoal-600 dark:text-dark-textMuted text-base leading-relaxed">
              Standard operating procedures designed around package security, schedule discipline, and direct access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PROPOSITIONS.map((item) => (
              <div
                key={item.number}
                className="bg-[#F5F3EE] dark:bg-dark-surface rounded-2xl p-7 border border-steel dark:border-dark-border flex flex-col justify-between shadow-subtle dark:shadow-dark-subtle group hover:bg-white dark:hover:bg-[#212328] transition-colors"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-accent-orange block mb-3">
                    {item.number}
                  </span>
                  <h3 className="text-lg font-extrabold text-charcoal-900 dark:text-[#EDEDEC] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 dark:text-dark-textMuted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-steel dark:border-dark-border">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 dark:text-dark-textMuted">
                    OPERATIONAL COMMITMENT
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 05: BRANDS WE'VE DELIVERED TO
         ======================================================== */}
      <BrandsDeliveredTo />

      {/* ========================================================
          SECTION 06: LOGISTICS ENVIRONMENT / CLOSING CTA (H06)
          (H06 Logistics Center, Crop 21:9 with subtle dark overlay)
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-charcoal-900 text-white p-8 sm:p-14 lg:p-20 border border-charcoal-800 shadow-elevated">
          
          {/* Background H06 Aerial view of logistics center */}
          <div className="absolute inset-0 z-0">
            <img
              src={LOGISTICS_IMAGES.logisticsCenter}
              alt="Aerial view of commercial logistics center and freight infrastructure"
              className="w-full h-full object-cover object-center brightness-[0.32]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/85 to-transparent" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-[11px] font-bold tracking-[0.25em] text-accent-orange uppercase block">
              START TRANSIT
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              LET'S MOVE YOUR CARGO.
            </h2>

            <p className="text-charcoal-300 text-base sm:text-lg leading-relaxed">
              Connect with our dispatch desk for structured road, rail, or air cargo scheduling and transparent commercial freight rates.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-accent-orange hover:bg-accent-orangeHover text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors shadow-sm"
              >
                <span>SEND AN ENQUIRY</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${COMPANY_INFO.rawPhone}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold tracking-wider uppercase backdrop-blur-sm transition-colors border border-white/15"
              >
                <Phone className="w-4 h-4 text-accent-orange" />
                <span>CALL: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
