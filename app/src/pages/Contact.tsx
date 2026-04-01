import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Clock, Instagram, Facebook, Send, MessageCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { pageSEO } from '../lib/seo';

const Contact = () => {
  useEffect(() => {
    document.title = pageSEO.contact.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', pageSEO.contact.description);
  }, []);

  const faqItems = [
    {
      question: 'Waar is de studio?',
      answer: 'Onze studio is gevestigd in Rotterdam, op Hooidrift 108. We zijn goed bereikbaar met de auto en er is voldoende parkeergelegenheid.',
    },
    {
      question: 'Kan ik ook thuis gescand worden?',
      answer: 'Ja! We bieden thuisbezoeken aan in heel Zuid-Holland. Er geldt een kleine vergoeding van €30 voor de reiskosten.',
    },
    {
      question: 'Wat zijn de openingstijden?',
      answer: 'We werken op afspraak, ook in de avonduren en weekenden. Neem contact op voor beschikbaarheid.',
    },
    {
      question: 'Hoe snel krijg ik reactie?',
      answer: 'We streven ernaar om binnen 24 uur te reageren op alle berichten. Bij drukte kan dit soms iets langer duren.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Navigation />

      {/* Header */}
      <section className="bg-[#3D3229] text-white pt-32 pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-3">
              Neem contact op
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Contact
            </h1>
            <p className="text-white/70 text-lg">
              Heb je vragen? We helpen je graag. 
              Bereik ons via WhatsApp of e-mail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-[#FAF8F5]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MessageCircle, title: 'WhatsApp', content: 'Direct chatten', link: 'https://wa.me/31620526806' },
              { icon: Mail, title: 'E-mail', content: 'info@babycrafts.nl', link: 'mailto:info@babycrafts.nl' },
              { icon: MapPin, title: 'Adres', content: 'Hooidrift 108, Rotterdam', link: '#' },
              { icon: Clock, title: 'Openingstijden', content: 'Op afspraak', link: '#' },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#C9A962]/10 mb-4">
                  <item.icon className="w-7 h-7 text-[#C9A962]" />
                </div>
                <h3 className="font-serif text-lg text-[#3D3229] mb-2">{item.title}</h3>
                <p className="text-[#3D3229]/70">{item.content}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="bg-[#F5F1EB]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#E8DFC8] rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center"
            >
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-[#C9A962] mx-auto mb-4" />
                <p className="font-serif text-2xl text-[#3D3229] mb-2">Hooidrift 108</p>
                <p className="text-[#3D3229]/60 mb-4">3023 KV Rotterdam</p>
                <a
                  href="https://maps.google.com/?q=Hooidrift+108+Rotterdam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex"
                >
                  Open in Google Maps
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 lg:p-10"
            >
              <h2 className="font-serif text-2xl text-[#3D3229] mb-6">
                Stuur ons een bericht
              </h2>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#3D3229] mb-2">
                      Voornaam
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DFC8] focus:border-[#C9A962] focus:ring-2 focus:ring-[#C9A962]/20 outline-none transition-all"
                      placeholder="Je voornaam"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3D3229] mb-2">
                      Achternaam
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DFC8] focus:border-[#C9A962] focus:ring-2 focus:ring-[#C9A962]/20 outline-none transition-all"
                      placeholder="Je achternaam"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3D3229] mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8DFC8] focus:border-[#C9A962] focus:ring-2 focus:ring-[#C9A962]/20 outline-none transition-all"
                    placeholder="je@email.nl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3D3229] mb-2">
                    Onderwerp
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-[#E8DFC8] focus:border-[#C9A962] focus:ring-2 focus:ring-[#C9A962]/20 outline-none transition-all bg-white">
                    <option>Algemene vraag</option>
                    <option>Afspraak maken</option>
                    <option>Cadeaubon</option>
                    <option>Tarieven</option>
                    <option>Anders</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3D3229] mb-2">
                    Bericht
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8DFC8] focus:border-[#C9A962] focus:ring-2 focus:ring-[#C9A962]/20 outline-none transition-all resize-none"
                    placeholder="Vertel ons meer..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Verstuur bericht
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-[#E8DFC8]">
                <p className="text-center text-[#3D3229]/60 text-sm mb-4">Of volg ons op social media</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://instagram.com/babycrafts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#F5F1EB] flex items-center justify-center hover:bg-[#C9A962] hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com/babycrafts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#F5F1EB] flex items-center justify-center hover:bg-[#C9A962] hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} title="Contact FAQ" />

      <Footer />
    </div>
  );
};

export default Contact;
