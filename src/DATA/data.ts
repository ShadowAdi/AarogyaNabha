import { Baby, Bone, Brain, Heart, Stethoscope, Users } from "lucide-react";

 export const doctors = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      specialty: 'Cardiology',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      rating: 4.8,
      reviews: 342,
      experience: '15 years',
      languages: ['Hindi', 'English', 'Punjabi'],
      location: 'Delhi',
      fees: '₹500',
      availability: 'Available Now',
      isOnline: true,
      description: 'Specialized in heart diseases and cardiac surgery with extensive experience in interventional cardiology.'
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      specialty: 'Dermatology',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      rating: 4.9,
      reviews: 287,
      experience: '12 years',
      languages: ['Hindi', 'English'],
      location: 'Mumbai',
      fees: '₹400',
      availability: 'Available at 2 PM',
      isOnline: false,
      description: 'Expert in skin disorders, cosmetic dermatology and hair treatment with modern techniques.'
    },
    {
      id: 3,
      name: 'Dr. Amrit Singh',
      specialty: 'Neurology',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      rating: 4.7,
      reviews: 198,
      experience: '18 years',
      languages: ['Punjabi', 'Hindi', 'English'],
      location: 'Chandigarh',
      fees: '₹600',
      availability: 'Available Tomorrow',
      isOnline: true,
      description: 'Neurologist specializing in brain disorders, stroke treatment and neurological rehabilitation.'
    },
    {
      id: 4,
      name: 'Dr. Fatima Ali',
      specialty: 'Pediatrics',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.8,
      reviews: 156,
      experience: '10 years',
      languages: ['Hindi', 'English', 'Urdu'],
      location: 'Hyderabad',
      fees: '₹350',
      availability: 'Available Now',
      isOnline: true,
      description: 'Child specialist with expertise in pediatric care, vaccinations and child development.'
    },
    {
      id: 5,
      name: 'Dr. Suresh Patel',
      specialty: 'Orthopedics',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      rating: 4.6,
      reviews: 223,
      experience: '20 years',
      languages: ['Hindi', 'Gujarati', 'English'],
      location: 'Ahmedabad',
      fees: '₹550',
      availability: 'Available at 4 PM',
      isOnline: false,
      description: 'Orthopedic surgeon specializing in joint replacement, sports injuries and bone disorders.'
    },
    {
      id: 6,
      name: 'Dr. Meera Reddy',
      specialty: 'Gynecology',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      rating: 4.9,
      reviews: 298,
      experience: '14 years',
      languages: ['Telugu', 'Hindi', 'English'],
      location: 'Bangalore',
      fees: '₹450',
      availability: 'Available Now',
      isOnline: true,
      description: 'Women\'s health specialist with expertise in pregnancy care and gynecological surgeries.'
    }
  ]

  export const specialties = [
    { value: 'all', label: 'All Specialties', icon: Stethoscope },
    { value: 'Cardiology', label: 'Cardiology', icon: Heart },
    { value: 'Dermatology', label: 'Dermatology', icon: Users },
    { value: 'Neurology', label: 'Neurology', icon: Brain },
    { value: 'Pediatrics', label: 'Pediatrics', icon: Baby },
    { value: 'Orthopedics', label: 'Orthopedics', icon: Bone },
    { value: 'Gynecology', label: 'Gynecology', icon: Users }
  ];

  export const languages = [
    { value: 'all', label: 'All Languages' },
    { value: 'Hindi', label: 'Hindi' },
    { value: 'English', label: 'English' },
    { value: 'Punjabi', label: 'Punjabi' },
    { value: 'Telugu', label: 'Telugu' },
    { value: 'Gujarati', label: 'Gujarati' },
    { value: 'Urdu', label: 'Urdu' }
  ];
