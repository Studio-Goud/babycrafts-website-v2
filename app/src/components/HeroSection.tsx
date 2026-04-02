import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ReactNode } from 'react';
import { getDynamicStatueCount } from '../lib/counter';

interface HeroSectionProps {
  title?: string | ReactNode;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  showRating?: boolean;
  imageUrl?: string;
  variant?: 'home' | 'product' | 'simple';
}

const HeroSection = ({
  title,
  subtitle,
  description,
  ctaText = 'Boek je Afspraak',
  ctaLink = 'https://calendly.com/babycrafts-info/30min',
  secondaryCtaText,
  secondaryCtaLink,
  showRating = true,
  imageUrl,
  variant = 'home',
}: HeroSectionProps) => {
  const statueCount = getDynamicStatueCount();
  if (variant === 'product') {
    return (
      <section className="relative bg-[#F3EFE8] overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {subtitle && (
                <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
                  {subtitle}
                </p>
              )}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#4A4239] leading-tight mb-6">
                {title}
              </h1>
              <p className="text-[#6B5A4D] text-lg leading-relaxed mb-8 max-w-xl">
                {description}
              </p>
              
              {showRating && (
                <div className="flex items-center space-x-2 mb-8">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#C9A962] text-[#C9A962]" />
                    ))}
                  </div>
                  <span className="text-[#7D6A5A] text-sm">
                    5/5 - {statueCount.toLocaleString('nl-NL')}+ tevreden klanten
                  </span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={ctaLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  {ctaText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                {secondaryCtaText && secondaryCtaLink && (
                  <Link to={secondaryCtaLink} className="btn-secondary">
                    {secondaryCtaText}
                  </Link>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#E8DFC8]">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={typeof title === 'string' ? title : 'Afbeelding'}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#7D6A5A]/30">
                    Afbeelding
                  </div>
                )}
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[#D4C8B8]/30">
                <p className="text-3xl font-serif text-[#C9A962] mb-1">{statueCount.toLocaleString('nl-NL')}+</p>
                <p className="text-[#3D3229]/60 text-sm">Beeldjes gerealiseerd</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'simple') {
    return (
      <section className="relative bg-[#3D3229] text-white overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            {subtitle && (
              <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-4">
                {subtitle}
              </p>
            )}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              {title}
            </h1>
            {description && (
              <p className="text-white/70 text-lg leading-relaxed">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  // Default 'home' variant
  return (
    <section className="relative bg-[#F3EFE8] overflow-hidden">
      {/* Subtle warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F3EFE8] via-[#F8F5F0] to-[#EDE8E2]" />
      
      {/* Decorative soft blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#D4A574]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-[#C9A962]/8 rounded-full blur-3xl" />
      </div>

      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .gradient-text {
          background: linear-gradient(
            135deg, 
            #4A4239 0%, 
            #6B4E3D 25%, 
            #8B6914 50%, 
            #C9A962 75%,
            #4A4239 100%
          );
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 8s ease infinite;
        }
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .float-animation {
          animation: subtleFloat 4s ease-in-out infinite;
        }
      `}</style>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8 lg:py-16">
        {/* DESKTOP: Side by side, closer together */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[#7D5A4C]/10 rounded-full mb-6">
              <Star className="w-4 h-4 text-[#C9A962] mr-2 fill-[#C9A962]" />
              <span className="text-[#5A4A3D] text-sm font-medium tracking-wide">{statueCount.toLocaleString('nl-NL')}+ zwangerschappen vastgelegd</span>
            </div>

            {/* Main headline */}
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6">
              <span className="gradient-text">Leg je zwangerschap</span>
              <br />
              <span className="gradient-text">voor altijd vast</span>
            </h1>

            {/* Subheadline */}
            <div className="space-y-2 mb-8">
              <p className="text-[#4A4239] text-lg leading-relaxed max-w-xl font-medium">
                Professioneel 3D-scantraject met premium afwerking.
              </p>
              <p className="text-[#5A4A3D] text-base">
                Comfortabel, veilig en persoonlijk.
              </p>
              <p className="text-[#4A4239] text-sm">
                Alles inbegrepen — <span className="font-semibold text-[#7D5A4C]">zonder meerkosten</span>, inclusief 3D-scan.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#7D5A4C] text-white rounded-full font-medium text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#7D5A4C]/20 hover:-translate-y-0.5"
              >
                <span className="relative z-10">{ctaText}</span>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#6B4E3D] to-[#8B6A5C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <Link 
                to="/zwangerschapsbeeldje" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#7D5A4C] text-[#4A4239] rounded-full font-medium text-lg hover:bg-[#7D5A4C] hover:text-white transition-all duration-300 shadow-lg"
              >
                Zie Collectie
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6 pt-4 border-t border-[#D4C8B8]/50">
              <div className="float-animation" style={{ animationDelay: '0s' }}>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A962] text-[#C9A962]" />
                  ))}
                </div>
                <p className="text-[#7D6A5A] text-sm">5/5 uit <span className="font-medium text-[#5A4A3D]">64</span> Google reviews</p>
              </div>
              <div className="w-px h-10 bg-[#D4C8B8]" />
              <div className="float-animation" style={{ animationDelay: '0.5s' }}>
                <p className="font-serif text-2xl text-[#7D5A4C]">5-6</p>
                <p className="text-[#7D6A5A] text-sm">Weken levertijd</p>
              </div>
            </div>
          </motion.div>

          {/* Image side - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A962]/20 to-[#7D5A4C]/10 rounded-[2.5rem] blur-xl" />
              
              {/* Image */}
              <div className="relative aspect-[3/4] w-[380px] xl:w-[420px] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#4A4239]/10">
                <img
                  src={imageUrl || "/images/studio/DSC00571.JPG"}
                  alt="Zwangerschapsbeeldje"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A4239]/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating review card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-[#D4C8B8]/30">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A962] text-[#C9A962]" />
                  ))}
                </div>
                <p className="text-[#4A4239] font-medium text-sm">"Nog mooier dan verwacht"</p>
                <p className="text-[#7D6A5A] text-xs">— Michelle van Dijk</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MOBILE: Afbeelding bovenaan, tekst eronder */}
        <div className="lg:hidden max-w-md mx-auto">
          {/* Mobile Image - Bovenaan, volle breedte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mb-6"
          >
            {/* Decorative glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[#C9A962]/20 to-[#7D5A4C]/15 rounded-2xl blur-lg" />
            
            <div className="relative aspect-[4/5] max-w-[300px] mx-auto rounded-xl overflow-hidden shadow-lg">
              <img
                src={imageUrl || "/images/studio/DSC00571.JPG"}
                alt="Zwangerschapsbeeldje"
                className="w-full h-full object-cover object-[center_15%]"
                loading="eager"
              />
            </div>
            
            {/* Mini review badge */}
            <div className="absolute -bottom-3 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-[#D4C8B8]/30">
              <div className="flex items-center justify-center gap-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-[#C9A962] text-[#C9A962]" />
                  ))}
                </div>
                <p className="text-[#4A4239] font-medium text-[10px]">"Nog mooier dan verwacht"</p>
              </div>
            </div>
          </motion.div>

          {/* Text Content - Onder de afbeelding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 bg-[#7D5A4C]/10 rounded-full mb-4">
              <Star className="w-3.5 h-3.5 text-[#C9A962] mr-1.5 fill-[#C9A962]" />
              <span className="text-[#5A4A3D] text-xs font-medium">{statueCount.toLocaleString('nl-NL')}+ zwangerschappen</span>
            </div>

            {/* Main headline */}
            <h1 className="font-serif text-4xl leading-[1.1] mb-4">
              <span className="gradient-text">Leg je<br />zwangerschap<br />vast</span>
            </h1>

            {/* Subheadline */}
            <p className="text-[#4A4239] text-sm font-medium mb-1">
              Professioneel 3D-scantraject
            </p>
            <p className="text-[#5A4A3D] text-xs mb-4">
              Alles inbegrepen — <span className="font-semibold text-[#7D5A4C]">zonder meerkosten</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-2 mb-5">
              <a 
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#7D5A4C] text-white rounded-full font-medium text-base"
              >
                {ctaText}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <Link 
                to="/zwangerschapsbeeldje" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-[#7D5A4C] text-[#4A4239] rounded-full font-medium text-base"
              >
                Zie Collectie
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#C9A962] text-[#C9A962]" />
                  ))}
                </div>
                <p className="text-[#7D6A5A] text-xs">5/5 <span className="font-medium">64</span> Google reviews</p>
              </div>
              <div className="w-px h-8 bg-[#D4C8B8]" />
              <div className="text-center">
                <p className="font-serif text-xl text-[#7D5A4C]">5-6</p>
                <p className="text-[#7D6A5A] text-xs">Weken</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;