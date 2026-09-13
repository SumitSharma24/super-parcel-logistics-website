import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageSquare
} from 'lucide-react';
import { SERVICES, COMPANY_INFO, LOGISTICS_IMAGES } from '../data/company';

export const ServicesPage: React.FC = () => {
  return (
    <div className="space-y-24 sm:space-y-36 pt-24 sm:pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-charcoal-900 text-white p-8 sm:p-14 lg:p-16 border border-charcoal-800 shadow-elevated">
          <div className="absolute inset-0 z-0">
            <img
              src={LOGISTICS_IMAGES.logisticsCenter}
              alt="Intermodal freight terminal and multimodal logistics operations"
              className="w-full h-full object-cover object-center brightness-[0.35]"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/85 to-transparent" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-[11px] font-bold tracking-[0.25em] text-accent-orange uppercase block">
              MULTIMODAL CAPABILITIES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Commercial Freight & Multimodal Logistics.
            </h1>
            <p className="text-charcoal-300 text-base sm:text-lg leading-relaxed">
              Super Parcel Logistics operates scheduled road freight, intermodal rail transport, priority domestic air cargo, and disciplined warehouse handling connecting major commercial hubs.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/enquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-orange hover:bg-accent-orangeHover text-white text-xs font-bold tracking-wider uppercase transition-colors"
              >
                <span>REQUEST DISPATCH QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.rawPhone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-wider uppercase transition-colors border border-white/15"
              >
                <Phone className="w-3.5 h-3.5 text-accent-orange" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Editorial Service Divisions (Equal visual weight for Road, Rail, Air, and Cargo Operations) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20 sm:space-y-28">
        <div className="max-w-3xl">
          <span className="text-[11px] font-bold tracking-[0.25em] text-accent-orange uppercase block mb-2">
            CORE FREIGHT DIVISIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-charcoal-900 dark:text-[#EDEDEC] leading-tight">
            Six Specialized Logistics Divisions
          </h2>
          <p className="mt-3 text-charcoal-600 dark:text-dark-textMuted text-base leading-relaxed">
            Road, rail, and air modes operate in coordinated unison with warehouse staging and dock handling.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center scroll-mt-28"
              >
                {/* Visual Column */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-subtle dark:shadow-dark-subtle border border-steel dark:border-dark-border aspect-[16/11] bg-charcoal-900 group">
                    <img
                      src={service.image}
                      alt={`${service.title} - Super Parcel Logistics`}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-md bg-white dark:bg-dark-surface dark:text-[#EDEDEC] text-charcoal-900 text-xs font-bold tracking-wider uppercase shadow-sm border border-transparent dark:border-dark-border">
                        {service.badge}
                      </span>
                    </div>

                    {/* Transit Mode Pill */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-charcoal-900/90 dark:bg-dark-surface/90 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-charcoal-700 dark:border-dark-border">
                      <span className="text-charcoal-400 dark:text-dark-textMuted text-[11px] uppercase tracking-wider">Mode:</span>
                      <span className="font-bold text-accent-orange">
                        {service.transitModes.join(' • ')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Editorial Content Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-accent-orange tracking-widest block mb-1">
                      DIVISION {service.number}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 dark:text-[#EDEDEC] tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-charcoal-600 dark:text-dark-textMuted text-base sm:text-lg leading-relaxed mt-3">
                      {service.fullDesc}
                    </p>
                  </div>

                  {/* Highlights Box */}
                  <div className="bg-[#ECE9E2] dark:bg-dark-surfaceMuted p-6 rounded-2xl border border-steel dark:border-dark-border space-y-3">
                    <h4 className="text-xs font-bold text-charcoal-900 dark:text-[#EDEDEC] uppercase tracking-wider">
                      OPERATIONAL CAPABILITIES
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-charcoal-700 dark:text-dark-text font-medium">
                          <CheckCircle2 className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                        `Hello Super Parcel Logistics, I would like to enquire about ${service.title} freight rates and booking.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-charcoal-900 hover:bg-black dark:bg-accent-orange dark:hover:bg-accent-orangeHover text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4 text-accent-orange dark:text-white" />
                      <span>ENQUIRE ON WHATSAPP</span>
                    </a>

                    <Link
                      to="/enquiry"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-steel dark:border-dark-border hover:bg-white dark:hover:bg-dark-surfaceMuted text-charcoal-800 dark:text-dark-text text-xs font-bold tracking-wider uppercase transition-colors"
                    >
                      <span>CUSTOM ENQUIRY</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Dispatch Guidance Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-charcoal-900 text-white p-8 sm:p-12 border border-charcoal-800 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Need Guidance on Vehicle Capacity or Routing?
          </h2>
          <p className="text-charcoal-400 text-sm sm:text-base max-w-xl mx-auto">
            Speak directly with our central booking desk to assess volume, recommended mode (Road / Rail / Air), and departure schedules.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <Link
              to="/enquiry"
              className="px-6 py-3.5 rounded-lg bg-accent-orange hover:bg-accent-orangeHover text-white font-bold text-xs tracking-wider uppercase transition-colors"
            >
              SUBMIT DISPATCH ENQUIRY
            </Link>
            <a
              href={`tel:${COMPANY_INFO.rawPhone}`}
              className="px-6 py-3.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-accent-orange" />
              <span>CALL: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
