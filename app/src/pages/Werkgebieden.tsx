import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Car, Home, Building2, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import CTABlock from '../components/CTABlock';
import { pageSEO } from '../lib/seo';

const Werkgebieden = () => {
  useEffect(() => {
    document.title = pageSEO.werkgebieden?.title || 'Werkgebieden | Babycrafts 3D - Zwangerschapsbeeldjes in Zuid-Holland';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', pageSEO.werkgebieden?.description || 'Wij komen thuis bij je langs in Rotterdam, Den Haag, Delft en omgeving. Bekijk onze voorrijdkosten en plan jouw afspraak.');
  }, []);

  const serviceAreas = [
    {
      name: 'Rotterdam',
      type: 'studio',
      cost: 0,
      description: 'Bezoek onze studio in Rotterdam-Delfshaven',
      time: 'Gratis',
      popular: true
    },
    {
      name: 'Ridderkerk',
      type: 'thuis',
      cost: 29.99,
      description: 'Thuisbezoek in Ridderkerk',
      time: '€29,99 voorrijdkosten'
    },
    {
      name: 'Barendrecht',
      type: 'thuis',
      cost: 29.99,
      description: 'Thuisbezoek in Barendrecht',
      time: '€29,99 voorrijdkosten'
    },
    {
      name: 'Den Haag',
      type: 'thuis',
      cost: 29.99,
      description: 'Thuisbezoek in Den Haag en omgeving',
      time: '€29,99 voorrijdkosten',
      popular: true
    },
    {
      name: 'Delft',
      type: 'thuis',
      cost: 29.99,
      description: 'Thuisbezoek in Delft',
      time: '€29,99 voorrijdkosten'
    },
    {
      name: 'Utrecht',
      type: 'thuis',
      cost: 49.95,
      description: 'Thuisbezoek in Utrecht en omgeving',
      time: '€49,95 voorrijdkosten'
    },
    {
      name: 'Amsterdam',
      type: 'thuis',
      cost: 49.95,
      description: 'Thuisbezoek in Amsterdam (randje zuid)',
      time: '€49,95 voorrijdkosten'
    },
    {
      name: 'Breda',
      type: 'thuis',
      cost: 49.95,
      description: 'Thuisbezoek in Breda en omgeving',
      time: '€49,95 voorrijdkosten'
    }
  ];

  const hospitals = [
    { name: 'Erasmus MC', city: 'Rotterdam' },
    { name: 'Maasstad Ziekenhuis', city: 'Rotterdam' },
    { name: 'Franciscus Gasthuis', city: 'Rotterdam' },
    { name: 'Ikazia Ziekenhuis', city: 'Rotterdam' },
    { name: 'HagaZiekenhuis', city: 'Den Haag' },
    { name: 'Westeinde Ziekenhuis', city: 'Den Haag' },
    { name: 'Reinier de Graaf', city: 'Delft' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navigation />
      
      {/* Hero */}
      <section className="relative bg-[#4A4239] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <span className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4 block">
              Werkgebieden
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Jouw zwangerschap vastleggen<br />
              <span className="text-[#C9A962]">waar jij dat wilt</span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Studio in Rotterdam, thuisbezoek in heel Zuid-Holland. 
              Van Delft tot Amsterdam, van Utrecht tot Breda.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/tarieven"
                className="inline-flex items-center px-8 py-4 bg-[#C9A962] text-white rounded-full font-medium hover:bg-[#B8984F] transition-colors"
              >
                Bekijk tarieven
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="https://calendly.com/babycrafts-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                Direct boeken
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-4">
                Waar komen wij?
              </h2>
              <p className="text-[#7D7166] max-w-2xl mx-auto">
                Kies wat jou het beste past: bezoek onze studio in Rotterdam 
                of wij komen bij je thuis.
              </p>
            </div>

            {/* Cost Legend */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#C9A962]"></div>
                <span className="text-sm text-[#7D7166]">Gratis (studio)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#7D5A4C]"></div>
                <span className="text-sm text-[#7D7166]">€29,99 (thuis)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#4A4239]"></div>
                <span className="text-sm text-[#7D7166]">€49,95 (verder)</span>
              </div>
            </div>

            {/* Areas Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                    area.cost === 0 
                      ? 'bg-[#C9A962]/10 border-[#C9A962]' 
                      : area.cost === 29.99 
                        ? 'bg-[#7D5A4C]/5 border-[#7D5A4C]/30 hover:border-[#7D5A4C]'
                        : 'bg-white border-[#D4C8B8] hover:border-[#4A4239]/30'
                  }`}
                >
                  {area.popular && (
                    <span className="absolute -top-3 left-4 px-3 py-1 bg-[#C9A962] text-white text-xs font-medium rounded-full">
                      Populair
                    </span>
                  )}
                  
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-lg ${
                      area.cost === 0 ? 'bg-[#C9A962]' : 'bg-[#F5F0E8]'
                    }`}>
                      {area.type === 'studio' ? (
                        <Building2 className={`w-5 h-5 ${area.cost === 0 ? 'text-white' : 'text-[#7D5A4C]'}`} />
                      ) : (
                        <Home className={`w-5 h-5 ${area.cost === 0 ? 'text-white' : 'text-[#7D5A4C]'}`} />
                      )}
                    </div>
                    <span className={`font-serif text-xl ${
                      area.cost === 0 ? 'text-[#C9A962]' : 'text-[#7D5A4C]'
                    }`}>
                      {area.cost === 0 ? 'Gratis' : `€${area.cost}`}
                    </span>
                  </div>
                  
                  <h3 className="font-medium text-[#3D3229] text-lg mb-1">{area.name}</h3>
                  <p className="text-sm text-[#7D7166] mb-3">{area.description}</p>
                  
                  <div className="flex items-center gap-1 text-xs text-[#7D7166]">
                    <Car className="w-3 h-3" />
                    <span>{area.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ziekenhuizen */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4 block">
                Ziekenhuisbezoek
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-4">
                Ook bij jouw ziekenhuis
              </h2>
              <p className="text-[#7D7166] max-w-2xl mx-auto">
                Speciale afspraken mogelijk bij deze ziekenhuizen in de regio. 
                We komen naar je toe voor een scan op locatie.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hospitals.map((hospital, index) => (
                <motion.div
                  key={hospital.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#D4C8B8]"
                >
                  <div className="p-2 bg-[#7D5A4C]/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-[#7D5A4C]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#3D3229]">{hospital.name}</p>
                    <p className="text-sm text-[#7D7166]">{hospital.city}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#D4C8B8]">
              <h2 className="font-serif text-2xl md:text-3xl text-[#3D3229] mb-8 text-center">
                Veelgestelde vragen over locaties
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    q: 'Wat is het verschil tussen studio en thuis?',
                    a: 'In onze studio in Rotterdam hebben we alle apparatuur optimaal staan. Bij een thuisbezoek nemen we een compacte scanner mee. De kwaliteit is gelijk, maar in de studio hebben we meer controle over licht en omgeving.'
                  },
                  {
                    q: 'Hoe werkt het met voorrijdkosten?',
                    a: 'Voor Rotterdam, Ridderkerk, Barendrecht, Den Haag en Delft rekenen we €29,99 voorrijdkosten. Voor andere locaties zoals Utrecht, Amsterdam en Breda is dit €49,95. Dit wordt bij de boeking duidelijk vermeld.'
                  },
                  {
                    q: 'Kan ik ook in het ziekenhuis gescand worden?',
                    a: 'Ja, in overleg met sommige ziekenhuizen is dit mogelijk. Neem contact met ons op voor de mogelijkheden. Dit is vooral relevant bij medische indicaties.'
                  },
                  {
                    q: 'Hoelang duurt een afspraak?',
                    a: 'Een scan duurt ongeveer 15-20 minuten. Inclusief voorbereiding en nabespreking reken je op 30-45 minuten totaal.'
                  }
                ].map((item, i) => (
                  <div key={i} className="border-b border-[#D4C8B8] pb-6 last:border-0 last:pb-0">
                    <h3 className="font-medium text-[#3D3229] mb-2">{item.q}</h3>
                    <p className="text-[#7D7166]">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        title="Klaar om jouw zwangerschap vast te leggen?"
        description="Kies jouw locatie en plan direct een afspraak. We komen naar je toe of je bezoekt onze studio in Rotterdam."
        ctaText="Plan jouw afspraak"
        ctaLink="https://calendly.com/babycrafts-info/30min"
      />

      <Footer />
    </div>
  );
};

export default Werkgebieden;