import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { SITE_TITLE, DEMAND_AUDIT_CTA } from '../constants';

/**
 * Navbar component providing global navigation and the primary call-to-action.
 * features a responsive mobile hamburger menu and supports both internal section 
 * scrolling and cross-page navigation.
 * 
 * @returns {JSX.Element} The rendered navigation bar.
 */
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { title: 'Intro', to: 'section-1' },
    { title: 'Demographics', to: 'section-2' },
    { title: 'Financials', to: 'section-3' },
    { title: 'TLE', to: 'section-4' },
    { title: 'Housing', to: 'section-6' },
    { title: 'Leadership', to: 'section-7' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-forest-green text-white z-50 shadow-md border-b border-white/10" aria-label="Main Navigation">
      <div className="px-6 sm:px-12 lg:px-16 w-full">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <RouterLink to="/" className="font-bold text-sm md:text-lg leading-tight hover:text-earth-orange transition-colors">
              {SITE_TITLE}
            </RouterLink>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              <RouterLink
                to="/"
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${location.pathname === '/' ? 'bg-earth-orange shadow-lg' : 'hover:bg-white/10'}`}
              >
                Home
              </RouterLink>
              
              <RouterLink
                to="/path-forward"
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${location.pathname === '/path-forward' ? 'bg-earth-orange shadow-lg' : 'hover:bg-white/10'}`}
              >
                Path Forward
              </RouterLink>

              <RouterLink
                to="/legal-framework.html"
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${location.pathname === '/legal-framework.html' ? 'bg-earth-orange shadow-lg' : 'hover:bg-white/10'}`}
              >
                Legal Framework
              </RouterLink>

              <RouterLink
                to="/references.html"
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${location.pathname === '/references.html' ? 'bg-earth-orange shadow-lg' : 'hover:bg-white/10'}`}
              >
                Verified Citations
              </RouterLink>

              <RouterLink
                to="/request-audit"
                className="ml-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest flex items-center shadow-xl transition-all hover:scale-105 active:scale-95"
                aria-label={DEMAND_AUDIT_CTA}
              >
                {DEMAND_AUDIT_CTA}
                <ArrowRight className="ml-2 h-4 w-4" />
              </RouterLink>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-forest-green focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-forest-green border-t border-forest-green/20" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isHome ? (
              navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={handleLinkClick}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-earth-orange transition-colors cursor-pointer"
                  aria-label={`Scroll to ${link.title}`}
                >
                  {link.title}
                </ScrollLink>
              ))
            ) : (
              <RouterLink
                to="/"
                onClick={handleLinkClick}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-earth-orange transition-colors"
              >
                Home
              </RouterLink>
            )}

            <RouterLink
              to="/path-forward"
              onClick={handleLinkClick}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${location.pathname === '/path-forward' ? 'bg-earth-orange' : 'hover:bg-earth-orange'}`}
            >
              Path Forward
            </RouterLink>

            <RouterLink
              to="/legal-framework.html"
              onClick={handleLinkClick}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${location.pathname === '/legal-framework.html' ? 'bg-earth-orange' : 'hover:bg-earth-orange'}`}
            >
              Legal Framework
            </RouterLink>

            <RouterLink
              to="/references.html"
              onClick={handleLinkClick}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${location.pathname === '/references.html' ? 'bg-earth-orange' : 'hover:bg-earth-orange'}`}
            >
              Verified Citations
            </RouterLink>

            <RouterLink
              to="/request-audit"
              onClick={handleLinkClick}
              className="block px-3 py-2 rounded-md text-base font-bold bg-red-600 text-white hover:bg-red-700 transition-colors"
              aria-label={DEMAND_AUDIT_CTA}
            >
              {DEMAND_AUDIT_CTA}
            </RouterLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
