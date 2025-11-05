import type { DesignerCardType } from "../../types";

export const Trending: DesignerCardType[] = [
  {
    id: 1,
    designer: {
      name: "Ava Couture",
      avatar: "https://i.pravatar.cc/60?img=12",
      exp: "7 years",
      description:
        "Ava Couture is known for her modern silhouettes infused with timeless luxury. Her work focuses on minimal fashion with sustainable materials.",
      workImages: [
        "https://www.joinsewna.com/static/media/img9_151W.dab4600f286264b47ee8.webp",
        "https://www.joinsewna.com/static/media/img9_151W.dab4600f286264b47ee8.webp",
        "https://www.joinsewna.com/static/media/img9_151W.dab4600f286264b47ee8.webp",
        "https://www.joinsewna.com/static/media/img9_151W.dab4600f286264b47ee8.webp",
        "https://www.joinsewna.com/static/media/img9_151W.dab4600f286264b47ee8.webp",
        "https://www.joinsewna.com/static/media/img9_151W.dab4600f286264b47ee8.webp",
      ],
      verifications: {
        idVerified: true,
        portfolioVerified: true,
        featuredDesigner: true,
      },
      rating: 4.9,
      testimonials: [
        {
          user: "Sienna M.",
          comment:
            "Her designs are elegant and eco-conscious — truly inspiring!",
        },
        {
          user: "Noah P.",
          comment: "Ava helped create my dream wedding gown — beyond perfect.",
        },
      ],
      badges: ["Sustainable Fashion", "Luxury Wear", "Bridal Couture"],
    },
    uploadedAt: "2025-11-03",
  },
  {
    id: 2,
    designer: {
      name: "Leo Fashion",
      avatar: "https://i.pravatar.cc/60?img=13",
      exp: "5 years",
      description:
        "Urban streetwear designer blending bold patterns with culture-driven themes for the modern youth.",
      workImages: [
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542060748-10c28b62716d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
      ],
      verifications: {
        idVerified: true,
        portfolioVerified: true,
        featuredDesigner: false,
      },
      rating: 4.6,
      testimonials: [
        {
          user: "Emma R.",
          comment:
            "His streetwear ideas are next-level — vibrant and confident.",
        },
      ],
      badges: ["Streetwear", "Graphic Design", "Cultural Fashion"],
    },
    uploadedAt: "2025-11-02",
  },
  {
    id: 3,
    designer: {
      name: "Sofia Threads",
      avatar: "https://i.pravatar.cc/60?img=14",
      exp: "6 years",
      description:
        "Sofia focuses on handwoven materials and intricate detailing that celebrates local craftsmanship.",
      workImages: [
        "https://www.joinsewna.com/static/media/img5_100W.cb18445e0f95f73f476a.webp",
        "https://www.joinsewna.com/static/media/img5_100W.cb18445e0f95f73f476a.webp",
        "https://www.joinsewna.com/static/media/img5_100W.cb18445e0f95f73f476a.webp",
        "https://www.joinsewna.com/static/media/img5_100W.cb18445e0f95f73f476a.webp",
        "https://www.joinsewna.com/static/media/img5_100W.cb18445e0f95f73f476a.webp",
        "https://www.joinsewna.com/static/media/img5_100W.cb18445e0f95f73f476a.webp",
      ],
      verifications: {
        idVerified: true,
        portfolioVerified: true,
        featuredDesigner: true,
      },
      rating: 4.8,
      testimonials: [
        {
          user: "Mila D.",
          comment: "Her handmade fabrics are absolutely stunning and durable!",
        },
      ],
      badges: ["Handcrafted", "Sustainable", "Artisan"],
    },
    uploadedAt: "2025-10-30",
  },
  {
    id: 4,
    designer: {
      name: "Noah Streetwear",
      avatar: "https://i.pravatar.cc/60?img=15",
      exp: "4 years",
      description:
        "Noah brings high-energy street style with clean, modern cuts and artistic expression.",
      workImages: [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=800&q=80",
      ],
      verifications: {
        idVerified: true,
        portfolioVerified: false,
        featuredDesigner: false,
      },
      rating: 4.4,
      testimonials: [
        {
          user: "Jayden L.",
          comment: "Love his color combinations and fit choices.",
        },
      ],
      badges: ["Streetwear", "Men’s Fashion", "Contemporary"],
    },
    uploadedAt: "2025-10-28",
  },
  {
    id: 5,
    designer: {
      name: "Mila Studio",
      avatar: "https://i.pravatar.cc/60?img=16",
      exp: "8 years",
      description:
        "Mila specializes in experimental cuts and futuristic aesthetics inspired by architecture.",
      workImages: [
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      ],
      verifications: {
        idVerified: true,
        portfolioVerified: true,
        featuredDesigner: true,
      },
      rating: 5.0,
      testimonials: [
        {
          user: "Olivia P.",
          comment: "Mila’s designs redefine structure and elegance!",
        },
      ],
      badges: ["Avant-Garde", "Futuristic", "High Fashion"],
    },
    uploadedAt: "2025-10-26",
  },
];
