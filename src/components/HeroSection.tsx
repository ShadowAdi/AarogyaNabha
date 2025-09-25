import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search, Stethoscope } from "lucide-react"
import heroImage from "@/assets/hero-medical.jpg"

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-medical-primary-light via-white to-service-find px-4 py-8 pb-12">
      {/* Mobile-First Hero Content */}
      <div className="space-y-8">
        {/* Main Heading */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground leading-tight">
            Healthcare 
            <span className="block text-medical-primary text-2xl mt-1">ਤੁਹਾਡੇ ਘਰ ਤੱਕ</span>
            <span className="block text-lg text-muted-foreground font-normal mt-2">
              (At Your Doorstep)
            </span>
          </h1>
          <p className="text-base text-muted-foreground px-4">
            Video calls with doctors, AI symptom checker, and pharmacy services optimized for 2G/3G
          </p>
        </div>

        {/* Hero Image with Stats */}
        <div className="relative mx-auto max-w-sm">
          <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
            <img 
              src={heroImage} 
              alt="Telemedicine Healthcare for Rural Communities"
              className="w-full h-64 object-cover"
            />
            {/* Stats Overlay */}
            <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg p-3">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-base font-bold text-medical-primary">24/7</div>
                  <div className="text-xs text-muted-foreground">Available</div>
                </div>
                <div>
                  <div className="text-base font-bold text-medical-secondary">2G/3G</div>
                  <div className="text-xs text-muted-foreground">Ready</div>
                </div>
                <div>
                  <div className="text-base font-bold text-medical-accent">3 भाषा</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

       

      </div>
    </section>
  )
}

export default HeroSection