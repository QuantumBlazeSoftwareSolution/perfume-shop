"use client";

import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/Button';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6 md:px-12 text-center text-white">Loading cart...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-12 border-b border-charcoal-800 pb-8">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-serif text-white mb-6">Your collection is empty</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Discover our exclusive fragrances and add your favorite scents to the cart.</p>
            <Link href="/shop">
              <Button size="lg">Explore Collection</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-charcoal-800">
                  <div className="w-full sm:w-32 aspect-square bg-black p-2 border border-charcoal-800 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-90" />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <div className="text-gold-500 text-[10px] uppercase tracking-widest mb-1">{item.brand}</div>
                    <Link href={`/product/${item.id}`}>
                      <h3 className="text-xl font-serif text-white hover:text-gold-500 transition-colors mb-2">{item.name}</h3>
                    </Link>
                    <div className="text-gray-500 text-sm mb-4">{item.type}</div>
                    <div className="text-lg text-white font-medium">${item.price.toFixed(2)}</div>
                  </div>
                  
                  <div className="flex items-center gap-6 mt-4 sm:mt-0">
                    <div className="flex items-center border border-charcoal-700 bg-charcoal-900">
                      <button 
                        onClick={() => {
                          if (item.quantity > 1) updateQuantity(item.id, item.quantity - 1);
                        }} 
                        className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-10 text-center text-white text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                        className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-500 hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="flex flex-col sm:flex-row justify-between items-center pt-4 gap-4">
                <button 
                  onClick={clearCart}
                  className="text-sm text-gray-500 hover:text-white transition-colors underline underline-offset-4"
                >
                  Clear Cart
                </button>
                <Link href="/shop" className="text-sm text-gold-500 hover:text-gold-400 transition-colors uppercase tracking-widest font-semibold flex items-center">
                  Continue Shopping <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-charcoal-900 p-8 border border-charcoal-800 sticky top-32">
                <h3 className="text-2xl font-serif text-white mb-6 border-b border-charcoal-800 pb-4">Order Summary</h3>
                
                <div className="space-y-4 mb-6 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>${totalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span>Complimentary</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Taxes</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>
                
                <div className="border-t border-charcoal-800 pt-6 mb-8">
                  <div className="flex justify-between text-white text-lg font-medium">
                    <span>Total</span>
                    <span>${totalPrice().toFixed(2)}</span>
                  </div>
                </div>
                
                <Button size="lg" className="w-full text-sm">Proceed to Checkout</Button>
                
                <div className="mt-6 text-center text-xs text-gray-500">
                  <p>Secure checkout powered by Stripe.</p>
                  <p className="mt-2">Complimentary shipping on all orders.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
