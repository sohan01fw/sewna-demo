import type React from "react";
interface FormStepProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function FormStep({
  title,
  description,
  children,
}: FormStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-foreground/60">{description}</p>
      </div>
      {children}
    </div>
  );
}
