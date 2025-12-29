
import React from 'react';
import { PricingPlan } from '../types';

const PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for freelancers and side projects.",
    features: ["5 Projects", "Basic AI Support", "Analytics", "Email support"]
  },
  {
    name: "Growth",
    price: "$79",
    description: "Best for scaling startups and small teams.",
    features: ["Unlimited Projects", "Full AI Suite", "Advanced Analytics", "Priority Support", "Custom Domains"],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations requiring custom solutions.",
    features: ["SLA Guarantees", "Dedicated Support", "Custom AI Models", "Audit Logs", "Compliance Support"]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-900/30 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">No hidden fees. Scale your plan as your business grows.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, idx) => (
            <div key={idx} className={`relative flex flex-col p-10 rounded-3xl bg-white dark:bg-slate-900 border-2 transition-all hover:scale-[1.02] ${plan.isPopular ? 'border-indigo-600 dark:border-indigo-500 shadow-2xl shadow-indigo-200/50 dark:shadow-indigo-900/20' : 'border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50'}`}>
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 dark:bg-indigo-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h4>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-slate-500 dark:text-slate-500">/mo</span>}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mt-4">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                    <i className="fas fa-check-circle text-green-500 dark:text-green-400"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.isPopular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
