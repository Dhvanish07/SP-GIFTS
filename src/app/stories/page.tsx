import CustomerStories from "@/components/CustomerStories";

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-200 via-blue-100 to-blue-200 text-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-pink-700 mb-4">Customer Stories</h1>
          <p className="text-xl text-gray-700">
            Real stories from real customers who trusted us with their gifting needs
          </p>
        </div>
      </div>

      {/* Customer Stories Component */}
      <CustomerStories />
    </div>
  );
}
