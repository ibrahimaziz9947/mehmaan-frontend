import React from "react";
import { LucideIcon } from "lucide-react";

interface RoleSelectionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  selected: boolean;
  onClick: () => void;
}

export function RoleSelectionCard({ 
  title, 
  description, 
  icon: Icon, 
  selected, 
  onClick 
}: RoleSelectionCardProps) {
  return (
    <div
      onClick={onClick}
      className={`flex-1 cursor-pointer rounded-xl border p-4 transition-all duration-200 ${
        selected 
          ? "border-primary bg-primary/5 shadow-sm ring-1 ring-primary" 
          : "border-border bg-surface hover:border-primary/30 hover:bg-muted/30"
      }`}
      role="radio"
      aria-checked={selected}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-lg transition-colors ${
          selected 
            ? "bg-primary text-primary-foreground" 
            : "bg-muted text-muted-foreground"
        }`}>
          <Icon className="w-5 h-5" />
        </div>
        <h3 className={`font-semibold ${selected ? "text-primary" : "text-foreground"}`}>
          {title}
        </h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
