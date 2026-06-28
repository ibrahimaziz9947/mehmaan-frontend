export type PropertyStatus = "active" | "draft" | "inactive";

export interface Property {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  guestCapacity: number;
  bedrooms: number;
  imageUrl: string;
  status?: PropertyStatus;
}
