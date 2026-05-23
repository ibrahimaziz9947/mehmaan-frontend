"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-surface/90 backdrop-blur-md transition-colors">
      <div className="container-layout flex h-16 items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-primary">Mehmaan</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Destinations
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Experiences
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About Us
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Log In
          </Link>
          <Link href="/signup" className="btn-primary">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-surface px-4 py-6 shadow-lg">
          <nav className="flex flex-col gap-6">
            <Link 
              href="#" 
              className="text-base font-medium text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link 
              href="#" 
              className="text-base font-medium text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experiences
            </Link>
            <Link 
              href="#" 
              className="text-base font-medium text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <hr className="border-border" />
            <div className="flex flex-col gap-4 pt-2">
              <Link href="/login" className="w-full text-left text-base font-medium text-foreground">
                Log In
              </Link>
              <Link href="/signup" className="w-full btn-primary justify-center">
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
