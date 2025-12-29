
import React, { useState } from 'react';

const FAQS = [
  { q: "How does the Gemini AI integration work?", a: "NovaCore connects directly to Google's Gemini API via a secure backend, allowing you to generate content in real-time with zero latency." },
  { q: "Can I use my own API key?", a: "Yes, our configuration file makes it simple to plug in your own Google Cloud API keys for complete control over your usage." },
  { q: "Is the theme mobile responsive?", a: "Absolutely. NovaCore is built with a mobile-first approach using Tailwind CSS, ensuring a perfect experience on any device." },
  { q: "Do you offer technical support?", a: "ThemeForest buyers get 6 months of dedicated support, including technical documentation and bug fixes." }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-slate-600 dark:text-slate-400">Everything you need to know about NovaCore and our features.</p>
        </div>
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="font-bold text-slate-900 dark:text-white text-lg">{faq.q}</span>
                <i className={`fas fa-chevron-down text-indigo-600 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}></i>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-8 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
