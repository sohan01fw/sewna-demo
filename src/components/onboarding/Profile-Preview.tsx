"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  InstagramIcon,
  Link,
  LucideTwitter,
  MessageCircle,
  UserPlus,
} from "lucide-react";

interface OnboardDesignerData {
  name: string;
  email: string;
  avatar: string;
  bio: string;
  skills: string[];
  portfolioImages: string[];
  experience: string;
  rating?: number;
  verifications: string[];
  socialLinks: {
    instagram?: string;
    twitter?: string;
    portfolio?: string;
  };
}

interface ProfilePreviewProps {
  formData: OnboardDesignerData;
}

export default function ProfilePreview({ formData }: ProfilePreviewProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg text-gray-800 font-semibold">
        Live Profile Preview 🚀
      </h3>

      <Card className="border border-foreground/10 rounded-2xl overflow-hidden bg-white p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT SECTION — INFO */}
          <div className="flex-1 flex flex-col justify-start">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 rounded-full border border-gray-200 overflow-hidden flex items-center justify-center">
                {formData.avatar ? (
                  <img
                    src={formData.avatar}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-accent/20 flex items-center justify-center text-4xl">
                    👗
                  </div>
                )}
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {formData.name || "Your Name"}
                </h2>
                <p className="text-gray-500 text-sm mb-1">
                  {formData.email || "email@example.com"}
                </p>
                <div className="flex gap-3 mt-2">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-sm"
                    disabled
                  >
                    <UserPlus size={16} /> Follow
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-sm"
                    disabled
                  >
                    <MessageCircle size={16} /> Message
                  </Button>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-gray-700 text-sm leading-relaxed mb-2">
              {formData.bio ||
                "Write a short bio about your fashion journey..."}
            </p>

            {/* Skills */}
            <div className="mb-3">
              <p className="text-xs font-semibold text-foreground/60 uppercase mb-1">
                Skills
              </p>
              {formData.skills?.length > 0 ? (
                <div className="flex flex-wrap gap-1">
                  {formData.skills.map((s, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-lime-100 border border-lime-300 rounded text-xs text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-400">No skills added yet.</p>
              )}
            </div>

            {/* Rating / Experience */}
            <div className="space-y-1 text-sm text-gray-700">
              <p>
                🕒 Experience:{" "}
                {formData.experience
                  ? `${formData.experience} yrs`
                  : "Not specified"}
              </p>
              {formData.verifications?.length > 0 && (
                <p>
                  ✅ Verifications:{" "}
                  <span className="text-lime-600 font-medium">
                    {formData.verifications.join(", ")}
                  </span>
                </p>
              )}
            </div>

            {/* Social Links */}
            <div className="mt-4 border-t border-gray-100 pt-3">
              <p className="text-xs font-semibold text-foreground/60 uppercase mb-1">
                Connect
              </p>
              <div className="flex gap-3">
                {formData.socialLinks.instagram && (
                  <a
                    href={`https://instagram.com/${formData.socialLinks.instagram}`}
                    className="text-gray-600 hover:text-lime-600 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                )}
                {formData.socialLinks.twitter && (
                  <a
                    href={`https://twitter.com/${formData.socialLinks.twitter}`}
                    className="text-gray-600 hover:text-lime-600 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LucideTwitter />
                  </a>
                )}
                {formData.socialLinks.portfolio && (
                  <a
                    href={formData.socialLinks.portfolio}
                    className="text-gray-600 hover:text-lime-600 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION — WORK IMAGES */}
          <div className="flex-[1.2] grid grid-cols-3 gap-3 overflow-y-auto max-h-[60vh]">
            {formData.portfolioImages?.length > 0 ? (
              formData.portfolioImages.map((img, i) => (
                <div
                  key={i}
                  className="w-full h-48 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={img}
                    alt={`Work ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))
            ) : (
              <div className="col-span-3 text-gray-400 text-center py-10 text-sm border border-dashed rounded-lg">
                Upload some portfolio images to preview here.
              </div>
            )}
          </div>
        </div>
      </Card>

      <p className="text-xs text-foreground/50 text-center">
        This preview updates live as you fill out your onboarding details.
      </p>
    </div>
  );
}
