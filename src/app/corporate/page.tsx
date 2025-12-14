'use client';

import { useState } from 'react';
import { ArrowRight, ChevronLeft } from 'lucide-react';

type Step = 'recipient' | 'gifttype' | 'customization' | 'pricerange';

interface Selection {
  recipient: string | null;
  recipientOther: string;
  giftType: string | null;
  giftTypeOther: string;
  customizations: string[];
  customizationOther: string;
  priceRange: string | null;
  customPriceMin: string;
  customPriceMax: string;
  quantity: number;
}

const RECIPIENTS = [
  { id: 'employee', name: 'Employee Gifting', description: 'Reward and appreciate your team' },
  { id: 'client', name: 'Client & Partner Gifting', description: 'Strengthen business relationships' },
  { id: 'festive', name: 'Festive & Seasonal Gifting', description: 'Celebrate special occasions' },
  { id: 'event', name: 'Event & Conference Giveaways', description: 'Leave lasting impressions' },
  { id: 'milestone', name: 'New Joiner & Milestone Gifting', description: 'Mark important moments' },
];

const GIFT_TYPES = [
  { id: 'hampers', name: 'Curated Gift Hampers', description: 'Premium assorted gift boxes' },
  { id: 'dryfruits', name: 'Premium Dry Fruit Boxes', description: 'Health-conscious luxury gifts' },
  { id: 'customsets', name: 'Customized Gift Sets', description: 'Tailored to your preferences' },
  { id: 'festive', name: 'Festive Essentials', description: 'Celebration-themed collections' },
  { id: 'ecofriendly', name: 'Sustainable & Eco-Friendly Gifts', description: 'Environmentally conscious options' },
];

const CUSTOMIZATION_OPTIONS = [
  { id: 'logo', name: 'Logo Placement', description: 'Company logo on packaging' },
  { id: 'sleeves', name: 'Custom Sleeves & Inserts', description: 'Branded packaging inserts' },
  { id: 'cards', name: 'Personalized Message Cards', description: 'Custom greeting cards' },
  { id: 'packaging', name: 'Occasion-Based Packaging', description: 'Event-specific designs' },
  { id: 'wrapping', name: 'Brand Color–Themed Wrapping', description: 'Custom color wrapping' },
];

const PRICE_RANGES = [
  { id: '500-1000', range: '₹500 - ₹1,000', description: 'Budget-friendly' },
  { id: '1000-2000', range: '₹1,000 - ₹2,000', description: 'Mid-range' },
  { id: '2000-5000', range: '₹2,000 - ₹5,000', description: 'Premium' },
  { id: '5000-10000', range: '₹5,000 - ₹10,000', description: 'Ultra-premium' },
  { id: '10000+', range: '₹10,000+', description: 'Luxury' },
];

export default function CorporateGiftingPage() {
  const [currentStep, setCurrentStep] = useState<Step>('recipient');
  const [selection, setSelection] = useState<Selection>({
    recipient: null,
    recipientOther: '',
    giftType: null,
    giftTypeOther: '',
    customizations: [],
    customizationOther: '',
    priceRange: null,
    customPriceMin: '',
    customPriceMax: '',
    quantity: 100,
  });

  const getRecipientName = () => selection.recipient === 'other' ? selection.recipientOther : RECIPIENTS.find(r => r.id === selection.recipient)?.name || '';
  const getGiftTypeName = () => selection.giftType === 'other' ? selection.giftTypeOther : GIFT_TYPES.find(g => g.id === selection.giftType)?.name || '';
  const getPriceRangeName = () => selection.priceRange === 'custom' ? `₹${selection.customPriceMin} - ₹${selection.customPriceMax}` : PRICE_RANGES.find(p => p.id === selection.priceRange)?.range || '';

  const handleCheckout = () => {
    if (!selection.recipient || !selection.giftType || !selection.priceRange) {
      alert('Please complete all steps before proceeding');
      return;
    }

    if ((selection.recipient === 'other' && !selection.recipientOther) ||
        (selection.giftType === 'other' && !selection.giftTypeOther) ||
        (selection.priceRange === 'custom' && (!selection.customPriceMin || !selection.customPriceMax))) {
      alert('Please fill in all required fields');
      return;
    }

    const customizationText = selection.customizations.map(c => {
      if (c === 'other') {
        return `• ${selection.customizationOther}`;
      }
      return `• ${CUSTOMIZATION_OPTIONS.find(o => o.id === c)?.name}`;
    }).join('\n');

    const message = `Hi! I'd like to inquire about corporate gifting.\n\n` +
      `🎁 CORPORATE GIFT REQUIREMENTS:\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Recipient Type: ${getRecipientName()}\n` +
      `Gift Type: ${getGiftTypeName()}\n` +
      `Price Range: ${getPriceRangeName()}\n` +
      `Quantity Required: ${selection.quantity} units\n\n` +
      `${selection.customizations.length > 0 ? `Customization Options:\n${customizationText}\n\n` : ''}` +
      `Please provide a quote and available options for this order.`;

    const whatsappUrl = `https://wa.me/919421246733?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-blue-500 text-white py-12 sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2"> Design Your Corporate Gift</h1>
          <p className="text-lg text-blue-100">Customized gifting solutions for your business</p>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white border-b border-gray-200 py-6 sticky top-28 z-40">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between max-w-6xl">
            {['Recipient', 'Gift Type', 'Customization', 'Price & Quantity'].map(
              (label, idx) => (
                <div key={label} className="flex items-center flex-1">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                      (['recipient', 'gifttype', 'customization', 'pricerange'][idx] === currentStep)
                        ? 'bg-pink-600 text-white'
                        : (['recipient', 'gifttype', 'customization', 'pricerange'].indexOf(currentStep) > idx)
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-300 text-gray-700'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div className={`ml-3 text-sm font-semibold ${currentStep === ['recipient', 'gifttype', 'customization', 'pricerange'][idx] ? 'text-pink-600' : 'text-gray-600'}`}>
                    {label}
                  </div>
                  {idx < 3 && <div className="flex-1 h-1 bg-gray-300 mx-4"></div>}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Step 1: Select Recipient */}
        {currentStep === 'recipient' && (
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold text-pink-700 mb-8">Step 1: Select the Recipient</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {RECIPIENTS.map((recipient) => (
                <button
                  key={recipient.id}
                  onClick={() => setSelection({ ...selection, recipient: recipient.id })}
                  className={`p-6 rounded-lg border-2 transition text-left ${
                    selection.recipient === recipient.id
                      ? 'border-pink-600 bg-pink-50'
                      : 'border-gray-200 bg-white hover:border-pink-300'
                  }`}
                >
                  <h3 className="text-lg font-bold text-pink-700 mb-2">{recipient.name}</h3>
                  <p className="text-gray-600">{recipient.description}</p>
                </button>
              ))}
              {/* Other Option */}
              <button
                onClick={() => setSelection({ ...selection, recipient: 'other' })}
                className={`p-6 rounded-lg border-2 transition text-left ${
                  selection.recipient === 'other'
                    ? 'border-pink-600 bg-pink-50'
                    : 'border-gray-200 bg-white hover:border-pink-300'
                }`}
              >
                <h3 className="text-lg font-bold text-pink-700 mb-2">Other</h3>
                <p className="text-gray-600">Specify your custom recipient type</p>
              </button>
            </div>
            
            {/* Other Input Field */}
            {selection.recipient === 'other' && (
              <div className="mb-8 bg-pink-50 p-6 rounded-lg">
                <input
                  type="text"
                  placeholder="Enter recipient type..."
                  value={selection.recipientOther}
                  onChange={(e) => setSelection({ ...selection, recipientOther: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-600 text-gray-900 bg-white placeholder-gray-500"
                />
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={() => setCurrentStep('gifttype')}
                disabled={!selection.recipient || (selection.recipient === 'other' && !selection.recipientOther)}
                className="bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-lg transition flex items-center gap-2"
              >
                Next Step <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Select Gift Type */}
        {currentStep === 'gifttype' && (
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold text-pink-700 mb-2">Step 2: Select the Gift Type</h2>
            <p className="text-gray-600 mb-8">For: <span className="font-bold text-pink-600">{getRecipientName()}</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {GIFT_TYPES.map((giftType) => (
                <button
                  key={giftType.id}
                  onClick={() => setSelection({ ...selection, giftType: giftType.id })}
                  className={`p-6 rounded-lg border-2 transition text-left ${
                    selection.giftType === giftType.id
                      ? 'border-pink-600 bg-pink-50'
                      : 'border-gray-200 bg-white hover:border-pink-300'
                  }`}
                >
                  <h3 className="text-lg font-bold text-pink-700 mb-2">{giftType.name}</h3>
                  <p className="text-gray-600">{giftType.description}</p>
                </button>
              ))}
              {/* Other Option */}
              <button
                onClick={() => setSelection({ ...selection, giftType: 'other' })}
                className={`p-6 rounded-lg border-2 transition text-left ${
                  selection.giftType === 'other'
                    ? 'border-pink-600 bg-pink-50'
                    : 'border-gray-200 bg-white hover:border-pink-300'
                }`}
              >
                <h3 className="text-lg font-bold text-pink-700 mb-2">Other</h3>
                <p className="text-gray-600">Specify your custom gift type</p>
              </button>
            </div>

            {/* Other Input Field */}
            {selection.giftType === 'other' && (
              <div className="mb-8 bg-pink-50 p-6 rounded-lg">
                <input
                  type="text"
                  placeholder="Enter gift type..."
                  value={selection.giftTypeOther}
                  onChange={(e) => setSelection({ ...selection, giftTypeOther: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-600 text-gray-900 bg-white placeholder-gray-500"
                />
              </div>
            )}

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep('recipient')}
                className="text-pink-600 hover:text-pink-700 font-bold py-3 px-8 rounded-lg border border-pink-600 transition flex items-center gap-2"
              >
                <ChevronLeft size={20} /> Back
              </button>
              <button
                onClick={() => setCurrentStep('customization')}
                disabled={!selection.giftType || (selection.giftType === 'other' && !selection.giftTypeOther)}
                className="bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-lg transition flex items-center gap-2"
              >
                Next Step <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Customization Options */}
        {currentStep === 'customization' && (
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold text-pink-700 mb-2">Step 3: Customization & Branding Options</h2>
            <p className="text-gray-600 mb-8">For: <span className="font-bold text-pink-600">{getGiftTypeName()}</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {CUSTOMIZATION_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    if (selection.customizations.includes(option.id)) {
                      setSelection({
                        ...selection,
                        customizations: selection.customizations.filter(c => c !== option.id),
                      });
                    } else {
                      setSelection({
                        ...selection,
                        customizations: [...selection.customizations, option.id],
                      });
                    }
                  }}
                  className={`p-6 rounded-lg border-2 transition text-left ${
                    selection.customizations.includes(option.id)
                      ? 'border-pink-600 bg-pink-50'
                      : 'border-gray-200 bg-white hover:border-pink-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                      selection.customizations.includes(option.id)
                        ? 'bg-pink-600 border-pink-600'
                        : 'border-gray-300'
                    }`}>
                      {selection.customizations.includes(option.id) && <span className="text-white font-bold">✓</span>}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-pink-700">{option.name}</h3>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </div>
                  </div>
                </button>
              ))}
              {/* Other Option */}
              <button
                onClick={() => {
                  if (selection.customizations.includes('other')) {
                    setSelection({
                      ...selection,
                      customizations: selection.customizations.filter(c => c !== 'other'),
                    });
                  } else {
                    setSelection({
                      ...selection,
                      customizations: [...selection.customizations, 'other'],
                    });
                  }
                }}
                className={`p-6 rounded-lg border-2 transition text-left ${
                  selection.customizations.includes('other')
                    ? 'border-pink-600 bg-pink-50'
                    : 'border-gray-200 bg-white hover:border-pink-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                    selection.customizations.includes('other')
                      ? 'bg-pink-600 border-pink-600'
                      : 'border-gray-300'
                  }`}>
                    {selection.customizations.includes('other') && <span className="text-white font-bold">✓</span>}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-pink-700">Other</h3>
                    <p className="text-gray-600 text-sm">Specify custom options</p>
                  </div>
                </div>
              </button>
            </div>

            {/* Other Input Field */}
            {selection.customizations.includes('other') && (
              <div className="mb-8 bg-pink-50 p-6 rounded-lg">
                <input
                  type="text"
                  placeholder="Describe your custom customization option..."
                  value={selection.customizationOther}
                  onChange={(e) => setSelection({ ...selection, customizationOther: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-600 text-gray-900 bg-white placeholder-gray-500"
                />
              </div>
            )}

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep('gifttype')}
                className="text-pink-600 hover:text-pink-700 font-bold py-3 px-8 rounded-lg border border-pink-600 transition flex items-center gap-2"
              >
                <ChevronLeft size={20} /> Back
              </button>
              <button
                onClick={() => setCurrentStep('pricerange')}
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg transition flex items-center gap-2"
              >
                Next Step <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Price Range & Quantity */}
        {currentStep === 'pricerange' && (
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold text-pink-700 mb-8">Step 4: Select Price Range & Quantity</h2>

            {/* Price Range Selection */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Price Range (Per Gift)</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                {PRICE_RANGES.map((price) => (
                  <button
                    key={price.id}
                    onClick={() => setSelection({ ...selection, priceRange: price.id })}
                    className={`p-6 rounded-lg border-2 transition text-center ${
                      selection.priceRange === price.id
                        ? 'border-pink-600 bg-pink-50'
                        : 'border-gray-200 bg-white hover:border-pink-300'
                    }`}
                  >
                    <p className="text-2xl font-bold text-pink-700 mb-2">{price.range}</p>
                    <p className="text-gray-600 text-sm">{price.description}</p>
                  </button>
                ))}
                {/* Custom Price Range Option */}
                <button
                  onClick={() => setSelection({ ...selection, priceRange: 'custom' })}
                  className={`p-6 rounded-lg border-2 transition text-center ${
                    selection.priceRange === 'custom'
                      ? 'border-pink-600 bg-pink-50'
                      : 'border-gray-200 bg-white hover:border-pink-300'
                  }`}
                >
                  <p className="text-2xl font-bold text-pink-700 mb-2">Custom</p>
                  <p className="text-gray-600 text-sm">Set your range</p>
                </button>
              </div>

              {/* Custom Price Range Input */}
              {selection.priceRange === 'custom' && (
                <div className="bg-pink-50 p-6 rounded-lg mb-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-2">Min Price (₹)</label>
                      <input
                        type="number"
                        placeholder="e.g., 1000"
                        value={selection.customPriceMin}
                        onChange={(e) => setSelection({ ...selection, customPriceMin: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-600 text-gray-900 bg-white placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-2">Max Price (₹)</label>
                      <input
                        type="number"
                        placeholder="e.g., 5000"
                        value={selection.customPriceMax}
                        onChange={(e) => setSelection({ ...selection, customPriceMax: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-600 text-gray-900 bg-white placeholder-gray-500"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quantity Selection */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Total Quantity Required</h3>
              <div className="flex items-center gap-6 bg-gradient-to-r from-pink-50 to-blue-50 p-8 rounded-lg">
                <label className="font-bold text-gray-800 text-lg">Number of Units:</label>
                <div className="flex items-center border-2 border-pink-500 rounded-lg bg-white">
                  <button
                    onClick={() => setSelection({ ...selection, quantity: Math.max(1, selection.quantity - 10) })}
                    className="px-6 py-3 text-pink-600 hover:bg-pink-50 font-bold text-xl"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={selection.quantity}
                    onChange={(e) => setSelection({ ...selection, quantity: parseInt(e.target.value) || 1 })}
                    className="w-32 text-center border-l border-r border-pink-500 py-3 text-2xl font-bold text-gray-800"
                  />
                  <button
                    onClick={() => setSelection({ ...selection, quantity: selection.quantity + 10 })}
                    className="px-6 py-3 text-pink-600 hover:bg-pink-50 font-bold text-xl"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Recipient Type:</strong> {getRecipientName()}</p>
                <p><strong>Gift Type:</strong> {getGiftTypeName()}</p>
                <p><strong>Price Range:</strong> {getPriceRangeName()}</p>
                <p><strong>Quantity:</strong> {selection.quantity} units</p>
                {selection.customizations.length > 0 && (
                  <div>
                    <p><strong>Customizations:</strong></p>
                    <ul className="list-disc list-inside ml-2">
                      {selection.customizations.map((c) => (
                        <li key={c} className="text-gray-600 text-sm">
                          {c === 'other' ? selection.customizationOther : CUSTOMIZATION_OPTIONS.find(o => o.id === c)?.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep('customization')}
                className="text-pink-600 hover:text-pink-700 font-bold py-3 px-8 rounded-lg border border-pink-600 transition flex items-center gap-2"
              >
                <ChevronLeft size={20} /> Back
              </button>
              <button
                onClick={handleCheckout}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition flex items-center gap-2"
              >
                Send Inquiry via WhatsApp <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
