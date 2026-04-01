import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Award, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { pageSEO } from '../lib/seo';

const OverOns = () => {
  useEffect(() => {
    document.title = pageSEO.overOns.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', pageSEO.overOns.description);
  }, []);

  const values = [
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
      icon: Sparkles, 
      title: 'Vertrouwen', 
      desc: 'We begrijpen dat dit intiem is. Je bent bij ons in goede handen, van scan tot oplevering.' 
    },
  ];

  return (
    <div className="min-h-screen bg-beige">
      <Navigation />

      {/* Hero */}
      <section className="bg-brown-deep text-cream-light pt-32 pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-gold font-medium text-sm tracking-wider uppercase mb-4">
              Over Babycrafts
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Over de Maker van Jouw Zwangerschapsbeeldje
            </h1>
            <p className="text-cream-light/70 text-lg">
              Waar kunst, techniek en emotie samenkomen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Over Lindsay */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div className="relative">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                    <img
                      src="/images/studio/Lindsay portret 2.avif"
                      alt="Lindsay van Rijn - Oprichtster Babycrafts 3D"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-gold rounded-2xl p-6 shadow-xl">
                    <p className="font-serif text-3xl text-white">1300+</p>
                    <p className="text-white/80 text-sm">Beeldjes gerealiseerd</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div>
                  <p className="text-gold font-medium text-sm tracking-wider uppercase mb-4">
                    Welkom
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl text-brown-deep mb-6">
                    Wat bijzonder dat je hier bent
                  </h2>
                  
                  <div className="space-y-4 text-brown/80 leading-relaxed">
                    <p className="text-lg">
                      Mijn naam is Lindsay — kunstenares en oprichtster van Babycrafts 3D.
                    </p>
                    <p>
                      Babycrafts 3D is ontstaan vanuit mijn liefde voor kunst én mijn verlangen om herinneringen tastbaar te maken. In mijn studio help ik mensen om een van de meest betekenisvolle momenten in hun leven vast te leggen in een persoonlijk 3D-beeldje.
                    </p>
                    <p>
                      Elk beeldje begint met jouw verhaal. Of het nu gaat om een zwangerschap, geboorte of herdenking: ik neem de tijd om te luisteren, mee te denken en samen te creëren.
                    </p>
                    <p>
                      Mijn missie is om jouw moment niet alleen vast te leggen, maar recht te doen aan wat het voor jou betekent. Daarom werk ik persoonlijk, zorgvuldig en zonder haast. Jij staat centraal — niet het proces.
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-taupe">
                    <p className="font-serif text-xl text-brown-deep italic">
                      "De 3D-scan is een intiem moment. Ik vind het belangrijk dat jij je veilig en op je gemak voelt. Of je kiest voor een kimono, naakt of bedekt: alles is bespreekbaar. In mijn studio staan rust, respect en vertrouwen altijd voorop."
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Ambacht en Kwaliteit */}
      <section className="py-20 lg:py-28 bg-beige">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div>
                  <p className="text-gold font-medium text-sm tracking-wider uppercase mb-4">
                    Ambacht & Kwaliteit
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl text-brown-deep mb-6">
                    Alle 3D-beeldjes worden met de hand afgewerkt en gepersonaliseerd
                  </h2>
                  
                  <div className="space-y-4 text-brown/80 leading-relaxed">
                    <p>
                      Ik werk met hoogwaardige materialen en technieken om een eindresultaat te creëren dat niet alleen mooi is, maar ook blijvend.
                    </p>
                    <p>
                      Een beeldje van Babycrafts 3D is geen standaard product, maar een kunstwerk met emotionele waarde — gemaakt om een leven lang te koesteren.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {[
                      'Handmatige afwerking',
                      'Premium materialen',
                      'Ambachtelijke bronsgieterij',
                      'Unieke sokkels',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                        <span className="text-brown/70 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="/images/products/Arte Lumina 1.avif"
                      alt="Arte-Lumina beeldje"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden mt-8">
                    <img
                      src="/images/products/Gegoten Brons gepoetst goud afwerking.avif"
                      alt="Gegoten Brons beeldje"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Missie */}
      <section className="py-20 lg:py-28 bg-gold text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
                Mijn doel
              </h2>              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                Jouw verhaal vastleggen in een kunstwerk dat blijft, ook wanneer de tijd verdergaat.
              </p>
              <p className="text-white/70">
                Voel je welkom om contact op te nemen als je samen met mij een herinnering wilt creëren die écht bij jou past.
              </p>

              <div className="mt-10">
                <p className="font-serif text-2xl">Liefs,</p>
                <p className="font-serif text-3xl mt-2">Lindsay</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Waarden */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-gold font-medium text-sm tracking-wider uppercase mb-4">
                Onze Kernwaarden
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-brown-deep">
                Waar we voor staan
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center bg-cream rounded-2xl p-8">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl text-brown-deep mb-3">{item.title}</h3>
                  <p className="text-brown/70">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-beige">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-brown-deep rounded-3xl p-12 lg:p-16 text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-cream-light mb-6">
                Klaar om jouw verhaal vast te leggen?
              </h2>              <p className="text-cream-light/70 text-lg mb-10 max-w-2xl mx-auto">
                We kijken ernaar uit je te ontmoeten en samen een uniek kunstwerk te creëren.
              </p>              <Link
                to="/tarieven"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-medium rounded-full transition-all duration-300 hover:bg-gold-dark hover:shadow-lg"
              >
                Boek je Afspraak
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OverOns;
