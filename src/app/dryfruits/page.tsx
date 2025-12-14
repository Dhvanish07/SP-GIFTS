'use client';

import { Heart, ArrowRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type Step = 'quantity' | 'partitions' | 'selection' | 'boxtype' | 'boxquantity' | 'review';

interface DryFruit {
  id: string;
  name: string;
  description: string;
}

interface PartitionSelection {
  partitionNumber: number;
  selectedDryFruit: string;
}

const BOX_TYPES = [
  { id: 'wooden', name: 'Wooden Dry Fruit Box', description: 'Premium wooden packaging' },
  { id: 'mdf', name: 'MDF Decorative Dry Fruit Box', description: 'Elegant MDF finish' },
  { id: 'acrylic', name: 'Acrylic Premium Dry Fruit Box', description: 'Luxury acrylic design' },
  { id: 'designer', name: 'Designer Partitioned Dry Fruit Box', description: 'Modern partitioned design' },
  { id: 'glass', name: 'Premium Box with Glass Containers', description: 'Premium glass containers' },
];

const QUANTITIES = [
  { id: '1000', weight: '1000g', price: 1500, description: 'Premium assortment' },
  { id: '850', weight: '850g', price: 1250, description: 'Large box' },
  { id: '750', weight: '750g', price: 1100, description: 'Standard box' },
  { id: '500', weight: '500g', price: 800, description: 'Medium box' },
  { id: '200', weight: '200g', price: 400, description: 'Small box' },
];

const PARTITION_OPTIONS = [
  { id: '8', count: 8, description: '8 different varieties' },
  { id: '6', count: 6, description: '6 varieties' },
  { id: '4', count: 4, description: '4 varieties' },
  { id: '2', count: 2, description: '2 varieties' },
  { id: '1', count: 1, description: '1 variety (bulk)' },
];

const DRY_FRUITS: DryFruit[] = [
  { id: 'almonds', name: 'Almonds', description: 'Premium California almonds' },
  { id: 'cashews', name: 'Cashews', description: 'Roasted cashews (W240/W320)' },
  { id: 'pistachios', name: 'Pistachios', description: 'Salted or roasted' },
  { id: 'walnuts', name: 'Walnuts', description: 'Whole kernels' },
  { id: 'raisins', name: 'Raisins', description: 'Black or golden' },
  { id: 'dates', name: 'Dates', description: 'Arabian or Medjool' },
  { id: 'figs', name: 'Figs', description: 'Premium Anjeer' },
  { id: 'kiwi', name: 'Dried Kiwi', description: 'Tangy dried kiwi slices' },
  { id: 'apricots', name: 'Apricots', description: 'Premium dried apricots' },
];

export default function DryfruitsPage() {
  const [currentStep, setCurrentStep] = useState<Step>('quantity');
  const [selectedQuantity, setSelectedQuantity] = useState<string>('');
  const [selectedPartitions, setSelectedPartitions] = useState<string>('');
  const [selectedBoxType, setSelectedBoxType] = useState<string>('');
  const [selectedBoxQuantity, setSelectedBoxQuantity] = useState<number>(1);
  const [partitionSelections, setPartitionSelections] = useState<PartitionSelection[]>([]);
  const [currentPartitionIndex, setCurrentPartitionIndex] = useState<number>(0);

  const handleQuantitySelect = (quantityId: string) => {
    setSelectedQuantity(quantityId);
  };

  const handlePartitionSelect = (partitionId: string) => {
    setSelectedPartitions(partitionId);
    const count = parseInt(partitionId);
    setPartitionSelections(
      Array.from({ length: count }, (_, i) => ({
        partitionNumber: i + 1,
        selectedDryFruit: '',
      }))
    );
    setCurrentPartitionIndex(0);
    setCurrentStep('selection');
  };

  const handleDryFruitSelect = (dryFruitId: string) => {
    const updated = [...partitionSelections];
    updated[currentPartitionIndex].selectedDryFruit = dryFruitId;
    setPartitionSelections(updated);

    if (currentPartitionIndex < updated.length - 1) {
      setCurrentPartitionIndex(currentPartitionIndex + 1);
    } else {
      setCurrentStep('boxtype');
    }
  };

  const handleBoxTypeSelect = (boxTypeId: string) => {
    setSelectedBoxType(boxTypeId);
    setCurrentStep('boxquantity');
  };

  const handleBoxQuantitySelect = () => {
    if (selectedBoxQuantity >= 1) {
      setCurrentStep('review');
    }
  };

  const handleBackToPartition = () => {
    setCurrentStep('partitions');
    setSelectedPartitions('');
    setPartitionSelections([]);
  };

  const handleBackToQuantity = () => {
    setCurrentStep('quantity');
    setSelectedQuantity('');
    setSelectedBoxType('');
  };

  const quantityData = QUANTITIES.find((q) => q.id === selectedQuantity);
  const selectedPartitionCount = parseInt(selectedPartitions);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-blue-500 text-white py-12 sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Customize Your Dry Fruits Box</h1>
          <p className="text-lg text-blue-100">Build your perfect assortment</p>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white border-b border-gray-200 py-6 sticky top-28 z-40">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between max-w-6xl">
            {['Quantity', 'Partitions', 'Selection', 'Box Type', 'Quantity', 'Review'].map(
              (label, idx) => (
                <div key={label} className="flex items-center flex-1">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                      (idx === 0 && currentStep === 'quantity') ||
                      (idx === 1 && currentStep === 'partitions') ||
                      (idx === 2 && currentStep === 'selection') ||
                      (idx === 3 && currentStep === 'boxtype') ||
                      (idx === 4 && currentStep === 'boxquantity') ||
                      (idx === 5 && currentStep === 'review')
                        ? 'bg-pink-600 text-white'
                        : (idx === 0 && selectedQuantity) ||
                          (idx === 1 && selectedPartitions) ||
                          (idx === 2 && partitionSelections.length > 0) ||
                          (idx === 3 && selectedBoxType) ||
                          (idx === 4 && selectedBoxQuantity) ||
                          (idx === 5 && currentStep === 'review')
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-300 text-gray-700'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  {idx < 5 && (
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
        {/* Step 1: Quantity Selection */}
        {currentStep === 'quantity' && (
          <div className="bg-white rounded-lg shadow-lg p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-700 mb-8">Select Total Quantity</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {QUANTITIES.map((qty) => (
                <div
                  key={qty.id}
                  onClick={() => handleQuantitySelect(qty.id)}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition text-center ${
                    selectedQuantity === qty.id
                      ? 'border-pink-600 bg-pink-50'
                      : 'border-gray-200 bg-white hover:border-pink-300'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{qty.weight}</h3>
                  <p className="text-sm text-gray-600">{qty.description}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setCurrentStep('partitions')}
                disabled={!selectedQuantity}
                className="bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-lg transition flex items-center gap-2"
              >
                Next Step <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Partition Selection */}
        {currentStep === 'partitions' && (
          <div className="bg-white rounded-lg shadow-lg p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-700 mb-2">Select Number of Partitions</h2>
            <p className="text-gray-600 mb-8">
              Selected Quantity: <span className="font-bold">{quantityData?.weight}</span>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {PARTITION_OPTIONS.map((partition) => (
                <div
                  key={partition.id}
                  onClick={() => handlePartitionSelect(partition.id)}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition text-center ${
                    selectedPartitions === partition.id
                      ? 'border-pink-600 bg-pink-50'
                      : 'border-gray-200 bg-white hover:border-pink-300'
                  }`}
                >
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{partition.count}</h3>
                  <p className="text-sm text-gray-600">{partition.description}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleBackToQuantity}
                className="text-pink-600 hover:text-pink-700 font-bold py-3 px-8 rounded-lg border border-pink-600 transition flex items-center gap-2"
              >
                <ChevronLeft size={20} /> Back
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Partition Selection */}
        {currentStep === 'selection' && (
          <div className="bg-white rounded-lg shadow-lg p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-700 mb-8">
              Select Dry Fruits for Partition {currentPartitionIndex + 1} of {selectedPartitionCount}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {DRY_FRUITS.map((fruit) => {
                const isAlreadySelected = partitionSelections.some(
                  (sel) => sel.selectedDryFruit === fruit.id
                );
                return (
                  <div
                    key={fruit.id}
                    onClick={() => !isAlreadySelected && handleDryFruitSelect(fruit.id)}
                    className={`p-6 rounded-lg border-2 transition ${
                      isAlreadySelected
                        ? 'border-gray-300 bg-gray-100 cursor-not-allowed opacity-50'
                        : 'border-gray-200 hover:border-pink-400 hover:bg-pink-50 cursor-pointer'
                    }`}
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{fruit.name}</h3>
                    <p className="text-sm text-gray-600">{fruit.description}</p>
                    {isAlreadySelected && (
                      <p className="text-xs font-bold text-red-600 mt-2">Already Selected</p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between">
              <button
                onClick={handleBackToPartition}
                className="text-pink-600 hover:text-pink-700 font-bold py-3 px-8 rounded-lg border border-pink-600 transition flex items-center gap-2"
              >
                <ChevronLeft size={20} /> Back
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Box Type Selection */}
        {currentStep === 'boxtype' && (
          <div className="bg-white rounded-lg shadow-lg p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-700 mb-8">Select Your Box Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              {BOX_TYPES.map((boxType) => (
                <div
                  key={boxType.id}
                  onClick={() => handleBoxTypeSelect(boxType.id)}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition text-center ${
                    selectedBoxType === boxType.id
                      ? 'border-pink-600 bg-pink-50'
                      : 'border-gray-200 bg-white hover:border-pink-300'
                  }`}
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{boxType.name}</h3>
                  <p className="text-sm text-gray-600">{boxType.description}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => {
                  setCurrentStep('selection');
                  setCurrentPartitionIndex(selectedPartitionCount - 1);
                }}
                className="text-pink-600 hover:text-pink-700 font-bold py-3 px-8 rounded-lg border border-pink-600 transition flex items-center gap-2"
              >
                <ChevronLeft size={20} /> Back
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Box Quantity Selection */}
        {currentStep === 'boxquantity' && (
          <div className="bg-white rounded-lg shadow-lg p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-700 mb-8">Select Number of Boxes</h2>
            
            <div className="mb-12 flex flex-col items-center gap-8">
              {/* Visual Box Representation - Fixed Size, No Scrolling */}
              <div className="bg-gradient-to-b from-pink-50 to-blue-50 p-8 rounded-lg border-2 border-pink-300 w-full max-w-2xl h-64 flex flex-wrap items-start justify-center gap-2 overflow-hidden content-start">
                {selectedBoxQuantity > 0 ? (
                  Array.from({ length: Math.min(selectedBoxQuantity, 1000) }).map((_, idx) => {
                    // Calculate dynamic box size to fit in container
                    // Container: ~448px width (512 - 32 padding), 256px height
                    let boxSize;
                    let visibleBoxes;
                    
                    if (selectedBoxQuantity <= 20) {
                      boxSize = 70;
                      visibleBoxes = selectedBoxQuantity;
                    } else if (selectedBoxQuantity <= 50) {
                      boxSize = 50;
                      visibleBoxes = selectedBoxQuantity;
                    } else {
                      boxSize = 35;
                      visibleBoxes = 100;
                    }

                    // Only show first N boxes
                    if (idx >= visibleBoxes) {
                      if (idx === visibleBoxes) {
                        return (
                          <div
                            key={`more-${idx}`}
                            className="bg-pink-600 rounded-lg shadow-md flex items-center justify-center text-white font-bold text-sm"
                            style={{
                              width: `${boxSize}px`,
                              height: `${boxSize * 1.33}px`,
                              animation: `fadeIn 0.2s ease-in-out`,
                              minWidth: `${boxSize}px`,
                              minHeight: `${boxSize * 1.33}px`,
                              flexShrink: 0,
                            }}
                          >
                            +{selectedBoxQuantity - visibleBoxes}
                          </div>
                        );
                      }
                      return null;
                    }
                    
                    return (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg shadow-md hover:shadow-lg transition flex items-center justify-center text-white font-bold"
                        style={{
                          width: `${boxSize}px`,
                          height: `${boxSize * 1.33}px`,
                          animation: `fadeIn 0.2s ease-in-out`,
                          fontSize: `${boxSize * 0.4}px`,
                          minWidth: `${boxSize}px`,
                          minHeight: `${boxSize * 1.33}px`,
                          flexShrink: 0,
                        }}
                      >
                        📦
                      </div>
                    );
                  })
                ) : (
                  <p className="text-gray-400 text-lg">Select a quantity to visualize</p>
                )}
              </div>

              {/* Horizontal Range Slider */}
              <div className="w-full max-w-2xl">
                <label className="text-sm font-semibold text-gray-600 mb-2 block">Drag to select</label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={selectedBoxQuantity}
                  onChange={(e) => setSelectedBoxQuantity(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-600"
                  style={{
                    background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${(selectedBoxQuantity / 1000) * 100}%, #e5e7eb ${(selectedBoxQuantity / 1000) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0</span>
                  <span>1000</span>
                </div>
              </div>

              {/* Combined Display & Input Box */}
              <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-8 rounded-lg border-2 border-pink-600 text-center w-full max-w-2xl">
                <p className="text-gray-600 font-semibold mb-4">Number of Boxes</p>
                <input
                  type="number"
                  min="0"
                  max="1000"
                  value={selectedBoxQuantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || 0;
                    setSelectedBoxQuantity(Math.min(Math.max(val, 0), 1000));
                  }}
                  className="w-full px-4 py-4 border-2 border-pink-400 rounded-lg text-center text-5xl font-bold text-pink-700 focus:border-pink-600 focus:outline-none bg-white"
                />
              </div>

              {/* Plus and Minus Buttons */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSelectedBoxQuantity(Math.max(0, selectedBoxQuantity - 1))}
                  className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition text-2xl w-16 h-16 flex items-center justify-center"
                >
                  −
                </button>
                <button
                  onClick={() => setSelectedBoxQuantity(Math.min(1000, selectedBoxQuantity + 1))}
                  className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition text-2xl w-16 h-16 flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            <style>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: scale(0.8);
                }
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }
              input[type="range"]::-webkit-slider-thumb {
                appearance: none;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: #ec4899;
                cursor: pointer;
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
              }
              input[type="range"]::-moz-range-thumb {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: #ec4899;
                cursor: pointer;
                border: none;
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
              }
            `}</style>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep('boxtype')}
                className="text-pink-600 hover:text-pink-700 font-bold py-3 px-8 rounded-lg border border-pink-600 transition flex items-center gap-2"
              >
                <ChevronLeft size={20} /> Back
              </button>
              <button
                onClick={handleBoxQuantitySelect}
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg transition flex items-center gap-2"
              >
                Next Step <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 6: Review */}
        {currentStep === 'review' && (
          <div className="bg-white rounded-lg shadow-lg p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-700 mb-8">Review Your Dry Fruits Box</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
              <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-sm font-bold text-gray-600 uppercase mb-2">Total Quantity</h3>
                <p className="text-2xl font-bold text-gray-800">{quantityData?.weight}</p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-sm font-bold text-gray-600 uppercase mb-2">Partitions</h3>
                <p className="text-2xl font-bold text-gray-800">{selectedPartitionCount}</p>
                <p className="text-sm text-gray-600 mt-2">varieties</p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-sm font-bold text-gray-600 uppercase mb-2">Box Type</h3>
                <p className="text-md font-bold text-gray-800">{BOX_TYPES.find(b => b.id === selectedBoxType)?.name}</p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-sm font-bold text-gray-600 uppercase mb-2">Number of Boxes</h3>
                <p className="text-2xl font-bold text-gray-800">{selectedBoxQuantity}</p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-sm font-bold text-gray-600 uppercase mb-2">Status</h3>
                <p className="text-lg font-bold text-green-600">Ready to Order</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-8 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-6">Your Selection</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {partitionSelections.map((partition, idx) => {
                  const selectedFruit = DRY_FRUITS.find((f) => f.id === partition.selectedDryFruit);
                  return (
                    <div key={idx} className="bg-white p-4 rounded-lg shadow">
                      <div className="text-center">
                        <p className="text-xs font-semibold text-gray-500 mb-2">Partition {idx + 1}</p>
                        <p className="text-md font-bold text-pink-700">{selectedFruit?.name}</p>
                        <p className="text-xs text-gray-600 mt-1">{selectedFruit?.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep('boxquantity')}
                className="text-pink-600 hover:text-pink-700 font-bold py-3 px-8 rounded-lg border border-pink-600 transition flex items-center gap-2"
              >
                <ChevronLeft size={20} /> Back
              </button>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    const cartItem = {
                      id: Date.now(),
                      name: `Dry Fruits Box - ${BOX_TYPES.find(b => b.id === selectedBoxType)?.name}`,
                      range: `${selectedPartitionCount} varieties`,
                      quantity: selectedBoxQuantity,
                      type: 'dryfruits',
                      details: {
                        quantityPerBox: quantityData?.weight,
                        partitions: selectedPartitionCount,
                        boxType: selectedBoxType,
                        selections: partitionSelections.map((p, i) => {
                          const fruit = DRY_FRUITS.find((f) => f.id === p.selectedDryFruit);
                          return { partition: i + 1, name: fruit?.name };
                        })
                      }
                    };
                    
                    const existingCart = JSON.parse(localStorage.getItem('hamperCart') || '[]');
                    existingCart.push(cartItem);
                    localStorage.setItem('hamperCart', JSON.stringify(existingCart));
                    alert('Added to cart! You can continue shopping or view your cart.');
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition flex items-center gap-2"
                >
                  🛒 Add to Cart
                </button>
                <a
                  href={`https://wa.me/919421246733?text=${encodeURIComponent(
                    `Hi! I'd like to order a custom dry fruits box.\n\n` +
                    `📦 ORDER DETAILS:\n` +
                    `━━━━━━━━━━━━━━━━━━━━━\n` +
                    `Quantity per Box: ${quantityData?.weight}\n` +
                    `Partitions per Box: ${selectedPartitionCount} varieties\n` +
                    `Box Type: ${BOX_TYPES.find(b => b.id === selectedBoxType)?.name}\n` +
                    `Number of Boxes: ${selectedBoxQuantity}\n\n` +
                    `🎁 SELECTION:\n` +
                    `━━━━━━━━━━━━━━━━━━━━━\n` +
                    `${partitionSelections.map((p, i) => {
                      const fruit = DRY_FRUITS.find((f) => f.id === p.selectedDryFruit);
                      return `Partition ${i + 1}: ${fruit?.name}`;
                    }).join('\n')}\n\n` +
                    `Please provide a quote for this order.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition flex items-center gap-2"
                >
                  Send to WhatsApp <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
