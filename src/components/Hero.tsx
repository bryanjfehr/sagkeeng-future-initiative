import React from 'react';
import { Link } from 'react-scroll';
import { ArrowDown, TrendingUp, Users } from 'lucide-react';

/**
 * Hero component serving as the high-impact landing section.
 * Juxtaposes financial liquidity stats with the community's physical reality.
 * 
 * @returns {JSX.Element} The rendered Hero section.
 */
const Hero: React.FC = () => {
  const stats = [
    { label: 'Accumulated Surplus', value: '$86.4M', icon: <TrendingUp className="text-earth-orange" aria-hidden="true" />, detail: 'By end of 2025 FY' },
    { label: 'TLE Settlement', value: '$100M', icon: <Users className="text-earth-orange" aria-hidden="true" />, detail: 'Historic Ratification' },
    { label: 'Admin Overrun', value: '1,000%', icon: <TrendingUp className="text-red-500" aria-hidden="true" />, detail: '2023 Budget Variance' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-forest-green text-white overflow-hidden" aria-label="Introduction">
      {/* Background Graphic Placeholder */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-0 w-64 h-64 bg-earth-orange rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-soft-sage rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              The Liquidity vs. <br />
              <span className="text-earth-orange text-5xl md:text-7xl">Reality Paradox</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Unprecedented capital is flowing into the administrative apparatus, 
              yet community infrastructure remains critically deficient. 
              The numbers tell a story of decoupling that demands accountability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="section-1"
                smooth={true}
                duration={500}
                offset={-80}
                className="bg-earth-orange hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center transition-all cursor-pointer shadow-lg transform hover:-translate-y-1"
                aria-label="Read the full audit report"
              >
                Read the Audit <ArrowDown className="ml-2 h-5 w-5 animate-bounce" aria-hidden="true" />
              </Link>
              <Link
                to="action-center"
                smooth={true}
                duration={500}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-forest-green text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center transition-all cursor-pointer"
                aria-label="Scroll to action center"
              >
                Demand Accountability
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6" role="list" aria-label="Key Statistics">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                role="listitem"
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl flex items-center space-x-6 transform transition-all hover:scale-105"
              >
                <div className="bg-white/10 p-4 rounded-xl">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">{stat.label}</p>
                  <p className="text-3xl md:text-4xl font-black text-white">{stat.value}</p>
                  <p className="text-xs text-earth-orange font-semibold mt-1">{stat.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
