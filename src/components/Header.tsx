import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, onMenuClick }) => {
  const { siteSettings, loading } = useSiteSettings();

  return (
    <header className="sticky top-0 z-50 bg-buds-offWhite/95 backdrop-blur-md border-b border-buds-beige shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={onMenuClick}
            className="flex items-center space-x-2 text-buds-charcoal hover:text-buds-red transition-colors duration-200 min-w-0"
          >
            {loading ? (
              <div className="w-10 h-10 bg-buds-cream rounded-full animate-pulse" />
            ) : (
              <img 
                src="/logo.jpg" 
                alt={siteSettings?.site_name || "Bud's Pizzeria and Coffee"}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-buds-gold"
                onError={(e) => {
                  e.currentTarget.src = "/logo.jpg";
                }}
              />
            )}
            <h1 className="text-lg sm:text-xl md:text-2xl font-playfair font-semibold text-buds-charcoal whitespace-nowrap">
              {loading ? (
                <div className="w-48 h-6 bg-buds-cream rounded animate-pulse" />
              ) : (
                "Bud's Pizzeria and Coffee"
              )}
            </h1>
          </button>

          <div className="flex items-center space-x-2">
            <button 
              onClick={onCartClick}
              className="relative p-2 text-buds-gray hover:text-buds-charcoal hover:bg-buds-cream rounded-full transition-all duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-buds-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce-gentle font-semibold">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;