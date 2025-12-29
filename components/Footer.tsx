
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-20 pb-10 transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-bolt text-white"></i>
              </div>
              <span className="text-2xl font-bold text-slate-900 dark:text-white">NovaCore</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              Premium SaaS Landing page template built for high-performance and modern design aesthetics.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'github', 'discord', 'linkedin'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all">
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-slate-900 dark:text-white mb-6">Product</h5>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 font-medium">
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-slate-900 dark:text-white mb-6">Company</h5>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 font-medium">
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-slate-900 dark:text-white mb-6">Subscribe to Our Newsletter</h5>
            <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">Get the latest updates, articles and resources directly in your inbox.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white"
              />
              <button className="absolute right-2 top-2 bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors">
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-100 dark:border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-400 dark:text-slate-500 text-sm">
          <p>© 2024 NovaCore. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
