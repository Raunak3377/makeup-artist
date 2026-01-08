
import React, { useState } from 'react';
import { ArtistConfig } from '../types';

interface GalleryProps {
  config: ArtistConfig;
}

export const Gallery: React.FC<GalleryProps> = ({ config }) => {
  const [activeTab, setActiveTab] = useState<keyof typeof config.images.gallery>('bridal');
  const { name, city } = config;
  
  const categories = [
    { id: 'bridal', label: 'Bridal Makeup' },
    { id: 'party', label: 'Party Makeup' },
    { id: 'reception', label: 'Reception' },
    { id: 'groom', label: 'Groom' },
    { id: 'Airbrush', label: "Airbrush makeup"}
  ];

  const currentImages = config.images.gallery[activeTab] || [];

  return (
    <section className={`py-24 px-6 md:px-20 ${config.theme.bg}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className={`${config.theme.fontHeading} text-4xl md:text-6xl ${config.theme.text} uppercase tracking-tighter mb-4`}>
              The Signature <br /> <span className="opacity-40 italic">Portfolio</span>
            </h2>
            <p className={`${config.theme.fontBody} text-sm md:text-base opacity-60 leading-relaxed`}>
              Specializing in high-end transformations in {city}. Each category represents a unique mastery of light, shade, and skin.
            </p>
          </div>

          <nav className="flex flex-wrap gap-2" aria-label="Gallery Categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`px-6 py-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold border transition-all duration-300 ${
                  activeTab === cat.id 
                    ? `bg-black text-white border-black` 
                    : `border-gray-200 text-gray-400 hover:border-black hover:text-black`
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {currentImages.map((src, i) => (
            <div key={`${activeTab}-${i}`} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="group relative w-full aspect-[3/4] overflow-hidden rounded-sm shadow-lg bg-zinc-100">
                <img 
                  src={src} 
                  alt={`${categories.find(c => c.id === activeTab)?.label} work by ${name} in ${city}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-4 flex justify-between items-center opacity-40">
                <span className="text-[10px] uppercase tracking-widest font-sans">{activeTab} Case 0{i + 1}</span>
                <div className="w-8 h-[1px] bg-current"></div>
              </div>
            </div>
          ))}
          
          {currentImages.length === 0 && (
            <div className="col-span-full py-20 text-center opacity-20 italic font-serif">
              New {activeTab} portfolio updates coming soon...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
