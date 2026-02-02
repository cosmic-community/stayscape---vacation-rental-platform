export interface CosmicFile {
  url: string;
  imgix_url: string;
}

export interface Host {
  id: string;
  slug: string;
  title: string;
  metadata: {
    name: string;
    bio?: string;
    profile_photo?: CosmicFile;
    superhost?: boolean;
    email?: string;
  };
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  metadata: {
    name: string;
    description?: string;
    location: string;
    price_per_night: number;
    bedrooms?: number;
    bathrooms?: number;
    amenities?: string[];
    gallery?: CosmicFile[];
    host?: Host | string;
  };
}

export interface RatingOption {
  key: string;
  value: string;
}

export interface Testimonial {
  id: string;
  slug: string;
  title: string;
  metadata: {
    guest_name: string;
    guest_photo?: CosmicFile;
    rating: RatingOption;
    review: string;
    property?: Property | string;
  };
}