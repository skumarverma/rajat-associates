import { useState, useEffect } from 'react';
import { PageId, ManpowerRequestPreset } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { SEOHead } from './components/SEOHead';


// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkforcePage } from './pages/WorkforcePage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [formPreset, setFormPreset] = useState<ManpowerRequestPreset | undefined>(undefined);

  // Handle URL hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'workforce',
        'contact',
        'privacy-policy',
        'terms',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestManpower = (presetOrCategory?: string | ManpowerRequestPreset) => {
    if (typeof presetOrCategory === 'object') {
      setFormPreset(presetOrCategory);
    } else {
      setFormPreset({ category: presetOrCategory || '' });
    }
    navigateTo('contact');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={navigateTo}
            onRequestManpower={handleRequestManpower}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={navigateTo}
            onRequestManpower={handleRequestManpower}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onNavigate={navigateTo}
            onRequestManpower={handleRequestManpower}
          />
        );
      case 'workforce':
        return (
          <WorkforcePage
            onNavigate={navigateTo}
            onRequestManpower={handleRequestManpower}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onNavigate={navigateTo}
            preset={formPreset}
          />
        );
      case 'privacy-policy':
        return <PrivacyPolicyPage onNavigate={navigateTo} />;
      case 'terms':
        return <TermsPage onNavigate={navigateTo} />;
      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            onRequestManpower={handleRequestManpower}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans pb-14 sm:pb-0">
      <SEOHead currentPage={currentPage} />

      {/* Shared Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onRequestManpower={() => handleRequestManpower()}
      />

      {/* Main Page Dynamic Content */}
      <main className="flex-1">{renderPage()}</main>

      {/* Shared Footer */}
      <Footer
        onNavigate={navigateTo}
        onRequestManpower={() => handleRequestManpower()}
      />

      {/* Floating WhatsApp & Mobile Quick Actions */}
      <FloatingActions onRequestManpower={() => handleRequestManpower()} />
    </div>
  );
}
