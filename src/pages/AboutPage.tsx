import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Target,
  Users,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { LOGISTICS_IMAGES, COMPANY_INFO } from '../data/company';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-24 sm:space-y-36 pt-24 sm:pt-28 pb-20">
      
      {/* 1. HERO STORY BANNER (A01 Logistics Center, 16:9) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-charcoal-900 text-white p-8 sm:p-14 lg:p-16 border border-charcoal-800 shadow-elevated">
          <div className="absolute inset-0 z-0">
            <img
              src={LOGISTICS_IMAGES.aboutMain}
              alt="Aerial view of commercial logistics center - Super Parcel Logistics"
              className="w-full h-full object-cover object-center brightness-[0.35]"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/85 to-transparent" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-[11px] font-bold tracking-[0.25em] text-accent-orange uppercase block">
              COMPANY STORY & IDENTITY
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              BUILT AROUND <br />
              <span className="text-white">MOVEMENT.</span>
            </h1>
            <p className="text-charcoal-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Super Parcel Logistics coordinates structured commercial cargo, road freight, rail transport, and domestic air logistics linking manufacturers, merchants, and enterprises across key trade corridors.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-charcoal-300 font-semibold">
              <span className="flex items-center gap-1.5 text-white">
                <span className="w-2 h-2 rounded-full bg-accent-orange" />
                Operations: Ramchandrapuram, Bengaluru
              </span>
              <span>•</span>
              <span>Commercial Freight Logistics</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OPERATIONAL PHILOSOPHY (A02 Warehouse Forklift Operations, 4:5) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-bold tracking-[0.25em] text-accent-orange uppercase block">
              OPERATIONAL IDENTITY
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-charcoal-900 dark:text-[#EDEDEC] leading-tight">
              A Direct, Practical Approach to Freight
            </h2>

            <div className="space-y-4 text-charcoal-600 dark:text-dark-textMuted text-base leading-relaxed">
              <p>
                Commercial logistics requires more than transport vehicles—it demands disciplined handling protocols, manifest accuracy, and transparent human communication.
              </p>
              <p>
                At Super Parcel Logistics, we manage consignments with thorough origin verification, engineered load securing, and scheduled departures. We prioritize practical dependability: consistent schedules, protective palletization, and direct telephone or WhatsApp accessibility.
              </p>
            </div>

            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-extrabold text-charcoal-900 dark:text-[#EDEDEC]">Rigorous Origin Verification</h3>
                  <p className="text-xs text-charcoal-600 dark:text-dark-textMuted">Goods are inspected for secure outer packaging and clear consignee labeling before loading.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-extrabold text-charcoal-900 dark:text-[#EDEDEC]">Multimodal Transit Flexibility</h3>
                  <p className="text-xs text-charcoal-600 dark:text-dark-textMuted">Shipments travel via road, rail, or air depending on volume, weight, and delivery timeline parameters.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-extrabold text-charcoal-900 dark:text-[#EDEDEC]">Direct Contact with Operations</h3>
                  <p className="text-xs text-charcoal-600 dark:text-dark-textMuted">Speak directly with coordinators via phone or WhatsApp for prompt booking and milestone updates.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-subtle dark:shadow-dark-subtle border border-steel dark:border-dark-border aspect-[4/5] bg-charcoal-900 group">
              <img
                src={LOGISTICS_IMAGES.aboutOperations}
                alt="Industrial warehouse forklift pathway and cargo operations"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 dark:bg-dark-surface/95 backdrop-blur-sm border border-steel dark:border-dark-border text-xs">
                <div className="font-extrabold text-charcoal-900 dark:text-[#EDEDEC] uppercase tracking-wider">
                  Controlled Warehouse Staging
                </div>
                <p className="text-charcoal-600 dark:text-dark-textMuted mt-1">
                  Seema Manzil, Ramchandrapuram, Srirampura, Bengaluru - 560021
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE PRINCIPLES */}
      <section className="bg-[#ECE9E2] dark:bg-dark-surfaceMuted py-20 sm:py-28 border-y border-steel dark:border-dark-border transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 sm:mb-16">
            <span className="text-[11px] font-bold tracking-[0.25em] text-accent-orange uppercase block mb-2">
              GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-charcoal-900 dark:text-[#EDEDEC] leading-tight">
              Our Operating Standards
            </h2>
            <p className="mt-3 text-charcoal-600 dark:text-dark-textMuted text-base leading-relaxed">
              Clear commitments that govern every commercial consignment handled by Super Parcel Logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#F5F3EE] dark:bg-dark-surface border border-steel dark:border-dark-border space-y-4 shadow-subtle dark:shadow-dark-subtle">
              <div className="w-10 h-10 rounded-lg bg-charcoal-900 text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-accent-orange" />
              </div>
              <h3 className="font-extrabold text-xl text-charcoal-900 dark:text-[#EDEDEC]">
                Consignment Security
              </h3>
              <p className="text-charcoal-600 dark:text-dark-textMuted text-sm leading-relaxed">
                Safe transit starts with disciplined loading. Cargo is staged with weight-distribution awareness and protected with heavy-duty strapping against vibration and shifting.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F5F3EE] dark:bg-dark-surface border border-steel dark:border-dark-border space-y-4 shadow-subtle dark:shadow-dark-subtle">
              <div className="w-10 h-10 rounded-lg bg-charcoal-900 text-white flex items-center justify-center">
                <Target className="w-5 h-5 text-accent-orange" />
              </div>
              <h3 className="font-extrabold text-xl text-charcoal-900 dark:text-[#EDEDEC]">
                Operational Honesty
              </h3>
              <p className="text-charcoal-600 dark:text-dark-textMuted text-sm leading-relaxed">
                Realistic transit schedules and transparent rate quotations. We provide clear parameters without exaggerated speed claims or hidden costs.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F5F3EE] dark:bg-dark-surface border border-steel dark:border-dark-border space-y-4 shadow-subtle dark:shadow-dark-subtle">
              <div className="w-10 h-10 rounded-lg bg-charcoal-900 text-white flex items-center justify-center">
                <Users className="w-5 h-5 text-accent-orange" />
              </div>
              <h3 className="font-extrabold text-xl text-charcoal-900 dark:text-[#EDEDEC]">
                Direct Contact
              </h3>
              <p className="text-charcoal-600 dark:text-dark-textMuted text-sm leading-relaxed">
                You are never redirected to automated ticketing queues. Our dispatch coordinators are directly reachable by phone and WhatsApp for immediate assistance.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. LOGISTICS ENVIRONMENT (A03 Logistics Truck Facility, 16:9) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-subtle border border-steel min-h-[380px] sm:min-h-[440px] flex items-center p-8 sm:p-14 bg-charcoal-900 group">
          <img
            src={LOGISTICS_IMAGES.aboutNetwork}
            alt="Aerial view of logistics truck facility and transport operations"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.38] transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-transparent" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="text-[11px] font-bold tracking-[0.25em] text-accent-orange uppercase block">
              OPERATING REACH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Connecting Commercial Hubs
            </h2>
            <p className="text-charcoal-300 text-base leading-relaxed">
              From our Bengaluru operations center, we coordinate freight schedules linking with commercial distribution centers across Mumbai, Delhi, Pune, Jaipur, and Kolkata.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/branches"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-orange hover:bg-accent-orangeHover text-white text-xs font-bold tracking-wider uppercase transition-colors"
              >
                <span>VIEW OUR LOCATIONS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.rawPhone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-wider uppercase transition-colors border border-white/15"
              >
                <Phone className="w-4 h-4 text-accent-orange" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
