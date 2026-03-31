import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gift, Heart, Star, ArrowRight, Package } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FAQ from '../components/FAQ';
import CTABlock from '../components/CTABlock';
import { pageSEO } from '../lib/seo';

const Kraamcadeau = () => {
  useEffect(() => {
    document.title = pageSEO.kraamcadeau.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', pageSEO.kraamcadeau.description);
  }, []);

  const faqItems = [
    {
      question: 'Hoe werkt een cadeaubon?',
      answer: 'Je kiest een bedrag en ontvangt een luxe cadeaubon per e-mail of post. De ontvanger kan zelf een afspraak maken op een moment dat uitkomt.',
    },
    {
      question: 'Is er een vervaldatum?',
      answer: 'Nee, onze cadeaubonnen hebben geen vervaldatum. De ontvanger kan op elk moment de afspraak inplannen.',
    },
    {
      question: 'Kan ik een persoonlijk bericht toevoegen?',
      answer: 'Absoluut! We voegen graag een persoonlijk bericht toe aan de cadeaubon voor die extra persoonlijke touch.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Navigation />

      <HeroSection
        variant="product"
        subtitle="Uniek Kraamcadeau"
        title="Het meest persoonlijke cadeau dat je kunt geven"
        description="Geef een 3D beeldje cadeau. Een tastbare herinnering aan een bijzondere periode. Het perfecte kraamcadeau."
        ctaText="Bestel cadeaubon"
        ctaLink="/tarieven#cadeaubon"
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
              <Gift className="w-16 h-16 text-[#C9A962] mx-auto mb-6" />
              
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-6">
                Geef herinneringen cadeau
              </h2>
              <p className="text-[#3D3229]/70 text-lg leading-relaxed mb-8">
                Er zijn cadeaus die snel vergeten worden, en er zijn cadeaus die een leven lang meegaan. 
                Een 3D beeldje is zo'n cadeau. Het is persoonlijk, uniek, en vol emotie.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { icon: Gift, title: 'Makkelijk', desc: 'Online bestellen, direct geleverd' },
                  { icon: Heart, title: 'Persoonlijk', desc: 'Het meest intieme cadeau' },
                  { icon: Star, title: 'Uniek', desc: 'Geen ander cadeau zoals dit' },
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
                Hoe bestel je een cadeaubon?
              </h2>

              <div className="space-y-6">
                {[
                  { step: '1', title: 'Kies een bedrag', desc: 'Vanaf €100, of kies een specifiek product' },
                  { step: '2', title: 'Persoonlijk bericht', desc: 'Voeg een lief bericht toe voor de ontvanger' },
                  { step: '3', title: 'Direct geleverd', desc: 'Per e-mail direct, of per post in luxe verpakking' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#C9A962] flex items-center justify-center flex-shrink-0">
                      <span className="font-medium">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl p-8 text-center">
                <Package className="w-16 h-16 text-[#C9A962] mx-auto mb-6" />
                
                <h3 className="font-serif text-2xl text-[#3D3229] mb-4">
                  Luxe cadeauverpakking
                </h3>
                
                <p className="text-[#3D3229]/70 mb-6">
                  Onze cadeaubonnen worden geleverd in een prachtige verpakking, 
                  klaar om gegeven te worden.
                </p>

                <Link to="/tarieven#cadeaubon" className="btn-primary inline-flex w-full justify-center">
                  Bestel nu
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTABlock
        title="Geef het perfecte kraamcadeau"
        description="Een cadeau dat nooit vergeten wordt"
        ctaText="Bestel cadeaubon"
        ctaLink="/tarieven#cadeaubon"
      />

      <Footer />
    </div>
  );
};

export default Kraamcadeau;
