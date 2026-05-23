import Hero from "@/components/home/Hero";
import FeaturedProperties from "@/components/home/FeaturedProperties";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <FeaturedProperties />
    </div>
  );
}
