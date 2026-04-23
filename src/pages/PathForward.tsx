import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Home, Droplets, ArrowRight, Gavel, ExternalLink, ShieldCheck } from 'lucide-react';
import { citations } from '../data/reportData';

const PathForward: React.FC = () => {
  const renderSourceLink = (id: number) => {
    const citation = citations.find(c => c.id === id);
    if (!citation) return null;
    return (
      <div className="flex flex-wrap gap-3 mt-4 text-[10px]">
        <a 
          href={citation.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-gray-500 hover:text-dark-navy transition-colors underline"
        >
          <ExternalLink className="mr-1 h-3 w-3" />
          Live Source
        </a>
        {citation.archiveUrl && (
          <a 
            href={citation.archiveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-earth-orange hover:text-orange-600 transition-colors font-bold"
          >
            <ShieldCheck className="mr-1 h-3 w-3" />
            Verified Archive ({citation.archiveDate})
          </a>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-dark-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-forest-green rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-earth-orange rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight pt-10 text-center">
            THE <span className="text-earth-orange">PATH FORWARD</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed text-center">
            A Strategic Roadmap for Financial Sovereignty, Capital Efficiency, and Community Restoration (2026-2030)
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-forest-green/20 border border-forest-green text-forest-green px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">Statistical Framework</span>
            <span className="bg-earth-orange/20 border border-earth-orange text-earth-orange px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">Governance Reform</span>
          </div>
        </div>
      </section>

      {/* Link to Tsuut'ina comparative analysis */}
      <section className="py-12 bg-soft-sage/10 text-center">
        <h2 className="text-3xl font-black text-dark-navy mb-4 text-center">WANT TO SEE A SUCCESSFUL MODEL?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-center px-4">
          Explore how the Tsuut'ina Nation utilized strict financial controls and insulated capital development to unlock billions in master-planned community growth.
        </p>
        <Link to="/tsuutina.html" className="inline-flex items-center justify-center bg-dark-navy hover:bg-forest-green text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:-translate-y-1">
          VIEW THE TSUUT'INA PARADIGM
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>

      {/* The Roadmap - Phases */}
      <section className="py-24 bg-soft-sage/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-dark-navy mb-4 text-center">THE STRATEGIC ROADMAP</h2>
            <div className="h-1 w-24 bg-earth-orange mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phase 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-forest-green relative overflow-hidden group hover:-translate-y-2 transition-transform text-left">
              <div className="absolute -right-4 -top-4 text-forest-green/5 group-hover:scale-110 transition-transform">
                <Gavel size={120} />
              </div>
              <div className="text-forest-green font-black text-sm uppercase tracking-widest mb-4 text-left">Phase 01</div>
              <h3 className="text-xl font-bold mb-4 text-left">Legislative Formalization</h3>
              <ul className="text-gray-600 space-y-3 text-sm leading-relaxed text-left">
                <li>• Enact a Comprehensive Finance and Administration Act</li>
                <li>• Achieve full FMB Financial Administration Law (FAL) certification</li>
                <li>• Implement standardized internal controls</li>
              </ul>
              {renderSourceLink(37)}
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-earth-orange relative overflow-hidden group hover:-translate-y-2 transition-transform text-left">
              <div className="absolute -right-4 -top-4 text-earth-orange/5 group-hover:scale-110 transition-transform">
                <TrendingUp size={120} />
              </div>
              <div className="text-earth-orange font-black text-sm uppercase tracking-widest mb-4 text-left">Phase 02</div>
              <h3 className="text-xl font-bold mb-4 text-left">Debt Restructuring</h3>
              <ul className="text-gray-600 space-y-3 text-sm leading-relaxed text-left">
                <li>• Obtain FMB Financial Performance (FP) Certification</li>
                <li>• Access First Nations Finance Authority (FNFA) low-interest rates</li>
                <li>• Refinance punitive 7% Pitambara promissory notes</li>
              </ul>
              {renderSourceLink(4)}
            </div>

            {/* Phase 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-forest-green relative overflow-hidden group hover:-translate-y-2 transition-transform text-left">
              <div className="absolute -right-4 -top-4 text-forest-green/5 group-hover:scale-110 transition-transform">
                <Home size={120} />
              </div>
              <div className="text-forest-green font-black text-sm uppercase tracking-widest mb-4 text-left">Phase 03</div>
              <h3 className="text-xl font-bold mb-4 text-left">Infrastructure Overhaul</h3>
              <ul className="text-gray-600 space-y-3 text-sm leading-relaxed text-left">
                <li>• Implement strict construction permitting & fee schedules</li>
                <li>• Mandate third-party inspections to eliminate mold-prone builds</li>
                <li>• Enforce per-unit construction cost KPI reporting</li>
              </ul>
              {renderSourceLink(6)}
            </div>

            {/* Phase 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-earth-orange relative overflow-hidden group hover:-translate-y-2 transition-transform text-left">
              <div className="absolute -right-4 -top-4 text-earth-orange/5 group-hover:scale-110 transition-transform">
                <Droplets size={120} />
              </div>
              <div className="text-earth-orange font-black text-sm uppercase tracking-widest mb-4 text-left">Phase 04</div>
              <h3 className="text-xl font-bold mb-4 text-left">Health & Eco Integration</h3>
              <ul className="text-gray-600 space-y-3 text-sm leading-relaxed text-left">
                <li>• Synchronize water security with housing capital deployment</li>
                <li>• Establish a ring-fenced Mold Eradication Trust from annual surpluses</li>
                <li>• Leverage Lake Winnipeg litigation for ring-fenced utilities</li>
              </ul>
              {renderSourceLink(16)}
            </div>
          </div>
        </div>
      </section>

      {/* The KPI Section */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark-navy rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-black mb-8 text-center flex items-center justify-center">
              <Shield className="mr-4 text-earth-orange h-10 w-10" />
              THE CAPITAL EFFICIENCY METRIC
            </h2>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20 text-center">
              <div className="text-center">
                <p className="text-gray-400 uppercase tracking-widest text-sm mb-4 text-center">Mandatory Audit Disclosure Formula</p>
                <div className="text-4xl md:text-5xl font-mono text-earth-orange text-center">
                  Cost per Unit = <span className="text-white">(Total Project Capital)</span> / <span className="text-white">(Units Delivered)</span>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed text-center italic">
              "Any project where cost-per-unit exceeds regional private-market averages by more than 15% must trigger an automatic, independent forensic audit, freezing further capital disbursement until the discrepancy is resolved."
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-black text-dark-navy mb-8 text-center">READY TO RESTORE ACCOUNTABILITY?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6 px-4">
          <Link to="/request-audit" className="bg-red-600 hover:bg-red-700 text-white font-black py-5 px-10 rounded-2xl shadow-2xl transition-all hover:scale-105 flex items-center justify-center">
            FILE A FORMAL AUDIT REQUEST
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
          <Link to="/" className="bg-soft-sage hover:bg-soft-sage/80 text-dark-navy font-bold py-5 px-10 rounded-2xl transition-all flex items-center justify-center">
            REVIEW THE AUDIT DATA
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PathForward;
