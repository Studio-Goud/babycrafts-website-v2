import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, Shield, Check, Baby, Users, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CTABlock from '../components/CTABlock';
import FAQ from '../components/FAQ';
import TrustBadges from '../components/TrustBadges';

const TweelingBeeldje = () => {
  useEffect(() => {
    document.title = 'Tweeling Zwangerschapsbeeldje | Dubbel Bijzonder | Babycrafts';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Een tweeling zwangerschapsbeeldje is dubbel bijzonder. Leg jullie unieke tweelingzwangerschap vast in een prachtig 3D beeldje. Speciaal voor meerlingzwangerschappen. Vanaf €349.');
  }, []);

  const faqItems = [
    {
      question: 'Wanneer is het beste moment voor een tweeling beeldje?',
      answer: 'Voor een tweeling raden we aan om tussen week 28 en 32 langs te komen. Je buik is dan mooi rond, maar je voelt je meestal nog comfortabel genoeg om te poseren. Na week 32 kan het poseren vermoeiender zijn bij een tweeling.',
    },
    {
      question: 'Kan ik beide baby\'s apart laten zien in het beeldje?',
      answer: 'We kunnen verschillende varianten maken: een beeldje van je buik met beide baby\'s erin (abstract), een beeldje met de echo\'s van beide baby\'s, of twee aparte kleine beeldjes van elke baby. We bespreken graag de mogelijkheden.',
    },
    {
      question: 'Is een tweeling beeldje duurder?',
      answer: 'Ja, een tweeling beeldje vereist meer werk in de nabewerking en is complexer om te printen. Daarom is de prijs iets hoger dan een enkel zwangerschapsbeeldje. Onze tarieven starten bij €349 voor een tweeling beeldje.',
    },
    {
      question: 'Kan ik ook een beeldje maken als ik een drieling verwacht?',
      answer: 'Absoluut! Een drieling is extra bijzonder om vast te leggen. Neem contact met ons op voor de mogelijkheden en een offerte op maat. We hebben ervaring met meerlingzwangerschappen tot wel 4 baby\'s.',
    },
    {
      question: 'Hoe lang duurt de scan voor een tweeling?',
      answer: 'De scan zelf duurt iets langer dan bij een enkele zwangerschap - ongeveer 5-7 minuten. We nemen extra tijd om verschillende poses te proberen en te zorgen dat je je comfortabel voelt met je grotere buik.',
    },
  ];

  const features = [
    {
      icon: Users,
      title: 'Dubbel bijzonder',
      description: 'Een tweelingzwangerschap is uniek. Leg dit dubbele wonder vast in een prachtig beeldje.',
    },
    {
      icon: Heart,
      title: 'Speciale ervaring',
      description: 'We nemen extra tijd voor tweeling scans. Jouw comfort staat voorop met die grotere buik.',
    },
    {
      icon: Shield,
      title: '100% veilig',
      description: 'Onze scan is net zo veilig voor een tweeling als voor een enkele zwangerschap.',
    },
    {
      icon: Sparkles,
      title: 'Unieke herinnering',
      description: 'Een tweeling beeldje is het perfecte cadeau voor jezelf en later voor je kinderen.',
    },
  ];

  const pricing = [
    {
      name: 'Tweeling Classic',
      price: '€349',
      description: 'Een elegant beeldje van je tweelingbuik met subtiele details.',
      features: [
        'Professionele 3D-scan',
        'Speciale tweeling nabewerking',
        '14-16 cm formaat',
        'Keuze uit Arte-Lumina of Alba-Natura',
        'Inclusief sokkel',
        '5-6 weken levertijd',
      ],
    },
    {
      name: 'Tweeling Premium',
      price: '€449',
      description: 'Groot formaat beeldje met extra aandacht voor details.',
      features: [
        'Uitgebreide 3D-scan',
        'Gedetailleerde nabewerking',
        '16-18 cm formaat',
        'Alle materialen beschikbaar',
        'Premium natuurstenen sokkel',
        'Foto\'s tijdens proces',
        '5-6 weken levertijd',
      ],
      popular: true,
    },
    {
      name: 'Tweeling Deluxe',
      price: '€649',
      description: 'Het ultieme tweeling beeldje met brons afwerking.',
      features: [
        'Complete 3D-scan sessie',
        'Maximale detailnabewerking',
        '18-20 cm formaat',
        'Atelier-Bronze afwerking',
        'Exclusieve sokkel',
        'Digitale bestanden',
        '6-7 weken levertijd',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Navigation />

      <HeroSection
        variant="product"
        subtitle="Tweeling Zwangerschapsbeeldje"
        title="Dubbel bijzonder, dubbel mooi"
        description="Een tweelingzwangerschap is een uniek avontuur. Leg dit dubbele wonder vast in een prachtig 3D beeldje dat de bijzonderheid van deze tijd weerspiegelt."
        imageUrl="/images/products/Arte Lumina 1.avif"
        ctaText="Boek je tweeling scan"
        ctaLink="https://calendly.com/babycrafts-info/30min"
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
                Speciaal voor tweelingen
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229]">
                Waarom een tweeling beeldje?
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

      {/* Info Box */}
      <section className="bg-[#FAF8F5] py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#C9A962]/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#C9A962]" />
                </div>
                <h2 className="font-serif text-2xl text-[#3D3229]">
                  Ideaal moment voor een tweeling scan
                </h2>
              </div>

              <p className="text-[#3D3229]/70 leading-relaxed mb-6">
                Bij een tweeling raden we aan om iets eerder te komen dan bij een enkele zwangerschap. 
                De periode tussen week 28 en 32 is ideaal. Je buik is dan mooi rond en je voelt je 
                meestal nog comfortabel genoeg om te poseren. Na week 32 kan het poseren vermoeiender zijn.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#F5F1EB] rounded-xl p-6">
                  <h3 className="font-medium text-[#3D3229] mb-3">Wat kun je verwachten?</h3>
                  <ul className="space-y-2">
                    {[
                      'Extra tijd voor de scan (60-75 min)',
                      'Verschillende poses proberen',
                      'Aandacht voor jouw comfort',
                      'Professionele begeleiding',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#3D3229]/70">
                        <Check className="w-4 h-4 text-[#C9A962] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#F5F1EB] rounded-xl p-6">
                  <h3 className="font-medium text-[#3D3229] mb-3">Extra opties</h3>
                  <ul className="space-y-2">
                    {[
                      'Echo beeldjes van beide baby\'s',
                      'Apart beeldje per baby',
                      'Gezinsopstelling mogelijk',
                      'Thuisscan beschikbaar',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#3D3229]/70">
                        <Check className="w-4 h-4 text-[#C9A962] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
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
                Investering voor jouw tweeling beeldje
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
                    href="https://calendly.com/babycrafts-info/30min"
                    className={`block w-full text-center py-4 rounded-full font-medium transition-all ${
                      plan.popular
                        ? 'bg-[#C9A962] text-white hover:bg-[#B8984F]'
                        : 'bg-[#7D5A4C] text-white hover:bg-[#6B4E3D]'
                    }`}
                  >
                    Boek nu
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTABlock
        title="Klaar om je tweelingzwangerschap vast te leggen?"
        description="Een tweeling is dubbel bijzonder. Leg dit unieke moment vast in een prachtig beeldje."
        ctaText="Boek je scan"
        ctaLink="https://calendly.com/babycrafts-info/30min"
      />

      <Footer />
    </div>
  );
};

export default TweelingBeeldje;
