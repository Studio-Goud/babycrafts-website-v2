import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Clock, Shield, Heart, Star, ArrowRight
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import CTABlock from '../components/CTABlock';

const Rotterdam = () => {
  useEffect(() => {
    document.title = 'Zwangerschapsbeeldje Rotterdam | Babycrafts 3D';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Laat je zwangerschap vastleggen in Rotterdam. 3D-scan in onze studio in Delfshaven of bij jou thuis. Al vanaf €199. Bekijk de mogelijkheden.');
    window.scrollTo(0, 0);
  }, []);

  const voordelen = [
    {
      icon: MapPin,
      title: 'Studio in Delfshaven',
      desc: 'Onze studio ligt in het hart van Rotterdam, goed bereikbaar met OV en auto.',
    },
    {
      icon: Clock,
      title: 'Flexibele tijden',
      desc: 'Ook beschikbaar in de avond en weekend, zodat het past bij jouw agenda.',
    },
    {
      icon: Shield,
      title: 'Altijd dichtbij',
      desc: 'Woon je in Rotterdam? Dan zijn we binnen 30 minuten bij je thuis.',
    },
    {
      icon: Heart,
      title: 'Lokaal vertrouwd',
      desc: 'Al meer dan 800 Rotterdamse gezinnen gingen je voor.',
    },
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
              Zwangerschapsbeeldje Rotterdam
            </p>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Jouw zwangerschap vastleggen in Rotterdam
            </h1>
            
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              In onze studio in Delfshaven of bij jou thuis in Rotterdam en omgeving. 
              Professioneel, persoonlijk en veilig.
            </p>
            
            <a
              href="https://calendly.com/babycrafts-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A962] text-white rounded-full font-medium text-lg hover:bg-[#B8984F] transition-all duration-300"
            >
              Boek direct een afspraak
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
                  Waarom Rotterdam
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#4A4239]">
                  De voordelen van onze Rotterdamse studio
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {voordelen.map((voordeel, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="bg-[#FAF8F5] rounded-2xl p-8">
                    <voordeel.icon className="w-10 h-10 text-[#C9A962] mb-4" />
                    <h3 className="font-serif text-xl text-[#4A4239] mb-2">{voordeel.title}</h3>
                    <p className="text-[#6B5A4D]">{voordeel.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locatie */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="/images/studio/DSC00508.webp"
                    alt="Babycrafts Studio Rotterdam Delfshaven"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div>
                  <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
                    Onze Locatie
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#4A4239] mb-6">
                    Studio Delfshaven
                  </h2>
                  
                  <div className="space-y-4 text-[#6B5A4D]">
                    <p>
                      <strong className="text-[#4A4239]">Adres:</strong><br />
                      Hooidrift 108<br />
                      3023 KV Rotterdam
                    </p>
                    
                    <p>
                      <strong className="text-[#4A4239]">Bereikbaarheid:</strong><br />
                      • Metro: Coolhaven (5 min. lopen)<br />
                      • Auto: Gratis parkeren na 18:00
                    </p>

                    <p>
                      <strong className="text-[#4A4239]">Ziekenhuizen in de buurt:</strong><br />
                      Erasmus MC, Sophia Kinderziekenhuis, Ikazia, Maasstad
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#C9A962] text-[#C9A962]" />
                ))}
              </div>
              
              <blockquote className="font-serif text-2xl md:text-3xl text-[#4A4239] mb-6">
                "Lindsay heeft ons fantastisch geholpen in de Rotterdamse studio. 
                Het resultaat is adembenemend!"
              </blockquote>
              
              <p className="text-[#6B5A4D]">
                — Sarah uit Rotterdam, via Google Reviews
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTABlock
        title="Klaar om jouw zwangerschap vast te leggen?"
        description="Boek nu een afspraak in onze Rotterdamse studio of laat ons bij jou thuis komen."
      />

      <Footer />
    </div>
  );
};

export default Rotterdam;