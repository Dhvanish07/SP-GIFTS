'use client';

import { Star, Users, Award, Heart } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-pink-500 to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About Shree Parshva Gifts</h1>
          <p className="text-xl text-blue-100">
            Premium hampers and corporate gifting solutions
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Journey</h2>
          <div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Founded in 2007, Shree Parshva Gifts began with a singular vision: to deliver thoughtful, 
              meticulously curated gifting solutions that foster meaningful relationships. What started as 
              a boutique initiative has evolved into a trusted partner for premium gifting across corporate 
              and personal domains. Over the past 18 years, we have successfully executed over 50,000 orders, 
              catering to individuals, families, and leading corporations. Our success is anchored in three 
              core pillars: uncompromising quality, meticulous attention to detail, and a steadfast commitment 
              to excellence that permeates every aspect of our operations.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We take immense pride in our partnerships with industry leaders including Microsoft, Glenmark, and Pfizer, 
              which underscore the trust our clients place in our reliability, expertise, and ability to deliver customized 
              solutions at scale. At Shree Parshva Gifts, every order is handled with the same care and precision — whether it's 
              a single customized hamper or a large corporate requirement spanning thousands of units. Our commitment remains 
              steadfast: to deliver gifts that strengthen relationships and leave a lasting positive impression on recipients, 
              ensuring that each gift tells a meaningful story and reflects the sentiments of the giver.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Our Journey
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            18 years of trust, quality, and meaningful gifting
          </p>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-500 via-blue-500 to-pink-500 h-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2007 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2 text-right">
                    <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-pink-600">
                      <h3 className="text-3xl font-bold text-pink-600 mb-2">2007</h3>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">The Foundation</h4>
                      <p className="text-gray-600 text-base leading-relaxed">
                        Shree Parshva Gifts was established with a passion for creating meaningful gifting experiences. 
                        Our journey began with a small team dedicated to quality and customer satisfaction.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 items-center justify-center">
                    <div className="w-5 h-5 bg-pink-600 rounded-full border-4 border-white shadow-md"></div>
                  </div>
                </div>
              </div>

              {/* 2011 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row-reverse gap-8">
                  <div className="md:w-1/2 text-left">
                    <div className="bg-white p-8 rounded-lg shadow-md border-r-4 border-blue-600">
                      <h3 className="text-3xl font-bold text-blue-600 mb-2">2011</h3>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Growing Trust</h4>
                      <p className="text-gray-600 text-base leading-relaxed">
                        Built strong relationships with local customers through customized gifts, 
                        festive hampers, and reliable service that exceeded expectations.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 items-center justify-center">
                    <div className="w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                  </div>
                </div>
              </div>

              {/* 2015 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2 text-right">
                    <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-pink-600">
                      <h3 className="text-3xl font-bold text-pink-600 mb-2">2015</h3>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Expanding Offerings</h4>
                      <p className="text-gray-600 text-base leading-relaxed">
                        Introduced premium gifting, bulk orders, and corporate hampers, catering to 
                        weddings, festivals, and professional events with enhanced customization options.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 items-center justify-center">
                    <div className="w-5 h-5 bg-pink-600 rounded-full border-4 border-white shadow-md"></div>
                  </div>
                </div>
              </div>

              {/* 2018 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row-reverse gap-8">
                  <div className="md:w-1/2 text-left">
                    <div className="bg-white p-8 rounded-lg shadow-md border-r-4 border-blue-600">
                      <h3 className="text-3xl font-bold text-blue-600 mb-2">2018</h3>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Corporate Partnerships</h4>
                      <p className="text-gray-600 text-base leading-relaxed">
                        Started serving leading organizations and large-scale corporate gifting requirements, 
                        earning repeat clients and establishing long-term strategic partnerships.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 items-center justify-center">
                    <div className="w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                  </div>
                </div>
              </div>

              {/* 2020 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2 text-right">
                    <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-pink-600">
                      <h3 className="text-3xl font-bold text-pink-600 mb-2">2020</h3>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">A Milestone of Scale</h4>
                      <p className="text-gray-600 text-base leading-relaxed">
                        Successfully crossed <span className="font-semibold text-pink-600">25,000+ orders</span>, 
                        proving consistency, quality, and operational strength even during challenging times.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 items-center justify-center">
                    <div className="w-5 h-5 bg-pink-600 rounded-full border-4 border-white shadow-md"></div>
                  </div>
                </div>
              </div>

              {/* 2023 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row-reverse gap-8">
                  <div className="md:w-1/2 text-left">
                    <div className="bg-white p-8 rounded-lg shadow-md border-r-4 border-blue-600">
                      <h3 className="text-3xl font-bold text-blue-600 mb-2">2023</h3>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Trusted by Industry Leaders</h4>
                      <p className="text-gray-600 text-base leading-relaxed">
                        Proudly catered to renowned companies such as <span className="font-semibold">Microsoft, Glenmark, Pfizer, 
                        and Deltin Corp</span>, earning their continued trust and recognition.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 items-center justify-center">
                    <div className="w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                  </div>
                </div>
              </div>

              {/* 2025 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2 text-right">
                    <div className="bg-gradient-to-br from-pink-50 to-blue-50 p-8 rounded-lg shadow-md border-2 border-pink-600">
                      <h3 className="text-3xl font-bold text-pink-600 mb-2">2025</h3>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">50,000+ Orders Strong</h4>
                      <p className="text-gray-600 text-base leading-relaxed">
                        Completed <span className="font-semibold text-pink-600">50,000+ orders</span>, becoming a trusted name in 
                        customized, festive, and corporate gifting across regions with unwavering commitment to excellence.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 items-center justify-center">
                    <div className="w-6 h-6 bg-pink-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                </div>
              </div>

              {/* Today */}
              <div className="relative">
                <div className="flex flex-col md:flex-row-reverse gap-8">
                  <div className="md:w-1/2 text-left">
                    <div className="bg-gradient-to-br from-blue-50 to-pink-50 p-8 rounded-lg shadow-md border-2 border-blue-600">
                      <h3 className="text-3xl font-bold text-blue-600 mb-2">Today</h3>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Our Promise</h4>
                      <p className="text-gray-600 text-base leading-relaxed">
                        We continue to curate meaningful gifts with premium quality, timely delivery, and personal attention — 
                        turning every gift into a memorable experience that strengthens relationships and creates lasting impressions.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="inline-block bg-amber-100 p-4 rounded-full mb-4">
                <Star className="text-amber-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality</h3>
              <p className="text-gray-600">
                Premium ingredients and finest materials
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                <Heart className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Care</h3>
              <p className="text-gray-600">
                Each hamper is made with love and attention
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="inline-block bg-green-100 p-4 rounded-full mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Relationships</h3>
              <p className="text-gray-600">
                Building meaningful connections through gifts
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="inline-block bg-purple-100 p-4 rounded-full mb-4">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">
                Committed to exceeding expectations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Shree Parshva Gifts?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Premium Selection
                </h3>
                <p className="text-gray-600">
                  Carefully curated products sourced from Trusued suppliers
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Custom Solutions
                </h3>
                <p className="text-gray-600">
                  Build your own hamper with our easy-to-use customizer
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Corporate Gifting
                </h3>
                <p className="text-gray-600">
                  Bulk orders with customization and branding options
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Fast Delivery
                </h3>
                <p className="text-gray-600">
                  Quick and reliable delivery across the city
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Customer Support
                </h3>
                <p className="text-gray-600">
                  Available on WhatsApp for all your queries
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Satisfaction Guaranteed
                </h3>
                <p className="text-gray-600">
                  100% satisfaction with quality and service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-pink-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-pink-100 mb-8">
            Have questions? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9421246733"
              className="bg-white text-pink-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
            >
              📞 Call Us
            </a>
            <a
              href="https://wa.me/919421246733"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              📱 WhatsApp
            </a>
            <Link
              href="/customizer"
              className="bg-white text-pink-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
            >
              ✨ Build Hamper
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
