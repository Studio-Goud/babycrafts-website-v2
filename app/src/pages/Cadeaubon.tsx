import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Gift, CheckCircle2, Clock, MessageCircle, Mail, Sparkles, Package
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import CTABlock from '../components/CTABlock';
import { pageSEO } from '../lib/seo';

const Cadeaubon = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  useEffect(() => {
    document.title = pageSEO['cadeaubon'].title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageSEO['cadeaubon'].description);
    window.scrollTo(0, 0);
  }, []);

  const bedragen = [199, 249, 349, 500, 750, 1000];

  const voordelen = [
    {
      icon: Gift,
      title: 'Het perfecte cadeau',
      description: 'Geef iets unieks en persoonlijks dat een leven lang meegaat.',
    },
    {
      icon: Clock,
      title: '3 jaar geldig',
      description: 'De ontvanger heeft alle tijd om de afspraak te plannen.',
    },
    {
      icon: Package,
      title: 'Prachtige verpakking',
      description: 'De cadeaubon wordt geleverd in een luxe geschenkverpakking.',
    },
    {
      icon: Sparkles,
      title: 'Volledige vrijheid',
      description: 'De ontvanger kiest zelf het product, materiaal en moment.',
    },
  ];

  const hoeWerktHet = [
    {
      stap: 1,
      titel: 'Kies het bedrag',
      beschrijving: 'Selecteer een van de vaste bedragen of vraag een custom bedrag aan.',
    },
    {
      stap: 2,
      titel: 'Persoonlijke boodschap',
      beschrijving: 'Voeg een persoonlijke boodschap toe voor de ontvanger.',
    },
    {
      stap: 3,
      titel: 'Wij verzorgen de rest',
      beschrijving: 'De cadeaubon wordt feestelijk verpakt en direct verzonden.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3EFE8]">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-[#4A4239] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4A4239] via-[#5A4A3D] to-[#4A4239]" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-[#C9A962]/20 flex items-center justify-center mx-auto mb-6">
              <Gift className="w-10 h-10 text-[#C9A962]" />
            </div>
            
            <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
              Geef iets bijzonders
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Cadeaubon
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Geef een zwangerschapsbeeldje cadeau - een unieke herinnering die 
              een leven lang meegaat. Het perfecte kraamcadeau of verrassing 
              voor een aanstaande moeder.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {voordelen.map((voordeel, idx) => (
                <StaggerItem key={idx}>
                  <div className="bg-[#FAF8F5] rounded-2xl p-8 text-center h-full">
                    <div className="w-14 h-14 rounded-2xl bg-[#C9A962]/10 flex items-center justify-center mx-auto mb-4">
                      <voordeel.icon className="w-7 h-7 text-[#C9A962]" />
                    </div>
                    <h3 className="font-serif text-xl text-[#4A4239] mb-2">{voordeel.title}</h3>
                    <p className="text-[#6B5A4D] text-sm">{voordeel.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Bedragen */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
                  Kies het bedrag
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#4A4239]">
                  Welk cadeau geef jij?
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {bedragen.map((bedrag) => (
                <button
                  key={bedrag}
                  onClick={() => {
                    setSelectedAmount(bedrag);
                  }}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    selectedAmount === bedrag
                      ? 'border-[#C9A962] bg-[#C9A962]/5'
                      : 'border-[#D4C8B8] bg-white hover:border-[#C9A962]/50'
                  }`}
                >
                  <p className="font-serif text-2xl text-[#4A4239]">€{bedrag}</p>
                  <p className="text-[#6B5A4D] text-sm mt-1">
                    {bedrag === 199 && 'Alba-Natura 14cm'}
                    {bedrag === 249 && 'Arte-Lumina 14cm'}
                    {bedrag === 349 && 'Ouder & Kind'}
                    {bedrag >= 500 && 'Keuzevrij'}
                  </p>
                </button>
              ))}
            </div>

            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 border border-[#D4C8B8]">
                <p className="text-[#6B5A4D] text-center mb-6">
                  Wil je een ander bedrag? Neem contact met ons op voor een custom cadeaubon.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="https://wa.me/31620526806?text=Hi!%20Ik%20wil%20graag%20een%20cadeaubon%20bestellen."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white font-medium rounded-full hover:bg-[#128C7E] transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Bestel via WhatsApp
                  </a>
                  
                  <a
                    href="mailto:info@babycrafts.nl?subject=Cadeaubon%20Bestellen"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#7D5A4C] text-[#7D5A4C] font-medium rounded-full hover:bg-[#7D5A4C] hover:text-white transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Bestel via e-mail
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
                  Zo werkt het
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#4A4239]">
                  In drie stappen naar het perfecte cadeau
                </h2>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {hoeWerktHet.map((stap) => (
                <StaggerItem key={stap.stap}>
                  <div className="bg-[#FAF8F5] rounded-2xl p-8 relative">
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#C9A962] text-white flex items-center justify-center font-serif text-xl">
                      {stap.stap}
                    </div>
                    <h3 className="font-serif text-xl text-[#4A4239] mb-4">{stap.titel}</h3>
                    <p className="text-[#6B5A4D]">{stap.beschrijving}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Info blok */}
      <section className="py-20 lg:py-28 bg-[#4A4239] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-2xl mb-4">Wat krijgt de ontvanger?</h3>
                <ul className="space-y-3">
                  {[
                    'Luxueuze geschenkverpakking',
                    'Cadeaubon met unieke code',
                    'Informatieboekje over het proces',
                    'Voorbeelden van materialen',
                    '3 jaar geldig',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A962]" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl mb-4">Veelgestelde vragen</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-white/90">Kan ik de bon inwisselen voor geld?</p>
                    <p className="text-white/60 text-sm">Nee, cadeaubonnen kunnen alleen worden ingewisseld voor producten.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">Wat als het bedrag niet genoeg is?</p>
                    <p className="text-white/60 text-sm">Het verschil kan altijd bijbetaald worden.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        title="Klaar om iemand te verrassen?"
        description="Bestel nu een cadeaubon en geef een herinnering voor het leven"
        ctaText="Bestel cadeaubon"
        ctaLink="https://wa.me/31620526806?text=Hi!%20Ik%20wil%20graag%20een%20cadeaubon%20bestellen."
      />

      <Footer />
    </div>
  );
};

export default Cadeaubon;