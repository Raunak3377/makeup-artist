
import React from 'react';
import { ArtistConfig } from '../types';

interface TestimonialsProps {
  config: ArtistConfig;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ config }) => {
  const isRoyal = config.personality === 'royal';

  return (
    <section className={`py-24 px-8 ${isRoyal ? 'bg-amber-50/30' : 'bg-zinc-950 text-white'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`${config.theme.fontHeading} text-center text-3xl md:text-5xl mb-16 uppercase italic`}>
          What Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {config.testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className={`p-8 relative ${isRoyal ? 'bg-white border-l-4 border-amber-300 shadow-sm' : 'bg-zinc-900 border-b-4 border-fuchsia-600 shadow-2xl'}`}
            >
              <div className="text-4xl absolute top-4 right-4 opacity-10">"</div>
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${isRoyal ? 'text-amber-400' : 'text-cyan-400'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className={`${config.theme.fontBody} text-lg italic mb-6 opacity-90`}>
                "{t.text}"
              </p>
              <p className={`${config.theme.fontHeading} uppercase text-sm font-bold tracking-widest`}>
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
