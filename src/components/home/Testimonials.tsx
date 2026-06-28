import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Ahmed K.",
      location: "Stayed in Murree",
      review: "Our stay in Murree was absolutely breathtaking. The property was exactly as described, and the host went out of their way to ensure our comfort. Mehmaan truly feels like a home away from home.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sara M.",
      location: "Stayed in Lahore",
      review: "Finding a clean, secure, and beautiful apartment in Lahore used to be a hassle. Mehmaan made it incredibly easy. The entire process from booking to checkout was flawless.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ali R.",
      location: "Stayed in Islamabad",
      review: "I travel to Islamabad frequently for work. The corporate-friendly stays on Mehmaan offer the perfect blend of productivity and comfort. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-surface border-y border-border">
      <div className="container-layout">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Guests Say</h2>
          <p className="text-subheading">
            Don&apos;t just take our word for it. Hear from travelers who have experienced the Mehmaan difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="card-premium p-8 flex flex-col h-full bg-background border-transparent">
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D9B46F] text-[#D9B46F]" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed italic mb-8 flex-1">
                &quot;{review.review}&quot;
              </p>
              <div className="mt-auto border-t border-border pt-4">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
