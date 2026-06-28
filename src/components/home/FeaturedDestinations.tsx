import Image from "next/image";
import Link from "next/link";

export default function FeaturedDestinations() {
  const destinations = [
    { name: "Lahore", properties: 124, imageUrl: "https://images.unsplash.com/photo-1588610363595-654854593f6b?auto=format&fit=crop&q=80&w=800" },
    { name: "Islamabad", properties: 86, imageUrl: "https://images.unsplash.com/photo-1628108426027-1c390558b209?auto=format&fit=crop&q=80&w=800" },
    { name: "Karachi", properties: 152, imageUrl: "https://images.unsplash.com/photo-1624233512217-1f486435c2fc?auto=format&fit=crop&q=80&w=800" },
    { name: "Murree", properties: 64, imageUrl: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800" },
    { name: "Hunza", properties: 42, imageUrl: "https://images.unsplash.com/photo-1601002347313-05b1ed312891?auto=format&fit=crop&q=80&w=800" },
    { name: "Skardu", properties: 28, imageUrl: "https://images.unsplash.com/photo-1613000632360-15104d493a3d?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-layout">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-3">Popular Destinations</h2>
            <p className="text-subheading">
              Explore our most sought-after locations across Pakistan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {destinations.map((dest, index) => (
            <Link href={`#${dest.name.toLowerCase()}`} key={index} className="group relative aspect-[4/5] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <Image
                src={dest.imageUrl}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg">{dest.name}</h3>
                <p className="text-white/80 text-sm">{dest.properties} properties</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
