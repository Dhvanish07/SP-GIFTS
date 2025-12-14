'use client';

import { useState } from 'react';
import { ArrowRight, ChevronLeft, Check } from 'lucide-react';

type Step = 'items' | 'packing' | 'customization' | 'review';

interface Selection {
  items: {
    [key: string]: number;
  };
  customItems: Array<{
    id: string;
    name: string;
    quantity: number;
  }>;
  itemsOtherInput: string;
  itemsOtherQuantity: number;
  packingType: string | null;
  packingTypeOther: string;
  customizationNotes: string;
}

const TROUSSEAU_ITEMS = [
  { id: 'saree-packing', name: 'Saree Packing', description: 'Specialized packaging for sarees' },
  { id: 'lehenga-packing', name: 'Lehenga Packing', description: 'Custom packaging for lehengas' },
  { id: 'dress-material', name: 'Dress Material Packing', description: 'Elegant fabric packaging' },
  { id: 'suit-sherwani', name: 'Suit & Sherwani Packing', description: 'Premium suit and sherwani packaging' },
  { id: 'jewellery-packing', name: 'Jewellery Packing', description: 'Luxurious jewelry packaging' },
  { id: 'footwear-packing', name: 'Footwear Packing', description: 'Protective footwear packaging' },
  { id: 'cosmetics-packing', name: 'Cosmetics & Accessories Packing', description: 'Beauty and accessories packaging' },
  { id: 'groom-essentials', name: 'Groom Essentials Packing', description: 'Complete groom essentials package' },
  { id: 'bride-essentials', name: 'Bride Essentials Packing', description: 'Complete bride essentials package' },
  { id: 'return-gift', name: 'Return Gift Packing', description: 'Elegant return gift packaging' },
];

const PACKING_TYPES = [
  { id: 'standard', name: 'Standard Packaging', description: 'Classic gift boxes with ribbon' },
  { id: 'premium', name: 'Premium Packaging', description: 'Luxury gift boxes with silk lining' },
  { id: 'eco', name: 'Eco-Friendly Packaging', description: 'Sustainable jute & kraft boxes' },
  { id: 'luxury', name: 'Luxury Gold Foil Packaging', description: 'Premium boxes with gold foil detailing' },
  { id: 'custom', name: 'Custom Branding', description: 'Personalized packaging with name/logo' },
  { id: 'other', name: 'Other', description: 'Custom packing requirements' },
];

export default function TrousseauPackingPage() {
  const [currentStep, setCurrentStep] = useState<Step>('items');
  const [selection, setSelection] = useState<Selection>({
    items: {},
    customItems: [],
    itemsOtherInput: '',
    itemsOtherQuantity: 1,
    packingType: null,
    packingTypeOther: '',
    customizationNotes: '',
  });

  const getTotalItems = () => {
    const predefinedTotal = Object.values(selection.items).reduce((sum, qty) => sum + qty, 0);
    const customTotal = selection.customItems.reduce((sum, item) => sum + item.quantity, 0);
    return predefinedTotal + customTotal;
  };

  const getItemsDescription = () => {
    const itemsList = Object.entries(selection.items)
      .filter(([_, qty]) => qty > 0)
      .map(([itemId, qty]) => {
        const item = TROUSSEAU_ITEMS.find(t => t.id === itemId);
        return `${item?.name} (${qty})`;
      })
      .join(', ');
    
    const customItemsList = selection.customItems
      .map(item => `${item.name} (${item.quantity})`)
      .join(', ');
    
    if (itemsList && customItemsList) {
      return `${itemsList}, ${customItemsList}`;
    }
    return itemsList || customItemsList;
  };

  const addCustomItem = () => {
    if (!selection.itemsOtherInput.trim()) {
      alert('Please enter an item name');
      return;
    }

    const newCustomItems = [...selection.customItems];
    newCustomItems.push({
      id: Date.now().toString(),
      name: selection.itemsOtherInput,
      quantity: selection.itemsOtherQuantity,
    });

    setSelection({
      ...selection,
      customItems: newCustomItems,
      itemsOtherInput: '',
      itemsOtherQuantity: 1,
    });
  };

  const removeCustomItem = (id: string) => {
    const newCustomItems = selection.customItems.filter(item => item.id !== id);
    setSelection({
      ...selection,
      customItems: newCustomItems,
    });
  };

  const getPackingTypeName = () => {
    if (selection.packingType === 'other') {
      return selection.packingTypeOther;
    }
    return PACKING_TYPES.find(p => p.id === selection.packingType)?.name || '';
  };

  const handleAddToCart = () => {
    if (getTotalItems() === 0) {
      alert('Please select items before proceeding');
      return;
    }

    if (!selection.packingType) {
      alert('Please select a packing type');
      return;
    }

    if (selection.packingType === 'other' && !selection.packingTypeOther) {
      alert('Please specify your custom packing type');
      return;
    }

    const cartItem = {
      id: Date.now(),
      name: 'Trousseau Packing',
      range: `${getTotalItems()} items`,
      quantity: 1,
      type: 'trousseau',
      details: {
        items: selection.items,
        customItems: selection.customItems,
        packingType: getPackingTypeName(),
        customizationNotes: selection.customizationNotes,
      }
    };

    const existingCart = JSON.parse(localStorage.getItem('hamperCart') || '[]');
    existingCart.push(cartItem);
    localStorage.setItem('hamperCart', JSON.stringify(existingCart));
    alert('✓ Added to cart! Proceed to checkout.');
  };

  const handleWhatsApp = () => {
    if (getTotalItems() === 0) {
      alert('Please select items before contacting us');
      return;
    }

    if (!selection.packingType) {
      alert('Please select a packing type');
      return;
    }

    if (selection.packingType === 'other' && !selection.packingTypeOther) {
      alert('Please specify your custom packing type');
      return;
    }

    const itemsText = Object.entries(selection.items)
      .filter(([_, qty]) => qty > 0)
      .map(([itemId, qty]) => {
        const item = TROUSSEAU_ITEMS.find(t => t.id === itemId);
        return `• ${item?.name} - ${qty} unit(s)`;
      })
      .join('\n');

    const customItemsText = selection.customItems
      .map(item => `• ${item.name} - ${item.quantity} unit(s)`)
      .join('\n');

    const finalItemsText = itemsText && customItemsText
      ? `${itemsText}\n${customItemsText}`
      : itemsText || customItemsText;

    const message = `Hi! I'm interested in a custom trousseau packing.\n\n` +
      `💍 TROUSSEAU REQUIREMENTS:\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Items Required:\n${finalItemsText}\n\n` +
      `Packaging Type: ${getPackingTypeName()}\n\n` +
      `${selection.customizationNotes ? `Special Requests:\n${selection.customizationNotes}\n\n` : ''}` +
      `Please provide pricing and delivery timeline.`;

    const whatsappUrl = `https://wa.me/919421246733?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-12 sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">✨ Craft Your Perfect Trousseau</h1>
          <p className="text-lg text-purple-100">Celebrate your special moment with curated wedding collections</p>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white border-b border-gray-200 py-6 sticky top-28 z-40">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between max-w-6xl">
            {['Items', 'Packing', 'Customization', 'Review'].map(
              (label, idx) => (
                <div key={label} className="flex items-center flex-1">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                      (['items', 'packing', 'customization', 'review'][idx] === currentStep)
                        ? 'bg-pink-600 text-white'
                        : (['items', 'packing', 'customization', 'review'].indexOf(currentStep) > idx)
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-300 text-gray-700'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div className={`ml-3 text-sm font-semibold ${currentStep === ['items', 'packing', 'customization', 'review'][idx] ? 'text-pink-600' : 'text-gray-600'}`}>
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
        {/* Step 1: Select Items with Quantities */}
        {currentStep === 'items' && (
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold text-pink-700 mb-2">Step 1: Select Items & Quantities</h2>
            <p className="text-gray-600 mb-8">Choose the trousseau items and specify how many of each you need</p>

            <div className="space-y-4 mb-8">
              {TROUSSEAU_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-lg hover:border-pink-400 hover:bg-pink-50 transition"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-lg">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>

                  <div className="flex items-center gap-3 ml-6">
                    <button
                      onClick={() => {
                        const newItems = { ...selection.items };
                        const currentQty = newItems[item.id] || 0;
                        if (currentQty > 0) {
                          newItems[item.id] = currentQty - 1;
                        }
                        setSelection({ ...selection, items: newItems });
                      }}
                      className="px-3 py-2 bg-pink-200 text-pink-700 font-bold rounded hover:bg-pink-300 transition"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="0"
                      value={selection.items[item.id] || 0}
                      onChange={(e) => {
                        const newItems = { ...selection.items };
                        const value = Math.max(0, parseInt(e.target.value) || 0);
                        if (value === 0) {
                          delete newItems[item.id];
                        } else {
                          newItems[item.id] = value;
                        }
                        setSelection({ ...selection, items: newItems });
                      }}
                      className="w-16 px-3 py-2 border-2 border-pink-300 rounded text-center text-gray-900 bg-white focus:outline-none focus:border-pink-600"
                    />
                    <button
                      onClick={() => {
                        const newItems = { ...selection.items };
                        const currentQty = newItems[item.id] || 0;
                        newItems[item.id] = currentQty + 1;
                        setSelection({ ...selection, items: newItems });
                      }}
                      className="px-3 py-2 bg-pink-200 text-pink-700 font-bold rounded hover:bg-pink-300 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              {/* Other Option */}
              <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-pink-400 hover:bg-pink-50 transition">
                <label className="flex items-center cursor-pointer mb-4">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-lg">Add Other Items</p>
                    <p className="text-sm text-gray-600">Add custom items not listed</p>
                  </div>
                </label>

                <div className="space-y-4">
                  {/* Item Name Input */}
                  <div>
                    <label className="block text-sm text-gray-600 font-semibold mb-2">Item Name</label>
                    <input
                      type="text"
                      value={selection.itemsOtherInput}
                      onChange={(e) => setSelection({ ...selection, itemsOtherInput: e.target.value })}
                      placeholder="E.g., Bridal Shoes, Henna Set, etc."
                      className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-600 text-gray-900 bg-white placeholder-gray-500"
                    />
                  </div>

                  {/* Quantity Selector */}
                  <div>
                    <label className="block text-sm text-gray-600 font-semibold mb-2">Quantity</label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelection({ ...selection, itemsOtherQuantity: Math.max(1, selection.itemsOtherQuantity - 1) })}
                        className="px-4 py-2 bg-pink-200 text-pink-700 font-bold rounded hover:bg-pink-300 transition"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={selection.itemsOtherQuantity}
                        onChange={(e) => setSelection({ ...selection, itemsOtherQuantity: Math.max(1, parseInt(e.target.value) || 1) })}
                        className="w-16 px-3 py-2 border-2 border-pink-300 rounded text-center text-gray-900 bg-white focus:outline-none focus:border-pink-600"
                      />
                      <button
                        onClick={() => setSelection({ ...selection, itemsOtherQuantity: selection.itemsOtherQuantity + 1 })}
                        className="px-4 py-2 bg-pink-200 text-pink-700 font-bold rounded hover:bg-pink-300 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Add Button */}
                  <button
                    onClick={addCustomItem}
                    className="w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-lg hover:from-pink-700 hover:to-purple-700 transition"
                  >
                    + Add Item
                  </button>
                </div>

                {/* Display Added Items */}
                {selection.customItems.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-pink-200">
                    <p className="text-sm text-gray-600 font-semibold mb-3">Added Items:</p>
                    <div className="space-y-2">
                      {selection.customItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between bg-white p-3 rounded-lg border border-pink-200">
                          <span className="text-gray-900 font-medium">{item.name} <span className="text-pink-600 font-bold">x{item.quantity}</span></span>
                          <button
                            onClick={() => removeCustomItem(item.id)}
                            className="px-3 py-1 bg-red-100 text-red-600 font-semibold rounded hover:bg-red-200 transition text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {getTotalItems() > 0 && (
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-8">
                <p className="text-sm text-blue-600 font-semibold">Total Items Selected: <span className="text-lg text-blue-700">{getTotalItems()}</span></p>
              </div>
            )}

            <div className="flex justify-between">
              <button disabled className="px-6 py-3 text-gray-400 font-semibold">← Back</button>
              <button
                onClick={() => setCurrentStep('packing')}
                disabled={getTotalItems() === 0}
                className="flex items-center px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Select Packing Type */}
        {currentStep === 'packing' && (
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold text-pink-700 mb-2">Step 2: Choose Packing Type</h2>
            <p className="text-gray-600 mb-4">Selected Items: <span className="font-semibold text-pink-600">{getItemsDescription()}</span></p>

            <p className="text-gray-600 mb-8">Select how you'd like your trousseau to be packaged</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {PACKING_TYPES.map((packing) => (
                <label
                  key={packing.id}
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                    selection.packingType === packing.id
                      ? 'border-pink-600 bg-pink-50'
                      : 'border-gray-200 hover:border-pink-400 hover:bg-pink-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="packing"
                    checked={selection.packingType === packing.id}
                    onChange={() => setSelection({ ...selection, packingType: packing.id, packingTypeOther: '' })}
                    className="w-5 h-5 text-pink-600"
                  />
                  <div className="ml-4 flex-1">
                    <p className="font-semibold text-gray-900">{packing.name}</p>
                    <p className="text-sm text-gray-600">{packing.description}</p>
                  </div>
                </label>
              ))}

              {/* Other Packing Option */}
              <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition col-span-1 md:col-span-2 ${
                selection.packingType === 'other'
                  ? 'border-pink-600 bg-pink-50'
                  : 'border-gray-200 hover:border-pink-400 hover:bg-pink-50'
              }`}>
                <input
                  type="radio"
                  name="packing"
                  checked={selection.packingType === 'other'}
                  onChange={() => setSelection({ ...selection, packingType: 'other' })}
                  className="w-5 h-5 text-pink-600"
                />
                <div className="ml-4 flex-1">
                  <p className="font-semibold text-gray-900">Other Packing Type</p>
                  <p className="text-sm text-gray-600">Specify your own packing requirements</p>
                </div>
              </label>
            </div>

            {selection.packingType === 'other' && (
              <input
                type="text"
                value={selection.packingTypeOther}
                onChange={(e) => setSelection({ ...selection, packingTypeOther: e.target.value })}
                placeholder="E.g., Eco-friendly with personalized labels, luxury velvet boxes, etc."
                className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-600 text-gray-900 bg-white placeholder-gray-500 mb-8"
              />
            )}

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep('items')}
                className="flex items-center px-8 py-3 border-2 border-pink-600 text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition"
              >
                <ChevronLeft className="mr-2" size={20} /> Back
              </button>
              <button
                onClick={() => setCurrentStep('customization')}
                disabled={!selection.packingType || (selection.packingType === 'other' && !selection.packingTypeOther)}
                className="flex items-center px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Customization Notes */}
        {currentStep === 'customization' && (
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold text-pink-700 mb-2">Step 3: Special Requests & Notes</h2>
            <p className="text-gray-600 mb-8">Tell us about any special customization needs, preferences, or requirements</p>

            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-4">Your Special Requests</label>
              <textarea
                value={selection.customizationNotes}
                onChange={(e) => setSelection({ ...selection, customizationNotes: e.target.value })}
                placeholder="E.g., Monogramming with initials, specific color combinations, delivery date requirements, special packaging requests, welcome gifts for guests, etc."
                className="w-full px-6 py-4 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-600 text-gray-900 bg-white placeholder-gray-500 resize-none"
                rows={8}
              />
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep('packing')}
                className="flex items-center px-8 py-3 border-2 border-pink-600 text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition"
              >
                <ChevronLeft className="mr-2" size={20} /> Back
              </button>
              <button
                onClick={() => setCurrentStep('review')}
                className="flex items-center px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition"
              >
                Next <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Review & Add to Cart */}
        {currentStep === 'review' && (
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold text-pink-700 mb-8">Step 4: Review Your Order</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Order Summary */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-8 border-2 border-pink-200">
                <h3 className="text-xl font-bold text-pink-700 mb-6">✨ Your Trousseau Package</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-2">Items Selected:</p>
                    <div className="bg-white rounded-lg p-4 border border-pink-200">
                      {Object.entries(selection.items)
                        .filter(([_, qty]) => qty > 0)
                        .map(([itemId, qty]) => {
                          const item = TROUSSEAU_ITEMS.find(t => t.id === itemId);
                          return (
                            <div key={itemId} className="flex items-center justify-between py-2 border-b border-pink-100 last:border-b-0">
                              <span className="text-gray-900 font-medium">{item?.name}</span>
                              <span className="bg-pink-200 text-pink-700 px-3 py-1 rounded-full text-sm font-bold">{qty}</span>
                            </div>
                          );
                        })}
                    </div>
                    <p className="text-lg text-pink-700 font-bold mt-3">Total Items: {getTotalItems()}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-2">Packing Type:</p>
                    <p className="text-lg text-gray-900 font-semibold bg-white rounded-lg p-4 border border-pink-200">{getPackingTypeName()}</p>
                  </div>

                  {selection.customizationNotes && (
                    <div>
                      <p className="text-sm text-gray-600 font-semibold mb-2">Special Requests:</p>
                      <p className="text-gray-900 bg-white rounded-lg p-4 border border-pink-200 whitespace-pre-wrap">{selection.customizationNotes}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col justify-center space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-lg rounded-lg hover:from-pink-700 hover:to-purple-700 transition transform hover:scale-105"
                >
                  🛒 Add to Cart
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="w-full px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-lg hover:bg-green-700 transition transform hover:scale-105"
                >
                  💬 Ask for Custom Quote on WhatsApp
                </button>

                <button
                  onClick={() => setCurrentStep('customization')}
                  className="w-full px-8 py-3 border-2 border-pink-600 text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition"
                >
                  Edit Selection
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
