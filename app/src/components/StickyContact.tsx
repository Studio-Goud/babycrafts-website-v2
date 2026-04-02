import { useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const StickyContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Hide tooltip after 5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const contactOptions = [
    {
      label: 'WhatsApp',
      value: '+31 6 20526806',
      href: 'https://wa.me/31620526806',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      color: 'bg-[#25D366]',
    },
    {
      label: 'Bel ons',
      value: '+31 6 20526806',
      href: 'tel:+31620526806',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: 'bg-[#7D5A4C]',
    },
    {
      label: 'Mail ons',
      value: 'info@babycrafts.nl',
      href: 'mailto:info@babycrafts.nl',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'bg-[#C9A962]',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip */}
      {showTooltip && !isOpen && (
        <div className="mb-3 bg-white rounded-xl shadow-lg p-4 max-w-xs animate-bounce">
          <p className="text-sm text-[#3D3229] font-medium">
            💬 Vragen? We reageren binnen 1 uur!
          </p>
          <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-white transform rotate-45"></div>
        </div>
      )}

      {/* Expanded Menu */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4">
          <div className="p-4 bg-gradient-to-r from-[#7D5A4C] to-[#5A4A3D] text-white">
            <div className="flex items-center justify-between">
              <span className="font-medium">Contact opnemen</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-white/80 mt-1">Kies hoe je contact wilt</p>
          </div>
          
          <div className="p-2">
            {contactOptions.map((option) => (
              <a
                key={option.label}
                href={option.href}
                target={option.href.startsWith('http') ? '_blank' : undefined}
                rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F5F1EB] transition-colors group"
              >
                <div className={`w-10 h-10 ${option.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  {option.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#3D3229]">{option.label}</p>
                  <p className="text-xs text-[#3D3229]/60">{option.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-[#3D3229] text-white rotate-45' 
            : 'bg-[#25D366] text-white hover:scale-110 hover:shadow-xl'
        }`}
        aria-label={isOpen ? 'Sluit contact menu' : 'Open contact menu'}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>
    </div>
  );
};

export default StickyContact;
