import React from 'react';
import { WorkforceCategory } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface WorkforceCardProps {
  category: WorkforceCategory;
  onSelect: (category: WorkforceCategory) => void;
  onRequestManpower: (categoryName?: string) => void;
}

export const WorkforceCard: React.FC<WorkforceCardProps> = ({
  category,
  onSelect,
  onRequestManpower,
}) => {
  return (
    <div className="glass-card rounded-2xl flex flex-col h-full overflow-hidden group">
      {/* Visual Image Header with Overlay */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent"></div>
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md bg-white/85 text-slate-800 border-white/60 shadow-xs">
            <DynamicIcon name={category.iconName} className="w-3.5 h-3.5 text-blue-600" />
            {category.title}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-xs">
            {category.title}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-slate-600 text-sm leading-relaxed mb-5">
            {category.shortDescription}
          </p>

          <div className="mb-5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Typical Roles Supplied:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {category.roles.slice(0, 5).map((role, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white/70 backdrop-blur-xs text-slate-700 font-medium px-2.5 py-1 rounded-lg border border-white/80 shadow-2xs"
                >
                  {role}
                </span>
              ))}
              {category.roles.length > 5 && (
                <span className="text-xs bg-blue-50/90 text-blue-700 font-medium px-2 py-1 rounded-lg border border-blue-200/60">
                  +{category.roles.length - 5} more
                </span>
              )}
            </div>
          </div>

          <div className="mb-6 space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Key Competencies:
            </div>
            {category.skillsList.slice(0, 3).map((skill, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between gap-2 mt-2">
          <button
            onClick={() => onSelect(category)}
            className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer py-1"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onRequestManpower(category.title)}
            className="px-3.5 py-1.5 rounded-xl bg-blue-50/90 hover:bg-blue-100 text-blue-700 text-xs font-bold transition-all cursor-pointer border border-blue-200/70 shadow-2xs hover:shadow-xs"
          >
            Hire This Category
          </button>
        </div>
      </div>
    </div>
  );
};
