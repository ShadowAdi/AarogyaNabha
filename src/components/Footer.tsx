import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-medical-primary to-medical-secondary flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-lg">AarogyaNabha</span>
            </div>
            <p className="text-gray-300 text-sm">
              Bringing quality healthcare to rural Punjab through technology. 
              Multilingual telemedicine platform optimized for 2G/3G networks.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Video Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Find Doctors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Symptom Checker</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Health Records</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pharmacy Services</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>help@aarogyanabha.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Nabha, Patiala District, Punjab 147201</span>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-xs text-gray-400 mb-2">Languages:</p>
              <div className="flex gap-2 text-xs">
                <span className="bg-white/10 px-2 py-1 rounded">English</span>
                <span className="bg-white/10 px-2 py-1 rounded">ਪੰਜਾਬੀ</span>
                <span className="bg-white/10 px-2 py-1 rounded">हिंदी</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 AarogyaNabha. All rights reserved. Serving rural Punjab with digital healthcare.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span>🏥 Healthcare License: PB/HC/2024/001</span>
            <span>🔒 SSL Secured</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer