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
        "https://www.joinsewna.com/static/media/img4_98W.88d8badb166f0b3d70c6.webp",

        "https://www.joinsewna.com/static/media/img4_98W.88d8badb166f0b3d70c6.webp",

        "https://www.joinsewna.com/static/media/img4_98W.88d8badb166f0b3d70c6.webp",

        "https://www.joinsewna.com/static/media/img4_98W.88d8badb166f0b3d70c6.webp",

        "https://www.joinsewna.com/static/media/img4_98W.88d8badb166f0b3d70c6.webp",

        "https://www.joinsewna.com/static/media/img4_98W.88d8badb166f0b3d70c6.webp",
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
        "https://www.joinsewna.com/static/media/img2_121W.63d7d6cec1cd6b7fa55f.webp",

        "https://www.joinsewna.com/static/media/img2_121W.63d7d6cec1cd6b7fa55f.webp",

        "https://www.joinsewna.com/static/media/img2_121W.63d7d6cec1cd6b7fa55f.webp",
        "https://www.joinsewna.com/static/media/img2_121W.63d7d6cec1cd6b7fa55f.webp",

        "https://www.joinsewna.com/static/media/img2_121W.63d7d6cec1cd6b7fa55f.webp",

        "https://www.joinsewna.com/static/media/img2_121W.63d7d6cec1cd6b7fa55f.webp",
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
