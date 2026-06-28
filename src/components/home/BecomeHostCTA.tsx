import Link from "next/link";
import Image from "next/image";

export default function BecomeHostCTA() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-layout">
        <div className="relative rounded-3xl overflow-hidden bg-[#046C4E] shadow-2xl flex flex-col md:flex-row items-stretch">
          
          <div className="flex-1 p-10 md:p-16 flex flex-col justify-center text-white z-10 relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Open your door to the world
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-lg leading-relaxed">
              Join Mehmaan as a host and turn your extra space into extra income. We provide the tools, support, and platform to help you succeed.
            </p>
            <div className="flex">
              <Link 
                href="/signup" 
                className="bg-[#D36135] hover:bg-[#be552e] text-white font-medium px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Become a Host Today
              </Link>
            </div>
          </div>

          <div className="relative w-full md:w-2/5 min-h-[300px] md:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200"
              alt="Host welcoming guests"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#046C4E] via-[#046C4E]/50 to-transparent"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
