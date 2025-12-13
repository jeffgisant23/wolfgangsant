import React from 'react';
import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 mb-12">
        
        <div className="space-y-6">
          <h4 className="text-xl font-serif text-white">{t.footer.newsletterTitle}</h4>
          <p className="text-gray-400 text-sm max-w-sm">
            {t.footer.newsletterDesc}
          </p>
          <form className="flex gap-2 max-w-sm">
            <input 
              type="email" 
              placeholder="tu@email.com" 
              className="bg-brand-gray border border-white/10 px-4 py-2 w-full text-white text-sm focus:border-brand-purple focus:outline-none"
            />
            <button className="bg-brand-purple text-white px-4 py-2 hover:bg-white hover:text-brand-purple transition-colors">
              <Mail className="w-5 h-5" />
            </button>
          </form>
        </div>

        <div className="flex flex-col md:items-end justify-between">
          <div className="flex gap-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
          <div className="text-right space-y-2">
            <p className="text-brand-purple font-bold tracking-widest uppercase text-sm">Jeffrey G. Santos</p>
            <p className="text-xs text-gray-500 tracking-wider">CIAS Studio & Wolffgangsant</p>
            <p className="text-gray-600 text-xs mt-4">© {new Date().getFullYear()} {t.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
