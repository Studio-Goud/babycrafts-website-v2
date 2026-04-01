import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ChevronDown, ChevronUp, HelpCircle, MessageCircle,
  Baby, Sparkles, Clock, Shield, Package, Home, MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import CTABlock from '../components/CTABlock';
import { pageSEO } from '../lib/seo';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    document.title = pageSEO['faq'].title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageSEO['faq'].description);
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', label: 'Alle vragen', icon: HelpCircle },
    { id: 'timing', label: 'Timing & Afspraak', icon: Clock },
    { id: 'veiligheid', label: 'Veiligheid', icon: Shield },
    { id: 'product', label: 'Product & Materiaal', icon: Package },
    { id: 'locatie', label: 'Locatie', icon: MapPin },
    { id: 'thuis', label: 'Thuis & Ziekenhuis', icon: Home },
  ];

  const faqItems = [
    // Timing & Afspraak
    {
      category: 'timing',
      question: 'Wanneer is het beste moment voor een zwangerschapsbeeldje?',
      answer: 'Het ideale moment ligt tussen week 28 en 36 van je zwangerschap. In deze periode is je buik mooi rond, maar voel je je meestal nog comfortabel genoeg om te poseren. Bij een tweeling raden we week 28-32 aan.',
    },
    {
      category: 'timing',
      question: 'Hoe lang van tevoren moet ik een afspraak maken?',
      answer: 'We adviseren om 2-3 weken van tevoren te boeken, vooral voor weekendafspraken. In drukke periodes (rond feestdagen) kan dit oplopen tot 4-5 weken.',
    },
    {
      category: 'timing',
      question: 'Kan ik ook na week 36 nog een afspraak maken?',
      answer: 'Ja, dat kan zeker. Houd er wel rekening mee dat je buik dan zwaarder aanvoelt en poseren minder comfortabel kan zijn. We nemen dan extra de tijd voor pauzes.',
    },
    {
      category: 'timing',
      question: 'Hoe lang duurt een afspraak?',
      answer: 'Een standaard afspraak duurt 45-60 minuten. Dit includes voorbereiding, de scan zelf (2-3 minuten), het bekijken van de resultaten en het kiezen van materialen.',
    },
    {
      category: 'timing',
      question: 'Wat is de levertijd van een beeldje?',
      answer: 'Arte-Lumina en Alba-Natura: 5-6 weken. Atelier-Bronze: 6-7 weken. Gegoten Brons: 8-10 weken. We houden je gedurende het proces op de hoogte.',
    },
    
    // Veiligheid
    {
      category: 'veiligheid',
      question: 'Is een 3D scan veilig tijdens de zwangerschap?',
      answer: 'Absoluut! Onze scanner werkt met gestructureerd licht - net zo veilig als een normale fotocamera. Er is geen straling, geen laser, geen warmte. De technologie wordt ook gebruikt in de medische wereld.',
    },
    {
      category: 'veiligheid',
      question: 'Doet de scan pijn?',
      answer: 'Nee, de scan is volledig pijnloos. Je staat of zit comfortabel terwijl de scanner om je heen beweegt. Er is geen fysiek contact met je lichaam.',
    },
    {
      category: 'veiligheid',
      question: 'Kan ik met complicaties alsnog een beeldje laten maken?',
      answer: 'In de meeste gevallen wel. We werken regelmatig samen met ziekenhuizen voor vrouwen met een bedrust of complicaties. Neem contact op om de mogelijkheden te bespreken.',
    },
    {
      category: 'veiligheid',
      question: 'Is de scan veilig voor mijn baby?',
      answer: 'Ja, volledig veilig. De scanner gebruikt alleen licht om beelden vast te leggen. Er is geen enkele vorm van straling of andere schadelijke invloed.',
    },

    // Product & Materiaal
    {
      category: 'product',
      question: 'Wat is het verschil tussen de materialen?',
      answer: 'Arte-Lumina is luxe resin met een marmerachtige uitstraling. Alba-Natura is warme houtvezel. Atelier-Bronze heeft een dikke bronslaag. Gegoten Brons is 100% massief brons - onze meest premium optie.',
    },
    {
      category: 'product',
      question: 'Hoe groot wordt mijn beeldje?',
      answer: 'Dat kies je zelf! Zwangerschapsbeeldjes zijn verkrijgbaar vanaf 14 cm tot 20 cm. Grotere maten zijn mogelijk op aanvraag. De prijs is afhankelijk van de gekozen maat.',
    },
    {
      category: 'product',
      question: 'Kan ik het beeldje retourneren?',
      answer: 'Omdat elk beeldje volledig op maat wordt gemaakt, is retourneren niet mogelijk. We tonen je wel een digitale preview voordat we produceren, zodat je kunt aangeven of er nog iets aangepast moet worden.',
    },
    {
      category: 'product',
      question: 'Hoe moet ik het beeldje onderhouden?',
      answer: 'Eenvoudig: af en toe afstoffen met een droge doek. Geen water of schoonmaakmiddelen gebruiken. Brons beeldjes kunnen na verloop van tijd een mooie patina ontwikkelen.',
    },
    {
      category: 'product',
      question: 'Zijn de prijzen inclusief BTW?',
      answer: 'Ja, alle prijzen op onze website zijn inclusief 21% BTW. Er zijn geen verborgen kosten.',
    },
    {
      category: 'product',
      question: 'Wat is een sokkel en heb ik die nodig?',
      answer: 'Een sokkel is een voetstuk waarop je beeldje staat. Het geeft een mooie, afgewerkte uitstraling. Je kunt kiezen uit standaard (€15-25), premium natuursteen (€25-39) of custom opties.',
    },

    // Locatie
    {
      category: 'locatie',
      question: 'Waar is jullie studio?',
      answer: 'Onze studio is gevestigd aan Hooidrift 108 in Rotterdam (Delfshaven). We zijn goed bereikbaar met het OV (metro Coolhaven) en er is parkeergelegenheid in de buurt.',
    },
    {
      category: 'locatie',
      question: 'Is de studio rolstoeltoegankelijk?',
      answer: 'Ja, onze studio is gelijkvloers en volledig rolstoeltoegankelijk. Er is een ruime lift aanwezig en we hebben alle faciliteiten om iedereen comfortabel te ontvangen.',
    },
    {
      category: 'locatie',
      question: 'Kan ik parkeren bij de studio?',
      answer: 'Ja, er is gratis parkeergelegenheid op straat na 18:00. Daarvoor adviseren we parkeergarage Delfshaven (Schiedamse Vest 89), op 5 minuten lopen van onze studio.',
    },
    {
      category: 'locatie',
      question: 'Welke ziekenhuizen zijn in de buurt?',
      answer: 'We zitten dicht bij Erasmus MC, Sophia Kinderziekenhuis, Ikazia Ziekenhuis, Maasstad Ziekenhuis en Sint Franciscus Gasthuis. We kunnen indien nodig ook op locatie in het ziekenhuis komen.',
    },

    // Thuis & Ziekenhuis
    {
      category: 'thuis',
      question: 'Kunnen jullie ook bij mij thuis komen?',
      answer: 'Zeker! We bieden thuisscans aan in heel Zuid-Holland. De kosten hiervoor zijn €30 binnen Rotterdam en omliggende gemeenten. Neem contact op voor de exacte mogelijkheden in jouw regio.',
    },
    {
      category: 'thuis',
      question: 'Kan de scan ook in het ziekenhuis?',
      answer: 'Ja, we werken regelmatig samen met ziekenhuizen. Als je door medische redenen niet naar de studio kunt komen, kunnen we op verzoek naar het ziekenhuis komen. Neem contact op om dit te bespreken.',
    },
    {
      category: 'thuis',
      question: 'Wat hebben jullie nodig voor een thuisscan?',
      answer: 'Een ruimte van minimaal 2x3 meter met goed licht. We nemen alle apparatuur zelf mee. Een opgeruimde, rustige omgeving werkt het beste voor het resultaat.',
    },
    {
      category: 'thuis',
      question: 'Zijn er extra kosten voor een thuisscan?',
      answer: 'Binnen Rotterdam en directe omgeving is de toeslag €30. Voor andere regio's in Zuid-Holland maken we een custom offerte op basis van de afstand.',
    },

    // Algemeen
    {
      category: 'timing',
      question: 'Kan ik mijn afspraak verplaatsen?',
      answer: 'Ja, dat kan. We vragen je om minimaal 24 uur van tevoren te laten weten als je wilt verplaatsen. Bij ziekte kunnen we kosteloos verplaatsen, zelfs op de dag zelf.',
    },
    {
      category: 'product',
      question: 'Kan ik een cadeaubon bestellen?',
      answer: 'Ja! Een cadeaubon is een prachtig cadeau. Je kunt een vast bedrag kiezen of een custom bedrag aanvragen. De bon wordt feestelijk verpakt en is 3 jaar geldig.',
    },
    {
      category: 'product',
      question: 'Kan ik met mijn partner/kind op het beeldje?',
      answer: 'Zeker! We hebben speciale collecties voor Ouder & Kind en Familie. Dit kan met je partner, andere kinderen, of wie je maar wilt. Deze beeldjes hebben vaste prijzen ongeacht het aantal personen.',
    },
    {
      category: 'veiligheid',
      question: 'Wat als ik me niet lekker voel tijdens de scan?',
      answer: 'Geen probleem. We nemen alle tijd, met regelmatige pauzes. Als het echt niet gaat, kunnen we de afspraak gratis verplaatsen. Jouw comfort staat voorop.',
    },
  ];

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
              Veelgestelde Vragen
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Alles wat je wilt weten
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Vind snel antwoord op je vragen over zwangerschapsbeeldjes, 
              het scanproces, materialen en meer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-[#FAF8F5] border-b border-[#D4C8B8]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B5A4D]" />
              <input
                type="text"
                placeholder="Zoek in alle vragen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-[#D4C8B8] bg-white focus:outline-none focus:border-[#C9A962] transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-[#7D5A4C] text-white'
                      : 'bg-white text-[#6B5A4D] hover:bg-[#D4C8B8]/30'
                  }`}
                >
                  <cat.icon className="w-4 h-4 mr-2" />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#6B5A4D] text-center mb-8">
              {filteredFAQs.length} vragen gevonden
            </p>

            <div className="space-y-4">
              {filteredFAQs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-[#F0EBE3] transition-colors"
                  >
                    <span className="font-medium text-[#4A4239] pr-4">{faq.question}</span>
                    {openIndex === idx ? (
                      <ChevronUp className="w-5 h-5 text-[#C9A962] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#6B5A4D] flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-[#6B5A4D] leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-16">
                <HelpCircle className="w-16 h-16 text-[#D4C8B8] mx-auto mb-4" />
                <p className="text-[#6B5A4D]">Geen vragen gevonden voor deze zoekterm.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-28 bg-[#4A4239] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <MessageCircle className="w-12 h-12 text-[#C9A962] mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Staat je vraag er niet tussen?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              We beantwoorden hem graag persoonlijk. Bereik ons via WhatsApp 
              voor een snel antwoord, of stuur een e-mail.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/31620526806"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium rounded-full hover:bg-[#128C7E] transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Vraag via WhatsApp
              </a>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Contactpagina
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;