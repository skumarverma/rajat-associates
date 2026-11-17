import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { FileText, ArrowLeft } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: PageId) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
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
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Terms & Conditions
              </h1>
              <p className="text-xs text-slate-500">
                Last Updated: January 2026 • Rajat Associates
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Scope of Services</h2>
            <p>
              Rajat Associates acts as a manpower contractor providing human resource supply across unskilled, semi-skilled, skilled, and supervisory categories. The exact terms of workforce deployment, wages, shifts, and duration are established in formal service agreements agreed between Rajat Associates and the hiring client.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. Client Obligations & Site Safety</h2>
            <p>
              Hiring organizations and facility operators agree to provide a safe, lawful work environment conforming to basic occupational safety guidelines. Clients must provide necessary site inductions, clear equipment handling instructions, and required personal protective gear specific to specialized machinery where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. Deployment & Muster Tracking</h2>
            <p>
              Rajat Associates coordinates workforce arrival according to mutually agreed milestones. Attendance and shift tallies are maintained via daily muster logging. Any requirement for headcount alterations must be notified with reasonable advance notice to enable smooth adjustments.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Commercial Terms & Quotations</h2>
            <p>
              Estimates generated via website tools or initial discussions are indicative and finalized through formal quotation based on verified site location, shift durations, statutory requirements, and specialized technical qualifications.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. Governing Jurisdiction</h2>
            <p>
              All service engagements and commercial discussions shall be governed under the jurisdiction of the competent courts in Meerut, Uttar Pradesh, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
