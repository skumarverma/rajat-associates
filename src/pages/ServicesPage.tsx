import React from 'react';
import { PageId } from '../types';
import { SERVICES, getWhatsAppLink } from '../data/companyData';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';

import { ShieldCheck, CheckCircle2, MessageSquare, Phone, ArrowRight, Layers } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onRequestManpower: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onRequestManpower,
}) => {
  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="ambient-mesh py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-badge text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>Comprehensive Workforce Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our Manpower Supply Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From temporary surge staffing to long-term contract deployments and skilled technical trades, explore our comprehensive manpower solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-xs border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Tailored Engagement Models"
            title="Workforce Services Built for Industry Demands"
            subtitle="Choose the staffing model that best aligns with your project duration, budget constraints, and operational velocity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onRequestManpower={onRequestManpower}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Comparison Matrix */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 ambient-mesh-subtle border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Choosing the Right Service Model
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              A quick comparison of how our primary engagement formats work for different scenarios.
            </p>
          </div>

          <div className="overflow-x-auto glass-panel p-2 sm:p-3 rounded-3xl shadow-xl">
            <table className="w-full bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-2xs text-left text-xs sm:text-sm overflow-hidden">
              <thead className="bg-slate-100/90 text-slate-800 uppercase tracking-wider text-[11px] font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Model</th>
                  <th className="py-3.5 px-4">Best For</th>
                  <th className="py-3.5 px-4">Coordination Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 text-slate-700">
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">Temporary Manpower</td>
                  <td className="py-4 px-4">Seasonal spikes, shutdown overhauls, urgent backfills</td>
                  <td className="py-4 px-4 text-blue-700 font-semibold">Immediate Dispatch & Daily Monitoring</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">Contract Staffing</td>
                  <td className="py-4 px-4">Factory shifts, assembly lines, warehouse facilities</td>
                  <td className="py-4 px-4 text-blue-700 font-semibold">Full Shift Coordination & Muster Support</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">Skilled Trades Supply</td>
                  <td className="py-4 px-4">Structural fabrication, MEP, plant maintenance</td>
                  <td className="py-4 px-4 text-blue-700 font-semibold">Trade Screening & Safety Enforcement</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">Supervisory Staffing</td>
                  <td className="py-4 px-4">Large construction projects, multi-acre plants</td>
                  <td className="py-4 px-4 text-blue-700 font-semibold">Direct Management & Daily Reporting</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>


    </div>
  );
};
