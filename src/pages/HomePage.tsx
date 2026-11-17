import React, { useState } from 'react';
import { PageId, WorkforceCategory, ManpowerRequestPreset } from '../types';
import {
  COMPANY_INFO,
  WORKFORCE_CATEGORIES,
  SERVICES,
  INDUSTRIES,
  WHY_CHOOSE_US,
  HOW_IT_WORKS_STEPS,
  TRUST_PILLARS,
  FAQS,
  getWhatsAppLink,
} from '../data/companyData';
import { SectionHeading } from '../components/SectionHeading';
import { WorkforceCard } from '../components/WorkforceCard';
import { ServiceCard } from '../components/ServiceCard';
import { IndustryCard } from '../components/IndustryCard';

import { DynamicIcon } from '../components/DynamicIcon';
import { ManpowerCalculator } from '../components/ManpowerCalculator';
import {
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  ChevronDown,
  Building,
  ChevronRight,
  ArrowUpRight,
  HardHat,
  Factory,
  Cpu,
  Workflow,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onRequestManpower: (categoryOrConfig?: string | ManpowerRequestPreset) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onRequestManpower,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleSelectCategory = (cat: WorkforceCategory) => {
    onNavigate('workforce');
  };

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative ambient-mesh pt-12 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge text-blue-800 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>Workforce Contractor • Meerut & UP</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
                Reliable Manpower.{' '}
                <span className="text-blue-600">Skilled Workforce.</span>{' '}
                Stronger Operations.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Rajat Associates provides dependable manpower solutions for businesses, factories, construction sites, industrial projects, and organizations across different workforce requirements. From unskilled labor to skilled technicians and supervisory staff, we help businesses build the right workforce for their operational and project needs.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => onRequestManpower()}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-600/25 hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Request Manpower</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>

              {/* Key Trust Checkmarks */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fast Deployment</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>4 Skill Tiers</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Site Coordination</span>
                </div>
              </div>
            </div>

            {/* Right Visual Environment Box */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden glass-panel p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
                    alt="Rajat Associates Workforce on Site"
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>

                  {/* Floating On-Site Status Box */}
                  <div className="absolute top-4 right-4 glass-panel px-3.5 py-2 rounded-xl shadow-lg border-white/80">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                      <span className="text-xs font-bold text-slate-900">Active Supply Ready</span>
                    </div>
                    <div className="text-[10px] font-medium text-slate-500 mt-0.5">
                      Meerut & NCR Region
                    </div>
                  </div>

                  {/* Bottom Highlight Information */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs uppercase font-bold tracking-wider text-blue-300 mb-1">
                      Structured Human Resource Partner
                    </div>
                    <div className="text-base font-bold">
                      From General Civil Laborers to Certified Technicians & Shift Supervisors
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-white/20">
                      <span>House No. 46, East Defence Colony</span>
                      <span className="font-semibold text-white">Mawana Rd, Meerut</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION ("Your Workforce, Our Responsibility") */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-xs border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Trust & Reliability"
            title="Your Workforce, Our Responsibility"
            subtitle="Finding the right workforce should not slow down your business. Rajat Associates helps organizations meet their manpower requirements with flexible workforce solutions designed around project size, skill requirements, timelines, and operational demands."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center mb-4 shadow-2xs border border-blue-200/60">
                    <DynamicIcon name={pillar.iconName} className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MANPOWER ACROSS SKILL LEVELS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Categorized Staffing"
            title="Manpower Across Skill Levels"
            subtitle="We supply categorized personnel tailored to the exact physical, mechanical, and technical demands of your site."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {WORKFORCE_CATEGORIES.slice(0, 2).map((cat) => (
              <WorkforceCard
                key={cat.id}
                category={cat}
                onSelect={handleSelectCategory}
                onRequestManpower={onRequestManpower}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('workforce')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-xs transition-colors cursor-pointer"
            >
              <span>Explore All Workforce Details</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE MANPOWER HEADCOUNT ESTIMATOR */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Project Planning"
            title="Estimate Your Workforce Requirement"
            subtitle="Plan team sizes across skill categories, adjust shift models, and send your requirement breakdown to Rajat Associates for immediate coordination."
          />
          <ManpowerCalculator
            onRequestWithBreakdown={(breakdown) => {
              onRequestManpower(breakdown);
            }}
          />
        </div>
      </section>

      {/* 5. SERVICES PREVIEW */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Comprehensive Capabilities"
            title="Workforce Engagement Services"
            subtitle="Flexible manpower options from short-term emergency surge support to ongoing contractual deployments and site management."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onRequestManpower={onRequestManpower}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-xs transition-colors cursor-pointer"
            >
              <span>View All Service Offerings</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES SERVED */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Sectors & Verticals"
            title="Workforce Solutions for Multiple Industries"
            subtitle="Customized manpower deployment designed around the specific working conditions and compliance requirements of each industry."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.slice(0, 3).map((industry) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                onRequestManpower={onRequestManpower}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => {
                onNavigate('workforce');
                setTimeout(() => {
                  document.getElementById('industries-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-xs transition-colors cursor-pointer"
            >
              <span>Explore All Industries</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE RAJAT ASSOCIATES */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ambient-mesh-subtle border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Why Us"
            title="A Workforce Partner You Can Depend On"
            subtitle="We distinguish ourselves through structured deployment, responsive site management, and dependable long-term relationships."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.id}
                className="glass-card p-7 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50/90 border border-blue-200/60 flex items-center justify-center text-blue-600 mb-4 shadow-2xs">
                    <DynamicIcon name={item.iconName} className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HOW IT WORKS (5-STEP PROCESS) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-xs border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Deployment Lifecycle"
            title="How We Deliver Your Workforce"
            subtitle="A transparent, straightforward 5-step process designed to mobilize the right manpower with minimal operational friction."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-blue-600 font-mono">
                      {step.stepNumber}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/90 border border-slate-200/80 flex items-center justify-center text-slate-700 shadow-2xs">
                      <DynamicIcon name={step.iconName} className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/70 text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                  <span>Phase:</span>
                  <span className="text-blue-700">{step.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ambient-mesh-subtle border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Client Inquiries"
            title="Frequently Asked Questions"
            subtitle="Clear answers regarding manpower categories, engagement models, and site deployment across Meerut and Uttar Pradesh."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left font-bold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4 cursor-pointer hover:text-blue-600"
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`w-8 h-8 rounded-xl bg-slate-100/80 border border-slate-200/60 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>


    </div>
  );
};
