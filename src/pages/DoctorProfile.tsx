import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Video, 
  MessageCircle, 
  Calendar, 
  CheckCircle,
  User,
  GraduationCap,
  Award,
  ChevronLeft
} from 'lucide-react';

const DoctorProfile = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [consultationType, setConsultationType] = useState('video');
  const [showBookingConfirm, setShowBookingConfirm] = useState(false);

  // Sample doctor data
  const doctor = {
    name: "Dr. Rajesh Kumar",
    specialization: "General Physician",
    experience: "8 years",
    qualification: "MBBS, MD",
    rating: 4.8,
    reviews: 234,
    location: "Nabha Civil Hospital",
    languages: ["English", "Hindi", "Punjabi"],
    consultationFee: {
      video: 300,
      call: 250,
      chat: 200
    },
    about: "Dr. Rajesh Kumar is an experienced General Physician with expertise in treating common ailments, preventive care, and chronic disease management. He has been serving the Nabha community for over 8 years.",
    image: "/api/placeholder/150/150"
  };

  // Generate next 7 days
  const getNext7Days = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push({
        date: date.toISOString().split('T')[0],
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNum: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' })
      });
    }
    return days;
  };

  // Available time slots
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"
  ];

  const dates = getNext7Days();

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setShowBookingConfirm(true);
      // Here you would typically send the booking data to your backend
    }
  };

  const consultationOptions = [
    { 
      type: 'video', 
      icon: <Video className="w-5 h-5" />, 
      label: 'Video Call', 
      price: doctor.consultationFee.video,
      description: 'Face-to-face consultation'
    },
    { 
      type: 'call', 
      icon: <Phone className="w-5 h-5" />, 
      label: 'Voice Call', 
      price: doctor.consultationFee.call,
      description: 'Audio consultation'
    },
    { 
      type: 'chat', 
      icon: <MessageCircle className="w-5 h-5" />, 
      label: 'Chat', 
      price: doctor.consultationFee.chat,
      description: 'Text-based consultation'
    }
  ];

  if (showBookingConfirm) {
    return (
      <div className="min-h-screen  bg-gray-50 flex items-center justify-center p-4 pb-20">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Booking Confirmed!</h2>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700"><strong>Doctor:</strong> {doctor.name}</p>
            <p className="text-gray-700"><strong>Date:</strong> {selectedDate}</p>
            <p className="text-gray-700"><strong>Time:</strong> {selectedTime}</p>
            <p className="text-gray-700"><strong>Type:</strong> {consultationOptions.find(opt => opt.type === consultationType)?.label}</p>
            <p className="text-gray-700"><strong>Fee:</strong> ₹{doctor.consultationFee[consultationType]}</p>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            You will receive a confirmation SMS and the doctor will contact you at the scheduled time.
          </p>
          <button
            onClick={() => setShowBookingConfirm(false)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4">
        <div className="flex items-center space-x-3">
          <ChevronLeft className="w-6 h-6" />
          <h1 className="text-lg font-semibold">Doctor Profile</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Doctor Info Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start space-x-4">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800">{doctor.name}</h2>
              <p className="text-blue-600 font-medium">{doctor.specialization}</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{doctor.rating} ({doctor.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GraduationCap className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{doctor.experience}</span>
                </div>
              </div>
              <div className="flex items-center space-x-1 mt-1">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">{doctor.location}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center space-x-1 mb-2">
              <Award className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Qualifications:</span>
            </div>
            <p className="text-sm text-gray-600">{doctor.qualification}</p>
            
            <div className="mt-3">
              <span className="text-sm font-medium text-gray-700">Languages:</span>
              <div className="flex space-x-2 mt-1">
                {doctor.languages.map((lang, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">About Doctor</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{doctor.about}</p>
        </div>

        {/* Consultation Type Selection */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Consultation Type</h3>
          <div className="space-y-3">
            {consultationOptions.map((option) => (
              <button
                key={option.type}
                onClick={() => setConsultationType(option.type)}
                className={`w-full p-4 border rounded-lg flex items-center justify-between transition-colors ${
                  consultationType === option.type
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    consultationType === option.type ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {option.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-800">{option.label}</p>
                    <p className="text-xs text-gray-500">{option.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">₹{option.price}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Meeting Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Calendar className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-800">Schedule Appointment</h3>
          </div>
          
          {/* Date Selection */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Select Date</h4>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {dates.map((dateObj) => (
                <button
                  key={dateObj.date}
                  onClick={() => setSelectedDate(dateObj.date)}
                  className={`flex-shrink-0 p-3 text-center rounded-lg border transition-colors ${
                    selectedDate === dateObj.date
                      ? 'border-blue-500 bg-blue-50 text-blue-600'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="text-xs text-gray-500">{dateObj.day}</div>
                  <div className="font-semibold">{dateObj.dayNum}</div>
                  <div className="text-xs text-gray-500">{dateObj.month}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Time Slots */}
          {selectedDate && (
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="w-4 h-4 text-blue-600" />
                <h4 className="text-sm font-medium text-gray-700">Available Time Slots</h4>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-2 text-sm rounded-lg border transition-colors ${
                      selectedTime === time
                        ? 'border-green-500 bg-green-50 text-green-600'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Book Appointment Button */}
          <button
            onClick={handleBooking}
            disabled={!selectedDate || !selectedTime}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
              selectedDate && selectedTime
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Book Appointment - ₹{doctor.consultationFee[consultationType]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;