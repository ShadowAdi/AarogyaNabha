import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Filter, 
  Star, 
  Clock, 
  Navigation,
  Pill,
  ShoppingCart,
  Package,
  Truck,
  AlertCircle,
  CheckCircle,
  DollarSign,
  Store,
  User,
  Heart
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MedicalShopSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('all');
  const [maxDistance, setMaxDistance] = useState('10');
  const [sortBy, setSortBy] = useState('distance');
  const navigate=useNavigate()

  // Mock medical shops data
  const medicalShops = [
    {
      id: 1,
      name: 'Apollo Pharmacy',
      owner: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      address: 'Shop No. 12, Green Valley Market, Sector 18, Gurgaon',
      area: 'Gurgaon',
      distance: 2.3,
      rating: 4.5,
      reviews: 234,
      isOpen: true,
      openHours: '8:00 AM - 10:00 PM',
      delivery: true,
      medicines: [
        { name: 'Paracetamol 500mg', price: 25, brand: 'Crocin', inStock: true, quantity: '10 tablets' },
        { name: 'Amoxicillin 500mg', price: 120, brand: 'Amoxil', inStock: true, quantity: '10 capsules' },
        { name: 'Metformin 500mg', price: 45, brand: 'Glycomet', inStock: false, quantity: '15 tablets' },
        { name: 'Atorvastatin 10mg', price: 89, brand: 'Lipitor', inStock: true, quantity: '10 tablets' }
      ],
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: 'MedPlus Pharmacy',
      owner: 'Priya Sharma',
      phone: '+91 98765 43211',
      address: '45, Main Road, DLF Phase 2, Gurgaon',
      area: 'Gurgaon',
      distance: 3.7,
      rating: 4.3,
      reviews: 187,
      isOpen: true,
      openHours: '9:00 AM - 9:00 PM',
      delivery: true,
      medicines: [
        { name: 'Paracetamol 500mg', price: 22, brand: 'Dolo', inStock: true, quantity: '10 tablets' },
        { name: 'Cetirizine 10mg', price: 35, brand: 'Zyrtec', inStock: true, quantity: '10 tablets' },
        { name: 'Omeprazole 20mg', price: 65, brand: 'Omez', inStock: true, quantity: '10 capsules' },
        { name: 'Vitamin D3', price: 150, brand: 'Calcirol', inStock: true, quantity: '4 sachets' }
      ],
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      name: 'HealthKart Pharmacy',
      owner: 'Amit Singh',
      phone: '+91 98765 43212',
      address: 'B-24, City Center Mall, Sector 29, Gurgaon',
      area: 'Gurgaon',
      distance: 5.1,
      rating: 4.7,
      reviews: 312,
      isOpen: false,
      openHours: '10:00 AM - 8:00 PM',
      delivery: false,
      medicines: [
        { name: 'Azithromycin 500mg', price: 95, brand: 'Azee', inStock: true, quantity: '3 tablets' },
        { name: 'Pantoprazole 40mg', price: 78, brand: 'Pan', inStock: true, quantity: '10 tablets' },
        { name: 'Paracetamol 500mg', price: 28, brand: 'Crocin', inStock: true, quantity: '10 tablets' },
        { name: 'Iron Tablets', price: 55, brand: 'Ferrous', inStock: false, quantity: '30 tablets' }
      ],
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      name: 'Care Pharmacy',
      owner: 'Sunita Devi',
      phone: '+91 98765 43213',
      address: '78, Old Market, Near Bus Stand, Sector 14, Gurgaon',
      area: 'Gurgaon',
      distance: 1.8,
      rating: 4.2,
      reviews: 98,
      isOpen: true,
      openHours: '7:00 AM - 11:00 PM',
      delivery: true,
      medicines: [
        { name: 'Paracetamol 500mg', price: 20, brand: 'Paracip', inStock: true, quantity: '10 tablets' },
        { name: 'Ibuprofen 400mg', price: 42, brand: 'Brufen', inStock: true, quantity: '10 tablets' },
        { name: 'Cough Syrup', price: 85, brand: 'Benadryl', inStock: true, quantity: '100ml' },
        { name: 'Multivitamin', price: 120, brand: 'Revital', inStock: true, quantity: '30 tablets' }
      ],
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 5,
      name: '24/7 Medical Store',
      owner: 'Vikram Yadav',
      phone: '+91 98765 43214',
      address: '156, Main Market, Sector 7, Gurgaon',
      area: 'Gurgaon',
      distance: 6.8,
      rating: 3.9,
      reviews: 156,
      isOpen: true,
      openHours: '24 Hours',
      delivery: true,
      medicines: [
        { name: 'Paracetamol 500mg', price: 30, brand: 'Crocin', inStock: true, quantity: '10 tablets' },
        { name: 'Antacid Tablets', price: 25, brand: 'ENO', inStock: true, quantity: '5g sachet' },
        { name: 'Bandages', price: 15, brand: 'Johnson', inStock: true, quantity: '1 roll' },
        { name: 'Hand Sanitizer', price: 45, brand: 'Dettol', inStock: true, quantity: '50ml' }
      ],
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  const areas = [
    { value: 'all', label: 'All Areas' },
    { value: 'Gurgaon', label: 'Gurgaon' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Noida', label: 'Noida' },
    { value: 'Faridabad', label: 'Faridabad' }
  ];

  // Filter and sort medical shops
  const filteredShops = useMemo(() => {
    const filtered = medicalShops.filter(shop => {
      const matchesSearch = searchQuery === '' || 
        shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shop.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shop.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shop.medicines.some(med => 
          med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          med.brand.toLowerCase().includes(searchQuery.toLowerCase())
        );
      
      const matchesArea = selectedArea === 'all' || shop.area === selectedArea;
      const matchesDistance = shop.distance <= parseFloat(maxDistance);
      
      return matchesSearch && matchesArea && matchesDistance;
    });

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'distance':
          return a.distance - b.distance;
        case 'rating':

          return b.rating - a.rating;
        case 'price': {
          const avgPriceA = a.medicines.reduce((sum, med) => sum + med.price, 0) / a.medicines.length;
          const avgPriceB = b.medicines.reduce((sum, med) => sum + med.price, 0) / b.medicines.length;
          return avgPriceA - avgPriceB;
        }
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedArea, maxDistance, sortBy]);

  // Find medicine across all shops for price comparison
  const getMedicineComparison = (medicineName) => {
    const results = [];
    medicalShops.forEach(shop => {
      const medicine = shop.medicines.find(med => 
        med.name.toLowerCase().includes(medicineName.toLowerCase())
      );
      if (medicine) {
        results.push({
          ...medicine,
          shopName: shop.name,
          shopDistance: shop.distance,
          shopRating: shop.rating,
          shopPhone: shop.phone
        });
      }
    });
    return results.sort((a, b) => a.price - b.price);
  };

  const handleCall = (phone, shopName) => {
    alert(`Calling ${shopName} at ${phone}`);
  };

  const handleChat = (shopName, owner) => {
    alert(`Starting chat with ${owner} from ${shopName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  pb-16 from-green-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Medical Stores</h1>
            <p className="text-gray-600">Search for medicines and connect with local pharmacies</p>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for medicines, pharmacy name, or area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Area Filter */}
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                >
                  {areas.map(area => (
                    <option key={area.value} value={area.value}>
                      {area.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Distance Filter */}
              <div className="flex items-center space-x-2">
                <Navigation className="h-4 w-4 text-gray-500" />
                <select
                  value={maxDistance}
                  onChange={(e) => setMaxDistance(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                >
                  <option value="5">Within 5 km</option>
                  <option value="10">Within 10 km</option>
                  <option value="20">Within 20 km</option>
                  <option value="50">Within 50 km</option>
                </select>
              </div>

              {/* Sort Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                >
                  <option value="distance">Sort by Distance</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <p className="text-gray-600">
            Found {filteredShops.length} medical store{filteredShops.length !== 1 ? 's' : ''} 
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {filteredShops.length > 0 ? (
          <div className="space-y-6">
            {filteredShops.map(shop => (
              <div key={shop.id} onClick={()=>{
                navigate("/pharmacy/dummyPharmacy")
              }} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  {/* Shop Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <img
                        src={shop.image}
                        alt={shop.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{shop.name}</h3>
                          {shop.isOpen ? (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full flex items-center space-x-1">
                              <CheckCircle className="h-3 w-3" />
                              <span>Open</span>
                            </span>
                          ) : (
                            <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full flex items-center space-x-1">
                              <AlertCircle className="h-3 w-3" />
                              <span>Closed</span>
                            </span>
                          )}
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600">Owner: {shop.owner}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600">{shop.address}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Navigation className="h-4 w-4 text-gray-400" />
                              <span className="text-gray-600">{shop.distance} km away</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <span className="text-gray-600">{shop.openHours}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="font-semibold">{shop.rating}</span>
                              <span className="text-gray-500 text-sm">({shop.reviews} reviews)</span>
                            </div>
                            {shop.delivery && (
                              <div className="flex items-center space-x-1">
                                <Truck className="h-4 w-4 text-green-500" />
                                <span className="text-green-600 text-sm">Home Delivery</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Buttons */}
                    <div className=" hidden sm:flex flex-col space-y-2">
                      <button
                        onClick={() => handleCall(shop.phone, shop.name)}
                        className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span>Call</span>
                      </button>
                      <button
                        onClick={() => handleChat(shop.name, shop.owner)}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Chat</span>
                      </button>
                    </div>
                  </div>

                  {/* Available Medicines */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                      <Pill className="h-4 w-4 text-blue-600" />
                      <span>Available Medicines</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {shop.medicines.map((medicine, index) => (
                        <div key={index} className={`p-3 border rounded-lg ${medicine.inStock ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <p className="font-medium text-gray-900 text-sm">{medicine.name}</p>
                              <p className="text-xs text-gray-600">{medicine.brand} • {medicine.quantity}</p>
                            </div>
                            {medicine.inStock ? (
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                            )}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-green-600">₹{medicine.price}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${medicine.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                              {medicine.inStock ? 'In Stock' : 'Out of Stock'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Store className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No medical stores found</h3>
            <p className="text-gray-600 mb-4">
              We couldn't find any medical stores matching your criteria.
            </p>
            <div className="text-gray-500 text-sm">
              <p>Try:</p>
              <ul className="mt-2 space-y-1">
                <li>• Expanding your search distance</li>
                <li>• Searching for different medicine names</li>
                <li>• Selecting a different area</li>
                <li>• Using generic medicine names</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalShopSearch;