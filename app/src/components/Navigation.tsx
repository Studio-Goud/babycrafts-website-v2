import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/zwangerschapsbeeldje', label: 'Zwangerschap' },
    { path: '/ouder-en-kind-beeldje', label: 'Ouder & Kind' },
    { path: '/familiebeeldje', label: 'Familie' },
    { path: '/babybeeldje', label: 'Baby' },
    { path: '/tarieven', label: 'Tarieven' },
    { path: '/over-ons', label: 'Over Ons' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-soft py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className={`font-serif text-xl md:text-2xl font-medium transition-colors ${
                isScrolled ? 'text-brown-deep' : 'text-brown-deep'
              }`}>
                Babycrafts
              </span>
              <span className={`text-xs md:text-sm font-medium transition-colors ${
                isScrolled ? 'text-gold' : 'text-gold'
              }`}>
                3D
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    isActive(link.path)
                      ? 'text-gold bg-gold/5'
                      : isScrolled
                      ? 'text-brown-deep/80 hover:text-brown-deep hover:bg-brown-deep/5'
                      : 'text-brown-deep/80 hover:text-brown-deep hover:bg-brown-deep/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="https://wa.me/31620526806"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'text-brown-deep hover:bg-taupe/30'
                    : 'text-brown-deep hover:bg-taupe/30'
                }`}
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <Link
                to="/tarieven"
                className="inline-flex items-center justify-center px-6 py-3 bg-gold text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20"
              >
                Boek Afspraak
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-brown-deep hover:bg-taupe/30 transition-colors"
              aria-label={isMobileMenuOpen ? 'Sluit menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-ivory/98 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                  isActive(link.path)
                    ? 'text-gold bg-gold/10'
                    : 'text-brown-deep/80 hover:text-brown-deep hover:bg-taupe/20'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-taupe">
              <Link
                to="/tarieven"
                className="block w-full text-center inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-medium rounded-full transition-all duration-300 hover:bg-gold-dark"
              >
                Boek Afspraak
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Navigation;
