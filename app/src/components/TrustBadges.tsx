import { motion } from 'framer-motion';
import { Star, Users, Award, Shield } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: Star,
      value: '5.0',
      label: 'Google Reviews',
      sublabel: 'Uitstekend',
    },
    {
      icon: Users,
      value: '1300+',
      label: 'Tevreden klanten',
      sublabel: 'En groeiend',
    },
    {
      icon: Award,
      value: '100%',
      label: 'Veilig scannen',
      sublabel: 'Geen straling',
    },
    {
      icon: Shield,
      value: '2018',
      label: 'Sinds',
      sublabel: '8 jaar ervaring',
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-12 border-y border-[#E8DFC8]">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#C9A962]/10 flex items-center justify-center mb-3">
                  <badge.icon className="w-6 h-6 text-[#C9A962]" />
                </div>
                <p className="text-2xl md:text-3xl font-serif text-[#3D3229]">
                  {badge.value}
                </p>
                <p className="text-sm font-medium text-[#3D3229]">{badge.label}</p>
                <p className="text-xs text-[#3D3229]/60">{badge.sublabel}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Google Reviews Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center items-center gap-4"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C9A962] text-[#C9A962]" />
              ))}
            </div>
            <p className="text-sm text-[#3D3229]/70">
              <span className="font-medium text-[#3D3229]">5.0/5</span> gebaseerd op{' '}
              <span className="font-medium text-[#3D3229]">47+ Google reviews</span>
            </p>
            <a
              href="https://g.co/kgs/8k5ZJ5X"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#C9A962] hover:underline"
            >
              Bekijk alle reviews →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
