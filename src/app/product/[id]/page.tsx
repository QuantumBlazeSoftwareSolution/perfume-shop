import perfumesData from '@/data/perfumes.json';
import { Product } from '@/store/cartStore';
import ProductClient from './ProductClient';

export function generateStaticParams() {
  const perfumes = perfumesData as unknown as Array<{ id: string }>;
  return perfumes.map((perfume) => ({
    id: perfume.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const perfumes = perfumesData as unknown as Product[];
  const product = perfumes.find(p => p.id === resolvedParams.id);
  
  if (!product) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center text-white">
        Product not found
      </div>
    );
  }
  
  const related = perfumes.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  
  return <ProductClient product={product} relatedProducts={related} />;
}
