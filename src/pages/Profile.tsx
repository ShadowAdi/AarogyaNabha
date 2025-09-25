import React, { useState } from 'react';
import { 
  User, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Edit3, 
  FileText, 
  Download, 
  Eye,
  Heart,
  Activity,
  Thermometer,
  Weight,
  Ruler,
  Pill,
  Clock,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  Camera,
  Plus,
  Settings,
  Share2
} from 'lucide-react';

const PatientProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock patient data
  const patientData = {
    id: 'PAT-2024-001',
    name: 'Rajesh Kumar Sharma',
    age: 45,
    gender: 'Male',
    dateOfBirth: '1979-03-15',
    phone: '+91 98765 43210',
    email: 'rajesh.sharma@email.com',
    address: '123, Green Valley Society, Sector 42, Gurgaon, Haryana - 122001',
    emergencyContact: {
      name: 'Priya Sharma',
      relation: 'Wife',
      phone: '+91 98765 43211'
    },
    bloodGroup: 'B+',
    height: '175 cm',
    weight: '78 kg',
    profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  };

  // Mock vital signs
  const vitalSigns = {
    bloodPressure: { value: '120/80', status: 'normal', lastUpdated: '2024-09-18' },
    heartRate: { value: '72 BPM', status: 'normal', lastUpdated: '2024-09-18' },
    temperature: { value: '98.6°F', status: 'normal', lastUpdated: '2024-09-18' },
    oxygenSaturation: { value: '98%', status: 'normal', lastUpdated: '2024-09-18' }
  };

  // Mock medical reports
  const medicalReports = [
    {
      id: 1,
      title: 'Complete Blood Count (CBC)',
      date: '2024-09-15',
      doctor: 'Dr. Anjali Mehta',
      type: 'Lab Report',
      status: 'Normal',
      summary: 'All blood parameters within normal range',
      fileSize: '2.4 MB'
    },
    {
      id: 2,
      title: 'Chest X-Ray',
      date: '2024-09-10',
      doctor: 'Dr. Vikram Singh',
      type: 'Radiology',
      status: 'Normal',
      summary: 'Clear lung fields, no abnormalities detected',
      fileSize: '5.1 MB'
    },
    {
      id: 3,
      title: 'Lipid Profile',
      date: '2024-09-08',
      doctor: 'Dr. Rajesh Kumar',
      type: 'Lab Report',
      status: 'Attention Required',
      summary: 'Slightly elevated cholesterol levels',
      fileSize: '1.8 MB'
    },
    {
      id: 4,
      title: 'ECG Report',
      date: '2024-09-05',
      doctor: 'Dr. Priya Sharma',
      type: 'Cardiac',
      status: 'Normal',
      summary: 'Normal sinus rhythm, no arrhythmias',
      fileSize: '3.2 MB'
    }
  ];

  // Mock medications
  const medications = [
    {
      id: 1,
      name: 'Atorvastatin',
      dosage: '10mg',
      frequency: 'Once daily',
      duration: 'Ongoing',
      prescribedBy: 'Dr. Rajesh Kumar',
      startDate: '2024-08-15'
    },
    {
      id: 2,
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      duration: 'Ongoing',
      prescribedBy: 'Dr. Anjali Mehta',
      startDate: '2024-07-20'
    },
    {
      id: 3,
      name: 'Vitamin D3',
      dosage: '60,000 IU',
      frequency: 'Weekly',
      duration: '3 months',
      prescribedBy: 'Dr. Vikram Singh',
      startDate: '2024-09-01'
    }
  ];

  // Mock recent appointments
  const recentAppointments = [
    {
      id: 1,
      doctor: 'Dr. Rajesh Kumar',
      specialty: 'Cardiology',
      date: '2024-09-18',
      time: '10:30 AM',
      type: 'Video Consultation',
      status: 'Completed'
    },
    {
      id: 2,
      doctor: 'Dr. Anjali Mehta',
      specialty: 'General Medicine',
      date: '2024-09-15',
      time: '2:00 PM',
      type: 'In-Person',
      status: 'Completed'
    },
    {
      id: 3,
      doctor: 'Dr. Priya Sharma',
      specialty: 'Dermatology',
      date: '2024-09-22',
      time: '11:00 AM',
      type: 'Video Consultation',
      status: 'Scheduled'
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'normal': return 'text-green-600 bg-green-100';
      case 'attention required': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      case 'completed': return 'text-green-600 bg-green-100';
      case 'scheduled': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all ${
        activeTab === id
          ? 'bg-blue-600 text-white shadow-md'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br pb-20 from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={patientData.profileImage}
                  alt={patientData.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{patientData.name}</h1>
                <p className="text-gray-600">Patient ID: {patientData.id}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-sm text-gray-500">{patientData.age} years old</span>
                  <span className="text-sm text-gray-500">{patientData.gender}</span>
                  <span className="text-sm text-gray-500">Blood Group: {patientData.bloodGroup}</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex space-x-2 ">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Edit3 className="h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2 py-4 overflow-x-auto">
            <TabButton id="overview" label="Overview" icon={User} />
            <TabButton id="reports" label="Medical Reports" icon={FileText} />
            <TabButton id="medications" label="Medications" icon={Pill} />
            <TabButton id="appointments" label="Appointments" icon={Calendar} />
            <TabButton id="vitals" label="Vital Signs" icon={Activity} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Personal Information */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Date of Birth</p>
                      <p className="font-medium">{patientData.dateOfBirth}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium">{patientData.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">{patientData.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Ruler className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Height</p>
                      <p className="font-medium">{patientData.height}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Weight className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Weight</p>
                      <p className="font-medium">{patientData.weight}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Address</p>
                      <p className="font-medium">{patientData.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{patientData.emergencyContact.name}</p>
                    <p className="text-sm text-gray-600">{patientData.emergencyContact.relation}</p>
                    <p className="text-sm text-gray-600">{patientData.emergencyContact.phone}</p>
                  </div>
                  <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                    Call Emergency
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Latest Vitals</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Heart className="h-5 w-5 text-red-500" />
                      <span className="text-sm text-gray-600">Blood Pressure</span>
                    </div>
                    <span className="font-medium">{vitalSigns.bloodPressure.value}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Activity className="h-5 w-5 text-blue-500" />
                      <span className="text-sm text-gray-600">Heart Rate</span>
                    </div>
                    <span className="font-medium">{vitalSigns.heartRate.value}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Thermometer className="h-5 w-5 text-orange-500" />
                      <span className="text-sm text-gray-600">Temperature</span>
                    </div>
                    <span className="font-medium">{vitalSigns.temperature.value}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Completed consultation with Dr. Rajesh</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">New lab report uploaded</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Pill className="h-4 w-4 text-purple-500" />
                    <span className="text-sm">Medication reminder set</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Medical Reports</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4" />
                <span>Upload Report</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalReports.map(report => (
                <div key={report.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <FileText className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{report.title}</h3>
                        <p className="text-sm text-gray-600">{report.type}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Date:</span> {report.date}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Doctor:</span> {report.doctor}
                    </p>
                    <p className="text-sm text-gray-700">{report.summary}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                      <Eye className="h-4 w-4" />
                      <span>View</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-2">Size: {report.fileSize}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'medications' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Current Medications</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4" />
                <span>Add Medication</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {medications.map(medication => (
                <div key={medication.id} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <Pill className="h-8 w-8 text-green-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{medication.name}</h3>
                        <p className="text-lg text-blue-600 font-medium">{medication.dosage}</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Settings className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Frequency:</span>
                      <span className="text-sm font-medium">{medication.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Duration:</span>
                      <span className="text-sm font-medium">{medication.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Prescribed by:</span>
                      <span className="text-sm font-medium">{medication.prescribedBy}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Start Date:</span>
                      <span className="text-sm font-medium">{medication.startDate}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button className="w-full px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                      Set Reminder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'appointments' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4" />
                <span>Book Appointment</span>
              </button>
            </div>
            
            <div className="space-y-4">
              {recentAppointments.map(appointment => (
                <div key={appointment.id} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Calendar className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                        <p className="text-sm text-gray-600">{appointment.specialty}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-gray-600">{appointment.date}</span>
                          <span className="text-sm text-gray-600">{appointment.time}</span>
                          <span className="text-sm text-gray-600">{appointment.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(appointment.status)}`}>
                        {appointment.status}
                      </span>
                      {appointment.status === 'Scheduled' && (
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Join Call
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'vitals' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Vital Signs</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4" />
                <span>Add Reading</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(vitalSigns).map(([key, vital]) => (
                <div key={key} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {key === 'bloodPressure' && <Heart className="h-6 w-6 text-red-500" />}
                      {key === 'heartRate' && <Activity className="h-6 w-6 text-blue-500" />}
                      {key === 'temperature' && <Thermometer className="h-6 w-6 text-orange-500" />}
                      {key === 'oxygenSaturation' && <TrendingUp className="h-6 w-6 text-green-500" />}
                      <span className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(vital.status)}`}>
                      {vital.status}
                    </span>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{vital.value}</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Last updated: {vital.lastUpdated}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientProfile;