
import { ArtistConfig, SectionType } from './types';

const defaultPricing = [
  { title: 'Essential Glam', price: '₹15,000', features: ['HD Makeup', 'Basic Hairstyling', 'Draping'] },
  { title: 'Signature Look', price: '₹35,000', features: ['Airbrush Makeup', 'Advanced Hairstyling', 'Premium Lashes', 'Trial Session'], isFeatured: true },
  { title: 'Luxury Bridal', price: '₹60,000', features: ['Luxury International Brands', 'Floral Hair', '2 Artist Assistants', 'Personal Touch-up Kit'] },
];

const defaultGallery = {
  bridal: [
    'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1526045612212-70caf35c11bc?auto=format&fit=crop&q=80&w=600'
  ],
  party: [
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&q=80&w=600',
  ],
  reception: [
    'https://images.unsplash.com/photo-1526045612212-70caf35c11bc?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600',
  ],
  groom: [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600',
  ],
  Airbrush: [
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&q=80&w=600',
  ],
};

const brochureUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

export const ARTISTS: Record<string, ArtistConfig> = {
  'neha-sharma-bridal-makeup-patna': {
    slug: 'neha-sharma-bridal-makeup-patna',
    name: 'Neha Sharma',
    city: 'Patna',
    specialty: 'Bridal Makeup',
    personality: 'royal',
    seoTitle: 'Bridal Makeup Artist in Patna – Neha Sharma | Luxury Bridal Looks',
    seoDescription: 'Experience royalty on your wedding day with Neha Sharma, Patna’s premier bridal makeup artist.',
    theme: {
      primary: 'bg-[#FDFBF7]',
      secondary: 'bg-[#7D0A0A]',
      accent: 'text-[#C5A059]',
      bg: 'bg-[#FDFBF7]',
      text: 'text-[#2D2424]',
      fontHeading: 'font-royal',
      fontBody: 'font-serif-body'
    },
    sectionOrder: [SectionType.HERO, SectionType.GALLERY, SectionType.BEFORE_AFTER, SectionType.PRICING, SectionType.ABOUT, SectionType.BROCHURE, SectionType.TESTIMONIALS, SectionType.LOCATION_SEO, SectionType.CONTACT],
    pricing: defaultPricing,
    brochureUrl,
    images: {
      hero: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800',
      about: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
      gallery: defaultGallery,
      before: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800',
      after: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800'
    },
    aboutText: 'Neha Sharma brings a touch of royalty to every Patna bride. Her signature style focuses on glowing skin and timeless elegance.',
    locationPara: 'Conveniently located in Patna, Neha Sharma provides premium bridal services across Boring Road and Kankarbagh.',
    testimonials: [{ name: 'Priya S.', text: 'Neha made me look like a queen!', rating: 5 }],
    whatsappNumber: '919876543210'
  },
  'aisha-khan-party-makeup-delhi': {
    slug: 'aisha-khan-party-makeup-delhi',
    name: 'Aisha Khan',
    city: 'Delhi',
    specialty: 'Party & Event Makeup',
    personality: 'modern',
    seoTitle: 'Modern Party Makeup Artist in Delhi – Aisha Khan',
    seoDescription: 'Modern, vibrant, and bold makeup for parties and high-fashion events in Delhi.',
    theme: {
      primary: 'bg-[#0F0F0F]',
      secondary: 'bg-[#FF0080]',
      accent: 'text-[#00E5FF]',
      bg: 'bg-[#0F0F0F]',
      text: 'text-[#FAFAFA]',
      fontHeading: 'font-modern',
      fontBody: 'font-sans-body'
    },
    sectionOrder: [SectionType.HERO, SectionType.GALLERY, SectionType.BEFORE_AFTER, SectionType.PRICING, SectionType.ABOUT, SectionType.BROCHURE, SectionType.LOCATION_SEO, SectionType.TESTIMONIALS, SectionType.CONTACT],
    pricing: defaultPricing,
    brochureUrl,
    images: {
      hero: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&q=80&w=800',
      about: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800',
      gallery: defaultGallery,
      before: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800',
      after: 'https://images.unsplash.com/photo-1526045612212-70caf35c11bc?auto=format&fit=crop&q=80&w=800'
    },
    aboutText: 'Aisha Khan is Delhi’s go-to artist for bold, experimental, and high-glamour looks.',
    locationPara: 'Serving the vibrant social hubs of South Delhi and Gurgaon.',
    testimonials: [{ name: 'Riya M.', text: 'Boldest look ever!', rating: 5 }],
    whatsappNumber: '918887776665'
  },
  'sarah-gupta-minimal-makeup-mumbai': {
    slug: 'sarah-gupta-minimal-makeup-mumbai',
    name: 'Sarah Gupta',
    city: 'Mumbai',
    specialty: 'Clean Beauty',
    personality: 'minimal',
    seoTitle: 'Minimalist Makeup Artist in Mumbai – Sarah Gupta',
    seoDescription: 'High-fashion minimalist makeup for the modern Mumbai woman.',
    theme: {
      primary: 'bg-[#F9F7F2]',
      secondary: 'bg-[#4A5D4E]',
      accent: 'text-[#4A5D4E]',
      bg: 'bg-[#F9F7F2]',
      text: 'text-[#1A1A1A]',
      fontHeading: 'font-royal',
      fontBody: 'font-sans-body'
    },
    sectionOrder: [SectionType.HERO, SectionType.GALLERY, SectionType.PRICING, SectionType.BEFORE_AFTER, SectionType.ABOUT, SectionType.BROCHURE, SectionType.TESTIMONIALS, SectionType.LOCATION_SEO, SectionType.CONTACT],
    pricing: defaultPricing,
    brochureUrl,
    images: {
      hero: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
      about: 'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&fit=crop&q=80&w=800',
      gallery: defaultGallery,
      before: 'https://images.unsplash.com/photo-1588516999521-430333f95b88?auto=format&fit=crop&q=80&w=800',
      after: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800'
    },
    aboutText: 'Sarah focuses on the "no-makeup" makeup look, highlighting natural features with soft, earthy tones.',
    locationPara: 'Available in Bandra, Juhu, and South Mumbai for exclusive private sessions.',
    testimonials: [{ name: 'Elena D.', text: 'The elegance is unbelievable.', rating: 5 }],
    whatsappNumber: '917770001112'
  },
  'maya-iyer-editorial-makeup-bangalore': {
    slug: 'maya-iyer-editorial-makeup-bangalore',
    name: 'Maya Iyer',
    city: 'Bangalore',
    specialty: 'Editorial & Glam',
    personality: 'avantgarde',
    seoTitle: 'Editorial Makeup Artist in Bangalore – Maya Iyer',
    seoDescription: 'Cutting-edge editorial makeup and high-glam event looks in Bangalore.',
    theme: {
      primary: 'bg-[#050505]',
      secondary: 'bg-[#7B2CBF]',
      accent: 'text-[#E0AAFF]',
      bg: 'bg-[#050505]',
      text: 'text-white',
      fontHeading: 'font-modern',
      fontBody: 'font-sans-body'
    },
    sectionOrder: [SectionType.HERO, SectionType.GALLERY, SectionType.PRICING, SectionType.ABOUT, SectionType.BEFORE_AFTER, SectionType.BROCHURE, SectionType.LOCATION_SEO, SectionType.CONTACT],
    pricing: defaultPricing,
    brochureUrl,
    images: {
      hero: 'https://images.unsplash.com/photo-1522338228045-9b68e7ff4e95?auto=format&fit=crop&q=80&w=800',
      about: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
      gallery: defaultGallery,
      before: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800',
      after: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800'
    },
    aboutText: 'Maya blends art and beauty. Her editorial work has been featured in leading Bangalore fashion mags.',
    locationPara: 'Based in Indiranagar, Maya travels globally for high-fashion editorial shoots.',
    testimonials: [{ name: 'Karan J.', text: 'Absolute visionary artist.', rating: 5 }],
    whatsappNumber: '916665554443'
  },
  'tosif-arman-makeup-gayaji-bihar': {
    slug: 'tosif-arman-makeup-gayaji-bihar',
    name: 'Tosif Arman',
    city: 'Gayaji, Bihar',
    specialty: 'Makeup Artist',
    personality: 'authentic',
    seoTitle: 'Makeup Artist in Gayaji, Bihar – Tosif Arman',
    seoDescription: 'Professional makeup services in Gayaji, Bihar. Natural and elegant looks by Tosif Arman.',
    theme: {
      primary: 'bg-[#F5F5DC]',
      secondary: 'bg-[#8B4513]',
      accent: 'text-[#DAA520]',
      bg: 'bg-[#F5F5DC]',
      text: 'text-[#2F4F2F]',
      fontHeading: 'font-serif',
      fontBody: 'font-serif-body'
    },
    sectionOrder: [SectionType.HERO, SectionType.GALLERY, SectionType.BEFORE_AFTER, SectionType.PRICING, SectionType.ABOUT, SectionType.BROCHURE, SectionType.TESTIMONIALS, SectionType.LOCATION_SEO, SectionType.CONTACT],
    pricing: defaultPricing,
    brochureUrl,
    images: {
      hero: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
      about: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
      gallery: defaultGallery,
      before: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800',
      after: 'https://images.unsplash.com/photo-1526045612212-70caf35c11bc?auto=format&fit=crop&q=80&w=800'
    },
    aboutText: 'Tosif Arman brings authentic beauty to Gayaji, Bihar with a focus on natural and elegant looks.',
    locationPara: 'Serving the local community in Gayaji and surrounding areas in Bihar.',
    testimonials: [{ name: 'Local Client', text: 'Amazing work!', rating: 5 }],
    whatsappNumber: '919876543211'
  }
};
