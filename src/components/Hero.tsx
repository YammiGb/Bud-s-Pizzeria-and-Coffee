import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-buds-cream to-buds-offWhite py-20 px-4 overflow-hidden">
      {/* Pizza-themed decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-buds-red rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-buds-green rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-buds-red rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-buds-green rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <h1 className="text-5xl md:text-6xl font-playfair font-semibold text-buds-charcoal mb-6 animate-fade-in">
          Authentic Italian Pizza
          <span className="block text-buds-red mt-2">& Fresh Coffee</span>
        </h1>
        <p className="text-xl text-buds-gray mb-8 max-w-2xl mx-auto animate-slide-up">
          Hand-tossed pizzas with fresh ingredients, artisanal coffee, and warm hospitality.
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="#menu"
            className="bg-buds-red text-white px-8 py-3 rounded-full hover:bg-buds-redDark transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
          >
            View Menu
          </a>
          <a 
            href="#coffee"
            className="bg-buds-green text-white px-8 py-3 rounded-full hover:bg-buds-greenDark transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
          >
            Coffee Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;