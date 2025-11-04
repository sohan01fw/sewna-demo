import type { DesignerCardType } from "../../types";

export const Premium: DesignerCardType[] = [
  {
    id: 6,
    uploadedAt: "2025-11-01",
    designer: {
      name: "Isabella Luxe",
      avatar: "https://i.pravatar.cc/60?img=17",
      exp: "5 years",
      description: "Luxury designer specializing in evening wear.",
      workImages: [
        "https://images.unsplash.com/photo-1520975918313-60e55e7a8b68?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520975918313-60e55e7a8b68?auto=format&fit=crop&w=801&q=80",
        "https://images.unsplash.com/photo-1520975918313-60e55e7a8b68?auto=format&fit=crop&w=802&q=80",
        "https://images.unsplash.com/photo-1520975918313-60e55e7a8b68?auto=format&fit=crop&w=803&q=80",
        "https://images.unsplash.com/photo-1520975918313-60e55e7a8b68?auto=format&fit=crop&w=804&q=80",
        "https://images.unsplash.com/photo-1520975918313-60e55e7a8b68?auto=format&fit=crop&w=805&q=80",
      ],
      verifications: {
        idVerified: true,
        portfolioVerified: true,
        featuredDesigner: true,
      },
      rating: 4.8,
      testimonials: [
        { user: "Olivia P.", comment: "Amazing quality and design!" },
      ],
      badges: ["Luxury Wear", "Evening Dresses"],
    },
  },
  {
    id: 7,
    uploadedAt: "2025-10-27",
    designer: {
      name: "Liam Atelier",
      avatar: "https://i.pravatar.cc/60?img=18",
      exp: "6 years",
      description: "Contemporary fashion designer with urban styles.",
      workImages: [
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=801&q=80",
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=802&q=80",
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=803&q=80",
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=804&q=80",
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=805&q=80",
      ],
      verifications: {
        idVerified: true,
        portfolioVerified: true,
        featuredDesigner: false,
      },
      rating: 4.7,
      testimonials: [{ user: "Ethan L.", comment: "Loved working with Liam!" }],
      badges: ["Urban Wear", "Street Style"],
    },
  },
  // Add remaining designers (id 8-10) following the same pattern
];
