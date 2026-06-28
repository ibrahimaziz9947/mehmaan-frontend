import Image from "next/image";
import { Edit, MoreVertical, MapPin } from "lucide-react";
import { Property } from "@/types/property";

interface VendorPropertyCardProps {
  property: Property;
  onEdit?: (id: string) => void;
}

export default function VendorPropertyCard({ property, onEdit }: VendorPropertyCardProps) {
  const getStatusBadge = () => {
    switch (property.status) {
      case "active":
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#046C4E]/10 text-[#046C4E]">Active</span>;
      case "draft":
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D9B46F]/20 text-[#D9B46F]">Draft</span>;
      case "inactive":
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Offline</span>;
      default:
        return null;
    }
  };

  return (
    <div className="card-premium p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 group">
      {/* Property Image */}
      <div className="relative w-full sm:w-32 h-48 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-muted">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Property Info */}
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="font-semibold text-foreground text-lg truncate">
            {property.title}
          </h3>
          {getStatusBadge()}
        </div>
        
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <span className="font-medium text-foreground">${property.pricePerNight} <span className="text-muted-foreground font-normal">/ night</span></span>
          <span className="text-border">•</span>
          <span className="text-muted-foreground">{property.bedrooms} Beds</span>
          <span className="text-border">•</span>
          <span className="text-muted-foreground">{property.guestCapacity} Guests</span>
        </div>
      </div>

      {/* Actions */}
      <div className="w-full sm:w-auto flex items-center justify-end gap-2 mt-2 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-border shrink-0">
        <button 
          onClick={() => onEdit && onEdit(property.id)}
          className="btn-outline px-4 py-2 text-sm flex items-center gap-2 w-full sm:w-auto"
        >
          <Edit className="w-4 h-4" />
          Edit
        </button>
        <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors hidden sm:block">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
