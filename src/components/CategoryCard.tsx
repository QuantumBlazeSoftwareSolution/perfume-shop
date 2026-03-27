import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  image: string;
  href: string;
}

export default function CategoryCard({ title, image, href }: CategoryCardProps) {
  return (
    <Link href={href} className="group relative overflow-hidden block aspect-[3/4] md:aspect-[4/5] bg-black">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover opacity-50 transition-all duration-700 group-hover:opacity-80 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
        <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 transition-transform duration-500 group-hover:-translate-y-2">
          {title}
        </h3>
        <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.2em] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2">
          Explore Collection
        </span>
      </div>
      <div className="absolute inset-0 border border-white/10 transition-colors duration-500 group-hover:border-gold-500/30 m-4" />
    </Link>
  );
}
