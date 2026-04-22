import React from 'react';
import type { ReportSection as IReportSection } from '../data/reportData';
import { citations } from '../data/reportData';
import { RevenueDebtTrend, BudgetVariance, ConstructionBreakdown, CouncilRemuneration } from './FinancialCharts';
import { ExternalLink, ShieldCheck } from 'lucide-react';

interface Props {
  section: IReportSection;
}

/**
 * ReportSection component dynamically renders audit content based on structured data.
 * Handles paragraphs, headings, lists, tables, and interactive charts with 100% text fidelity.
 */
const ReportSection: React.FC<Props> = ({ section }) => {
  const renderChart = (type: string) => {
    switch (type) {
      case 'revenue-debt': return <RevenueDebtTrend />;
      case 'budget-variance': return <BudgetVariance />;
      case 'construction-pie': return <ConstructionBreakdown />;
      case 'council-salary': return <CouncilRemuneration />;
      default: return null;
    }
  };

  const renderTextWithCitations = (text: string) => {
    // Detect URLs in parentheses: (https://...)
    // Also handles multiple URLs: (https://url1, https://url2)
    const regex = /\((https?:\/\/[^\)]+)\)/g;
    const parts = text.split(regex);
    
    if (parts.length === 1) return text;

    return parts.map((part, index) => {
      // If part is a URL list (it was captured by regex)
      if (part.startsWith('http')) {
        const urls = part.split(',').map(u => u.trim());
        return (
          <span key={index} className="inline-flex flex-wrap gap-2 ml-1 text-sm align-baseline">
            {urls.map((url, uIdx) => {
              const citation = citations.find(c => c.url === url);
              return (
                <span key={uIdx} className="inline-flex items-center bg-soft-sage/20 border border-soft-sage px-2 py-0.5 rounded-md group hover:border-earth-orange transition-all">
                  <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-forest-green hover:text-earth-orange transition-colors font-bold mr-2"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Source
                  </a>
                  {citation?.archiveUrl && (
                    <a 
                      href={citation.archiveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-earth-orange hover:text-orange-600 font-bold border-l border-soft-sage pl-2"
                      title={`Archived on ${citation.archiveDate}`}
                    >
                      <ShieldCheck className="h-3 w-3 mr-1" />
                      Archive
                    </a>
                  )}
                </span>
              );
            })}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section id={section.id} className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-b border-gray-200 last:border-0">
      <h2 className="text-3xl font-bold text-forest-green mb-8 border-l-4 border-earth-orange pl-4">
        {section.title}
      </h2>
      
      <div className="space-y-6 text-dark-navy leading-relaxed text-lg">
        {section.content.map((item, idx) => {
          switch (item.type) {
            case 'paragraph':
              return (
                <p key={idx} className="text-gray-800">
                  {renderTextWithCitations(item.text || '')}
                </p>
              );
            
            case 'heading':
              const Tag = `h${item.level || 3}` as keyof React.JSX.IntrinsicElements;
              return (
                <Tag key={idx} className="text-2xl font-bold text-forest-green mt-12 mb-4">
                  {item.text}
                </Tag>
              );

            case 'list':
              return (
                <ul key={idx} className="list-disc pl-6 space-y-2 my-6">
                  {item.items?.map((li, liIdx) => (
                    <li key={liIdx} className="text-gray-700">
                      {renderTextWithCitations(li)}
                    </li>
                  ))}
                </ul>
              );

            case 'table':
              return (
                <div key={idx} className="overflow-x-auto my-10 shadow-lg rounded-xl border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-forest-green">
                      <tr>
                        {item.headers?.map((header, hIdx) => (
                          <th 
                            key={hIdx} 
                            className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {item.rows?.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-soft-sage/30 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td 
                              key={cIdx} 
                              className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                            >
                              {renderTextWithCitations(String(cell))}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );

            case 'chart-placeholder':
              return (
                <div key={idx} className="my-12">
                  {renderChart(item.text || '')}
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
    </section>
  );
};

export default ReportSection;
