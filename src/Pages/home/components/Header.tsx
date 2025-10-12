import { useState, useEffect } from 'react';
import { Menu, X, Brain } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'خانه', href: '#home' },
    { label: 'راهکارها', href: '#solutions' },
    { label: 'خدمات هوش مصنوعی', href: '#ai-services' },
    { label: 'پروژه‌ها', href: '#projects' },
    { label: 'بلاگ تخصصی', href: '#blog' },
    { label: 'درباره ما', href: '#about' },
    { label: 'تماس با ما', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 animate-scale-in">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl neon-glow">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                داده پردازان بنیان آوا
              </h1>
              <p className={`text-sm transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
                پیشگامان هوش مصنوعی
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:scale-110 animate-fade-in stagger-${index + 1} ${
                  isScrolled
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-white hover:text-blue-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 animate-slide-up">
            <div className="flex flex-col gap-4 bg-white rounded-xl shadow-xl p-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 border-b border-gray-100 last:border-b-0"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
