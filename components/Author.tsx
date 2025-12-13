import React, { useState } from 'react';
import { Feather, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Author: React.FC = () => {
  const { t } = useLanguage();
  const [activePersona, setActivePersona] = useState<'jeffrey' | 'wolff'>('jeffrey');

  return (
    <section id="autor" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-purple/5 blur-[120px]"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-brand-purple mb-4">{t.author.label}</h2>
          <div className="inline-flex border border-brand-gray bg-brand-black p-1">
            <button 
              onClick={() => setActivePersona('jeffrey')}
              className={`px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 ${activePersona === 'jeffrey' ? 'bg-white text-black font-bold' : 'text-gray-500 hover:text-white'}`}
            >
              {t.author.btnJeffrey}
            </button>
            <button 
              onClick={() => setActivePersona('wolff')}
              className={`px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 ${activePersona === 'wolff' ? 'bg-brand-purple text-white font-bold' : 'text-gray-500 hover:text-white'}`}
            >
              {t.author.btnWolff}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start min-h-[400px]">
          <div className="md:col-span-2">
            <div className={`w-full h-[400px] bg-brand-gray relative transition-all duration-700 overflow-hidden ${activePersona === 'wolff' ? 'filter grayscale contrast-125' : ''}`}>
                <img 
                  src="https://picsum.photos/seed/author/500/700" 
                  alt="Retrato" 
                  className="w-full h-full object-cover opacity-80"
                />
                {activePersona === 'wolff' && (
                  <div className="absolute inset-0 bg-brand-purple mix-blend-multiply opacity-60"></div>
                )}
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-center h-full">
            {activePersona === 'jeffrey' ? (
              <div className="animate-fade-in space-y-6">
                <div className="flex items-center gap-3 text-white mb-2">
                   <FileText className="w-5 h-5" />
                   <h3 className="text-2xl font-serif">{t.author.jeffreyTitle}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {t.author.jeffreyDesc}
                </p>
                <ul className="space-y-2 text-sm text-gray-500 font-mono mt-4">
                  {t.author.jeffreyList.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">{item}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="animate-fade-in space-y-6">
                 <div className="flex items-center gap-3 text-brand-purple mb-2">
                   <Feather className="w-5 h-5" />
                   <h3 className="text-2xl font-serif">{t.author.wolffTitle}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed italic border-l-2 border-brand-purple pl-4">
                  {t.author.wolffDesc}
                </p>
                <ul className="space-y-2 text-sm text-brand-purple font-mono mt-4">
                  {t.author.wolffList.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
