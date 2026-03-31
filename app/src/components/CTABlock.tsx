import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTABlockProps {
  title: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'gold' | 'dark' | 'light';
  showSparkle?: boolean;
}

const CTABlock = ({
  title,
  description,
  ctaText = 'Boek je Afspraak',
  ctaLink = '/tarieven',
  variant = 'gold',
  showSparkle = true,
}: CTABlockProps) => {
  const variants = {
    gold: 'bg-gradient-to-br from-[#C9A962] to-[#B8984F] text-white',
    dark: 'bg-[#3D3229] text-white',
    light: 'bg-[#FAF8F5] text-[#3D3229] border-2 border-[#E8DFC8]',
  };

  const buttonVariants = {
    gold: 'bg-white text-[#C9A962] hover:bg-[#FAF8F5]',
    dark: 'bg-[#C9A962] text-white hover:bg-[#B8984F]',
    light: 'bg-[#C9A962] text-white hover:bg-[#B8984F]',
  };

  return (
    <section className={variant === 'light' ? 'bg-[#F5F1EB]' : ''}>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${variants[variant]} rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden`}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            {showSparkle && (
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
            )}

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
              {title}
            </h2>

            {description && (
              <p className={`text-lg mb-8 ${variant === 'light' ? 'text-[#3D3229]/70' : 'opacity-90'}`}>
                {description}
              </p>
            )}

            <Link
              to={ctaLink}
              className={`inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${buttonVariants[variant]}`}
            >
              {ctaText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABlock;
