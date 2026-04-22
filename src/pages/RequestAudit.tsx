import React, { useState } from 'react';
import { Mail, ShieldCheck, AlertTriangle, Send } from 'lucide-react';
import { ISC_EMAIL } from '../constants';

const RequestAudit: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    treatyNumber: '',
    concerns: [
      { id: 'variance', label: '2023 Administration Budget Variance ($13.8M overrun)', checked: true },
      { id: 'gaming', label: 'Negative gaming revenues ($855,520) in 2023', checked: true },
      { id: 'aro', label: 'Failure to comply with PS 3280 Asset Retirement Obligations', checked: true },
      { id: 'historical', label: 'Historical pattern of misappropriation (2019 Health Centre audit)', checked: true },
      { id: 'housing', label: 'Inadequate housing delivery despite $17M+ annual surpluses', checked: false },
    ],
    additionalComments: ''
  });

  const handleCheckboxChange = (id: string) => {
    setFormData(prev => ({
      ...prev,
      concerns: prev.concerns.map(c => c.id === id ? { ...c, checked: !c.checked } : c)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedConcerns = formData.concerns
      .filter(c => c.checked)
      .map((c, i) => `${i + 1}. ${c.label}`)
      .join('\n');

    const mailSubject = "Formal Complaint: Request for Forensic Audit of Sagkeeng First Nation Finances";
    const mailBody = `To the Assessment and Investigation Services Branch (AISB),

I am a registered member of Sagkeeng First Nation. I am writing to formally request an exhaustive forensic investigation into the financial administration of our Nation, specifically regarding:

${selectedConcerns}

${formData.additionalComments ? `Additional Comments:\n${formData.additionalComments}\n` : ''}
We request intervention under the Default Prevention and Management Policy to protect the impending $100M TLE settlement and ensure the safety and welfare of our community.

Sincerely,
${formData.name || '[Your Name]'}
Treaty Number: ${formData.treatyNumber || '[Your Treaty Number]'}`;

    window.location.href = `mailto:${ISC_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  };

  return (
    <div className="py-24 bg-white text-dark-navy min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4 text-forest-green">Formal Audit Request Portal</h1>
          <div className="h-1 w-24 bg-earth-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Exercise your democratic right to financial accountability. This form generates a pre-formatted legal request to the Assessment and Investigation Services Branch (AISB).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-soft-sage/20 p-6 rounded-2xl border border-soft-sage flex flex-col items-center text-center">
            <ShieldCheck className="h-10 w-10 text-forest-green mb-4" />
            <h3 className="font-bold mb-2">Confidential</h3>
            <p className="text-sm text-gray-600">Protected under the Privacy Act and whistleblower frameworks.</p>
          </div>
          <div className="bg-soft-sage/20 p-6 rounded-2xl border border-soft-sage flex flex-col items-center text-center">
            <Mail className="h-10 w-10 text-forest-green mb-4" />
            <h3 className="font-bold mb-2">Direct Link</h3>
            <p className="text-sm text-gray-600">Sent directly to federal investigators at ISC/AISB.</p>
          </div>
          <div className="bg-soft-sage/20 p-6 rounded-2xl border border-soft-sage flex flex-col items-center text-center">
            <AlertTriangle className="h-10 w-10 text-earth-orange mb-4" />
            <h3 className="font-bold mb-2">Urgent</h3>
            <p className="text-sm text-gray-600">Critical to protect the $100M TLE settlement funds.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-3xl p-8 border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="treaty" className="block text-sm font-bold text-gray-700 mb-2">Treaty Number</label>
              <input
                type="text"
                id="treaty"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none transition-all"
                value={formData.treatyNumber}
                onChange={(e) => setFormData({ ...formData, treatyNumber: e.target.value })}
                placeholder="Enter your treaty number"
              />
            </div>
          </div>

          <div className="mb-8">
            <span className="block text-sm font-bold text-gray-700 mb-4">Areas of Concern to Investigate:</span>
            <div className="space-y-3">
              {formData.concerns.map((concern) => (
                <label key={concern.id} className="flex items-center p-4 rounded-xl border border-gray-100 hover:bg-soft-sage/10 cursor-pointer transition-colors group">
                  <input
                    type="checkbox"
                    checked={concern.checked}
                    onChange={() => handleCheckboxChange(concern.id)}
                    className="h-5 w-5 text-forest-green rounded border-gray-300 focus:ring-forest-green"
                  />
                  <span className="ml-4 text-gray-700 group-hover:text-dark-navy transition-colors">{concern.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="comments" className="block text-sm font-bold text-gray-700 mb-2">Additional Evidence or Comments (Optional)</label>
            <textarea
              id="comments"
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none transition-all"
              value={formData.additionalComments}
              onChange={(e) => setFormData({ ...formData, additionalComments: e.target.value })}
              placeholder="Provide any additional details or specific incidents..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 px-8 rounded-2xl flex items-center justify-center transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send className="mr-3 h-6 w-6" />
            GENERATE FORMAL COMPLAINT EMAIL
          </button>
          
          <p className="mt-6 text-center text-sm text-gray-500 italic">
            Note: Clicking this button will open your default email application with a pre-filled template. You must click 'Send' in your email app to submit the request.
          </p>
        </form>
      </div>
    </div>
  );
};

export default RequestAudit;
