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
    { path: '/werkgebieden', label: 'Werkgebieden' },
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
          isScrolled || isMobileMenuOpen
            ? 'bg-[#F3EFE8]/98 backdrop-blur-md shadow-sm py-3'
            : 'bg-[#F3EFE8]/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-serif text-xl md:text-2xl font-medium text-[#4A4239]">
                Babycrafts
              </span>
              <span className="text-xs md:text-sm font-medium text-[#C9A962]">
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
                      ? 'text-[#C9A962] bg-[#C9A962]/10'
                      : 'text-[#5A4A3D]/80 hover:text-[#4A4239] hover:bg-[#7D5A4C]/5'
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
                className="p-2 rounded-full text-[#5A4A3D] hover:bg-[#D4C8B8]/30 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <Link
                to="/tarieven"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#7D5A4C] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[#6B4E3D] hover:shadow-lg hover:shadow-[#7D5A4C]/20"
              >
                Boek Afspraak
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#4A4239] hover:bg-[#D4C8B8]/30 transition-colors"
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
          className={`lg:hidden absolute top-full left-0 right-0 bg-[#F3EFE8] shadow-lg transition-all duration-300 overflow-hidden ${
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
                    : 'text-[#5A4A3D] hover:text-[#4A4239] hover:bg-[#D4C8B8]/20'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#D4C8B8]">
              <Link
                to="/tarieven"
                className="block w-full text-center px-8 py-4 bg-[#7D5A4C] text-white font-medium rounded-full transition-all duration-300 hover:bg-[#6B4E3D]"
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
