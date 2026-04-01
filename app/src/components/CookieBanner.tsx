import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Shield } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-analytics', 'true');
    localStorage.setItem('cookie-marketing', 'true');
    setIsVisible(false);
    
    // Trigger GTM event
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'cookie_consent_accepted',
        consent_type: 'all'
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    localStorage.setItem('cookie-analytics', 'false');
    localStorage.setItem('cookie-marketing', 'false');
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('cookie-consent', 'essential');
    localStorage.setItem('cookie-analytics', 'false');
    localStorage.setItem('cookie-marketing', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[9998] backdrop-blur-sm"
            onClick={() => setShowDetails(false)}
          />
          
          {/* Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-2xl border-t border-[#E8DFC8]"
          >
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
              {!showDetails ? (
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#C9A962]/10 flex items-center justify-center flex-shrink-0">
                      <Cookie className="w-6 h-6 text-[#C9A962]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-[#3D3229] mb-1">
                        Cookies op Babycrafts.nl
                      </h3>
                      <p className="text-[#3D3229]/70 text-sm max-w-2xl">
                        We gebruiken cookies om je ervaring te verbeteren en om ons websiteverkeer te analyseren. 
                        Door op "Accepteren" te klikken, ga je akkoord met ons gebruik van cookies. 
                        <button 
                          onClick={() => setShowDetails(true)}
                          className="text-[#C9A962] hover:underline font-medium"
                        >
                          Meer informatie
                        </button>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={handleDecline}
                      className="px-4 py-2 text-sm text-[#3D3229]/70 hover:text-[#3D3229] transition-colors"
                    >
                      Weigeren
                    </button>
                    <button
                      onClick={handleAccept}
                      className="px-6 py-2 bg-[#C9A962] text-white rounded-full text-sm font-medium hover:bg-[#B8984F] transition-colors"
                    >
                      Accepteren
                    </button>
                  </div>
                </div>
              ) : (
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-[#C9A962]" />
                      <h3 className="font-serif text-xl text-[#3D3229]">Cookie Voorkeuren</h3>
                    </div>
                    <button 
                      onClick={() => setShowDetails(false)}
                      className="p-2 hover:bg-[#F5F1EB] rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-[#3D3229]/50" />
                    </button>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-[#F5F1EB] rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-[#3D3229]">Noodzakelijk</span>
                        <span className="text-xs bg-[#C9A962] text-white px-2 py-1 rounded">Altijd aan</span>
                      </div>
                      <p className="text-sm text-[#3D3229]/70">
                        Deze cookies zijn essentieel voor het functioneren van de website.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-[#F5F1EB] rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-[#3D3229]">Analytisch</span>
                        <span className="text-xs text-[#3D3229]/50">Optioneel</span>
                      </div>
                      <p className="text-sm text-[#3D3229]/70">
                        Help ons de website te verbeteren door anonieme gebruiksdata te delen.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-[#F5F1EB] rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-[#3D3229]">Marketing</span>
                        <span className="text-xs text-[#3D3229]/50">Optioneel</span>
                      </div>
                      <p className="text-sm text-[#3D3229]/70">
                        Gebruikt voor gepersonaliseerde advertenties en social media.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 justify-end">
                    <button
                      onClick={handleEssentialOnly}
                      className="px-4 py-2 text-sm text-[#3D3229]/70 hover:text-[#3D3229] transition-colors"
                    >
                      Alleen essentiële
                    </button>
                    <button
                      onClick={handleAccept}
                      className="px-6 py-2 bg-[#C9A962] text-white rounded-full text-sm font-medium hover:bg-[#B8984F] transition-colors"
                    >
                      Alle cookies accepteren
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
