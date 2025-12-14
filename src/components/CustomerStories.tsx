'use client';

import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useEffect } from "react";

export default function CustomerStories() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredReviewId, setHoveredReviewId] = useState<number | null>(null);

  // Carousel reviews (Big reviews - featured slider)
  const carouselReviews = [
    {
      id: 1,
      name: "Ankit Agarwal",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.40.42_2f3d5d36.jpg",
      text: "Placed a bulk order for corporate gifting and the experience was excellent. From product selection to final delivery, everything was handled professionally. The hampers looked premium and were appreciated by everyone.",
    },
    {
      id: 2,
      name: "Ritu Malhotra",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.44.10_0b631828.jpg",
      text: "I ordered customized hampers for a wedding event and was really impressed with the quality and detailing. Even with last-minute changes, the team was very accommodating. The final presentation looked elegant.",
    },
    {
      id: 3,
      name: "Prakash Shah",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.45.49_14cc4b9e.jpg",
      text: "A true one-stop solution for gifting. The variety, quality, and packaging are all top-notch. The team delivered exactly what we wanted, well within the timeline.",
    },
    {
      id: 4,
      name: "Sneha Joshi",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.46.09_f2e1ed33.jpg",
      text: "We needed hampers on short notice for a festive occasion and everything was handled smoothly. Excellent quality and attractive packaging. Very reliable service.",
    },
    {
      id: 5,
      name: "Rahul Khanna",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.46.16_8474cd86.jpg",
      text: "The professionalism and attention to detail really stood out. From coordination to execution, everything was seamless. Highly recommended for premium gifting.",
    },
  ];

  // Static reviews grid (Medium & Small reviews)
  const staticReviews = [
    {
      id: 6,
      name: "Vikram Shah",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.49.06_0c631ec0.jpg",
      text: "Ordered customized hampers for a family function. The quality and packaging were excellent and delivery was on time.",
    },
    {
      id: 7,
      name: "Shruti Nair",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.52.41_d8f55b41.jpg",
      text: "Very smooth ordering process and good communication throughout. The final hampers looked classy.",
    },
    {
      id: 8,
      name: "Mehul Kothari",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.52.42_31fd6f3a.jpg",
      text: "They handled our bulk order very well. Everything was packed nicely and delivered as promised.",
    },
    {
      id: 9,
      name: "Rashmi Iyer",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.52.42_9fe242cb.jpg",
      text: "The team was very cooperative and helped with customization. The hampers turned out beautiful.",
    },
    {
      id: 10,
      name: "Harshil Patel",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.52.51_ef8f1409.jpg",
      text: "Affordable pricing with a premium finish. Would definitely recommend.",
    },
    {
      id: 11,
      name: "Pooja Shah",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.52.58_364c2cec.jpg",
      text: "Beautiful hampers and timely delivery.",
    },
    {
      id: 12,
      name: "Kunal Desai",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.53.03_318906a6.jpg",
      text: "Perfect for corporate gifting.",
    },
    {
      id: 13,
      name: "Neha Kulkarni",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.53.10_c40ed900.jpg",
      text: "Loved the presentation.",
    },
    {
      id: 14,
      name: "Rina Patel",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.53.18_2e3adaca.jpg",
      text: "Elegant and well packed.",
    },
    {
      id: 15,
      name: "Anjali Verma",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.53.19_30ac9592.jpg",
      text: "Premium look and feel.",
    },
    {
      id: 16,
      name: "Sanjay Mishra",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.53.29_d4f99554.jpg",
      text: "Exceeded our expectations. Great service and attention to detail.",
    },
    {
      id: 17,
      name: "Priya Joshi",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.53.31_54c285f6.jpg",
      text: "Perfect gifts for all occasions. Highly satisfied with the quality.",
    },
    {
      id: 18,
      name: "Aditya Kumar",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.53.33_453d959e.jpg",
      text: "Outstanding service. Delivered exactly as promised.",
    },
    {
      id: 19,
      name: "Divya Sharma",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.53.34_6c1bb71a.jpg",
      text: "Best hamper shop in the city. Loved the variety.",
    },
    {
      id: 20,
      name: "Rohit Gupta",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.53.38_a6e20cdf.jpg",
      text: "Great experience from start to finish.",
    },
    {
      id: 21,
      name: "Swati Reddy",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.57.13_99dcf30b.jpg",
      text: "Excellent quality hampers. Perfect for corporate events.",
    },
    {
      id: 22,
      name: "Nikhil Pandey",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 16.57.16_3bf2ad97.jpg",
      text: "Very professional team. Delivered on time.",
    },
    {
      id: 23,
      name: "Kavya Iyer",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 17.02.20_a1f0ed43.jpg",
      text: "Beautiful packaging and premium quality products.",
    },
    {
      id: 24,
      name: "Arjun Nair",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 17.02.25_02ec89dc.jpg",
      text: "Best choice for customized gifting solutions.",
    },
    {
      id: 25,
      name: "Isha Deshmukh",
      rating: 5,
      image: "/media/reviews/WhatsApp Image 2025-12-13 at 17.05.00_b2783199.jpg",
      text: "Loved every aspect of the service. Truly impressive.",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselReviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering, carouselReviews.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselReviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselReviews.length - 1 : prev - 1
    );
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    );
  };

  return (
    <div className="py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-700 mb-2">Customer Stories</h2>
          <p className="text-lg text-gray-600">
            <span className="flex justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </span>
            here from our satisfied customers who have experienced the joy of gifting with Shree Parshva Gifts.
          </p>
        </div>

        {/* Carousel Section */}
        <div
          className="mb-12 relative bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg shadow-lg overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center min-h-96">
            {/* Image Section */}
            <div className="flex justify-center">
              <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={carouselReviews[currentSlide].image}
                  alt={carouselReviews[currentSlide].name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Review Content */}
            <div className="flex flex-col justify-center space-y-4">
              <div>{renderStars(carouselReviews[currentSlide].rating)}</div>
              <h3 className="text-2xl font-bold text-pink-700">
                {carouselReviews[currentSlide].name}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                "{carouselReviews[currentSlide].text}"
              </p>

              {/* Slide Indicators */}
              <div className="flex gap-2 mt-4">
                {carouselReviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition ${
                      idx === currentSlide ? "bg-pink-600 w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full shadow-lg transition z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full shadow-lg transition z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Static Reviews Grid */}
        <div>
          <h3 className="text-2xl font-bold text-pink-700 mb-8 text-center">
            More Reviews
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {staticReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden border border-pink-100 cursor-pointer h-full"
                onMouseEnter={() => setHoveredReviewId(review.id)}
                onMouseLeave={() => setHoveredReviewId(null)}
              >
                {/* Image */}
                <div className="relative w-full h-48 bg-gray-100">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content - Expands on Hover */}
                <div className={`p-4 transition-all duration-300 ${
                  hoveredReviewId === review.id ? 'max-h-96' : 'max-h-32'
                }`}>
                  <h4 className="font-bold text-pink-700 mb-2">{review.name}</h4>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className={`text-sm text-gray-600 transition-all duration-300 ${
                    hoveredReviewId === review.id ? 'line-clamp-none' : 'line-clamp-2'
                  }`}>
                    "{review.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
