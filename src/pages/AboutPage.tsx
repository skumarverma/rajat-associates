import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, getWhatsAppLink, WHY_CHOOSE_US } from '../data/companyData';
import { SectionHeading } from '../components/SectionHeading';
import { DynamicIcon } from '../components/DynamicIcon';

import {
  ShieldCheck,
  Target,
  Eye,
  Compass,
  CheckCircle2,
  Phone,
  MessageSquare,
  Users,
  Building2,
  Workflow,
  MapPin,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onRequestManpower: (context?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onRequestManpower,
}) => {
  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="ambient-mesh py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-badge text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Company Overview</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Building Reliable Workforce Connections
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A dedicated manpower supply contractor and workforce solutions partner based in Meerut, Uttar Pradesh, supporting industrial, construction, and commercial operations.
          </p>
        </div>
      </section>

      {/* Main Introduction Story */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-xs border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
                <span>Who We Are</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Your Trusted Workforce Partner for Every Operational Challenge
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                <strong className="text-slate-800 font-semibold">Rajat Associates</strong> is a manpower supply and workforce solutions company based in Meerut, Uttar Pradesh. We support organizations by providing manpower across different skill levels and operational requirements.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Our objective is to simplify workforce requirements for businesses by helping them access suitable manpower for temporary, contractual, project-based, and permanent requirements.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                From general helpers and site workers to skilled technicians and supervisory staff, our workforce solutions are designed to support organizations across construction, manufacturing, infrastructure, logistics, industrial, and commercial sectors.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl glass-card">
                  <div className="font-bold text-slate-900 text-sm mb-1">Local & Regional Presence</div>
                  <div className="text-xs text-slate-600">Based in Mawana Road, Meerut, catering to Western UP & NCR hubs.</div>
                </div>
                <div className="p-4 rounded-2xl glass-card">
                  <div className="font-bold text-slate-900 text-sm mb-1">End-to-End Coordination</div>
                  <div className="text-xs text-slate-600">Muster attendance, site supervision, and proactive backup provisioning.</div>
                </div>
              </div>
            </div>

            {/* Visual Box */}
            <div className="lg:col-span-5">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-600/30">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  A Workforce Partner, Not Just a Labor Supplier
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  We believe that successful projects depend on reliable human resources. Rather than just dispatching laborers, we understand your daily operational tempo, safety requirements, and output targets to deliver a cohesive team.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-200/80">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Skill-based worker placement</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Contractual, temporary & permanent options</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Site-level workforce coordination</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Transparent communication & ethical terms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Approach Triad */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ambient-mesh-subtle border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Core Philosophy"
            title="Mission, Vision & Our Approach"
            subtitle="Guiding principles that define our commitment to clients, workers, and project outcomes."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="glass-card p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50/90 text-blue-700 flex items-center justify-center mb-5 border border-blue-200/60 shadow-2xs">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To provide dependable and flexible workforce solutions that help businesses operate efficiently and complete projects with confidence.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="glass-card p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50/90 text-emerald-700 flex items-center justify-center mb-5 border border-emerald-200/60 shadow-2xs">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To become a trusted workforce partner for businesses by delivering reliable manpower solutions and building long-term professional relationships.
                </p>
              </div>
            </div>

            {/* Approach */}
            <div className="glass-card p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50/90 text-amber-700 flex items-center justify-center mb-5 border border-amber-200/60 shadow-2xs">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Approach</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We understand the manpower requirement, identify suitable workforce categories, coordinate deployment, and maintain communication to support smooth workforce operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Comparison Table: Rajat Associates vs Unorganized Labor Sourcing */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-xs border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            badge="The Difference"
            title="Structured Workforce vs. Unorganized Sourcing"
            subtitle="Hiring unorganized daily laborers creates high absenteeism and safety liabilities. Rajat Associates provides systematic manpower coordination."
          />

          <div className="overflow-x-auto glass-panel p-2 sm:p-3 rounded-3xl shadow-xl">
            <table className="w-full bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-2xs text-left text-xs sm:text-sm overflow-hidden">
              <thead className="bg-slate-900/95 text-white uppercase tracking-wider text-[11px] font-bold">
                <tr>
                  <th className="py-4 px-5 sm:px-8">Workforce Parameter</th>
                  <th className="py-4 px-5 sm:px-8 bg-blue-600 text-white">Rajat Associates</th>
                  <th className="py-4 px-5 sm:px-8 text-slate-300">Unorganized / Local Labor Brokers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 text-slate-700">
                <tr>
                  <td className="py-4 px-5 sm:px-8 font-bold text-slate-900">Worker Screening & Tiers</td>
                  <td className="py-4 px-5 sm:px-8 font-semibold text-blue-800 bg-blue-50/60">
                    Pre-categorized into 4 distinct skill levels with verified site background.
                  </td>
                  <td className="py-4 px-5 sm:px-8 text-slate-500">
                    Random daily workers with unverified experience or skill.
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-5 sm:px-8 font-bold text-slate-900">Attendance & Muster Tracking</td>
                  <td className="py-4 px-5 sm:px-8 font-semibold text-blue-800 bg-blue-50/60">
                    Daily logging, gang coordination, and structured replacement if absent.
                  </td>
                  <td className="py-4 px-5 sm:px-8 text-slate-500">
                    High sudden absenteeism with no immediate replacements.
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-5 sm:px-8 font-bold text-slate-900">Safety & PPE Discipline</td>
                  <td className="py-4 px-5 sm:px-8 font-semibold text-blue-800 bg-blue-50/60">
                    Safety gear briefings and site compliance orientation.
                  </td>
                  <td className="py-4 px-5 sm:px-8 text-slate-500">
                    Lack of basic safety awareness, creating site hazards.
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-5 sm:px-8 font-bold text-slate-900">Scalability & Surge Support</td>
                  <td className="py-4 px-5 sm:px-8 font-semibold text-blue-800 bg-blue-50/60">
                    Ramp up or ramp down headcount seamlessly as project phases evolve.
                  </td>
                  <td className="py-4 px-5 sm:px-8 text-slate-500">
                    Rigid or erratic headcount that stalls project milestones.
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-5 sm:px-8 font-bold text-slate-900">Communication & Accountability</td>
                  <td className="py-4 px-5 sm:px-8 font-semibold text-blue-800 bg-blue-50/60">
                    Dedicated coordinator point of contact for plant & site managers.
                  </td>
                  <td className="py-4 px-5 sm:px-8 text-slate-500">
                    Informal arrangements with zero accountability for delays.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us Core Cards */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ambient-mesh-subtle border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Core Advantages"
            title="A Dependable Workforce Partner"
            subtitle="The fundamental reasons industrial facilities and contractors rely on Rajat Associates."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.id}
                className="glass-card p-8 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50/90 border border-blue-200/60 flex items-center justify-center text-blue-600 mb-5 shadow-2xs">
                    <DynamicIcon name={item.iconName} className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
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

      {/* Operational Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-xs border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900">
              Our Core Operational Commitments
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              How Rajat Associates delivers reliability to plant managers and project engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl glass-card">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span>Transparent Business Practice</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Honest assessments of deployment timeframes and skill capabilities. We never over-promise or deploy unqualified workers to sensitive technical jobs.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Workflow className="w-5 h-5 text-blue-600" />
                <span>Responsive Coordination</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dedicated points of contact for shift inquiries, attendance verifications, and swift replacements if sudden vacancies arise.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span>Respect for Worker Welfare</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fair and timely compensation, safety guidance, and humane on-site treatment leading to high worker retention, loyalty, and higher productivity.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-600" />
                <span>Adaptive Scaling</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you need 5 helpers for 2 weeks or 50+ mixed technicians for a 1-year project, our staffing models flex around your milestones.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};
