import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t pt-16 pb-8">
      <div className="container-layout">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight text-primary">Mehmaan</span>
            </Link>
            <p className="text-subheading text-sm pr-4">
              Elevating the standard of short-term rentals with elegant spaces and premium hospitality.
            </p>
          </div>

          {/* Quick Links Placeholders */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Discover</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Featured Homes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Experiences
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Trust & Safety
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-caption">
            © {new Date().getFullYear()} Mehmaan Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-caption hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-caption hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-caption hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
