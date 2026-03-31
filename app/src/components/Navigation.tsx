import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className={`font-serif text-xl md:text-2xl font-semibold transition-colors ${
                isScrolled ? 'text-[#3D3229]' : 'text-[#3D3229]'
              }`}>
                Babycrafts
              </span>
              <span className={`text-xs md:text-sm font-medium transition-colors ${
                isScrolled ? 'text-[#C9A962]' : 'text-[#C9A962]'
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
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActive(link.path)
                      ? 'text-[#C9A962]'
                      : isScrolled
                      ? 'text-[#3D3229]/80 hover:text-[#3D3229]'
                      : 'text-[#3D3229]/80 hover:text-[#3D3229]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="tel:+31612345678"
                className={`p-2 rounded-full transition-colors ${
                  isScrolled
                    ? 'text-[#3D3229] hover:bg-[#3D3229]/5'
                    : 'text-[#3D3229] hover:bg-[#3D3229]/5'
                }`}
                aria-label="Bel ons"
              >
                <Phone className="w-5 h-5" />
              </a>
              <Link
                to="/tarieven"
                className="btn-primary text-sm py-3 px-6"
              >
                Boek Afspraak
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#3D3229] hover:bg-[#3D3229]/5 transition-colors"
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
          className={`lg:hidden absolute top-full left-0 right-0 bg-[#FAF8F5]/98 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden ${
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
                    ? 'text-[#C9A962] bg-[#C9A962]/10'
                    : 'text-[#3D3229]/80 hover:text-[#3D3229] hover:bg-[#3D3229]/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#3D3229]/10">
              <Link
                to="/tarieven"
                className="block w-full btn-primary text-center"
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
