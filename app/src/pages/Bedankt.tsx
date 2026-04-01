import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Bedankt = () => {
  useEffect(() => {
    document.title = 'Bedankt voor je boeking | Babycrafts 3D';
    
    // Push GTM event for conversion tracking
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'calendly_booking_completed',
        eventCategory: 'conversion',
        eventAction: 'booking_completed',
        eventLabel: '30min_consultation',
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#3D3229] text-white py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="w-20 h-20 bg-[#C9A962] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                Bedankt voor je boeking!
              </h1>
              <p className="text-white/70 text-lg max-w-xl mx-auto">
                Je afspraak is succesvol gepland. We kijken ernaar uit je te ontmoeten 
                en samen dit bijzondere moment vast te leggen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-4">
                Wat kun je verwachten?
              </h2>
              <p className="text-[#3D3229]/60">
                Zo bereiden we samen jouw beeldje voor
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Calendar,
                  title: 'Bevestiging',
                  description: 'Je ontvangt binnen enkele minuten een e-mail met alle details van je afspraak.',
                },
                {
                  icon: Heart,
                  title: 'Voorbereiding',
                  description: 'We sturen je een korte voorbereidingsgids zodat je optimaal kunt genieten van de sessie.',
                },
                {
                  icon: Check,
                  title: 'De Sessie',
                  description: 'Kom naar onze studio in Rotterdam of we komen naar je toe. We nemen alle tijd voor je.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#C9A962]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-[#C9A962]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#3D3229] mb-3">{item.title}</h3>
                  <p className="text-[#3D3229]/60">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FAF8F5] py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mb-6">
                Nog vragen?
              </h2>
              <p className="text-[#3D3229]/60 mb-8">
                We zijn er om je te helpen. Neem gerust contact met ons op via WhatsApp of e-mail.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/31620526806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#128C7E] transition-colors"
                >
                  WhatsApp ons
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  to="/tarieven"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#3D3229] text-[#3D3229] rounded-full font-medium hover:bg-[#3D3229] hover:text-white transition-colors"
                >
                  Bekijk tarieven
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bedankt;
