import { ShieldCheck, Sparkles, Map, HeartHandshake } from "lucide-react";

export default function WhyMehmaan() {
  const features = [
    {
      title: "Verified Properties",
      description: "Every home is inspected for quality, safety, and comfort before it joins our platform.",
      icon: ShieldCheck,
    },
    {
      title: "Affordable Luxury",
      description: "Experience premium stays and elegant spaces that fit comfortably within your budget.",
      icon: Sparkles,
    },
    {
      title: "Local Experiences",
      description: "Immerse yourself in the local culture with stays situated in the heart of the community.",
      icon: Map,
    },
    {
      title: "Trusted Hosts",
      description: "Our hosts are dedicated to providing warm, welcoming, and memorable hospitality.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-surface border-y border-border">
      <div className="container-layout">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Mehmaan?</h2>
          <p className="text-subheading">
            We are redefining short-term rentals in Pakistan by bringing together affordable luxury, trust, and local charm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 card-premium border-transparent hover:border-border">
              <div className="w-14 h-14 bg-[#046C4E]/10 rounded-2xl flex items-center justify-center text-[#046C4E] mb-6">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
