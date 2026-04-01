import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

interface WhatsAppChatProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppChat = ({ 
  phoneNumber = '+31620526806',
  message = 'Hoi! Ik heb een vraag over jullie 3D beeldjes.' 
}: WhatsAppChatProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);

  useEffect(() => {
    // Check if user has already interacted with the chat
    const hasInteracted = localStorage.getItem('whatsapp-interacted');
    
    if (!hasInteracted) {
      // Show tooltip after 10 seconds
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
      }, 10000);

      // Hide tooltip after 8 seconds
      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 18000);

      return () => {
        clearTimeout(tooltipTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setShowTooltip(false);
    setHasBeenOpened(true);
    localStorage.setItem('whatsapp-interacted', 'true');
    
    // Track event
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'whatsapp_chat_open'
      });
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleStartChat = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodedMessage}`;
    
    // Track conversion
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'whatsapp_conversation_start'
      });
    }
    
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-20 right-4 z-50 lg:bottom-8">
        <AnimatePresence>
          {showTooltip && !hasBeenOpened && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute bottom-full right-0 mb-3 w-64"
            >
              <div className="bg-white rounded-2xl shadow-xl p-4 border border-[#E8DFC8] relative">
                <button 
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-2 right-2 p-1 hover:bg-[#F5F1EB] rounded-full"
                >
                  <X className="w-4 h-4 text-[#3D3229]/50" />
                </button>
                <p className="text-sm text-[#3D3229] pr-6">
                  💬 Heb je een vraag? We reageren meestal binnen 1 uur!
                </p>
                <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-[#E8DFC8]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={handleOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
          aria-label="Open WhatsApp chat"
        >
          <MessageCircle className="w-7 h-7 text-white fill-white" />
        </motion.button>
      </div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/30 z-50 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-24 right-4 lg:right-8 w-80 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-[#075E54] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Babycrafts 3D</h3>
                    <p className="text-white/70 text-xs">Reageert meestal binnen 1 uur</p>
                  </div>
                </div>
                <button 
                  onClick={handleClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Chat Preview */}
              <div className="p-4 bg-[#E5DDD5] min-h-[200px]">
                <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm max-w-[85%]">
                  <p className="text-sm text-[#3D3229]">
                    Hoi! 👋
                  </p>
                  <p className="text-sm text-[#3D3229] mt-1">
                    Leuk dat je interesse hebt in onze 3D beeldjes! Heb je een vraag over onze producten, prijzen of beschikbaarheid?
                  </p>
                  <p className="text-xs text-[#3D3229]/50 mt-2 text-right">
                    {new Date().toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-[#E8DFC8]">
                <button
                  onClick={handleStartChat}
                  className="w-full py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start WhatsApp chat
                </button>
                <p className="text-xs text-center text-[#3D3229]/50 mt-2">
                  We respecteren je privacy. Je nummer wordt niet opgeslagen.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChat;
