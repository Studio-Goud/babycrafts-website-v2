import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Baby as BabyIcon, Heart, Sparkles, Check } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FAQ from '../components/FAQ';
import CTABlock from '../components/CTABlock';
import { pageSEO } from '../lib/seo';

const Baby = () => {
  useEffect(() => {
    document.title = pageSEO.baby.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', pageSEO.baby.description);
  }, []);

  const faqItems = [
    {
      question: 'Vanaf welke leeftijd kan mijn baby gescand worden?',
      answer: 'De eerste weken zijn ideaal, wanneer je baby nog veel slaapt en die leuke gekronkelde houdingen heeft. Maar ook oudere baby\'s kunnen prachtig worden vastgelegd.',
    },
    {
      question: 'Is de scan veilig voor mijn pasgeboren baby?',
      answer: 'Ja, de scan gebruikt alleen gestructureerd licht - geen straling, geen lasers, geen warmte. Net zo veilig als een fototoestel.',
    },
    {
      question: 'Wat moet mijn baby aandoen?',
      answer: 'Het liefst zo min mogelijk! Veel ouders kiezen voor een naakte of bijna-naakte scan om die schattige babyrondjes te laten zien.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Navigation />

      <HeroSection
        variant="product"
        subtitle="Babybeeldje"
        title="Die kleine voetjes, die kleine handjes"
        description="Vang de allereerste momenten van je baby in een uniek 3D beeldje. De allerkleinste details, levenslang vastgelegd."
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
              <BabyIcon className="w-16 h-16 text-[#C9A962] mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-6">
                Zo klein, zo perfect
              </h2>
              <p className="text-[#3D3229]/70 leading-relaxed mb-6">
                De eerste dagen met je baby zijn magisch. Die kleine teentjes, dat zachte haar, 
                die blik vol verwondering. Het lijkt alsof ze elke dag al iets groter worden.
              </p>
              <p className="text-[#3D3229]/70 leading-relaxed mb-8">
                Een babybeeldje bewaart deze kostbare momenten voor altijd. 
                Je kunt straks nog voelen hoe klein ze waren, hoe ze in je armen lagen. 
                Een tastbare herinnering aan het begin van het leven.
              </p>

              <ul className="space-y-4">
                {[
                  'Ideaal vanaf de eerste weken',
                  '100% veilig contactloos scannen',
                  'Ook slapende baby\'s mogelijk',
                  'Inclusief professionele nabewerking',
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
                  <Sparkles className="w-20 h-20 text-[#C9A962] mx-auto mb-4" />
                  <p className="font-serif text-2xl text-[#3D3229] mb-2">Newborn</p>
                  <p className="text-[#3D3229]/60">The first moments</p>
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
            className="max-w-3xl mx-auto text-center"
          >
            <Heart className="w-12 h-12 mx-auto mb-6 opacity-50" />
            
            <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed">
              "Kleine voetjes laten grote sporen na in ons hart."
            </blockquote>
          </motion.div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTABlock
        title="Bewaar deze kostbare momenten"
        description="Ze zijn zo snel groot"
        ctaText="Bekijk tarieven"
        ctaLink="/tarieven"
      />

      <Footer />
    </div>
  );
};

export default Baby;
