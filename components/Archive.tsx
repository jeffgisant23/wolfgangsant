import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const images = [
  "https://picsum.photos/seed/servilleta1/400/400",
  "https://picsum.photos/seed/manuscrito/400/600",
  "https://picsum.photos/seed/abstracto/400/400",
  "https://picsum.photos/seed/cafeteria/400/500",
];

export const Archive: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="archivo" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
        <div>
          <h2 className="text-3xl font-serif uppercase tracking-widest text-white">{t.archive.title}</h2>
          <p className="text-brand-purple mt-2 font-serif italic">{t.archive.subtitle}</p>
        </div>
        <button className="text-sm text-gray-400 hover:text-white mt-4 md:mt-0 uppercase tracking-wider underline decoration-brand-purple underline-offset-4">
          {t.archive.cta}
        </button>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
        {images.map((src, idx) => (
          <div key={idx} className="relative group overflow-hidden break-inside-avoid bg-brand-gray">
             <img 
               src={src} 
               alt={`Archivo fragmento ${idx}`} 
               className="w-full h-auto object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             <div className="absolute bottom-0 left-0 w-full p-4 bg-black/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-white font-mono">FIG_0{idx + 1}.FRAGMENTO</span>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};
