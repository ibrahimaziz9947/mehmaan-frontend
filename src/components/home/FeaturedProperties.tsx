import { Property } from "@/types/property";
import PropertyCard from "@/components/property/PropertyCard";

// Mock Data for UI development
const MOCK_PROPERTIES: Property[] = [
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
  },
  {
    id: "3",
    title: "Margalla Hills Penthouse",
    location: "Islamabad, Pakistan",
    pricePerNight: 180,
    rating: 4.8,
    reviewsCount: 210,
    guestCapacity: 8,
    bedrooms: 4,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    title: "Clifton Seaview Apartment",
    location: "Karachi, Pakistan",
    pricePerNight: 150,
    rating: 4.98,
    reviewsCount: 340,
    guestCapacity: 2,
    bedrooms: 1,
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
  }
];

export default function FeaturedProperties() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-layout">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-3">Featured Properties</h2>
            <p className="text-subheading">
              Handpicked accommodations for your next adventure.
            </p>
          </div>
          <button className="hidden md:inline-flex btn-outline">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {MOCK_PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <button className="btn-outline w-full">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
