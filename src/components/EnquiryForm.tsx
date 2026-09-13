import React, { useState, useRef } from 'react';
import { MessageSquare, Phone, Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppEnquiryUrl, ENQUIRY_SERVICES, type EnquiryService } from '../data/company';

interface FormData {
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  service: EnquiryService;
  message: string;
  honeypot: string; // Anti-spam field
}

interface FormErrors {
  name?: string;
  phone?: string;
  pickup?: string;
  destination?: string;
  service?: string;
  message?: string;
}

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    pickup: 'Bengaluru',
    destination: '',
    service: 'Road Freight',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState('');
  const lastSubmitTime = useRef<number>(0);

  // Sanitize input helper
  const sanitize = (val: string): string => {
    return val.replace(/<[^>]*>?/gm, '').trim();
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};

    // Name validation
    const cleanName = sanitize(formData.name);
    if (!cleanName) {
      errs.name = 'Please enter your name or company name.';
    } else if (cleanName.length < 2) {
      errs.name = 'Name must be at least 2 characters long.';
    } else if (cleanName.length > 100) {
      errs.name = 'Name cannot exceed 100 characters.';
    }

    // Phone validation
    const digitsOnly = formData.phone.replace(/[^0-9]/g, '');
    if (!digitsOnly) {
      errs.phone = 'Please enter a valid phone number.';
    } else if (digitsOnly.length < 10) {
      errs.phone = 'Phone number must have at least 10 digits.';
    } else if (digitsOnly.length > 15) {
      errs.phone = 'Phone number is too long (maximum 15 digits).';
    }

    // Pickup location validation
    const cleanPickup = sanitize(formData.pickup);
    if (!cleanPickup) {
      errs.pickup = 'Please enter the pickup location.';
    } else if (cleanPickup.length < 2) {
      errs.pickup = 'Pickup location must be at least 2 characters.';
    } else if (cleanPickup.length > 100) {
      errs.pickup = 'Pickup location cannot exceed 100 characters.';
    }

    // Destination validation
    const cleanDest = sanitize(formData.destination);
    if (!cleanDest) {
      errs.destination = 'Please enter the destination city or hub.';
    } else if (cleanDest.length < 2) {
      errs.destination = 'Destination must be at least 2 characters.';
    } else if (cleanDest.length > 100) {
      errs.destination = 'Destination cannot exceed 100 characters.';
    }

    // Service validation
    if (!formData.service || !ENQUIRY_SERVICES.includes(formData.service)) {
      errs.service = 'Please select a valid service.';
    }

    // Message validation (optional, but length checked)
    if (formData.message && formData.message.length > 1000) {
      errs.message = 'Message must be within 1000 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam: check honeypot
    if (formData.honeypot) {
      console.warn('Spam submission detected.');
      return;
    }

    // Anti-spam: rate limit (cooldown of 2 seconds)
    const now = Date.now();
    if (now - lastSubmitTime.current < 2000) {
      return;
    }
    lastSubmitTime.current = now;

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const url = createWhatsAppEnquiryUrl({
        name: sanitize(formData.name),
        phone: formData.phone.trim(),
        pickup: sanitize(formData.pickup),
        destination: sanitize(formData.destination),
        service: formData.service,
        message: sanitize(formData.message),
      });

      setGeneratedUrl(url);
      setIsReady(true);

      // Open WhatsApp in a new tab safely
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.error('Error generating WhatsApp enquiry:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const cityShortcuts = ['Bengaluru', 'Mumbai', 'Delhi', 'Pune', 'Jaipur', 'Kolkata'];

  return (
    <div className="bg-white dark:bg-dark-surface rounded-3xl p-6 sm:p-10 lg:p-12 border border-steel dark:border-dark-border shadow-subtle dark:shadow-dark-subtle transition-colors duration-200">
      
      {/* Header Inside Form */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 mb-8 border-b border-steel dark:border-dark-border">
        <div>
          <span className="text-[11px] font-bold tracking-[0.25em] text-accent-orange uppercase block mb-1">
            DIRECT DISPATCH DESK
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-charcoal-900 dark:text-[#EDEDEC]">
            Cargo & Rate Enquiry
          </h2>
          <p className="text-charcoal-600 dark:text-dark-textMuted text-xs sm:text-sm mt-1">
            Prompt route confirmations and rates directly from our operations desk.
          </p>
        </div>

        <a
          href={`tel:${COMPANY_INFO.rawPhone}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-charcoal-900 dark:text-[#EDEDEC] hover:text-accent-orange transition-colors self-start sm:self-auto shrink-0"
        >
          <Phone className="w-3.5 h-3.5 text-accent-orange" />
          <span>Call: {COMPANY_INFO.phone}</span>
        </a>
      </div>

      {isReady ? (
        /* Section 10: Clear Confirmation — ENQUIRY READY */
        <div className="bg-[#F5F3EE] dark:bg-dark-surfaceMuted border border-steel dark:border-dark-border rounded-2xl p-8 sm:p-10 text-center space-y-5" role="status" aria-live="polite">
          <div className="w-14 h-14 bg-charcoal-900 dark:bg-dark-surface text-white rounded-2xl flex items-center justify-center mx-auto shadow-subtle dark:border dark:border-dark-border">
            <CheckCircle2 className="w-7 h-7 text-accent-orange" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold tracking-[0.2em] text-accent-orange uppercase block">
              STATUS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 dark:text-[#EDEDEC]">
              ENQUIRY READY
            </h3>
            <p className="text-charcoal-600 dark:text-dark-textMuted text-sm max-w-md mx-auto leading-relaxed">
              Your enquiry has been prepared for WhatsApp with your consignment details. If WhatsApp did not open automatically, click below to start your conversation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <a
              href={generatedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-accent-orange hover:bg-accent-orangeHover text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>OPEN WHATSAPP NOW</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setIsReady(false);
                setFormData({
                  name: '',
                  phone: '',
                  pickup: 'Bengaluru',
                  destination: '',
                  service: 'Road Freight',
                  message: '',
                  honeypot: '',
                });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-steel dark:border-dark-border bg-white dark:bg-dark-surface text-charcoal-800 dark:text-dark-text font-bold text-xs tracking-wider uppercase hover:bg-warm-bg dark:hover:bg-dark-surfaceMuted transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>NEW ENQUIRY</span>
            </button>
          </div>

          <p className="text-[11px] text-charcoal-500 dark:text-dark-textMuted pt-2">
            Direct dispatch coordinator available on +91 8217696321.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          
          {/* Honeypot field (hidden from real users, traps bots) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="form-hp">Do not fill this out</label>
            <input
              id="form-hp"
              type="text"
              name="hp_field"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            />
          </div>

          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="enquiry-name" className="block text-xs font-bold text-charcoal-800 dark:text-dark-text tracking-wider uppercase mb-2">
                YOUR NAME / COMPANY <span className="text-accent-orange">*</span>
              </label>
              <input
                id="enquiry-name"
                type="text"
                autoComplete="name"
                maxLength={100}
                placeholder="e.g. Ramesh Kumar / ABC Enterprises"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                className={`w-full px-4 py-3.5 rounded-xl border text-sm text-charcoal-900 dark:text-dark-text placeholder-charcoal-400 dark:placeholder-charcoal-400 focus:outline-none focus:ring-1 transition-all ${
                  errors.name
                    ? 'border-red-400 bg-red-50/20 dark:bg-red-950/20 focus:ring-red-400'
                    : 'border-steel dark:border-dark-border bg-[#F8F7F4] dark:bg-dark-surfaceMuted focus:border-charcoal-900 dark:focus:border-accent-orange focus:ring-charcoal-900 dark:focus:ring-accent-orange'
                }`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                required
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="enquiry-phone" className="block text-xs font-bold text-charcoal-800 dark:text-dark-text tracking-wider uppercase mb-2">
                PHONE NUMBER <span className="text-accent-orange">*</span>
              </label>
              <input
                id="enquiry-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                maxLength={15}
                placeholder="e.g. +91 82176 96321"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                }}
                className={`w-full px-4 py-3.5 rounded-xl border text-sm text-charcoal-900 dark:text-dark-text placeholder-charcoal-400 dark:placeholder-charcoal-400 focus:outline-none focus:ring-1 transition-all ${
                  errors.phone
                    ? 'border-red-400 bg-red-50/20 dark:bg-red-950/20 focus:ring-red-400'
                    : 'border-steel dark:border-dark-border bg-[#F8F7F4] dark:bg-dark-surfaceMuted focus:border-charcoal-900 dark:focus:border-accent-orange focus:ring-charcoal-900 dark:focus:ring-accent-orange'
                }`}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                required
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Pickup & Destination */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="enquiry-pickup" className="block text-xs font-bold text-charcoal-800 dark:text-dark-text tracking-wider uppercase mb-2">
                PICKUP LOCATION <span className="text-accent-orange">*</span>
              </label>
              <input
                id="enquiry-pickup"
                type="text"
                maxLength={100}
                placeholder="e.g. Bengaluru (Ramchandrapuram, Peenya...)"
                value={formData.pickup}
                onChange={(e) => {
                  setFormData({ ...formData, pickup: e.target.value });
                  if (errors.pickup) setErrors({ ...errors, pickup: undefined });
                }}
                className={`w-full px-4 py-3.5 rounded-xl border text-sm text-charcoal-900 dark:text-dark-text placeholder-charcoal-400 dark:placeholder-charcoal-400 focus:outline-none focus:ring-1 transition-all ${
                  errors.pickup
                    ? 'border-red-400 bg-red-50/20 dark:bg-red-950/20 focus:ring-red-400'
                    : 'border-steel dark:border-dark-border bg-[#F8F7F4] dark:bg-dark-surfaceMuted focus:border-charcoal-900 dark:focus:border-accent-orange focus:ring-charcoal-900 dark:focus:ring-accent-orange'
                }`}
                aria-invalid={!!errors.pickup}
                aria-describedby={errors.pickup ? 'pickup-error' : undefined}
                required
              />
              {errors.pickup && (
                <p id="pickup-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.pickup}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="enquiry-destination" className="block text-xs font-bold text-charcoal-800 dark:text-dark-text tracking-wider uppercase mb-2">
                DESTINATION <span className="text-accent-orange">*</span>
              </label>
              <input
                id="enquiry-destination"
                type="text"
                maxLength={100}
                placeholder="e.g. Mumbai, Delhi, Pune, Jaipur, Kolkata..."
                value={formData.destination}
                onChange={(e) => {
                  setFormData({ ...formData, destination: e.target.value });
                  if (errors.destination) setErrors({ ...errors, destination: undefined });
                }}
                className={`w-full px-4 py-3.5 rounded-xl border text-sm text-charcoal-900 dark:text-dark-text placeholder-charcoal-400 dark:placeholder-charcoal-400 focus:outline-none focus:ring-1 transition-all ${
                  errors.destination
                    ? 'border-red-400 bg-red-50/20 dark:bg-red-950/20 focus:ring-red-400'
                    : 'border-steel dark:border-dark-border bg-[#F8F7F4] dark:bg-dark-surfaceMuted focus:border-charcoal-900 dark:focus:border-accent-orange focus:ring-charcoal-900 dark:focus:ring-accent-orange'
                }`}
                aria-invalid={!!errors.destination}
                aria-describedby={errors.destination ? 'dest-error' : undefined}
                required
              />
              {errors.destination && (
                <p id="dest-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.destination}</span>
                </p>
              )}

              {/* City shortcut pills */}
              <div className="flex items-center gap-1.5 mt-2 overflow-x-auto text-[11px] text-charcoal-500 dark:text-dark-textMuted">
                <span className="shrink-0 font-medium">Quick Hub:</span>
                {cityShortcuts.map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, destination: city });
                      if (errors.destination) setErrors({ ...errors, destination: undefined });
                    }}
                    className="px-2 py-0.5 rounded bg-[#ECE9E2] dark:bg-dark-surfaceMuted border border-transparent dark:border-dark-border text-charcoal-700 dark:text-dark-text hover:bg-charcoal-900 dark:hover:bg-accent-orange hover:text-white dark:hover:text-white transition-colors shrink-0 text-[11px] font-semibold"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3: Service Required (Section 8 Dropdown) */}
          <div>
            <label htmlFor="enquiry-service" className="block text-xs font-bold text-charcoal-800 dark:text-dark-text tracking-wider uppercase mb-2">
              SERVICE REQUIRED <span className="text-accent-orange">*</span>
            </label>
            <div className="relative">
              <select
                id="enquiry-service"
                value={formData.service}
                onChange={(e) => {
                  setFormData({ ...formData, service: e.target.value as EnquiryService });
                  if (errors.service) setErrors({ ...errors, service: undefined });
                }}
                className={`w-full px-4 py-3.5 rounded-xl border text-sm text-charcoal-900 dark:text-dark-text bg-[#F8F7F4] dark:bg-dark-surfaceMuted focus:outline-none focus:ring-1 cursor-pointer appearance-none transition-all ${
                  errors.service
                    ? 'border-red-400 focus:ring-red-400'
                    : 'border-steel dark:border-dark-border focus:border-charcoal-900 dark:focus:border-accent-orange focus:ring-charcoal-900 dark:focus:ring-accent-orange'
                }`}
                required
              >
                {ENQUIRY_SERVICES.map((s) => (
                  <option key={s} value={s} className="dark:bg-dark-surface dark:text-dark-text">
                    {s}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-charcoal-600 dark:text-dark-textMuted">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {errors.service && (
              <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.service}</span>
              </p>
            )}
          </div>

          {/* Row 4: Message (Optional per Section 7) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="enquiry-message" className="block text-xs font-bold text-charcoal-800 dark:text-dark-text tracking-wider uppercase">
                CONSIGNMENT DETAILS / MESSAGE
              </label>
              <span className="text-[11px] text-charcoal-400 dark:text-dark-textMuted font-medium">Optional</span>
            </div>
            <textarea
              id="enquiry-message"
              rows={4}
              maxLength={1000}
              placeholder="Provide estimated weight (kg), number of cartons/pallets, cargo dimensions, or dispatch timeframe..."
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: undefined });
              }}
              className={`w-full px-4 py-3.5 rounded-xl border text-sm text-charcoal-900 dark:text-dark-text placeholder-charcoal-400 dark:placeholder-charcoal-400 focus:outline-none focus:ring-1 transition-all ${
                errors.message
                  ? 'border-red-400 bg-red-50/20 dark:bg-red-950/20 focus:ring-red-400'
                  : 'border-steel dark:border-dark-border bg-[#F8F7F4] dark:bg-dark-surfaceMuted focus:border-charcoal-900 dark:focus:border-accent-orange focus:ring-charcoal-900 dark:focus:ring-accent-orange'
              }`}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-steel dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-charcoal-600 dark:text-dark-textMuted">
              <span className="font-bold text-charcoal-900 dark:text-[#EDEDEC]">Direct WhatsApp:</span> {COMPANY_INFO.phone}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-charcoal-900 dark:bg-accent-orange hover:bg-black dark:hover:bg-accent-orangeHover text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 transition-colors shadow-sm disabled:opacity-50"
            >
              <span>SEND ENQUIRY ON WHATSAPP</span>
              <Send className="w-3.5 h-3.5 text-accent-orange dark:text-white" />
            </button>
          </div>

        </form>
      )}

    </div>
  );
};
