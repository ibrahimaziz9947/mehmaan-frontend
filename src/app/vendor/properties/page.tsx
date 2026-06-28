"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import VendorPropertyCard from "@/components/vendor/VendorPropertyCard";
import { Property } from "@/types/property";

const MOCK_VENDOR_PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Luxury Farmhouse",
    location: "Lahore, Pakistan",
    pricePerNight: 250,
    rating: 4.9,
    reviewsCount: 128,
    guestCapacity: 6,
    bedrooms: 3,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    status: "active"
  },
  {
    id: "2",
    title: "Pine View Cabin",
    location: "Murree, Pakistan",
    pricePerNight: 120,
    rating: 4.95,
    reviewsCount: 85,
    guestCapacity: 4,
    bedrooms: 2,
    imageUrl: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800",
    status: "active"
  },
  {
    id: "3",
    title: "Margalla Hills Penthouse",
    location: "Islamabad, Pakistan",
    pricePerNight: 190,
    rating: 0,
    reviewsCount: 0,
    guestCapacity: 2,
    bedrooms: 1,
    imageUrl: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800",
    status: "draft"
  }
];

export default function VendorPropertiesPage() {
  const handleEdit = (id: string) => {
    alert(`Mock Edit triggered for property ID: ${id}`);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-1">My Properties</h1>
          <p className="text-muted-foreground">
            Manage your listings, update details, and monitor status.
          </p>
        </div>
        <Link href="/vendor/properties/new" className="btn-primary flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" />
          Add Property
        </Link>
      </div>

      {/* Filters Placeholder */}
      <div className="flex items-center gap-2 border-b border-border pb-4 overflow-x-auto">
        <button className="px-4 py-1.5 rounded-full bg-foreground text-background text-sm font-medium whitespace-nowrap">
          All (3)
        </button>
        <button className="px-4 py-1.5 rounded-full border border-border text-foreground hover:bg-muted text-sm font-medium whitespace-nowrap transition-colors">
          Active (2)
        </button>
        <button className="px-4 py-1.5 rounded-full border border-border text-foreground hover:bg-muted text-sm font-medium whitespace-nowrap transition-colors">
          Drafts (1)
        </button>
      </div>

      {/* Properties List */}
      <div className="flex flex-col gap-4">
        {MOCK_VENDOR_PROPERTIES.map((property) => (
          <VendorPropertyCard 
            key={property.id} 
            property={property} 
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}
