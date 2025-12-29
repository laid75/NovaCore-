
import React, { useState } from 'react';
import { generateMarketingContent } from '../services/geminiService';
import { marked } from 'marked';

interface ValidationErrors {
  businessType?: string;
  goal?: string;
}

const AITool: React.FC = () => {
  const [businessType, setBusinessType] = useState('');
  const [goal, setGoal] = useState('');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const newErrors: ValidationErrors = {};
    
    if (!businessType.trim()) {
      newErrors.businessType = 'Business type is required.';
    } else if (businessType.trim().length < 3) {
      newErrors.businessType = 'Please be more descriptive (min 3 characters).';
    }

    if (!goal.trim()) {
      newErrors.goal = 'Campaign goal is required.';
    } else if (goal.trim().length < 10) {
      newErrors.goal = 'Please provide more detail for better results (min 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGenerate = async () => {
    if (!validate()) return;
    
    setIsLoading(true);
    setResult('');
    const content = await generateMarketingContent(businessType, goal);
    setResult(content);
    setIsLoading(false);
  };

  const copyToClipboard = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMarkdownHtml = (markdown: string) => {
    return { __html: marked.parse(markdown) };
  };

  const handleInputChange = (field: 'businessType' | 'goal', value: string) => {
    if (field === 'businessType') setBusinessType(value);
    if (field === 'goal') setGoal(value);
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="ai-demo" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-indigo-400 font-bold mb-4 tracking-widest text-sm">PREMIUM FEATURE</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              AI-Powered Marketing Engine
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              ThemeForest buyers love functionality. Our built-in Gemini AI engine allows users to generate copy, SEO metas, and content directly within the template using professional markdown standards.
            </p>
            
            <div className="space-y-6 max-w-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                  <span className="text-indigo-400 font-bold">01</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-slate-100">Describe Business</h4>
                  <p className="text-slate-500">Industry, style, and unique selling point.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                  <span className="text-indigo-400 font-bold">02</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-slate-100">Define Campaign Goal</h4>
                  <p className="text-slate-500">Conversions, brand awareness, or engagement.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-400 mb-2">My Business Is A...</label>
                <input 
                  type="text" 
                  value={businessType}
                  onChange={(e) => handleInputChange('businessType', e.target.value)}
                  placeholder="e.g. Urban Sustainable Fashion Brand" 
                  className={`w-full bg-slate-900 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all text-white placeholder-slate-600 ${errors.businessType ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-indigo-500'}`}
                />
                {errors.businessType && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center animate-in fade-in slide-in-from-left-1">
                    <i className="fas fa-circle-exclamation mr-1.5"></i> {errors.businessType}
                  </p>
                )}
              </div>
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-400 mb-2">Our Main Goal Is To...</label>
                <textarea 
                  value={goal}
                  onChange={(e) => handleInputChange('goal', e.target.value)}
                  placeholder="e.g. drive email signups by offering a 15% discount for first-time buyers" 
                  className={`w-full bg-slate-900 border rounded-xl px-4 py-3 h-24 focus:outline-none focus:ring-2 transition-all text-white placeholder-slate-600 ${errors.goal ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-indigo-500'}`}
                />
                {errors.goal && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center animate-in fade-in slide-in-from-left-1">
                    <i className="fas fa-circle-exclamation mr-1.5"></i> {errors.goal}
                  </p>
                )}
              </div>
              
              <button 
                onClick={handleGenerate}
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${isLoading ? 'bg-slate-700 cursor-not-allowed text-slate-400' : 'bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white shadow-lg shadow-indigo-900/40'}`}
              >
                {isLoading ? (
                  <>
                    <i className="fas fa-circle-notch fa-spin"></i> Analyzing with AI...
                  </>
                ) : (
                  <>
                    <i className="fas fa-wand-sparkles"></i> Generate Marketing Copy
                  </>
                )}
              </button>

              {result && (
                <div className="mt-8 relative group">
                  <div className="absolute top-2 right-2 flex items-center space-x-2 z-20">
                    {copied && <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-1 rounded font-bold uppercase tracking-tighter">Copied!</span>}
                    <button 
                      onClick={copyToClipboard} 
                      className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all border border-slate-700"
                      title="Copy Markdown"
                    >
                      <i className={`fas ${copied ? 'fa-check text-green-400' : 'fa-copy'}`}></i>
                    </button>
                  </div>
                  
                  <div className="bg-slate-900/80 border border-indigo-500/30 rounded-2xl p-6 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div 
                      className="prose prose-invert max-w-none 
                      [&_h1]:text-2xl [&_h1]:font-black [&_h1]:text-white [&_h1]:mb-4 [&_h1]:mt-0
                      [&_p]:text-slate-300 [&_p]:leading-relaxed [&_p]:mb-4
                      [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:text-slate-400
                      [&_li]:mb-2 [&_li]:pl-1
                      [&_strong]:text-indigo-400 [&_strong]:font-bold"
                      dangerouslySetInnerHTML={getMarkdownHtml(result)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITool;
