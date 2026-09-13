import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
}) => {
  return (
    <div
      className={`max-w-3xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      } mb-12 sm:mb-16`}
    >
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            dark
              ? 'bg-brand-accent/20 text-orange-400 border border-brand-accent/30'
              : 'bg-orange-50 text-brand-accent border border-orange-200'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          {badge}
        </span>
      )}

      <h2
        className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
