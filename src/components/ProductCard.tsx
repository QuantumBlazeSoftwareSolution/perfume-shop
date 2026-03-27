"use client";

import Link from 'next/link';
import { Product, useCartStore } from '@/store/cartStore';
import { Button } from './ui/Button';

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="group relative border border-charcoal-800 bg-charcoal-900/50 transition-all duration-500 hover:border-gold-500/50 hover:bg-charcoal-800 flex flex-col h-full">
      <div className="relative aspect-square w-full overflow-hidden bg-black">
        <Link href={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
        </Link>
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-charcoal-900/80 backdrop-blur-md text-gold-500 text-[10px] font-bold uppercase tracking-widest px-2 py-1">
            {product.brand}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col items-center text-center p-6 flex-grow">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-serif text-lg text-white mb-2 group-hover:text-gold-500 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-400 mb-4">{product.type}</p>
        <p className="font-medium text-white mb-6">${product.price.toFixed(2)}</p>
        
        <div className="mt-auto w-full opacity-100 md:opacity-0 md:translate-y-4 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <Button 
            className="w-full text-xs shadow-lg" 
            onClick={() => addItem(product)}
            size="sm"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
