import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import perfumesData from '@/data/perfumes.json';
import { Product } from '@/store/cartStore';

export default function Home() {
  const perfumes = perfumesData as unknown as Product[];
  const bestSellers = perfumes.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-transparent bg-gradient-to-b from-charcoal-900/40 via-transparent to-background" />
          {/* Animated Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gold-500/10 rounded-full blur-[100px] md:blur-[120px] animate-pulse pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gold-400/20 rounded-full blur-[60px] md:blur-[80px] pointer-events-none" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center mt-10 md:mt-20">
          <div className="mb-6">
            <span className="text-gold-500 font-semibold uppercase tracking-[0.3em] text-xs md:text-sm">Premium Perfumery</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 md:mb-8 tracking-tight leading-tight">
            The Essence of <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600">Luxury</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 md:mb-12 text-sm md:text-base leading-relaxed">
            Discover a world of masterful fragrances, crafted with the rarest ingredients to leave an unforgettable impression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0 z-20">
            <Link href="/shop" className="w-full sm:w-auto">
              <Button size="lg" className="w-full">Explore Collection</Button>
            </Link>
          </div>
        </div>

        {/* Center Spotlight Bottle (Mock Presentation) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-24 md:translate-y-32 z-0 w-[280px] md:w-[450px] opacity-90 blur-[1px]">
          <img src={perfumes[0].image} alt="Featured" className="w-full h-auto drop-shadow-[0_-20px_60px_rgba(212,175,55,0.3)] object-cover rounded-t-full" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 md:py-32 bg-charcoal-900 border-t border-charcoal-800 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Luxury Collections.</h2>
              <p className="text-gray-400 max-w-md text-sm md:text-base">Curated masterpieces to reflect your unique signature.</p>
            </div>
            <Link href="/shop" className="text-gold-500 hover:text-white uppercase tracking-widest text-xs font-semibold mt-8 md:mt-0 transition-colors border-b border-gold-500/30 hover:border-white pb-1 inline-block">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <CategoryCard title="Women's" image="https://images.unsplash.com/photo-1595425984265-5c91152a5ca4?auto=format&fit=crop&q=80&w=800" href="/shop?category=Women" />
            <CategoryCard title="Men's" image="https://images.unsplash.com/photo-1615397323133-c782b8b9efbc?auto=format&fit=crop&q=80&w=800" href="/shop?category=Men" />
            <CategoryCard title="Unisex" image="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=800" href="/shop?category=Unisex" />
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 md:py-32 bg-background relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Most Desired</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Best Sellers</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-16 text-gray-400 text-sm">
            <Link href="/shop" className="hover:text-gold-500 transition-colors">
              Explore more best sellers →
            </Link>
          </div>
        </div>
      </section>

      {/* Luxury Banner */}
      <section className="py-32 md:py-48 relative overflow-hidden bg-charcoal-900 border-t border-charcoal-800 z-10">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=2000" alt="Silk background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <span className="text-gold-500 font-semibold uppercase tracking-[0.2em] text-xs">The Art of Extraction</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white mt-6 mb-8 leading-tight">Crafted for <br/>Elegance.</h2>
            <p className="text-gray-300 text-base md:text-lg mb-12 leading-relaxed">
              Every drop is a testament to our dedication to perfection. We source the rarest blooms from Grasse and the finest oud from the Orient to create scents that transcend time.
            </p>
            <Link href="/about">
              <Button variant="outline" size="lg">Discover Our Story</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
