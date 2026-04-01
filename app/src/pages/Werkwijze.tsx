import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, ChevronUp, Clock, CheckCircle2
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import CTABlock from '../components/CTABlock';
import { pageSEO } from '../lib/seo';

const Werkwijze = () => {
  const [openStep, setOpenStep] = useState<number | null>(0);

  useEffect(() => {
    document.title = pageSEO['werkwijze'].title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageSEO['werkwijze'].description);
    window.scrollTo(0, 0);
  }, []);

  const stappen = [
    {
      icon: Camera,
      title: 'De Scan',
      duration: '30-45 minuten',
      description: 'Alles begint met een ontspannen sessie in onze studio, bij jou thuis of in het ziekenhuis.',
      details: [
        'We nemen ruim de tijd om je op je gemak te stellen',
        'Jij bepaalt de houding die bij je past',
        'Meerdere poses om uit te kiezen',
        'Directe preview van de scanresultaten',
        'Geen straling, volledig veilig voor moeder en kind',
      ],
      image: '/images/studio/DSC00571.JPG',
    },
    {
      icon: Cpu,
      title: '3D Verwerking',
      duration: '1-2 dagen',
      description: 'Onze specialisten transformeren de ruwe scan naar een perfect gedetailleerd 3D model.',
      details: [
        'Nauwkeurige digitalisering van alle details',
        'Vervijning van huidtextuur en contouren',
        'Optimalisatie voor het gekozen materiaal',
        'Kwaliteitscontrole door ervaren digitale beeldhouwer',
        'Jij ontvangt een digitale preview ter goedkeuring',
      ],
      image: '/images/studio/DSC00508.webp',
    },
    {
      icon: Palette,
      title: 'Materiaalkeuze & Afwerking',
      duration: 'Direct na scan',
      description: 'Kies het materiaal dat het beste bij jouw verhaal past, met persoonlijk advies.',
      details: [
        'Arte-Lumina: luxe resin met tijdloze uitstraling',
        'Alba-Natura: warme houtvezel voor natuurlijke look',
        'Atelier-Bronze: zware bronslaag voor sculpturaal effect',
        'Gegoten Brons: 100% massief brons als erfstuk',
        'Persoonlijk advies gebaseerd op jouw wensen',
      ],
      image: '/images/products/Arte Lumina 1.avif',
    },
    {
      icon: Scan,
      title: 'Productie',
      duration: '5-10 weken',
      description: 'Het beeldje wordt met precisie vervaardigd in ons atelier of door gespecialiseerde partners.',
      details: [
        '3D print of bronsgietproces afhankelijk van materiaal',
        'Handmatige nabewerking door vakmensen',
        'Meerdere kwaliteitschecks tijdens het proces',
        'We houden je op de hoogte van de voortgang',
        'Elk beeldje is uniek en met de hand afgewerkt',
      ],
      image: '/images/products/Atelier Bronze.avif',
    },
    {
      icon: Package,
      title: 'Afwerking & Sokkel',
      duration: '2-3 dagen',
      description: 'Het eindresultaat wordt gemonteerd op een passende sokkel, klaar voor presentatie.',
      details: [
        'Keuze uit standaard, premium of custom sokkel',
        'Professionele montage van beeldje op sokkel',
        'Laatste kwaliteitscontrole',
        'Luxueuze verpakking voor bescherming',
        'Certificaat van echtheid wordt toegevoegd',
      ],
      image: '/images/products/Gegoten Brons gepoetst goud afwerking.avif',
    },
    {
      icon: Sparkles,
      title: 'Oplevering',
      duration: 'Ophalen of verzenden',
      description: 'Het moment dat je jouw unieke kunstwerk in ontvangst mag nemen.',
      details: [
        'Ophalen in onze studio met persoonlijk moment',
        'Of veilige verzending in beschermende verpakking',
        'Uitleg over verzorging en onderhoud',
        'Digitale kopie van de 3D scan wordt verstrekt',
        'Niet tevreden? We werken net zo lang door tot je happy bent',
      ],
      image: '/images/products/Ouder & Kind beeldje.avif',
    },
  ];

  const tijdlijn = [
    { week: 'Week 1', activiteit: 'Scan & Materiaalkeuze', status: 'done' },
    { week: 'Week 1-2', activiteit: '3D Verwerking', status: 'done' },
    { week: 'Week 2-6', activiteit: 'Productie', status: 'active' },
    { week: 'Week 6-7', activiteit: 'Afwerking', status: 'pending' },
    { week: 'Week 7+', activiteit: 'Oplevering', status: 'pending' },
  ];

  return (
    <div className="min-h-screen bg-[#F3EFE8]">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-[#4A4239] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4A4239] via-[#5A4A3D] to-[#4A4239]" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
              Ons Proces
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Van Scan naar Kunstwerk
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Een kijkje achter de schermen bij hoe wij jouw zwangerschap 
              transformeren naar een tijdloos kunstwerk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tijdlijn */}
      <section className="py-16 bg-[#FAF8F5] border-b border-[#D4C8B8]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {tijdlijn.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${
                      item.status === 'done' ? 'bg-[#C9A962]' :
                      item.status === 'active' ? 'bg-[#7D5A4C] animate-pulse' :
                      'bg-[#D4C8B8]'
                    }`} />
                    <div className="text-center">
                      <p className="text-xs text-[#6B5A4D] uppercase tracking-wider">{item.week}</p>
                      <p className={`text-sm font-medium ${
                        item.status === 'done' || item.status === 'active' ? 'text-[#4A4239]' : 'text-[#6B5A4D]'
                      }`}>{item.activiteit}</p>
                    </div>
                    {idx < tijdlijn.length - 1 && (
                      <div className="hidden md:block w-8 h-px bg-[#D4C8B8] ml-4" />
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stappen */}
      <section className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
                  Stap voor Stap
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#4A4239]">
                  Het volledige proces
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {stappen.map((stap, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="bg-[#FAF8F5] rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenStep(openStep === idx ? null : idx)}
                      className="w-full p-6 lg:p-8 flex items-center justify-between text-left hover:bg-[#F0EBE3] transition-colors"
                    >
                      <div className="flex items-center space-x-4 lg:space-x-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#C9A962]/10 flex items-center justify-center flex-shrink-0">
                          <stap.icon className="w-7 h-7 text-[#C9A962]" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-1">
                            <span className="text-[#C9A962] font-medium text-sm">
                              Stap {idx + 1}
                            </span>
                            <span className="text-[#6B5A4D] text-sm flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {stap.duration}
                            </span>
                          </div>
                          <h3 className="font-serif text-xl lg:text-2xl text-[#4A4239]">
                            {stap.title}
                          </h3>
                        </div>
                      </div>
                      {openStep === idx ? (
                        <ChevronUp className="w-6 h-6 text-[#C9A962]" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-[#6B5A4D]" />
                      )}
                    </button>

                    <AnimatePresence>
                      {openStep === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 lg:px-8 pb-8">
                            <div className="grid md:grid-cols-2 gap-8">
                              <div>
                                <p className="text-[#6B5A4D] leading-relaxed mb-6">
                                  {stap.description}
                                </p>
                                <ul className="space-y-3">
                                  {stap.details.map((detail, dIdx) => (
                                    <li key={dIdx} className="flex items-start space-x-3">
                                      <CheckCircle2 className="w-5 h-5 text-[#C9A962] mt-0.5 flex-shrink-0" />
                                      <span className="text-[#6B5A4D] text-sm">{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="rounded-xl overflow-hidden">
                                <img
                                  src={stap.image}
                                  alt={stap.title}
                                  className="w-full h-full object-cover aspect-[4/3]"
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologie */}
      <section className="py-20 lg:py-28 bg-[#4A4239] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollReveal>
                <div>
                  <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
                    De Technologie
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl mb-6">
                    Veilig. Nauwkeurig. Tijdloos.
                  </h2>
                  <div className="space-y-6 text-white/70">
                    <p>
                      Wij werken met gestructureerd licht 3D scanning technologie. Dit is dezelfde 
                      technologie die wordt gebruikt in de medische wereld en de filmindustrie. 
                      Het is volledig veilig: geen straling, geen lasers, geen warmte.
                    </p>
                    <p>
                      Onze scanner legt meer dan 2 miljoen meetpunten vast, waardoor elk detail 
                      van je zwangerschap wordt vastgelegd. De resolutie is zo hoog dat zelfs 
                      de textuur van de huid zichtbaar is in het eindresultaat.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-6 mt-8">
                    {[
                      { num: '2M+', label: 'Meetpunten' },
                      { num: '0.1mm', label: 'Nauwkeurigheid' },
                      { num: '100%', label: 'Veilig' },
                    ].map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <p className="font-serif text-2xl text-[#C9A962]">{stat.num}</p>
                        <p className="text-white/50 text-sm">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-white/5 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/images/products/Arte Lumina 1.avif"
                      alt="3D Scan proces"
                      className="rounded-xl aspect-square object-cover"
                    />
                    <img
                      src="/images/products/Atelier Bronze.avif"
                      alt="3D Model"
                      className="rounded-xl aspect-square object-cover mt-8"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        title="Benieuwd hoe jouw beeldje eruit zou zien?"
        description="Plan een vrijblijvende scan in onze studio"
        ctaText="Boek een afspraak"
        ctaLink="/tarieven"
      />

      <Footer />
    </div>
  );
};

export default Werkwijze;