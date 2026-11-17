import React, { useEffect } from 'react';
import { PageId } from '../types';

interface SEOHeadProps {
  currentPage: PageId;
}

const PAGE_TITLES: Record<PageId, { title: string; description: string }> = {
  home: {
    title: 'Rajat Associates | Manpower Supply & Workforce Solutions in Meerut',
    description:
      'Rajat Associates provides reliable manpower and workforce solutions including skilled, semi-skilled, unskilled, and supervisory staff for businesses, factories, construction sites, and industrial organizations in Meerut.',
  },
  about: {
    title: 'About Us | Rajat Associates - Manpower Contractor Meerut',
    description:
      'Learn about Rajat Associates, our mission, vision, and dependable approach to supplying workforce solutions across factories, civil projects, and commercial enterprises in Uttar Pradesh.',
  },
  services: {
    title: 'Manpower Supply Services | Temporary & Contract Staffing - Rajat Associates',
    description:
      'Explore our full suite of workforce services: temporary labor, contract staffing, permanent recruitment, skilled tradesmen, general helpers, and site supervisory manpower.',
  },
  workforce: {
    title: 'Workforce Categories | Unskilled, Semi-Skilled & Skilled Labor - Rajat Associates',
    description:
      'Detailed guide to our 4 manpower categories: Unskilled helpers & loaders, Semi-Skilled assembly operators, Skilled welders & electricians, and Supervisory personnel.',
  },
  contact: {
    title: 'Contact Rajat Associates | Manpower Requirement Desk Meerut',
    description:
      'Get in touch with Rajat Associates. Call +91 9760011697, message on WhatsApp, or submit your manpower requirements for immediate site workforce support.',
  },
  'privacy-policy': {
    title: 'Privacy Policy | Rajat Associates',
    description: 'Privacy policy and data protection practices of Rajat Associates.',
  },
  terms: {
    title: 'Terms & Conditions | Rajat Associates Manpower Contractor',
    description: 'Terms of engagement, client obligations, and service standards for Rajat Associates workforce solutions.',
  },
};

export const SEOHead: React.FC<SEOHeadProps> = ({ currentPage }) => {
  useEffect(() => {
    const metaInfo = PAGE_TITLES[currentPage] || PAGE_TITLES.home;
    document.title = metaInfo.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metaInfo.description);
    }

    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  return null;
};
