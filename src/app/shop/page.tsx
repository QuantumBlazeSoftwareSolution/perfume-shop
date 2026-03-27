import perfumesData from '@/data/perfumes.json';
import { Product } from '@/store/cartStore';
import ShopClient from './ShopClient';

export default function ShopPage() {
  const perfumes = perfumesData as unknown as Product[];
  return <ShopClient initialProducts={perfumes} />;
}
