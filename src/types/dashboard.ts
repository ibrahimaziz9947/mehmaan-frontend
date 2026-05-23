import { LucideIcon } from "lucide-react";

export interface DashboardStat {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description?: string;
}
