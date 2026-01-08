
export enum SectionType {
  HERO = 'HERO',
  BEFORE_AFTER = 'BEFORE_AFTER',
  GALLERY = 'GALLERY',
  ABOUT = 'ABOUT',
  LOCATION_SEO = 'LOCATION_SEO',
  TESTIMONIALS = 'TESTIMONIALS',
  CONTACT = 'CONTACT',
  PRICING = 'PRICING',
  BROCHURE = 'BROCHURE'
}

export interface PricingTier {
  title: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export type PersonalityType = 'royal' | 'modern' | 'minimal' | 'avantgarde';

export interface ArtistConfig {
  slug: string;
  name: string;
  city: string;
  specialty: string;
  personality: PersonalityType;
  seoTitle: string;
  seoDescription: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
    text: string;
    fontHeading: string;
    fontBody: string;
  };
  sectionOrder: SectionType[];
  pricing: PricingTier[];
  brochureUrl: string;
  images: {
    hero: string;
    about: string;
    gallery: {
      bridal: string[];
      party: string[];
      reception: string[];
      groom: string[];
    };
    before: string;
    after: string;
  };
  aboutText: string;
  locationPara: string;
  testimonials: Testimonial[];
  whatsappNumber: string;
}
