import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-800 text-gray-400 py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-serif text-2xl text-gold-500 mb-6 uppercase tracking-widest">Dezel</h3>
          <p className="text-sm leading-relaxed mb-6">
            The epitome of luxury and elegance. Discover our exclusive collection of masterful fragrances crafted for the modern connoisseur.
          </p>
        </div>
        
        <div>
          <h4 className="text-white uppercase tracking-wider text-sm font-medium mb-6">Shop</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/shop?category=Men" className="hover:text-gold-500 transition-colors">Men's Fragrances</Link></li>
            <li><Link href="/shop?category=Women" className="hover:text-gold-500 transition-colors">Women's Fragrances</Link></li>
            <li><Link href="/shop?category=Unisex" className="hover:text-gold-500 transition-colors">Unisex Collection</Link></li>
            <li><Link href="/shop" className="hover:text-gold-500 transition-colors">Best Sellers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white uppercase tracking-wider text-sm font-medium mb-6">Support</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="#" className="hover:text-gold-500 transition-colors">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-gold-500 transition-colors">Shipping & Returns</Link></li>
            <li><Link href="#" className="hover:text-gold-500 transition-colors">FAQ</Link></li>
            <li><Link href="#" className="hover:text-gold-500 transition-colors">Track Your Order</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white uppercase tracking-wider text-sm font-medium mb-6">Newsletter</h4>
          <p className="text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-charcoal-800 border border-charcoal-700 px-4 py-2 w-full text-sm focus:outline-none focus:border-gold-500 text-white placeholder-gray-500"
            />
            <button className="bg-gold-500 text-charcoal-900 px-4 py-2 text-sm font-medium hover:bg-gold-400 transition-colors uppercase tracking-wider">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between text-xs">
        <p>&copy; {new Date().getFullYear()} Dezel Parfums. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
