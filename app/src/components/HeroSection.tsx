import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ReactNode } from 'react';

interface HeroSectionProps {
  title: string | ReactNode;
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
      <section className="relative bg-[#F5F1EB] overflow-hidden">
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
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#3D3229] leading-tight mb-6">
                {title}
              </h1>
              <p className="text-[#3D3229]/70 text-lg leading-relaxed mb-8 max-w-xl">
                {description}
              </p>
              
              {showRating && (
                <div className="flex items-center space-x-2 mb-8">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#C9A962] text-[#C9A962]" />
                    ))}
                  </div>
                  <span className="text-[#3D3229]/60 text-sm">
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
                  <div className="w-full h-full flex items-center justify-center text-[#3D3229]/30">
                    Afbeelding
                  </div>
                )}
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
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

  // Default 'home' variant
  return (
    <section className="relative bg-[#F5F1EB] overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A962]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E8DFC8]/40 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#C9A962]/10 rounded-full mb-6">
              <Star className="w-4 h-4 text-[#C9A962] mr-2" />
              <span className="text-[#3D3229] text-sm font-medium">1300+ zwangerschappen vastgelegd</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#3D3229] leading-[1.1] mb-6">
              {title}
            </h1>
            <p className="text-[#3D3229]/70 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={ctaLink} className="btn-primary text-lg">
                {ctaText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/zwangerschapsbeeldje" className="btn-secondary text-lg">
                Bekijk Collectie
              </Link>
            </div>

            <div className="mt-12 flex items-center space-x-8">
              <div>
                <p className="font-serif text-3xl text-[#C9A962]">5/5</p>
                <p className="text-[#3D3229]/60 text-sm">Google Reviews</p>
              </div>
              <div className="w-px h-12 bg-[#3D3229]/20" />
              <div>
                <p className="font-serif text-3xl text-[#C9A962]">5-6</p>
                <p className="text-[#3D3229]/60 text-sm">Weken levertijd</p>
              </div>
              <div className="w-px h-12 bg-[#3D3229]/20" />
              <div>
                <p className="font-serif text-3xl text-[#C9A962]">€199</p>
                <p className="text-[#3D3229]/60 text-sm">Vanaf prijs</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Zwangerschapsbeeldje"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#E8DFC8] to-[#C9A962]/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#C9A962]/20 flex items-center justify-center">
                      <span className="font-serif text-5xl text-[#C9A962]">3D</span>
                    </div>
                    <p className="text-[#3D3229]/50">Hero Image</p>
                  </div>
                </div>
              )}
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A962] text-[#C9A962]" />
                ))}
              </div>
              <p className="text-[#3D3229] font-medium">"Nog mooier dan verwacht"</p>
              <p className="text-[#3D3229]/60 text-sm">- Michelle van Dijk</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
