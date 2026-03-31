import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Clock, Check, ArrowRight, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FAQ from '../components/FAQ';
import CTABlock from '../components/CTABlock';
import { pageSEO } from '../lib/seo';

const Vastleggen = () => {
  useEffect(() => {
    document.title = pageSEO.vastleggen.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', pageSEO.vastleggen.description);
  }, []);

  const faqItems = [
    {
      question: 'Waarom een 3D beeldje in plaats van foto\'s?',
      answer: 'Foto\'s zijn mooi, maar een 3D beeldje is tastbaar. Je kunt het vasthouden, eromheen lopen, en het voelt alsof je terug bent in dat moment. Het is een kunstwerk dat je leven lang meegaat.',
    },
    {
      question: 'Hoe lang duurt de hele procedure?',
      answer: 'De scan zelf duurt slechts 2-3 minuten. De totale afspraak, inclusief voorbereiding en keuze poses, duurt ongeveer 30-45 minuten. Het beeldje is na 5-6 weken klaar.',
    },
    {
      question: 'Kan ik mijn beeldje ook later nog laten maken?',
      answer: 'Ja, we bewaren de scan data. Ook jaren later kun je nog besluiten om een beeldje te laten maken, of een extra kopie te bestellen.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Navigation />

      <HeroSection
        variant="product"
        subtitle="Zwangerschap Vastleggen"
        title="Niet alles blijft. Dit wel."
        description="Leg je zwangerschap vast op een unieke manier. Een 3D beeldje is een tastbare herinnering die je leven lang meegaat."
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
                <Clock className="w-4 h-4 text-[#C9A962]" />
                <span className="text-[#C9A962] text-sm font-medium">Voor je het weet, is het voorbij</span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-6">
                Vastleggen wat echt telt
              </h2>
              <p className="text-[#3D3229]/70 leading-relaxed mb-6">
                Negen maanden lijkt lang, maar voor je het weet is het voorbij. 
                Je buik groeit, je voelt je baby, en dan plots is het moment voorbij.
              </p>
              <p className="text-[#3D3229]/70 leading-relaxed mb-8">
                Een 3D beeldje vangt dit unieke moment op een manier die geen foto kan. 
                Het is tastbaar, driedimensionaal, en een kunstwerk dat je elke dag kunt zien 
                en vasthouden.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Tastbare herinnering',
                  'Uniek kunstwerk',
                  'Blijft mooi',
                  'Persoonlijk verhaal',
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-white rounded-xl p-4">
                    <Check className="w-5 h-5 text-[#C9A962] mr-3 flex-shrink-0" />
                    <span className="text-[#3D3229]/80">{item}</span>
                  </div>
                ))}
              </div>
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
                  <Camera className="w-20 h-20 text-[#C9A962] mx-auto mb-4" />
                  <blockquote className="font-serif text-2xl italic text-[#3D3229]">
                    "Dit moment verdient
                    <br />
                    meer dan een foto"
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
            <Sparkles className="w-12 h-12 mx-auto mb-6 opacity-50" />
            
            <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed mb-8">
              "Wat groeit in je buik, 
              <br />
              verdient een plek in je leven."
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tarieven" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#C9A962] font-medium rounded-full hover:bg-[#FAF8F5] transition-colors">
                Bekijk tarieven
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/eerste-zwangerschap-beeldje" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors">
                Meer informatie
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTABlock
        title="Leg je zwangerschap vast"
        description="Voor het te laat is"
        ctaText="Boek je Afspraak"
        ctaLink="/tarieven"
      />

      <Footer />
    </div>
  );
};

export default Vastleggen;
