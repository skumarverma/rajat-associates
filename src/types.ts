export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'workforce'
  | 'contact'
  | 'privacy-policy'
  | 'terms';

export type WorkforceCategoryKey = 'unskilled' | 'semi-skilled' | 'skilled' | 'supervisory' | 'all';

export interface WorkforceCategory {
  id: string;
  key: WorkforceCategoryKey;
  title: string;
  shortDescription: string;
  longDescription: string;
  suitableFor: string;
  roles: string[];
  skillsList: string[];
  image: string;
  iconName: string;
  badgeColor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  idealFor: string;
  rolesProvided: string[];
  iconName: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  headline: string;
  description: string;
  workforceProvided: string[];
  iconName: string;
  image: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  timeline: string;
  iconName: string;
}

export interface EnquiryFormData {
  fullName: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  projectLocation: string;
  industry: string;
  workforceCategory: string;
  workerCount: string;
  duration: string;
  requirementDetails: string;
}

export interface HeadcountEstimateItem {
  category: string;
  role: string;
  count: number;
}

export interface ManpowerRequestPreset {
  category?: string;
  workerCount?: string;
  duration?: string;
  details?: string;
}

