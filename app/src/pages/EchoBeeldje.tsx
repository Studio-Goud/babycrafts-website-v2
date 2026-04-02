import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, Shield, Check, Baby } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CTABlock from '../components/CTABlock';
import FAQ from '../components/FAQ';
import TrustBadges from '../components/TrustBadges';

const EchoBeeldje = () => {
  useEffect(() => {
    document.title = '3D Echo Beeldje | Van Echo Foto naar Beeldje | Babycrafts';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Laat je 3D echo vereeuwigen in een prachtig 3D beeldje. Van ultrasound foto naar tastbare herinnering. Ook mogelijk: mama + baby echo beeldje. Vanaf €249.');
  }, []);

  const faqItems = [
    {
      question: 'Kan je van elke 3D echo een beeldje maken?',
      answer: 'We kunnen beeldjes maken van de meeste 3D echo foto\'s, mits ze van goede kwaliteit zijn. De ideale echo is gemaakt tussen week 24-30 van de zwangerschap, wanneer je baby duidelijk zichtbaar is. We beoordelen de echo altijd eerst voordat we beginnen.',
    },
    {
      question: 'Hoe lang duurt het om een echo beeldje te maken?',
      answer: 'De levertijd voor een 3D echo beeldje is 4-5 weken. Dit is iets korter dan een regulier zwangerschapsbeeldje omdat we geen scan-afspraak nodig hebben. We houden je gedurende het proces op de hoogte.',
    },
    {
      question: 'Wat heb ik nodig om een echo beeldje te laten maken?',
      answer: 'Je hebt minimaal één goede 3D echo foto nodig. Hoe meer foto\'s je hebt uit verschillende hoeken, hoe beter we de 3D vorm kunnen reconstrueren. Je kunt de foto\'s eenvoudig uploaden via onze website of per email naar ons toesturen.',
    },
    {
      question: 'Is een echo beeldje ook mooi als ik al bevallen ben?',
      answer: 'Absoluut! Veel moeders kiezen ervoor om een echo beeldje te maken ná de bevalling, als mooie herinnering aan de zwangerschap. Het is ook een prachtig kraamcadeau dat je later aan je kind kunt geven.',
    },
    {
      question: 'Kan ik een beeldje maken met zowel mama als baby op de echo?',
      answer: 'Ja! We kunnen een beeldje maken dat de echo van je baby combineert met een 3D scan van jou. Dit creëert een uniek beeld waarbij je je hand op je buik legt met daarin de echo van je baby. Dit is wel iets complexer en duurt 5-6 weken.',
    },
  ];

  const features = [
    {
      icon: Baby,
      title: 'Van foto naar beeldje',
      description: 'We transformeren je 2D/3D echo foto naar een prachtig 3D beeldje dat je kunt vasthouden.',
    },
    {
      icon: Clock,
      title: 'Snelle levertijd',
      description: 'Binnen 4-5 weken heb je je echo beeldje in huis - sneller dan een reguliere scan.',
    },
    {
      icon: Heart,
      title: 'Perfect kraamcadeau',
      description: 'Geef een echo beeldje cadeau aan een zwangere vriendin, of aan jezelf als herinnering.',
    },
    {
      icon: Shield,
      title: 'Geen scan nodig',
      description: 'Ideaal als je niet in de buurt kunt komen of al bevallen bent.',
    },
  ];

  const pricing = [
    {
      name: 'Echo Solo',
      price: '€249',
      description: 'Een prachtig 3D beeldje van je baby gebaseerd op de echo foto.',
      features: [
        '3D reconstructie van echo',
        'Keuze uit 3 materialen',
        '12-15 cm formaat',
        'Inclusief sokkel',
        '4-5 weken levertijd',
      ],
    },
    {
      name: 'Echo Premium',
      price: '€349',
      description: 'Groot formaat echo beeldje met premium afwerking en details.',
      features: [
        'Gedetailleerde 3D reconstructie',
        'Alle materialen beschikbaar',
        '15-20 cm formaat',
        'Premium natuurstenen sokkel',
        'Digitale preview',
        '4-5 weken levertijd',
      ],
      popular: true,
    },
    {
      name: 'Mama + Echo',
      price: '€449',
      description: 'Combineer je eigen 3D scan met de echo van je baby in één beeldje.',
      features: [
        '3D scan van mama',
        'Echo reconstructie baby',
        'Gecombineerd beeldje',
        'Premium afwerking',
        '20 cm formaat',
        '5-6 weken levertijd',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Navigation />

      <HeroSection
        variant="product"
        subtitle="3D Echo Beeldje"
        title="Van echo foto naar tastbare herinnering"
        description="Laat je 3D echo vereeuwigen in een prachtig beeldje. Een unieke manier om de eerste foto\'s van je baby om te zetten in iets wat je kunt vasthouden, koesteren en doorgeven."
        imageUrl="/images/products/Babybeeldje.avif"
        ctaText="Start je aanvraag"
        ctaLink="/contact"
        secondaryCtaText="Bekijk tarieven"
        secondaryCtaLink="#pricing"
      />

      <TrustBadges />

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-3">
                Waarom een echo beeldje?
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229]">
                De eerste foto\'s, nu tastbaar
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#C9A962]/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-[#C9A962]" />
                  </div>
                  <h3 className="font-medium text-lg text-[#3D3229] mb-2">{feature.title}</h3>
                  <p className="text-[#3D3229]/70 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-[#FAF8F5] py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-3">
                Het proces
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229]">
                Van echo naar beeldje in 4 stappen
              </h2>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Upload je echo foto\'s',
                  description: 'Stuur ons je 3D echo foto\'s via email of WhatsApp. Hoe meer hoeken, hoe beter het resultaat.',
                },
                {
                  step: '02',
                  title: '3D reconstructie',
                  description: 'Wij maken een 3D model van je baby op basis van de echo foto\'s. Je ontvangt een digitale preview ter goedkeuring.',
                },
                {
                  step: '03',
                  title: 'Kies je materiaal',
                  description: 'Kies uit onze collectie materialen: Arte-Lumina, Alba-Natura, of Atelier-Bronze voor je echo beeldje.',
                },
                {
                  step: '04',
                  title: 'Ontvang je beeldje',
                  description: 'Na 4-5 weken ontvang je je prachtige echo beeldje thuis of haal je het op in onze studio.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#C9A962] text-white flex items-center justify-center font-serif text-xl">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-serif text-xl text-[#3D3229] mb-2">{item.title}</h3>
                    <p className="text-[#3D3229]/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-3">
                Tarieven
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229]">
                Kies je echo beeldje
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl p-8 ${
                    plan.popular
                      ? 'bg-[#3D3229] text-white ring-4 ring-[#C9A962]/30'
                      : 'bg-white'
                  }`}
                >
                  {plan.popular && (
                    <div className="inline-block px-3 py-1 bg-[#C9A962] text-white text-xs font-medium rounded-full mb-4">
                      Meest gekozen
                    </div>
                  )}
                  <h3 className={`font-serif text-2xl mb-2 ${plan.popular ? 'text-white' : 'text-[#3D3229]'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.popular ? 'text-white/70' : 'text-[#3D3229]/60'}`}>
                    {plan.description}
                  </p>
                  <p className="text-3xl font-serif text-[#C9A962] mb-6">{plan.price}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-[#C9A962]' : 'text-[#C9A962]'}`} />
                        <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-[#3D3229]/70'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`block w-full text-center py-4 rounded-full font-medium transition-all ${
                      plan.popular
                        ? 'bg-[#C9A962] text-white hover:bg-[#B8984F]'
                        : 'bg-[#7D5A4C] text-white hover:bg-[#6B4E3D]'
                    }`}
                  >
                    Start je aanvraag
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTABlock
        title="Klaar om je echo te vereeuwigen?"
        description="Stuur ons je echo foto's en wij maken er iets bijzonders van."
        ctaText="Start je aanvraag"
        ctaLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default EchoBeeldje;
