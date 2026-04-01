import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Shield, Clock, Award, MapPin, Star, Check } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import GoogleReviews from '../components/GoogleReviews';
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
      price: '€199',
      imageUrl: '/images/products/Arte Lumina 1.avif',
      link: '/zwangerschapsbeeldje',
      features: ['Volledig gepersonaliseerd', 'Premium afwerking', 'Inclusief 3D-scan'],
    },
    {
      title: 'Alba-Natura',
      subtitle: 'Natuurlijk & warm',
      description: 'Een natuurlijk zwangerschapsbeeldje met een warme uitstraling. Geprint met gecertificeerde houtvezel.',
      price: '€199',
      imageUrl: '/images/products/Alba Natura.avif',
      link: '/zwangerschapsbeeldje',
      features: ['Houtvezel composiet', 'Warme uitstraling', 'Eco-vriendelijk'],
    },
    {
      title: 'Atelier-Bronze',
      subtitle: 'Statement piece',
      description: 'Een krachtig statement met massieve uitstraling. Afgewerkt met een dikke laag echt brons of koper.',
      price: '€569',
      imageUrl: '/images/products/Atelier Bronze.avif',
      link: '/zwangerschapsbeeldje',
      features: ['Echt brons/koper', 'Zware kwaliteit', 'Sculpturaal'],
    },
    {
      title: 'Gegoten Brons',
      subtitle: 'Ultieme luxe',
      description: 'Het ultieme bronzen zwangerschapsbeeldje, volledig gegoten uit echt brons. Een blijvend erfstuk.',
      price: '€1.069',
      imageUrl: '/images/products/Gegoten Brons gepoetst goud afwerking.avif',
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

  const studioImages = [
    '/images/studio/DSC00589.JPG',
    '/images/studio/DSC00620.JPG',
    '/images/studio/DSC00628.JPG',
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Navigation />
      
      <HeroSection
        title="Leg je zwangerschap voor altijd vast"
        description="Professioneel 3D-scantraject met premium afwerking. Comfortabel, veilig en persoonlijk. Alles inbegrepen — zonder meerkosten, inclusief 3D-scan."
        ctaText="Boek je Afspraak"
        ctaLink="/tarieven"
        imageUrl="/images/products/Arte Lumina 2.avif"
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
              Premium 3D Beeldjes
            </h2>
            <p className="text-[#3D3229]/70 text-lg max-w-2xl mx-auto">
              Van natuurlijke houtvezel tot massief brons. Kies het materiaal dat bij jou past.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/tarieven" className="btn-primary inline-flex">
              Bekijk alle tarieven
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section with Images */}
      <section className="bg-[#3D3229] text-white overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
                Het Proces
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
                Van scan naar kunstwerk
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Het maken van een zwangerschapsbeeldje begint altijd met een afspraak waarin rust en vertrouwen centraal staan. Tijdens deze sessie nemen we de tijd om verschillende houdingen, poses en details te verkennen.
              </p>

              <div className="space-y-4">
                {[
                  'Professionele 3D-scan in onze studio',
                  'Digitale nabewerking en verfijning',
                  'Ambachtelijke productie en afwerking',
                  'Oplevering binnen 5-6 weken',
                ].map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#C9A962]/20 flex items-center justify-center mr-4">
                      <Check className="w-4 h-4 text-[#C9A962]" />
                    </div>
                    <span className="text-white/80">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {studioImages.map((img, idx) => (
                <div key={idx} className={`rounded-2xl overflow-hidden ${idx === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}>
                  <img
                    src={img}
                    alt={`Studio impressie ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ouder & Kind Preview */}
      <section className="bg-[#FAF8F5]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/products/Ouder & Kind beeldje.avif"
                  alt="Ouder en Kind beeldje"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
                Ouder & Kind
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3D3229] mb-6">
                De band vastgelegd in 3D
              </h2>
              <p className="text-[#3D3229]/70 text-lg leading-relaxed mb-8">
                Naast zwangerschapsbeeldjes maken we ook prachtige 3D beeldjes van ouder en kind samen. 
                Een uniek aandenken aan de speciale verbinding tussen jullie.
              </p>
              <Link to="/ouder-en-kind-beeldje" className="btn-primary inline-flex">
                Ontdek Ouder & Kind
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* CTA Block */}
      <CTABlock />

      <Footer />
    </div>
  );
};

export default Home;
