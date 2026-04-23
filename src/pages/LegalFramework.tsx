import React, { useEffect } from 'react';
import { 
  Scale, 
  Book, 
  Gavel, 
  FileText, 
  Landmark, 
  Info, 
  Check, 
  ArrowRight, 
  ShieldAlert, 
  Handshake, 
  Receipt, 
  AlertTriangle, 
  Search, 
  CheckCheck, 
  ShieldHalf, 
  Users,
  ExternalLink
} from 'lucide-react';

/**
 * LegalFramework page providing an educational infographic on the Canadian legal framework
 * for First Nation governance and accountability.
 * 
 * @returns {JSX.Element} The rendered Legal Framework page.
 */
const LegalFramework: React.FC = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen font-sans antialiased">
      {/* Hero / Header */}
      <header className="bg-dark-navy text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-x-2 px-4 py-1.5 rounded-3xl bg-white/10 backdrop-blur-md mb-8 border border-white/5">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="uppercase tracking-[3px] text-[10px] font-black">TRANSPARENCY • ACCOUNTABILITY • EDUCATION</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl leading-tight font-black tracking-tighter mb-6">
              Canadian Legal Framework<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-white">for First Nation Governance</span>
            </h1>
            <p className="max-w-2xl text-xl text-slate-300 leading-relaxed font-medium">
              A factual overview of the civil and criminal laws that govern how band councils manage community resources, 
              including key fiduciary principles and landmark court decisions.
            </p>
            
            <div className="flex items-center gap-x-6 mt-10">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl"><Gavel className="h-5 w-5 text-emerald-300" /></div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl"><FileText className="h-5 w-5 text-emerald-300" /></div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl"><Landmark className="h-5 w-5 text-emerald-300" /></div>
              </div>
              <span className="text-sm font-bold text-slate-400 tracking-wide">Updated January 2026 • Educational Reference</span>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.8px,transparent_1px)] bg-[length:4px_4px]"></div>
        </div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-16 pb-32">
        
        {/* Introduction / Context */}
        <div className="mb-24 max-w-4xl">
          <div className="flex items-start gap-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <div className="mt-1 p-3 bg-soft-sage/30 rounded-2xl">
              <Info className="h-8 w-8 text-forest-green" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-dark-navy tracking-tight mb-4">Why This Framework Matters</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                First Nation band councils exercise significant authority over community funds, lands, and programs. 
                Canadian law imposes clear legal obligations—rooted in both the <strong className="text-dark-navy">Indian Act</strong> and common law—to ensure these powers are exercised solely in the best interests of band members. 
                These rules apply equally to elected leadership and protect the collective rights of all members.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-block px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full bg-soft-sage text-forest-green border border-forest-green/10">Indian Act, R.S.C. 1985, c. I-5</span>
                <span className="inline-block px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full bg-soft-sage text-forest-green border border-forest-green/10">Criminal Code, R.S.C. 1985, c. C-46</span>
                <span className="inline-block px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full bg-soft-sage text-forest-green border border-forest-green/10">Common Law Fiduciary Principles</span>
              </div>
            </div>
          </div>
        </div>

        {/* 1. The Fiduciary Foundation --> */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-forest-green text-white text-[10px] font-black uppercase tracking-[3px] shadow-lg">FOUNDATIONAL PRINCIPLE</span>
              <h2 className="text-4xl font-black text-dark-navy tracking-tighter mt-4">Fiduciary Duties of Band Councils</h2>
            </div>
            <div className="md:text-right">
              <div className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1">Established in</div>
              <div className="font-mono text-sm font-bold text-forest-green">Guerin v. R. (1984) & Sparrow v. R. (1990)</div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Main explanation card */}
            <div className="md:col-span-7 bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-soft-sage/20 rounded-bl-[5rem] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              
              <div className="relative z-10">
                <p className="text-lg leading-relaxed text-slate-700 font-medium">
                  Band councils and chiefs stand in a <strong className="text-dark-navy underline decoration-earth-orange/30 decoration-4">fiduciary relationship</strong> with their band and all its members. 
                  This means they must:
                </p>
                <ul className="mt-8 space-y-5">
                  <li className="flex gap-4 items-start">
                    <div className="mt-1 bg-emerald-100 p-1 rounded-lg"><Check className="h-4 w-4 text-emerald-600 stroke-[3px]" /></div>
                    <span className="text-[16px] font-semibold text-slate-700">Act <strong className="text-forest-green">solely in the best interests</strong> of the band and its members</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="mt-1 bg-emerald-100 p-1 rounded-lg"><Check className="h-4 w-4 text-emerald-600 stroke-[3px]" /></div>
                    <span className="text-[16px] font-semibold text-slate-700">Avoid any <strong className="text-forest-green">conflict of interest</strong> and disclose any potential conflicts immediately</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="mt-1 bg-emerald-100 p-1 rounded-lg"><Check className="h-4 w-4 text-emerald-600 stroke-[3px]" /></div>
                    <span className="text-[16px] font-semibold text-slate-700">Never profit personally from their position (the "no profit" rule)</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="mt-1 bg-emerald-100 p-1 rounded-lg"><Check className="h-4 w-4 text-emerald-600 stroke-[3px]" /></div>
                    <span className="text-[16px] font-semibold text-slate-700">Exercise powers only with proper authority (e.g., band member consent where required under the Indian Act)</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between gap-x-4">
                <div className="flex-1">
                  <div className="font-black text-[10px] tracking-widest text-slate-400 uppercase mb-2">KEY CASE AUTHORITY</div>
                  <div className="font-bold text-dark-navy text-sm italic">Gilbert v. Abbey (1992) & Louie v. Louie (2015 BCCA)</div>
                </div>
                <div className="bg-soft-sage p-3 rounded-2xl"><ArrowRight className="h-6 w-6 text-forest-green" /></div>
              </div>
            </div>

            {/* Key stats / principles */}
            <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
              <div className="bg-forest-green rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
                <div className="text-white/60 text-[10px] font-black tracking-widest uppercase mb-4">DUTY OF LOYALTY</div>
                <div className="relative z-10">
                  <div className="text-6xl font-black text-emerald-400 tracking-tighter">100%</div>
                  <div className="text-white text-sm font-bold leading-tight mt-2 max-w-[200px]">Personal interests must never override collective interests</div>
                </div>
              </div>
              
              <div className="bg-earth-orange rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden text-white">
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/5 rounded-full"></div>
                <div className="text-white/60 text-[10px] font-black tracking-widest uppercase mb-4">REMEDIES AVAILABLE</div>
                <div className="relative z-10 space-y-2 text-sm font-black">
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white rounded-full"></div> Repayment / Disgorgement</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white rounded-full"></div> Punitive Damages</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white rounded-full"></div> Removal from Office</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white rounded-full"></div> Court Injunctions</div>
                </div>
              </div>
              
              <div className="col-span-full text-xs font-bold bg-white border-2 border-soft-sage/30 rounded-3xl px-8 py-6 text-slate-600 shadow-sm italic">
                <span className="font-black text-forest-green uppercase tracking-widest mr-2">Important:</span> These duties exist even in the absence of formal bylaws or constitutions. 
                Informal "customs" or past practices do <strong className="text-dark-navy">not</strong> override fiduciary obligations (Louie v. Louie, 2015 BCCA 247 at para. 95).
              </div>
            </div>
          </div>
        </div>

        {/* 2. Criminal Provisions --> */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-[3px] shadow-lg">CRIMINAL CODE, R.S.C. 1985, c. C-46</span>
            <h2 className="text-4xl font-black text-dark-navy tracking-tighter mt-4">Criminal Accountability Mechanisms</h2>
            <p className="text-slate-600 mt-4 max-w-3xl text-lg font-medium">When conduct involves intent to defraud or serious breach of public trust, band council members may face criminal prosecution. These provisions treat councillors as public officials and trustees.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* s.122 Card */}
            <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="px-8 pt-10 pb-8 bg-gradient-to-br from-red-600 to-red-800 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-8 -mt-8"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <div className="font-mono text-[10px] font-black tracking-[2px] text-white/70 uppercase mb-2">SECTION 122</div>
                    <div className="text-2xl font-black tracking-tight leading-tight">Breach of Trust<br />by Public Officer</div>
                  </div>
                  <ShieldAlert className="h-10 w-10 text-white/50" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-baseline gap-x-2 mb-6">
                  <span className="text-6xl font-black text-red-600 tracking-tighter">5</span>
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">years max</span>
                </div>
                
                <p className="text-sm leading-relaxed text-slate-700 font-medium mb-8">
                  Applies to any "official" who, in connection with their duties, commits fraud or a breach of trust. 
                  Band councillors have been held to qualify as officials exercising public functions.
                </p>
                
                <div className="space-y-3">
                  <div className="text-[10px] uppercase tracking-widest font-black text-red-600/70 border-b border-red-100 pb-2">KEY ELEMENTS</div>
                  <div className="text-[13px] font-bold text-slate-600 flex flex-col gap-1.5">
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div> Position of Public Trust</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div> Connection to Official Duties</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div> Fraud or Breach of Trust</div>
                  </div>
                </div>
              </div>
            </div>

            {/* s.336 Card */}
            <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="px-8 pt-10 pb-8 bg-gradient-to-br from-amber-600 to-orange-700 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-8 -mt-8"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <div className="font-mono text-[10px] font-black tracking-[2px] text-white/70 uppercase mb-2">SECTION 336</div>
                    <div className="text-2xl font-black tracking-tight leading-tight">Criminal Breach<br />of Trust</div>
                  </div>
                  <Handshake className="h-10 w-10 text-white/50" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-baseline gap-x-2 mb-6">
                  <span className="text-6xl font-black text-amber-600 tracking-tighter">14</span>
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">years max</span>
                </div>
                
                <p className="text-sm leading-relaxed text-slate-700 font-medium mb-8">
                  Targets trustees who convert property entrusted to them for an unauthorized purpose with intent to defraud. 
                  Band councils hold band moneys in trust for members — a direct application.
                </p>
                
                <div className="space-y-3">
                  <div className="text-[10px] uppercase tracking-widest font-black text-amber-600/70 border-b border-amber-100 pb-2">KEY ELEMENTS</div>
                  <div className="text-[13px] font-bold text-slate-600 flex flex-col gap-1.5">
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> Trustee Relationship</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> Conversion of Trust Property</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> Intent to Defraud</div>
                  </div>
                </div>
              </div>
            </div>

            {/* s.380 Card */}
            <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="px-8 pt-10 pb-8 bg-gradient-to-br from-slate-700 to-dark-navy text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-8 -mt-8"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <div className="font-mono text-[10px] font-black tracking-[2px] text-white/70 uppercase mb-2">SECTION 380(1)</div>
                    <div className="text-2xl font-black tracking-tight leading-tight">Fraud</div>
                  </div>
                  <Receipt className="h-10 w-10 text-white/50" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-baseline gap-x-2 mb-6">
                  <span className="text-6xl font-black text-dark-navy tracking-tighter">14</span>
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">years max</span>
                  <span className="ml-auto text-[10px] px-3 py-1 rounded-full bg-slate-100 text-slate-500 font-black tracking-widest">IF &gt;$5,000</span>
                </div>
                
                <p className="text-sm leading-relaxed text-slate-700 font-medium mb-8">
                  The broadest fraud provision. Defrauding any person (including the band) of money or property by deceit, falsehood, or other fraudulent means. 
                  Frequently paired with breach of trust charges in governance cases.
                </p>
                
                <div className="space-y-3">
                  <div className="text-[10px] uppercase tracking-widest font-black text-slate-400 border-b border-slate-100 pb-2">KEY ELEMENTS</div>
                  <div className="text-[13px] font-bold text-slate-600 flex flex-col gap-1.5">
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-dark-navy rounded-full"></div> Deceit or Fraudulent Means</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-dark-navy rounded-full"></div> Deprivation of Property/Money</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-dark-navy rounded-full"></div> Intent to Defraud</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="inline-block px-8 py-3 rounded-full bg-slate-100 text-slate-500 text-xs font-bold shadow-inner">
              Note: Multiple charges are common. Conviction on an indictable offence also triggers automatic vacancy of council seat under Indian Act s. 78.
            </p>
          </div>
        </div>

        {/* 3. Landmark Precedents --> */}
        <div className="mb-24">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[3px] shadow-lg">JURISPRUDENCE</span>
              <h2 className="text-4xl font-black text-dark-navy tracking-tighter mt-4">Landmark Legal Precedents</h2>
            </div>
            <p className="text-xs font-bold text-slate-400 max-w-xs md:text-right">These decisions establish that band councils are held to the highest standards of fiduciary conduct — regardless of informal governance practices.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Gilbert v Abbey */}
            <div className="bg-white rounded-[2.5rem] p-10 border-2 border-indigo-50 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-bl-full -mr-8 -mt-8"></div>
              <div className="flex items-center gap-x-6 mb-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex-shrink-0 flex items-center justify-center text-white shadow-xl">
                  <Gavel className="h-8 w-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-black text-[10px] text-indigo-600 tracking-[3px] uppercase mb-1">1992 • B.C.S.C.</div>
                  <h3 className="font-black text-2xl tracking-tighter text-dark-navy">Gilbert v. Abbey</h3>
                  <div className="text-[10px] font-mono font-bold text-slate-400 mt-1">[1992] 4 C.N.L.R. 21</div>
                </div>
              </div>
              
              <p className="text-[15px] leading-relaxed text-slate-700 font-medium mb-8">
                A former Chief caused the band to repay her personal student loan, fund her sons’ private school tuition, and purchase a trailer for her personal use on reserve. 
                She participated in the council decisions authorizing these expenditures.
              </p>
              
              <div className="bg-indigo-50/50 rounded-3xl p-6 border border-indigo-100">
                <div className="font-black text-[10px] text-indigo-700 tracking-widest uppercase mb-3">RULING & IMPACT</div>
                <p className="text-[13px] leading-relaxed text-indigo-900 font-bold">Court held that “duly-elected Chief as well as the members of a Band Council are fiduciaries as far as all other members of the Band are concerned.” Ordered full repayment and established that personal benefit from band funds constitutes a clear breach.</p>
              </div>
            </div>

            {/* Louie v Louie */}
            <div className="bg-white rounded-[2.5rem] p-10 border-2 border-indigo-50 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-bl-full -mr-8 -mt-8"></div>
              <div className="flex items-center gap-x-6 mb-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex-shrink-0 flex items-center justify-center text-white shadow-xl">
                  <Gavel className="h-8 w-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-black text-[10px] text-indigo-600 tracking-[3px] uppercase mb-1">2015 • B.C.C.A.</div>
                  <h3 className="font-black text-2xl tracking-tighter text-dark-navy">Louie v. Louie</h3>
                  <div className="text-[10px] font-mono font-bold text-slate-400 mt-1">2015 BCCA 247</div>
                </div>
              </div>
              
              <p className="text-[15px] leading-relaxed text-slate-700 font-medium mb-8">
                Five councillors of the Lower Kootenay Indian Band, after securing $125,000 from a regional district for a road crossing the reserve, held a private meeting and voted themselves $5,000 each as a “retroactive honorarium.”
              </p>
              
              <div className="bg-indigo-50/50 rounded-3xl p-6 border border-indigo-100">
                <div className="font-black text-[10px] text-indigo-700 tracking-widest uppercase mb-3">RULING & IMPACT</div>
                <p className="text-[13px] leading-relaxed text-indigo-900 font-bold">B.C. Court of Appeal overturned the trial decision, finding a clear breach of the “no conflict” and “no profit” rules. Informal past practices or “custom” offered no defence. Councillors ordered to repay $5,000 each; punitive damages left open. Confirmed high fiduciary standard applies even to informal governance structures.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <div className="inline-flex items-center text-[10px] font-black uppercase tracking-widest bg-white border-2 border-slate-100 rounded-full px-6 py-3 text-slate-400 shadow-sm gap-4">
              <Scale className="h-4 w-4 text-forest-green" />
              <span>Additional authorities: <strong className="text-dark-navy underline underline-offset-4 decoration-indigo-200">Annapolis Valley First Nation v Toney</strong> (2004 FC 1728) • <strong className="text-dark-navy underline underline-offset-4 decoration-indigo-200">Moon v. Campbell River Indian Band</strong></span>
            </div>
          </div>
        </div>

        {/* 4. Pathways to Accountability --> */}
        <div className="mb-24">
          <h2 className="text-4xl font-black text-dark-navy tracking-tighter mb-16 text-center">Pathways to Accountability</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Flow line */}
              <div className="hidden lg:block absolute left-0 right-0 top-10 h-1 bg-gradient-to-r from-forest-green via-emerald-400 to-forest-green rounded-full opacity-20"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 relative">
                {/* Step 1 */}
                <div className="text-center group">
                  <div className="mx-auto w-20 h-20 rounded-[2rem] bg-forest-green flex items-center justify-center text-white mb-6 shadow-2xl transition-transform group-hover:scale-110 relative z-10">
                    <AlertTriangle className="h-10 w-10" />
                  </div>
                  <div className="font-black text-xl text-dark-navy tracking-tight mb-2">1. Allegation</div>
                  <p className="text-[11px] font-bold text-slate-500 leading-relaxed px-4">Band member, auditor, or ISC identifies concerns about fund use or self-dealing</p>
                </div>
                
                {/* Step 2 */}
                <div className="text-center group">
                  <div className="mx-auto w-20 h-20 rounded-[2rem] bg-emerald-600 flex items-center justify-center text-white mb-6 shadow-2xl transition-transform group-hover:scale-110 relative z-10">
                    <Search className="h-10 w-10" />
                  </div>
                  <div className="font-black text-xl text-dark-navy tracking-tight mb-2">2. Investigation</div>
                  <p className="text-[11px] font-bold text-slate-500 leading-relaxed px-4">Assessment & Investigation Services Branch (AISB) conducts forensic review</p>
                </div>
                
                {/* Step 3 */}
                <div className="text-center group">
                  <div className="mx-auto w-20 h-20 rounded-[2rem] bg-amber-500 flex items-center justify-center text-white mb-6 shadow-2xl transition-transform group-hover:scale-110 relative z-10">
                    <FileText className="h-10 w-10" />
                  </div>
                  <div className="font-black text-xl text-dark-navy tracking-tight mb-2">3. Findings</div>
                  <p className="text-[11px] font-bold text-slate-500 leading-relaxed px-4">Audit qualifications or evidence of personal gain documented</p>
                </div>
                
                {/* Step 4 */}
                <div className="text-center group">
                  <div className="mx-auto w-20 h-20 rounded-[2rem] bg-red-600 flex items-center justify-center text-white mb-6 shadow-2xl transition-transform group-hover:scale-110 relative z-10">
                    <Gavel className="h-10 w-10" />
                  </div>
                  <div className="font-black text-xl text-dark-navy tracking-tight mb-2">4. Action</div>
                  <p className="text-[11px] font-bold text-slate-500 leading-relaxed px-4">Civil lawsuit by member or RCMP referral for criminal charges</p>
                </div>
                
                {/* Step 5 */}
                <div className="text-center group">
                  <div className="mx-auto w-20 h-20 rounded-[2rem] bg-dark-navy flex items-center justify-center text-white mb-6 shadow-2xl transition-transform group-hover:scale-110 relative z-10">
                    <CheckCheck className="h-10 w-10" />
                  </div>
                  <div className="font-black text-xl text-dark-navy tracking-tight mb-2">5. Resolution</div>
                  <p className="text-[11px] font-bold text-slate-500 leading-relaxed px-4">Repayment, convictions, removal from office, or ISC co-management</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Civil vs Criminal Comparison --> */}
        <div className="mb-24">
          <h2 className="text-4xl font-black text-dark-navy tracking-tighter mb-10">Civil Remedies vs. Criminal Prosecution</h2>
          
          <div className="overflow-x-auto rounded-[2.5rem] shadow-2xl border-2 border-slate-100">
            <table className="w-full min-w-[900px] bg-white text-left">
              <thead>
                <tr className="bg-dark-navy text-white">
                  <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[3px] w-1/4">Aspect</th>
                  <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[3px]">Civil Action</th>
                  <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[3px]">Criminal Prosecution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-bold text-[14px] text-slate-600">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-10 py-6 font-black text-dark-navy uppercase text-[10px] tracking-widest bg-slate-50/50">Standard of Proof</td>
                  <td className="px-10 py-6 italic">Balance of probabilities</td>
                  <td className="px-10 py-6 italic">Beyond a reasonable doubt</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-10 py-6 font-black text-dark-navy uppercase text-[10px] tracking-widest bg-slate-50/50">Who Initiates</td>
                  <td className="px-10 py-6 text-forest-green">Band member (derivative action) or band itself</td>
                  <td className="px-10 py-6 text-red-600">RCMP / Public Prosecution Service of Canada</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-10 py-6 font-black text-dark-navy uppercase text-[10px] tracking-widest bg-slate-50/50">Primary Penalties</td>
                  <td className="px-10 py-6 leading-relaxed">Repayment of funds, punitive damages, removal from office, injunction</td>
                  <td className="px-10 py-6 leading-relaxed">Fines, imprisonment (up to 14 years), criminal record, automatic loss of seat</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-10 py-6 font-black text-dark-navy uppercase text-[10px] tracking-widest bg-slate-50/50">Typical Evidence</td>
                  <td className="px-10 py-6">Financial records, BCRs, witness testimony, audit reports</td>
                  <td className="px-10 py-6">Same + intent evidence, forensic accounting, witness statements</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-10 py-6 font-black text-dark-navy uppercase text-[10px] tracking-widest bg-slate-50/50">Timeframe</td>
                  <td className="px-10 py-6">12–36 months</td>
                  <td className="px-10 py-6">18–48+ months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Takeaways --> */}
        <div className="bg-forest-green rounded-[3rem] p-12 md:p-20 mb-20 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-20 -mt-20"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mb-20"></div>
          
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h3 className="font-black text-4xl tracking-tighter mb-12">Key Takeaways for Members & Leadership</h3>
            <div className="grid md:grid-cols-3 gap-12 text-left">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"><ShieldHalf className="h-6 w-6 text-emerald-300" /></div>
                <div>
                  <h4 className="font-black text-lg tracking-tight mb-2">Duty is Non-Negotiable</h4>
                  <p className="text-sm font-medium text-emerald-100/70 leading-relaxed">Fiduciary duty is absolute. Past practice or “custom” is not a defence when personal gain occurs from community funds.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"><Book className="h-6 w-6 text-emerald-300" /></div>
                <div>
                  <h4 className="font-black text-lg tracking-tight mb-2">Transparency Laws Exist</h4>
                  <p className="text-sm font-medium text-emerald-100/70 leading-relaxed">The First Nations Financial Transparency Act (FNFTA) requires public disclosure of all chief and councillor remuneration and expenses.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"><Users className="h-6 w-6 text-emerald-300" /></div>
                <div>
                  <h4 className="font-black text-lg tracking-tight mb-2">Members Have Standing</h4>
                  <p className="text-sm font-medium text-emerald-100/70 leading-relaxed">Any band member can initiate civil proceedings or request an ISC forensic audit through the Assessment & Investigation Services Branch (AISB).</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resources / Footer --> */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-loose">
              This resource is provided for educational and transparency purposes only. It does not constitute legal advice. 
              Sagkeeng Future Initiative is dedicated to empowering members through data and legal literacy.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.sac-isc.gc.ca/eng/1386682249052/1618138791359" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border-2 border-slate-200 text-slate-500 text-xs font-black uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center gap-2"
              >
                Default Policy <ExternalLink className="h-3 w-3" />
              </a>
              <a 
                href="https://laws-lois.justice.gc.ca/eng/acts/C-46/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border-2 border-slate-200 text-slate-500 text-xs font-black uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center gap-2"
              >
                Criminal Code <ExternalLink className="h-3 w-3" />
              </a>
              <a 
                href="https://www.canlii.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border-2 border-slate-200 text-slate-500 text-xs font-black uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center gap-2"
              >
                CanLII Research <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            
            <div className="bg-white border-2 border-soft-sage/30 rounded-3xl p-8 shadow-sm">
              <div className="font-black text-forest-green text-xs uppercase tracking-[4px] mb-4">Contact Federal Investigators</div>
              <div className="text-sm font-bold text-dark-navy mb-2 underline decoration-emerald-300 decoration-2">cnap-nacc@rcaanc-cirnac.gc.ca</div>
              <div className="text-2xl font-black text-forest-green tracking-tighter">1-855-504-6760</div>
            </div>
            
            <div className="text-[10px] font-bold text-slate-400 opacity-60 uppercase tracking-widest">
              © 2026 Sagkeeng Future Initiative • Information synthesized from public court decisions, statutes, and government publications
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalFramework;
