import React from 'react';
import { Brain, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Universe: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="universo" className="py-24 bg-brand-gray relative">
        {/* Background Noise Texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl font-serif text-center mb-16 uppercase tracking-widest border-b border-brand-purple/30 pb-4 inline-block left-1/2 relative -translate-x-1/2">
                {t.universe.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {t.universe.items.map((item, idx) => (
                    <div key={idx} className="bg-brand-black p-8 border border-brand-gray hover:border-brand-purple transition-all duration-500 group">
                        <div className="mb-6 text-brand-purple group-hover:text-white transition-colors">
                            {idx === 2 ? <User className="w-8 h-8"/> : <Brain className="w-8 h-8"/>}
                        </div>
                        <h3 className="text-xl font-serif text-white mb-4">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};
