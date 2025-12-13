import React, { useState } from 'react';
import { consultTheVoid } from '../services/geminiService';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Oracle: React.FC = () => {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    
    const answer = await consultTheVoid(query);
    
    setResponse(answer);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 border border-brand-purple/30 bg-brand-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-50"></div>
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-serif text-brand-white mb-2 flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-brand-purple" />
          {t.oracle.title}
        </h3>
        <p className="text-gray-400 text-sm italic">
          {t.oracle.subtitle}
        </p>
      </div>

      <div className="mb-6 min-h-[100px] flex items-center justify-center">
        {loading ? (
          <div className="flex flex-col items-center gap-2 text-brand-purple animate-pulse">
            <Loader2 className="w-8 h-8 animate-spin" />
            <span className="text-xs tracking-widest uppercase">{t.oracle.loading}</span>
          </div>
        ) : response ? (
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-brand-white font-serif leading-relaxed italic border-l-2 border-brand-purple pl-4">
              "{response}"
            </p>
          </div>
        ) : (
          <div className="text-gray-600 text-center text-sm">
            {t.oracle.empty}
          </div>
        )}
      </div>

      <form onSubmit={handleConsult} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.oracle.placeholder}
          className="w-full bg-brand-gray border border-brand-purple/20 p-4 pr-12 text-brand-white focus:outline-none focus:border-brand-purple transition-colors font-serif placeholder:text-gray-600"
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-purple hover:text-white transition-colors disabled:opacity-50"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};
