import React, { useState } from 'react';
import { 
  Heart, 
  Stethoscope, 
  Pill, 
  MessageCircle, 
  Video, 
  Phone, 
  MapPin, 
  Clock, 
  Shield, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X,
  Smartphone,
  Globe,
  Zap,
  UserCheck
} from 'lucide-react';

const HealthcareHomepage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Video className="w-8 h-8 text-blue-600" />,
      title: "Video Consultations",
      description: "Connect with verified doctors through secure video calls from anywhere",
      color: "bg-blue-50"
    },
    {
      icon: <Phone className="w-8 h-8 text-green-600" />,
      title: "Voice & Chat Support",
      description: "Multiple consultation modes including voice calls and instant messaging",
      color: "bg-green-50"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-600" />,
      title: "AI Health Assistant",
      description: "Get instant health guidance and symptom analysis with our multilingual AI bot",
      color: "bg-purple-50"
    },
    {
      icon: <Pill className="w-8 h-8 text-orange-600" />,
      title: "Medicine Finder",
      description: "Check real-time medicine availability at nearby pharmacies",
      color: "bg-orange-50"
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-600" />,
      title: "Local Network",
      description: "Find doctors and pharmacies in your area with distance tracking",
      color: "bg-red-50"
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Secure Records",
      description: "Your health records stored securely with offline access capability",
      color: "bg-indigo-50"
    }
  ];

  const problems = [
    {
      problem: "Long waiting times at clinics",
      solution: "Instant online consultations with verified doctors"
    },
    {
      problem: "Medicine not available at nearby stores",
      solution: "Real-time stock checking across multiple pharmacies"
    },
    {
      problem: "Language barriers in healthcare",
      solution: "Multilingual support in Hindi, Punjabi, and English"
    },
    {
      problem: "Expensive specialist consultations",
      solution: "Affordable pricing with multiple consultation modes"
    },
    {
      problem: "Lost medical prescriptions",
      solution: "Digital prescriptions saved permanently in your profile"
    },
    {
      problem: "Uncertainty about health symptoms",
      solution: "AI-powered symptom checker for immediate guidance"
    }
  ];

  const stats = [
    { number: "500+", label: "Verified Doctors", icon: <UserCheck className="w-6 h-6" /> },
    { number: "50+", label: "Partner Pharmacies", icon: <Pill className="w-6 h-6" /> },
    { number: "3", label: "Languages Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "AI Assistant", icon: <Zap className="w-6 h-6" /> }
  ];

  const services = [
    {
      title: "For Patients",
      description: "Complete healthcare at your fingertips",
      features: [
        "Book consultations with specialists",
        "AI symptom checker and health guidance",
        "Medicine availability and delivery",
        "Digital health records management",
        "Prescription downloads and storage"
      ],
      buttonText: "Find a Doctor",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "For Doctors",
      description: "Expand your practice digitally",
      features: [
        "Manage patient appointments easily",
        "Digital prescription generation",
        "Access patient history and records",
        "Video, voice, and chat consultations",
        "Verified professional network"
      ],
      buttonText: "Join as Doctor",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "For Pharmacies",
      description: "Grow your business reach",
      features: [
        "Real-time inventory management",
        "Connect with nearby patients",
        "Digital prescription fulfillment",
        "Stock alerts and notifications",
        "Home delivery coordination"
      ],
      buttonText: "Register Pharmacy",
      color: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">HealthConnect</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Services</a>
                <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Features</a>
                <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">About</a>
                <button className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Healthcare Made <span className="text-yellow-300">Simple</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Connect with verified doctors, find medicines, and get AI-powered health guidance - all in your local language
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                <Smartphone className="w-5 h-5" />
                <span>Download App</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md mb-4 inline-flex items-center justify-center">
                  <div className="text-blue-600">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Problems We <span className="text-blue-600">Solve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Addressing real healthcare challenges faced by patients, doctors, and pharmacies in rural and urban areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">❌ {item.problem}</h3>
                  <div className="w-12 h-px bg-gradient-to-r from-blue-600 to-green-600 mb-3"></div>
                  <p className="text-green-600 font-medium">✅ {item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Powerful <span className="text-green-600">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for comprehensive healthcare management in one platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className={`${feature.color} p-4 rounded-lg inline-block mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-purple-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare solutions for patients, healthcare providers, and pharmacies
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-300 transition-colors">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full ${service.color} text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2`}>
                  <span>{service.buttonText}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How It <span className="text-blue-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600">Simple steps to get started with healthcare at your fingertips</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Register", desc: "Sign up with your phone number and choose your preferred language", icon: <Users className="w-8 h-8" /> },
              { step: "2", title: "Search", desc: "Find doctors by specialization or search for medicines nearby", icon: <MapPin className="w-8 h-8" /> },
              { step: "3", title: "Connect", desc: "Book consultations via video, call, or chat based on your preference", icon: <Video className="w-8 h-8" /> },
              { step: "4", title: "Get Care", desc: "Receive prescriptions, health guidance, and follow-up support", icon: <Heart className="w-8 h-8" /> }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-full shadow-lg mb-6 inline-block">
                  <div className="text-blue-600">{item.icon}</div>
                </div>
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Healthcare?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Join thousands of users who are already experiencing better healthcare through our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
              <Smartphone className="w-5 h-5" />
              <span>Download Now</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">HealthConnect</span>
              </div>
              <p className="text-gray-400">Making healthcare accessible for everyone, everywhere.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Doctor Consultations</li>
                <li>AI Health Assistant</li>
                <li>Medicine Finder</li>
                <li>Health Records</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Download App</li>
                <li>Join as Doctor</li>
                <li>Partner Pharmacy</li>
                <li>Community</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HealthConnect. Made with ❤️ for Nabha Hackathon.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HealthcareHomepage;