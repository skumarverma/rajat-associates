import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, getWhatsAppLink } from '../data/companyData';
import { Phone, Menu, X, ArrowRight, MessageSquare, Shield } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onRequestManpower: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onRequestManpower,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageId }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Workforce', page: 'workforce' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 glass-header shadow-xs">

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 text-left group focus:outline-hidden shrink-0"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-900 flex items-center justify-center text-white shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <Shield className="w-6 h-6 text-blue-200" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-sans flex items-center gap-1">
                <span>RAJAT</span>
                <span className="text-blue-600">ASSOCIATES</span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-wider uppercase whitespace-nowrap">
                Manpower & Workforce Solutions
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links (Centered) */}
          <nav className="hidden md:flex items-center justify-center gap-2 lg:gap-3.5 xl:gap-5 2xl:gap-6 flex-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-2.5 md:px-3 lg:px-3.5 py-2 rounded-xl text-xs 2xl:text-sm font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-blue-700 bg-blue-50/90 border border-blue-200/80 shadow-xs'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-white/60 hover:backdrop-blur-xs'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2 xl:gap-2.5 2xl:gap-3 shrink-0">
            <button
              onClick={onRequestManpower}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs xl:text-xs 2xl:text-sm 2xl:px-4 2xl:py-2.5 shadow-md shadow-blue-600/25 transition-all cursor-pointer hover:shadow-lg whitespace-nowrap"
            >
              <span>Request Manpower</span>
              <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            <button
              onClick={onRequestManpower}
              className="sm:hidden px-3 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-xs"
            >
              Request
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-white/70 focus:outline-hidden border border-transparent hover:border-slate-200/60"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/80 px-4 pt-2 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200/60'
                      : 'text-slate-700 hover:bg-slate-50/80'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-blue-600"></div>}
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-5 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestManpower();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-sm"
            >
              <span>Submit Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200/90 bg-white/80 text-slate-700 text-xs font-semibold hover:bg-white"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Call Now</span>
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
