import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car, Check, Baby, Clock, Star } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import CTABlock from '../../components/CTABlock';
import TrustBadges from '../../components/TrustBadges';
import CalendlyEmbed from '../../components/CalendlyEmbed';

const Schiedam = () => {
  useEffect(() => {
    document.title = 'Zwangerschapsbeeldje Schiedam | 3D Scan bij Babycrafts';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Zwangerschapsbeeldje laten maken in Schiedam? Babycrafts komt naar je toe! Professionele 3D scans in Schiedam en omgeving. Vanaf €199. Ook thuisafspraken mogelijk.');
  }, []);

  const benefits = [
    'Gratis verzending naar Schiedam',
    'Ook thuisscans mogelijk',
    '5-6 weken levertijd',
    'Persoonlijke begeleiding',
    '1300+ tevreden klanten',
  ];

  const serviceArea = [
    'Schiedam Centrum',
    'Schiedam Nieuwland',
    'Schiedam West',
    'Schiedam Noord',
    'Spaland',
    'Woudhoek',
  ];

  const nearbyCities = [
    { name: 'Vlaardingen', distance: '5 min' },
    { name: 'Rotterdam', distance: '10 min' },
    { name: 'Maassluis', distance: '15 min' },
    { name: 'Rijswijk', distance: '20 min' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Navigation />

      <section className="relative bg-[#3D3229] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D3229] via-[#5A4A3D] to-[#3D3229]" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-24 lg:py-32">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A962]/20 rounded-full text-[#C9A962] text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Schiedam & omgeving
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                Zwangerschapsbeeldje in Schiedam
              </h1>
              
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Woon je in Schiedam en wil je je zwangerschap vastleggen? Babycrafts komt naar je toe! 
                We bieden professionele 3D scans aan huis of je bezoekt onze studio in Rotterdam. 
                Al vanaf €199.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://calendly.com/babycrafts-info/30min"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A962] text-white font-medium rounded-full hover:bg-[#B8984F] transition-all"
                >
                  Boek thuisscan
                </a>
                <a
                  href="/werkgebieden"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-all"
                >
                  Bekijk werkgebied
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8"
            >
              <h2 className="font-serif text-2xl mb-6">Waarom kiezen voor Babycrafts?</h2>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#C9A962] flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Service Area */}
      <section className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-3">
                  Werkgebied
                </p>
                <h2 className="font-serif text-3xl text-[#3D3229] mb-6">
                  We komen naar alle wijken in Schiedam
                </h2>
                
                <p className="text-[#3D3229]/70 mb-8">
                  Of je nu in het centrum woont, in Nieuwland, of in Spaland - we komen graag naar je toe 
                  voor een professionele 3D scan in de vertrouwde omgeving van je eigen huis.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {serviceArea.map((area, index) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2 text-[#3D3229]/70"
                    >
                      <MapPin className="w-4 h-4 text-[#C9A962]" />
                      {area}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-8"
              >
                <h3 className="font-serif text-xl text-[#3D3229] mb-6">
                  Ook actief in de buurt
                </h3>

                <div className="space-y-4">
                  {nearbyCities.map((city) => (
                    <div
                      key={city.name}
                      className="flex items-center justify-between py-3 border-b border-[#E8DFC8] last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <Car className="w-5 h-5 text-[#C9A962]" />
                        <span className="text-[#3D3229]">{city.name}</span>
                      </div>
                      <span className="text-sm text-[#3D3229]/60">{city.distance}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/werkgebieden"
                  className="inline-flex items-center gap-2 mt-6 text-[#C9A962] hover:underline"
                >
                  Bekijk alle werkgebieden
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Thuisscan Info */}
      <section className="bg-[#FAF8F5] py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-3">
                Thuisscan
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229]">
                Liever niet de deur uit?
              </h2>
              <p className="text-[#3D3229]/70 mt-4 max-w-2xl mx-auto">
                We snappen dat je niet altijd zin hebt om de deur uit te gaan, zeker in de laatste weken 
                van je zwangerschap. Daarom komen we graag naar je toe in Schiedam.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Baby,
                  title: 'Comfortabel',
                  description: 'In je eigen vertrouwde omgeving, met je eigen spullen om je heen.',
                },
                {
                  icon: Clock,
                  title: 'Flexibel',
                  description: 'Kies een tijd die jou uitkomt, ook in de avonduren of weekend.',
                },
                {
                  icon: Star,
                  title: 'Persoonlijk',
                  description: 'Extra tijd voor de scan, want er is niemand na je wachtend.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#C9A962]/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-[#C9A962]" />
                  </div>
                  <h3 className="font-serif text-lg text-[#3D3229] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#3D3229]/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-4">
                Plan je afspraak in Schiedam
              </h2>
              <p className="text-[#3D3229]/70">
                Kies een datum die jou uitkomt. We komen naar je toe of je bezoekt onze studio in Rotterdam.
              </p>
            </motion.div>

            <CalendlyEmbed url="https://calendly.com/babycrafts-info/30min" />
          </div>
        </div>
      </section>

      <CTABlock
        title="Klaar voor je zwangerschapsbeeldje?"
        description="Woon je in Schiedam? We komen graag naar je toe voor een professionele 3D scan in je eigen huis."
        ctaText="Boek een thuisscan"
        ctaLink="https://calendly.com/babycrafts-info/30min"
      />

      <Footer />
    </div>
  );
};

export default Schiedam;
