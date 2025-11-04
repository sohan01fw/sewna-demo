import type { DesignerCardType } from "../../types";

export const New: DesignerCardType[] = [
  {
    id: 16,
    uploadedAt: "2025-11-03",
    designer: {
      name: "Ella NewGen",
      avatar: "https://i.pravatar.cc/60?img=27",
      exp: "2 years",
      description: "Fresh designer with modern, vibrant ideas.",
      workImages: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=801&q=80",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=802&q=80",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=803&q=80",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=804&q=80",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=805&q=80",
      ],
      verifications: {
        idVerified: false,
        portfolioVerified: true,
        featuredDesigner: false,
      },
      rating: 4.5,
      testimonials: [{ user: "Liam W.", comment: "Exciting fresh designs!" }],
      badges: ["Modern Wear", "Vibrant Fashion"],
    },
  },
  {
    id: 17,
    uploadedAt: "2025-11-02",
    designer: {
      name: "Jack Studio",
      avatar: "https://i.pravatar.cc/60?img=28",
      exp: "3 years",
      description: "Innovative designer with street-smart aesthetics.",
      workImages: [
        "https://images.unsplash.com/photo-1530845645551-315fcd84dc8b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1530845645551-315fcd84dc8b?auto=format&fit=crop&w=801&q=80",
        "https://images.unsplash.com/photo-1530845645551-315fcd84dc8b?auto=format&fit=crop&w=802&q=80",
        "https://images.unsplash.com/photo-1530845645551-315fcd84dc8b?auto=format&fit=crop&w=803&q=80",
        "https://images.unsplash.com/photo-1530845645551-315fcd84dc8b?auto=format&fit=crop&w=804&q=80",
        "https://images.unsplash.com/photo-1530845645551-315fcd84dc8b?auto=format&fit=crop&w=805&q=80",
      ],
      verifications: {
        idVerified: true,
        portfolioVerified: false,
        featuredDesigner: false,
      },
      rating: 4.4,
      testimonials: [{ user: "Sophia H.", comment: "Really creative pieces!" }],
      badges: ["Street Wear", "Innovative Designs"],
    },
  },
  // Add remaining id 18-20 in same pattern
];
