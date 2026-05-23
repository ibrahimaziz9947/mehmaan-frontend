import Image from "next/image";
import { Star, Users, Bed } from "lucide-react";
import { Property } from "@/types/property";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="card-premium group cursor-pointer overflow-hidden flex flex-col h-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Wishlist Button Placeholder */}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/70 backdrop-blur-md hover:bg-white transition-colors z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-foreground"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2 gap-2">
          <div>
            <h3 className="font-semibold text-foreground text-lg line-clamp-1">
              {property.title}
            </h3>
            <p className="text-sm text-muted-foreground">{property.location}</p>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{property.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 mt-2">
          <div className="flex items-center gap-1.5 shrink-0">
            <Users className="w-4 h-4" />
            <span>{property.guestCapacity} Guests</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <Bed className="w-4 h-4" />
            <span>{property.bedrooms} Beds</span>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
          <div>
            <span className="font-semibold text-lg text-foreground">
              ${property.pricePerNight}
            </span>
            <span className="text-sm text-muted-foreground"> / night</span>
          </div>
        </div>
      </div>
    </div>
  );
}
