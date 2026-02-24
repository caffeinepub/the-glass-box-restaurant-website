import { Card, CardContent } from '@/components/ui/card';

interface MenuItem {
  name: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Paneer Tikka Masala & Butter Naan',
    image: '/assets/generated/paneer-tikka-masala.dim_400x300.png',
  },
  {
    name: 'Fish Tikka',
    image: '/assets/generated/fish-tikka.dim_400x300.png',
  },
  {
    name: 'Non Veg Platter',
    image: '/assets/generated/non-veg-platter.dim_400x300.png',
  },
  {
    name: 'Veg Spring Roll',
    image: '/assets/generated/veg-spring-roll.dim_400x300.png',
  },
  {
    name: 'Lasagna Pizza',
    image: '/assets/generated/lasagna-pizza.dim_400x300.png',
  },
  {
    name: 'Oreo Kit Kat Shake',
    image: '/assets/generated/oreo-kitkat-shake.dim_400x300.png',
  },
  {
    name: 'Popcorn Shake',
    image: '/assets/generated/popcorn-shake.dim_400x300.png',
  },
  {
    name: 'Chicken Sandwich Combo',
    image: '/assets/generated/chicken-sandwich-combo.dim_400x300.png',
  },
];

export default function MenuHighlights() {
  return (
    <section className="bg-charcoal py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Menu <span className="text-gold">Highlights</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Discover our most popular dishes crafted with passion and served with excellence
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-gold/20 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/20"
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Item Name */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-white transition-colors group-hover:text-gold">
                    {item.name}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All You Can Eat Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-gold/30 bg-black/40 px-8 py-4 backdrop-blur-md">
            <span className="text-2xl">🍽️</span>
            <span className="font-serif text-lg font-semibold text-gold">All You Can Eat Available</span>
            <span className="text-sm text-white/70">• Happy Hour Specials</span>
          </div>
        </div>
      </div>
    </section>
  );
}
