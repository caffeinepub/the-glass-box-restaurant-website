import { Card, CardContent } from '@/components/ui/card';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

const menuCategories = [
  {
    title: 'Appetizers',
    items: [
      {
        name: 'Appetizer Platter',
        description: 'A delightful assortment of our finest starters including samosas, pakoras, and spring rolls',
        price: '₹399',
        image: '/assets/generated/appetizer-platter.dim_800x600.png',
      },
      {
        name: 'Chicken Tikka',
        description: 'Tender chicken pieces marinated in aromatic spices and grilled to perfection',
        price: '₹349',
        image: '/assets/generated/chicken-tikka.dim_800x600.png',
      },
    ],
  },
  {
    title: 'Main Course',
    items: [
      {
        name: 'Dal Makhani',
        description: 'Creamy black lentils slow-cooked with butter and aromatic spices',
        price: '₹299',
        image: '/assets/generated/dal-makhani.dim_800x600.png',
      },
      {
        name: 'Biryani',
        description: 'Fragrant basmati rice layered with tender meat and exotic spices',
        price: '₹449',
        image: '/assets/generated/biryani.dim_800x600.png',
      },
      {
        name: 'Grilled Fish',
        description: 'Fresh fish fillet marinated with herbs and grilled to golden perfection',
        price: '₹499',
        image: '/assets/generated/grilled-fish.dim_800x600.png',
      },
    ],
  },
  {
    title: 'Desserts',
    items: [
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
        price: '₹249',
        image: '/assets/generated/chocolate-lava-cake.dim_800x600.png',
      },
      {
        name: 'Fruit Platter',
        description: 'Fresh seasonal fruits artfully arranged and served chilled',
        price: '₹199',
        image: '/assets/generated/fruit-platter.dim_800x600.png',
      },
    ],
  },
  {
    title: 'Beverages',
    items: [
      {
        name: 'Signature Mocktail',
        description: 'Our house special blend of fresh fruits and exotic flavors',
        price: '₹179',
        image: '/assets/generated/signature-mocktail.dim_800x600.png',
      },
      {
        name: 'Lime Soda',
        description: 'Refreshing lime soda with a hint of mint and spices',
        price: '₹99',
        image: '/assets/generated/lime-soda.dim_800x600.png',
      },
    ],
  },
];

export default function Menu() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative bg-charcoal py-32 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="mb-6 font-serif text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Our <span className="text-gold">Menu</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80 md:text-xl">
            Explore our carefully curated selection of dishes, crafted with the finest ingredients and served with passion
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      {menuCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-20 px-4 ${categoryIndex % 2 === 0 ? 'bg-black' : 'bg-charcoal'}`}
        >
          <div className="container mx-auto max-w-7xl">
            {/* Category Title */}
            <div className="mb-12 text-center">
              <h2 className="font-serif text-4xl font-bold text-gold md:text-5xl">
                {category.title}
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 bg-gold/50" />
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, itemIndex) => (
                <Card
                  key={itemIndex}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 rounded-full border border-gold/30 bg-black/60 px-4 py-2 backdrop-blur-md">
                        <span className="font-serif text-lg font-bold text-gold">{item.price}</span>
                      </div>
                    </div>

                    {/* Item Details */}
                    <div className="p-6">
                      <h3 className="mb-3 font-serif text-2xl font-semibold text-white transition-colors group-hover:text-gold">
                        {item.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="bg-charcoal py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl">
            Ready to <span className="text-gold">Dine With Us?</span>
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Reserve your table today and experience fine dining under the glass sky
          </p>
          <a
            href="/#reservation"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/30"
          >
            Make a Reservation
          </a>
        </div>
      </section>
    </main>
  );
}
