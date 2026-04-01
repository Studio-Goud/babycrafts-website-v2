import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, HelpCircle, ArrowRight, 
  ChevronDown, ChevronUp, Info, Baby, Users, Heart
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CalendlyEmbed from '../components/CalendlyEmbed';
import { pageSEO } from '../lib/seo';

interface PriceTier {
  size: string;
  price: string;
  popular?: boolean;
}

interface ProductPricing {
  name: string;
  subtitle: string;
  description: string;
  basePrice: string;
  tiers: PriceTier[];
  features: string[];
  calendlyUrl: string;
  image?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const Tarieven = () => {
  useEffect(() => {
    document.title = pageSEO.tarieven.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', pageSEO.tarieven.description);
  }, []);

  const [openAccordion, setOpenAccordion] = useState<string | null>('zwangerschap');
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const pricingData = {
    zwangerschap: [
      {
        name: 'Arte-Lumina',
        subtitle: 'Premium Resin',
        description: 'Luxe zwangerschapsbeeldjes met een verfijnde, tijdloze uitstraling. Volledig gepersonaliseerd in houding, stijl en afwerking.',
        basePrice: 'vanaf €199',
        image: '/images/products/Arte Lumina 1.avif',
        tiers: [
          { size: '14 cm', price: '€199' },
          { size: '16 cm', price: '€219', popular: true },
          { size: '18 cm', price: '€239' },
          { size: '20 cm', price: '€259' },
        ],
        features: [
          'Professionele 3D-scan',
          'Digitale nabewerking',
          'Keuze uit poses',
          'Sokkel naar keuze',
          '5-6 weken levertijd',
          'Verzending of ophalen',
        ],
        calendlyUrl: 'https://calendly.com/babycrafts/zwangerschapsbeeldje',
      },
      {
        name: 'Alba-Natura',
        subtitle: 'Houtvezel Composiet',
        description: 'Een natuurlijk zwangerschapsbeeldje met een warme, rustige uitstraling. Geprint met gecertificeerde houtvezel.',
        basePrice: 'vanaf €199',
        image: '/images/products/Alba Natura.avif',
        tiers: [
          { size: '14 cm', price: '€199' },
          { size: '16 cm', price: '€219', popular: true },
          { size: '18 cm', price: '€239' },
          { size: '20 cm', price: '€259' },
        ],
        features: [
          'Professionele 3D-scan',
          'Houtvezel composiet',
          'Warme uitstraling',
          'Eco-vriendelijk',
          'Unieke textuur',
          '5-6 weken levertijd',
        ],
        calendlyUrl: 'https://calendly.com/babycrafts/zwangerschapsbeeldje',
      },
      {
        name: 'Atelier-Bronze',
        subtitle: 'Brons/Koper Afwerking',
        description: 'Een krachtig statement met een massieve uitstraling. Afgewerkt met een dikke laag echt brons of koper.',
        basePrice: 'vanaf €569',
        image: '/images/products/Atelier Bronze.avif',
        tiers: [
          { size: '15 cm', price: '€569' },
          { size: '17 cm', price: '€589', popular: true },
          { size: '19 cm', price: '€629' },
        ],
        features: [
          'Professionele 3D-scan',
          'Uitgebreide nabewerking',
          'Meerdere poses mogelijk',
          'Premium sokkel',
          'Echt brons/koper afwerking',
          '6-7 weken levertijd',
        ],
        calendlyUrl: 'https://calendly.com/babycrafts/zwangerschapsbeeldje',
      },
      {
        name: 'Gegoten Brons',
        subtitle: '100% Echt Brons',
        description: 'Het ultieme bronzen zwangerschapsbeeldje, volledig gegoten uit echt brons. Tijdloos en bedoeld als blijvend erfstuk.',
        basePrice: 'vanaf €1.069',
        image: '/images/products/Gegoten Brons gepoetst goud afwerking.avif',
        tiers: [
          { size: '15 cm', price: '€1.069' },
          { size: '17 cm', price: '€1.139', popular: true },
          { size: '19 cm', price: '€1.189' },
        ],
        features: [
          'Professionele 3D-scan',
          'Premium nabewerking',
          'Onbeperkte poses',
          'Exclusieve sokkel',
          '100% echt brons',
          '8-10 weken levertijd',
          'Certificaat van echtheid',
        ],
        calendlyUrl: 'https://calendly.com/babycrafts/zwangerschapsbeeldje',
      },
    ],
    ouderKind: [
      {
        name: 'Arte-Lumina Ouder(s) & Kind',
        subtitle: 'Premium Resin',
        description: 'Een bijzondere variant waarbij één of beide ouders samen met de baby worden vastgelegd. Een intieme, persoonlijke herinnering.',
        basePrice: 'vanaf €349',
        image: '/images/products/Ouder & Kind beeldje.avif',
        tiers: [
          { size: '15 cm', price: '€349' },
          { size: '17 cm', price: '€389', popular: true },
          { size: '19 cm', price: '€429' },
        ],
        features: [
          'Professionele 3D-scan',
          'Ouder(s) + baby vastgelegd',
          'Unieke verbinding vastgelegd',
          'Premium afwerking',
          'Sokkel naar keuze',
          '5-6 weken levertijd',
        ],
        calendlyUrl: 'https://calendly.com/babycrafts/ouder-kind-beeldje',
      },
      {
        name: 'Atelier-Bronze Ouder(s) & Kind',
        subtitle: 'Brons/Koper Afwerking',
        description: 'De band tussen ouder en kind vastgelegd in massief brons of koper. Een krachtig statement voor generaties.',
        basePrice: 'vanaf €649',
        tiers: [
          { size: '15 cm', price: '€649' },
          { size: '17 cm', price: '€699', popular: true },
          { size: '19 cm', price: '€749' },
        ],
        features: [
          'Professionele 3D-scan',
          'Ouder(s) + baby vastgelegd',
          'Echt brons/koper afwerking',
          'Sculpturale uitstraling',
          'Premium sokkel',
          '6-7 weken levertijd',
        ],
        calendlyUrl: 'https://calendly.com/babycrafts/ouder-kind-beeldje',
      },
      {
        name: 'Gegoten Brons Ouder(s) & Kind',
        subtitle: '100% Echt Brons',
        description: 'Het ultieme erfstuk: ouder en kind vereeuwigd in massief brons. Een blijvende herinnering voor generaties.',
        basePrice: 'vanaf €989',
        tiers: [
          { size: '15 cm', price: '€989' },
          { size: '17 cm', price: '€1.089', popular: true },
          { size: '19 cm', price: '€1.189' },
        ],
        features: [
          'Professionele 3D-scan',
          'Ouder(s) + baby vastgelegd',
          '100% echt brons',
          'Galerie kwaliteit',
          'Exclusieve sokkel',
          'Certificaat van echtheid',
          '8-10 weken levertijd',
        ],
        calendlyUrl: 'https://calendly.com/babycrafts/ouder-kind-beeldje',
      },
    ],
    baby: [
      {
        name: 'Arte-Lumina Babybeeldje',
        subtitle: 'Premium Resin',
        description: 'Het babybeeldje vangt het eerste begin — klein, kwetsbaar en volledig eigen. Een tastbare herinnering aan de periode ná de geboorte.',
        basePrice: 'vanaf €349',
        tiers: [
          { size: '17 cm breed', price: '€349' },
          { size: '20 cm breed', price: '€449', popular: true },
        ],
        features: [
          'Professionele 3D-scan baby',
          'Warme, zachte uitstraling',
          '2 poses mogelijk',
          'Sokkel naar keuze',
          '5-6 weken levertijd',
        ],
        calendlyUrl: 'https://calendly.com/babycrafts/babybeeldje',
      },
      {
        name: 'Atelier-Bronze Babybeeldje',
        subtitle: 'Brons/Koper Afwerking',
        description: 'Je baby vastgelegd in een tijdloos bronzen of koperen beeldje. Een krachtig statement van het nieuwe leven.',
        basePrice: 'vanaf €589',
        tiers: [
          { size: '17 cm breed', price: '€589' },
          { size: '20 cm breed', price: '€689', popular: true },
        ],
        features: [
          'Professionele 3D-scan baby',
          'Echt brons/koper afwerking',
          'Sculpturale uitstraling',
          'Premium sokkel',
          '6-7 weken levertijd',
        ],
        calendlyUrl: 'https://calendly.com/babycrafts/babybeeldje',
      },
      {
        name: 'Gegoten Brons Babybeeldje',
        subtitle: '100% Echt Brons',
        description: 'Het ultieme erfstuk: je baby vereeuwigd in massief brons. Een blijvende herinnering voor generaties.',
        basePrice: 'vanaf €989',
        tiers: [
          { size: '17 cm breed', price: '€989' },
          { size: '20 cm breed', price: '€1.189', popular: true },
        ],
        features: [
          'Professionele 3D-scan baby',
          '100% echt brons',
          'Galerie kwaliteit',
          'Exclusieve sokkel',
          'Certificaat van echtheid',
          '8-10 weken levertijd',
        ],
        calendlyUrl: 'https://calendly.com/babycrafts/babybeeldje',
      },
    ],
    familie: [
      {
        name: 'Arte-Familia',
        subtitle: 'Premium Resin - Gezinsbeeldje',
        description: 'Het gezin vastgelegd in één beeldje. Een uniek kunstwerk dat de verbinding tussen alle gezinsleden toont.',
        basePrice: '€349',
        tiers: [
          { size: '17 cm gezinsbeeldje compleet', price: '€349', popular: true },
        ],
        features: [
          'Professionele 3D-scan',
          'Complete gezinsopstelling',
          'Premium afwerking',
          'Sokkel naar keuze',
          '5-6 weken levertijd',
        ],
        calendlyUrl: 'https://calendly.com/babycrafts/familiebeeldje',
      },
      {
        name: 'Arte-Familia Atelier-Bronze',
        subtitle: 'Brons/Koper - Gezinsbeeldje',
        description: 'Het gezin vereeuwigd in massief brons of koper. Een krachtig statement van familieverbondenheid.',
        basePrice: '€699',
        tiers: [
          { size: '17 cm gezinsbeeldje compleet', price: '€699', popular: true },
        ],
        features: [
          'Professionele 3D-scan',
          'Complete gezinsopstelling',
          'Echt brons/koper afwerking',
          'Premium sokkel',
          '6-7 weken levertijd',
        ],
        calendlyUrl: 'https://calendly.com/babycrafts/familiebeeldje',
      },
      {
        name: 'Arte-Familia Gegoten Brons',
        subtitle: '100% Echt Brons - Gezinsbeeldje',
        description: 'Het ultieme gezinsportret in massief brons. Een blijvend erfstuk voor generaties.',
        basePrice: '€1.189',
        tiers: [
          { size: '17 cm gezinsbeeldje compleet', price: '€1.189', popular: true },
        ],
        features: [
          'Professionele 3D-scan',
          'Complete gezinsopstelling',
          '100% echt brons',
          'Exclusieve sokkel',
          'Certificaat van echtheid',
          '8-10 weken levertijd',
        ],
        calendlyUrl: 'https://calendly.com/babycrafts/familiebeeldje',
      },
    ],
  };

  const sokkelPrices = [
    { type: 'Standaard sokkel', price: '€15 - €25' },
    { type: 'Premium natuursteen', price: '€25 - €39' },
    { type: 'Grote sokkel / pilaar', price: 'Op aanvraag' },
  ];

  const faqItems = [
    {
      question: 'Wat is een zwangerschapsbeeldje precies?',
      answer: 'Een zwangerschapsbeeldje is een tastbare herinnering aan jouw zwangerschap, gemaakt met een nauwkeurige 3D scan van je buik. Bij Babycrafts 3D leggen we niet alleen de vorm vast, maar ook de houding en de kleinste details. Zo ontstaat een persoonlijk beeldje dat écht bij je past, iets wat je later nog eens rustig bekijkt en opnieuw voelt.',
    },
    {
      question: 'Wanneer is het beste moment om een zwangerschapsbeeldje te laten maken?',
      answer: 'De meeste vrouwen kiezen voor een scan tussen week 30 en 36 van hun zwangerschap. In deze periode is je buik mooi rond, terwijl je je meestal nog comfortabel genoeg voelt om te poseren. Ben je zwanger van een tweeling of groeit je buik sneller? Dan adviseren we om iets eerder te komen, rond week 28 tot 32. Is later ook mogelijk? Ja, maar houd er rekening mee dat je buik zwaarder kan aanvoelen en poseren minder comfortabel wordt.',
    },
    {
      question: 'Hoe werkt het maken van een zwangerschapsbeeldje?',
      answer: 'Je komt langs in onze studio in Rotterdam (of we komen bij je thuis/in het ziekenhuis). Tijdens je afspraak begeleiden we je stap voor stap. We helpen je met de houding en nemen rustig de tijd zodat jij je op je gemak voelt. De scan zelf duurt slechts een paar minuten. Daarna kiezen jullie samen het formaat en de afwerking die het beste bij je past. Wij zorgen vervolgens voor de volledige nabewerking en afwerking.',
    },
    {
      question: 'Doet het maken van een 3D scan pijn of is het veilig?',
      answer: 'Nee, het maken van een zwangerschapsbeeldje is volledig veilig en pijnloos. We werken met een geavanceerde 3D scanner die alleen beelden vastlegt, zonder straling of aanraking. Het is een ontspannen moment waarin jij even stil kunt staan bij je zwangerschap.',
    },
    {
      question: 'Moet ik iets voorbereiden voor mijn afspraak?',
      answer: 'Je hoeft eigenlijk niets voor te bereiden. Wij begeleiden je stap voor stap tijdens de afspraak. Wel adviseren we om eenvoudige kleding te dragen die je makkelijk aan en uit kunt doen, zodat we je goed kunnen helpen met de houding.',
    },
    {
      question: 'Hoe lang duurt de levertijd?',
      answer: 'De levertijd is afhankelijk van het gekozen materiaal: Arte-Lumina en Alba-Natura hebben een levertijd van 5-6 weken, Atelier-Bronze 6-7 weken, en Gegoten Brons 8-10 weken. We houden je gedurende het hele proces op de hoogte.',
    },
    {
      question: 'Kan ik ook thuis gescand worden?',
      answer: 'Ja, zeker! We bieden de mogelijkheid om je zwangerschapsbeeldje thuis te laten maken. In alle rust, in je eigen omgeving. Thuisafspraken zijn altijd tegen een minimale vergoeding van €30 binnen geheel regio Zuid-Holland. We zijn actief in Rotterdam, Schiedam, Vlaardingen, Capelle aan den IJssel, Barendrecht, Ridderkerk, Delft, Den Haag, Dordrecht en de Drechtsteden.',
    },
    {
      question: 'Is een bezoek aan het ziekenhuis ook mogelijk?',
      answer: 'Ja, we zijn gevestigd in het hart van Rotterdam, op korte afstand van Erasmus MC, Sophia Kinderziekenhuis, Ikazia Ziekenhuis, Maasstad Ziekenhuis en Sint Franciscus Gasthuis. Indien nodig kunnen we ook in het ziekenhuis langskomen. Zo zorgen we ervoor dat jouw zwangerschap altijd op een manier wordt vastgelegd die bij jou past.',
    },
    {
      question: 'Wat is het verschil tussen de verschillende materialen?',
      answer: 'Arte-Lumina is onze luxe resin variant met een verfijnde, tijdloze uitstraling. Alba-Natura is gemaakt van gecertificeerde houtvezel met een warme, natuurlijke uitstraling. Atelier-Bronze heeft een dikke laag echt brons of koper en voelt zwaar en sculpturaal aan. Gegoten Brons is 100% massief brons - onze meest premium versie, bedoeld als blijvend erfstuk.',
    },
    {
      question: 'Kan ik het beeldje retourneren?',
      answer: 'Omdat elk beeldje volledig op maat wordt gemaakt op basis van jouw 3D-scan, is retourneren helaas niet mogelijk. We nemen echter alle tijd om tijdens het proces te zorgen dat je tevreden bent met het resultaat. Je ontvangt vooraf een digitale preview waarmee je kunt instemmen.',
    },
    {
      question: 'Zijn de prijzen inclusief BTW?',
      answer: 'Ja, alle prijzen zijn inclusief BTW. Er zijn geen verborgen kosten - wat je ziet is wat je betaalt.',
    },
    {
      question: 'Kan ik een cadeaubon bestellen?',
      answer: 'Ja, een cadeaubon is een prachtig cadeau voor een zwangere vriendin, collega of partner. Je kunt deze eenvoudig online bestellen en de ontvanger kan zelf een afspraak inplannen.',
    },
    {
      question: 'Hoe kan ik contact opnemen?',
      answer: 'Je kunt ons bereiken via WhatsApp op +31620526806, of via e-mail op info@babycrafts.nl. We reageren meestal binnen enkele uren op werkdagen.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Navigation />

      {/* Hero */}
      <section className="bg-[#3D3229] text-white py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
                Transparante Prijzen
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                Tarieven Zwangerschapsbeeldjes
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Een zwangerschapsbeeldje is geen standaardproduct, maar een persoonlijk kunstobject. 
                Daarom werken wij niet met losse prijsopslagen, maar met heldere all-in prijzen. 
                Zo weet je waar je aan toe bent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Accordion */}
      <section className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Zwangerschap */}
            <div className="mb-4">
              <button
                onClick={() => toggleAccordion('zwangerschap')}
                className="w-full flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A962]/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[#C9A962]" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-serif text-xl text-[#3D3229]">Zwangerschapsbeeldjes</h2>
                    <p className="text-[#3D3229]/60 text-sm">Vanaf €199</p>
                  </div>
                </div>
                {openAccordion === 'zwangerschap' ? (
                  <ChevronUp className="w-6 h-6 text-[#C9A962]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#C9A962]" />
                )}
              </button>
              
              <AnimatePresence>
                {openAccordion === 'zwangerschap' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0">
                      {pricingData.zwangerschap.map((product, idx) => (
                        <ProductCard key={idx} product={product} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Ouder & Kind */}
            <div className="mb-4">
              <button
                onClick={() => toggleAccordion('ouderKind')}
                className="w-full flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A962]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#C9A962]" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-serif text-xl text-[#3D3229]">Ouder(s) & Kind</h2>
                    <p className="text-[#3D3229]/60 text-sm">Vanaf €349</p>
                  </div>
                </div>
                {openAccordion === 'ouderKind' ? (
                  <ChevronUp className="w-6 h-6 text-[#C9A962]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#C9A962]" />
                )}
              </button>
              
              <AnimatePresence>
                {openAccordion === 'ouderKind' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0">
                      {pricingData.ouderKind.map((product, idx) => (
                        <ProductCard key={idx} product={product} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Baby */}
            <div className="mb-4">
              <button
                onClick={() => toggleAccordion('baby')}
                className="w-full flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A962]/10 flex items-center justify-center">
                    <Baby className="w-6 h-6 text-[#C9A962]" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-serif text-xl text-[#3D3229]">Babybeeldjes</h2>
                    <p className="text-[#3D3229]/60 text-sm">Vanaf €349</p>
                  </div>
                </div>
                {openAccordion === 'baby' ? (
                  <ChevronUp className="w-6 h-6 text-[#C9A962]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#C9A962]" />
                )}
              </button>
              
              <AnimatePresence>
                {openAccordion === 'baby' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0">
                      {pricingData.baby.map((product, idx) => (
                        <ProductCard key={idx} product={product} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Familie */}
            <div className="mb-4">
              <button
                onClick={() => toggleAccordion('familie')}
                className="w-full flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A962]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#C9A962]" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-serif text-xl text-[#3D3229]">Arte-Familia (Gezinsbeeldje)</h2>
                    <p className="text-[#3D3229]/60 text-sm">Vanaf €349</p>
                  </div>
                </div>
                {openAccordion === 'familie' ? (
                  <ChevronUp className="w-6 h-6 text-[#C9A962]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#C9A962]" />
                )}
              </button>
              
              <AnimatePresence>
                {openAccordion === 'familie' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0">
                      {pricingData.familie.map((product, idx) => (
                        <ProductCard key={idx} product={product} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Sokkel Prijzen */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Info className="w-8 h-8 text-[#C9A962] mx-auto mb-4" />
              <h2 className="font-serif text-2xl text-[#3D3229] mb-2">Sokkel Prijzen</h2>
              <p className="text-[#3D3229]/60">Elk beeldje verdient een passende sokkel</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {sokkelPrices.map((sokkel, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between items-center p-4 ${
                    idx !== sokkelPrices.length - 1 ? 'border-b border-[#E8DFC8]' : ''
                  }`}
                >
                  <span className="text-[#3D3229]">{sokkel.type}</span>
                  <span className="font-medium text-[#C9A962]">{sokkel.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-4">
                Plan Je Afspraak
              </h2>
              <p className="text-[#3D3229]/70">
                Kies een datum en tijd die jou uitkomt. We zien ernaar uit je te verwelkomen!
              </p>
            </div>
            <CalendlyEmbed url="https://calendly.com/babycrafts/afspraak" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAF8F5] py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <HelpCircle className="w-8 h-8 text-[#C9A962] mx-auto mb-4" />
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-4">
                Veelgestelde Vragen
              </h2>
              <p className="text-[#3D3229]/70">
                Alles wat je wilt weten voordat je een zwangerschapsbeeldje laat maken
              </p>
            </div>
            
            <div className="space-y-4">
              {faqItems.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#FAF8F5] transition-colors"
                  >
                    <span className="font-medium text-[#3D3229] pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#F5F1EB] flex items-center justify-center transition-transform duration-300 ${
                        openFAQ === idx ? 'rotate-180' : ''
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 text-[#C9A962]" />
                    </div>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === idx ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-[#3D3229]/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Product Card Component
interface ProductCardProps {
  product: ProductPricing;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#F5F1EB] rounded-2xl p-6 mt-4"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Info */}
        <div>
          <h3 className="font-serif text-xl text-[#3D3229] mb-1">{product.name}</h3>
          <p className="text-[#C9A962] text-sm mb-3">{product.subtitle}</p>
          <p className="text-[#3D3229]/70 text-sm mb-4">{product.description}</p>
          
          <div className="space-y-2 mb-4">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C9A962]" />
                <span className="text-sm text-[#3D3229]/70">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right: Pricing Tiers */}
        <div>
          <p className="text-sm text-[#3D3229]/60 mb-3">Kies je maat:</p>
          <div className="space-y-2">
            {product.tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`flex justify-between items-center p-3 rounded-xl ${
                  tier.popular 
                    ? 'bg-[#C9A962] text-white' 
                    : 'bg-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={tier.popular ? 'text-white' : 'text-[#3D3229]'}>
                    {tier.size}
                  </span>
                  {tier.popular && (
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                      Populair
                    </span>
                  )}
                </div>
                <span className={`font-medium ${tier.popular ? 'text-white' : 'text-[#C9A962]'}`}>
                  {tier.price}
                </span>
              </div>
            ))}
          </div>
          
          <a
            href={product.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full mt-4 flex items-center justify-center gap-2"
          >
            Boek deze variant
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Tarieven;
