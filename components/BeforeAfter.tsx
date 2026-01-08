
import React, { useState, useRef, useEffect } from 'react';
import { ArtistConfig } from '../types';

interface BeforeAfterProps {
  config: ArtistConfig;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ config }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isModern = config.personality === 'modern';

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPos(percentage);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <section className={`py-20 px-4 md:px-0 ${isModern ? 'bg-zinc-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className={`${config.theme.fontHeading} text-3xl md:text-5xl ${config.theme.text} mb-4 uppercase`}>
          The Transformation
        </h2>
        <p className={`${config.theme.fontBody} ${config.theme.text} opacity-60 text-sm italic`}>
          {isModern ? 'Real results, no filters. Pure skill.' : 'The subtle art of enhancing your natural beauty.'}
        </p>
      </div>

      <div 
        ref={containerRef}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        className="relative w-full max-w-2xl mx-auto aspect-[4/5] md:aspect-[3/4] overflow-hidden select-none cursor-ew-resize rounded-lg shadow-2xl"
      >
        {/* After Image (Full Background) */}
        <div className="absolute inset-0">
          <img 
            src={config.images.after} 
            alt="After Makeup Transformation" 
            className="w-full h-full object-cover" 
            loading="lazy"
            decoding="async"
          />
          <div className="absolute bottom-4 right-4 bg-white/80 text-black px-3 py-1 text-xs uppercase tracking-widest font-bold">After</div>
        </div>

        {/* Before Image (Clipped Overlay) */}
        <div 
          className="absolute inset-0 overflow-hidden" 
          style={{ width: `${sliderPos}%` }}
        >
          <img 
            src={config.images.before} 
            alt="Before Makeup State" 
            className="absolute inset-0 w-[calc(100vw-2rem)] md:w-[42rem] h-full max-w-none object-cover grayscale" 
            loading="lazy"
            decoding="async"
          />
          <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 text-xs uppercase tracking-widest font-bold">Before</div>
        </div>

        {/* Slider Bar */}
        <div 
          className="absolute inset-y-0 w-1 bg-white shadow-xl cursor-ew-resize"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-gray-200">
            <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l-4 4m0 0l4 4m-4-4h18M16 17l4-4m0 0l-4-4m4 4H2" />
            </svg>
          </div>
        </div>
      </div>
      
      <p className="text-center mt-6 text-xs text-gray-500 font-sans tracking-wide md:hidden">
        Drag slider to see transformation
      </p>
    </section>
  );
};
