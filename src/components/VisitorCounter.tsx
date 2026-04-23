import React, { useEffect } from 'react';

/**
 * VisitorCounter component that integrates a third-party visitor counter script.
 * Only loads the script on the client side when the component mounts.
 * 
 * @returns {JSX.Element} The rendered visitor counter container.
 */
const VisitorCounter: React.FC = () => {
  useEffect(() => {
    // Prevent duplicate script injection
    if (document.querySelector('script[src*="counter1.optistats.ovh"]')) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://counter1.optistats.ovh/private/counter.js?c=j5ygafxgw76dunypq2juuh673bwx45ze&down=async';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // We don't necessarily want to remove the script on every unmount if it's 
      // supposed to be persistent, but for SPAs it's cleaner to manage.
      // However, if the user navigates back and forth, the script might 
      // need to re-run to target the new div element.
      const existingScript = document.querySelector('script[src*="counter1.optistats.ovh"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 bg-white border-t border-gray-100">
      <div id="sfcj5ygafxgw76dunypq2juuh673bwx45ze" className="min-h-[20px]"></div>
      <noscript>
        <a href="https://www.freecounterstat.com" title="html visitor counter">
          <img 
            src="https://counter1.optistats.ovh/private/freecounterstat.php?c=j5ygafxgw76dunypq2juuh673bwx45ze" 
            style={{ border: 0 }}
            title="html visitor counter" 
            alt="html visitor counter" 
          />
        </a>
      </noscript>
      <a 
        href="https://www.freecounterstat.com" 
        className="text-[10px] text-gray-400 mt-2 hover:text-forest-green transition-colors uppercase tracking-[0.2em] font-medium"
      >
        html visitor counter
      </a>
    </div>
  );
};

export default VisitorCounter;
