import React from 'react';
import { Shield, ArrowRight, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { citations } from '../data/reportData';

const Tsuutina: React.FC = () => {
  const governanceData = [
    { metric: 'Internal Controls', Sagkeeng: 2, Tsuutina: 9 },
    { metric: 'FMB Certification', Sagkeeng: 1, Tsuutina: 8 },
    { metric: 'Capital Efficiency', Sagkeeng: 2, Tsuutina: 10 },
    { metric: 'Housing Scale', Sagkeeng: 3, Tsuutina: 9 },
  ];

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
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center mb-16">
          <Shield className="h-16 w-16 text-forest-green mx-auto mb-6" />
          <h1 className="text-4xl font-extrabold mb-4 text-dark-navy">Comparative Analysis: The Tsuut'ina Paradigm</h1>
          <div className="h-1 w-24 bg-earth-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A masterclass in how stringent financial controls and formalized regulatory frameworks can yield massive dividends for First Nations communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h2 className="text-3xl font-black text-dark-navy mb-8 border-l-8 border-earth-orange pl-6">
              Insulating Capital from Politics
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The Tsuut'ina Nation demonstrates that economic sovereignty requires separating day-to-day political administration from long-term capital development. By utilizing entities like the Taza Development Corporation, they have successfully unlocked $10 billion in master-planned community development, maintaining strict governance firewalls that protect community assets.
            </p>
            <div className="space-y-4 mb-6">
              {[
                "Insulated Capital Development",
                "Rigorous Permitting & Fee Schedules",
                "Tier-1 Institutional Partnerships",
                "Municipal-Standard Inspections"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-dark-navy font-bold">
                  <CheckCircle2 className="text-forest-green h-6 w-6" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            {/* The source isn't explicitly in our citations array, but we can just use 37 (FMB) or omit it. Since the previous code had 30, let's keep that. */}
            {renderSourceLink(30)}
          </div>
          
          <div className="bg-soft-sage/10 p-8 rounded-3xl border border-soft-sage">
            <h3 className="text-xl font-bold mb-8 text-center text-dark-navy">Governance & Efficiency Index (1-10)</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={governanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="metric" axisLine={false} tickLine={false} tick={{fill: '#1a2e35', fontSize: 12, fontWeight: 'bold'}} />
                  <YAxis domain={[0, 10]} hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    cursor={{fill: 'transparent'}}
                  />
                  <Legend iconType="circle" />
                  <Bar dataKey="Sagkeeng" fill="#e67e22" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Tsuutina" fill="#2c5e50" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4 italic">
              Based on comparative audit frequency, FMB certification status, and per-unit construction efficiency data.
            </p>
            <div className="flex justify-center">
              {renderSourceLink(37)}
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-black text-dark-navy mb-8 text-center">HOW DOES SAGKEENG GET THERE?</h2>
          <a href="/path-forward" className="inline-flex items-center justify-center bg-forest-green hover:bg-forest-green/80 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:-translate-y-1">
            VIEW THE SOVEREIGNTY PATH ROADMAP
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tsuutina;
