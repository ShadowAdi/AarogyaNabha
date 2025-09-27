import React, { useState } from "react";
import {
  Star,
  MapPin,
  Clock,
  Phone,
  Truck,
  Search,
  ChevronLeft,
  User,
  CheckCircle,
  XCircle,
  ShoppingCart,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PharmacyProfile = () => {
  const [searchMedicine, setSearchMedicine] = useState("");
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  // Sample pharmacy data
  const pharmacy = {
    id: 1,
    name: "Apollo Pharmacy",
    owner: "Rajesh Kumar",
    phone: "+91 98765 43210",
    address: "Shop No. 12, Green Valley Market, Sector 18, Gurgaon",
    area: "Gurgaon",
    distance: 2.3,
    rating: 4.5,
    reviews: 234,
    isOpen: true,
    openHours: "8:00 AM - 10:00 PM",
    delivery: true,
    medicines: [
      {
        name: "Paracetamol 500mg",
        price: 25,
        brand: "Crocin",
        inStock: true,
        quantity: "10 tablets",
      },
      {
        name: "Amoxicillin 500mg",
        price: 120,
        brand: "Amoxil",
        inStock: true,
        quantity: "10 capsules",
      },
      {
        name: "Metformin 500mg",
        price: 45,
        brand: "Glycomet",
        inStock: false,
        quantity: "15 tablets",
      },
      {
        name: "Atorvastatin 10mg",
        price: 89,
        brand: "Lipitor",
        inStock: true,
        quantity: "10 tablets",
      },
      {
        name: "Aspirin 75mg",
        price: 15,
        brand: "Ecosprin",
        inStock: true,
        quantity: "14 tablets",
      },
      {
        name: "Omeprazole 20mg",
        price: 65,
        brand: "Omez",
        inStock: true,
        quantity: "10 capsules",
      },
      {
        name: "Ciprofloxacin 500mg",
        price: 85,
        brand: "Cipro",
        inStock: false,
        quantity: "10 tablets",
      },
      {
        name: "Losartan 50mg",
        price: 95,
        brand: "Cozaar",
        inStock: true,
        quantity: "15 tablets",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const filteredMedicines = pharmacy.medicines.filter(
    (medicine) =>
      medicine.name.toLowerCase().includes(searchMedicine.toLowerCase()) ||
      medicine.brand.toLowerCase().includes(searchMedicine.toLowerCase())
  );

  const addToCart = (medicine) => {
    if (!medicine.inStock) return;

    const existingItem = selectedMedicines.find(
      (item) => item.name === medicine.name
    );
    if (existingItem) {
      setSelectedMedicines((prev) =>
        prev.map((item) =>
          item.name === medicine.name
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        )
      );
    } else {
      setSelectedMedicines((prev) => [
        ...prev,
        { ...medicine, cartQuantity: 1 },
      ]);
    }
  };

  const removeFromCart = (medicineName) => {
    setSelectedMedicines((prev) =>
      prev.filter((item) => item.name !== medicineName)
    );
  };

  const updateCartQuantity = (medicineName, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(medicineName);
      return;
    }
    setSelectedMedicines((prev) =>
      prev.map((item) =>
        item.name === medicineName
          ? { ...item, cartQuantity: newQuantity }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return selectedMedicines.reduce(
      (total, item) => total + item.price * item.cartQuantity,
      0
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${pharmacy.phone}`;
  };

  if (showCart) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-green-600 text-white p-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                setShowCart(false);
              }}
            >
              <ChevronLeft className="w-6 h-6 cursor-pointer" />
            </button>
            <h1 className="text-lg font-semibold">Medicine Cart</h1>
          </div>
        </div>

        <div className="p-4">
          {selectedMedicines.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="space-y-3 mb-6">
                {selectedMedicines.map((medicine, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">
                          {medicine.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {medicine.brand} • {medicine.quantity}
                        </p>
                        <p className="text-green-600 font-semibold">
                          ₹{medicine.price} each
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(medicine.name)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <XCircle className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            updateCartQuantity(
                              medicine.name,
                              medicine.cartQuantity - 1
                            )
                          }
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="font-semibold">
                          {medicine.cartQuantity}
                        </span>
                        <button
                          onClick={() =>
                            updateCartQuantity(
                              medicine.name,
                              medicine.cartQuantity + 1
                            )
                          }
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-semibold text-gray-800">
                        ₹{medicine.price * medicine.cartQuantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total Amount:</span>
                  <span className="text-green-600">₹{getTotalPrice()}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleCall}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call to Order - {pharmacy.phone}</span>
                </button>
                <p className="text-sm text-gray-600 text-center">
                  Call the pharmacy to confirm availability and place your order
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white p-4">
        <div className="flex items-center space-x-3">
          <ChevronLeft
            onClick={() => {
              navigate(-1);
            }}
            className="w-6 h-6  cursor-pointer"
          />
          <h1 className="text-lg font-semibold">Pharmacy Details</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Pharmacy Info Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-start space-x-4 ">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="flex-1 mt-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {pharmacy.name}
                </h2>
                <p className="text-gray-600">Owner: {pharmacy.owner}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">
                      {pharmacy.rating} ({pharmacy.reviews} reviews)
                    </span>
                  </div>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      pharmacy.isOpen
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {pharmacy.isOpen ? "Open" : "Closed"}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {pharmacy.address}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {pharmacy.openHours} • {pharmacy.distance} km away
                </span>
              </div>
              {pharmacy.delivery && (
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-600">
                    Home delivery available
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleCall}
            className="bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Call</span>
          </button>
          <button className="bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
            <MessageCircle className="w-5 h-5" />
            <span>Message</span>
          </button>
        </div>

        {/* Medicine Search */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Search Medicines
          </h3>
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by medicine name or brand..."
              value={searchMedicine}
              onChange={(e) => setSearchMedicine(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Medicine List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Available Medicines
            </h3>
            {selectedMedicines.length > 0 && (
              <button
                onClick={() => setShowCart(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Cart ({selectedMedicines.length})</span>
              </button>
            )}
          </div>

          <div className="space-y-3">
            {filteredMedicines.map((medicine, index) => (
              <div
                key={index}
                className={`p-4 border rounded-lg ${
                  medicine.inStock
                    ? "border-gray-200"
                    : "border-gray-300 bg-gray-50"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-800">
                        {medicine.name}
                      </h4>
                      {medicine.inStock ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      {medicine.brand} • {medicine.quantity}
                    </p>
                    <p className="text-green-600 font-semibold mt-1">
                      ₹{medicine.price}
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        medicine.inStock ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {medicine.inStock ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>
                  <button
                    onClick={() => addToCart(medicine)}
                    disabled={!medicine.inStock}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      medicine.inStock
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {medicine.inStock ? "Add to Cart" : "Unavailable"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredMedicines.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">
                No medicines found matching your search.
              </p>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Medicine availability is updated in
            real-time. Call the pharmacy to confirm stock before visiting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PharmacyProfile;
