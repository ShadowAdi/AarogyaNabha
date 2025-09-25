import React, { useState } from 'react';
import { Send, Bot, User, Heart, Stethoscope, Pill, Activity } from 'lucide-react';

const MedicalChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI Medical Assistant. I can help you with basic health information and symptom guidance. Please select a question below or type your own.",
      isBot: true,
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const suggestedQuestions = [
    {
      icon: <Heart className="w-4 h-4" />,
      question: "I have chest pain, what should I do?",
      category: "Emergency"
    },
    {
      icon: <Stethoscope className="w-4 h-4" />,
      question: "What are the symptoms of diabetes?",
      category: "General Health"
    },
    {
      icon: <Pill className="w-4 h-4" />,
      question: "How often should I take medicine for fever?",
      category: "Medication"
    },
    {
      icon: <Activity className="w-4 h-4" />,
      question: "I have persistent headaches, should I be worried?",
      category: "Symptoms"
    },
    {
      icon: <Heart className="w-4 h-4" />,
      question: "What are normal blood pressure ranges?",
      category: "Vital Signs"
    },
    {
      icon: <Stethoscope className="w-4 h-4" />,
      question: "I have cold and cough for 3 days",
      category: "Common Issues"
    }
  ];

  const botResponses = {
    "chest pain": "⚠️ Chest pain can be serious. If you're experiencing severe chest pain, shortness of breath, or pain radiating to your arm or jaw, please seek immediate medical attention or call emergency services. For mild chest pain, it could be due to muscle strain, acid reflux, or anxiety. I recommend consulting with a doctor through our app for proper evaluation.",
    
    "diabetes": "Common symptoms of diabetes include:\n• Frequent urination\n• Excessive thirst\n• Unexplained weight loss\n• Increased hunger\n• Fatigue\n• Blurred vision\n• Slow healing wounds\n\nIf you're experiencing these symptoms, please consult a doctor for proper testing and diagnosis.",
    
    "fever medicine": "For fever management:\n• Adults: Paracetamol 500-1000mg every 6-8 hours (max 4g/day)\n• Ibuprofen 400mg every 6-8 hours\n• Stay hydrated and rest\n• If fever persists >3 days or exceeds 39°C (102°F), consult a doctor\n\n⚠️ Always follow prescribed dosages and consult a pharmacist or doctor.",
    
    "headache": "Persistent headaches can have various causes:\n• Tension headaches (stress, poor posture)\n• Dehydration\n• Eye strain\n• Sleep issues\n• Serious conditions (if severe/sudden)\n\nIf headaches are severe, sudden, accompanied by fever, vision changes, or neck stiffness, seek immediate medical attention.",
    
    "blood pressure": "Normal blood pressure ranges:\n• Normal: Less than 120/80 mmHg\n• Elevated: 120-129 (systolic) and less than 80 (diastolic)\n• High BP Stage 1: 130-139/80-89 mmHg\n• High BP Stage 2: 140/90 mmHg or higher\n\nRegular monitoring and lifestyle changes are important for maintaining healthy blood pressure.",
    
    "cold cough": "For cold and cough lasting 3 days:\n• Rest and stay hydrated\n• Warm salt water gargles\n• Honey and ginger tea\n• Steam inhalation\n• Avoid cold foods\n\nConsult a doctor if:\n• Symptoms worsen after 7 days\n• High fever develops\n• Difficulty breathing\n• Chest pain occurs"
  };

  const generateBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return "I understand you're asking about a health concern. While I can provide general information, I recommend consulting with one of our verified doctors through the app for personalized medical advice. You can book a consultation from the 'Doctors' tab. Is there anything specific about your symptoms you'd like to know?";
  };

  const handleSendMessage = (messageText = inputText) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: messageText,
      isBot: false,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: generateBotResponse(messageText),
        isBot: true,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuestionClick = (question) => {
    handleSendMessage(question);
  };

  return (
    <div className="flex flex-col pb-16 min-h-screen bg-gray-50 ">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="bg-white bg-opacity-20 p-2 rounded-full">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">AI Medical Assistant</h1>
            <p className="text-blue-100 text-sm">Get instant health guidance</p>
          </div>
        </div>
      </div>

      {/* Suggested Questions */}
      {messages.length <= 1 && (
        <div className="p-4 bg-white border-b">
          <h3 className="text-gray-700 font-medium mb-3">Ask me about:</h3>
          <div className="grid grid-cols-1 gap-2">
            {suggestedQuestions.map((item, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(item.question)}
                className="flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 text-left transition-colors"
              >
                <div className="text-green-600">{item.icon}</div>
                <div>
                  <p className="text-gray-800 text-sm">{item.question}</p>
                  <span className="text-green-600 text-xs font-medium">{item.category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md`}>
              {message.isBot && (
                <div className="bg-blue-600 p-2 rounded-full">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              <div
                className={`p-3 rounded-lg ${
                  message.isBot
                    ? 'bg-white border border-gray-200'
                    : 'bg-green-600 text-white'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.isBot ? 'text-gray-500' : 'text-green-100'
                }`}>
                  {message.timestamp}
                </p>
              </div>
              {!message.isBot && (
                <div className="bg-green-600 p-2 rounded-full">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your health question here..."
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-3 rounded-lg transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          ⚠️ This is for general guidance only. Consult a doctor for medical diagnosis.
        </p>
      </div>
    </div>
  );
};

export default MedicalChatbot;