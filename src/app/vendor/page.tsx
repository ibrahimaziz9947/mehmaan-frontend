import { Home, CalendarCheck, DollarSign, Users } from "lucide-react";
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
    value: "Rs 145,000",
    icon: DollarSign,
    trend: { value: 2.4, isPositive: false },
    description: "vs. last month"
  },
  {
    title: "Occupancy Rate",
    value: "78%",
    icon: Users,
    trend: { value: 5.2, isPositive: true },
    description: "average across listings"
  }
];

export default function VendorDashboardOverview() {
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-[#034235] rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Welcome to your Mehmaan Dashboard</h1>
          <p className="text-white/80 max-w-xl text-lg">
            Manage your properties, track earnings, and provide memorable experiences for your guests across Pakistan.
          </p>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#046C4E] to-transparent opacity-50 z-0"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_STATS.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Placeholder for charts or recent activity */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="card-premium p-6 min-h-[300px] flex flex-col">
            <h2 className="text-lg font-semibold text-foreground mb-4">Revenue & Booking Trends</h2>
            <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-border rounded-xl bg-muted/30 p-8 text-center">
              <div className="w-16 h-16 bg-[#046C4E]/10 text-[#046C4E] rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-foreground font-medium mb-1">Chart Data Unavailable</h3>
              <p className="text-muted-foreground text-sm max-w-sm">Once you start receiving bookings, your revenue and occupancy trends will appear here.</p>
            </div>
          </div>
        </div>

        <div className="card-premium p-6 min-h-[400px] flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Recent Bookings</h2>
            <span className="text-xs font-medium bg-[#046C4E]/10 text-[#046C4E] px-2 py-1 rounded-full">3 New</span>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-4 p-3 rounded-xl border border-border bg-surface hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#D36135]/10 flex items-center justify-center text-[#D36135] font-bold shrink-0">
                  G{i}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">Guest {i}</p>
                  <p className="text-xs text-muted-foreground truncate mb-1">Luxury Farmhouse, Lahore</p>
                  <div className="flex items-center gap-2 text-xs text-foreground font-medium">
                    <span className="bg-muted px-2 py-0.5 rounded">Oct {10 + i} - Oct {12 + i}</span>
                  </div>
                </div>
              </div>
            ))}
            <button className="mt-auto btn-outline w-full py-2.5 text-sm font-medium">
              View All Bookings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
