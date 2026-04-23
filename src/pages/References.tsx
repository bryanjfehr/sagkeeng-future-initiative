import React from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';

const References: React.FC = () => {
  const referencesData = [
    {
      fact: "The Economic Development segment was budgeted at $7,713,021 but incurred $13,037,852 in actual expenses, and Public Works was budgeted at $1,109,666 but spent $5,332,617 in the 2023 fiscal year.",
      url: "https://sagkeeng.ca/wp-content/uploads/2023/11/Fort-Alexander-Indian-Band-Sagkeeng-First-Nation-Consolidated-Audit-2023-Package-1.pdf"
    },
    {
      fact: "The $15.3 million spent on administration in 2023 included: $3,375,838 for salaries and benefits; $2,971,012 for amortization; $2,081,071 for repairs and maintenance; $1,701,129 for professional fees and contract work; $1,227,349 for travel and honoraria; and $1,081,546 for COVID-19 expenses.",
      url: "https://sagkeeng.ca/wp-content/uploads/2023/11/Fort-Alexander-Indian-Band-Sagkeeng-First-Nation-Consolidated-Audit-2023-Package-1.pdf"
    },
    {
      fact: "While the 2023 \"Bingo revenues (net of payouts)\" was a negative ($855,520), the exact same line item in 2022 generated a positive $976,602.",
      url: "https://sagkeeng.ca/wp-content/uploads/2023/11/Fort-Alexander-Indian-Band-Sagkeeng-First-Nation-Consolidated-Audit-2023-Package-1.pdf"
    },
    {
      fact: "In the 2025 fiscal year, the Nation held $100.4 million in Tangible Capital Assets, but concurrently carried an unrestricted accumulated deficit of $10,698,054.",
      url: "https://fnp-ppn.aadnc-aandc.gc.ca/fnp/Main/Search/DisplayBinaryData.aspx?BAND_NUMBER_FF=262&FY=2024-2025&DOC=Audited%20consolidated%20financial%20statements&lang=eng"
    },
    {
      fact: "The 2025 audit details a $2,298,598 loan for professional services tied to a 1923–1926 surrender claim, and a $3,717,484 loan to pursue a broader land settlement claim.",
      url: "https://fnp-ppn.aadnc-aandc.gc.ca/fnp/Main/Search/DisplayBinaryData.aspx?BAND_NUMBER_FF=262&FY=2024-2025&DOC=Audited%20consolidated%20financial%20statements&lang=eng"
    },
    {
      fact: "As of March 31, 2025, the total value of \"Construction-in-progress\" for the Nation was $4,620,119.",
      url: "https://fnp-ppn.aadnc-aandc.gc.ca/fnp/Main/Search/DisplayBinaryData.aspx?BAND_NUMBER_FF=262&FY=2024-2025&DOC=Audited%20consolidated%20financial%20statements&lang=eng"
    },
    {
      fact: "The 2025 construction total included $3,567,982 for a Disability Program housing project, $325,755 for an Education Administration Building, and $12,735 for a CMHC Women's Shelter.",
      url: "https://fnp-ppn.aadnc-aandc.gc.ca/fnp/Main/Search/DisplayBinaryData.aspx?BAND_NUMBER_FF=262&FY=2024-2025&DOC=Audited%20consolidated%20financial%20statements&lang=eng"
    },
    {
      fact: "The 2025 audit lists housing Phases 1 through 12 as carrying active mortgages that total approximately $9.4 million.",
      url: "https://fnp-ppn.aadnc-aandc.gc.ca/fnp/Main/Search/DisplayBinaryData.aspx?BAND_NUMBER_FF=262&FY=2024-2025&DOC=Audited%20consolidated%20financial%20statements&lang=eng"
    },
    {
      fact: "In 2021, 53.8% of children in the foster care system were Indigenous.",
      url: "https://afn.ca/economy-infrastructure/infrastructure/closing-the-infrastructure-gap/housing/"
    },
    {
      fact: "The $100 million Treaty Land Entitlement settlement was ratified with 1,857 members voting in favor and 315 against.",
      url: "https://fnp-ppn.aadnc-aandc.gc.ca/fnp/Main/Search/DisplayBinaryData.aspx?BAND_NUMBER_FF=262&FY=2024-2025&DOC=Audited%20consolidated%20financial%20statements&lang=eng"
    },
    {
      fact: "Long Plain First Nation's 1994 TLE Settlement Agreement Trust was dissolved/expired in 2019, with all assets transferred back to the Nation's general control.",
      url: "https://lpband.ca/long-plain-trust/"
    },
    {
      fact: "The $1.3 million in questionable spending uncovered in the 2019 Sagkeeng Health Centre audit included federal health funds used for employees' personal speeding tickets, unwarranted $400 monthly travel allowances paid alongside actual reimbursements, and unsecured cash advances.",
      url: "https://www.cbc.ca/news/canada/manitoba/sagkeeng-health-centre-audit-1.5169275"
    },
    {
      fact: "The Sagkeeng health centre director was previously the COO of the Virginia Fontaine Addictions Treatment Foundation during a 1990s scandal involving millions in misappropriated funds for luxury cruises, escape rooms, and grant \"finders fees\".",
      url: "https://globalnews.ca/news/5377470/director-named-in-sagkeeng-health-centre-audit-was-former-coo-of-virginia-fontaine-addictions-treatment-foundation/"
    },
    {
      fact: "The 2025 financial statements state the Nation failed to comply with the First Nations Financial Transparency Act deadline, as the audit report was not dated until February 17, 2026.",
      url: "https://fnp-ppn.aadnc-aandc.gc.ca/fnp/Main/Search/DisplayBinaryData.aspx?BAND_NUMBER_FF=262&FY=2024-2025&DOC=Audited%20consolidated%20financial%20statements&lang=eng"
    },
    {
      fact: "Sagkeeng First Nation recorded an accumulated operating surplus of over $86.4 million by the end of the 2025 fiscal year.",
      url: "https://fnp-ppn.aadnc-aandc.gc.ca/fnp/Main/Search/DisplayBinaryData.aspx?BAND_NUMBER_FF=262&FY=2024-2025&DOC=Audited%20consolidated%20financial%20statements&lang=eng"
    },
    {
      fact: "A $100 million Treaty Land Entitlement (TLE) settlement with the Government of Canada was ratified by the community.",
      url: "https://fnp-ppn.aadnc-aandc.gc.ca/fnp/Main/Search/DisplayBinaryData.aspx?BAND_NUMBER_FF=262&FY=2024-2025&DOC=Audited%20consolidated%20financial%20statements&lang=eng"
    },
    {
      fact: "The 2019 forensic audit of the Sagkeeng Health Centre uncovered $1.3 million in questionable spending.",
      url: "https://www.cbc.ca/news/canada/manitoba/sagkeeng-health-centre-audit-1.5169275"
    },
    {
      fact: "Sagkeeng First Nation is situated along the Winnipeg River and Traverse Bay in the Eastman Region of Manitoba.",
      url: "https://en.wikipedia.org/wiki/Sagkeeng_First_Nation"
    },
    {
      fact: "The total registered population of Sagkeeng exceeds 8,200 members, with approximately 3,644 residing on-reserve and 4,564 residing off-reserve.",
      url: "https://en.wikipedia.org/wiki/Sagkeeng_First_Nation"
    },
    {
      fact: "Indigenous Services Canada funding reached $70.9 million in the 2024 fiscal year and escalated to $77.5 million in 2025.",
      url: "https://fnp-ppn.aadnc-aandc.gc.ca/fnp/Main/Search/DisplayBinaryData.aspx?BAND_NUMBER_FF=262&FY=2024-2025&DOC=Audited%20consolidated%20financial%20statements&lang=eng"
    },
    {
      fact: "Between 2021 and 2023, the Nation's net debt escalated from $18.2 million to $39.7 million.",
      url: "https://sagkeeng.ca/wp-content/uploads/2023/11/Fort-Alexander-Indian-Band-Sagkeeng-First-Nation-Consolidated-Audit-2023-Package-1.pdf"
    },
    {
      fact: "In the 2023 fiscal year, the Administration segment was budgeted at $1,495,016 but incurred actual expenses of $15,388,756.",
      url: "https://sagkeeng.ca/wp-content/uploads/2023/11/Fort-Alexander-Indian-Band-Sagkeeng-First-Nation-Consolidated-Audit-2023-Package-1.pdf"
    },
    {
      fact: "The Education segment in 2023 was budgeted for $30,897,211 but only recorded $18,892,411 in actual expenses.",
      url: "https://sagkeeng.ca/wp-content/uploads/2023/11/Fort-Alexander-Indian-Band-Sagkeeng-First-Nation-Consolidated-Audit-2023-Package-1.pdf"
    },
    {
      fact: "The \"Bingo revenues (net of payouts)\" line item for 2023 was reported as a negative figure of ($855,520).",
      url: "https://sagkeeng.ca/wp-content/uploads/2023/11/Fort-Alexander-Indian-Band-Sagkeeng-First-Nation-Consolidated-Audit-2023-Package-1.pdf"
    },
    {
      fact: "Independent auditors issued a Qualified Opinion for the 2023 and 2024 fiscal years due to non-compliance with Public Sector Accounting Standard (PSAS) Section PS 3280, Asset Retirement Obligations.",
      url: "https://fnp-ppn.aadnc-aandc.gc.ca/fnp/Main/Search/DisplayBinaryData.aspx?BAND_NUMBER_FF=262&FY=2023-2024&DOC=Audited%20consolidated%20financial%20statements&lang=eng"
    },
    {
      fact: "The Assembly of First Nations estimates over 157,453 new homes are needed immediately across the country to close the Indigenous housing gap.",
      url: "https://afn.ca/economy-infrastructure/infrastructure/closing-the-infrastructure-gap/housing/"
    },
    {
      fact: "As of the 2021 Census, Indigenous populations were nearly three times more likely to live in dwellings requiring major structural repairs (16.4%) compared to the non-Indigenous population (5.7%).",
      url: "https://www12.statcan.gc.ca/census-recensement/2021/as-sa/98-200-X/2021007/98-200-X2021007-eng.cfm"
    },
    {
      fact: "As of March 31, 2025, the general population housing construction allocation (CMHC Phase 13 and 14) was $713,647.",
      url: "https://fnp-ppn.aadnc-aandc.gc.ca/fnp/Main/Search/DisplayBinaryData.aspx?BAND_NUMBER_FF=262&FY=2024-2025&DOC=Audited%20consolidated%20financial%20statements&lang=eng"
    },
    {
      fact: "For the 2024/2025 fiscal year, the Chief's total compensation was $224,858, and total Council compensation was $1,219,385.",
      url: "https://sagkeeng.ca/wp-content/uploads/2025/02/2023-24-Schedule-of-Remuneration-and-Expenses.pdf"
    },
    {
      fact: "Complaints regarding the misuse or misappropriation of federal funding can be securely filed to the Assessment and Investigation Services Branch (AISB) via email to cnap-nacc@rcaanc-cirnac.gc.ca or by phone at 1-855-504-6760.",
      url: "https://www.sac-isc.gc.ca/eng/1291132820288/1603310905799"
    }
  ];

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <BookOpen className="h-16 w-16 text-forest-green mx-auto mb-6" />
          <h1 className="text-4xl font-extrabold mb-4 text-dark-navy">Verified Raw Citations</h1>
          <div className="h-1 w-24 bg-earth-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            An exhaustive, plain-text log of every key fact supporting the forensic audit, paired directly with its full-length source hyperlink for maximum transparency.
          </p>
        </div>

        <div className="space-y-12">
          {referencesData.map((ref, idx) => (
            <div key={idx} className="bg-soft-sage/10 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-lg text-dark-navy font-medium leading-relaxed mb-4">
                "{ref.fact}"
              </p>
              <div className="bg-white p-4 rounded-lg border border-gray-200 break-all flex items-start gap-3">
                <ExternalLink className="h-5 w-5 text-earth-orange shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-500 uppercase tracking-wider text-xs block mb-1">Raw Source:</span>
                  <a 
                    href={ref.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-forest-green hover:text-earth-orange transition-colors font-mono text-sm underline"
                  >
                    {ref.url}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default References;
