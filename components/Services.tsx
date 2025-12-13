import React from 'react';
import { Brain, Cpu, Bot, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="py-24 bg-brand-white text-brand-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-brand-purple mb-4">{t.services.sectionTitle}</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-6">{t.services.mainTitle}</h3>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
            {t.services.quote}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.services.items.map((service, idx) => (
            <div key={idx} className="bg-white p-8 border border-gray-200 hover:border-brand-purple hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-brand-black text-white flex items-center justify-center mb-6 group-hover:bg-brand-purple transition-colors">
                {idx === 0 && <Brain className="w-6 h-6" />}
                {idx === 1 && <Cpu className="w-6 h-6" />}
                {idx === 2 && <Bot className="w-6 h-6" />}
              </div>
              <h4 className="text-xl font-serif font-bold mb-4">{service.title}</h4>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-800">
                    <div className="w-1.5 h-1.5 bg-brand-purple rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <a href="#" className="inline-flex items-center gap-2 border-b-2 border-brand-black pb-1 hover:text-brand-purple hover:border-brand-purple transition-all uppercase tracking-widest text-xs font-bold">
                {t.services.cta} <ArrowRight className="w-4 h-4" />
            </a>
        </div>
      </div>
    </section>
  );
};
