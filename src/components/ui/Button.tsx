import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500 disabled:opacity-50 disabled:pointer-events-none active:scale-95',
          {
            'bg-gold-500 text-charcoal-900 hover:bg-gold-400 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]': variant === 'primary',
            'bg-charcoal-800 text-white hover:bg-charcoal-700': variant === 'secondary',
            'border border-gold-500 text-gold-500 hover:bg-gold-500/10 hover:shadow-[0_0_10px_rgba(212,175,55,0.2)]': variant === 'outline',
            'text-gray-400 hover:text-gold-500 hover:bg-white/5': variant === 'ghost',
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg uppercase tracking-wider': size === 'lg',
            'h-10 w-10': size === 'icon',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
