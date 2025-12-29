
import React, { useState } from 'react';
import { Feature } from '../types';
import RevealOnScroll from './RevealOnScroll';

const FEATURES: Feature[] = [
  {
    title: "Real-time Analytics",
    description: "Monitor your growth with our advanced dashboard systems powered by ultra-fast data pipelines.",
    icon: "fa-chart-pie"
  },
  {
    title: "AI Integration",
    description: "Automate your workflow using state-of-the-art Gemini LLM models directly in your browser.",
    icon: "fa-robot"
  },
  {
    title: "Secure by Default",
    description: "Enterprise-grade encryption and security protocols protecting your data at every step.",
    icon: "fa-shield-halved"
  },
  {
    title: "Global CDN",
    description: "Serve your content to users around the globe with millisecond latency and 100% uptime.",
    icon: "fa-globe"
  }
];

const Features: React.FC = () => {
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);

  const handleShare = async (feature: Feature) => {
    const shareData = {
      title: `NovaCore Feature: ${feature.title}`,
      text: feature.description,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
        setShareFeedback(feature.title);
        setTimeout(() => setShareFeedback(null), 2000);
      } catch (err) {
        console.error('Clipboard error:', err);
      }
    }
  };

  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider text-sm mb-3">Core Capabilities</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Built for Modern Businesses</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">Everything you need to launch, scale, and manage your online enterprise in one sleek package.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <RevealOnScroll key={idx} delay={idx * 150}>
              <div 
                className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-400 hover:scale-[1.03] transition-all duration-300 hover:shadow-xl group cursor-default h-full flex flex-col relative"
              >
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare(feature);
                  }}
                  className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-sm"
                  aria-label="Share feature"
                  title="Share Feature"
                >
                  <i className={`fas ${shareFeedback === feature.title ? 'fa-check text-green-500' : 'fa-share-nodes'} text-xs`}></i>
                </button>

                <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                  <i className={`fas ${feature.icon} text-indigo-600 dark:text-indigo-400 text-2xl group-hover:text-white transition-colors duration-300`}></i>
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{feature.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">{feature.description}</p>
                
                {shareFeedback === feature.title && (
                  <div className="mt-4 text-xs font-bold text-green-500 dark:text-green-400 animate-pulse">
                    Link copied to clipboard!
                  </div>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
