import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Heart, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FAQ from '../components/FAQ';
import CTABlock from '../components/CTABlock';
import { pageSEO } from '../lib/seo';

const OuderKind = () => {
  useEffect(() => {
    document.title = pageSEO.ouderKind.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', pageSEO.ouderKind.description);
  }, []);

  const faqItems = [
    {
      question: 'Vanaf welke leeftijd kan mijn kind mee?',
      answer: 'Ideaal is tussen 3 maanden en 2 jaar, wanneer je kind nog lekker tegen je aan wil liggen. Oudere kinderen kunnen ook, we zoeken dan samen naar een mooie pose.',
    },
    {
      question: 'Kan ik met meerdere kinderen tegelijk?',
      answer: 'Ja, zeker! We maken ook gezinsbeeldjes. Neem contact met ons op voor de mogelijkheden.',
    },
    {
      question: 'Hoe lang duurt de sessie met kind?',
      answer: 'We nemen iets meer tijd, ongeveer 45-60 minuten, zodat je kind kan wennen en we de juiste moment kunnen vangen.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Navigation />

      <HeroSection
        variant="product"
        subtitle="Ouder \u0026 Kind"
        title="De band tussen ouder en kind"
        description="Vang de speciale band tussen ouder en kind in een uniek 3D beeldje. Een tijdloos aandenken aan jullie verbinding die je leven lang meegaat."
        ctaText="Bekijk tarieven"
        ctaLink="/tarieven"
      />

      {/* Intro Section */}
      <section className="bg-[#FAF8F5]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-3">
                Ouder \u0026 Kind Beeldje
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-6">
                Voor je het weet, is het voorbij
              </h2>
              <p className="text-[#3D3229]/70 leading-relaxed mb-6">
                De eerste maanden met je kind zijn magisch. De manier waarop je kleintje tegen je aan kruipt, 
                dat kleine handje op je huid, die blik vol vertrouwen. 
              </p>
              <p className="text-[#3D3229]/70 leading-relaxed mb-8">
                Een ouder-\u0026-kind beeldje vangt deze intieme momenten voor altijd. 
                Het wordt een tastbare herinnering aan de onvoorwaardelijke liefde tussen jou en je kind.
              </p>

              <ul className="space-y-4">
                {[
                  'Voor moeder \u0026 kind, vader \u0026 kind, of allebei',
                  'Perfect als kraamcadeau',
                  'Inclusief professionele 3D-scan',
                  'Handmatig afgewerkt in ons atelier',
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-[#C9A962] mr-3 flex-shrink-0" />
                    <span className="text-[#3D3229]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#E8DFC8]">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-20 h-20 text-[#C9A962] mx-auto mb-4" />
                    <p className="font-serif text-2xl text-[#3D3229]">Ouder \u0026 Kind</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#3D3229] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Heart className="w-12 h-12 text-[#C9A962] mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl">
              "Wat groeit in je hart, verdient een plek in je leven"
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Samen op de foto', desc: 'Kies een comfortabele pose waarin jij en je kindje dicht bij elkaar zijn.' },
              { title: 'Snelle scan', desc: 'De scan duurt slechts enkele minuten, ideaal voor kleine kinderen.' },
              { title: 'Voor altijd', desc: 'Een beeldje dat je leven lang meegaat en alleen maar waardevoller wordt.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTABlock
        title="Leg jullie band vast voor altijd"
        description="Het perfecte cadeau voor jezelf of iemand die je liefhebt"
        ctaText="Bekijk tarieven"
        ctaLink="/tarieven"
      />

      <Footer />
    </div>
  );
};

export default OuderKind;
