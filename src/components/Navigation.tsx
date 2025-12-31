'use client';

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X, Home } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Get cart count from localStorage
    const updateCartCount = () => {
      try {
        const storedCart = localStorage.getItem("hamperCart");
        if (storedCart) {
          const cart = JSON.parse(storedCart);
          const totalItems = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
          setCartCount(totalItems);
        }
      } catch (error) {
        console.error("Error reading cart:", error);
      }
    };

    updateCartCount();
    // Listen for storage changes
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/hampers", label: "Hampers" },
    { href: "/dryfruits", label: "Dryfruit Boxes" },
    { href: "/trousseau", label: "Trousseau Packing" },
    { href: "/corporate", label: "Corporate Gifting" },
    { href: "/live-counters", label: "Live Counters" },
    { href: "/stories", label: "Customer Stories" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="bg-gradient-to-r from-pink-300 via-blue-200 to-blue-300 text-gray-800 shadow-xl sticky top-0 z-50 border-b-4 border-pink-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 group-hover:shadow-lg group-hover:scale-110 transition transform rounded-lg overflow-hidden">
              <Image
                src="/media/spg-logo.png"
                alt="SPG Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-pink-700">Shree Parshva Gifts</h1>
              <p className="text-xs text-pink-700 font-medium">One stop solution for all your gifting needs...</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-pink-700 font-medium text-sm hover:bg-white/40 transition duration-300 hover:shadow-md relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative hidden sm:flex items-center justify-center w-10 h-10 rounded-lg bg-pink-600 hover:bg-pink-700 transition">
              <ShoppingCart size={20} className="text-white" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-white rounded-full text-pink-600 text-xs flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-pink-600 hover:bg-pink-700 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-gradient-to-b from-pink-300/90 to-blue-300/90 rounded-b-xl pb-4 space-y-1 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-3 text-pink-700 font-medium hover:bg-white/30 rounded-lg transition duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/cart" className="w-11/12 mx-auto mt-4 px-6 py-3 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition block text-center">
              Cart ({cartCount})
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
