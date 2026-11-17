import React from 'react';
import { COMPANY_INFO, getWhatsAppLink } from '../data/companyData';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Clock, Users } from 'lucide-react';

interface CTASectionProps {
  onRequestManpower: () => void;
  title?: string;
  subtitle?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onRequestManpower,
  title = 'Need Reliable Manpower for Your Next Project?',
  subtitle = 'Tell us your workforce requirement and let Rajat Associates help you plan the right manpower solution tailored to your site schedules and skill requirements.',
}) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 ambient-mesh relative overflow-hidden">
      <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        {/* Subtle decorative frosted background shapes */}
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-blue-400/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-teal-400/20 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Dependable Workforce Solutions</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>

          {/* Key Value Micro-Pillars */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/60 backdrop-blur-xs border border-white/80 shadow-xs">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>Fast Site Deployment</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/60 backdrop-blur-xs border border-white/80 shadow-xs">
              <Users className="w-4 h-4 text-blue-600" />
              <span>Unskilled to Supervisory Staff</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/60 backdrop-blur-xs border border-white/80 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Dedicated Coordination</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onRequestManpower}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg shadow-blue-600/25 transition-all cursor-pointer hover:scale-[1.02]"
            >
              <span>Request Manpower</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/80 hover:bg-white text-slate-800 font-bold text-sm border border-slate-200/80 shadow-xs backdrop-blur-xs transition-all hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call Now ({COMPANY_INFO.phone})</span>
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <p className="mt-4 text-[11px] text-slate-400">
            Office in Mawana Road, Meerut • Serving Western UP & Industrial Hubs
          </p>
        </div>
      </div>
    </section>
  );
};
