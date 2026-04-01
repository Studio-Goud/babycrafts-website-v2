import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Clock, Shield, Heart, Star, ArrowRight
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import CTABlock from '../components/CTABlock';

const DenHaag = () => {
  useEffect(() => {
    document.title = 'Zwangerschapsbeeldje Den Haag | Babycrafts 3D';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Laat je zwangerschap vastleggen in Den Haag. Wij komen bij je thuis of je reist naar onze studio in Rotterdam. Al vanaf €199.');
    window.scrollTo(0, 0);
  }, []);

  const voordelen = [
    {
      icon: MapPin,
      title: 'Thuis in Den Haag',
      desc: 'Wij komen graag bij je thuis in Den Haag en omgeving. Comfortabel en persoonlijk.',
    },
    {
      icon: Clock,
      title: 'Slechts 45 minuten',
      desc: 'Vanaf Den Haag Centrum ben je in 45 minuten bij onze studio in Rotterdam.',
    },
    {
      icon: Shield,
      title: 'Veilig transport',
      desc: 'Kies je voor thuis? Dan nemen wij alle apparatuur mee, veilig en professioneel.',
    },
    {
      icon: Heart,
      title: 'Persoonlijke service',
      desc: 'Ook voor Den Haag geldt: elke klant krijgt onze volledige aandacht.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3EFE8]">
      <Navigation />

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
              Zwangerschapsbeeldje Den Haag
            </p>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Zwangerschapsbeeldje in Den Haag
            </h1>
            
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Wij komen bij je thuis in Den Haag, of je bezoekt onze studio in Rotterdam. 
              Jouw keuze, onze zorg.
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

      <section className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
                  Thuis in Den Haag
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#4A4239]">
                  Zo werkt het in Den Haag
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

      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-[#F3EFE8] rounded-2xl p-8 md:p-12">
                <h2 className="font-serif text-2xl md:text-3xl text-[#4A4239] mb-6">
                  Twee opties voor Den Haag
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-medium text-[#4A4239] mb-2">Optie 1: Thuis in Den Haag</h3>
                    <p className="text-[#6B5A4D] mb-4">
                      Wij komen met alle apparatuur naar je toe. Jij hoeft de deur niet uit. 
                      Extra kosten: €30 voor reiskosten binnen Den Haag.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-[#4A4239] mb-2">Optie 2: Studio Rotterdam</h3>
                    <p className="text-[#6B5A4D] mb-4">
                      Bezoek onze professionele studio. Vanaf Den Haag Centrum 
                      slechts 45 minuten met de auto of OV.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

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
                "Lindsay is bij ons thuis gekomen in Den Haag. Zo relaxed! 
                Het beeldje is prachtig geworden."
              </blockquote>
              
              <p className="text-[#6B5A4D]">
                — Emma uit Den Haag, via Google Reviews
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTABlock
        title="Ook uit Den Haag?"
        description="Boek een thuisafspraak of kom naar onze studio in Rotterdam."
      />

      <Footer />
    </div>
  );
};

export default DenHaag;