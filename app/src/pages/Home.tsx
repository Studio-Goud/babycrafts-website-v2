import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, MapPin, Award, Shield, Clock, 
  Heart, Star, Gem, Users
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import GoogleReviews from '../components/GoogleReviews';
import CTABlock from '../components/CTABlock';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import { pageSEO } from '../lib/seo';

const Home = () => {
  useEffect(() => {
    document.title = pageSEO.home.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', pageSEO.home.description);
  }, []);

  const features = [
    {
      icon: MapPin,
      title: 'Studio, thuis of ziekenhuis',
      description: 'Jij bepaalt waar jij je zwangerschap het prettigst laat vastleggen.',
    },
    {
      icon: Award,
      title: 'Unieke natuurstenen sokkels',
      description: 'Elk beeldje kan naar wens worden geplaatst op een zorgvuldig gekozen unieke sokkel.',
    },
    {
      icon: Shield,
      title: 'Veilige 3D-scan',
      description: 'Contactloos en binnen enkele minuten voltooid. Je voelt niets.',
    },
    {
      icon: Gem,
      title: 'Handmatige afwerking',
      description: 'Elk zwangerschapsbeeldje wordt persoonlijk verfijnd in eigen atelier.',
    },
    {
      icon: Star,
      title: 'Ambachtelijke bronsgieterij',
      description: 'Voor authentiek gegoten bronzen beeldjes van galerie- en erfstukkwaliteit.',
    },
    {
      icon: Heart,
      title: '1300+ beeldjes gerealiseerd',
      description: 'Ervaring die zichtbaar én voelbaar is in het eindresultaat.',
    },
  ];

  const werkwijzeSteps = [
    {
      title: 'Afspraak Plannen',
      description: 'Kies eenvoudig een tijdstip dat past, thuis, in de studio of in het ziekenhuis.',
    },
    {
      title: 'Warm Ontvangst',
      description: 'Wanneer je bij ons binnenkomt, zorgen we voor een rustige sfeer. We bespreken samen de pose.',
    },
    {
      title: 'Veilige 3D-scan',
      description: 'De scan is volledig veilig, contactloos en binnen enkele minuten voltooid.',
    },
    {
      title: 'Digitale Verfijning',
      description: 'Na het scannen optimaliseren we het model met zorg.',
    },
    {
      title: 'Ambachtelijke Afwerking',
      description: 'Jouw beeldje wordt vervaardigd in het gekozen materiaal en volledig met de hand afgewerkt.',
    },
    {
      title: 'Oplevering',
      description: 'Ophalen in de studio of verzending in beschermverpakking. Een speciaal moment.',
    },
  ];

  const collectie = [
    {
      nummer: '01',
      naam: 'Arte-Lumina',
      beschrijving: 'Luxe zwangerschapsbeeldjes met een verfijnde, tijdloze uitstraling. Volledig gepersonaliseerd in houding, stijl en afwerking.',
      link: '/collectie/arte-lumina',
      afbeelding: '/images/products/Arte Lumina 1.avif',
    },
    {
      nummer: '02',
      naam: 'Alba-Natura',
      beschrijving: 'Een natuurlijk zwangerschapsbeeldje met een warme, rustige uitstraling. Geprint met gecertificeerde houtvezel.',
      link: '/collectie/alba-natura',
      afbeelding: '/images/products/Alba Natura.avif',
    },
    {
      nummer: '03',
      naam: 'Atelier-Bronze',
      beschrijving: 'Een krachtig statement met een massieve uitstraling. Afgewerkt met een dikke laag echt brons of koper.',
      link: '/collectie/atelier-bronze',
      afbeelding: '/images/products/Atelier Bronze.avif',
    },
    {
      nummer: '04',
      naam: 'Gegoten Brons',
      beschrijving: 'Het ultieme bronzen zwangerschapsbeeldje, volledig gegoten uit echt brons. Tijdloos en bedoeld als blijvend erfstuk.',
      link: '/collectie/brons',
      afbeelding: '/images/products/Gegoten Brons gepoetst goud afwerking.avif',
    },
  ];

  const werkgebied = [
    'Schiedam', 'Vlaardingen', 'Barendrecht', 'Ridderkerk', 
    'Capelle aan den IJssel', 'Delft', 'Den Haag', 'Dordrecht'
  ];

  return (
    <div className="min-h-screen bg-beige">
      <Navigation />

      {/* Hero */}
      <HeroSection />

      {/* Features - Wat ons uniek maakt */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-gold font-medium text-sm tracking-wider uppercase mb-4">
                Waarom Babycrafts
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brown-deep mb-6">
                Waar kunst, techniek en emotie samenkomen
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <StaggerItem key={idx}>
                <div className="group bg-cream rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                    <feature.icon className="w-7 h-7 text-gold group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-serif text-xl text-brown-deep mb-3">{feature.title}</h3>
                  <p className="text-brown/70 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Over Babycrafts */}
      <section className="py-20 lg:py-28 bg-beige">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div>
                  <p className="text-gold font-medium text-sm tracking-wider uppercase mb-4">
                    Over Babycrafts
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl text-brown-deep mb-6">
                    Zwangerschapsbeeldje laten maken waar kunst, techniek en emotie samenkomen
                  </h2>
                  <div className="space-y-4 text-brown/80 leading-relaxed">
                    <p>
                      Een zwangerschapsbeeldje is meer dan een object. Het is een tastbare herinnering aan een unieke periode in je leven. Bij Babycrafts 3D leggen we jouw zwangerschap vast met aandacht, vakmanschap en respect voor jouw lichaam en verhaal.
                    </p>
                    <p>
                      Het maken van een zwangerschapsbeeldje begint altijd met een afspraak waarin rust en vertrouwen centraal staan. Tijdens deze sessie nemen we de tijd om verschillende houdingen, poses en details te verkennen.
                    </p>
                    <p>
                      Zo ontstaat een beeldje dat niet alleen technisch klopt, maar ook emotioneel raakt.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-taupe">
                    {[
                      { nummer: '1300+', label: 'Beeldjes gerealiseerd' },
                      { nummer: '5/5', label: 'Google reviews' },
                      { nummer: '~5 á 6', label: 'Weken levertijd' },
                    ].map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <p className="font-serif text-2xl md:text-3xl text-gold mb-1">{stat.nummer}</p>
                        <p className="text-brown/60 text-sm">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/over-ons"
                    className="inline-flex items-center mt-10 text-brown-deep font-medium hover:text-gold transition-colors"
                  >
                    Meer over ons
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="relative">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                    <img
                      src="/images/studio/Lindsay portret 2.avif"
                      alt="Lindsay van Rijn - Oprichtster Babycrafts 3D"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-ivory rounded-2xl p-6 shadow-xl max-w-xs">
                    <p className="font-serif text-brown-deep italic">
                      "Dit is geen product. Het is een herinnering, tastbaar gemaakt."
                    </p>
                    <p className="text-brown/60 text-sm mt-4">— Lindsay</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-gold font-medium text-sm tracking-wider uppercase mb-4">
                Ons Proces
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brown-deep mb-6">
                Jouw reis naar een tijdloos kunstwerk
              </h2>
              <p className="text-brown/70">
                Van de eerste kennismaking tot het moment dat je jouw beeldje in handen hebt — elke stap is doordacht.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {werkwijzeSteps.map((step, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="relative bg-cream rounded-2xl p-8 h-full">
                    <span className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center font-serif text-lg">
                      {idx + 1}
                    </span>
                    <h3 className="font-serif text-xl text-brown-deep mb-3">{step.title}</h3>
                    <p className="text-brown/70 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collectie */}
      <section className="py-20 lg:py-28 bg-beige">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-gold font-medium text-sm tracking-wider uppercase mb-4">
                Collectie
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brown-deep mb-6">
                Premium Materialen & Afwerkingen
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {collectie.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <Link to={item.link} className="group block">
                    <div className="bg-ivory rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={item.afbeelding}
                          alt={item.naam}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <span className="text-gold/60 font-serif text-sm">{item.nummer}</span>
                            <h3 className="font-serif text-2xl text-brown-deep">{item.naam}</h3>
                          </div>
                          <ArrowRight className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                        </div>
                        <p className="text-brown/70 text-sm leading-relaxed">{item.beschrijving}</p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="text-center mt-12">
                <Link
                  to="/tarieven"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brown-deep text-cream-light font-medium rounded-full transition-all duration-300 hover:bg-brown hover:shadow-lg"
                >
                  Bekijk alle tarieven
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Op locatie */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                  <img
                    src="/images/studio/Studio art.avif"
                    alt="Babycrafts Studio Rotterdam"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div>
                  <p className="text-gold font-medium text-sm tracking-wider uppercase mb-4">
                    Op Locatie
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl text-brown-deep mb-6">
                    Zwangerschapsbeeldje in de studio, thuis of het ziekenhuis
                  </h2>
                  <div className="space-y-4 text-brown/80 leading-relaxed mb-8">
                    <p>
                      Niet iedereen voelt zich prettig bij een studiosessie. Daarom bieden wij ook de mogelijkheid om je zwangerschapsbeeldje thuis te laten maken. In alle rust, in je eigen omgeving.
                    </p>
                    <p>
                      Daarnaast zijn wij gevestigd in het hart van Rotterdam, op korte afstand van Erasmus MC, Sophia Kinderziekenhuis, Ikazia Ziekenhuis, Maasstad Ziekenhuis en Sint Franciscus Gasthuis. Indien nodig kunnen we ook in het ziekenhuis langskomen.
                    </p>
                  </div>

                  <div className="mb-8">
                    <p className="text-brown-deep font-medium mb-4">Wij zijn actief in:</p>
                    <div className="flex flex-wrap gap-2">
                      {werkgebied.map((stad, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-cream rounded-full text-brown/70 text-sm"
                        >
                          {stad}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-medium rounded-full transition-all duration-300 hover:bg-gold-dark hover:shadow-lg"
                  >
                    Plan je afspraak
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <GoogleReviews />

      {/* CTA Block */}
      <section className="py-20 lg:py-28 bg-beige">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <CTABlock 
            title="Klaar om jouw zwangerschap vast te leggen?"
            description="Boek nu je 3D-scan en ontvang binnen 5-6 weken je unieke beeldje."
            ctaText="Boek je Afspraak"
            ctaLink="/tarieven"
            variant="gold"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
