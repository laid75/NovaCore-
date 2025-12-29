
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center dark:bg-slate-950">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="container mx-auto px-6 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 px-4 py-1.5 rounded-full text-indigo-700 dark:text-indigo-300 font-medium text-sm mb-6 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>Now with Gemini AI Integration</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Build Your <span className="gradient-text">Future Presence</span> with NovaCore.
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0">
            The ultimate SaaS landing page template designed for high conversion. Modern, fast, and ready to dominate ThemeForest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 dark:shadow-indigo-900/40 hover:-translate-y-1">
              Start Free Trial
            </button>
            <button className="w-full sm:w-auto bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm flex items-center justify-center gap-2">
              <i className="fas fa-play-circle text-indigo-600 dark:text-indigo-400"></i> Watch Demo
            </button>
          </div>
          <div className="mt-10 flex items-center justify-center lg:justify-start space-x-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 shadow-sm" />
              ))}
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Joined by 2,000+ tech leaders</p>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <img src="https://picsum.photos/seed/dashboard/1200/800" alt="App Dashboard" className="rounded-xl grayscale-[0.2] dark:grayscale-0 transition-all" />
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-50 dark:border-slate-700 hidden md:block animate-bounce-slow">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <i className="fas fa-chart-line text-green-600 dark:text-green-400"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">+24% Revenue</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Since last quarter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
