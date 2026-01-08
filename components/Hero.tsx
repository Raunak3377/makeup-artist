
import React from 'react';
import { ArtistConfig } from '../types';

interface HeroProps {
  config: ArtistConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  const { personality, name, specialty, city } = config;

  // LCP images should be eager and high priority
  const heroImageProps = {
    loading: "eager" as const,
    fetchPriority: "high" as const,
    decoding: "async" as const,
  };

  if (personality === 'royal') {
    return (
      <header className={`relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden ${config.theme.bg}`}>
        <div className="absolute inset-0 opacity-20">
          <img 
            src={config.images.hero} 
            alt={`${name} ${specialty} - Luxury Bridal Makeup in ${city}`} 
            className="w-full h-full object-cover grayscale" 
            {...heroImageProps}
          />
        </div>
        <div className="z-10 text-center max-w-2xl">
          <span className={`${config.theme.accent} ${config.theme.fontHeading} tracking-widest uppercase text-sm mb-4 block`}>Premier {city} Artist</span>
          <h1 className={`${config.theme.fontHeading} text-5xl md:text-7xl ${config.theme.text} leading-tight mb-6`}>{specialty} <br /> by {name}</h1>
          <div className={`w-24 h-1 mx-auto ${config.theme.secondary} mb-8`}></div>
          <p className={`${config.theme.fontBody} text-lg md:text-xl opacity-80 leading-relaxed max-w-lg mx-auto`}>Crafting timeless, royal transformations for the most special day of your life in {city}.</p>
        </div>
      </header>
    );
  }

  if (personality === 'modern') {
    return (
      <header className="relative h-screen w-full bg-black flex flex-col md:flex-row items-stretch overflow-hidden">
        <div className="flex-1 relative order-2 md:order-1 h-3/5 md:h-full">
          <img 
            src={config.images.hero} 
            alt={`${name} Makeup Artist Delhi - Bold Glamour`} 
            className="w-full h-full object-cover" 
            {...heroImageProps}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 z-10 order-1 md:order-2">
          <h1 className={`${config.theme.fontHeading} text-4xl md:text-6xl ${config.theme.text} font-black italic mb-4 uppercase leading-none`}>
            {name} <br /> <span className={config.theme.accent}>{specialty}</span>
          </h1>
          <p className={`${config.theme.fontBody} ${config.theme.text} text-xl md:text-2xl opacity-90 max-w-sm mb-8`}>Bold moves. Vibrant looks. {city}'s finest event glam.</p>
        </div>
      </header>
    );
  }

  if (personality === 'minimal') {
    return (
      <header className={`h-screen flex items-center justify-center ${config.theme.bg} px-10`}>
        <div className="max-w-6xl w-full grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <h1 className={`${config.theme.fontHeading} text-6xl md:text-[9rem] ${config.theme.text} tracking-tighter leading-[0.9]`}>
              {name.split(' ')[0]} <br /> <span className="opacity-30 italic">{name.split(' ')[1]}</span>
            </h1>
            <p className="mt-8 text-sm uppercase tracking-[0.5em] text-gray-500">{specialty} — {city}</p>
          </div>
          <div className="md:col-span-5 aspect-[4/5] bg-gray-200">
             <img 
                src={config.images.hero} 
                className="w-full h-full object-cover grayscale contrast-125 shadow-xl" 
                alt={`${name} - Clean Beauty Mumbai`} 
                {...heroImageProps}
             />
          </div>
        </div>
      </header>
    );
  }

  if (personality === 'avantgarde') {
    return (
      <header className="relative h-screen bg-black overflow-hidden flex items-end p-8 md:p-20">
        <img 
          src={config.images.hero} 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen" 
          alt={`${name} Editorial Artist in ${city}`} 
          {...heroImageProps}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/20"></div>
        <div className="relative z-10 border-l-8 border-[#7B2CBF] pl-8">
           <h1 className="text-7xl md:text-9xl font-black uppercase italic leading-none text-white tracking-tighter drop-shadow-2xl">
             {name.split(' ')[0]}<br/>{name.split(' ')[1]}
           </h1>
           <p className="text-xl md:text-3xl font-bold text-[#E0AAFF] mt-4 uppercase tracking-widest">{specialty} Artist in {city}</p>
        </div>
      </header>
    );
  }

  return null;
};
