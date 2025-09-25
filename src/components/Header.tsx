import { Button } from "@/components/ui/button"
import { Globe, Menu, User } from "lucide-react"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border safe-area-top">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-medical-primary to-medical-secondary flex items-center justify-center shadow-card">
            <span className="text-white font-bold text-lg">न</span>
          </div>
          <div>
            <span className="font-bold text-lg text-foreground block leading-none">Aarogya Nabha</span>
            <span className="text-xs text-medical-primary">ਸਿਹਤ ਦੇਖਭਾਲ</span>
          </div>
        </div>

        {/* Right Section - Mobile Optimized */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <Button variant="ghost" size="sm" className="gap-1 px-3">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">ਪੰ</span>
          </Button>

          {/* Profile/Menu */}
          <Button variant="medical" size="sm" className="gap-2 px-4">
            <User className="w-4 h-4" />
            <span className="text-sm">Login</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header