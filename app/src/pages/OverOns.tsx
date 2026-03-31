import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import CTABlock from '../components/CTABlock';
import { pageSEO } from '../lib/seo';

const OverOns = () => {
  useEffect(() => {
    document.title = pageSEO.overOns.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', pageSEO.overOns.description);
  }, []);

  const testimonials = [
    {
      quote: 'Lindsay heeft iets unieks. Ze weet precies hoe ze mensen op hun gemak stelt en het resultaat is altijd adembenemend.',
      name: 'Anna de Vries',
      location: 'Rotterdam',
      rating: 5,
    },
    {
      quote: 'De aandacht voor detail is ongelooflijk. Mijn beeldje is nog mooier dan ik had durven dromen.',
      name: 'Maria Jansen',
      location: 'Den Haag',
      rating: 5,
    },
    {
      quote: 'Niet alleen een prachtig product, maar ook een geweldige ervaring. Lindsay denkt echt met je mee.',
      name: 'Lisa Bakker',
      location: 'Delft',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Navigation />

      {/* Header */}
      <section className="bg-[#3D3229] text-white pt-32 pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-3">
              Onze Story
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Over Babycrafts
            </h1>
            <p className="text-white/70 text-lg">
              Waar kunst, techniek en emotie samenkomen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-[#FAF8F5]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Heart className="w-16 h-16 text-[#C9A962] mb-6" />
              
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-6">
                Het begon met een idee
              </h2>
              <p className="text-[#3D3229]/70 leading-relaxed mb-6">
                Babycrafts begon met een simpele vraag: hoe kunnen we de meest bijzondere momenten 
                in het leven vastleggen op een manier die echt blijft? Foto's vervagen, video's raken 
                zoek, maar een tastbaar beeldje... dat blijft.
              </p>
              <p className="text-[#3D3229]/70 leading-relaxed mb-6">
                Wat begon als een experiment is uitgegroeid tot een passie. Inmiddels hebben we 
                meer dan 1300 zwangerschappen vastgelegd, elk met dezelfde aandacht en liefde 
                als de eerste.
              </p>
              <p className="text-[#3D3229]/70 leading-relaxed">
                We combineren de nieuwste 3D-scantechnologie met traditioneel vakmanschap. 
                Elk beeldje wordt met de hand afgewerkt in ons atelier in Rotterdam. 
                Geen massaproductie, maar unieke kunstwerken.
              </p>
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
                  <div className="text-center p-8">
                    <div className="font-serif text-6xl text-[#C9A962] mb-4">1300+</div>
                    <p className="text-[#3D3229]">Tevreden klanten</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#C9A962] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <h2 className="font-serif text-3xl md:text-4xl">
              Waar we voor staan
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Heart, 
                title: 'Aandacht', 
                desc: 'Elke klant is uniek, en dat behandelen we zo. Geen standaard aanpak, maar persoonlijke aandacht.' 
              },
              { 
                icon: Award, 
                title: 'Kwaliteit', 
                desc: 'We werken alleen met de beste materialen en technieken. Geen shortcuts, alleen vakmanschap.' 
              },
              { 
                icon: Users, 
                title: 'Vertrouwen', 
                desc: 'We begrijpen dat dit intiem is. Je bent bij ons in goede handen, van scan tot oplevering.' 
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="werkwijze" className="bg-[#F5F1EB]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-3">
              Onze Werkwijze
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229]">
              Van scan tot kunstwerk
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Kennismaking', desc: 'We beginnen met een gesprek. Wat is je wens? Waar voel je je prettig bij? We bekijken samen verschillende poses.' },
              { step: '02', title: 'De Scan', desc: 'De 3D-scan is snel, veilig en comfortabel. Binnen enkele minuten hebben we alle data die we nodig hebben.' },
              { step: '03', title: 'Nabewerking', desc: 'Onze experts optimaliseren het 3D-model. We verwijderen oneffenheden en verfijnen details.' },
              { step: '04', title: 'Productie', desc: 'Je beeldje wordt geprint in het gekozen materiaal en daarna met de hand afgewerkt.' },
              { step: '05', title: 'Oplevering', desc: 'Het eindresultaat wordt zorgvuldig verpakt en bij je afgeleverd - een moment om nooit te vergeten.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-8"
              >
                <div className="flex-shrink-0">
                  <span className="font-serif text-4xl text-[#C9A962]/30">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#3D3229] mb-2">{item.title}</h3>
                  <p className="text-[#3D3229]/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials items={testimonials} />

      <CTABlock
        title="Klaar om jouw verhaal vast te leggen?"
        description="We kijken ernaar uit je te ontmoeten"
        ctaText="Boek je Afspraak"
        ctaLink="/tarieven"
      />

      <Footer />
    </div>
  );
};

export default OverOns;
