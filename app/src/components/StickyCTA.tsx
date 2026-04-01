import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, Sparkles, TrendingUp } from 'lucide-react';

interface StickyCTAProps {
  calendlyUrl?: string;
}

const StickyCTA = ({ calendlyUrl = 'https://calendly.com/babycrafts-info/30min' }: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showUrgency, setShowUrgency] = useState(false);

  useEffect(() => {
    // Show sticky CTA after scrolling past hero
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      
      if (scrollY > heroHeight && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Show urgency message after 30 seconds
    const urgencyTimer = setTimeout(() => {
      setShowUrgency(true);
    }, 30000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(urgencyTimer);
    };
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    // Remember dismissal for 1 hour
    setTimeout(() => setIsDismissed(false), 3600000);
  };

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(calendlyUrl, '_blank');
    }
    
    // Track event
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'sticky_cta_click',
        location: 'sticky_bar'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop Sticky Bar */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-[#E8DFC8] hidden lg:block"
          >
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#C9A962]" />
                    <span className="font-medium text-[#3D3229]">
                      ✨ 1300+ zwangerschappen vastgelegd
                    </span>
                  </div>
                  
                  {showUrgency && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2 text-sm text-[#C9A962]"
                    >
                      <TrendingUp className="w-4 h-4" />
                      <span>Slechts 8 plekken deze maand</span>
                    </motion.div>
                  )}
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#3D3229]/70">
                    Vanaf <span className="font-semibold text-[#3D3229]">€199</span>
                  </span>
                  
                  <button
                    onClick={scrollToBooking}
                    className="px-6 py-2 bg-[#C9A962] text-white rounded-full text-sm font-medium hover:bg-[#B8984F] transition-colors flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Direct boeken
                  </button>
                  
                  <button
                    onClick={handleDismiss}
                    className="p-1 hover:bg-[#F5F1EB] rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-[#3D3229]/50" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Sticky Button */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-md border-t border-[#E8DFC8] lg:hidden"
          >
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <p className="text-xs text-[#3D3229]/70 mb-1">
                  {showUrgency ? '⚡ Slechts 8 plekken deze maand' : '⭐ 5/5 - 1300+ reviews'}
                </p>
                <p className="font-medium text-[#3D3229]">
                  Vanaf €199
                </p>
              </div>
              
              <button
                onClick={scrollToBooking}
                className="px-6 py-3 bg-[#C9A962] text-white rounded-full font-medium hover:bg-[#B8984F] transition-colors flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Boek nu
              </button>
            </div>          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
