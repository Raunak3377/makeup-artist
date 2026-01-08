
import React from 'react';
import { ArtistConfig } from '../types';

interface AboutProps {
  config: ArtistConfig;
}

export const About: React.FC<AboutProps> = ({ config }) => {
  const { personality } = config;

  if (personality === 'minimal') {
    return (
      <section className="py-32 bg-white px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-[1px] bg-black mx-auto mb-10"></div>
          <p className={`${config.theme.fontHeading} text-3xl md:text-4xl leading-relaxed text-gray-800 italic`}>
            "{config.aboutText}"
          </p>
          <p className="mt-8 text-xs uppercase tracking-widest text-gray-400">— The philosophy of {config.name}</p>
        </div>
      </section>
    );
  }

  if (personality === 'avantgarde') {
    return (
      <section className="py-24 bg-zinc-900 px-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#7B2CBF]/10 blur-[100px] -z-10"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
           <div className="relative">
             <img 
                src={config.images.about} 
                className="w-full aspect-square object-cover grayscale invert brightness-125" 
                alt={`${config.name} - About the Artist`} 
                loading="lazy"
                decoding="async"
             />
             <div className="absolute -bottom-10 -right-10 w-64 h-64 border-4 border-[#7B2CBF] -z-10"></div>
           </div>
           <div>
             <h2 className="text-6xl font-black mb-8 italic uppercase tracking-tighter">The Method</h2>
             <p className="text-xl leading-relaxed text-zinc-400">{config.aboutText}</p>
           </div>
        </div>
      </section>
    );
  }

  const isRoyal = personality === 'royal';
  return (
    <section className={`py-24 px-8 ${isRoyal ? 'bg-white' : 'bg-black text-white'}`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className={`w-full md:w-1/2 relative ${isRoyal ? 'order-1' : 'order-2'}`}>
          <div className={`absolute -inset-4 border-2 ${isRoyal ? 'border-amber-200 translate-x-4 translate-y-4' : 'border-fuchsia-500 -translate-x-4 -translate-y-4'} -z-10`}></div>
          <img 
            src={config.images.about} 
            alt={`${config.name} at work`} 
            className="w-full h-auto object-cover aspect-[3/4]" 
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={`w-full md:w-1/2 ${isRoyal ? 'order-2' : 'order-1'}`}>
          <span className={`block text-xs uppercase tracking-widest mb-4 ${isRoyal ? 'text-amber-700' : 'text-fuchsia-400'}`}>MEET THE ARTIST</span>
          <h2 className={`${config.theme.fontHeading} text-4xl md:text-6xl mb-8 leading-tight`}>{config.name}</h2>
          <p className={`${config.theme.fontBody} text-lg opacity-80 leading-relaxed`}>{config.aboutText}</p>
        </div>
      </div>
    </section>
  );
};
