import {
  WorkforceCategory,
  ServiceItem,
  IndustryItem,
  WhyChooseItem,
  ProcessStep,
} from '../types';

export const COMPANY_INFO = {
  name: 'Rajat Associates',
  tagline: 'Reliable Manpower. Skilled Workforce. Stronger Operations.',
  businessType: 'Manpower Supply Contractor / Workforce Solutions Provider',
  phone: '+91 9760011697',
  rawPhone: '919760011697',
  email: 'singhrajat877@gmail.com',
  address: 'House No. 46, East Defence Colony, Rajpura, Mawana Road, Meerut, Uttar Pradesh – 250001, India',
  city: 'Meerut',
  state: 'Uttar Pradesh',
  pincode: '250001',
  country: 'India',
  locationDetails: 'East Defence Colony, Rajpura, Mawana Road, Meerut',
  operatingHours: 'Monday – Saturday: 8:00 AM – 8:00 PM (Emergency Site Support 24/7)',
};

export const getWhatsAppLink = (customText?: string) => {
  const text = customText || 'Hello Rajat Associates, I would like to discuss a manpower requirement.';
  return `https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(text)}`;
};

export const WORKFORCE_CATEGORIES: WorkforceCategory[] = [
  {
    id: 'unskilled',
    key: 'unskilled',
    title: 'Unskilled Labor',
    shortDescription: 'Helpers, loaders, packers, site cleaners, general laborers, and material handlers.',
    longDescription:
      'Our unskilled workforce comprises hard-working, physically capable personnel for foundational site operations, warehousing, loading, material shifting, and general facility upkeep.',
    suitableFor: 'Construction sites, warehouses, loading yards, factory floors, civic projects, and packaging hubs.',
    roles: [
      'Site Helpers & Assistants',
      'Truck & Container Loaders',
      'Cargo & Product Packers',
      'Construction Site Cleaners',
      'Material Shifting Handlers',
      'General Civil Laborers',
      'Warehouse Shifting Hands',
      'Civil Digging & Support Labor',
    ],
    skillsList: [
      'Physical endurance & stamina',
      'Safe manual lifting techniques',
      'Adherence to site safety instructions',
      'Punctual shift attendance',
      'Teamwork under site supervision',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    iconName: 'Users',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    id: 'semi-skilled',
    key: 'semi-skilled',
    title: 'Semi-Skilled Labor',
    shortDescription: 'Assembly line operators, technician helpers, assistant machine operators, and production helpers.',
    longDescription:
      'Personnel with hands-on industrial or technical exposure who assist master technicians, run standard production routines, and handle repetitive mechanical tasks with minimal oversight.',
    suitableFor: 'Manufacturing plants, automotive parts fabrication, assembly lines, packaging plants, and maintenance workshops.',
    roles: [
      'Assembly Line Operators',
      'Technician Helpers & Assistants',
      'Assistant Machine Operators',
      'Production Line Helpers',
      'Packaging Line Workers',
      'Drilling & Cutting Assistants',
      'Conveyor Belt Attendants',
      'Basic Maintenance Assistants',
    ],
    skillsList: [
      'Familiarity with basic workshop tools',
      'Operational machine assistance',
      'Standard operating procedure adherence',
      'Basic dimensional & quality checks',
      'Quick learner for plant setups',
    ],
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800&auto=format&fit=crop',
    iconName: 'Wrench',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    id: 'skilled',
    key: 'skilled',
    title: 'Skilled Labor',
    shortDescription: 'Welders, electricians, fitters, carpenters, specialized machine operators, and technicians.',
    longDescription:
      'Certified and experienced technical tradesmen ready to perform precision jobs, structural engineering tasks, electrical installations, fabrication, and machine repairs.',
    suitableFor: 'Structural fabrication, heavy engineering, MEP projects, plant commissioning, equipment maintenance, and architectural woodwork.',
    roles: [
      'Industrial Welders (ARC/MIG/TIG)',
      'Licensed Electricians & Wiremen',
      'Mechanical & Structural Fitters',
      'Commercial & Formwork Carpenters',
      'Specialized CNC/Lathe Machine Operators',
      'HVAC & Plant Maintenance Technicians',
      'Plumbers & Industrial Pipefitters',
      'Riggers & Crane Assist Technicians',
    ],
    skillsList: [
      'Blueprint & technical drawing interpretation',
      'Trade certifications & proven job track record',
      'Precision machine handling & tooling',
      'Stringent industrial safety compliance (PPE)',
      'Troubleshooting & root-cause fixing',
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
    iconName: 'Cpu',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    id: 'supervisory',
    key: 'supervisory',
    title: 'Supervisory Staff',
    shortDescription: 'Site supervisors, workforce supervisors, project coordinators, and operational support personnel.',
    longDescription:
      'Frontline management professionals responsible for site discipline, shift attendance, output tracking, safety adherence, and liaison between client managers and on-ground workforce.',
    suitableFor: 'Multi-shift factories, major construction sites, infrastructure projects, large warehouses, and contractor sites.',
    roles: [
      'Site Operations Supervisors',
      'Workforce & Gang Leaders (Mukadam)',
      'Project Field Coordinators',
      'Shift Attendance & Output Officers',
      'Safety & Compliance Wardens',
      'Store & Material Dispatch In-charge',
      'Manpower Deployment Managers',
    ],
    skillsList: [
      'Crew coordination & conflict resolution',
      'Daily manpower log & attendance management',
      'Safety guideline enforcement',
      'Direct client communication & reporting',
      'Target tracking & productivity optimization',
    ],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    iconName: 'ShieldCheck',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'temporary-manpower',
    title: 'Temporary Manpower Supply',
    category: 'Flexibility & Surge Support',
    shortDescription: 'Provide workforce support for short-term projects, seasonal spikes, and peak operational demands.',
    fullDescription:
      'Ideal for businesses experiencing seasonal production spikes, sudden project deadlines, or temporary labor shortages. We rapidly mobilize vetted workers who fit straight into your existing setup.',
    keyFeatures: [
      'Rapid turnaround and deployment',
      'Short-term contracts from days to months',
      'No long-term hiring liabilities',
      'Seamless ramp-up and ramp-down capability',
    ],
    idealFor: 'Festival season surges, shutdown maintenance, time-bound construction milestones, inventory audits.',
    rolesProvided: ['General helpers', 'Packaging staff', 'Loaders', 'Temporary assembly hands'],
    iconName: 'Clock',
  },
  {
    id: 'contract-manpower',
    title: 'Contract Manpower Solutions',
    category: 'Ongoing Operations',
    shortDescription: 'Provide manpower for ongoing contractual assignments and long-term operational requirements.',
    fullDescription:
      'We handle complete manpower supply for continuous manufacturing lines, commercial premises, and site contracts with structured shift schedules, attendance management, and deployment coordination.',
    keyFeatures: [
      'Structured 6-month, 12-month or multi-year terms',
      'Reliable shift coverage & backup provisioning',
      'On-site workforce coordination support',
      'Compliance and documentation support',
    ],
    idealFor: 'Manufacturing factories, warehouse logistics hubs, infrastructure corridors, corporate facilities.',
    rolesProvided: ['Machine operators', 'Fitters', 'Electricians', 'Continuous shift workers', 'Supervisors'],
    iconName: 'FileCheck',
  },
  {
    id: 'skilled-workforce',
    title: 'Skilled Workforce Supply',
    category: 'Technical Expertise',
    shortDescription: 'Deliver certified, experienced technical tradesmen for critical engineering and industrial tasks.',
    fullDescription:
      'Technical excellence is essential for project safety and machinery lifespan. We supply thoroughly tested tradesmen who know standard safety protocols, blueprint reading, and precise tool handling.',
    keyFeatures: [
      'Strict trade competency vetting',
      'Familiarity with industrial safety equipment',
      'High productivity with minimal supervision',
      'Versatile capability across machine models',
    ],
    idealFor: 'Fabrication yards, boiler maintenance, high-voltage wiring, structural steel erection.',
    rolesProvided: ['MIG/TIG Welders', 'Industrial Electricians', 'Mechanical Fitters', 'CNC Machinists'],
    iconName: 'Cpu',
  },
  {
    id: 'semi-skilled-workforce',
    title: 'Semi-Skilled Workforce',
    category: 'Production Support',
    shortDescription: 'Provide practical, experienced workers to support senior technicians and production lines.',
    fullDescription:
      'Semi-skilled personnel form the backbone of factory production and workshop workflows. They provide reliable execution for routine mechanical procedures, assembly work, and tooling support.',
    keyFeatures: [
      'Hands-on plant floor experience',
      'High work ethic & adaptable to shift rotations',
      'Quick mastery of specific machinery controls',
      'Cost-effective workforce optimization',
    ],
    idealFor: 'Automotive ancillaries, consumer goods assembly, casting & forging units, packaging facilities.',
    rolesProvided: ['Assembly operators', 'Production helpers', 'Machine assistants', 'Technician assistants'],
    iconName: 'Wrench',
  },
  {
    id: 'general-labor',
    title: 'General Labor Supply',
    category: 'Foundational Operations',
    shortDescription: 'Provide dependable helpers, loaders, site cleaners, and material handlers in requested volumes.',
    fullDescription:
      'From 5 workers to large gangs, we mobilize energetic, disciplined general laborers capable of handling physically intensive site logistics, loading/unloading, and area preparation.',
    keyFeatures: [
      'Gang leader / Mukadam coordination',
      'Punctual site reporting and attendance logs',
      'Flexible headcount scaling according to day loads',
      'Safe material handling practices',
    ],
    idealFor: 'Civil construction, freight transit yards, warehouse operations, site clearance.',
    rolesProvided: ['General helpers', 'Loaders & Unloaders', 'Site cleaners', 'Material handlers'],
    iconName: 'Users',
  },
  {
    id: 'supervisory-workforce',
    title: 'Supervisory Workforce',
    category: 'Site Management',
    shortDescription: 'Provide experienced site supervisors and project coordinators for structured management.',
    fullDescription:
      'Supervisors act as the vital bridge between your project leadership and the ground workforce. They ensure shift attendance, monitor output velocity, prevent downtime, and enforce safety compliance.',
    keyFeatures: [
      'Proactive crew leadership & discipline',
      'Daily attendance tracking & muster roll support',
      'Immediate crisis handling and site resolution',
      'Daily reporting to client management',
    ],
    idealFor: 'Turnkey construction projects, multi-acre plants, multi-shift manufacturing, remote infrastructure sites.',
    rolesProvided: ['Site supervisors', 'Shift managers', 'Field coordinators', 'Safety wardens'],
    iconName: 'ShieldCheck',
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'construction',
    name: 'Construction & Civil Projects',
    headline: 'High-energy workforce for building, infrastructure, and commercial sites.',
    description:
      'We supply construction gangs, skilled carpenters, bar benders, concrete helpers, site cleaners, and supervisors for residential towers, commercial complexes, roads, and civil infrastructure.',
    workforceProvided: ['Civil Laborers', 'Masons & Helpers', 'Shuttering Carpenters', 'Bar Benders', 'Site Supervisors'],
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Factories',
    headline: 'Reliable shift labor and machine operators for manufacturing units.',
    description:
      'Keep production cycles running uninterrupted with dependable assembly workers, packing hands, assistant operators, maintenance technicians, and shift leaders tailored for factory environments.',
    workforceProvided: ['Assembly Operators', 'Production Helpers', 'Machine Assistants', 'Packers', 'Shift Supervisors'],
    iconName: 'Factory',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure Projects',
    headline: 'Project-based workforce for highways, bridges, rail, and utility networks.',
    description:
      'Equipping long-distance and time-critical infrastructure projects with dedicated teams accustomed to demanding outdoor environments and strict civil milestones.',
    workforceProvided: ['Heavy Riggers', 'Site Helpers', 'Welders & Fitters', 'Safety Wardens', 'Field Coordinators'],
    iconName: 'HardHat',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'warehousing',
    name: 'Warehousing & Logistics',
    headline: 'Fast, physically agile personnel for freight and fulfillment centers.',
    description:
      'Ensure swift turnarounds for loading, unloading, sorting, palletizing, wrapping, and container destuffing during regular and peak logistics seasons.',
    workforceProvided: ['Loaders / Unloaders', 'Pallet Handlers', 'Sorting Workers', 'Packers & Labelers', 'Inventory Helpers'],
    iconName: 'Boxes',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'industrial-operations',
    name: 'Industrial Facilities & Maintenance',
    headline: 'Skilled technical tradesmen for plant upkeep and mechanical maintenance.',
    description:
      'Supplying electricians, pipefitters, welders, and equipment mechanics for routine plant maintenance, boiler overhauls, and industrial facility upkeep.',
    workforceProvided: ['Plant Electricians', 'Industrial Welders', 'Mechanical Fitters', 'Maintenance Assistants'],
    iconName: 'Cog',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'commercial',
    name: 'Commercial Businesses',
    headline: 'Flexible workforce support for offices, institutions, and events.',
    description:
      'Providing dependable manpower for commercial premises, institutional complexes, event setups, and businesses requiring temporary, contractual, or permanent staff.',
    workforceProvided: ['Facility Helpers', 'Loading Assistants', 'Maintenance Support', 'General Utility Hands'],
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
  },
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: '1',
    title: 'Requirement-Based Deployment',
    description:
      'We do not provide generic headcount; every deployment is carefully planned around your project duration, physical demands, and specific skill tiers.',
    iconName: 'Target',
  },
  {
    id: '2',
    title: 'Flexible Manpower Models',
    description:
      'From short-term emergency surge support to multi-year contracts and permanent placement, choose the engagement model that suits your cash flow and timelines.',
    iconName: 'Layers',
  },
  {
    id: '3',
    title: 'Multiple Skill Categories',
    description:
      'Single-source provider for unskilled helpers, semi-skilled machine operators, certified skilled tradesmen, and frontline site supervisory personnel.',
    iconName: 'CheckCircle2',
  },
  {
    id: '4',
    title: 'Workforce Coordination',
    description:
      'Structured on-ground coordination ensures timely reporting, disciplined muster attendance, and prompt handling of shift replacements.',
    iconName: 'Workflow',
  },
  {
    id: '5',
    title: 'Business-Focused Approach',
    description:
      'We take over the operational friction of sourcing, vetting, and managing worker availability so your team can focus on production and core delivery.',
    iconName: 'TrendingUp',
  },
  {
    id: '6',
    title: 'Long-Term Partnership',
    description:
      'We believe in transparent terms, ethical worker treatment, and building dependable, enduring relationships with plant heads and site directors.',
    iconName: 'Handshake',
  },
];

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Share Your Requirement',
    description: 'Tell us about your project location, required headcount, skill levels, shift timings, and expected start date.',
    timeline: 'Initial discussion',
    iconName: 'MessageSquare',
  },
  {
    stepNumber: '02',
    title: 'Workforce Planning',
    description: 'We analyze your operational needs, map suitable workforce categories, and prepare a clear deployment roadmap.',
    timeline: 'Planning phase',
    iconName: 'FileSpreadsheet',
  },
  {
    stepNumber: '03',
    title: 'Worker Selection & Vetting',
    description: 'Appropriate workers are identified, screened for relevant site experience, and briefed regarding safety rules.',
    timeline: 'Sourcing & screening',
    iconName: 'UsersRound',
  },
  {
    stepNumber: '04',
    title: 'Deployment & Onboarding',
    description: 'Workforce is mobilized and reported to your site under proper coordination, ready to integrate into your workflow.',
    timeline: 'Site reporting',
    iconName: 'Truck',
  },
  {
    stepNumber: '05',
    title: 'Ongoing Coordination',
    description: 'We maintain regular communication, monitor attendance, and coordinate replacements or scaling as project demands evolve.',
    timeline: 'Continuous engagement',
    iconName: 'Headphones',
  },
];

export const TRUST_PILLARS = [
  {
    title: 'Flexible Workforce',
    description: 'Manpower solutions designed around changing project and business requirements.',
    iconName: 'Sliders',
  },
  {
    title: 'Skilled Resources',
    description: 'Access to workers across multiple skill categories and operational roles.',
    iconName: 'Award',
  },
  {
    title: 'Workforce Coordination',
    description: 'Support for smooth deployment, attendance management, and site coordination.',
    iconName: 'Users',
  },
  {
    title: 'Scalable Solutions',
    description: 'Increase or reduce manpower seamlessly according to project demand.',
    iconName: 'BarChart3',
  },
];

export const FAQS = [
  {
    question: 'What types of manpower does Rajat Associates provide?',
    answer:
      'We provide manpower across four primary categories: Unskilled Labor (helpers, loaders, site cleaners), Semi-Skilled Labor (assembly line workers, assistant machine operators), Skilled Labor (welders, electricians, fitters, carpenters), and Supervisory Staff (site supervisors, project coordinators).',
  },
  {
    question: 'Where is Rajat Associates located and which regions do you serve?',
    answer:
      'Our primary office is located at House No. 46, East Defence Colony, Rajpura, Mawana Road, Meerut, Uttar Pradesh. We serve industrial facilities, factories, and construction sites across Meerut, western Uttar Pradesh, and adjoining NCR regions.',
  },
  {
    question: 'How quickly can you deploy workers to our site?',
    answer:
      'Deployment timelines depend on the required workforce size and skill level. For standard general labor and helpers, mobilization can often be coordinated within 24 to 48 hours. For specialized skilled trades or large-scale batches, we plan the roadmap together with you to ensure timely deployment.',
  },
  {
    question: 'Can we hire manpower on a temporary or contract basis?',
    answer:
      'Yes. We offer flexible engagement models including short-term temporary supply for project spikes, ongoing contract manpower for continuous operations, and permanent recruitment support for core technical positions.',
  },
  {
    question: 'How do you handle worker replacements if someone is absent?',
    answer:
      'We maintain structured workforce coordination. In case of illness, emergencies, or unforeseen absenteeism, our coordination team works to deploy backup personnel promptly to prevent operational downtime.',
  },
  {
    question: 'How can we get started and request a quotation?',
    answer:
      'You can submit your requirements through our online Enquiry Form, call us directly at +91 9760011697, or click the WhatsApp button to message us your site requirements for an immediate response.',
  },
];
