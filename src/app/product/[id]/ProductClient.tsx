"use client";

import { useState } from 'react';
import { Product, useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/Button';
import ProductCard from '@/components/ProductCard';
import { Plus, Minus, Star, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProductClient({ product, relatedProducts }: { product: Product, relatedProducts: Product[] }) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/shop" className="inline-flex items-center text-sm text-gray-400 hover:text-gold-500 transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-32">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="w-full aspect-square bg-black relative overflow-hidden flex items-center justify-center border border-charcoal-800">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal-900/60 to-transparent pointer-events-none" />
            </div>
            {/* Thumbnails placeholder */}
            <div className="flex gap-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className={`w-24 h-24 border ${i === 0 ? 'border-gold-500 opacity-100' : 'border-charcoal-800 opacity-50'} bg-black overflow-hidden cursor-pointer hover:opacity-100 transition-opacity`}>
                   <img src={product.image} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-4 flex items-center space-x-4">
              <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.2em]">{product.brand}</span>
              <span className="text-gray-500 text-xs uppercase tracking-widest px-2 py-0.5 border border-charcoal-700">{product.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-tight">{product.name}</h1>
            
            <div className="flex items-center mb-8">
              <div className="flex text-gold-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-charcoal-700'}`} />
                ))}
              </div>
              <span className="ml-3 text-sm text-gray-400">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-3xl font-medium text-white mb-8">${product.price.toFixed(2)}</p>
            
            <div className="prose prose-invert border-y border-charcoal-800 py-8 mb-8">
              <p className="text-gray-300 leading-relaxed text-lg">{product.description}</p>
            </div>

            {/* Fragrance Notes */}
            <div className="mb-10 bg-charcoal-900 p-6 md:p-8 border border-charcoal-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-[40px]" />
              <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-[0.2em] flex items-center">
                <span className="w-8 h-[1px] bg-gold-500 mr-4"></span>
                Olfactory Notes
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <span className="w-24 text-gold-500 font-serif italic text-base">Top</span>
                  <span className="text-gray-300 flex-1">{product.notes.top.join(', ')}</span>
                </div>
                <div className="flex items-start">
                  <span className="w-24 text-gold-500 font-serif italic text-base">Heart</span>
                  <span className="text-gray-300 flex-1">{product.notes.middle.join(', ')}</span>
                </div>
                <div className="flex items-start">
                  <span className="w-24 text-gold-500 font-serif italic text-base">Base</span>
                  <span className="text-gray-300 flex-1">{product.notes.base.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <span className="w-24 text-gray-400 text-sm uppercase tracking-widest">Quantity</span>
                <div className="flex items-center border border-charcoal-700 bg-charcoal-900">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-gold-500 transition-colors"><Minus className="w-4 h-4" /></button>
                  <span className="w-12 text-center text-white font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-gold-500 transition-colors"><Plus className="w-4 h-4" /></button>
                </div>
              </div>
              
              <div className="pt-4">
                <Button size="lg" className="w-full text-sm py-6 shadow-xl" onClick={handleAddToCart}>
                  Add to Cart — ${(product.price * quantity).toFixed(2)}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-charcoal-800 pt-24">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-12 text-center">More from {product.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
