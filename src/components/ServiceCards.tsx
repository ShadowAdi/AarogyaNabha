import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Video, Search, Stethoscope, Brain, Pill, Clock } from "lucide-react"
import doctorVideoImage from "@/assets/doctor-video.jpg"
import doctorFindImage from "@/assets/doctor-find.jpg"
import aiSymptomImage from "@/assets/ai-symptom.jpg"

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      title: "Video Doctor",
      subtitle: "ਵੀਡੀਓ ਡਾਕਟਰ",
      description: "Connect in 60 seconds",
      bgColor: "bg-service-video",
      icon: <Video className="w-8 h-8 text-medical-primary" />,
      image: doctorVideoImage,
      features: ["24/7 Available", "2G/3G Ready", "3 Languages"],
      emoji: "📹"
    },
    {
      id: 2,
      title: "Find Doctors",
      subtitle: "ਡਾਕਟਰ ਲੱਭੋ",
      description: "Book appointments",
      bgColor: "bg-service-find",
      icon: <Search className="w-8 h-8 text-medical-secondary" />,
      image: doctorFindImage,
      features: ["Verified Doctors", "Easy Booking", "Local Area"],
      emoji: "🔍"
    },
    {
      id: 3,
      title: "AI Health Check",
      subtitle: "AI ਸਿਹਤ ਜਾਂਚ",
      description: "Voice-powered diagnosis",
      bgColor: "bg-service-ai",
      icon: <Brain className="w-8 h-8 text-medical-accent" />,
      image: aiSymptomImage,
      features: ["Voice Support", "Punjabi/Hindi", "Instant Results"],
      emoji: "🤖"
    },
  ]

  const quickServices = [
    {
      title: "Health Records",
      subtitle: "ਸਿਹਤ ਰਿਕਾਰਡ",
      icon: <Stethoscope className="w-6 h-6" />,
      color: "text-medical-success",
      emoji: "📋"
    },
    {
      title: "Pharmacy",
      subtitle: "ਦਵਾਈ ਦੁਕਾਨ",
      icon: <Pill className="w-6 h-6" />,
      color: "text-medical-warm",
      emoji: "💊"
    },
    {
      title: "Emergency",
      subtitle: "ਐਮਰਜੰਸੀ",
      icon: <Clock className="w-6 h-6" />,
      color: "text-destructive",
      emoji: "🚨"
    },
  ]

  return (
    <section className="py-8 bg-gradient-to-b from-white to-surface px-4">
      {/* Section Header - Mobile Optimized */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Our Services
        </h2>
        <p className="text-base text-muted-foreground">
          Healthcare made simple for everyone
        </p>
      </div>

      {/* Main Service Cards - Mobile Grid */}
      <div className="space-y-4 mb-8 flex sm:flex-row flex-col items-center space-x-4 justify-around  ">
        {services.map((service) => (
          <Card key={service.id} className={`${service.bgColor} border-0 overflow-hidden`}>
            <CardContent className="p-0">
              <div className="flex items-center">
                {/* Left Content */}
                <div className="flex-1 p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{service.emoji}</span>
                    <div>
                      <CardTitle className="text-lg text-foreground leading-tight">
                        {service.title}
                      </CardTitle>
                      <p className="text-sm text-medical-primary font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-white/50 px-2 py-1 rounded-full text-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="medical" size="sm" className="w-max">
                    Start Now
                  </Button>
                </div>
                
                {/* Right Image */}
                <div className="w-24 h-24 flex-shrink-0 mr-4">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover rounded-xl shadow-sm"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Access Services */}
      <div className="space-y-4 mb-8">
        <h3 className="text-lg font-semibold text-foreground text-center">Quick Access</h3>
        <div className="flex space-x-10 flex-col sm:flex-row justify-center items-center">
          {quickServices.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow w-[400px]">
              <CardContent className="p-4 space-y-2">
                <div className="text-2xl">{service.emoji}</div>
                <div>
                  <CardTitle className="text-sm font-medium leading-tight">
                    {service.title}
                  </CardTitle>
                  <p className="text-xs text-medical-primary">
                    {service.subtitle}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Simple CTA */}
      <div className="bg-gradient-to-r mx-auto from-medical-primary to-medical-secondary rounded-2xl w-max p-6 px-10 text-white text-center">
        <h3 className="text-xl font-bold mb-2">
          Ready to start?
        </h3>
        <p className="text-white/90 mb-4 text-sm">
          Healthcare in your language, at your pace
        </p>
        <Button variant="medical-outline" className="bg-white text-medical-primary hover:bg-gray-100 hover:text-black w-max">
          Get Started Now
        </Button>
      </div>
    </section>
  )
}

export default ServiceCards