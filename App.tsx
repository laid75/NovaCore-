
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AITool from './components/AITool';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import RevealOnScroll from './components/RevealOnScroll';
import { siteConfig } from './config';

const AnimatedCounter: React.FC<{
  target: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}> = ({ target, duration = 2000, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(progress * target);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return (
    <div ref={elementRef} className="text-5xl font-extrabold mb-2">
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </div>
  );
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-slate-950">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        
        {/* Trusted By Section - Animated Carousel */}
        <section className="bg-slate-50 dark:bg-slate-900/50 py-16 border-y border-slate-100 dark:border-slate-800 transition-colors overflow-hidden">
          <div className="container mx-auto px-6 mb-12 flex flex-col items-center">
             <p className="text-center text-slate-400 dark:text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-6">Trusted by industry giants</p>
             <button className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 px-8 py-3 rounded-full font-bold text-sm hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all shadow-sm flex items-center group">
               <span>Learn More</span>
               <i className="fas fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>
             </button>
          </div>
          <div className="flex space-x-12 animate-marquee whitespace-nowrap">
            {[1, 2].map((loop) => (
              <div key={loop} className="flex space-x-12 items-center opacity-40 grayscale">
                <div className="flex items-center space-x-2 text-3xl font-bold dark:text-white"><i className="fab fa-apple"></i> <span>Apple</span></div>
                <div className="flex items-center space-x-2 text-3xl font-bold dark:text-white"><i className="fab fa-microsoft"></i> <span>Microsoft</span></div>
                <div className="flex items-center space-x-2 text-3xl font-bold dark:text-white"><i className="fab fa-google"></i> <span>Google</span></div>
                <div className="flex items-center space-x-2 text-3xl font-bold dark:text-white"><i className="fab fa-spotify"></i> <span>Spotify</span></div>
                <div className="flex items-center space-x-2 text-3xl font-bold dark:text-white"><i className="fab fa-amazon"></i> <span>Amazon</span></div>
                <div className="flex items-center space-x-2 text-3xl font-bold dark:text-white"><i className="fab fa-slack"></i> <span>Slack</span></div>
                <div className="flex items-center space-x-2 text-3xl font-bold dark:text-white"><i className="fab fa-discord"></i> <span>Discord</span></div>
              </div>
            ))}
          </div>
        </section>

        <RevealOnScroll><Features /></RevealOnScroll>
        <RevealOnScroll><AITool /></RevealOnScroll>
        
        {/* Statistics Section */}
        <section className="py-24 bg-indigo-600 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {siteConfig.stats.map((stat, idx) => (
                <div key={idx}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  <p className="text-indigo-100 font-medium text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RevealOnScroll><Pricing /></RevealOnScroll>
        <RevealOnScroll><FAQ /></RevealOnScroll>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">Success Stories</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah Jenkins", role: "CEO @ FlowState", text: "NovaCore completely transformed how we pitch our product.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" },
                { name: "Marcus Thorne", role: "Product Manager", text: "The cleanest code I've seen in a ThemeForest template.", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150" },
                { name: "Elena Rodriguez", role: "UI Designer", text: "The attention to detail in this theme is incredible.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150" }
              ].map((testi, i) => (
                <RevealOnScroll key={i} delay={i * 200}>
                  <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all h-full">
                    <p className="text-slate-600 dark:text-slate-400 mb-8 italic">"{testi.text}"</p>
                    <div className="flex items-center space-x-4">
                      <img src={testi.avatar} alt={testi.name} className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-700" />
                      <div>
                        <h5 className="font-bold text-slate-900 dark:text-white">{testi.name}</h5>
                        <p className="text-slate-500 dark:text-slate-500 text-sm">{testi.role}</p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <RevealOnScroll><Contact /></RevealOnScroll>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="bg-indigo-600 rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-indigo-200 dark:shadow-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 relative z-10">
                Ready to elevate your <br className="hidden lg:block" /> digital presence?
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <button className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-xl transition-all">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
