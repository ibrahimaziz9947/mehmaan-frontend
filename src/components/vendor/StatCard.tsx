import React from "react";
import { DashboardStat } from "@/types/dashboard";

interface StatCardProps {
  stat: DashboardStat;
}

export function StatCard({ stat }: StatCardProps) {
  const { title, value, icon: Icon, trend, description } = stat;

  return (
    <div className="card-premium p-6 flex flex-col justify-between h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-primary/10 text-primary rounded-xl">
          <Icon className="w-6 h-6" />
        </div>
        {trend && (
          <span
            className={`text-sm font-medium px-2.5 py-1 rounded-full ${
              trend.isPositive
                ? "bg-[#046C4E]/10 text-[#046C4E]"
                : "bg-[#D36135]/10 text-[#D36135]"
            }`}
          >
            {trend.isPositive ? "+" : "-"}{trend.value}%
          </span>
        )}
      </div>

      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-1">
          {title}
        </h3>
        <div className="text-3xl font-bold text-foreground tracking-tight">
          {value}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-2">{description}</p>
        )}
      </div>
    </div>
  );
}
