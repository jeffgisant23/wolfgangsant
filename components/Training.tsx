import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Training: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="formacion" className="py-24 bg-brand-black text-white relative border-t border-white/10">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple via-black to-brand-purple opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-serif uppercase tracking-widest mb-4">{t.training.sectionTitle}</h2>
            <p className="text-gray-400 leading-relaxed">
              {t.training.description}
            </p>
          </div>
          <div className="flex justify-end">
             <div className="text-right">
                <span className="block text-4xl font-bold text-brand-purple">CIAS</span>
                <span className="text-xs uppercase tracking-[0.3em] text-gray-500">Creative Intelligence Author Studio</span>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.training.packages.map((pkg, idx) => (
            <div key={idx} className="bg-brand-gray border border-white/5 p-8 hover:bg-white/5 transition-colors duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-serif font-bold text-white">{idx + 1}</span>
              </div>
              
              <h3 className="text-xl font-serif font-bold text-white mb-2">{pkg.title}</h3>
              <span className="inline-block px-2 py-1 bg-brand-purple/20 text-brand-purple text-xs font-mono uppercase mb-4 rounded">
                For: {pkg.target}
              </span>
              <p className="text-gray-400 text-sm mb-6 min-h-[60px]">{pkg.description}</p>
              
              <ul className="space-y-3 pt-6 border-t border-white/10">
                {pkg.includes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple mt-0.5 flex-shrink-0" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
