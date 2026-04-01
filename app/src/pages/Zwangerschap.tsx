import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Clock, Check } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTABlock from '../components/CTABlock';
import { pageSEO } from '../lib/seo';

const Zwangerschap = () => {
  useEffect(() => {
    document.title = pageSEO.zwangerschap.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', pageSEO.zwangerschap.description);
  }, []);

  const products = [
    {
      title: 'Arte-Lumina',
      subtitle: 'Onze bestseller',
      description: 'Luxe zwangerschapsbeeldjes met een verfijnde, tijdloze uitstraling. Volledig gepersonaliseerd in houding, stijl en afwerking.',
      price: 'vanaf €199',
      imageUrl: '/images/products/Arte Lumina 1.avif',
      link: '/tarieven',
      features: ['Tijdloze uitstraling', 'Premium afwerking', 'Inclusief 3D-scan', '5-6 weken levertijd'],
    },
    {
      title: 'Alba-Natura',
      subtitle: 'Natuurlijk \u0026 warm',
      description: 'Een natuurlijk zwangerschapsbeeldje met een warme, rustige uitstraling. Geprint met gecertificeerde houtvezel.',
      price: 'vanaf €199',
      imageUrl: '/images/products/Alba Natura.avif',
      link: '/tarieven',
      features: ['Houtvezel composiet', 'Warme uitstraling', 'Eco-vriendelijk', 'Unieke textuur'],
    },
    {
      title: 'Atelier-Bronze',
      subtitle: 'Statement piece',
      description: 'Een krachtig statement met een massieve uitstraling. Afgewerkt met een dikke laag echt brons of koper.',
      price: 'vanaf €569',
      imageUrl: '/images/products/Atelier Bronze.avif',
      link: '/tarieven',
      features: ['Echt brons/koper', 'Zware sculpturale uitstraling', 'Hand gepatineerd', 'Blijvende glans'],
    },
    {
      title: 'Gegoten Brons',
      subtitle: 'Ultieme luxe',
      description: 'Het ultieme bronzen zwangerschapsbeeldje, volledig gegoten uit echt brons. Tijdloos en bedoeld als blijvend erfstuk.',
      price: 'vanaf €1.069',
      imageUrl: '/images/products/Gegoten Brons gepoetst goud afwerking.avif',
      link: '/tarieven',
      features: ['100% Echt brons', 'Erfstuk kwaliteit', 'Hand gepatineerd', 'Generaties meegaand'],
    },
  ];

  const faqItems = [
    {
      question: 'Vanaf welke week kan ik een zwangerschapsbeeldje laten maken?',
      answer: 'Je kunt vanaf week 20 van je zwangerschap een afspraak maken. Het ideale moment ligt tussen week 28 en 36, wanneer je buik mooi rond is maar je je nog comfortabel voelt.',
    },
    {
      question: 'Is de 3D-scan veilig voor mijn baby?',
      answer: 'Absoluut! De scan is volledig contactloos en werkt met gestructureerd licht - geen straling of lasers. Het is net zo veilig als een gewone foto.',
    },
    {
      question: 'Hoe lang duurt het scannen?',
      answer: 'De scan zelf duurt slechts 2-3 minuten. We nemen echter ruim de tijd voor de voorbereiding en verschillende poses. In totaal ben je ongeveer 30-45 minuten bij ons.',
    },
    {
      question: 'Kan ik ook thuis gescand worden?',
      answer: 'Ja, zeker! We bieden thuisbezoeken aan in heel Zuid-Holland. Ideaal als je liever in je eigen vertrouwde omgeving bent. Er geldt een kleine vergoeding voor de reiskosten.',
    },
    {
      question: 'Hoe lang duurt het voordat ik mijn beeldje ontvang?',
      answer: 'De levertijd is gemiddeld 5-6 weken. Dit kan variëren afhankelijk van het gekozen materiaal en de drukte. We houden je gedurende het hele proces op de hoogte.',
    },
    {
      question: 'Wat krijg ik er allemaal bij?',
      answer: 'Al onze pakketten zijn all-inclusive: de 3D-scan, professionele nabewerking, keuze uit poses, en het gefinishte beeldje op een sokkel. Geen verborgen kosten!',
    },
  ];

  const testimonials = [
    {
      quote: 'Wat een bijzondere ervaring! Het beeldje is nog mooier dan ik had verwacht. Echt een kunstwerk waar ik elke dag blij van word.',
      name: 'Michelle van Dijk',
      location: 'Rotterdam',
      rating: 5,
    },
    {
      quote: 'Lindsay stelde me direct op mijn gemak. De scan was snel en comfortabel. Het resultaat is prachtig!',
      name: 'Emma van Berg',
      location: 'Den Haag',
      rating: 5,
    },
    {
      quote: 'Ik twijfelde tussen verschillende materialen en Lindsay nam alle tijd om me te adviseren. Het bronzen beeldje is meer dan ik had durven dromen.',
      name: 'Sophie Jansen',
      location: 'Delft',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Navigation />

      <HeroSection
        variant="product"
        subtitle="Zwangerschapsbeeldje"
        title="Een zwangerschapsbeeldje is meer dan een object"
        description="Het is een tastbare herinnering aan een unieke periode in je leven. Bij Babycrafts 3D leggen we jouw zwangerschap vast met aandacht, vakmanschap en respect voor jouw lichaam en verhaal."
        imageUrl="/images/studio/DSC00508.webp"
        ctaText="Bekijk tarieven"
        ctaLink="/tarieven"
        secondaryCtaText="Boek direct"
        secondaryCtaLink="/tarieven"
      />

      {/* Intro Section */}
      <section className="bg-[#FAF8F5]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
                Het proces
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-6">
                Het maken van je zwangerschapsbeeldje
              </h2>
              <p className="text-[#3D3229]/70 text-lg leading-relaxed mb-8">
                Het maken van een zwangerschapsbeeldje begint altijd met een afspraak waarin rust en vertrouwen centraal staan. 
                Tijdens deze sessie nemen we de tijd om verschillende houdingen, poses en details te verkennen. 
                Zo ontstaat een beeldje dat niet alleen technisch klopt, maar ook emotioneel raakt.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-[#C9A962]" />
                  <span className="text-[#3D3229]/70">100% Veilig</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-[#C9A962]" />
                  <span className="text-[#3D3229]/70">Slechts 2-3 minuten scan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-[#C9A962]" />
                  <span className="text-[#3D3229]/70">1300+ tevreden klanten</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section className="bg-[#F5F1EB]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-3">
              Collectie
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3D3229]">
              Premium Materialen \u0026 Afwerkingen
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.title} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-[#3D3229] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-3">
                Waarom een beeldje?
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
                Dit moment verdient meer dan een foto
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Een zwangerschap is een van de meest bijzondere periodes in je leven. 
                Je lichaam verandert, er groeit iets unieks in je buik, en voor je het weet is het voorbij.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                Een 3D beeldje vangt deze magische periode op een manier die geen foto kan. 
                Het is tastbaar, driedimensionaal, en een kunstwerk dat je leven lang meegaat.
              </p>

              <ul className="space-y-4">
                {[
                  'Een tastbare herinnering aan je zwangerschap',
                  'Uniek kunstwerk, speciaal voor jou gemaakt',
                  'Blijft mooi, generaties lang',
                  'Perfect kraamcadeau voor jezelf',
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
              <div className="aspect-square rounded-3xl overflow-hidden bg-[#C9A962]/20">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <Heart className="w-20 h-20 text-[#C9A962] mx-auto mb-6" />
                    <blockquote className="font-serif text-2xl italic mb-4">
                      "Niet alles blijft. Dit wel."
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials items={testimonials} />

      <FAQ items={faqItems} />

      <CTABlock
        title="Klaar om jouw zwangerschap vast te leggen?"
        description="Je zwangerschap is uniek. Je beeldje ook."
        ctaText="Boek je Afspraak"
        ctaLink="/tarieven"
      />

      <Footer />
    </div>
  );
};

export default Zwangerschap;
