import React from 'react';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  cartItems: CartItem[];
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  onContinueShopping: () => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({
  cartItems,
  updateQuantity,
  removeFromCart,
  clearCart,
  getTotalPrice,
  onContinueShopping,
  onCheckout
}) => {
  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🍕</div>
        <h2 className="text-2xl font-playfair font-medium text-buds-charcoal mb-2">Your cart is empty</h2>
        <p className="text-buds-gray mb-6">Add some delicious pizzas and coffee to get started!</p>
        <button
          onClick={onContinueShopping}
          className="bg-buds-red text-white px-6 py-3 rounded-full hover:bg-buds-redDark transition-all duration-200"
        >
          Browse Menu
        </button>
      </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onContinueShopping}
          className="flex items-center space-x-2 text-buds-gray hover:text-buds-charcoal transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Continue Shopping</span>
        </button>
        <h1 className="text-3xl font-playfair font-semibold text-buds-charcoal">Your Cart</h1>
        <button
          onClick={clearCart}
          className="text-buds-red hover:text-buds-redDark transition-colors duration-200"
        >
          Clear All
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8 border border-buds-beige">
        {cartItems.map((item, index) => (
          <div key={item.id} className={`p-6 ${index !== cartItems.length - 1 ? 'border-b border-buds-cream' : ''}`}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-playfair font-medium text-buds-charcoal mb-1">{item.name}</h3>
                {item.selectedVariation && (
                  <p className="text-sm text-buds-gray mb-1">Size: {item.selectedVariation.name}</p>
                )}
                {item.selectedAddOns && item.selectedAddOns.length > 0 && (
                  <p className="text-sm text-buds-gray mb-1">
                    Add-ons: {item.selectedAddOns.map(addOn => 
                      addOn.quantity && addOn.quantity > 1 
                        ? `${addOn.name} x${addOn.quantity}`
                        : addOn.name
                    ).join(', ')}
                  </p>
                )}
                <p className="text-lg font-semibold text-buds-charcoal">₱{item.totalPrice} each</p>
              </div>
              
              <div className="flex items-center space-x-4 ml-4">
                <div className="flex items-center space-x-3 bg-buds-cream rounded-full p-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-buds-beige rounded-full transition-colors duration-200"
                  >
                    <Minus className="h-4 w-4 text-buds-charcoal" />
                  </button>
                  <span className="font-semibold text-buds-charcoal min-w-[32px] text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-buds-beige rounded-full transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4 text-buds-charcoal" />
                  </button>
                </div>
                
                <div className="text-right">
                  <p className="text-lg font-semibold text-buds-charcoal">₱{item.totalPrice * item.quantity}</p>
                </div>
                
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-buds-red hover:text-buds-redDark hover:bg-red-50 rounded-full transition-all duration-200"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-buds-beige">
        <div className="flex items-center justify-between text-2xl font-playfair font-semibold text-buds-charcoal mb-6">
          <span>Total:</span>
          <span className="text-buds-red">₱{parseFloat(getTotalPrice() || 0).toFixed(2)}</span>
        </div>
        
        <button
          onClick={onCheckout}
          className="w-full bg-gradient-to-r from-buds-red to-buds-redDark text-white py-4 rounded-xl hover:from-buds-redDark hover:to-buds-red transition-all duration-200 transform hover:scale-[1.02] font-medium text-lg shadow-lg"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;