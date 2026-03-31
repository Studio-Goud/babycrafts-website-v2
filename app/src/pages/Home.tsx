import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Shield, Clock, Award, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import Testimonials from '../components/Testimonials';
import CTABlock from '../components/CTABlock';
import { pageSEO } from '../lib/seo';

const Home = () => {
  useEffect(() => {
    document.title = pageSEO.home.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', pageSEO.home.description);
  }, []);

  const products = [
    {
      title: 'Arte-Lumina',
      subtitle: 'Onze bestseller',
      description: 'Luxe zwangerschapsbeeldjes met een verfijnde, tijdloze uitstraling. Volledig gepersonaliseerd in houding, stijl en afwerking.',
      price: '€399',
      link: '/zwangerschapsbeeldje',
      features: ['Volledig gepersonaliseerd', 'Premium afwerking', 'Inclusief 3D-scan'],
    },
    {
      title: 'Alba-Natura',
      subtitle: 'Natuurlijk \u0026 warm',
      description: 'Een natuurlijk zwangerschapsbeeldje met een warme uitstraling. Geprint met gecertificeerde houtvezel.',
      price: '€299',
      link: '/zwangerschapsbeeldje',
      features: ['Houtvezel composiet', 'Warme uitstraling', 'Eco-vriendelijk'],
    },
    {
      title: 'Atelier-Bronze',
      subtitle: 'Statement piece',
      description: 'Een krachtig statement met massieve uitstraling. Afgewerkt met een dikke laag echt brons of koper.',
      price: '€599',
      link: '/zwangerschapsbeeldje',
      features: ['Echt brons/koper', 'Zware kwaliteit', 'Sculpturaal'],
    },
    {
      title: 'Gegoten Brons',
      subtitle: 'Ultieme luxe',
      description: 'Het ultieme bronzen zwangerschapsbeeldje, volledig gegoten uit echt brons. Een blijvend erfstuk.',
      price: '€1.299',
      link: '/zwangerschapsbeeldje',
      features: ['100% Echt brons', 'Erfstuk kwaliteit', 'Hand gepatineerd'],
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: 'Studio, thuis of ziekenhuis',
      description: 'Jij bepaalt waar jij je zwangerschap het prettigst laat vastleggen.',
    },
    {
      icon: Award,
      title: 'Unieke natuurstenen sokkels',
      description: 'Elk beeldje kan worden geplaatst op een zorgvuldig gekozen unieke sokkel.',
    },
    {
      icon: Shield,
      title: 'Veilige 3D-scan',
      description: 'Contactloos en binnen enkele minuten voltooid. Je voelt niets.',
    },
    {
      icon: Clock,
      title: '5-6 weken levertijd',
      description: 'Eerlijke levertijden zonder verborgen vertragingen.',
    },
  ];

  const testimonials = [
    {
      quote: 'Heel blij met het prachtige beeldje van Lindsay, ze stelde me op gemak tijdens de fotoshoot en hebben samen gekeken wat het mooiste is, heel fijn!',
      name: 'Sigal Kruithof',
      location: 'Rotterdam',
      rating: 5,
    },
    {
      quote: 'Super blij met mijn prachtige beeldje! Lindsay is erg vriendelijk en neemt de tijd om alles rustig uit te leggen. Het resultaat is prachtig.',
      name: 'Janey Ligtenberg',
      location: 'Den Haag',
      rating: 5,
    },
    {
      quote: 'Wat een bijzondere ervaring om mijn zwangerschap zo te laten vastleggen. Het beeldje is nog mooier dan ik had verwacht. Echt een kunstwerk!',
      name: 'Michelle van Dijk',
      location: 'Delft',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Navigation />
      
      <HeroSection
        title="Leg je zwangerschap voor altijd vast"
        description="Professioneel 3D-scantraject met premium afwerking. Comfortabel, veilig en persoonlijk. Alles inbegrepen — zonder meerkosten, inclusief 3D-scan."
        ctaText="Boek je Afspraak"
        ctaLink="/tarieven"
      />

      {/* Features Section */}
      <section className="bg-[#FAF8F5]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-3">
              Waarom Babycrafts
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3D3229]">
              Wat ons uniek maakt
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#C9A962]/10 mb-5">
                  <feature.icon className="w-7 h-7 text-[#C9A962]" />
                </div>
                <h3 className="font-serif text-xl text-[#3D3229] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#3D3229]/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
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
              Onze Collectie
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3D3229] mb-6">
              Premium Materialen \u0026 Afwerkingen
            </h2>
            <p className="text-[#3D3229]/70 max-w-2xl mx-auto">
              Elk beeldje wordt met de hand afgewerkt in ons atelier. 
              Kies de stijl die bij jou past.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.title} {...product} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/tarieven" className="btn-secondary">
              Bekijk alle tarieven
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#3D3229] text-white">
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
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
              Jouw reis naar een tijdloos kunstwerk
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Afspraak Plannen', desc: 'Kies eenvoudig een tijdstip dat past, thuis, in de studio of in het ziekenhuis.' },
              { step: '02', title: 'Warm Ontvangst', desc: 'Wanneer je bij ons binnenkomt, zorgen we voor een rustige sfeer. We bespreken samen de pose en stijl.' },
              { step: '03', title: 'Veilige 3D-scan', desc: 'De scan is volledig veilig, contactloos en binnen enkele minuten voltooid.' },
              { step: '04', title: 'Digitale Verfijning', desc: 'Na het scannen optimaliseren we het model met zorg tot in de kleinste details.' },
              { step: '05', title: 'Ambachtelijke Afwerking', desc: 'Jouw beeldje wordt vervaardigd in het gekozen materiaal en volledig met de hand afgewerkt.' },
              { step: '06', title: 'Oplevering', desc: 'Ophalen in de studio of verzending in beschermverpakking. Een speciaal moment.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <span className="text-5xl font-serif text-[#C9A962]/20 absolute -top-4 -left-2">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl mb-3 relative z-10">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-[#FAF8F5]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-3">
                Op Locatie
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3D3229] mb-6">
                Zwangerschapsbeeldje in de studio, thuis of het ziekenhuis
              </h2>
              <p className="text-[#3D3229]/70 leading-relaxed mb-6">
                Niet iedereen voelt zich prettig bij een studiosessie. Daarom bieden wij ook 
                de mogelijkheid om je zwangerschapsbeeldje thuis te laten maken. In alle rust, 
                in je eigen omgeving.
              </p>
              <p className="text-[#3D3229]/70 leading-relaxed mb-8">
                Daarnaast zijn wij gevestigd in het hart van Rotterdam, op korte afstand van 
                onder andere Erasmus MC, Sophia Kinderziekenhuis, Ikazia Ziekenhuis, 
                Maasstad Ziekenhuis en Sint Franciscus Gasthuis.
              </p>
              <Link to="/contact" className="btn-primary">
                Plan je bezoek
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#E8DFC8]">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-[#C9A962] mx-auto mb-4" />
                    <p className="font-serif text-2xl text-[#3D3229]">Hooidrift 108</p>
                    <p className="text-[#3D3229]/60">3023 KV Rotterdam</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-[#C9A962] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Heart className="w-12 h-12 mx-auto mb-8 opacity-50" />
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8">
              "Dit is geen product. Het is een herinnering, tastbaar gemaakt."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <p className="font-serif text-3xl">1000+</p>
                <p className="text-white/70 text-sm">Beeldjes gerealiseerd</p>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div className="text-center">
                <p className="font-serif text-3xl">5/5</p>
                <p className="text-white/70 text-sm">Google reviews</p>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div className="text-center">
                <p className="font-serif text-3xl">~5 á 6</p>
                <p className="text-white/70 text-sm">Weken levertijd</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Testimonials items={testimonials} />

      <CTABlock
        title="Klaar om jouw zwangerschap te laten vastleggen?"
        description="Je zwangerschap is uniek. Je beeldje ook."
        ctaText="Boek je Afspraak"
        ctaLink="/tarieven"
      />

      <Footer />
    </div>
  );
};

export default Home;
