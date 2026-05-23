import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-muted py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Decorative Background layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
      </div>

      <div className="container-layout relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-4xl mb-6 leading-tight">
          Find Your Perfect Stay with <span className="text-primary">Mehmaan</span>
        </h1>
        
        <p className="text-subheading max-w-2xl mb-12 text-lg md:text-xl">
          Experience elegant spaces, premium hospitality, and unforgettable moments at our handpicked short-term rentals.
        </p>
        
        {/* Search Bar Placeholder */}
        <div className="w-full max-w-3xl bg-surface p-2 rounded-2xl md:rounded-full shadow-lg border border-border flex flex-col md:flex-row items-center gap-2">
          <div className="flex-1 w-full flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-border">
            <div className="flex flex-col text-left w-full">
              <span className="text-xs font-semibold text-foreground px-2">Location</span>
              <input 
                type="text" 
                placeholder="Where are you going?" 
                className="w-full bg-transparent px-2 py-1 outline-none text-sm text-muted-foreground placeholder:text-muted-foreground/60"
              />
            </div>
          </div>

          <div className="flex-1 w-full flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-border">
            <div className="flex flex-col text-left w-full">
              <span className="text-xs font-semibold text-foreground px-2">Check in - Check out</span>
              <span className="px-2 py-1 text-sm text-muted-foreground/60 cursor-pointer">
                Add dates
              </span>
            </div>
          </div>

          <div className="flex-1 w-full flex items-center px-4 py-2">
            <div className="flex flex-col text-left w-full">
              <span className="text-xs font-semibold text-foreground px-2">Guests</span>
              <span className="px-2 py-1 text-sm text-muted-foreground/60 cursor-pointer">
                Add guests
              </span>
            </div>
          </div>

          <button className="btn-primary w-full md:w-auto rounded-xl md:rounded-full px-8 py-4 md:py-3 mt-2 md:mt-0 flex items-center justify-center gap-2">
            <Search className="w-4 h-4" />
            <span className="font-semibold">Search</span>
          </button>
        </div>
      </div>
    </section>
  );
}
