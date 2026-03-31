import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Heart, Gift, Check } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FAQ from '../components/FAQ';
import CTABlock from '../components/CTABlock';
import { pageSEO } from '../lib/seo';

const EersteZwangerschap = () => {
  useEffect(() => {
    document.title = pageSEO.eersteZwangerschap.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', pageSEO.eersteZwangerschap.description);
  }, []);

  const faqItems = [
    {
      question: 'Is dit anders dan een normaal zwangerschapsbeeldje?',
      answer: 'Nee, het proces is hetzelfde. Maar we begrijpen dat je eerste zwangerschap extra bijzonder is. We nemen daarom extra tijd voor je en helpen je bij elke keuze.',
    },
    {
      question: 'Kan ik een cadeaubon vragen als kraamcadeau?',
      answer: 'Absoluut! Veel aanstaande moeders vragen een cadeaubon voor een 3D beeldje. Het is het meest persoonlijke cadeau dat je kunt krijgen.',
    },
    {
      question: 'Wanneer is het beste moment om te scannen?',
      answer: 'Tussen week 28 en 36 is ideaal. Je buik is dan mooi rond, maar je voelt je nog comfortabel genoeg voor een scan.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Navigation />

      <HeroSection
        variant="product"
        subtitle="Eerste Zwangerschap"
        title="Je eerste keer, onze zorg"
        description="Je eerste zwangerschap verdient iets bijzonders. Laat dit unieke moment vastleggen in een prachtig 3D beeldje."
        ctaText="Bekijk tarieven"
        ctaLink="/tarieven"
      />

      <section className="bg-[#FAF8F5]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A962]/10 rounded-full mb-6">
                <Star className="w-4 h-4 text-[#C9A962]" />
                <span className="text-[#C9A962] text-sm font-medium">Speciaal voor eerste keer moeders</span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-6">
                Een moment dat je nooit meer vergeet
              </h2>
              <p className="text-[#3D3229]/70 leading-relaxed mb-6">
                De eerste zwangerschap is magisch. Alles is nieuw, alles is bijzonder. 
                Je voelt je baby voor het eerst, ziet je buik groeien, droomt van de toekomst.
              </p>
              <p className="text-[#3D3229]/70 leading-relaxed mb-8">
                We begrijpen hoe bijzonder dit is. Daarom nemen we extra tijd voor je eerste scan, 
                leggen we alles rustig uit, en zorgen we ervoor dat je je volledig op je gemak voelt.
              </p>

              <ul className="space-y-4">
                {[
                  'Extra tijd voor je eerste scan',
                  'Persoonlijk advies bij elke keuze',
                  'Rustige, ontspannen sfeer',
                  'Herinnering aan dit unieke moment',
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
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#E8DFC8] flex items-center justify-center">
                <div className="text-center p-8">
                  <Heart className="w-20 h-20 text-[#C9A962] mx-auto mb-4" />
                  <blockquote className="font-serif text-2xl italic text-[#3D3229]">
                    "Eerste keer mama,
                    <br />
                    voor altijd herinnerd"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#C9A962] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Gift className="w-12 h-12 mx-auto mb-6 opacity-50" />
            
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Tip: Vraag het als kraamcadeau
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Een 3D beeldje is het meest persoonlijke kraamcadeau dat je kunt krijgen. 
              Familie en vrienden kunnen bijdragen via een cadeaubon.
            </p>

            <Link to="/tarieven#cadeaubon" className="inline-flex items-center px-8 py-4 bg-white text-[#C9A962] font-medium rounded-full hover:bg-[#FAF8F5] transition-colors">
              <Gift className="w-5 h-5 mr-2" />
              Bekijk cadeaubonnen
            </Link>
          </motion.div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTABlock
        title="Leg je eerste zwangerschap vast"
        description="Een herinnering die je leven lang meegaat"
        ctaText="Bekijk tarieven"
        ctaLink="/tarieven"
      />

      <Footer />
    </div>
  );
};

export default EersteZwangerschap;
