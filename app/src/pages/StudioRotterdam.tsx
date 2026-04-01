import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Train, Car, ParkingCircle, Accessibility, ArrowRight, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import CTABlock from '../components/CTABlock';
import { pageSEO } from '../lib/seo';

const StudioRotterdam = () => {
  useEffect(() => {
    document.title = pageSEO['studio-rotterdam'].title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageSEO['studio-rotterdam'].description);
    window.scrollTo(0, 0);
  }, []);

  const bereikbaarheid = [
    {
      icon: Train,
      title: 'Met het OV',
      description: 'Metrostation Coolhaven (lijn A, B, C) is op 8 minuten lopen. Vanaf Rotterdam Centraal reis je in 5 minuten.',
    },
    {
      icon: Car,
      title: 'Met de auto',
      description: 'Vanaf de A13 afrit 13 (Overschie) volg je de borden richting Centrum. Gratis parkeren in de buurt.',
    },
    {
      icon: ParkingCircle,
      title: 'Parkeren',
      description: 'Parkeergarage Delfshaven (Schiedamse Vest 89) op 5 minuten lopen. Gratis parkeren op straat na 18:00.',
    },
    {
      icon: Accessibility,
      title: 'Toegankelijkheid',
      description: 'De studio is gelijkvloers en rolstoeltoegankelijk. Er is een ruime lift aanwezig.',
    },
  ];

  const ziekenhuizen = [
    'Erasmus MC',
    'Sophia Kinderziekenhuis',
    'Ikazia Ziekenhuis',
    'Maasstad Ziekenhuis',
    'Sint Franciscus Gasthuis',
  ];

  return (
    <div className="min-h-screen bg-[#F3EFE8]">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-[#4A4239] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/studio/DSC00571.JPG"
            alt="Babycrafts Studio Rotterdam"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A4239]/50 to-[#4A4239]" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
              Onze Locatie
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Studio Rotterdam
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Een warme, intieme ruimte waar jij je volledig op je gemak kunt voelen. 
              Gelegen in het bruisende hart van Rotterdam, gemakkelijk bereikbaar.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://maps.google.com/?q=Hooidrift+108+Rotterdam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#C9A962] text-white font-medium rounded-full hover:bg-[#B8985A] transition-all duration-300"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Open in Google Maps
              </a>
              <Link
                to="/tarieven"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Boek een afspraak
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Adres & Openingstijden */}
      <section className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Adres */}
              <ScrollReveal>
                <div className="bg-[#FAF8F5] rounded-3xl p-8 lg:p-12">
                  <MapPin className="w-12 h-12 text-[#C9A962] mb-6" />
                  <h2 className="font-serif text-2xl lg:text-3xl text-[#4A4239] mb-6">
                    Adres
                  </h2>
                  <div className="space-y-2 text-[#6B5A4D]">
                    <p className="font-medium text-lg text-[#4A4239]">Babycrafts 3D Studio</p>
                    <p>Hooidrift 108</p>
                    <p>3023 KV Rotterdam</p>
                    <p className="text-[#C9A962] font-medium mt-4">Nederland</p>
                  </div>
                  <div className="mt-8 p-4 bg-[#F0EBE3] rounded-xl">
                    <p className="text-sm text-[#6B5A4D]">
                      De studio bevindt zich in de wijk Delfshaven, op loopafstand van de historische 
                      Delfshaven haven en tal van leuke cafés.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Openingstijden */}
              <ScrollReveal delay={0.1}>
                <div className="bg-[#FAF8F5] rounded-3xl p-8 lg:p-12">
                  <Clock className="w-12 h-12 text-[#C9A962] mb-6" />
                  <h2 className="font-serif text-2xl lg:text-3xl text-[#4A4239] mb-6">
                    Openingstijden
                  </h2>
                  <div className="space-y-3">
                    {[
                      { dag: 'Maandag', tijd: '09:00 - 18:00' },
                      { dag: 'Dinsdag', tijd: '09:00 - 18:00' },
                      { dag: 'Woensdag', tijd: '09:00 - 18:00' },
                      { dag: 'Donderdag', tijd: '09:00 - 20:00' },
                      { dag: 'Vrijdag', tijd: '09:00 - 18:00' },
                      { dag: 'Zaterdag', tijd: '10:00 - 16:00' },
                      { dag: 'Zondag', tijd: 'Gesloten' },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center py-2 border-b border-[#D4C8B8] last:border-0"
                      >
                        <span className="text-[#6B5A4D]">{item.dag}</span>
                        <span className={item.tijd === 'Gesloten' ? 'text-[#7D5A4C]' : 'text-[#4A4239] font-medium'}>
                          {item.tijd}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-[#6B5A4D] mt-6">
                    * Afspraken buiten deze tijden zijn op aanvraag mogelijk
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bereikbaarheid */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
                Gemakkelijk Bereikbaar
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#4A4239] mb-6">
                Zo kom je bij ons
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto">
            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {bereikbaarheid.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="bg-[#F0EBE3] rounded-2xl p-8 flex items-start space-x-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#C9A962]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-7 h-7 text-[#C9A962]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#4A4239] mb-2">{item.title}</h3>
                      <p className="text-[#6B5A4D] text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Ziekenhuizen in de buurt */}
      <section className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollReveal>
                <div>
                  <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
                    Dichtbij de Zorg
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#4A4239] mb-6">
                    In het hart van de Rotterdamse zorg
                  </h2>
                  <p className="text-[#6B5A4D] leading-relaxed mb-8">
                    Onze studio is strategisch gelegen nabij de belangrijkste ziekenhuizen van Rotterdam. 
                    Dit maakt het mogelijk om ook op locatie scans te doen voor vrouwen die 
                    (tijdelijk) in het ziekenhuis verblijven.
                  </p>
                  <div className="space-y-3">
                    {ziekenhuizen.map((ziekenhuis, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Star className="w-5 h-5 text-[#C9A962]" />
                        <span className="text-[#4A4239]">{ziekenhuis}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-[#FAF8F5] rounded-3xl p-8">
                  <img
                    src="/images/studio/DSC00508.webp"
                    alt="Babycrafts Studio Interieur"
                    className="w-full aspect-[4/3] object-cover rounded-2xl mb-6"
                  />
                  <p className="text-[#6B5A4D] text-sm">
                    Onze studio is ontworpen met oog voor privacy en comfort. 
                    Een warme, intieme ruimte waar jij volledig jezelf kunt zijn.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-20 lg:py-28 bg-[#4A4239]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                Vind ons op de kaart
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8">
                Hooidrift 108, 3023 KV Rotterdam
              </p>
              <a
                href="https://maps.google.com/?q=Hooidrift+108+Rotterdam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#C9A962] text-white font-medium rounded-full hover:bg-[#B8985A] transition-all duration-300"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Route plannen in Google Maps
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        title="Klaar om jouw zwangerschap vast te leggen?"
        subtitle="Boek nu een afspraak in onze studio"
        buttonText="Bekijk beschikbaarheid"
        buttonLink="/tarieven"
      />

      <Footer />
    </div>
  );
};

export default StudioRotterdam;