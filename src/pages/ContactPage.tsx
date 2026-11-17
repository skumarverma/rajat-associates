import React from 'react';
import { PageId, ManpowerRequestPreset } from '../types';
import { COMPANY_INFO, getWhatsAppLink } from '../data/companyData';
import { SectionHeading } from '../components/SectionHeading';
import { EnquiryForm } from '../components/EnquiryForm';
import { Phone, Mail, MapPin, MessageSquare, Clock, ShieldCheck, Building2, ExternalLink } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  preset?: ManpowerRequestPreset;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, preset }) => {
  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="ambient-mesh py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-badge text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Phone className="w-4 h-4 text-blue-600" />
            <span>Deployment Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Let's Discuss Your Manpower Requirement
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Contact Rajat Associates directly or submit your project details below. Our workforce planning desk will review and respond promptly.
          </p>
        </div>
      </section>

      {/* Main Contact Section: Contact Cards + Enquiry Form */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-xs border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Information Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Company Headquarters & Contact Desk
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Reach us through any of the channels below for immediate assistance regarding industrial or construction manpower.
                </p>
              </div>

              {/* Verified Contact Details Cards */}
              <div className="space-y-4">
                {/* Phone Card */}
                <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase font-bold text-slate-400">Direct Phone</div>
                    <div className="text-lg font-bold text-slate-900 mt-0.5">
                      {COMPANY_INFO.phone}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Available for site requirement calls</p>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 mt-3"
                    >
                      <span>Call Immediately</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="glass-card p-6 rounded-2xl border border-emerald-300/60 bg-emerald-50/40 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase font-bold text-emerald-800">WhatsApp Requirement Desk</div>
                    <div className="text-lg font-bold text-slate-900 mt-0.5">
                      {COMPANY_INFO.phone}
                    </div>
                    <p className="text-xs text-slate-600 mt-1">Send worker counts and job specifications</p>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 mt-3"
                    >
                      <span>Open WhatsApp Chat</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase font-bold text-slate-400">Official Email</div>
                    <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 break-all">
                      {COMPANY_INFO.email}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">For formal RFPs and commercial contracts</p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 mt-3"
                    >
                      <span>Send Email</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Address Card */}
                <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase font-bold text-slate-400">Office Location</div>
                    <div className="text-sm font-semibold text-slate-800 mt-0.5 leading-relaxed">
                      {COMPANY_INFO.address}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{COMPANY_INFO.operatingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <div className="glass-panel rounded-3xl p-6 sm:p-10 shadow-xl">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-badge text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Requirement Submission</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Submit Manpower Requirement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Fill in the form below with your project details. We will assess headcount availability and get back to you promptly.
                  </p>
                </div>

                <EnquiryForm
                  key={preset ? JSON.stringify(preset) : 'empty'}
                  initialCategory={preset?.category}
                  initialWorkerCount={preset?.workerCount}
                  initialDuration={preset?.duration}
                  initialDetails={preset?.details}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ambient-mesh-subtle border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Location & Region"
            title="Our Presence in Meerut, Uttar Pradesh"
            subtitle="Conveniently situated in East Defence Colony, Rajpura on Mawana Road, connecting smoothly to major industrial belts in Meerut and Western UP."
          />

          <div className="glass-panel rounded-3xl p-4 sm:p-6 shadow-xl overflow-hidden">
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200/80 shadow-inner">
              <iframe
                title="Rajat Associates Location - Meerut, Mawana Road"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.845242491176!2d77.7291775!3d28.9916667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6499341103f1%3A0x6b449b254a32e185!2sDefence%20Colony%2C%20Meerut%2C%20Uttar%20Pradesh%20250001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 px-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>House No. 46, East Defence Colony, Rajpura, Mawana Road, Meerut, UP – 250001</span>
              </div>
              <a
                href="https://maps.google.com/?q=Defence+Colony+Mawana+Road+Meerut"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
