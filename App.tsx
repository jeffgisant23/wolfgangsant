import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDown, Globe } from 'lucide-react';
import { BookSection } from './components/BookSection';
import { Universe } from './components/Universe';
import { Author } from './components/Author';
import { Archive } from './components/Archive';
import { Oracle } from './components/Oracle';
import { Footer } from './components/Footer';
import { Services } from './components/Services';
import { Training } from './components/Training';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.book, href: '#libro' },
    { label: t.nav.oracle, href: '#oracle' },
    { label: t.nav.services, href: '#servicios' },
    { label: t.nav.training, href: '#formacion' },
    { label: t.nav.author, href: '#autor' },
  ];

  return (
    <div className="min-h-screen bg-brand-black text-brand-white selection:bg-brand-purple selection:text-white overflow-x-hidden font-sans">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brand-black/95 backdrop-blur-md py-4 border-b border-brand-purple/20' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex flex-col group z-50">
            <span className="text-xl font-serif tracking-widest uppercase group-hover:text-brand-purple transition-colors">Jeffrey G. Santos</span>
            <span className="text-[0.6rem] text-gray-500 tracking-[0.2em] group-hover:text-white transition-colors">{t.nav.subtitle}</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-xs uppercase tracking-widest text-gray-400 hover:text-white hover:underline decoration-brand-purple underline-offset-8 transition-all"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-xs uppercase tracking-widest text-brand-purple hover:text-white transition-colors border border-brand-purple/50 px-3 py-1 rounded-full"
            >
              <Globe className="w-3 h-3" />
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden z-50">
            <button 
              onClick={toggleLanguage}
              className="text-xs font-bold text-brand-purple uppercase"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
            <button 
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-brand-black flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-serif text-white hover:text-brand-purple transition-colors"
              >
                {item.label}
              </a>
            ))}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(74,35,90,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(74,35,90,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-6 animate-fade-in-up">
            <span className="inline-block px-3 py-1 border border-brand-purple/30 rounded-full text-xs text-brand-purple uppercase tracking-widest mb-4">
              {t.hero.badge}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
            {t.hero.titleStart} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-white">{t.hero.titleHighlight}</span> <br/>
            {t.hero.titleEnd}
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto">
             <a href="#libro" className="group relative overflow-hidden bg-white text-brand-black px-8 py-4 transition-all duration-300 uppercase tracking-widest text-xs font-bold text-center hover:bg-gray-200">
               <span className="relative z-10">{t.hero.ctaBook}</span>
               <div className="absolute inset-0 bg-brand-purple transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-0 opacity-10"></div>
             </a>
             <a href="#servicios" className="group relative overflow-hidden border border-brand-purple text-white px-8 py-4 transition-all duration-300 uppercase tracking-widest text-xs font-bold text-center hover:bg-brand-purple">
               <span className="relative z-10">{t.hero.ctaServices}</span>
             </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <ArrowDown className="w-6 h-6" />
        </div>
      </header>

      <main>
        {/* Literary Side */}
        <BookSection />
        
        {/* The Bridge / Demo */}
        <div id="oracle" className="py-24 bg-gradient-to-b from-brand-black via-brand-purpleDark to-brand-black relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="relative z-10">
            <div className="text-center mb-8 px-6">
              <span className="text-brand-purple text-xs font-mono uppercase tracking-widest">{t.oracle.demoLabel}</span>
              <h2 className="text-2xl text-white font-serif mt-2">{t.oracle.demoTitle}</h2>
            </div>
            <Oracle />
            <p className="text-center text-gray-500 text-xs mt-8 px-6 max-w-lg mx-auto">
              {t.oracle.disclaimer}
            </p>
          </div>
        </div>

        {/* Tech Side */}
        <Services />
        <Training />

        {/* Content & Bio */}
        <Author />
        <Universe />
        
        <section id="laboratorio" className="py-24 px-6 max-w-4xl mx-auto text-center border-t border-brand-gray">
          <h2 className="text-3xl font-serif uppercase tracking-widest text-white mb-12">{t.lab.title}</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <article className="border border-brand-gray p-6 hover:border-brand-purple transition-all group cursor-pointer bg-brand-black">
              <span className="text-xs text-brand-purple font-mono mb-2 block">{t.lab.art1Tag}</span>
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-brand-purple transition-colors">{t.lab.art1Title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{t.lab.art1Desc}</p>
              <span className="text-xs text-white underline decoration-brand-purple">{t.lab.art1Link}</span>
            </article>
            <article className="border border-brand-gray p-6 hover:border-brand-purple transition-all group cursor-pointer bg-brand-black">
              <span className="text-xs text-brand-purple font-mono mb-2 block">{t.lab.art2Tag}</span>
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-brand-purple transition-colors">{t.lab.art2Title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{t.lab.art2Desc}</p>
              <span className="text-xs text-white underline decoration-brand-purple">{t.lab.art2Link}</span>
            </article>
          </div>
        </section>

        <Archive />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;