import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  imageUrl: string;
}

export default function AuthLayout({ children, title, subtitle, imageUrl }: AuthLayoutProps) {
  return (
    <div className="container-layout py-12 md:py-24 flex justify-center items-center min-h-[calc(100vh-4rem)]">
      <div className="w-full max-w-5xl bg-surface border border-border rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side: Premium Hospitality Image (Hidden on mobile/tablet portrait) */}
        <div className="hidden lg:block lg:w-1/2 relative bg-muted">
          <Image
            src={imageUrl}
            alt="Authentication background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-10 text-white">
            <h2 className="text-3xl font-bold mb-3 tracking-tight">Mehmaan</h2>
            <p className="text-white/90 text-lg">
              Elevating the standard of short-term rentals with elegant spaces and premium hospitality.
            </p>
          </div>
        </div>

        {/* Right Side: Auth Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
