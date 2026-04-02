import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, MapPin, Check, Shield, Heart, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import CTABlock from '../components/CTABlock';

const Ziekenhuisbezoek = () => {
  useEffect(() => {
    document.title = 'Ziekenhuisbezoek | Babycrafts 3D - Scan op locatie';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Speciale scanafspraken mogelijk in ziekenhuizen in Rotterdam, Den Haag en Delft. Vraag naar de mogelijkheden voor een scan op locatie.');
  }, []);

  const hospitals = [
    {
      name: 'Erasmus MC',
      city: 'Rotterdam',
      description: 'Het grootste academische ziekenhuis van Nederland. Scanning mogelijk bij speciale indicatie.',
      features: ['Medische indicatie mogelijk', 'Centrale locatie', 'Parkeren beschikbaar']
    },
    {
      name: 'Maasstad Ziekenhuis',
      city: 'Rotterdam',
      description: 'Modern ziekenhuis in Rotterdam-Charlois. Goed bereikbaar met OV en auto.',
      features: ['Goede bereikbaarheid', 'Moderne faciliteiten', 'Gratis parkeren']
    },
    {
      name: 'Franciscus Gasthuis',
      city: 'Rotterdam',
      description: 'Persoonlijk ziekenhuis met aandacht voor kwaliteit. Intieme setting voor scans.',
      features: ['Persoonlijke aanpak', 'Rustige omgeving', 'Goede service']
    },
    {
      name: 'HagaZiekenhuis',
      city: 'Den Haag',
      description: 'Groot ziekenhuis in Den Haag met uitgebreide mogelijkheden.',
      features: ['Grote locatie', 'Centraal in Den Haag', 'Uitgebreide parkeergelegenheid']
    },
    {
      name: 'Reinier de Graaf',
      city: 'Delft',
      description: 'Regionaal ziekenhuis met persoonlijke zorg. Dichtbij voor Delft en omgeving.',
      features: ['Dichtbij Delft', 'Persoonlijke zorg', 'Goede bereikbaarheid']
    }
  ];

  const process = [
    {
      title: 'Neem contact op',
      description: 'Vraag naar de mogelijkheden voor een scan in het ziekenhuis. We bespreken samen wat mogelijk is.',
      icon: Phone
    },
    {
      title: 'Afspraak inplannen',
      description: 'We stemmen af met het ziekenhuis en plannen een afspraak op een tijd die jou uitkomt.',
      icon: Building2
    },
    {
      title: 'Scan op locatie',
      description: 'Ik kom naar het ziekenhuis met alle benodigde apparatuur voor de 3D-scan.',
      icon: MapPin
    },
    {
      title: 'Nabespreking',
      description: 'We bekijken het resultaat en bespreken de volgende stappen voor jouw beeldje.',
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navigation />
      
      {/* Hero */}
      <section className="relative bg-[#7D5A4C] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-[#C9A962] mb-4">
              <Building2 className="w-5 h-5" />
              <span className="font-medium text-sm tracking-wider uppercase">Ziekenhuisbezoek</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Ook in het<br />
              <span className="text-[#C9A962]">ziekenhuis</span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Speciale afspraken mogelijk in samenwerking met ziekenhuizen in de regio. 
              Vraag naar de mogelijkheden.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/31620526806"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#C9A962] text-white rounded-full font-medium hover:bg-[#B8984F] transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Vraag mogelijkheden aan
              </a>
              <Link
                to="/werkgebieden"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                Bekijk alle locaties
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Info Block */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#D4C8B8] text-center">
              <div className="inline-flex items-center justify-center p-4 bg-[#7D5A4C]/10 rounded-full mb-6">
                <Shield className="w-8 h-8 text-[#7D5A4C]" />
              </div>
              
              <h2 className="font-serif text-2xl md:text-3xl text-[#3D3229] mb-4">
                In overleg mogelijk
              </h2>
              
              <p className="text-[#7D7166] mb-6 max-w-2xl mx-auto">
                Ziekenhuisscans zijn niet standaard beschikbaar en vereisen altijd overleg. 
                Dit is vooral relevant bij medische indicaties of speciale omstandigheden. 
                Neem contact met ons op om de mogelijkheden te bespreken.
              </p>
              
              <div className="flex items-center justify-center gap-4 text-sm text-[#7D7166]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C9A962]" />
                  <span>Medische indicatie mogelijk</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C9A962]" />
                  <span>In overleg met ziekenhuis</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hospitals */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-4">
                Ziekenhuizen in de regio
              </h2>
              <p className="text-[#7D7166] max-w-2xl mx-auto">
                We werken samen met deze ziekenhuizen voor scans op locatie.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hospitals.map((hospital, index) => (
                <motion.div
                  key={hospital.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-[#D4C8B8] hover:border-[#7D5A4C]/30 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-medium text-[#3D3229] text-lg">{hospital.name}</h3>
                      <p className="text-sm text-[#7D7166]">{hospital.city}</p>
                    </div>
                    <div className="p-2 bg-[#7D5A4C]/10 rounded-lg">
                      <Building2 className="w-5 h-5 text-[#7D5A4C]" />
                    </div>
                  </div>
                  
                  <p className="text-[#7D7166] text-sm mb-4">{hospital.description}</p>
                  
                  <div className="space-y-2">
                    {hospital.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-3 h-3 text-[#C9A962]" />
                        <span className="text-[#7D7166]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-4">
                Hoe werkt het?
              </h2>
              <p className="text-[#7D7166]">
                Een ziekenhuisscan verloopt anders dan een standaard afspraak.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-6 bg-white rounded-2xl border border-[#D4C8B8]"
                >
                  <div className="p-3 bg-[#7D5A4C]/10 rounded-xl h-fit">
                    <step.icon className="w-6 h-6 text-[#7D5A4C]" />
                  </div>
                  
                  <div>
                    <span className="text-xs text-[#C9A962] font-medium">Stap {index + 1}</span>
                    <h3 className="font-medium text-[#3D3229] mt-1 mb-2">{step.title}</h3>
                    <p className="text-sm text-[#7D7166]">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        title="Vraag naar de mogelijkheden"
        description="Neem contact op via WhatsApp om te bespreken of een ziekenhuisscan mogelijk is voor jouw situatie."
        ctaText="Contact via WhatsApp"
        ctaLink="https://wa.me/31620526806"
      />

      <Footer />
    </div>
  );
};

export default Ziekenhuisbezoek;