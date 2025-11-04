import type { DesignerCardType } from "../../types";

export const TopSelling: DesignerCardType[] = [
  {
    id: 11,
    uploadedAt: "2025-11-03",
    designer: {
      name: "Maya Trends",
      avatar: "https://i.pravatar.cc/60?img=22",
      exp: "4 years",
      description: "Trendy fashion designer known for colorful collections.",
      workImages: [
        "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=801&q=80",
        "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=802&q=80",
        "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=803&q=80",
        "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=804&q=80",
        "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=805&q=80",
      ],
      verifications: {
        idVerified: true,
        portfolioVerified: true,
        featuredDesigner: true,
      },
      rating: 4.9,
      testimonials: [{ user: "Liam S.", comment: "Super creative designs!" }],
      badges: ["Colorful Fashion", "Trendy Styles"],
    },
  },
  {
    id: 12,
    uploadedAt: "2025-10-29",
    designer: {
      name: "Oliver Wear",
      avatar: "https://i.pravatar.cc/60?img=23",
      exp: "5 years",
      description: "Minimalist fashion designer with sleek aesthetics.",
      workImages: [
        "https://images.unsplash.com/photo-1542060748-10c28b62716d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542060748-10c28b62716d?auto=format&fit=crop&w=801&q=80",
        "https://images.unsplash.com/photo-1542060748-10c28b62716d?auto=format&fit=crop&w=802&q=80",
        "https://images.unsplash.com/photo-1542060748-10c28b62716d?auto=format&fit=crop&w=803&q=80",
        "https://images.unsplash.com/photo-1542060748-10c28b62716d?auto=format&fit=crop&w=804&q=80",
        "https://images.unsplash.com/photo-1542060748-10c28b62716d?auto=format&fit=crop&w=805&q=80",
      ],
      verifications: {
        idVerified: true,
        portfolioVerified: false,
        featuredDesigner: false,
      },
      rating: 4.6,
      testimonials: [
        { user: "Sophie R.", comment: "Love the minimalist approach!" },
      ],
      badges: ["Minimalist", "Sleek Designs"],
    },
  },
  {
    id: 13,
    uploadedAt: "2025-10-25",
    designer: {
      name: "Luna Studio",
      avatar: "https://i.pravatar.cc/60?img=24",
      exp: "6 years",
      description: "Studio focusing on versatile and wearable pieces.",
      workImages: [
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=801&q=80",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=802&q=80",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=803&q=80",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=804&q=80",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=805&q=80",
      ],
      verifications: {
        idVerified: true,
        portfolioVerified: true,
        featuredDesigner: false,
      },
      rating: 4.7,
      testimonials: [{ user: "Emma T.", comment: "Great wearable designs!" }],
      badges: ["Wearable Fashion", "Studio Collection"],
    },
  },
  // Add remaining id 14 & 15 in same pattern
];
