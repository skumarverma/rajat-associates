import React, { useState } from 'react';
import { COMPANY_INFO, getWhatsAppLink } from '../data/companyData';
import { Phone, X, ArrowUpRight } from 'lucide-react';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface FloatingActionsProps {
  onRequestManpower: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onRequestManpower }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Floating Desktop / Tablet Circular Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-center gap-3">
        {showTooltip && (
          <div className="relative glass-dark text-white text-xs py-2.5 px-4 rounded-2xl shadow-xl flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-300 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Need manpower quickly? Contact us</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white ml-1 p-0.5 rounded-md hover:bg-slate-800"
              aria-label="Close message"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-slate-900/90 rotate-45 border-r border-b border-slate-700/50"></div>
          </div>
        )}

        {/* Circular Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-xl hover:scale-105 border border-blue-400/30 transition-all duration-200"
          aria-label="Call Now"
          title="Call Now"
        >
          <Phone className="w-6 h-6 text-white" />
        </a>

        {/* Circular WhatsApp Button */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600/95 backdrop-blur-md hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:scale-105 border border-emerald-400/30 transition-all duration-200"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-6 h-6" />
        </a>
      </div>

      {/* Mobile Bottom Fixed Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/90 backdrop-blur-xl border-t border-white/80 p-2.5 shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/80 border border-slate-200/80 text-slate-800 font-semibold text-[11px] active:bg-slate-100 shadow-2xs"
          >
            <Phone className="w-4 h-4 text-blue-600 mb-0.5" />
            <span>Call Now</span>
          </a>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50/90 text-emerald-800 border border-emerald-200/80 font-semibold text-[11px] active:bg-emerald-100 shadow-2xs"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-600 mb-0.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onRequestManpower}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-blue-600 text-white font-semibold text-[11px] shadow-sm active:bg-blue-700"
          >
            <ArrowUpRight className="w-4 h-4 text-blue-100 mb-0.5" />
            <span>Request</span>
          </button>
        </div>
      </div>
    </>
  );
};
