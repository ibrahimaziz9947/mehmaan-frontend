import Hero from "@/components/home/Hero";
import WhyMehmaan from "@/components/home/WhyMehmaan";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import BecomeHostCTA from "@/components/home/BecomeHostCTA";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background">
      <Hero />
      <WhyMehmaan />
      <FeaturedDestinations />
      <FeaturedProperties />
      <BecomeHostCTA />
      <Testimonials />
    </div>
  );
}
