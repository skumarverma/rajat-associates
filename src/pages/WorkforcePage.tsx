import React, { useState } from 'react';
import { PageId, WorkforceCategoryKey } from '../types';
import { WORKFORCE_CATEGORIES, getWhatsAppLink, INDUSTRIES } from '../data/companyData';
import { SectionHeading } from '../components/SectionHeading';

import { DynamicIcon } from '../components/DynamicIcon';
import { IndustryCard } from '../components/IndustryCard';
import {
  Users,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Cpu,
  Sparkles,
} from 'lucide-react';

interface WorkforcePageProps {
  onNavigate: (page: PageId) => void;
  onRequestManpower: (categoryName?: string) => void;
}

export const WorkforcePage: React.FC<WorkforcePageProps> = ({
  onNavigate,
  onRequestManpower,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<WorkforceCategoryKey>('all');

  const filteredCategories =
    selectedFilter === 'all'
      ? WORKFORCE_CATEGORIES
      : WORKFORCE_CATEGORIES.filter((c) => c.key === selectedFilter);

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="ambient-mesh py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-badge text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Users className="w-4 h-4 text-blue-600" />
            <span>Structured Skill Tiers</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our Workforce Categories
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From foundational site labor to certified technical specialists and site leaders, we supply verified manpower organized across 4 defined competency levels.
          </p>

          {/* Quick Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'glass-button text-slate-700 hover:text-slate-900'
              }`}
            >
              All Categories (4)
            </button>
            <button
              onClick={() => setSelectedFilter('unskilled')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === 'unskilled'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'glass-button text-slate-700 hover:text-slate-900'
              }`}
            >
              Unskilled Labor
            </button>
            <button
              onClick={() => setSelectedFilter('semi-skilled')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === 'semi-skilled'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'glass-button text-slate-700 hover:text-slate-900'
              }`}
            >
              Semi-Skilled
            </button>
            <button
              onClick={() => setSelectedFilter('skilled')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === 'skilled'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'glass-button text-slate-700 hover:text-slate-900'
              }`}
            >
              Skilled Trades
            </button>
            <button
              onClick={() => setSelectedFilter('supervisory')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === 'supervisory'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'glass-button text-slate-700 hover:text-slate-900'
              }`}
            >
              Supervisory Staff
            </button>
          </div>
        </div>
      </section>

      {/* Deep-Dive Category Sections */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-xs border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          {filteredCategories.map((cat, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={cat.id}
                id={cat.id}
                className={`glass-panel rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center gap-10 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image Block */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/60 group">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold glass-badge text-slate-900 shadow-xs border border-white/80">
                        <DynamicIcon name={cat.iconName} className="w-3.5 h-3.5 text-blue-600" />
                        {cat.title}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs font-semibold text-blue-200 mb-1">
                        Suitable For:
                      </div>
                      <div className="text-xs text-slate-200 leading-snug">
                        {cat.suitableFor}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content Block */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                    <span>Category Tier: {cat.title}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {cat.title}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {cat.longDescription}
                  </p>

                  {/* Roles Provided in this Category */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Roles & Positions Available:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cat.roles.map((role, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-center gap-2 p-2.5 rounded-xl glass-card text-xs font-medium text-slate-800"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Competencies */}
                  <div className="pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Screening & Competencies:
                    </h3>
                    <div className="space-y-1.5">
                      {cat.skillsList.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onRequestManpower(cat.title)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-600/20 transition-colors cursor-pointer"
                    >
                      <span>Hire {cat.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={getWhatsAppLink(`Hello Rajat Associates, I need workforce details for ${cat.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-badge text-emerald-800 border-emerald-300/80 hover:bg-emerald-100/60 font-bold text-xs transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp Requirement</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section id="industries-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Targeted Workforce Deployment"
            title="Specialized Manpower for Critical Sectors"
            subtitle="Every industrial sector has unique working conditions, shift cycles, and safety standards. Our manpower supply is organized to match these nuances."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                onRequestManpower={onRequestManpower}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sector Compliance & Safety Protocols */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Site Safety & Industrial Compliance
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Safety is fundamental across construction and manufacturing floors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl glass-card border border-blue-200/60 bg-blue-50/40">
              <div className="font-bold text-slate-900 text-sm mb-2">PPE Awareness</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Workers are briefed on helmet, safety boot, reflective vest, and eye protection requirements before entering plant gates.
              </p>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-blue-200/60 bg-blue-50/40">
              <div className="font-bold text-slate-900 text-sm mb-2">Shift Discipline</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strict adherence to clock-in hours, rotation timing, and site-level punch card or muster roll logging.
              </p>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-blue-200/60 bg-blue-50/40">
              <div className="font-bold text-slate-900 text-sm mb-2">Basic Tool Handling</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Workers are accustomed to standard warehouse trolleys, material shifting rigs, and basic production tooling.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};
