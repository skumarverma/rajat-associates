import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, getWhatsAppLink } from '../data/companyData';
import { Phone, Mail, MapPin, Shield, MessageSquare, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onRequestManpower: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestManpower }) => {
  return (
    <footer className="glass-dark text-slate-300 border-t border-slate-800">


      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Shield className="w-6 h-6 text-blue-100" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  RAJAT <span className="text-blue-400">ASSOCIATES</span>
                </span>
                <p className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase">
                  Manpower & Workforce Solutions
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Rajat Associates is a dependable manpower supply contractor and workforce solutions provider based in Meerut, Uttar Pradesh. We supply verified unskilled, semi-skilled, skilled, and supervisory personnel to factories, construction sites, infrastructure projects, and commercial organizations.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="font-semibold text-slate-300">Core Services:</div>
              <div>Contract Manpower • Temporary Labor • Skilled Trades • Site Coordination</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400 hover:translate-x-1 duration-150 inline-block"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400 hover:translate-x-1 duration-150 inline-block"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400 hover:translate-x-1 duration-150 inline-block"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('workforce')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400 hover:translate-x-1 duration-150 inline-block"
                >
                  Workforce Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400 hover:translate-x-1 duration-150 inline-block"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Manpower Categories */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Workforce Tiers
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('workforce')}
                  className="hover:text-white transition-colors text-left"
                >
                  Unskilled Labor (Helpers & Loaders)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('workforce')}
                  className="hover:text-white transition-colors text-left"
                >
                  Semi-Skilled (Assembly & Machine Hands)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('workforce')}
                  className="hover:text-white transition-colors text-left"
                >
                  Skilled Trades (Welders & Electricians)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('workforce')}
                  className="hover:text-white transition-colors text-left"
                >
                  Supervisory Staff & Coordinators
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contract & Project Staffing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Temporary & Surge Manpower
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Contact Desk
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-start gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="font-semibold">{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-2.5 text-slate-300 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">
                  {COMPANY_INFO.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal Bar */}
      <div className="border-t border-slate-800 py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1.5 text-center sm:text-left">
            <div>
              © 2026 Rajat Associates. All Rights Reserved. Manpower Contractor in Meerut, UP.
            </div>
          </div>
          <div className="flex items-center gap-6 text-slate-500">
            <div>
              Developed By{' '}
              <a 
                href="https://enego.co.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition-colors font-medium hover:underline"
              >
                Enego Service Private Limited
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
