'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-200 via-blue-100 to-blue-200 text-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-4 text-pink-700">
                Premium Hampers & Corporate Gifting
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Celebrate special moments with our exquisitely curated hampers and personalized gifting solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/customizer"
                  className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold py-3 px-8 rounded-lg hover:from-pink-600 hover:to-blue-600 transition flex items-center justify-center gap-2"
                >
                  Build Your Hamper <ArrowRight size={20} />
                </Link>
                <a
                  href="https://wa.me/919421246733"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition flex items-center justify-center gap-2"
                >
                  Chat with Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-pink-700 mb-12">
            Our Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hampers */}
            <Link
              href="/hampers"
              className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg shadow-lg hover:shadow-2xl transition overflow-hidden group border border-blue-100"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100 group-hover:scale-110 transition">
                <Image
                  src="/media/HAMPER1.jpeg"
                  alt="Hampers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-700 mb-2">Hampers</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Beautifully crafted hampers for every occasion
                </p>
                <span className="text-pink-600 font-semibold">Explore →</span>
              </div>
            </Link>

            {/* Corporate Gifting */}
            <Link
              href="/corporate"
              className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg shadow-lg hover:shadow-2xl transition overflow-hidden group border border-blue-100"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100 group-hover:scale-110 transition">
                <Image
                  src="/media/cg.jpeg"
                  alt="Corporate Gifting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-700 mb-2">
                  Corporate Gifting
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Strengthen client and employee relationships
                </p>
                <span className="text-pink-600 font-semibold">Explore →</span>
              </div>
            </Link>

            {/* Trousseau packing */}
            <Link
              href="/trousseau"
              className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg shadow-lg hover:shadow-2xl transition overflow-hidden group border border-blue-100"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100 group-hover:scale-110 transition">
                <Image
                  src="/media/trousseau-packing.jpeg"
                  alt="Trousseau Packing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-700 mb-2">
                  Trousseau Packing
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Secure and reliable packaging for your gifts
                </p>
                <span className="text-pink-600 font-semibold">Explore →</span>
              </div>
            </Link>

            {/* Dry Fruit Boxes */}
            <Link
              href="/dryfruits"
              className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg shadow-lg hover:shadow-2xl transition overflow-hidden group border border-blue-100"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100 group-hover:scale-110 transition">
                <Image
                  src="/media/dryfruit-box.jpeg"
                  alt="Dry Fruit Boxes"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-700 mb-2">
                  Dryfruit Boxes
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Premium quality nuts and dried fruits boxes
                </p>
                <span className="text-pink-600 font-semibold">Explore →</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-pink-700 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="/media/quality.jpeg"
                  alt="Quality"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-pink-700 mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                We source only the finest ingredients and materials for all our hampers
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="/media/fast-delivery.jpeg"
                  alt="Delivery"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-pink-700 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick and reliable delivery across the city and nearby areas
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="/media/customer-satisfaction.jpeg"
                  alt="Satisfaction"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-pink-700 mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                100% satisfaction guaranteed with our products and services
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-pink-700 mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Luxury Diwali Hamper",
                image: "/media/hamm.jpeg",
                link: "/hampers",
              },
              {
                name: "Executive Gift Box",
                image: "/media/executive.jpeg",
                link: "/corporate",
              },
              {
                name: "Premium Dry Fruits Box",
                image: "/media/premium-dryfruit-box.jpeg",
                link: "/dryfruits",
              },
            ].map((product, idx) => (
              <div key={idx} className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-lg shadow-lg overflow-hidden border border-blue-100">
                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-pink-700 mb-4">
                    {product.name}
                  </h3>
                  <Link href={product.link} className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition block text-center">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-300 via-blue-200 to-blue-300 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Send the Perfect Gift?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create something special for your loved ones
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/customizer"
              className="bg-white text-pink-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
            >
              Start Building
            </Link>
            <a
              href="https://wa.me/919421246733?text=Hi! I'd like to know more about your hampers and gifting services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
