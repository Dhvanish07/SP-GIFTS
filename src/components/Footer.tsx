'use client';

import Image from "next/image";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-blue-100 to-blue-200 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Header with Logo */}
        <div className="flex items-center space-x-3 mb-8 pb-8 border-b-2 border-pink-300">
          <div className="relative w-16 h-16">
            <Image
              src="/media/spg logo.png"
              alt="SPG Logo"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-pink-700">Shree Parshva Gifts</h2>
            <p className="text-sm text-gray-600">One stop solution for all your gifting needs...</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-pink-600 text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm text-gray-700">
              Shree Parshva Gifts provides premium hampers and corporate gifting solutions for all occasions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-pink-600 text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/hampers" className="hover:text-pink-600 transition">Hampers</a></li>
              <li><a href="/dryfruits" className="hover:text-pink-600 transition">Dry Fruits</a></li>
              <li><a href="/corporate" className="hover:text-pink-600 transition">Corporate</a></li>
              <li><a href="/customizer" className="hover:text-pink-600 transition">Custom Builder</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-pink-600 text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>9421246733</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>spgifts99@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-pink-600 text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/s.p.gifts99?igsh=N3Z2eWdrMTMxc2h5"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Instagram"
              >
                <Instagram className="text-pink-600 hover:text-pink-700 cursor-pointer transition" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-300 pt-8">
          <p className="text-center text-sm text-gray-700">
            © 2025 Shree Parshva Gifts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
