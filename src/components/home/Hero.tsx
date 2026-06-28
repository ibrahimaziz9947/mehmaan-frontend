import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#034235] overflow-hidden">
      <div className="container-layout mx-auto">
        <div className="flex flex-col lg:flex-row items-center py-20 lg:py-32 gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <span className="text-[#D9B46F] font-semibold tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
              WELCOME TO
            </span>
            
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F4EDE4] tracking-tight">
                Mehmaan
              </h1>
              <span className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#D9B46F] opacity-90" dir="rtl">
                مهمان
              </span>
            </div>
            
            <p className="text-2xl md:text-3xl font-medium text-[#F4EDE4] mb-6 italic opacity-90">
              Home Away From Home
            </p>
            
            <p className="text-lg text-[#F4EDE4]/80 max-w-xl mb-10 leading-relaxed font-light">
              Discover carefully selected homes, apartments, and memorable stays designed to make every guest feel at home. Experience warm, affordable luxury with local cultural charm.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <Link 
                href="#destinations" 
                className="w-full sm:w-auto px-8 py-4 bg-[#D36135] hover:bg-[#be552e] text-white rounded-lg font-medium text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
              >
                Explore Stays
              </Link>
              <Link 
                href="/vendor" 
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#D9B46F] text-[#D9B46F] hover:bg-[#D9B46F] hover:text-[#034235] rounded-lg font-medium text-lg transition-all text-center"
              >
                Become a Host
              </Link>
            </div>
          </div>

          {/* Visual Composition */}
          <div className="flex-1 relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-full">
              {/* Decorative abstract shape/background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#046C4E] rounded-full blur-[100px] opacity-40 z-0"></div>
              
              {/* Main Image Card */}
              <div className="absolute inset-0 z-10 rounded-2xl overflow-hidden shadow-2xl border border-[#D9B46F]/20">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200"
                  alt="Elegant luxury villa"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#034235]/80 via-transparent to-transparent"></div>
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#F4EDE4]/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[#D9B46F]/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#3A3A3A] font-bold text-lg">Villa Serenity</p>
                      <p className="text-[#046C4E] text-sm font-medium">Lahore, Pakistan</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#D36135] font-bold text-lg">From $120</p>
                      <p className="text-[#3A3A3A]/70 text-xs">per night</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating element for depth */}
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-[#D9B46F] rounded-full blur-[60px] opacity-30 z-0 hidden lg:block"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
