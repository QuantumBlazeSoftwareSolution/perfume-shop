"use client";

import { useState, useMemo } from 'react';
import { Product } from '@/store/cartStore';
import ProductCard from '@/components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ShopClient({ initialProducts }: { initialProducts: Product[] }) {
  const [category, setCategory] = useState<string>('All');
  const [sort, setSort] = useState<string>('Popularity');
  
  const filteredAndSorted = useMemo(() => {
    let result = [...initialProducts];
    if (category !== 'All') {
      result = result.filter(p => p.category === category);
    }
    
    switch(sort) {
      case 'Price: Low to High':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'Newest':
        result.reverse();
        break;
      default:
        result.sort((a, b) => b.reviews - a.reviews);
    }
    return result;
  }, [initialProducts, category, sort]);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-charcoal-800 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">The Collection</h1>
            <p className="text-gray-400">Discover all {filteredAndSorted.length} fragrances.</p>
          </div>
          
          <div className="flex items-center space-x-6 mt-8 md:mt-0 w-full md:w-auto overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
            {['All', 'Men', 'Women', 'Unisex'].map(c => (
              <button 
                key={c}
                onClick={() => setCategory(c)}
                className={`text-sm tracking-widest transition-colors whitespace-nowrap uppercase ${category === c ? 'text-gold-500 border-b border-gold-500 pb-1 font-semibold' : 'text-gray-500 hover:text-white'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center mb-12">
          <Button variant="outline" size="sm" className="space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </Button>
          
          <div className="relative group">
            <button className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors">
              <span>Sort by: <span className="text-white">{sort}</span></span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-56 bg-charcoal-900 border border-charcoal-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 shadow-2xl">
              {['Popularity', 'Newest', 'Price: Low to High', 'Price: High to Low'].map(s => (
                <button 
                  key={s} 
                  onClick={() => setSort(s)}
                  className={`block w-full text-left px-5 py-3 text-sm transition-colors ${sort === s ? 'text-gold-500 bg-charcoal-800' : 'text-gray-300 hover:bg-charcoal-800 hover:text-white'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredAndSorted.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredAndSorted.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">No products found for the selected criteria.</p>
            <Button variant="outline" className="mt-6" onClick={() => setCategory('All')}>View All Collections</Button>
          </div>
        )}

      </div>
    </div>
  );
}
