import React from 'react';
import { Mail, Phone, Share2, FileText, CheckCircle } from 'lucide-react';
import { ISC_EMAIL, ISC_PHONE } from '../constants';

/**
 * ActionCenter component providing community empowerment tools.
 * Includes a procedural roadmap, pre-filled email templates for ISC/AISB, 
 * and social sharing utilities.
 * 
 * @returns {JSX.Element} The rendered Action & Accountability Center.
 */
const ActionCenter: React.FC = () => {
  const mailSubject = "Formal Complaint: Request for Forensic Audit of Sagkeeng First Nation Finances";
  const mailBody = `To the Assessment and Investigation Services Branch (AISB),

I am a registered member of Sagkeeng First Nation. I am writing to formally request an exhaustive forensic investigation into the financial administration of our Nation, specifically regarding:

1. The 2023 Administration Budget Variance ($13.8M overrun).
2. The reporting of negative gaming revenues ($855,520) in 2023.
3. The repeated failure to comply with PS 3280 Asset Retirement Obligations.
4. The historical pattern of misappropriation identified in the 2019 Health Centre audit.

We request intervention under the Default Prevention and Management Policy to protect the impending $100M TLE settlement and ensure the safety and welfare of our community.

Sincerely,
[Your Name]
[Your Treaty Number]`;

  const mailtoLink = `mailto:${ISC_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  const roadmap = [
    { step: 1, title: "Gather Evidence", desc: "Download the FNFTA audited statements for 2023-2025 and highlight the key discrepancies identified in this report." },
    { step: 2, title: "Draft Complaint", desc: "Use the pre-written template to ensure your request uses the specific regulatory language required by ISC." },
    { step: 3, title: "Submit to AISB", desc: "Send your formal dossier via email, phone, or registered mail to the Assessment and Investigation Services Branch." },
    { step: 4, title: "Request Protection", desc: "Explicitly request confidentiality under the Privacy Act and federal whistleblower frameworks to prevent local retribution." }
  ];

  const shareOnX = () => {
    window.open(`https://x.com/intent/tweet?text=${encodeURIComponent("Demand Accountability for Sagkeeng. Read the Forensic Audit Review.")}&url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnFB = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  return (
    <section id="action-center" className="py-24 bg-white text-dark-navy" aria-labelledby="action-center-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="action-center-title" className="text-4xl font-extrabold mb-4 text-forest-green">Action & Accountability Center</h2>
          <div className="h-1 w-24 bg-earth-orange mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparency is the first step. Action is the second. Use these tools to exercise your democratic right to accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Roadmap */}
          <article>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <CheckCircle className="text-forest-green mr-3 h-8 w-8" aria-hidden="true" />
              Procedural Roadmap (Section 9.4)
            </h3>
            <div className="space-y-8" role="list">
              {roadmap.map((item) => (
                <div key={item.step} className="flex space-x-6" role="listitem">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soft-sage flex items-center justify-center text-forest-green font-black text-xl" aria-hidden="true">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark-navy mb-1">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Contact Tools */}
          <aside className="bg-soft-sage/30 p-8 rounded-3xl border border-soft-sage" aria-label="Contact and Social Sharing">
            <h3 className="text-2xl font-bold mb-6 text-forest-green">Direct Enforcement Links</h3>
            
            <div className="space-y-4">
              <a 
                href={mailtoLink}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-5 px-8 rounded-2xl flex items-center justify-center transition-all shadow-lg group"
                aria-label="Open pre-filled email template for AISB"
              >
                <Mail className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
                Email AISB Template (Recommended)
              </a>

              <a 
                href={`tel:${ISC_PHONE}`}
                className="w-full bg-forest-green hover:opacity-90 text-white font-bold py-5 px-8 rounded-2xl flex items-center justify-center transition-all shadow-lg group"
                aria-label={`Call ISC Toll-Free at ${ISC_PHONE}`}
              >
                <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" aria-hidden="true" />
                Call Toll-Free: {ISC_PHONE}
              </a>

              <button 
                className="w-full bg-white border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white font-bold py-5 px-8 rounded-2xl flex items-center justify-center transition-all group"
                onClick={() => alert('PDF Audit Summary generation coming soon.')}
                aria-label="Download PDF Audit Summary"
              >
                <FileText className="mr-3 h-6 w-6 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
                Download PDF Audit Summary
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-soft-sage">
              <p className="text-center font-bold text-sm text-gray-500 uppercase tracking-widest mb-6 flex items-center justify-center">
                <Share2 className="mr-2 h-4 w-4" aria-hidden="true" /> Share This Data
              </p>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={shareOnX}
                  className="bg-[#000000] text-white px-6 py-3 rounded-xl font-bold hover:opacity-80 transition-opacity"
                  aria-label="Share audit data on X (formerly Twitter)"
                >
                  Share on X
                </button>
                <button 
                  onClick={shareOnFB}
                  className="bg-[#1877F2] text-white px-6 py-3 rounded-xl font-bold hover:opacity-80 transition-opacity"
                  aria-label="Share audit data on Facebook"
                >
                  Facebook
                </button>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-24 p-12 bg-forest-green text-white rounded-[3rem] text-center shadow-2xl relative overflow-hidden" role="complementary">
          <div className="absolute top-0 right-0 w-32 h-32 bg-earth-orange/20 rounded-full blur-3xl -mr-16 -mt-16" aria-hidden="true"></div>
          <h3 className="text-3xl font-black mb-6">"Transparency is not a gift. It is a Treaty Right."</h3>
          <p className="text-soft-sage text-lg mb-0 max-w-2xl mx-auto italic">
            Exercise your fiduciary right to know how community capital is allocated. 
            The future of our Treaty Land Entitlement depends on the integrity of our governance today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActionCenter;
