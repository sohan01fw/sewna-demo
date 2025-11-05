"use client";

import { useState } from "react";
import { Link } from "react-router";
import OnboardingForm from "./components/onboarding/OnBoardingForm";
import ProfilePreview from "./components/onboarding/Profile-Preview";

interface FormData {
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

export default function OnboardingPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    avatar: "",
    bio: "",
    skills: [],
    portfolioImages: [],
    experience: "",
    rating: undefined,
    verifications: [],
    socialLinks: {},
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Logo */}
      <div className="m-2">
        <Link
          to="/"
          className="text-accent text-3xl font-extrabold tracking-wide hover:scale-105 transition-transform duration-200"
        >
          sewna
        </Link>
      </div>

      {/* Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 lg:gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <OnboardingForm formData={formData} setFormData={setFormData} />
          </div>

          {/* Preview Section */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-8 lg:mt-16 lg:max-w-sm lg:ml-20">
              <ProfilePreview formData={formData} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
