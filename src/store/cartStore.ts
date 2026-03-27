import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  type: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        set((state) => {
          const existing = state.items.find(i => i.id === product.id);
          if (existing) {
            return { items: state.items.map(i => i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i) };
          }
          return { items: [...state.items, { ...product, quantity }] };
        });
      },
      removeItem: (id) => set((state) => ({ items: state.items.filter(i => i.id !== id) })),
      updateQuantity: (id, quantity) => set((state) => ({ items: state.items.map(i => i.id === id ? { ...i, quantity } : i) })),
      clearCart: () => set({ items: [] }),
      totalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
      totalPrice: () => get().items.reduce((total, item) => total + (item.price * item.quantity), 0),
    }),
    { name: 'dezel-cart' }
  )
);
