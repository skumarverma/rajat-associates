import React, { useState } from 'react';
import { EnquiryFormData } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { Send, CheckCircle2, MessageSquare, Phone, Building, User, Mail, MapPin, Layers, Users, Clock, FileText, AlertCircle } from 'lucide-react';

interface EnquiryFormProps {
  initialCategory?: string;
  initialWorkerCount?: string;
  initialDuration?: string;
  initialDetails?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

const normalizeCategory = (cat: string) => {
  if (!cat) return 'Unskilled';
  const c = cat.toLowerCase();
  if (c.includes('unskilled')) return 'Unskilled';
  if (c.includes('semi-skilled') || c.includes('semi-skilled') || c.includes('semi skilled')) return 'Semi-Skilled';
  if (c.includes('skilled')) return 'Skilled';
  if (c.includes('supervisory') || c.includes('supervisor')) return 'Supervisory';
  if (c.includes('multiple') || c.includes('mix') || c.includes('various') || c.includes('breakdown')) return 'Multiple Categories';
  return 'Unskilled';
};

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialCategory = '',
  initialWorkerCount = '',
  initialDuration = '',
  initialDetails = '',
  onSuccess,
  isModal = false,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    projectLocation: '',
    industry: '',
    workforceCategory: normalizeCategory(initialCategory),
    workerCount: initialWorkerCount || '',
    duration: initialDuration || '',
    requirementDetails: initialDetails || '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.companyName.trim()) newErrors.companyName = 'Please enter your company / firm name';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your contact phone number';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.projectLocation.trim()) newErrors.projectLocation = 'Please enter project / site location';
    if (!formData.workerCount.trim()) newErrors.workerCount = 'Specify approximate number of workers';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const generateWhatsAppMessage = () => {
    return (
      `*New Manpower Requirement Enquiry*\n` +
      `--------------------------------\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Company:* ${formData.companyName}\n` +
      `*Phone:* ${formData.phoneNumber}\n` +
      `*Email:* ${formData.email || 'Not specified'}\n` +
      `*Project Location:* ${formData.projectLocation}\n` +
      `*Industry:* ${formData.industry || 'Not specified'}\n` +
      `*Category:* ${formData.workforceCategory}\n` +
      `*Headcount Required:* ${formData.workerCount}\n` +
      `*Duration:* ${formData.duration || 'Not specified'}\n` +
      `*Details:* ${formData.requirementDetails || 'None'}\n` +
      `--------------------------------\n` +
      `Sent via Rajat Associates Website Form`
    );
  };

  const handleSubmit = async (e: React.FormEvent, sendToWhatsApp = false) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const formDataObj = new FormData();
    formDataObj.append("access_key", "f820a2f5-4551-4803-93cc-fbfd839cfe80");
    formDataObj.append("Subject", "New Manpower Requirement Enquiry");
    formDataObj.append("Full Name", formData.fullName);
    formDataObj.append("Company Name", formData.companyName);
    formDataObj.append("Phone Number", formData.phoneNumber);
    if (formData.email) formDataObj.append("Email", formData.email);
    formDataObj.append("Project Location", formData.projectLocation);
    if (formData.industry) formDataObj.append("Industry", formData.industry);
    formDataObj.append("Workforce Category", formData.workforceCategory);
    formDataObj.append("Workers Count", formData.workerCount);
    if (formData.duration) formDataObj.append("Duration", formData.duration);
    if (formData.requirementDetails) formDataObj.append("Requirement Details", formData.requirementDetails);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);

        if (sendToWhatsApp) {
          const text = generateWhatsAppMessage();
          const waUrl = `https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(text)}`;
          window.open(waUrl, '_blank');
        }

        if (onSuccess) {
          setTimeout(onSuccess, 3500);
        }
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-10 px-6 bg-blue-50/70 rounded-2xl border border-blue-200">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Requirement Received!</h3>
        <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed mb-6">
          Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span> ({formData.companyName}). Our workforce coordination desk has received your manpower requirement for <span className="font-semibold text-slate-800">{formData.projectLocation}</span> and will contact you shortly on <span className="font-semibold text-slate-800">{formData.phoneNumber}</span>.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Details on WhatsApp</span>
          </a>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs transition-colors"
          >
            <Phone className="w-4 h-4 text-blue-600" />
            <span>Call Desk Directly</span>
          </a>
        </div>

        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-xs text-blue-600 font-semibold underline hover:text-blue-800 cursor-pointer block mx-auto"
        >
          Submit another requirement
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-blue-600" />
            <span>Full Name *</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Ramesh Sharma"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 bg-white/80 backdrop-blur-xs shadow-2xs transition-all ${
              errors.fullName
                ? 'border-red-400 focus:ring-red-200'
                : 'border-slate-200/90 focus:border-blue-600 focus:ring-blue-100 focus:bg-white'
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-blue-600" />
            <span>Company / Firm Name *</span>
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. ABC Infrastructure Pvt Ltd"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 bg-white/80 backdrop-blur-xs shadow-2xs transition-all ${
              errors.companyName
                ? 'border-red-400 focus:ring-red-200'
                : 'border-slate-200/90 focus:border-blue-600 focus:ring-blue-100 focus:bg-white'
            }`}
          />
          {errors.companyName && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.companyName}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone Number */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            <span>Phone / Mobile Number *</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+91 9876543210"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 bg-white/80 backdrop-blur-xs shadow-2xs transition-all ${
              errors.phoneNumber
                ? 'border-red-400 focus:ring-red-200'
                : 'border-slate-200/90 focus:border-blue-600 focus:ring-blue-100 focus:bg-white'
            }`}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.phoneNumber}</span>
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>Email Address</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="contact@company.com"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 bg-white/80 backdrop-blur-xs shadow-2xs transition-all ${
              errors.email
                ? 'border-red-400 focus:ring-red-200'
                : 'border-slate-200/90 focus:border-blue-600 focus:ring-blue-100 focus:bg-white'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Project Location */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>Project / Site Location *</span>
          </label>
          <input
            type="text"
            name="projectLocation"
            value={formData.projectLocation}
            onChange={handleChange}
            placeholder="e.g. Mawana Road, Meerut / Modipuram / Ghaziabad"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 bg-white/80 backdrop-blur-xs shadow-2xs transition-all ${
              errors.projectLocation
                ? 'border-red-400 focus:ring-red-200'
                : 'border-slate-200/90 focus:border-blue-600 focus:ring-blue-100 focus:bg-white'
            }`}
          />
          {errors.projectLocation && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.projectLocation}</span>
            </p>
          )}
        </div>

        {/* Industry */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Industry Sector</span>
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200/90 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white/80 backdrop-blur-xs shadow-2xs transition-all"
          >
            <option value="">Select Industry (Optional)</option>
            <option value="Construction & Civil">Construction & Civil</option>
            <option value="Manufacturing & Factory">Manufacturing & Factory</option>
            <option value="Infrastructure Projects">Infrastructure Projects</option>
            <option value="Warehousing & Logistics">Warehousing & Logistics</option>
            <option value="Industrial Operations">Industrial Operations</option>
            <option value="Commercial Business">Commercial Business</option>
            <option value="Other">Other Sector</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Required Category */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>Workforce Category *</span>
          </label>
          <select
            name="workforceCategory"
            value={formData.workforceCategory}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200/90 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white/80 backdrop-blur-xs shadow-2xs transition-all"
          >
            <option value="Unskilled">Unskilled (Helpers/Loaders)</option>
            <option value="Semi-Skilled">Semi-Skilled (Operators/Assistants)</option>
            <option value="Skilled">Skilled (Welders/Electricians/Fitters)</option>
            <option value="Supervisory">Supervisory Staff</option>
            <option value="Multiple Categories">Multiple Categories / Mix</option>
          </select>
        </div>

        {/* Number of Workers */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>Workers Count *</span>
          </label>
          <input
            type="text"
            name="workerCount"
            value={formData.workerCount}
            onChange={handleChange}
            placeholder="e.g. 10 workers / 25+"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 bg-white/80 backdrop-blur-xs shadow-2xs transition-all ${
              errors.workerCount
                ? 'border-red-400 focus:ring-red-200'
                : 'border-slate-200/90 focus:border-blue-600 focus:ring-blue-100 focus:bg-white'
            }`}
          />
          {errors.workerCount && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.workerCount}</span>
            </p>
          )}
        </div>

        {/* Duration */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>Required Duration</span>
          </label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="e.g. 3 Months / Continuous"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200/90 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white/80 backdrop-blur-xs shadow-2xs transition-all"
          />
        </div>
      </div>

      {/* Requirement Details */}
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-blue-600" />
          <span>Specific Roles / Job Scope / Shift Requirements</span>
        </label>
        <textarea
          name="requirementDetails"
          value={formData.requirementDetails}
          onChange={handleChange}
          rows={isModal ? 3 : 4}
          placeholder="Describe specific trade requirements, shift timings, accommodation availability, or urgent start dates..."
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200/90 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white/80 backdrop-blur-xs shadow-2xs resize-none transition-all"
        ></textarea>
      </div>

      {/* Form Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-600/25 hover:shadow-lg transition-all cursor-pointer disabled:opacity-75"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? 'Processing Requirement...' : 'Submit Manpower Requirement'}</span>
        </button>

        <button
          type="button"
          onClick={(e) => handleSubmit(e, true)}
          disabled={isSubmitting}
          className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 transition-all cursor-pointer disabled:opacity-75"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Submit & WhatsApp</span>
        </button>
      </div>

      <p className="text-[11px] text-slate-400 text-center sm:text-left">
        Direct response from Rajat Associates workforce desk. No spam, confidential information.
      </p>
    </form>
  );
};
