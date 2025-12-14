'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Trash2, ShoppingBag } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  range: string;
  quantity: number;
  type?: string;
  details?: {
    quantityPerBox?: string;
    partitions?: number;
    boxType?: string;
    selections?: Array<{ partition: number; name: string }>;
  };
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('hamperCart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    }
    setLoading(false);
  }, []);

  // Update quantity
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('hamperCart', JSON.stringify(updatedCart));
  };

  // Remove item from cart
  const removeItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('hamperCart', JSON.stringify(updatedCart));
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
    localStorage.setItem('hamperCart', JSON.stringify([]));
  };

  // Proceed to checkout
  const handleCheckout = () => {
    const message = cart
      .map((item) => `${item.quantity}x ${item.name} (${item.range})`)
      .join(', ');
    const whatsappMessage = `Hi! I would like to order: ${message}. Please provide details and pricing.`;
    const whatsappUrl = `https://wa.me/919421246733?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-blue-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Shopping Cart</h1>
          <p className="text-lg text-blue-100">
            Review your hamper selections and proceed to checkout
          </p>
        </div>
      </div>

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {cart.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Start shopping to add hampers to your cart
            </p>
            <Link
              href="/hampers"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {cart.map((item, index) => (
                  <div
                    key={item.id}
                    className={`p-6 flex items-center justify-between ${
                      index !== cart.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-pink-700 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">{item.range}</p>

                      {/* Show dry fruits details if available */}
                      {item.type === 'dryfruits' && item.details && (
                        <div className="text-xs text-gray-600 mb-4 bg-blue-50 p-3 rounded">
                          <p><strong>Quantity per Box:</strong> {item.details.quantityPerBox}</p>
                          <p><strong>Box Type:</strong> {item.details.boxType}</p>
                          <p><strong>Varieties:</strong> {item.details.partitions}</p>
                        </div>
                      )}

                      {/* Quantity Selector */}
                      <div className="flex items-center border-2 border-pink-500 rounded-lg w-fit bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-2 text-pink-600 hover:bg-pink-50 font-bold text-lg"
                        >
                          −
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value) || 1)
                          }
                          className="w-12 text-center border-l border-r border-pink-500 py-2 text-gray-800 font-semibold"
                        />
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-2 text-pink-600 hover:bg-pink-50 font-bold text-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-6 p-2 text-red-500 hover:bg-red-50 rounded transition"
                      title="Remove item"
                    >
                      <Trash2 size={24} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Continue Shopping Button */}
              <div className="mt-6">
                <Link
                  href="/hampers"
                  className="inline-block text-pink-600 hover:text-pink-700 font-semibold"
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* Cart Summary */}
            <div>
              <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-lg shadow-lg p-6 sticky top-20">
                <h2 className="text-2xl font-bold text-pink-700 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Total Items:</span>
                    <span className="font-bold text-gray-800">
                      {cart.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Varieties:</span>
                    <span className="font-bold text-gray-800">{cart.length}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition"
                  >
                    Checkout via WhatsApp
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded-lg transition"
                  >
                    Clear Cart
                  </button>
                </div>

                <p className="text-xs text-gray-600 mt-4 text-center">
                  You will be contacted with final pricing and delivery details
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
