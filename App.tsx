
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom';
import { ARTISTS } from './constants';
import { SectionType } from './types';
import { Hero } from './components/Hero';
import { BeforeAfter } from './components/BeforeAfter';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { LocationSEO } from './components/LocationSEO';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { Pricing } from './components/Pricing';
import { Brochure } from './components/Brochure';

const ArtistPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const artist = slug ? ARTISTS[slug] : null;

  useEffect(() => {
    if (artist) {
      // 1. Update Title & Meta Description
      document.title = artist.seoTitle;
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', artist.seoDescription);

      // 2. Add Canonical Link
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', window.location.href);
      // 4. Open Graph tags
      const setOG = (property: string, content: string) => {
        let meta = document.querySelector("meta[property='" + property + "']");
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };
      setOG('og:title', artist.seoTitle);
      setOG('og:description', artist.seoDescription);
      setOG('og:image', artist.images.hero);
      setOG('og:url', window.location.href);
      setOG('og:type', 'profile');

      // 5. Twitter Card
      let twitterCard = document.querySelector('meta[name="twitter:card"]');
      if (!twitterCard) {
        twitterCard = document.createElement('meta');
        twitterCard.setAttribute('name', 'twitter:card');
        document.head.appendChild(twitterCard);
      }
      twitterCard.setAttribute('content', 'summary_large_image');

      let twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (!twitterTitle) {
        twitterTitle = document.createElement('meta');
        twitterTitle.setAttribute('name', 'twitter:title');
        document.head.appendChild(twitterTitle);
      }
      twitterTitle.setAttribute('content', artist.seoTitle);

      let twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (!twitterDesc) {
        twitterDesc = document.createElement('meta');
        twitterDesc.setAttribute('name', 'twitter:description');
        document.head.appendChild(twitterDesc);
      }
      twitterDesc.setAttribute('content', artist.seoDescription);

      let twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (!twitterImage) {
        twitterImage = document.createElement('meta');
        twitterImage.setAttribute('name', 'twitter:image');
        document.head.appendChild(twitterImage);
      }
      twitterImage.setAttribute('content', artist.images.hero);
      // 3. Inject JSON-LD Structured Data for Local Business/Person
      // const schemaData = {
      //   "@context": "https://schema.org",
      //   "@type": "LocalBusiness",
      //   "name": artist.name,
      //   "image": artist.images.hero,
      //   "@id": window.location.href,
      //   "url": window.location.href,
      //   "telephone": artist.whatsappNumber,
      //   "address": {
      //     "@type": "PostalAddress",
      //     "addressLocality": artist.city,
      //     "addressCountry": "IN"
      //   },
      //   "description": artist.seoDescription,
      //   "priceRange": "₹₹₹",
      //   "hasOfferCatalog": {
      //     "@type": "OfferCatalog",
      //     "name": artist.specialty,
      //     "itemListElement": artist.pricing.map((p, i) => ({
      //       "@type": "Offer",
      //       "itemOffered": {
      //         "@type": "Service",
      //         "name": p.title
      //       }
      //     }))
      //   }
      // };

      // const scriptId = 'json-ld-schema';
      // let script = document.getElementById(scriptId) as HTMLScriptElement;
      // if (!script) {
      //   script = document.createElement('script');
      //   script.id = scriptId;
      //   script.type = 'application/ld+json';
      //   document.head.appendChild(script);
      // }
      // script.text = JSON.stringify(schemaData);

      window.scrollTo(0, 0);
    }
  }, [artist]);

  if (!artist) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-zinc-50 font-sans text-center">
        <h1 className="text-3xl font-bold mb-4 text-zinc-400 italic">Artist Profile Missing</h1>
        <p className="mb-6 text-zinc-500">The profile you are looking for might have moved or doesn't exist.</p>
        <Link to="/" className="text-zinc-900 underline tracking-widest text-xs uppercase font-bold">Return to Network</Link>
      </div>
    );
  }

  const renderSection = (type: SectionType) => {
    const props = { key: type, config: artist };
    switch (type) {
      case SectionType.HERO: return <Hero {...props} />;
      case SectionType.BEFORE_AFTER: return <BeforeAfter {...props} />;
      case SectionType.GALLERY: return <Gallery {...props} />;
      case SectionType.ABOUT: return <About {...props} />;
      case SectionType.LOCATION_SEO: return <LocationSEO {...props} />;
      case SectionType.TESTIMONIALS: return <Testimonials {...props} />;
      case SectionType.CONTACT: return <Contact {...props} />;
      case SectionType.PRICING: return <Pricing {...props} />;
      case SectionType.BROCHURE: return <Brochure {...props} />;
      default: return null;
    }
  };

  return (
    <div className={`min-h-screen w-full flex flex-col ${artist.theme.bg} selection:bg-black selection:text-white`}>
      {artist.sectionOrder.map(renderSection)}
      <WhatsAppCTA number={artist.whatsappNumber} name={artist.name} accent={artist.theme.accent} />
      <footer className={`py-20 px-8 text-center border-t border-gray-100/10 ${artist.theme.bg} ${artist.theme.text} opacity-30 text-[10px] tracking-[0.5em] uppercase`}>
        © {new Date().getFullYear()} {artist.name} Artistry | Premier {artist.specialty} in {artist.city}
      </footer>
    </div>
  );
};

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Artistry Network - Connecting India's Finest Makeup Talent";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Discover top makeup artists in India for bridal, party, and editorial looks. Book professional makeup services in Patna, Delhi, Mumbai, and Bangalore.");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://example.com');

    // Open Graph tags
    const setOG = (property: string, content: string) => {
      let meta = document.querySelector("meta[property='" + property + "']");
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    setOG('og:title', "Artistry Network - Connecting India's Finest Makeup Talent");
    setOG('og:description', "Discover top makeup artists in India for bridal, party, and editorial looks. Book professional makeup services in Patna, Delhi, Mumbai, and Bangalore.");
    setOG('og:image', "https://images.unsplash.com/photo-1595152772835-219674b2a8a6");
    setOG('og:url', 'https://example.com');
    setOG('og:type', 'website');

    // Twitter Card
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute('content', 'summary_large_image');

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', "Artistry Network - Connecting India's Finest Makeup Talent");

    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDesc) {
      twitterDesc = document.createElement('meta');
      twitterDesc.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDesc);
    }
    twitterDesc.setAttribute('content', "Discover top makeup artists in India for bridal, party, and editorial looks.");

    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', "https://images.unsplash.com/photo-1595152772835-219674b2a8a6");
    // const schemaData = {
    //   "@context": "https://schema.org",
    //   "@type": "Organization",
    //   "name": "Artistry Network",
    //   "url": window.location.origin,
    //   "description": "Connecting India's finest makeup talent for bridal, party, and editorial services."
    // };

    // const scriptId = 'json-ld-schema';
    // let script = document.getElementById(scriptId) as HTMLScriptElement;
    // if (!script) {
    //   script = document.createElement('script');
    //   script.id = scriptId;
    //   script.type = 'application/ld+json';
    //   document.head.appendChild(script);
    // }
    // script.text = JSON.stringify(schemaData);
  }, []);

  return (
    <div className="min-h-screen bg-white p-6 md:p-24 font-serif text-stone-900">
      <div className="max-w-6xl mx-auto">
      <h1 className="text-5xl md:text-8xl mb-20 tracking-tighter italic border-b pb-10">Artistry Network.</h1>
      <p className="text-sm uppercase tracking-widest mb-12 text-zinc-500">Connecting India's finest makeup talent.</p>
      <div className="grid md:grid-cols-2 gap-12">
        {Object.values(ARTISTS).map((artist) => (
          <Link key={artist.slug} to={`/artist/${artist.slug}`} className="group block">
            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-zinc-100 rounded-sm shadow-sm transition-shadow hover:shadow-xl">
               <img 
                  src={artist.images.hero} 
                  alt={artist.name + ' - ' + artist.specialty + ' in ' + artist.city} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
               />
               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-bold shadow-sm">{artist.personality}</div>
            </div>
            <div className="flex justify-between items-end border-b border-black/10 pb-4 group-hover:border-black transition-colors">
               <div>
                 <h2 className="text-3xl font-bold uppercase tracking-tighter">{artist.name}</h2>
                 <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">{artist.specialty} — {artist.city}</p>
               </div>
               <span className="text-xs italic group-hover:translate-x-1 transition-transform">Explore Profile &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist/:slug" element={<ArtistPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
