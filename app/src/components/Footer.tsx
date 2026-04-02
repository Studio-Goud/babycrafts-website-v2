import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    diensten: [
      { label: 'Zwangerschapsbeeldje', path: '/zwangerschapsbeeldje' },
      { label: 'Ouder & Kind', path: '/ouder-en-kind-beeldje' },
      { label: 'Familiebeeldje', path: '/familiebeeldje' },
      { label: 'Babybeeldje', path: '/babybeeldje' },
      { label: 'Schoonheidsbeeldje', path: '/schoonheidsbeeldje' },
    ],
    informatie: [
      { label: 'Tarieven', path: '/tarieven' },
      { label: 'Cadeaubon', path: '/cadeaubon' },
      { label: 'Werkwijze', path: '/werkwijze' },
      { label: 'Ambacht', path: '/ambacht' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Algemene Voorwaarden', path: '/algemene-voorwaarden' },
    ],
    contact: [
      { label: 'Over Ons', path: '/over-ons' },
      { label: 'Werkgebieden', path: '/werkgebieden' },
      { label: 'Studio Rotterdam', path: '/studio-rotterdam' },
      { label: 'Studiobezoek', path: '/studiobezoek' },
      { label: 'Ziekenhuisbezoek', path: '/ziekenhuisbezoek' },
      { label: 'Contact', path: '/contact' },
      { label: 'Blog', path: '/blog' },
    ],
  };

  return (
    <footer className="bg-brown-deep text-cream-light">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-medium">Babycrafts</span>
              <span className="text-gold text-sm font-medium ml-1">3D</span>
            </Link>
            <p className="text-cream-light/70 text-sm leading-relaxed mb-6">
              Waar kunst, techniek en emotie samenkomen. Al meer dan 1300 zwangerschappen vastgelegd.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/babycrafts.3d"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream-light/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/babycrafts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream-light/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="font-serif text-lg mb-6">Diensten</h4>
            <ul className="space-y-3">
              {footerLinks.diensten.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream-light/70 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informatie */}
          <div>
            <h4 className="font-serif text-lg mb-6">Informatie</h4>
            <ul className="space-y-3">
              {footerLinks.informatie.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream-light/70 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream-light/70 text-sm">
                  Hooidrift 108<br />
                  3023 KV Rotterdam
                </span>
              </li>
              <li>
                <a
                  href="https://wa.me/31620526806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-cream-light/70 text-sm hover:text-gold transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-gold" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@babycrafts.nl"
                  className="flex items-center space-x-3 text-cream-light/70 text-sm hover:text-gold transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-gold" />
                  <span>info@babycrafts.nl</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-cream-light/5 rounded-xl">
              <p className="text-xs text-cream-light/50">KVK: 94348847</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream-light/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-cream-light/50 text-sm">
              © {currentYear} Babycrafts 3D. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                to="/privacy"
                className="text-cream-light/50 text-sm hover:text-gold transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/algemene-voorwaarden"
                className="text-cream-light/50 text-sm hover:text-gold transition-colors duration-300"
              >
                Algemene Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
