import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, Sparkles, TrendingUp } from 'lucide-react';
import { getDynamicStatueCount } from '../lib/counter';

interface StickyCTAProps {
  calendlyUrl?: string;
}

const StickyCTA = ({ calendlyUrl = 'https://calendly.com/babycrafts-info/30min' }: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showUrgency, setShowUrgency] = useState(false);
  const statueCount = getDynamicStatueCount();

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
                      ✨ {statueCount.toLocaleString('nl-NL')}+ zwangerschappen vastgelegd
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
                {/* Google Reviews Badge */}
                <div className="flex items-center gap-1.5 mb-1">
                  {/* Google G Logo */}
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-xs text-[#3D3229]/80">
                    Al <span className="font-medium text-[#3D3229]">{statueCount.toLocaleString('nl-NL')}+</span> blije ouders
                  </span>
                </div>
                {/* Clickable Price */}
                <Link to="/tarieven" className="font-medium text-[#3D3229] hover:text-[#C9A962] transition-colors">
                  Vanaf €199
                </Link>
              </div>
              
              <button
                onClick={scrollToBooking}
                className="px-6 py-3 bg-[#C9A962] text-white rounded-full font-medium hover:bg-[#B8984F] transition-colors flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Boek nu
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
