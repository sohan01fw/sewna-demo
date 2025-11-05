import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormStep from "./Form-step";
import { motion } from "motion/react";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router";

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

interface OnboardingFormProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export default function OnboardingForm({
  formData,
  setFormData,
}: OnboardingFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleNextStep = () => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!validateEmail(formData.email))
        newErrors.email = "Invalid email";
    } else if (currentStep === 2) {
      if (!formData.bio.trim()) newErrors.bio = "Bio is required";
    } else if (currentStep === 3) {
      if (formData.skills.length === 0)
        newErrors.skills = "Add at least one skill";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  const handleAddSkill = (skill: string) => {
    if (skill.trim() && !formData.skills.includes(skill)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skill],
      });
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof FormData | string,
  ) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setFormData({
        ...formData,
        [parent]: {
          ...(formData[parent as keyof FormData] as Record<string, string>),
          [child]: e.target.value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    }
  };

  const progressPercentage = (currentStep / 4) * 100;

  const formStepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
  };

  // Framer Motion variants for input fields (optional slight fade-in on load)
  const inputItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } },
  };

  return (
    <div id="form" className="space-y-6">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-10 pt-8 ">
        {/* Previous Button */}
        <Button
          onClick={handlePrevStep}
          disabled={currentStep === 1}
          className={`
                           w-14 h-14 rounded-full border border-black/10
                           flex items-center justify-center
                           bg-white text-black shadow-sm
                           transition-all duration-300
                           hover:border-lime-500 hover:bg-lime-50 hover:cursor-pointer hover:scale-105
                         `}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        {/* Next / Complete Button */}
        <Button
          onClick={handleNextStep}
          className={`
                  w-14 h-14 rounded-full border border-black/10
                  flex items-center justify-center
                  bg-white text-black shadow-sm
                  transition-all duration-300
                  hover:border-lime-500 hover:bg-lime-50 hover:cursor-pointer hover:scale-105
                `}
        >
          {currentStep === 4 ? (
            <Link to="/dashboard" className="font-medium text-sm">
              ✓
            </Link>
          ) : (
            <ArrowRight className="w-5 h-5" />
          )}
        </Button>
      </div>
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-semibold text-foreground/70">
            Step {currentStep} of 4
          </h2>
          <span className="text-sm text-foreground/50">
            {progressPercentage.toFixed(0)}%
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Form Card */}
      <div className="border-transparent   p-8">
        {/* Step 1: Basic Info */}
        {currentStep === 1 && (
          <motion.div
            key="step1-basic-info" // Key is important for Framer Motion to recognize state change
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formStepVariants}
          >
            <FormStep
              title="Basic Information"
              description="Let's start with your name and email. This information is key for your account setup." // Enhanced description
            >
              <div className="space-y-4">
                <motion.div variants={inputItemVariants}>
                  <label className="block text-lg font-bold text-gray-900 mb-2">
                    Profile Picture
                  </label>
                  <div className="flex items-center gap-4">
                    {/* Circle Preview */}
                    <div className="relative w-20 h-16 rounded-full border border-gray-200 overflow-hidden bg-gray-100 flex items-center justify-center">
                      {formData.avatar ? (
                        <img
                          src={formData.avatar}
                          alt="Avatar Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-400 text-2xl">📷</span>
                      )}
                    </div>

                    {/* File Input */}
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const objectUrl = URL.createObjectURL(file);
                          setFormData({ ...formData, avatar: objectUrl });
                        }
                      }}
                      className="w-full"
                    />
                  </div>
                </motion.div>
                {/* Increased vertical spacing */}
                {/* Full Name Field */}
                <motion.div variants={inputItemVariants}>
                  <label className="block text-lg  font-bold text-gray-900 mb-2">
                    {" "}
                    {/* Larger, bolder label */}
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <Input
                    type="text"
                    placeholder="e.g., Jane Doe"
                    value={formData.name}
                    onChange={(e) => handleInputChange(e, "name")}
                    className="
                      w-full
                      py-6 px-7
                      text-2xl
                      rounded-2xl
                      border border-gray-100
                      bg-white/80 backdrop-blur-sm
                      shadow-sm placeholder:text-black/40
                      focus:outline-none focus:ring-0 focus:border-gray-200
                      focus:shadow-md focus:scale-[1.02]
                      transition-all duration-300 ease-out
                    "
                  />

                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600  mt-2 font-medium text-sm"
                    >
                      {errors.name}!
                    </motion.p>
                  )}
                </motion.div>
                {/* Email Address Field */}
                <motion.div variants={inputItemVariants}>
                  <label className="block text-lg  font-bold text-gray-900 mb-2">
                    {" "}
                    {/* Larger, bolder label */}
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="e.g., your.best@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange(e, "email")}
                    // Premium, large input styling: increased padding, rounded corners, subtle focus ring
                    className="
                                          w-full
                                          py-6 px-7
                                          text-2xl
                                          rounded-2xl
                                          border border-gray-100
                                          bg-white/80 backdrop-blur-sm
                                          shadow-sm placeholder:text-black/40
                                          focus:outline-none focus:ring-0 focus:border-gray-200
                                          focus:shadow-md focus:scale-[1.02]
                                          transition-all duration-300 ease-out
                                        "
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600  mt-2 font-medium text-sm"
                    >
                      {errors.email}!
                    </motion.p>
                  )}
                </motion.div>
              </div>
            </FormStep>
          </motion.div>
        )}

        {/* Step 2: Bio */}

        {currentStep === 2 && (
          <FormStep
            title="Professional Bio & Experience"
            description="Tell us about your design style and experience"
          >
            <div className="space-y-6">
              {/* Bio Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Bio *
                </label>
                <textarea
                  placeholder="Share your design philosophy, style, and what inspires you..."
                  value={formData.bio}
                  onChange={(e) => handleInputChange(e, "bio")}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                />
                {errors.bio && (
                  <p className="text-red-500 text-sm mt-1">{errors.bio}</p>
                )}
                <p className="text-xs text-foreground/50 mt-2">
                  {formData.bio.length} characters
                </p>
              </div>

              {/* Experience Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Years of Experience *
                </label>
                <input
                  type="number"
                  placeholder="e.g., 5"
                  value={formData.experience}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value >= 0) {
                      handleInputChange(
                        {
                          target: { value: String(value) },
                        } as React.ChangeEvent<HTMLInputElement>,
                        "experience",
                      );
                    }
                  }}
                  className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                {errors.experience && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.experience}
                  </p>
                )}
              </div>
            </div>
          </FormStep>
        )}

        {/* Step 3: Skills */}
        {currentStep === 3 && (
          <FormStep
            title="Design Skills"
            description="Add the skills that define your expertise"
          >
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Add Skill *
                </label>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="e.g., Pattern Design, Draping, Digital Design"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleAddSkill((e.target as HTMLInputElement).value);
                        (e.target as HTMLInputElement).value = "";
                      }
                    }}
                    className="bg-background border-foreground/20 text-foreground placeholder:text-foreground/40"
                  />
                  <Button
                    onClick={(e) => {
                      const input =
                        e.currentTarget.parentElement?.querySelector(
                          "input",
                        ) as HTMLInputElement;
                      if (input) {
                        handleAddSkill(input.value);
                        input.value = "";
                      }
                    }}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Add
                  </Button>
                </div>
                {errors.skills && (
                  <p className="text-red-500 text-sm mt-1">{errors.skills}</p>
                )}
              </div>

              {/* Skills Tags */}
              {formData.skills.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">
                    Your Skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm"
                      >
                        <span className="text-foreground">{skill}</span>
                        <button
                          onClick={() => handleRemoveSkill(skill)}
                          className="text-foreground/60 hover:text-foreground transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </FormStep>
        )}

        {/* Step 4: Social Links */}
        {currentStep === 4 && (
          <motion.div
            key="step4-social-portfolio"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formStepVariants}
          >
            <FormStep
              title="Social & Portfolio"
              description="Help people discover your work"
            >
              <div className="space-y-5">
                <motion.div variants={inputItemVariants}>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Instagram Profile
                  </label>
                  <div className="flex items-center">
                    <span className="text-foreground/50 px-3">@</span>
                    <Input
                      type="text"
                      placeholder="your_handle"
                      value={formData.socialLinks.instagram}
                      onChange={(e) =>
                        handleInputChange(e, "socialLinks.instagram")
                      }
                      className="bg-background border-foreground/20 text-foreground placeholder:text-foreground/40"
                    />
                  </div>
                </motion.div>

                <motion.div variants={inputItemVariants}>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Twitter / X
                  </label>
                  <div className="flex items-center">
                    <span className="text-foreground/50 px-3">@</span>
                    <Input
                      type="text"
                      placeholder="your_handle"
                      value={formData.socialLinks.twitter}
                      onChange={(e) =>
                        handleInputChange(e, "socialLinks.twitter")
                      }
                      className="bg-background border-foreground/20 text-foreground placeholder:text-foreground/40"
                    />
                  </div>
                </motion.div>

                <motion.div variants={inputItemVariants}>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Portfolio Website
                  </label>
                  <Input
                    type="url"
                    placeholder="https://yourportfolio.com"
                    value={formData.socialLinks.portfolio}
                    onChange={(e) =>
                      handleInputChange(e, "socialLinks.portfolio")
                    }
                    className="bg-background border-foreground/20 text-foreground placeholder:text-foreground/40"
                  />
                </motion.div>
              </div>
            </FormStep>
          </motion.div>
        )}
      </div>
    </div>
  );
}
