import React from 'react';
import { BookOpen, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const BookSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="libro" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Abstract Book Cover Representation */}
        <div className="relative group perspective">
          <div className="relative w-3/4 mx-auto aspect-[2/3] bg-brand-black border border-brand-purple/40 shadow-[0_0_50px_rgba(74,35,90,0.2)] transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_0_80px_rgba(74,35,90,0.4)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full p-4">
              <h2 className="text-4xl font-serif tracking-widest text-brand-white mb-2">{t.book.title}</h2>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-purple">{t.book.subtitle}</p>
            </div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border-t border-l border-brand-purple/30 opacity-50"></div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="border-l-4 border-brand-purple pl-6">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">{t.book.heading}</h2>
            <p className="text-gray-300 text-lg leading-relaxed font-light mb-4">
              {t.book.description}
            </p>
            <p className="text-gray-400 leading-relaxed font-light italic">
              {t.book.quote}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-brand-purple text-white px-8 py-3 hover:bg-white hover:text-brand-purple transition-all duration-300 uppercase tracking-widest text-sm font-bold">
              <BookOpen className="w-4 h-4" />
              {t.book.btnSynopsis}
            </button>
            <button className="flex items-center gap-2 border border-brand-purple text-brand-purple px-8 py-3 hover:bg-brand-purple/10 transition-all duration-300 uppercase tracking-widest text-sm font-bold">
              <Download className="w-4 h-4" />
              {t.book.btnFragment}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
