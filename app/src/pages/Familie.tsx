import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Clock, Check } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FAQ from '../components/FAQ';
import CTABlock from '../components/CTABlock';
import { pageSEO } from '../lib/seo';

const Familie = () => {
  useEffect(() => {
    document.title = pageSEO.familie.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', pageSEO.familie.description);
  }, []);

  const faqItems = [
    {
      question: 'Hoeveel personen kunnen er op één beeldje?',
      answer: 'We adviseren maximaal 4-5 personen voor het beste resultaat. Grotere groepen zijn mogelijk maar vereisen maatwerk.',
    },
    {
      question: 'Kan ik met mijn hele gezin komen?',
      answer: 'Absoluut! We maken graag een familiebeeldje. Houd er rekening mee dat grotere groepen iets meer tijd nodig hebben.',
    },
    {
      question: 'Zijn huisdieren ook welkom?',
      answer: 'Ja, je trouwe viervoeter maakt natuurlijk ook deel uit van de familie. We hebben al veel honden (en zelfs katten) gescand!',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Navigation />

      <HeroSection
        variant="product"
        subtitle="Familiebeeldje"
        title="Jullie verhaal, vastgelegd in 3D"
        description="Laat jullie hele gezin vastleggen in een prachtig 3D familiebeeldje. Een uniek erfstuk voor generaties."
        imageUrl="/images/products/Familie beeldje.png"
        ctaText="Bekijk tarieven"
        ctaLink="/tarieven"
      />

      <section className="bg-[#FAF8F5]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Users className="w-16 h-16 text-[#C9A962] mx-auto mb-6" />
              
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-6">
                Samen is waar het begint
              </h2>
              <p className="text-[#3D3229]/70 text-lg leading-relaxed mb-8">
                Een familie is meer dan de som van de delen. Het is de chemie tussen jullie, 
                de lachlijnen, de manier waarop jullie naar elkaar kijken. Een familiebeeldje 
                vangt dit unieke samenspel voor altijd.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { icon: Heart, title: 'Uniek erfstuk', desc: 'Een beeldje dat generaties meegaat' },
                  { icon: Users, title: 'Hele gezin', desc: 'Ook met huisdieren mogelijk' },
                  { icon: Clock, title: '60-90 minuten', desc: 'Ruim de tijd voor iedereen' },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <item.icon className="w-10 h-10 text-[#C9A962] mx-auto mb-4" />
                    <h3 className="font-serif text-xl text-[#3D3229] mb-2">{item.title}</h3>
                    <p className="text-[#3D3229]/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#3D3229] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                Een beeldje voor nu en later
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Stel je voor: over twintig jaar kijk je naar dit beeldje. 
                Je ziet hoe klein je kinderen waren, hoe jullie als gezin samenhingen. 
                De herinneringen komen weer boven.
              </p>

              <ul className="space-y-4">
                {[
                  'Perfect voor jubilea en mijlpalen',
                  'Uniek kerstcadeau voor het hele gezin',
                  'Ook mogelijk met grootouders',
                  'Verschillende poses mogelijk',
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-[#C9A962] mr-3 flex-shrink-0" />
                    <span>{item}</span>
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
              <div className="aspect-square rounded-3xl overflow-hidden bg-[#C9A962]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <blockquote className="font-serif text-2xl italic">
                    "Familie is waar het leven begint en liefde nooit eindigt."
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTABlock
        title="Leg jullie familie vast voor altijd"
        description="Een erfstuk om trots op te zijn"
        ctaText="Bekijk tarieven"
        ctaLink="/tarieven"
      />

      <Footer />
    </div>
  );
};

export default Familie;
