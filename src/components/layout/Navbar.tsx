"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-surface/95 backdrop-blur-md transition-colors shadow-sm">
      <div className="container-layout flex h-20 items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 py-2">
          <div className="relative w-48 h-16">
            <Image 
              src="/images/mehmaan-logo.png" 
              alt="Mehmaan Logo" 
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Destinations
          </Link>
          <Link href="/vendor" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Become a Host
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-5">
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
        <div className="md:hidden border-t bg-surface px-4 py-6 shadow-xl absolute w-full">
          <nav className="flex flex-col gap-5">
            <Link 
              href="/" 
              className="text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#" 
              className="text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link 
              href="/vendor" 
              className="text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Become a Host
            </Link>
            <Link 
              href="#" 
              className="text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="#" 
              className="text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <hr className="border-border my-2" />
            <div className="flex flex-col gap-4">
              <Link 
                href="/login" 
                className="w-full text-center py-2.5 rounded-lg border border-border text-base font-medium text-foreground hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log In
              </Link>
              <Link 
                href="/signup" 
                className="w-full btn-primary justify-center py-2.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
