'use client';

import { Heart } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  range: string;
  price: number;
  image: string;
  description: string;
}

const hampers: Product[] = [
  {
    id: 1,
    name: "Budget Friendly Hamper",
    range: "₹350 - ₹500",
    price: 425,
    image: "",
    description: "Affordable hampers perfect for small gifts and gestures",
  },
  {
    id: 2,
    name: "Starter Pack Hamper",
    range: "₹500 - ₹750",
    price: 625,
    image: "",
    description: "Great value hampers with quality items",
  },
  {
    id: 3,
    name: "Classic Hamper",
    range: "₹750 - ₹1000",
    price: 875,
    image: "",
    description: "Premium selection with curated items",
  },
  {
    id: 4,
    name: "Premium Hamper",
    range: "₹1000 - ₹1500",
    price: 1250,
    image: "",
    description: "Deluxe hampers with premium products",
  },
  {
    id: 5,
    name: "Luxury Hamper",
    range: "₹1500 - ₹2000",
    price: 1750,
    image: "",
    description: "Luxury hampers with finest selections",
  },
  {
    id: 6,
    name: "Corporate Elite Hamper",
    range: "₹2000 - ₹3000",
    price: 2500,
    image: "",
    description: "Exclusive hampers for corporate and special occasions",
  },
  {
    id: 7,
    name: "Premium Luxury Hamper",
    range: "₹3000 - ₹5000",
    price: 4000,
    image: "",
    description: "Premium luxury hampers with exclusive items",
  },
  {
    id: 8,
    name: "Elite Collection Hamper",
    range: "₹5000 - ₹7500",
    price: 6250,
    image: "",
    description: "Elite hampers with rare and premium selections",
  },
  {
    id: 9,
    name: "VIP Exclusive Hamper",
    range: "₹7500 - ₹10000",
    price: 8750,
    image: "",
    description: "Ultimate luxury hampers for VIP clients",
  },
  {
    id: 10,
    name: "Bespoke Premium Hamper",
    range: "Above ₹10,000",
    price: 15000,
    image: "",
    description: "Bespoke custom hampers with premium everything",
  },
];

export default function HampersPage() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [cart, setCart] = useState<Array<{ id: number; name: string; range: string; quantity: number }>>([]);
  const [addedMessage, setAddedMessage] = useState<number | null>(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("hamperCart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Error loading cart:", error);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("hamperCart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  }, [cart]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const updateQuantity = (id: number, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, value),
    }));
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        { id: product.id, name: product.name, range: product.range, quantity },
      ];
    });
    
    setAddedMessage(product.id);
    setTimeout(() => setAddedMessage(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-blue-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Hampers Collection</h1>
          <p className="text-lg text-amber-100">
            Choose from our premium selection of carefully curated hampers
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {hampers.map((hamper) => (
            <div
              key={hamper.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-pink-700 mb-2">
                  {hamper.name}
                </h3>
                <p className="text-gray-600 text-sm font-semibold mb-4">
                  {hamper.range}
                </p>

                {/* Quantity Selector */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center border-2 border-pink-500 rounded-lg w-fit bg-white">
                    <button
                      onClick={() => updateQuantity(hamper.id, (quantities[hamper.id] || 1) - 1)}
                      className="px-3 py-2 text-pink-600 hover:bg-pink-50 font-bold text-lg"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantities[hamper.id] || 1}
                      onChange={(e) => updateQuantity(hamper.id, parseInt(e.target.value) || 1)}
                      className="w-12 text-center border-l border-r border-pink-500 py-2 text-gray-800 font-semibold"
                    />
                    <button
                      onClick={() => updateQuantity(hamper.id, (quantities[hamper.id] || 1) + 1)}
                      className="px-3 py-2 text-pink-600 hover:bg-pink-50 font-bold text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Favorite Button */}
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => toggleFavorite(hamper.id)}
                    className="p-2 rounded-full hover:bg-gray-100 transition"
                  >
                    <Heart
                      size={20}
                      className={
                        favorites.includes(hamper.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-400"
                      }
                    />
                  </button>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleAddToCart(hamper)}
                  className={`w-full font-bold py-2 px-4 rounded transition ${
                    addedMessage === hamper.id
                      ? "bg-green-600 text-white"
                      : "bg-green-500 hover:bg-green-600 text-white"
                  }`}
                >
                  {addedMessage === hamper.id ? "✓ Added to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Summary Section */}
      {cart.length > 0 && (
        <div className="bg-pink-50 border-t-4 border-pink-600 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-pink-700 mb-6">Shopping Cart</h2>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <p className="font-bold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.range}</p>
                  </div>
                  <p className="font-bold text-pink-600">Qty: {item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  const message = cart.map((item) => `${item.quantity}x ${item.name} (${item.range})`).join(", ");
                  const whatsappMessage = `Hi! I would like to order: ${message}. Please provide details and pricing.`;
                  const whatsappUrl = `https://wa.me/919421246733?text=${encodeURIComponent(whatsappMessage)}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition"
              >
                Checkout via WhatsApp
              </button>
              <button
                onClick={() => setCart([])}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-50 to-blue-50 py-12 border-t border-pink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-pink-700 mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-600 mb-6">
            Create your own custom hamper with our builder
          </p>
          <Link
            href="/customizer"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Build Your Hamper
          </Link>
        </div>
      </div>
    </div>
  );
}
