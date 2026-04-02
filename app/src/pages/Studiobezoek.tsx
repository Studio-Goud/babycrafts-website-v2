import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, MapPin, Check, Clock, Shield, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import CTABlock from '../components/CTABlock';

const Studiobezoek = () => {
  useEffect(() => {
    document.title = 'Studiobezoek Rotterdam | Babycrafts 3D';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Bezoek onze studio in Rotterdam-Delfshaven voor jouw zwangerschapsscan. Professionele apparatuur, rustige omgeving, optimale resultaten.');
  }, []);

  const benefits = [
    'Professionele scanopstelling',
    'Optimale lichtomstandigheden',
    'Gratis parkeren voor de deur',
    'Rustige, intieme sfeer',
    'Directe nabespreking',
    'Bekijk voorbeelden ter plekke'
  ];

  const whatToExpect = [
    {
      title: 'Warm ontvangst',
      description: 'Je wordt persoonlijk ontvangen door Lindsay in onze studio aan de Hooidrift 108 in Rotterdam.',
      time: '0-5 min'
    },
    {
      title: 'Houding bepalen',
      description: 'Samen bespreken we de gewenste houding en pose voor jouw zwangerschapsbeeldje.',
      time: '5-10 min'
    },
    {
      title: '3D-scan',
      description: 'De scan zelf duurt slechts 2-3 minuten. Je voelt niets, het is volledig contactloos.',
      time: '10-15 min'
    },
    {
      title: 'Nabespreking',
      description: 'We bekijken het resultaat samen en bespreken de vervolgstappen voor jouw beeldje.',
      time: '15-20 min'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navigation />
      
      {/* Hero */}
      <section className="relative bg-[#4A4239] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-[#C9A962] mb-4">
              <Building2 className="w-5 h-5" />
              <span className="font-medium text-sm tracking-wider uppercase">Studio Rotterdam</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Bezoek onze studio<br />
              <span className="text-[#C9A962]">in Rotterdam</span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-2xl mb-8">
              Optimale omstandigheden voor de beste resultaten. 
              Professionele apparatuur, rustige omgeving, persoonlijke aandacht.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://calendly.com/babycrafts-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#C9A962] text-white rounded-full font-medium hover:bg-[#B8984F] transition-colors"
              >
                Boek studio afspraak
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link
                to="/werkgebieden"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                Bekijk thuisopties
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-6">
                  Hooidrift 108, Rotterdam
                </h2>
                
                <p className="text-[#7D7166] mb-6">
                  Onze studio bevindt zich in een karakteristiek pand in Rotterdam-Delfshaven. 
                  Een rustige omgeving waar jij je direct op je gemak voelt.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#C9A962]/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-[#C9A962]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#3D3229]">Adres</p>
                      <p className="text-sm text-[#7D7166]">Hooidrift 108, 3023 KV Rotterdam</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#C9A962]/10 rounded-lg">
                      <Clock className="w-5 h-5 text-[#C9A962]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#3D3229]">Openingstijden</p>
                      <p className="text-sm text-[#7D7166]">Ma-Za: 9:00 - 18:00 (op afspraak)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#C9A962]/10 rounded-lg">
                      <Shield className="w-5 h-5 text-[#C9A962]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#3D3229]">Gratis parkeren</p>
                      <p className="text-sm text-[#7D7166]">Direct voor de deur beschikbaar</p>
                    </div>
                  </div>
                </div>
                
                <a
                  href="https://maps.google.com/?q=Hooidrift+108+Rotterdam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#C9A962] font-medium hover:underline"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Open in Google Maps
                </a>
              </div>
              
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F5F0E8]">
                <img
                  src="/images/studio/DSC00508.webp"
                  alt="Babycrafts Studio Rotterdam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-4">
                Waarom de studio?
              </h2>
              <p className="text-[#7D7166]">
                In onze studio hebben we alles perfect voorbereid voor jouw scan.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl"
                >
                  <div className="p-1 bg-[#C9A962]/10 rounded-full">
                    <Check className="w-4 h-4 text-[#C9A962]" />
                  </div>
                  <span className="text-[#3D3229]">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-4">
                Wat kun je verwachten?
              </h2>
              <p className="text-[#7D7166]">
                Een afspraak duurt ongeveer 30-45 minuten.
              </p>
            </div>

            <div className="space-y-6">
              {whatToExpect.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#C9A962] text-white flex items-center justify-center font-medium">
                      {index + 1}
                    </div>
                    {index < whatToExpect.length - 1 && (
                      <div className="w-0.5 h-full bg-[#D4C8B8] mt-2" />
                    )}
                  </div>
                  
                  <div className="flex-1 pb-8">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-[#3D3229]">{step.title}</h3>
                      <span className="text-sm text-[#7D7166]">{step.time}</span>
                    </div>
                    <p className="text-[#7D7166]">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        title="Boek jouw studio afspraak"
        description="Kies een datum en tijd die jou uitkomt. We ontvangen je graag in onze studio in Rotterdam-Delfshaven."
        ctaText="Plan afspraak"
        ctaLink="https://calendly.com/babycrafts-info/30min"
      />

      <Footer />
    </div>
  );
};

export default Studiobezoek;