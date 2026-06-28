"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, UploadCloud, Wifi, Car, Coffee, Tv } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

// Mock Amenities for UI placeholder
const AMENITIES_LIST = [
  { id: "wifi", label: "Fast Wi-Fi", icon: Wifi },
  { id: "parking", label: "Free Parking", icon: Car },
  { id: "breakfast", label: "Breakfast", icon: Coffee },
  { id: "tv", label: "Smart TV", icon: Tv },
];

export default function AddPropertyPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    pricePerNight: "",
    guestCapacity: "",
    bedrooms: "",
  });

  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleAmenity = (id: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent, status: "active" | "draft") => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API Call
    setTimeout(() => {
      console.log("Mock Saving Property:", { ...formData, amenities: selectedAmenities, status });
      alert(`Property successfully saved as ${status}!`);
      setIsSubmitting(false);
      router.push("/vendor/properties");
    }, 800);
  };

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link 
          href="/vendor/properties" 
          className="p-2 border border-border rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Add New Property</h1>
          <p className="text-muted-foreground text-sm">List a new space for guests to book.</p>
        </div>
      </div>

      <form className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-2">
        
        {/* Left Column - Main Details */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Basic Info Section */}
          <div className="card-premium p-6 flex flex-col gap-5">
            <h2 className="text-lg font-semibold text-foreground border-b border-border pb-3">Basic Information</h2>
            <Input
              label="Property Title"
              name="title"
              placeholder="e.g. Pine View Cabin"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <Textarea
              label="Description"
              name="description"
              placeholder="Describe what makes your space unique..."
              value={formData.description}
              onChange={handleChange}
              rows={4}
              required
            />
            <Input
              label="City / Location"
              name="location"
              placeholder="e.g. Murree, Pakistan"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* Pricing & Capacity Section */}
          <div className="card-premium p-6 flex flex-col gap-5">
            <h2 className="text-lg font-semibold text-foreground border-b border-border pb-3">Pricing & Capacity</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <Input
                label="Price per night ($)"
                name="pricePerNight"
                type="number"
                placeholder="0.00"
                value={formData.pricePerNight}
                onChange={handleChange}
                required
              />
              <Input
                label="Guest Capacity"
                name="guestCapacity"
                type="number"
                placeholder="2"
                value={formData.guestCapacity}
                onChange={handleChange}
                required
              />
              <Input
                label="Bedrooms"
                name="bedrooms"
                type="number"
                placeholder="1"
                value={formData.bedrooms}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Amenities Placeholder */}
          <div className="card-premium p-6 flex flex-col gap-5">
            <h2 className="text-lg font-semibold text-foreground border-b border-border pb-3">Amenities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {AMENITIES_LIST.map((amenity) => {
                const isSelected = selectedAmenities.includes(amenity.id);
                return (
                  <button
                    key={amenity.id}
                    type="button"
                    onClick={() => toggleAmenity(amenity.id)}
                    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all ${
                      isSelected 
                        ? "border-primary bg-primary/5 text-primary" 
                        : "border-border bg-surface text-muted-foreground hover:border-primary/40 hover:bg-muted/50"
                    }`}
                  >
                    <amenity.icon className="w-6 h-6" />
                    <span className="text-sm font-medium">{amenity.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column - Media & Actions */}
        <div className="flex flex-col gap-6">
          
          {/* Image Upload Placeholder */}
          <div className="card-premium p-6 flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-foreground border-b border-border pb-3">Property Images</h2>
            <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-muted/30 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <UploadCloud className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-foreground">Click to upload images</p>
              <p className="text-xs text-muted-foreground mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>
          </div>

          {/* Publish Actions */}
          <div className="card-premium p-6 flex flex-col gap-3 sticky top-24">
            <h2 className="text-lg font-semibold text-foreground border-b border-border pb-3">Actions</h2>
            <p className="text-sm text-muted-foreground mb-2">
              Ready to list? You can publish it live or save it as a draft for later.
            </p>
            <button 
              type="button"
              onClick={(e) => handleSubmit(e, "active")}
              disabled={isSubmitting}
              className="btn-primary w-full py-3"
            >
              {isSubmitting ? "Publishing..." : "Publish Property"}
            </button>
            <button 
              type="button"
              onClick={(e) => handleSubmit(e, "draft")}
              disabled={isSubmitting}
              className="btn-outline w-full py-3"
            >
              Save as Draft
            </button>
          </div>
        </div>

      </form>
    </div>
  );
}
