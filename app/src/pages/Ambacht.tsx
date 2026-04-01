import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Gem, Award, Users, CheckCircle2, Quote
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import CTABlock from '../components/CTABlock';
import { pageSEO } from '../lib/seo';

const Ambacht = () => {
  useEffect(() => {
    document.title = pageSEO['ambacht'].title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageSEO['ambacht'].description);
    window.scrollTo(0, 0);
  }, []);

  const waarden = [
    {
      icon: Heart,
      title: 'Aandacht',
      description: 'Elk beeldje begint met luisteren. Naar jouw verhaal, je wensen, je bezwaren. Pas dan beginnen we.',
    },
    {
      icon: Gem,
      title: 'Vakmanschap',
      description: 'Ons team bestaat uit geschoolde vakmensen met jarenlange ervaring in 3D technologie en traditioneel ambacht.',
    },
    {
      icon: Award,
      title: 'Kwaliteit',
      description: 'We gebruiken alleen de beste materialen en leveren levenslange garantie op elk beeldje.',
    },
  ];

  const materialen = [
    {
      naam: 'Arte-Lumina',
      type: 'Premium Resin',
      beschrijving: 'Onze meest populaire keuze. Arte-Lumina combineert de precisie van moderne 3D printtechnologie met een luxe, marmerachtige afwerking. Het resultaat voelt zwaar en waardevol aan, met een tijdloze uitstraling die nooit uit de mode raakt.',
      kenmerken: ['Gewicht: 800g - 1.2kg', 'Levenslange kleurgarantie', 'Krasvast', 'UV-bestendig'],
      image: '/images/products/Arte Lumina 1.avif',
    },
    {
      naam: 'Alba-Natura',
      type: 'Houtvezel Composiet',
      beschrijving: 'Voor wie houdt van natuurlijke warmte. Alba-Natura wordt gemaakt van gecertificeerde houtvezels, gebonden met natuurlijke harsen. Elk beeldje heeft een unieke houtnerf, waardoor geen enkel exemplaar hetzelfde is.',
      kenmerken: ['Gewicht: 600g - 900g', '100% FSC-gecertificeerd', 'Biologisch afbreekbaar', 'Warme uitstraling'],
      image: '/images/products/Alba Natura.avif',
    },
    {
      naam: 'Atelier-Bronze',
      type: 'Brons Coating',
      beschrijving: 'Het beste van twee werelden. Een kern van hoogwaardige resin, voorzien van een dikke laag echt brons of koper. Dit geeft het beeldje het gewicht en de uitstraling van een traditioneel brons beeld, tegen een fractie van de kosten.',
      kenmerken: ['Gewicht: 1.5kg - 2.5kg', 'Echte bronslaag', 'Ontwikkelt patina', 'Sculpturaal'],
      image: '/images/products/Atelier Bronze.avif',
    },
    {
      naam: 'Gegoten Brons',
      type: '100% Massief Brons',
      beschrijving: 'Het summum van ons aanbod. Traditioneel bronsgieten met moderne 3D technologie. Elk beeldje wordt individueel gegoten in ons atelier, met de hand afgewerkt en gepatineerd. Een echt erfstuk voor generaties.',
      kenmerken: ['Gewicht: 3kg - 5kg', 'Eeuwigdurend', 'Unieke patina', 'Erfstuk kwaliteit'],
      image: '/images/products/Gegoten Brons gepoetst goud afwerking.avif',
    },
  ];

  const team = [
    {
      naam: 'Lindsay van Rijn',
      rol: 'Oprichter & Lead Designer',
      quote: 'Ik geloof dat elk beeldje een verhaal vertelt. Mijn missie is om dat verhaal zo mooi mogelijk vast te leggen.',
    },
    {
      naam: 'Het Atelier Team',
      rol: 'Vakmensen & Technici',
      quote: 'Samen brengen we meer dan 50 jaar ervaring in 3D technologie, beeldhouwen en ambacht.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3EFE8]">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-[#4A4239] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/products/Gegoten Brons gepoetst goud afwerking.avif"
            alt="Ambacht bij Babycrafts"
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
              Onze Filosofie
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Ambacht & Productie
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Waar moderne technologie en eeuwenoud vakmanschap samenkomen. 
              Elk beeldje wordt met de hand vervaardigd, met aandacht voor elk detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
                Waarom Wij Dit Doen
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#4A4239]">
                Drie pijlers van kwaliteit
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto">
            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {waarden.map((waarde, idx) => (
                <StaggerItem key={idx}>
                  <div className="bg-[#FAF8F5] rounded-2xl p-8 text-center h-full">
                    <div className="w-16 h-16 rounded-2xl bg-[#C9A962]/10 flex items-center justify-center mx-auto mb-6">
                      <waarde.icon className="w-8 h-8 text-[#C9A962]" />
                    </div>
                    <h3 className="font-serif text-2xl text-[#4A4239] mb-4">{waarde.title}</h3>
                    <p className="text-[#6B5A4D] leading-relaxed">{waarde.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Materialen */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
                Onze Materialen
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#4A4239]">
                Geselecteerd op kwaliteit
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto space-y-16">
            {materialen.map((materiaal, idx) => (
              <ScrollReveal key={idx}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                      <img
                        src={materiaal.image}
                        alt={materiaal.naam}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                    <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-2">
                      {materiaal.type}
                    </p>
                    <h3 className="font-serif text-3xl text-[#4A4239] mb-4">{materiaal.naam}</h3>
                    <p className="text-[#6B5A4D] leading-relaxed mb-6">{materiaal.beschrijving}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {materiaal.kenmerken.map((kenmerk, kIdx) => (
                        <div key={kIdx} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-[#C9A962]" />
                          <span className="text-sm text-[#6B5A4D]">{kenmerk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <ScrollReveal>
                <div className="bg-[#4A4239] text-white rounded-3xl p-8 lg:p-12">
                  <Quote className="w-12 h-12 text-[#C9A962] mb-6" />
                  <blockquote className="font-serif text-2xl lg:text-3xl italic mb-8">
                    {team[0].quote}
                  </blockquote>
                  <div>
                    <p className="font-medium">{team[0].naam}</p>
                    <p className="text-white/60 text-sm">{team[0].rol}</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-[#FAF8F5] rounded-3xl p-8 lg:p-12">
                  <Users className="w-12 h-12 text-[#C9A962] mb-6" />
                  <blockquote className="font-serif text-2xl lg:text-3xl text-[#4A4239] italic mb-8">
                    {team[1].quote}
                  </blockquote>
                  <div>
                    <p className="font-medium text-[#4A4239]">{team[1].naam}</p>
                    <p className="text-[#6B5A4D] text-sm">{team[1].rol}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        title="Wil je meer weten over onze materialen?"
        description="We vertellen je graag alles over de mogelijkheden"
        ctaText="Neem contact op"
        ctaLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default Ambacht;