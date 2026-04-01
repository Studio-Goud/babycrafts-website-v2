import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Crown, Gem, Check } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FAQ from '../components/FAQ';
import CTABlock from '../components/CTABlock';
import { pageSEO } from '../lib/seo';

const Schoonheid = () => {
  useEffect(() => {
    document.title = pageSEO.schoonheid.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', pageSEO.schoonheid.description);
  }, []);

  const faqItems = [
    {
      question: 'Is dit alleen voor zwangere vrouwen?',
      answer: 'Absoluut niet! Iedereen is welkom. Vier jezelf, je lichaam, je reis. Of je nu zwanger bent, net bevallen, of gewoon omdat je het verdient.',
    },
    {
      question: 'Kan ik meerdere poses laten maken?',
      answer: 'Ja, tijdens de scan kunnen we verschillende poses verkennen. Je ontvangt na afloop alle scans en kiest welke je wilt laten verwerken.',
    },
    {
      question: 'Is dit geschikt als cadeau?',
      answer: 'Een schoonheidsbeeldje is een prachtig cadeau voor jezelf of iemand die je waardeert. We hebben ook cadeaubonnen beschikbaar.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Navigation />

      <HeroSection
        variant="product"
        subtitle="Schoonheidsbeeldje"
        title="Jezelf vieren, in 3D"
        description="Laat je natuurlijke schoonheid vastleggen in een elegant 3D beeldje. Een kunstwerk van jezelf, om van te genieten."
        ctaText="Bekijk tarieven"
        ctaLink="https://calendly.com/babycrafts-info/30min"
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
              <Crown className="w-16 h-16 text-[#C9A962] mx-auto mb-6" />
              
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-6">
                Je verdient dit
              </h2>
              <p className="text-[#3D3229]/70 text-lg leading-relaxed mb-8">
                Onze lichamen vertellen verhalen. Van kracht, van verandering, van groei. 
                Een schoonheidsbeeldje is een viering van wie je bent, precies zoals je bent.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { icon: Sparkles, title: 'Elegant \u0026 Tijdloos', desc: 'Kunstwerken die nooit uit de mode raken' },
                  { icon: Gem, title: 'Uniek Ontwerp', desc: 'Elk beeldje is speciaal voor jou gemaakt' },
                  { icon: Crown, title: 'Jezelf Vieren', desc: 'Omdat je het verdient' },
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
                Vier jezelf
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Of het nu gaat om een mijlpaal, een transformatie, of gewoon omdat je er zin in hebt - 
                een schoonheidsbeeldje is een manier om jezelf te eren.
              </p>

              <ul className="space-y-4">
                {[
                  'Voor elke lichaamstype en leeftijd',
                  'Artistieke poses naar wens',
                  'Ook geschikt als cadeau',
                  'Discrete en respectvolle aanpak',
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
                    "Schoonheid is hoe je jezelf voelt, 
                    <br />
                    en dat zie je terug."
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTABlock
        title="Vier jezelf met een uniek beeldje"
        description="Je verdient dit"
        ctaText="Bekijk tarieven"
        ctaLink="https://calendly.com/babycrafts-info/30min"
      />

      <Footer />
    </div>
  );
};

export default Schoonheid;
