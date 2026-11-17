import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { Shield, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-xs text-slate-500">
                Last Updated: January 2026 • Rajat Associates
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Overview</h2>
            <p>
              Rajat Associates (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the corporate website presenting our manpower supply and workforce contractor services based in Meerut, Uttar Pradesh. We respect the confidentiality of all corporate clients, contractors, and individuals who share project or workforce details through our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. Information We Collect</h2>
            <p>
              When you submit a manpower requirement, inquiry, or contact form, we collect information including your name, company/firm name, contact phone number, email address, project location, industry category, required headcount, and specific job scope details.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. How We Use Information</h2>
            <p>We use the collected information solely for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Assessing workforce availability and planning deployment schedules.</li>
              <li>Contacting you via telephone, email, or WhatsApp regarding your manpower requirement.</li>
              <li>Preparing service quotations and commercial proposals.</li>
              <li>Coordinating on-site worker deployment and attendance management.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Data Sharing & Confidentiality</h2>
            <p>
              We do not sell, rent, or trade your personal or corporate information to third-party marketing entities. Project details are shared strictly with our internal deployment coordinators and on-ground supervisors to execute your staffing needs.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. Contact Information</h2>
            <p>
              If you have any questions regarding this Privacy Policy or your submitted details, please reach out to:
            </p>
            <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
              <div className="font-bold text-slate-900">{COMPANY_INFO.name}</div>
              <div>Address: {COMPANY_INFO.address}</div>
              <div>Phone: {COMPANY_INFO.phone}</div>
              <div>Email: {COMPANY_INFO.email}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
