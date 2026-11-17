import React from 'react';
import { IndustryItem } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { ArrowRight } from 'lucide-react';

interface IndustryCardProps {
  industry: IndustryItem;
  onRequestManpower: (industryName?: string) => void;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({
  industry,
  onRequestManpower,
}) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group">
      {/* Industry Image & Icon */}
      <div className="relative h-44 overflow-hidden bg-slate-100">
        <img
          src={industry.image}
          alt={industry.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600/85 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-xs">
              <DynamicIcon name={industry.iconName} className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight drop-shadow-xs">
              {industry.name}
            </h3>
          </div>
        </div>
      </div>

      {/* Description & Roles */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs font-semibold text-blue-700 mb-2">
            {industry.headline}
          </p>
          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            {industry.description}
          </p>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Common Roles Deployed:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {industry.workforceProvided.map((role, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium bg-white/70 backdrop-blur-xs text-slate-700 px-2.5 py-1 rounded-lg border border-white/80 shadow-2xs"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-end">
          <button
            onClick={() => onRequestManpower(`Industry: ${industry.name}`)}
            className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <span>Request {industry.name} Workforce</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
