import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, Gift, ArrowRight, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CalendlyEmbed from '../components/CalendlyEmbed';
import FAQ from '../components/FAQ';
import { pageSEO } from '../lib/seo';

const Tarieven = () => {
  useEffect(() => {
    document.title = pageSEO.tarieven.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', pageSEO.tarieven.description);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('zwangerschap');

  const categories = [
    { id: 'zwangerschap', label: 'Zwangerschap' },
    { id: 'ouderkind', label: 'Ouder \u0026 Kind' },
    { id: 'familie', label: 'Familie' },
    { id: 'baby', label: 'Baby' },
  ];

  const pricing = {
    zwangerschap: [
      {
        name: 'Arte-Lumina',
        subtitle: 'Populair',
        price: '€399',
        description: 'Onze bestseller - luxe zwangerschapsbeeldje met tijdloze uitstraling',
        features: [
          'Professionele 3D-scan',
          'Digitale nabewerking',
          'Keuze uit poses',
          'Sokkel naar keuze',
          '5-6 weken levertijd',
          'Verzending of ophalen',
        ],
        popular: true,
        calendlyUrl: 'https://calendly.com/babycrafts/zwangerschapsbeeldje',
      },
      {
        name: 'Alba-Natura',
        subtitle: 'Natuurlijk',
        price: '€299',
        description: 'Warme uitstraling met gecertificeerde houtvezel',
        features: [
          'Professionele 3D-scan',
          'Digitale nabewerking',
          'Keuze uit poses',
          'Sokkel naar keuze',
          'Eco-vriendelijk materiaal',
          '5-6 weken levertijd',
        ],
        popular: false,
        calendlyUrl: 'https://calendly.com/babycrafts/zwangerschapsbeeldje',
      },
      {
        name: 'Atelier-Bronze',
        subtitle: 'Statement',
        price: '€599',
        description: 'Krachtige uitstraling met laag echt brons of koper',
        features: [
          'Professionele 3D-scan',
          'Uitgebreide nabewerking',
          'Meerdere poses mogelijk',
          'Premium sokkel',
          'Echt brons/koper afwerking',
          '6-7 weken levertijd',
        ],
        popular: false,
        calendlyUrl: 'https://calendly.com/babycrafts/zwangerschapsbeeldje',
      },
      {
        name: 'Gegoten Brons',
        subtitle: 'Ultiem',
        price: '€1.299',
        description: '100% echt brons - een blijvend erfstuk',
        features: [
          'Professionele 3D-scan',
          'Premium nabewerking',
          'Onbeperkte poses',
          'Exclusieve sokkel',
          '100% echt brons',
          '8-10 weken levertijd',
          'Certificaat van echtheid',
        ],
        popular: false,
        calendlyUrl: 'https://calendly.com/babycrafts/zwangerschapsbeeldje',
      },
    ],
    ouderkind: [
      {
        name: 'Ouder \u0026 Kind Basis',
        subtitle: 'Essential',
        price: '€449',
        description: 'Perfect voor moeder/ kind of vader/ kind',
        features: [
          'Professionele 3D-scan',
          'Digitale nabewerking',
          'Keuze uit poses',
          'Sokkel naar keuze',
          '5-6 weken levertijd',
        ],
        popular: true,
        calendlyUrl: 'https://calendly.com/babycrafts/ouder-kind',
      },
      {
        name: 'Ouder \u0026 Kind Premium',
        subtitle: 'Deluxe',
        price: '€649',
        description: 'Met luxe afwerking en extra opties',
        features: [
          'Professionele 3D-scan',
          'Uitgebreide nabewerking',
          'Meerdere poses',
          'Premium sokkel',
          'Extra grote afmeting',
          '6-7 weken levertijd',
        ],
        popular: false,
        calendlyUrl: 'https://calendly.com/babycrafts/ouder-kind',
      },
    ],
    familie: [
      {
        name: 'Familie Klein',
        subtitle: '3-4 personen',
        price: '€699',
        description: 'Ideaal voor gezinnen met 1-2 kinderen',
        features: [
          'Professionele 3D-scan',
          'Uitgebreide nabewerking',
          'Meerdere poses proberen',
          'Grote sokkel',
          '6-8 weken levertijd',
        ],
        popular: true,
        calendlyUrl: 'https://calendly.com/babycrafts/familiebeeldje',
      },
      {
        name: 'Familie Groot',
        subtitle: '5+ personen',
        price: '€999',
        description: 'Voor grotere gezinnen inclusief opa \u0026 oma',
        features: [
          'Professionele 3D-scan',
          'Premium nabewerking',
          'Onbeperkte poses',
          'XL sokkel',
          'Extra grote afmeting',
          '8-10 weken levertijd',
        ],
        popular: false,
        calendlyUrl: 'https://calendly.com/babycrafts/familiebeeldje',
      },
    ],
    baby: [
      {
        name: 'Newborn Beeldje',
        subtitle: 'Essential',
        price: '€349',
        description: 'Vang de eerste momenten van je baby',
        features: [
          'Professionele 3D-scan',
          'Digitale nabewerking',
          'Slapende poses mogelijk',
          'Sokkel naar keuze',
          '5-6 weken levertijd',
        ],
        popular: true,
        calendlyUrl: 'https://calendly.com/babycrafts/babybeeldje',
      },
      {
        name: 'Newborn Deluxe',
        subtitle: 'Premium',
        price: '€549',
        description: 'Met extra aandacht voor details',
        features: [
          'Professionele 3D-scan',
          'Uitgebreide nabewerking',
          'Meerdere poses',
          'Premium sokkel',
          'Fotoalbum digitaal',
          '6-7 weken levertijd',
        ],
        popular: false,
        calendlyUrl: 'https://calendly.com/babycrafts/babybeeldje',
      },
    ],
  };

  const faqItems = [
    {
      question: 'Zijn er verborgen kosten?',
      answer: 'Nee, al onze prijzen zijn all-inclusive. Je betaalt geen extra voor de scan, nabewerking, of sokkel. Alleen verzending is optioneel.',
    },
    {
      question: 'Kan ik in termijnen betalen?',
      answer: 'Ja, we bieden de mogelijkheid om in 2 of 3 termijnen te betalen. Neem contact met ons op voor de mogelijkheden.',
    },
    {
      question: 'Wat als ik niet tevreden ben?',
      answer: 'We doen er alles aan om je een prachtig beeldje te bezorgen. Mocht er iets niet naar wens zijn, neem dan contact met ons op. We vinden altijd een oplossing.',
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
              Transparante prijzen
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Tarieven
            </h1>
            <p className="text-white/70 text-lg">
              Alle prijzen zijn all-inclusive. Geen verborgen kosten, 
              geen verrassingen achteraf.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-[#FAF8F5] border-b border-[#E8DFC8]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-wrap justify-center gap-2 py-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#C9A962] text-white'
                    : 'bg-[#F5F1EB] text-[#3D3229]/70 hover:bg-[#E8DFC8]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-[#FAF8F5]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing[selectedCategory as keyof typeof pricing]?.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl p-6 lg:p-8 ${
                  plan.popular ? 'ring-2 ring-[#C9A962] shadow-xl' : 'shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-[#C9A962] text-white text-xs font-medium px-4 py-1 rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Meest gekozen
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-[#C9A962] text-xs font-medium tracking-wider uppercase">
                    {plan.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl text-[#3D3229] mt-1">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="font-serif text-4xl text-[#3D3229]">{plan.price}</span>
                  </div>
                  <p className="text-[#3D3229]/60 text-sm mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-[#C9A962] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#3D3229]/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 rounded-full font-medium transition-all ${
                    plan.popular
                      ? 'bg-[#C9A962] text-white hover:bg-[#B8984F]'
                      : 'bg-[#F5F1EB] text-[#3D3229] hover:bg-[#E8DFC8]'
                  }`}
                >
                  Boek nu
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cadeaubon Section */}
      <section id="cadeaubon" className="bg-[#F5F1EB]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#C9A962]/10 mb-6">
                <Gift className="w-7 h-7 text-[#C9A962]" />
              </div>
              
              <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-3">
                Cadeaubon
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-6">
                Het perfecte kraamcadeau
              </h2>
              <p className="text-[#3D3229]/70 leading-relaxed mb-6">
                Geef iemand een ervaring cadeau die ze nooit zullen vergeten. 
                Met onze cadeaubon geef je de vrijheid om zelf het perfecte moment 
                en de ideale stijl te kiezen.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Geldig voor alle producten',
                  'Geen vervaldatum',
                  'In luxe geschenkverpakking',
                  'Direct per e-mail of post',
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-[#C9A962] mr-3 flex-shrink-0" />
                    <span className="text-[#3D3229]/80">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/babycrafts/cadeaubon"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                Bestel cadeaubon
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#C9A962]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Gift className="w-10 h-10 text-[#C9A962]" />
                  </div>
                  
                  <p className="font-serif text-lg text-[#3D3229] mb-2">Babycrafts Cadeaubon</p>
                  <p className="text-[#3D3229]/60 text-sm mb-6">Een uniek 3D beeldje cadeau</p>
                  
                  <div className="space-y-3">
                    {['€100', '€200', '€399', 'Anders'].map((amount) => (
                      <button
                        key={amount}
                        className="w-full py-3 border-2 border-[#E8DFC8] rounded-xl text-[#3D3229] font-medium hover:border-[#C9A962] hover:bg-[#C9A962]/5 transition-colors"
                      >
                        {amount}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="bg-[#3D3229] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <HelpCircle className="w-12 h-12 text-[#C9A962] mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Boek direct je afspraak
            </h2>
            <p className="text-white/70">
              Kies een datum en tijd die jou uitkomt. We kijken ernaar uit je te ontmoeten!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden">
              <CalendlyEmbed url="https://calendly.com/babycrafts/afspraak" />
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <Footer />
    </div>
  );
};

export default Tarieven;
