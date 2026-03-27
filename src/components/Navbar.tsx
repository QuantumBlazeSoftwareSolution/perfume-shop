"use client";

import Link from 'next/link';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems());
  // Hydration fix for zustand
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-charcoal-800 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Mobile menu icon */}
        <div className="md:hidden flex items-center">
          <Menu className="w-6 h-6 text-foreground hover:text-gold-500 transition-colors" />
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
          <Link href="/shop" className="hover:text-gold-500 transition-colors">Shop</Link>
          <Link href="/about" className="hover:text-gold-500 transition-colors">House</Link>
          <Link href="/collections" className="hover:text-gold-500 transition-colors">Collections</Link>
        </div>

        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-serif tracking-widest text-gold-500 uppercase hover:text-gold-400 transition-colors">
          Dezel
        </Link>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-foreground">
          <button className="hidden md:block hover:text-gold-500 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hidden md:block hover:text-gold-500 transition-colors">
            <User className="w-5 h-5" />
          </button>
          <Link href="/cart" className="relative hover:text-gold-500 transition-colors">
            <ShoppingBag className="w-5 h-5" />
            {mounted && totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold-500 text-charcoal-900 text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
