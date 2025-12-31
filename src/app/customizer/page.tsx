'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, ArrowRight } from 'lucide-react';

type Step = 'basket-type' | 'basket-size' | 'contents' | 'review';

interface SelectedContent {
  category: string;
  items: string[];
  customItem?: string;
}

interface ContentCategory {
  category: string;
  items: string[];
}

const BASKET_TYPES = [
  { id: 'wicker', name: 'Wicker Basket', description: 'Classic wicker design, perfect for traditional gifts' },
  { id: 'bamboo', name: 'Bamboo Basket', description: 'Eco-friendly bamboo basket with natural appeal' },
  { id: 'cane', name: 'Cane Basket', description: 'Elegant cane basket, lightweight and durable' },
  { id: 'wooden', name: 'Wooden Basket', description: 'Premium wooden basket, elegant and reusable' },
  { id: 'mdf', name: 'MDF Decorative Basket', description: 'Modern MDF basket with decorative finish' },
  { id: 'metal', name: 'Metal Wire Basket', description: 'Contemporary metal wire design, minimalist style' },
  { id: 'fabric', name: 'Fabric Basket', description: 'Soft fabric basket with elegant lining' },
  { id: 'jute', name: 'Jute Basket', description: 'Eco-friendly jute basket, sustainable choice' },
  { id: 'tray', name: 'Tray Basket', description: 'Flat tray basket with handles for easy carrying' },
  { id: 'potli', name: 'Potli Bag', description: 'Traditional potli bag, perfect for festive gifting' },
];

const BASKET_SIZES = [
  { id: 'small', name: 'Small', description: 'Compact size, perfect for personal gifts' },
  { id: 'medium', name: 'Medium', description: 'Standard size, ideal for most occasions' },
  { id: 'large', name: 'Large', description: 'Spacious size, great for corporate gifts' },
  { id: 'xlarge', name: 'Extra Large', description: 'Premium large size, impressive presentation' },
];

const CONTENT_OPTIONS: ContentCategory[] = [
  {
    category: 'Dry Fruits & Nuts',
    items: [
      'Almonds (Regular / Premium)',
      'Cashews (W240 / W320)',
      'Pistachios (Salted / Roasted)',
      'Walnuts (Whole / Kernels)',
      'Raisins (Black / Golden)',
      'Dates (Arabian / Medjool)',
      'Figs (Anjeer)',
    ],
  },
  {
    category: 'Chocolates & Confectionery',
    items: [
      'Premium Milk Chocolate Bars',
      'Dark Chocolate (55% / 70%)',
      'Assorted Chocolate Box',
      'Chocolate-Coated Nuts',
      'Pralines & Truffles',
      'Wafer Chocolates',
      'Sugar-Free Chocolates',
    ],
  },
  {
    category: 'Snacks & Savouries',
    items: [
      'Roasted Namkeen Mix',
      'Flavoured Makhana (Peri-Peri / Cheese / Pudina)',
      'Savoury Crackers',
      'Premium Cookies (Butter / Oats)',
      'Trail Mix',
      'Mini Samosa / Mathri Packs',
      'Lays/Banana Chips',
      'Popcorn (Cheese / Caramel)',
      'Cheese Balls',
      'Aloo Bhujia',
      "Moong Dal",
      'Tasty Nuts',
      'Mix Bhel'
    ],
  },
  {
    category: 'Healthy & Wellness',
    items: [
      'Organic Honey',
      'Mixed Seeds Jar (Pumpkin, Sunflower, Flax)',
      'Girnar Tea',
      'Detox Tea',
      'Energy Bars',
      'Dry Fruit Laddoos',
      'Jaggery Bites / Dates Rolls',
    ],
  },
  {
    category: 'Beverages',
    items: [
      'Airated soft drinks(Coke, Pepsi, Fanta)',
      'Juice packs (Mango, Orange, Mixed Fruit)',
      'Energy Drinks(Red Bull, Monster)',

    ],
  },
  {
    category: 'Festive Essentials',
    items: [
      'Decorative Diya Set',
      'Scented Candles',
      'Incense Sticks / Cones',
      'Rangoli Kit',
      'Festive Toran',
      'Puja Essentials Mini Pack',
    ],
  },
  {
    category: 'Lifestyle & Gifting Add-ons',
    items: [
      'Ceramic Mug',
      'Copper / Steel Bottle',
      'Coasters Set',
      'Desk Organizer',
      'Mini Photo Frame',
      'Keychain / Utility Pouch',
    ],
  },
  {
    category: 'Local Delicacies Of Goa',
    items: [
      'Dodol',
      'Bebinca',
      'Kokum Juice',
      'Jackfruit Chips',
      'Cookies',
      'Chocolates',
      'Chivda',
      'Sakar Pada'
    ]
  },
    {
    category: 'Personalisation',
    items: [
      'Custom Greeting Card',
      'Logo Branding (Corporate Orders)',
      'Custom Message Insert',
      'Theme-Based Packaging',
    ],
  }
];

export default function CustomizerPage() {
  const [currentStep, setCurrentStep] = useState<Step>('basket-type');
  const [selectedBasketType, setSelectedBasketType] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedContent, setSelectedContent] = useState<SelectedContent[]>([]);
  const [customItems, setCustomItems] = useState<{ [key: string]: string }>({});

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleItem = (category: string, item: string) => {
    setSelectedContent((prev) => {
      const existing = prev.find((c) => c.category === category);
      if (existing) {
        const itemExists = existing.items.includes(item);
        if (itemExists) {
          const updated = existing.items.filter((i) => i !== item);
          if (updated.length === 0) {
            return prev.filter((c) => c.category !== category);
          }
          return prev.map((c) =>
            c.category === category ? { ...c, items: updated } : c
          );
        } else {
          return prev.map((c) =>
            c.category === category
              ? { ...c, items: [...c.items, item] }
              : c
          );
        }
      } else {
        return [...prev, { category, items: [item] }];
      }
    });
  };

  const getSelectedItemsForCategory = (category: string): string[] => {
    const found = selectedContent.find((c) => c.category === category);
    return found ? found.items : [];
  };

  const handleBasketTypeNext = () => {
    if (selectedBasketType) {
      scrollToTop();
      setCurrentStep('basket-size');
    }
  };

  const handleSizeNext = () => {
    if (selectedSize) {
      scrollToTop();
      setCurrentStep('contents');
    }
  };

  const handleContentsNext = () => {
    if (selectedContent.length > 0) {
      scrollToTop();
      setCurrentStep('review');
    }
  };

  const handleGoBack = () => {
    scrollToTop();
    if (currentStep === 'basket-size') {
      setCurrentStep('basket-type');
    } else if (currentStep === 'contents') {
      setCurrentStep('basket-size');
    } else if (currentStep === 'review') {
      setCurrentStep('contents');
    }
  };

  const handleAddToCart = () => {
    const summaryText = `
      Basket Type: ${BASKET_TYPES.find((b) => b.id === selectedBasketType)?.name}
      Size: ${BASKET_SIZES.find((s) => s.id === selectedSize)?.name}
      Contents: ${selectedContent
        .map((c) => {
          const regularItems = c.items.filter((item) => !item.startsWith('[CUSTOM]'));
          const customItems = c.items.filter((item) => item.startsWith('[CUSTOM]')).map((item) => item.replace('[CUSTOM] ', ''));
          
          let text = '';
          if (regularItems.length > 0) {
            text = `${c.category}: ${regularItems.join(', ')}`;
          }
          if (customItems.length > 0) {
            if (text) {
              text += ` (Also include: ${customItems.join(', ')})`;
            } else {
              text = `${c.category}: ${customItems.join(', ')}`;
            }
          }
          return text;
        })
        .filter((text) => text.length > 0)
        .join(' | ')}
    `;

    const message = `Hi! I'd like to order a custom hamper with the following details:${summaryText}\n\nPlease provide a quote.`;
    const whatsappUrl = `https://wa.me/919421246733?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-blue-500 text-white py-12 sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Hamper Builder</h1>
          <p className="text-lg text-blue-100">Create your perfect custom hamper</p>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white border-b border-gray-200 py-6 sticky top-28 z-40">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between max-w-6xl">
            {['Basket Type', 'Basket Size', 'Contents', 'Review'].map(
              (label, idx) => (
                <div key={label} className="flex items-center flex-1">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                      idx === 0 && currentStep === 'basket-type'
                        ? 'bg-pink-600 text-white'
                        : idx < ['basket-type', 'basket-size', 'contents', 'review'].indexOf(currentStep) ||
                          (currentStep === 'review' && idx < 4)
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-300 text-gray-700'
                    }`}
                  >
                    {idx < ['basket-type', 'basket-size', 'contents', 'review'].indexOf(currentStep) ? (
                      <CheckCircle size={20} />
                    ) : (
                      idx + 1
                    )}
                  </div>
                  {idx < 3 && (
                    <div className="flex-1 h-0.5 mx-2 bg-gray-300"></div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Step 1: Basket Type */}
        {currentStep === 'basket-type' && (
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold text-pink-700 mb-8">Choose Your Basket Type</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {BASKET_TYPES.map((basket) => (
                <div
                  key={basket.id}
                  onClick={() => setSelectedBasketType(basket.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition ${
                    selectedBasketType === basket.id
                      ? 'border-pink-600 bg-pink-50'
                      : 'border-gray-200 bg-white hover:border-pink-300'
                  }`}
                >
                  <h3 className="text-sm font-bold text-gray-800 mb-1">{basket.name}</h3>
                  <p className="text-xs text-gray-600">{basket.description}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleBasketTypeNext}
                disabled={!selectedBasketType}
                className="bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-lg transition flex items-center gap-2"
              >
                Next Step <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Basket Size */}
        {currentStep === 'basket-size' && (
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold text-pink-700 mb-2">Choose Basket Size</h2>
            <p className="text-gray-600 mb-8">
              Selected: <span className="font-bold">{BASKET_TYPES.find((b) => b.id === selectedBasketType)?.name}</span>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {BASKET_SIZES.map((size) => (
                <div
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition ${
                    selectedSize === size.id
                      ? 'border-pink-600 bg-pink-50'
                      : 'border-gray-200 bg-white hover:border-pink-300'
                  }`}
                >
                  <h3 className="text-sm font-bold text-gray-800 mb-1">{size.name}</h3>
                  <p className="text-xs text-gray-600">{size.description}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleGoBack}
                className="text-pink-600 hover:text-pink-700 font-bold py-3 px-8 rounded-lg border border-pink-600 transition"
              >
                Back
              </button>
              <button
                onClick={handleSizeNext}
                disabled={!selectedSize}
                className="bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-lg transition flex items-center gap-2"
              >
                Next Step <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contents Selection */}
        {currentStep === 'contents' && (
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold text-pink-700 mb-2">Select Hamper Contents</h2>
            <p className="text-gray-600 mb-8">
              Choose items for your{' '}
              <span className="font-bold">{BASKET_SIZES.find((s) => s.id === selectedSize)?.name}</span> hamper
            </p>

            <div className="space-y-10 mb-8">
              {CONTENT_OPTIONS.map((category) => (
                <div key={category.category}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
                    <span className="text-sm bg-pink-600 text-white rounded-full px-3 py-1">
                      {getSelectedItemsForCategory(category.category).filter(i => !i.startsWith('[CUSTOM]')).length}/{category.items.length} selected
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
                    {category.items.map((item) => (
                      <label
                        key={item}
                        className="flex items-center space-x-2 p-3 rounded-lg border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50 cursor-pointer transition"
                      >
                        <input
                          type="checkbox"
                          checked={getSelectedItemsForCategory(category.category).includes(item)}
                          onChange={() => toggleItem(category.category, item)}
                          className="w-4 h-4 text-pink-600 rounded accent-pink-600"
                        />
                        <span className="text-sm text-gray-700 font-medium">{item}</span>
                      </label>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-4 rounded-lg">
                    <label className="block">
                      <span className="text-sm font-semibold text-gray-700 mb-2 block">
                        Add Custom Item for {category.category} (Optional)
                      </span>
                      <div className="flex gap-2 mb-3">
                        <input
                          type="text"
                          placeholder={'Please Specify'} 
                          value={customItems[category.category] || ''}
                          onChange={(e) =>
                            setCustomItems({
                              ...customItems,
                              [category.category]: e.target.value,
                            })
                          }
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' && customItems[category.category]?.trim()) {
                              e.preventDefault();
                              if (!getSelectedItemsForCategory(category.category).includes(customItems[category.category])) {
                                toggleItem(category.category, `[CUSTOM] ${customItems[category.category]}`);
                                setCustomItems({
                                  ...customItems,
                                  [category.category]: '',
                                });
                              }
                            }
                          }}
                          className="flex-1 px-4 py-2 border-2 border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 bg-white text-gray-900 font-medium placeholder-gray-500"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            if (customItems[category.category]?.trim()) {
                              if (!getSelectedItemsForCategory(category.category).includes(customItems[category.category])) {
                                toggleItem(category.category, `[CUSTOM] ${customItems[category.category]}`);
                                setCustomItems({
                                  ...customItems,
                                  [category.category]: '',
                                });
                              }
                            }
                          }}
                          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-lg transition whitespace-nowrap"
                        >
                          Add
                        </button>
                      </div>
                      
                      {getSelectedItemsForCategory(category.category)
                        .filter((item) => item.startsWith('[CUSTOM]'))
                        .length > 0 && (
                        <div className="mt-3 pt-3 border-t border-pink-300">
                          <p className="text-xs font-semibold text-gray-600 mb-2">Added Custom Items:</p>
                          <div className="flex flex-wrap gap-2">
                            {getSelectedItemsForCategory(category.category)
                              .filter((item) => item.startsWith('[CUSTOM]'))
                              .map((item) => (
                                <div
                                  key={item}
                                  className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full flex items-center gap-2"
                                >
                                  <span>{item.replace('[CUSTOM] ', '')}</span>
                                  <button
                                    type="button"
                                    onClick={() => toggleItem(category.category, item)}
                                    className="hover:bg-blue-600 rounded-full p-0.5 ml-1"
                                    title="Remove"
                                  >
                                    ✕
                                  </button>
                                </div>
                              ))}
                          </div>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Total Items Selected:</span> {selectedContent.reduce((sum, c) => sum + c.items.length, 0)} items
              </p>
            </div>

            <div className="flex justify-between">
              <button
                onClick={handleGoBack}
                className="text-pink-600 hover:text-pink-700 font-bold py-3 px-8 rounded-lg border border-pink-600 transition"
              >
                Back
              </button>
              <button
                onClick={handleContentsNext}
                disabled={selectedContent.length === 0}
                className="bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-lg transition flex items-center gap-2"
              >
                Review Hamper <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Review */}
        {currentStep === 'review' && (
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold text-pink-700 mb-8">Review Your Custom Hamper</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-sm font-bold text-gray-600 uppercase mb-2">Basket Type</h3>
                <p className="text-lg font-bold text-gray-800">
                  {BASKET_TYPES.find((b) => b.id === selectedBasketType)?.name}
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-sm font-bold text-gray-600 uppercase mb-2">Basket Size</h3>
                <p className="text-lg font-bold text-gray-800">
                  {BASKET_SIZES.find((s) => s.id === selectedSize)?.name}
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-sm font-bold text-gray-600 uppercase mb-2">Total Items</h3>
                <p className="text-lg font-bold text-gray-800">
                  {selectedContent.reduce((sum, c) => sum + c.items.length, 0)} items
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-8 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-gray-600 uppercase mb-6">Selected Contents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {selectedContent.map((category) => {
                  const regularItems = category.items.filter((item) => !item.startsWith('[CUSTOM]'));
                  const customItems = category.items.filter((item) => item.startsWith('[CUSTOM]')).map((item) => item.replace('[CUSTOM] ', ''));
                  
                  return (
                    <div key={category.category}>
                      <p className="font-bold text-gray-800 mb-3">{category.category}</p>
                      <div className="flex flex-wrap gap-2">
                        {regularItems.map((item) => (
                          <span
                            key={item}
                            className="bg-pink-600 text-white text-sm px-3 py-1 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                        {customItems.map((item) => (
                          <span
                            key={item}
                            className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full border border-blue-600"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={handleGoBack}
                className="text-pink-600 hover:text-pink-700 font-bold py-3 px-8 rounded-lg border border-pink-600 transition"
              >
                Back
              </button>
              <button
                onClick={handleAddToCart}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition flex items-center gap-2"
              >
                Send to WhatsApp <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
