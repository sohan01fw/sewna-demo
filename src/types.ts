// types/designer.ts
export interface VerificationStatus {
  idVerified: boolean;
  portfolioVerified: boolean;
  featuredDesigner: boolean;
}

export interface Testimonial {
  user: string;
  comment: string;
}

export interface Designer {
  name: string;
  avatar: string;
  exp: string;
  description: string;
  workImages: string[];
  verifications: VerificationStatus;
  rating: number;
  testimonials: Testimonial[];
  badges: string[];
}

export interface DesignerCardType {
  id: number;
  designer: Designer;
  uploadedAt: string;
}

// Now this type matches your `export const designerData = { Trending, Premium, ... }`
export interface DesignerData {
  Explore: DesignerCardType[];
  Trending: DesignerCardType[];
  Premium: DesignerCardType[];
  TopSelling: DesignerCardType[];
  New: DesignerCardType[];
}
