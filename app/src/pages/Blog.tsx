import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, ArrowRight, Tag, Baby, Heart, Sparkles, Camera
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import CTABlock from '../components/CTABlock';
import { pageSEO } from '../lib/seo';

const Blog = () => {
  useEffect(() => {
    document.title = pageSEO['blog'].title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageSEO['blog'].description);
    window.scrollTo(0, 0);
  }, []);

  const artikelen = [
    {
      slug: 'wanneer-zwangerschapsbeeldje-maken',
      titel: 'Wanneer is het beste moment voor een zwangerschapsbeeldje?',
      excerpt: 'De ideale timing ligt tussen week 28 en 36, maar er zijn meer factoren om rekening mee te houden. Lees alles over het perfecte moment.',
      categorie: 'Timing',
      icon: Calendar,
      leestijd: '5 min',
      afbeelding: '/images/studio/DSC00571.JPG',
    },
    {
      slug: '3d-scan-veilig-zwangerschap',
      titel: 'Is een 3D scan veilig tijdens de zwangerschap?',
      excerpt: 'Veel vrouwen vragen zich af of 3D scannen schadelijk is. Het antwoord is nee - het is net zo veilig als een gewone foto. Uitleg over de technologie.',
      categorie: 'Veiligheid',
      icon: Heart,
      leestijd: '4 min',
      afbeelding: '/images/studio/DSC00508.webp',
    },
    {
      slug: 'verschillende-materialen-beeldjes',
      titel: 'Welk materiaal kies je voor je zwangerschapsbeeldje?',
      excerpt: 'Arte-Lumina, Alba-Natura, Atelier-Bronze of Gegoten Brons? Een uitgebreide gids om de juiste keuze te maken voor jouw situatie.',
      categorie: 'Materialen',
      icon: Sparkles,
      leestijd: '7 min',
      afbeelding: '/images/products/Arte Lumina 1.avif',
    },
    {
      slug: 'zwangerschapsbeeldje-tweeling',
      titel: 'Een zwangerschapsbeeldje bij een tweeling',
      excerpt: 'Bij een tweelingzwangerschap is het juist nog specialer om dit moment vast te leggen. Alles wat je moet weten over timing en mogelijkheden.',
      categorie: 'Tweeling',
      icon: Baby,
      leestijd: '5 min',
      afbeelding: '/images/products/Ouder & Kind beeldje.avif',
    },
    {
      slug: 'wat-kost-zwangerschapsbeeldje',
      titel: 'Wat kost een zwangerschapsbeeldje in 2025?',
      excerpt: 'Een overzicht van alle kosten: van de scan tot het eindproduct. Transparante prijsinformatie zonder verborgen kosten.',
      categorie: 'Kosten',
      icon: Tag,
      leestijd: '6 min',
      afbeelding: '/images/products/Atelier Bronze.avif',
    },
    {
      slug: 'thuis-ziekenhuis-scan',
      titel: 'Scan in de studio, thuis of in het ziekenhuis?',
      excerpt: 'Je kunt bij Babycrafts 3D kiezen waar je gescand wilt worden. De voor- en nadelen van elke locatie op een rij.',
      categorie: 'Locatie',
      icon: Camera,
      leestijd: '4 min',
      afbeelding: '/images/studio/DSC00491.webp',
    },
  ];

  const categorieen = [
    { naam: 'Alle artikelen', count: artikelen.length },
    { naam: 'Timing', count: 1 },
    { naam: 'Veiligheid', count: 1 },
    { naam: 'Materialen', count: 1 },
    { naam: 'Kosten', count: 1 },
    { naam: 'Locatie', count: 1 },
    { naam: 'Tweeling', count: 1 },
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
              Kennisbank
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Blog & Artikelen
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Alles wat je wilt weten over zwangerschapsbeeldjes, 
              van timing en materialen tot inspiratie en verhalen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categorieën */}
      <section className="py-8 bg-[#FAF8F5] border-b border-[#D4C8B8]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categorieen.map((cat, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    idx === 0
                      ? 'bg-[#7D5A4C] text-white'
                      : 'bg-white text-[#6B5A4D] hover:bg-[#D4C8B8]/30'
                  }`}
                >
                  {cat.naam}
                  <span className="ml-2 text-xs opacity-60">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artikelen Grid */}
      <section className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artikelen.map((artikel, idx) => (
                <StaggerItem key={idx}>
                  <Link
                    to={`/blog/${artikel.slug}`}
                    className="group block bg-[#FAF8F5] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={artikel.afbeelding}
                        alt={artikel.titel}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#C9A962]/10 text-[#C9A962] text-xs font-medium">
                          <artikel.icon className="w-3 h-3 mr-1" />
                          {artikel.categorie}
                        </span>
                        <span className="text-[#6B5A4D] text-xs flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {artikel.leestijd}
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-xl text-[#4A4239] mb-3 group-hover:text-[#C9A962] transition-colors line-clamp-2">
                        {artikel.titel}
                      </h3>
                      
                      <p className="text-[#6B5A4D] text-sm leading-relaxed line-clamp-3 mb-4">
                        {artikel.excerpt}
                      </p>
                      
                      <span className="inline-flex items-center text-[#C9A962] text-sm font-medium">
                        Lees meer
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        title="Staat je vraag er niet tussen?"
        description="We beantwoorden hem graag persoonlijk"
        ctaText="Neem contact op"
        ctaLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default Blog;