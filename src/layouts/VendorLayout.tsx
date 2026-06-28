"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Home, 
  CalendarCheck, 
  DollarSign, 
  Settings, 
  Menu, 
  X, 
  LogOut,
  Bell
} from "lucide-react";

interface VendorLayoutProps {
  children: React.ReactNode;
}

const NAVIGATION_ITEMS = [
  { name: "Dashboard", href: "/vendor", icon: LayoutDashboard },
  { name: "My Properties", href: "/vendor/properties", icon: Home },
  { name: "Bookings", href: "/vendor/bookings", icon: CalendarCheck },
  { name: "Earnings", href: "/vendor/earnings", icon: DollarSign },
  { name: "Settings", href: "/vendor/settings", icon: Settings },
];

export default function VendorLayout({ children }: VendorLayoutProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsMobileSidebarOpen(!isMobileSidebarOpen);
  const closeSidebar = () => setIsMobileSidebarOpen(false);

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-surface border-r border-border transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 flex flex-col ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-border shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-28 h-8">
              <Image 
                src="/images/mehmaan-logo.png" 
                alt="Mehmaan Logo" 
                fill
                className="object-contain object-left"
              />
            </div>
            <span className="text-sm font-medium text-muted-foreground ml-1">Host</span>
          </Link>
          <button className="lg:hidden text-muted-foreground" onClick={closeSidebar}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeSidebar}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive 
                    ? "bg-primary text-primary-foreground font-medium" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? "text-primary-foreground" : ""}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border shrink-0">
          <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-muted-foreground hover:bg-red-50 hover:text-red-600 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden w-full relative">
        
        {/* Top Header */}
        <header className="h-16 bg-surface border-b border-border flex items-center justify-between px-4 sm:px-6 lg:px-8 shrink-0">
          <button 
            className="lg:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground"
            onClick={toggleSidebar}
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-4 ml-auto">
            <button className="p-2 relative text-muted-foreground hover:text-foreground transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full border-2 border-surface"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm border border-primary/30">
              JD
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
