
import React from 'react';
import { ArtistConfig } from '../types';

interface BrochureProps {
  config: ArtistConfig;
}

export const Brochure: React.FC<BrochureProps> = ({ config }) => {
  const { personality, theme } = config;

  return (
    <section className={`py-20 px-8 ${personality === 'modern' ? 'bg-zinc-800' : 'bg-stone-100'}`}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div className="flex-1">
          <h2 className={`${theme.fontHeading} text-3xl md:text-5xl mb-6 ${personality === 'modern' ? 'text-white' : 'text-black'}`}>The 2024 <br /><span className="italic">Investment Guide</span></h2>
          <p className={`text-lg opacity-70 mb-8 ${personality === 'modern' ? 'text-zinc-400' : 'text-gray-600'}`}>
            Explore our comprehensive lookbook, complete with detailed service lists, travel policies, and skin preparation guides.
          </p>
          <a 
            href={config.brochureUrl} 
            download 
            className={`inline-block px-10 py-5 ${personality === 'modern' ? 'bg-fuchsia-600' : 'bg-black'} text-white text-xs font-bold uppercase tracking-[0.3em] hover:scale-105 transition-transform shadow-xl`}
          >
            Download Brochure PDF
          </a>
        </div>
        <div className="flex-1 w-full max-w-sm">
           <div className="aspect-[4/5] bg-gray-300 shadow-2xl relative rotate-3 group overflow-hidden">
              <img src={config.images.gallery.bridal[0]} className="w-full h-full object-cover grayscale opacity-50" alt="Brochure Preview" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white/90 backdrop-blur-sm p-6 text-black uppercase font-black tracking-widest text-xl -rotate-3 border-2 border-black">
                   Lookbook 2024
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
