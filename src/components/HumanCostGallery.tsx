import React from 'react';
import { Home, Droplets, Activity, AlertTriangle } from 'lucide-react';

/**
 * HumanCostGallery component illustrating the real-world impact of financial decoupling.
 * Features a card-based impact center and a 10-year timeline of community infrastructure.
 * 
 * @returns {JSX.Element} The rendered Human Impact section.
 */
const HumanCostGallery: React.FC = () => {
  const impactCards = [
    {
      title: "Endemic Overcrowding",
      description: "Statistics Canada reveals Indigenous dwellings are 3x more likely to require major repairs. In Sagkeeng, multi-family cohorts are forced into single dwellings, accelerating asset decay.",
      icon: <Home className="text-earth-orange h-8 w-8" />,
      stat: "16.4% of dwellings need major repair"
    },
    {
      title: "Temporary Utilities",
      description: "For many homeowners, temporary sewage and water systems are their only reality, requiring constant emergency repairs just to maintain basic, unsanitary functionality.",
      icon: <Droplets className="text-blue-500 h-8 w-8" />,
      stat: "$86M Surplus vs. Temporary Septic"
    },
    {
      title: "Health Implications",
      description: "High levels of endotoxins, mold spores, and building failures correlate directly with soaring rates of chronic respiratory illness and childhood asthma in the community.",
      icon: <Activity className="text-green-600 h-8 w-8" />,
      stat: "Direct link to respiratory distress"
    },
    {
      title: "Administrative Bloat",
      description: "While $1.2M is spent on leadership travel and honoraria, general population housing had only $713K in active construction capital allocated in 2025.",
      icon: <AlertTriangle className="text-red-600 h-8 w-8" />,
      stat: "1,000% Admin Budget Overrun"
    }
  ];

  const timelineEvents = [
    { year: "2016", event: "Revenue: $48.2M. Net Debt: $15.8M. Focus on baseline services." },
    { year: "2019", event: "Health Centre Audit uncovers $1.3M in questionable spending, including luxury cruises." },
    { year: "2021", event: "Revenue surges to $67.4M. Net debt remains high at $18.2M." },
    { year: "2023", event: "Net Debt doubles to $39.7M. Admin budget overruns by 1,000% ($13.8M deviation)." },
    { year: "2025", event: "Accumulated Surplus hits $86.4M. $100M TLE Ratified. Infrastructure remains 'temporary'." }
  ];

  return (
    <section id="human-impact" className="py-24 bg-dark-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Human Impact Center</h2>
          <div className="h-1 w-24 bg-earth-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The financial decoupling described in the audit has real, physical consequences for Sagkeeng band members.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {impactCards.map((card, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all transform hover:-translate-y-2">
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-earth-orange">{card.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{card.description}</p>
              <div className="text-xs font-black uppercase tracking-widest text-white/40 pt-4 border-t border-white/10">
                {card.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-2xl font-bold mb-12 text-center text-soft-sage">Decade of Decoupling: A Timeline</h3>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700 hidden md:block"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className={`relative flex items-center justify-between md:justify-normal w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-earth-orange border-4 border-dark-navy z-10"></div>
                
                <div className="w-full md:w-[45%] bg-white/5 p-6 rounded-xl border border-white/10 hover:border-earth-orange transition-colors">
                  <span className="text-earth-orange font-black text-2xl mb-2 block">{event.year}</span>
                  <p className="text-gray-300 leading-relaxed">{event.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 rounded-2xl bg-red-900/20 border border-red-500/30 text-center">
          <h4 className="text-xl font-bold text-red-500 mb-4 uppercase tracking-widest">Urgent Evidence</h4>
          <p className="text-gray-300 italic">
            "Sufficient prima facie evidence exists to justify a formal demand for an exhaustive forensic investigation." — Section 1.0 of the Audit Report
          </p>
        </div>
      </div>
    </section>
  );
};

export default HumanCostGallery;
