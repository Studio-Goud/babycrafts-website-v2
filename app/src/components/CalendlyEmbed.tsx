import { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';

interface CalendlyEmbedProps {
  url?: string;
  prefill?: {
    name?: string;
    email?: string;
  };
  className?: string;
}

const CalendlyEmbed = ({ 
  url = 'https://calendly.com/babycrafts/afspraak', 
  prefill,
  className = '' 
}: CalendlyEmbedProps) => {

  useEffect(() => {
    // Add Calendly stylesheet
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const pageSettings = {
    backgroundColor: 'FAF8F5',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: 'C9A962',
    textColor: '3D3229',
  };

  return (
    <div className={`relative ${className}`}>
      <InlineWidget
        url={url}
        prefill={prefill}
        pageSettings={pageSettings}
        styles={{
          height: '700px',
          minWidth: '320px',
        }}
        utm={{
          utmSource: 'website',
          utmMedium: 'embed',
          utmCampaign: 'booking',
        }}
      />
    </div>
  );
};

export default CalendlyEmbed;
