import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Calculator, Plus, Minus, MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Users } from 'lucide-react';

interface ManpowerCalculatorProps {
  onRequestWithBreakdown: (data: {
    category: string;
    workerCount: string;
    duration: string;
    details: string;
  }) => void;
}

export const ManpowerCalculator: React.FC<ManpowerCalculatorProps> = ({
  onRequestWithBreakdown,
}) => {
  const [unskilledCount, setUnskilledCount] = useState<number>(5);
  const [semiSkilledCount, setSemiSkilledCount] = useState<number>(2);
  const [skilledCount, setSkilledCount] = useState<number>(1);
  const [supervisoryCount, setSupervisoryCount] = useState<number>(1);
  const [shiftType, setShiftType] = useState<string>('Single Shift (8 Hours)');
  const [durationWeeks, setDurationWeeks] = useState<number>(4);

  const totalHeadcount = unskilledCount + semiSkilledCount + skilledCount + supervisoryCount;

  const generateBreakdownText = () => {
    return (
      `*Workforce Requirement Estimation*\n` +
      `--------------------------------\n` +
      `• *Total Daily Headcount:* ${totalHeadcount} Workers\n` +
      `• *Unskilled Helpers:* ${unskilledCount}\n` +
      `• *Semi-Skilled Operators:* ${semiSkilledCount}\n` +
      `• *Skilled Tradesmen:* ${skilledCount}\n` +
      `• *Site Supervisors:* ${supervisoryCount}\n` +
      `• *Shift Model:* ${shiftType}\n` +
      `• *Estimated Duration:* ${durationWeeks} Weeks\n` +
      `--------------------------------\n` +
      `*Request for Quotation from Rajat Associates*`
    );
  };

  const handleWhatsAppSend = () => {
    const text = generateBreakdownText();
    const waUrl = `https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-200/60">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Planning Tool</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Workforce Headcount Estimator
          </h3>
          <p className="text-slate-600 text-sm mt-1">
            Configure your required team composition across skill tiers to quickly plan workforce deployment.
          </p>
        </div>

        {/* Live Total Badge */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6 py-4 rounded-2xl shadow-lg shadow-blue-600/20 border border-white/20 flex items-center gap-4 shrink-0">
          <div>
            <div className="text-xs uppercase tracking-wider text-blue-200 font-semibold">
              Total Headcount
            </div>
            <div className="text-3xl sm:text-4xl font-black">
              {totalHeadcount}{' '}
              <span className="text-sm font-normal text-blue-100">Workers</span>
            </div>
          </div>
          <Users className="w-10 h-10 text-blue-200/60" />
        </div>
      </div>

      {/* Grid of Tier Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
        {/* Unskilled Counter */}
        <div className="bg-white/65 backdrop-blur-md p-5 rounded-2xl border border-white/80 shadow-2xs flex flex-col justify-between hover:bg-white/85 transition-all">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50/90 px-2 py-0.5 rounded-lg border border-blue-200/60">
                Tier 1
              </span>
              <span className="text-xs text-slate-400 font-semibold">General Labor</span>
            </div>
            <div className="font-bold text-slate-900 text-base">Unskilled Labor</div>
            <p className="text-xs text-slate-500 mt-1">
              Helpers, loaders, material shifting hands.
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between bg-white/90 backdrop-blur-xs rounded-xl p-1.5 border border-slate-200/80 shadow-2xs">
            <button
              onClick={() => setUnskilledCount(Math.max(0, unskilledCount - 1))}
              className="w-8 h-8 rounded-lg bg-slate-100/80 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold transition-colors cursor-pointer"
              aria-label="Decrease unskilled"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="text-lg font-black text-slate-900">{unskilledCount}</span>
            <button
              onClick={() => setUnskilledCount(unskilledCount + 1)}
              className="w-8 h-8 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center font-bold transition-colors cursor-pointer shadow-xs"
              aria-label="Increase unskilled"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Semi-Skilled Counter */}
        <div className="bg-white/65 backdrop-blur-md p-5 rounded-2xl border border-white/80 shadow-2xs flex flex-col justify-between hover:bg-white/85 transition-all">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50/90 px-2 py-0.5 rounded-lg border border-emerald-200/60">
                Tier 2
              </span>
              <span className="text-xs text-slate-400 font-semibold">Plant Support</span>
            </div>
            <div className="font-bold text-slate-900 text-base">Semi-Skilled Labor</div>
            <p className="text-xs text-slate-500 mt-1">
              Assembly line operators, technician helpers.
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between bg-white/90 backdrop-blur-xs rounded-xl p-1.5 border border-slate-200/80 shadow-2xs">
            <button
              onClick={() => setSemiSkilledCount(Math.max(0, semiSkilledCount - 1))}
              className="w-8 h-8 rounded-lg bg-slate-100/80 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold transition-colors cursor-pointer"
              aria-label="Decrease semi-skilled"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="text-lg font-black text-slate-900">{semiSkilledCount}</span>
            <button
              onClick={() => setSemiSkilledCount(semiSkilledCount + 1)}
              className="w-8 h-8 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center font-bold transition-colors cursor-pointer shadow-xs"
              aria-label="Increase semi-skilled"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Skilled Counter */}
        <div className="bg-white/65 backdrop-blur-md p-5 rounded-2xl border border-white/80 shadow-2xs flex flex-col justify-between hover:bg-white/85 transition-all">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50/90 px-2 py-0.5 rounded-lg border border-amber-200/60">
                Tier 3
              </span>
              <span className="text-xs text-slate-400 font-semibold">Certified Trades</span>
            </div>
            <div className="font-bold text-slate-900 text-base">Skilled Trades</div>
            <p className="text-xs text-slate-500 mt-1">
              Welders, fitters, electricians, carpenters.
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between bg-white/90 backdrop-blur-xs rounded-xl p-1.5 border border-slate-200/80 shadow-2xs">
            <button
              onClick={() => setSkilledCount(Math.max(0, skilledCount - 1))}
              className="w-8 h-8 rounded-lg bg-slate-100/80 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold transition-colors cursor-pointer"
              aria-label="Decrease skilled"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="text-lg font-black text-slate-900">{skilledCount}</span>
            <button
              onClick={() => setSkilledCount(skilledCount + 1)}
              className="w-8 h-8 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center font-bold transition-colors cursor-pointer shadow-xs"
              aria-label="Increase skilled"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Supervisory Counter */}
        <div className="bg-white/65 backdrop-blur-md p-5 rounded-2xl border border-white/80 shadow-2xs flex flex-col justify-between hover:bg-white/85 transition-all">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50/90 px-2 py-0.5 rounded-lg border border-indigo-200/60">
                Tier 4
              </span>
              <span className="text-xs text-slate-400 font-semibold">Site Leadership</span>
            </div>
            <div className="font-bold text-slate-900 text-base">Supervisory Staff</div>
            <p className="text-xs text-slate-500 mt-1">
              Site supervisors, muster & safety coordinators.
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between bg-white/90 backdrop-blur-xs rounded-xl p-1.5 border border-slate-200/80 shadow-2xs">
            <button
              onClick={() => setSupervisoryCount(Math.max(0, supervisoryCount - 1))}
              className="w-8 h-8 rounded-lg bg-slate-100/80 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold transition-colors cursor-pointer"
              aria-label="Decrease supervisory"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="text-lg font-black text-slate-900">{supervisoryCount}</span>
            <button
              onClick={() => setSupervisoryCount(supervisoryCount + 1)}
              className="w-8 h-8 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center font-bold transition-colors cursor-pointer shadow-xs"
              aria-label="Increase supervisory"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Shift & Duration Options */}
      <div className="bg-blue-50/70 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-blue-200/60 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
        <div className="w-full sm:w-1/2">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Shift Schedule
          </label>
          <select
            value={shiftType}
            onChange={(e) => setShiftType(e.target.value)}
            className="w-full bg-white/90 backdrop-blur-xs border border-slate-300/90 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-hidden focus:border-blue-600 shadow-2xs"
          >
            <option value="Single Shift (8 Hours)">Single Day Shift (8 Hours)</option>
            <option value="Double Shift (16 Hours)">Double Shift (Day + Night)</option>
            <option value="Continuous 24/7 Operations">Continuous 24/7 (Rotational 3-Shifts)</option>
          </select>
        </div>

        <div className="w-full sm:w-1/2">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Project Duration: <span className="text-blue-700 font-extrabold">{durationWeeks} Weeks</span>
            </label>
          </div>
          <input
            type="range"
            min="1"
            max="52"
            value={durationWeeks}
            onChange={(e) => setDurationWeeks(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
            <span>1 Week (Short term)</span>
            <span>6 Months</span>
            <span>1 Year (Annual)</span>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Workforce planned under structured supervision & muster coordination</span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleWhatsAppSend}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/25 transition-all cursor-pointer hover:scale-[1.02]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send to WhatsApp</span>
          </button>
           <button
            onClick={() => {
              onRequestWithBreakdown({
                category: 'Multiple Categories',
                workerCount: `${totalHeadcount} Workers`,
                duration: `${durationWeeks} Weeks`,
                details: 
                  `Workforce breakdown:\n` +
                  `- Unskilled Labor: ${unskilledCount} workers\n` +
                  `- Semi-Skilled Labor: ${semiSkilledCount} workers\n` +
                  `- Skilled Trades: ${skilledCount} workers\n` +
                  `- Supervisory Staff: ${supervisoryCount} workers\n` +
                  `Shift model: ${shiftType}`
              });
            }}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/25 transition-all cursor-pointer hover:scale-[1.02]"
          >
            <span>Proceed with Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
