import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

export default function Hero() {
  const scrollToReservation = () => {
    const reservationSection = document.getElementById('reservation');
    reservationSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-background.dim_1920x1080.png"
          alt="The Glass Box Restaurant Interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Rating Badge */}
        <div className="mb-8 flex items-center gap-2 rounded-full border border-gold/30 bg-black/40 px-6 py-3 backdrop-blur-md">
          <Star className="h-5 w-5 fill-gold text-gold" />
          <span className="font-serif text-lg font-semibold text-gold">4.5</span>
          <span className="text-sm text-white/80">|</span>
          <span className="text-sm text-white/90">2,895 Reviews</span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
          Fine Dining Under
          <br />
          <span className="text-gold">the Glass Sky</span>
        </h1>

        {/* Subheading */}
        <p className="mb-12 max-w-2xl text-lg text-white/90 md:text-xl">
          Experience premium ambiance and exquisite multi-cuisine dining in Kankarbagh's most elegant glass-roof restaurant
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            onClick={scrollToReservation}
            className="bg-gold px-8 py-6 text-lg font-semibold text-black hover:bg-gold/90"
          >
            Reserve a Table
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gold bg-transparent px-8 py-6 text-lg font-semibold text-gold hover:bg-gold/10"
          >
            Order Online
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-8 rounded-full border-2 border-gold/50">
          <div className="mx-auto mt-2 h-2 w-2 animate-pulse rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
