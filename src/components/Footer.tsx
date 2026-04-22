import React from 'react';
import { Link } from 'react-router-dom';
import { citations } from '../data/reportData';
import { ExternalLink, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-navy text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12">
          {/* Disclaimer */}
          <div className="md:col-span-1">
            <h3 className="text-earth-orange font-bold text-lg mb-4 uppercase tracking-wider text-left">Disclaimer</h3>
            <p className="text-sm text-gray-300 leading-relaxed italic text-left">
              This report is based on publicly available audited financial statements and census data as of April 2026. 
              The analysis is provided for transparency and community awareness purposes. All evidence is archived to prevent data deletion.
            </p>
          </div>

          {/* Site Navigation */}
          <div>
            <h3 className="text-earth-orange font-bold text-lg mb-4 uppercase tracking-wider text-left">Navigation</h3>
            <ul className="space-y-2 text-left">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Forensic Audit Home</Link>
              </li>
              <li>
                <Link to="/path-forward" className="text-gray-300 hover:text-white transition-colors text-sm">The Sovereignty Path</Link>
              </li>
              <li>
                <Link to="/tsuutina.html" className="text-gray-300 hover:text-white transition-colors text-sm">Tsuut'ina Paradigm</Link>
              </li>
              <li>
                <Link to="/references.html" className="text-gray-300 hover:text-white transition-colors text-sm">Verified Citations</Link>
              </li>
              <li>
                <Link to="/request-audit" className="text-gray-300 hover:text-white transition-colors text-sm">Official Audit Portal</Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-earth-orange font-bold text-lg mb-4 uppercase tracking-wider text-left">Official Financials</h3>
            <ul className="space-y-2 text-left">
              <li>
                <a 
                  href="https://sagkeeng.ca/financials/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm underline decoration-earth-orange underline-offset-4"
                >
                  Sagkeeng Anicinabe Government Financial Archive
                </a>
              </li>
              <li>
                <a 
                  href="https://fnp-ppn.aadnc-aandc.gc.ca/fnp/Main/Search/FNMain.aspx?lang=eng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm underline decoration-earth-orange underline-offset-4"
                >
                  ISC First Nation Profiles (Audit Search)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Works Cited & Archive */}
        <div className="mt-12">
          <h3 className="text-earth-orange font-bold text-lg mb-6 uppercase tracking-wider flex items-center">
            <ShieldCheck className="mr-2 h-6 w-6" />
            Transparency Archive: Works Cited & Verified Evidence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {citations.map((citation) => (
              <div key={citation.id} className="text-xs bg-white/5 p-4 rounded-xl border border-white/10 hover:border-earth-orange/50 transition-colors">
                <div className="flex items-start mb-2">
                  <span className="text-earth-orange font-black text-sm mr-2">{citation.id.toString().padStart(2, '0')}</span>
                  <p className="text-white font-bold leading-tight">{citation.text}</p>
                </div>
                <div className="flex flex-wrap gap-3 ml-6 mt-3">
                  <a 
                    href={citation.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors underline decoration-gray-600"
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Original Source
                  </a>
                  {citation.archiveUrl && (
                    <a 
                      href={citation.archiveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-earth-orange hover:text-orange-400 transition-colors font-bold"
                    >
                      <ShieldCheck className="mr-1 h-3 w-3" />
                      Archived ({citation.archiveDate})
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-xs text-gray-500 border-t border-gray-800 pt-8">
          <p>&copy; {new Date().getFullYear()} Sagkeeng Future Initiative. All Rights Reserved.</p>
          <p className="mt-2 tracking-widest font-bold">TRANSPARENCY • ACCOUNTABILITY • PROSPERITY</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
