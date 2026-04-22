import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { ChevronUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-earth-orange hover:bg-forest-green text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-40 group"
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
