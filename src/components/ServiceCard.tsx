import React from 'react';
import { ServiceItem } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onRequestManpower: (serviceName?: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onRequestManpower }) => {
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full group">
      <div>
        {/* Header Icon + Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50/90 border border-blue-200/80 backdrop-blur-xs flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200 shadow-2xs">
            <DynamicIcon name={service.iconName} className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 bg-white/70 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/80 shadow-2xs">
            {service.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          {service.shortDescription}
        </p>

        {/* Key Features List */}
        <div className="space-y-2 mb-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Service Highlights:
          </div>
          {service.keyFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Roles Provided */}
        <div className="mb-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Example Roles:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {service.rolesProvided.map((role, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium bg-white/60 backdrop-blur-xs text-slate-700 px-2.5 py-1 rounded-lg border border-white/80 shadow-2xs"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between mt-2">
        <span className="text-xs text-slate-400 font-medium">Ready for deployment</span>
        <button
          onClick={() => onRequestManpower(service.title)}
          className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group-hover:translate-x-0.5 cursor-pointer py-1"
        >
          <span>Get Workforce</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
