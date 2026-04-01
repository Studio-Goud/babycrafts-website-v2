import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ReactNode } from 'react';

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
  ctaLink = '/tarieven',
  secondaryCtaText,
  secondaryCtaLink,
  showRating = true,
  imageUrl,
  variant = 'home',
}: HeroSectionProps) => {
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
                    5/5 - 1300+ tevreden klanten
                  </span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={ctaLink} className="btn-primary">
                  {ctaText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
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
                <p className="text-3xl font-serif text-[#C9A962] mb-1">1300+</p>
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

  // Default 'home' variant - Met gradient text effect
  return (
    <section className="relative bg-[#F3EFE8] overflow-hidden min-h-[90vh] flex items-center">
      {/* Subtle warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F3EFE8] via-[#F8F5F0] to-[#EDE8E2]" />
      
      {/* Decorative soft blobs - CSS only */}
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
        .gradient-text-subtle {
          background: linear-gradient(
            90deg,
            #4A4239 0%,
            #5A4A3D 50%,
            #4A4239 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 6s ease-in-out infinite;
        }
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .float-animation {
          animation: subtleFloat 4s ease-in-out infinite;
        }
      `}</style>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
        {/* Mobile background image - semi transparent */}
        <div 
          className="absolute inset-0 lg:hidden opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${imageUrl || "/images/studio/DSC00571.JPG"})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-[#F3EFE8] via-[#F3EFE8]/80 to-[#F3EFE8]" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[#7D5A4C]/10 rounded-full mb-8">
              <Star className="w-4 h-4 text-[#C9A962] mr-2 fill-[#C9A962]" />
              <span className="text-[#5A4A3D] text-sm font-medium tracking-wide">1300+ zwangerschappen vastgelegd</span>
            </div>

            {/* Main headline with gradient */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
              <span className="gradient-text">Leg je zwangerschap</span>
              <br />
              <span className="gradient-text">voor altijd vast</span>
            </h1>

            {/* Subheadline */}
            <div className="space-y-3 mb-10">
              <p className="text-[#5A4A3D] text-lg md:text-xl leading-relaxed max-w-xl">
                <span className="font-medium text-[#4A4239]">Professioneel 3D-scantraject</span> met premium afwerking.
              </p>
              <p className="text-[#6B5A4D] text-lg">
                Comfortabel, veilig en persoonlijk.
              </p>
              <p className="text-[#7D6A5A] text-base">
                Alles inbegrepen — <span className="font-medium text-[#C9A962]">zonder meerkosten</span>, inclusief 3D-scan.
              </p>
            </div>

            {/* CTA Buttons - Original Babycrafts colors */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                to={ctaLink} 
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#7D5A4C] text-white rounded-full font-medium text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#7D5A4C]/20 hover:-translate-y-0.5"
              >
                <span className="relative z-10">{ctaText}</span>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#6B4E3D] to-[#8B6A5C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link 
                to="/zwangerschapsbeeldje" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#7D5A4C]/30 text-[#5A4A3D] rounded-full font-medium text-lg hover:border-[#7D5A4C] hover:bg-[#7D5A4C]/5 transition-all duration-300"
              >
                Zie Collectie
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-6 border-t border-[#D4C8B8]/50">
              <div className="float-animation" style={{ animationDelay: '0s' }}>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A962] text-[#C9A962]" />
                  ))}
                </div>
                <p className="text-[#7D6A5A] text-sm">5/5 uit <span className="font-medium text-[#5A4A3D]">1300+</span> reviews</p>
              </div>
              <div className="w-px h-10 bg-[#D4C8B8]" />
              <div className="float-animation" style={{ animationDelay: '0.5s' }}>
                <p className="font-serif text-2xl text-[#7D5A4C]">5-6</p>
                <p className="text-[#7D6A5A] text-sm">Weken levertijd</p>
              </div>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A962]/20 to-[#7D5A4C]/10 rounded-[2.5rem] blur-xl" />
              
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#4A4239]/10">
                <img
                  src={imageUrl || "/images/studio/DSC00571.JPG"}
                  alt="Zwangerschapsbeeldje"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Subtle gradient overlay */}
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
      </div>
    </section>
  );
};

export default HeroSection;
