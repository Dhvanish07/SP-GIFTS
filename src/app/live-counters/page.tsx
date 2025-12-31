'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, ArrowRight, Plus } from 'lucide-react';

type Step = 'categories' | 'details';

interface SelectedOption {
  category: string;
  item: string;
}

const COUNTER_CATEGORIES = [
  {
    id: 'personalization',
    name: 'Personalization & Calligraphy Zone',
    icon: '✨',
    items: [
      'Live Customization on Caps',
      'Live Customization on Hats',
      'Live Personalization on Scarves or Stoles',
      'Live Personalization on T-Shirts',
      'Live Personalization on Travel Pouches or Totes',
      'Live Calligraphy Station',
      'Live Calligraphy on Jewelry Boxes',
      'Live Personalization on Hand-Painted Fans',
      'Live Personalization on Chinese Umbrellas',
      'Live Engraving Station',
      'Live Personalization on Wine and Champagne Glasses',
    ],
  },
  {
    id: 'jewelry',
    name: 'DIY Jewelry & Accessory Creation Zone',
    icon: '💎',
    items: [
      'Personalized Charm Bracelet Bar',
      'Evil Eye Bracelet Bar',
      'Live Bangle Selection Bar',
      'Resin Jewelry DIY Bar',
      'Jewelry Box Customization Station',
    ],
  },
  {
    id: 'art',
    name: 'DIY Art & Handcraft Experience Zone',
    icon: '🎨',
    items: [
      'DIY Sneaker Painting Station',
      'DIY Potli Decoration Station',
      'Live Painting Portrait Station',
      'Boho Portrait Station',
      'Denim Jacket Customization Station',
    ],
  },
  {
    id: 'fragrance',
    name: 'Fragrance & Beauty DIY Zone',
    icon: '🌸',
    items: [
      'DIY Perfume Bar',
      'DIY Ittar Bar',
      'Create-Your-Own Diffuser Bar',
      'DIY Floral Candle Bar',
      'Live Candle Bar',
      'Mithai Candle Bar',
      'DIY Potpourri Bar',
      'DIY Lip Gloss Bar',
    ],
  },
  {
    id: 'photo',
    name: 'Photo & Memory Keepsake Zone',
    icon: '📸',
    items: [
      'Customized Photo Fridge Magnet Station',
      'Vintage Frame Photo Station',
      'Live Caricature Booth',
    ],
  },
  {
    id: 'wellness',
    name: 'Wellness & Herbal Experience Zone',
    icon: '🌿',
    items: [
      'Herbal Tea Blending Bar',
      'Essential Oil Roller Bar',
    ],
  },
];

export default function LiveCountersPage() {
  const [currentStep, setCurrentStep] = useState<Step>('categories');
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);
  const [customIdea, setCustomIdea] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [totalBudget, setTotalBudget] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleOption = (category: string, item: string) => {
    setSelectedOptions((prev) => {
      const exists = prev.find((opt) => opt.category === category && opt.item === item);
      if (exists) {
        return prev.filter((opt) => !(opt.category === category && opt.item === item));
      } else {
        return [...prev, { category, item }];
      }
    });
  };

  const isOptionSelected = (category: string, item: string) => {
    return selectedOptions.some((opt) => opt.category === category && opt.item === item);
  };

  const handleNext = () => {
    if (selectedOptions.length > 0 || customIdea.trim()) {
      scrollToTop();
      setCurrentStep('details');
    }
  };

  const handleSendQuote = () => {
    if (!numberOfGuests || !totalBudget) {
      alert('Please fill in all details');
      return;
    }

    const selectedItemsList = selectedOptions
      .map((opt) => `• ${opt.item}`)
      .join('\n');

    const customIdeaText = customIdea.trim() ? `\n\nCustom Idea:\n${customIdea}` : '';

    const quoteSummary = `
*Live Interactive Counters Inquiry*

*Selected Zones & Experiences:*
${selectedItemsList}${customIdeaText}

*Event Details:*
Number of Guests: ${numberOfGuests}
Total Budget: ₹${parseInt(totalBudget).toLocaleString()}

Please provide a customized quote for our live interactive counter experience.

Looking forward to working with you!`;

    const message = `Hi! I'd like to inquire about your Live Interactive Counters service.${quoteSummary}`;
    const whatsappUrl = `https://wa.me/919421246733?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGoBack = () => {
    scrollToTop();
    setCurrentStep('categories');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-blue-500 text-white py-12 sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Live Interactive Counters</h1>
          <p className="text-lg text-blue-100">Create unforgettable experiences with our premium interactive zones</p>
        </div>
      </div>

      {/* Progress Indicator */}
      {currentStep === 'details' && (
        <div className="bg-white border-b border-gray-200 py-6 sticky top-28 z-40">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between max-w-2xl">
              {['Select Zones', 'Event Details'].map((label, idx) => (
                <div key={label} className="flex items-center flex-1">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                      idx === 0
                        ? 'bg-green-600 text-white'
                        : 'bg-pink-600 text-white'
                    }`}
                  >
                    {idx === 0 ? <CheckCircle size={20} /> : idx + 1}
                  </div>
                  {idx < 1 && <div className="flex-1 h-0.5 mx-2 bg-gray-300"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        {currentStep === 'categories' && (
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold text-pink-700 mb-2">Select Your Interactive Zones</h2>
            <p className="text-gray-600 mb-8">
              Choose one or more interactive experiences for your event. Each zone provides guests with memorable, hands-on activities.
            </p>

            <div className="space-y-4 mb-8">
              {COUNTER_CATEGORIES.map((category) => (
                <div key={category.id} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() =>
                      setExpandedCategory(expandedCategory === category.id ? null : category.id)
                    }
                    className="w-full px-6 py-4 bg-gradient-to-r from-pink-50 to-blue-50 hover:from-pink-100 hover:to-blue-100 transition flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{category.icon}</span>
                      <div className="text-left">
                        <h3 className="font-bold text-gray-800 text-lg">{category.name}</h3>
                        <p className="text-sm text-gray-600">
                          {selectedOptions.filter((opt) => opt.category === category.id).length} selected
                        </p>
                      </div>
                    </div>
                    {expandedCategory === category.id ? (
                      <ChevronUp size={24} className="text-pink-600" />
                    ) : (
                      <ChevronDown size={24} className="text-pink-600" />
                    )}
                  </button>

                  {expandedCategory === category.id && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {category.items.map((item) => (
                          <label
                            key={item}
                            className="flex items-center space-x-3 p-3 rounded-lg border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50 cursor-pointer transition"
                          >
                            <input
                              type="checkbox"
                              checked={isOptionSelected(category.id, item)}
                              onChange={() => toggleOption(category.id, item)}
                              className="w-4 h-4 text-pink-600 rounded accent-pink-600"
                            />
                            <span className="text-sm text-gray-700 font-medium">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Custom Idea Section */}
            <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg mb-8">
              <label className="block">
                <span className="text-sm font-semibold text-gray-700 mb-2 block flex items-center gap-2">
                  <Plus size={18} className="text-pink-600" />
                  Have Your Own Idea? (Optional)
                </span>
                <textarea
                  placeholder="Describe your custom interactive zone idea..."
                  value={customIdea}
                  onChange={(e) => setCustomIdea(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 bg-white text-gray-900 font-medium placeholder-gray-500 resize-none"
                  rows={4}
                />
              </label>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Total Zones Selected:</span> {selectedOptions.length}{customIdea.trim() ? ' + 1 Custom Idea' : ''}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                disabled={selectedOptions.length === 0 && !customIdea.trim()}
                className="bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-lg transition flex items-center gap-2"
              >
                Next: Event Details <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {currentStep === 'details' && (
          <div className="bg-white rounded-lg shadow-lg p-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-700 mb-8">Event Details & Budget</h2>

            {/* Selected Options Review */}
            <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-gray-800 mb-4">Selected Experiences:</h3>
              <div className="space-y-2">
                {selectedOptions.map((opt) => (
                  <div key={`${opt.category}-${opt.item}`} className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{opt.item}</span>
                  </div>
                ))}
                {customIdea.trim() && (
                  <div className="flex items-start gap-2 pt-2 border-t border-pink-200">
                    <CheckCircle size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-gray-700 block">Custom Idea:</span>
                      <span className="text-sm text-gray-600">{customIdea}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Input Fields */}
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Guests
                </label>
                <input
                  type="number"
                  min="1"
                  placeholder="e.g., 100"
                  value={numberOfGuests}
                  onChange={(e) => setNumberOfGuests(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 bg-white text-gray-900 font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Total Budget (₹)
                </label>
                <input
                  type="number"
                  min="1"
                  placeholder="e.g., 50000"
                  value={totalBudget}
                  onChange={(e) => setTotalBudget(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 bg-white text-gray-900 font-medium"
                />
              </div>

              {numberOfGuests && totalBudget && (
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border-2 border-green-300">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Review Your Enquiry:</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Number of Guests:</span>
                      <span className="font-semibold">{numberOfGuests} guests</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Budget:</span>
                      <span className="font-semibold">₹{parseInt(totalBudget).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-t border-green-300 pt-2">
                      <span>Interactive Zones:</span>
                      <span className="font-semibold">{selectedOptions.length}{customIdea.trim() ? ' + 1 Custom' : ''}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={handleGoBack}
                className="text-pink-600 hover:text-pink-700 font-bold py-3 px-8 rounded-lg border border-pink-600 transition"
              >
                Back
              </button>
              <button
                onClick={handleSendQuote}
                disabled={!numberOfGuests || !totalBudget}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-lg transition flex items-center gap-2"
              >
                Send Quote on WhatsApp <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
