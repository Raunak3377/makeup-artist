
import React from 'react';
import { ArtistConfig } from '../types';

interface LocationSEOProps {
  config: ArtistConfig;
}

export const LocationSEO: React.FC<LocationSEOProps> = ({ config }) => {
  return (
    <section className={`py-16 px-8 border-y border-gray-100 ${config.theme.bg}`} aria-label="Location and Service Information">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className={`${config.theme.fontHeading} text-2xl mb-6 ${config.theme.text} uppercase tracking-tight`}>
          Expert {config.specialty} Services in {config.city}
        </h3>
        <p className={`${config.theme.fontBody} text-base leading-loose opacity-70 ${config.theme.text}`}>
          {config.locationPara} <br />
          If you are looking for a <strong>top-rated makeup artist in {config.city}</strong>, {config.name} provides high-end international quality. We use luxury brands like <strong>MAC</strong>, <strong>Huda Beauty</strong>, and <strong>Estée Lauder</strong> to ensure your <strong>bridal</strong> or <strong>party look</strong> lasts all night long. 
          Our studio serves the wider <strong>{config.city}</strong> region, offering both in-studio sessions and on-site bridal transformations. 
          Book the <strong>best makeup artist in {config.city}</strong> today for a truly unique aesthetic.
        </p>
      </div>
    </section>
  );
};
