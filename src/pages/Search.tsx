import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Star,
  MapPin,
  Clock,
  Video,
  Phone,
  MessageCircle,
  Heart,
  Brain,
  Stethoscope,
  Eye,
  Bone,
  Baby,
  Users,
} from "lucide-react";
import { doctors, languages, specialties } from "@/DATA/data";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const DoctorSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const navigator = useNavigate();

  // Filter doctors based on search and filters
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSpecialty =
        selectedSpecialty === "all" || doctor.specialty === selectedSpecialty;

      const matchesLanguage =
        selectedLanguage === "all" ||
        doctor.languages.includes(selectedLanguage);

      return matchesSearch && matchesSpecialty && matchesLanguage;
    });
  }, [searchQuery, selectedSpecialty, selectedLanguage, doctors]);

  const getSpecialtyIcon = (specialty) => {
    const specialtyData = specialties.find((s) => s.value === specialty);
    const IconComponent = specialtyData?.icon || Stethoscope;
    return IconComponent;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br pb-16 from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Find Your Doctor
            </h1>
            <p className="text-gray-600">
              Connect with qualified healthcare professionals in your area
            </p>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by doctor name, specialty, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Specialty Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  {specialties.map((specialty) => (
                    <option key={specialty.value} value={specialty.value}>
                      {specialty.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Language Filter */}
              <div className="flex items-center space-x-2">
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  {languages.map((language) => (
                    <option key={language.value} value={language.value}>
                      {language.label}
                    </option>
                  ))}
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
            Found {filteredDoctors.length} doctor
            {filteredDoctors.length !== 1 ? "s" : ""}
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor, i) => {
            const SpecialtyIcon = getSpecialtyIcon(doctor.specialty);

            return (
              <motion.div
                key={doctor.id}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 100,
                  transition: { duration: 1, delay: i * 0.1 },
                }}
                onClick={() => {
                  navigator("/doctor/dummyDoctor");
                }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Card Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start space-x-4">
                    {/* Profile Image */}
                    <div className="relative">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                      />
                      {doctor.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>

                    {/* Doctor Info */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {doctor.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <SpecialtyIcon className="h-4 w-4 text-blue-600" />
                        <span className="text-blue-600 font-medium">
                          {doctor.specialty}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600 text-sm">
                          {doctor.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rating and Experience */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-semibold text-gray-900">
                          {doctor.rating}
                        </span>
                      </div>
                      <span className="text-gray-500 text-sm">
                        ({doctor.reviews} reviews)
                      </span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      {doctor.experience} exp.
                    </span>
                  </div>

                  {/* Languages */}
                  <div className="mt-3">
                    <div className="flex flex-wrap gap-1">
                      {doctor.languages.map((language) => (
                        <span
                          key={language}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                    {doctor.description}
                  </p>
                </div>

                {/* Availability and Actions */}
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {doctor.availability}
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      {doctor.fees}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-2">
                    <button className="flex items-center justify-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      <Video className="h-4 w-4" />
                      <span>Video</span>
                    </button>
                    <button className="flex items-center justify-center space-x-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                      <Phone className="h-4 w-4" />
                      <span>Call</span>
                    </button>
                    <button className="flex items-center justify-center space-x-1 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm">
                      <MessageCircle className="h-4 w-4" />
                      <span>Chat</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No doctors found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorSearchPage;
