import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { ChevronRight, List } from 'lucide-react';

/**
 * FloatingNav component provides a vertical, fixed-position sidebar for internal 
 * section navigation on the home page.
 * Collapses to a thin "scroll bar" strip by default to avoid obscuring content.
 * Expands for 5 seconds when tapped or hovered.
 * 
 * @returns {JSX.Element} The floating navigation component.
 */
const FloatingNav: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const timerRef = useRef<number | null>(null);

  const navLinks = [
    { title: 'Audit Intro', to: 'section-1' },
    { title: 'Demographics', to: 'section-2' },
    { title: 'Financial Overview', to: 'section-3' },
    { title: 'TLE Mismanagement', to: 'section-4' },
    { title: 'Housing Crisis', to: 'section-6' },
    { title: 'Leadership & Salaries', to: 'section-7' },
  ];

  const expand = () => {
    setIsExpanded(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setIsExpanded(false);
    }, 5000);
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isExpanded) {
      setIsExpanded(false);
      if (timerRef.current) clearTimeout(timerRef.current);
    } else {
      expand();
    }
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div 
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ease-in-out hidden xl:block ${
        isExpanded ? 'translate-x-4' : '-translate-x-[calc(100%-12px)]'
      }`}
      aria-label="Section Navigation"
    >
      <div 
        onClick={handleToggle}
        className={`group bg-white/90 backdrop-blur-md rounded-r-2xl shadow-2xl border-y border-r border-forest-green/20 flex transition-all duration-500 ${
          isExpanded ? 'p-4' : 'p-0 h-48 w-8 items-center justify-end cursor-pointer hover:bg-forest-green hover:w-10'
        }`}
      >
        {!isExpanded ? (
          <div className="flex flex-col items-center gap-2 text-forest-green group-hover:text-white transition-colors">
            <List className="h-4 w-4 rotate-90" />
            <span className="text-[10px] font-black uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">
              Audit Navigation
            </span>
            <ChevronRight className="h-4 w-4" />
          </div>
        ) : (
          <div className="flex flex-col gap-2 min-w-[180px]">
            <div className="flex items-center justify-between mb-2 px-2">
              <p className="text-[10px] font-black text-forest-green/40 uppercase tracking-widest">
                Audit Sections
              </p>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
                className="text-forest-green/40 hover:text-forest-green"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
              </button>
            </div>
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onClick={() => {
                  // Keep expanded for a bit after click so user sees the active state
                  expand();
                }}
                activeClass="bg-earth-orange text-white shadow-md scale-105"
                className="px-4 py-2 rounded-xl text-xs font-bold text-forest-green hover:bg-soft-sage transition-all cursor-pointer whitespace-nowrap"
                aria-label={`Scroll to ${link.title}`}
              >
                {link.title}
              </ScrollLink>
            ))}
            <div className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
               <div className="h-full bg-earth-orange animate-[shrink_5s_linear_forwards]" key={Date.now()} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingNav;
