
import React from 'react';
import { ArtistConfig } from '../types';

interface PricingProps {
  config: ArtistConfig;
}

export const Pricing: React.FC<PricingProps> = ({ config }) => {
  const { personality, pricing, theme, name, city, whatsappNumber } = config;

  const handlePackageInquiry = (tierTitle: string, tierPrice: string) => {
    const message = encodeURIComponent(
      `Hi ${name}, I am interested in your ${tierTitle} package (${tierPrice}) for an upcoming event in ${city}. Could you please share more details and check your availability?`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const renderTier = (tier: any, idx: number) => {
    switch (personality) {
      case 'royal':
        return (
          <div key={idx} className={`relative p-8 border ${tier.isFeatured ? 'border-amber-400 bg-amber-50/50 shadow-2xl scale-105' : 'border-amber-100 bg-white'} rounded-none flex flex-col items-center text-center transition-all duration-500`}>
            {tier.isFeatured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-900 text-amber-100 text-[10px] px-4 py-1 uppercase tracking-widest font-bold">Most Coveted</span>}
            <h3 className={`${theme.fontHeading} text-2xl mb-4 text-amber-900`}>{tier.title}</h3>
            <div className="text-3xl font-bold mb-8 text-amber-800">{tier.price}</div>
            <ul className="space-y-3 mb-10 opacity-70 text-sm">
              {tier.features.map((f: string, i: number) => <li key={i}>{f}</li>)}
            </ul>
            <button 
              onClick={() => handlePackageInquiry(tier.title, tier.price)}
              className="mt-auto px-8 py-3 bg-amber-900 text-amber-100 text-xs uppercase tracking-[0.2em] hover:bg-black transition-colors"
            >
              Select Package
            </button>
          </div>
        );
      case 'modern':
        return (
          <div key={idx} className={`p-8 bg-zinc-900 border-l-4 ${tier.isFeatured ? 'border-fuchsia-500 shadow-[0_0_30px_rgba(255,0,128,0.2)]' : 'border-zinc-800'} transition-all duration-300`}>
            <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-2">{tier.title}</h3>
            <div className={`text-4xl font-black mb-6 ${theme.accent.split('text-')[1] ? theme.accent : 'text-fuchsia-400'}`}>{tier.price}</div>
            <ul className="space-y-4 mb-8 text-zinc-400 font-mono text-xs uppercase tracking-widest">
              {tier.features.map((f: string, i: number) => <li key={i} className="flex items-center"><span className="mr-2 text-white">→</span> {f}</li>)}
            </ul>
            <button 
              onClick={() => handlePackageInquiry(tier.title, tier.price)}
              className="w-full py-4 border border-white hover:bg-white hover:text-black transition-all text-xs font-bold tracking-widest uppercase"
            >
              Book Slot
            </button>
          </div>
        );
      case 'minimal':
        return (
          <div key={idx} className={`p-10 border border-gray-200 transition-all hover:border-gray-900 ${tier.isFeatured ? 'bg-white' : 'bg-transparent'}`}>
            <h3 className="text-xl tracking-[0.2em] uppercase font-light mb-6">{tier.title}</h3>
            <div className="text-2xl font-light mb-10">{tier.price}</div>
            <ul className="space-y-4 mb-12 text-gray-500 text-sm font-light italic">
              {tier.features.map((f: string, i: number) => <li key={i}>• {f}</li>)}
            </ul>
            <button 
              onClick={() => handlePackageInquiry(tier.title, tier.price)}
              className="text-xs uppercase tracking-[0.3em] font-medium border-b border-black pb-2 hover:opacity-50 transition-opacity"
            >
              Request Detail
            </button>
          </div>
        );
      case 'avantgarde':
        return (
          <div key={idx} className="relative group p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all">
             <div className={`absolute inset-0 bg-gradient-to-br from-[#7B2CBF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
             <h3 className="text-2xl font-black uppercase mb-2 relative z-10">{tier.title}</h3>
             <div className="text-5xl font-black tracking-tighter text-[#E0AAFF] mb-8 relative z-10">{tier.price}</div>
             <ul className="space-y-3 mb-10 text-zinc-400 relative z-10">
               {tier.features.map((f: string, i: number) => <li key={i} className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#E0AAFF] mr-3"></span>{f}</li>)}
             </ul>
             <button 
              onClick={() => handlePackageInquiry(tier.title, tier.price)}
              className="w-full py-4 bg-[#7B2CBF] text-white rounded-xl font-black uppercase italic tracking-widest relative z-10 hover:shadow-[0_0_20px_#7B2CBF]"
             >
              Secure Now
             </button>
          </div>
        );
      default: return null;
    }
  };

  return (
    <section className={`py-24 px-8 ${theme.bg}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:text-center">
          <h2 className={`${theme.fontHeading} text-4xl md:text-6xl mb-4 ${theme.text} uppercase italic`}>Investment</h2>
          <p className={`${theme.fontBody} opacity-60 text-lg`}>Premium services tailored for your vision.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-12">
          {pricing.map(renderTier)}
        </div>
      </div>
    </section>
  );
};
