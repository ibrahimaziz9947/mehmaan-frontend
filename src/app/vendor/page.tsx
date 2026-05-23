import { Home, CalendarCheck, DollarSign, Clock } from "lucide-react";
import { StatCard } from "@/components/vendor/StatCard";
import { DashboardStat } from "@/types/dashboard";

const MOCK_STATS: DashboardStat[] = [
  {
    title: "Total Properties",
    value: 12,
    icon: Home,
    trend: { value: 8, isPositive: true },
    description: "vs. last month"
  },
  {
    title: "Active Bookings",
    value: 34,
    icon: CalendarCheck,
    trend: { value: 12, isPositive: true },
    description: "across all properties"
  },
  {
    title: "Monthly Earnings",
    value: "$14,500",
    icon: DollarSign,
    trend: { value: 2.4, isPositive: false },
    description: "vs. last month"
  },
  {
    title: "Pending Requests",
    value: 7,
    icon: Clock,
    description: "requires your attention"
  }
];

export default function VendorDashboardOverview() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, John</h1>
        <p className="text-muted-foreground">
          Here is what is happening with your properties today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_STATS.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Placeholder for charts or recent activity */}
        <div className="lg:col-span-2 card-premium p-6 min-h-[400px] flex flex-col">
          <h2 className="text-lg font-semibold text-foreground mb-4">Earnings Overview</h2>
          <div className="flex-1 flex items-center justify-center border-2 border-dashed border-border rounded-xl bg-muted/30">
            <p className="text-muted-foreground font-medium">Chart Integration Placeholder</p>
          </div>
        </div>

        <div className="card-premium p-6 min-h-[400px] flex flex-col">
          <h2 className="text-lg font-semibold text-foreground mb-4">Recent Bookings</h2>
          <div className="flex-1 flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg border border-border bg-surface hover:bg-muted/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  G{i}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Guest {i}</p>
                  <p className="text-xs text-muted-foreground">Villa Serenity • 3 nights</p>
                </div>
              </div>
            ))}
            <button className="mt-auto btn-outline w-full py-2 text-sm">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
