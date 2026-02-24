export default function Gallery() {
  const images = [
    {
      src: '/assets/generated/gallery-glass-roof-1.dim_1200x800.png',
      alt: 'Glass roof architecture with natural lighting',
      title: 'Glass Sky Dining',
    },
    {
      src: '/assets/generated/gallery-glass-roof-2.dim_1200x800.png',
      alt: 'Stunning glass roof interior view',
      title: 'Architectural Excellence',
    },
    {
      src: '/assets/generated/gallery-dining-area-1.dim_1200x800.png',
      alt: 'Elegant dining area with premium seating',
      title: 'Premium Dining Space',
    },
    {
      src: '/assets/generated/gallery-architecture-1.dim_1200x800.png',
      alt: 'Modern restaurant architecture',
      title: 'Modern Design',
    },
    {
      src: '/assets/generated/gallery-table-setting-1.dim_1200x800.png',
      alt: 'Luxury table setting with fine details',
      title: 'Exquisite Table Settings',
    },
    {
      src: '/assets/generated/gallery-night-view-1.dim_1200x800.png',
      alt: 'Restaurant ambiance at night',
      title: 'Evening Ambiance',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-charcoal to-black py-20 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="mb-6 font-serif text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Our <span className="text-gold">Gallery</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80 md:text-xl">
            Experience the elegance of The Glass Box through our curated collection of images showcasing our stunning glass roof ambiance and luxurious interiors
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-black py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-gold/20 bg-charcoal transition-all duration-300 hover:border-gold/50 hover:shadow-gold-glow"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-xl font-semibold text-gold">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-b from-black to-charcoal py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl">
            Ready to Experience It Yourself?
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Reserve your table today and dine under our magnificent glass sky
          </p>
          <a
            href="/#reservation"
            className="inline-block rounded-lg bg-gold px-8 py-4 font-semibold text-black transition-colors hover:bg-gold/90"
          >
            Make a Reservation
          </a>
        </div>
      </section>
    </div>
  );
}
