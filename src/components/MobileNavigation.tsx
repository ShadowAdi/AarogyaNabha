import { Button } from "@/components/ui/button";
import {
  Home,
  Search,
  Video,
  User,
  Plus,
  Pill,
  MessageCircle,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const MobileNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  // Helper to check active tab
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50 safe-area-bottom">
      <div className="grid grid-cols-4 py-2">
        {/* Home */}
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className={`flex-col gap-1 h-auto py-2 px-1 ${
            isActive("/") ? "text-blue-500" : ""
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-xs">Home</span>
        </Button>

        {/* Search */}
        <Button
          onClick={() => navigate("/search")}
          variant="ghost"
          className={`flex-col gap-1 h-auto py-2 px-1 ${
            isActive("/search") ? "text-blue-500" : ""
          }`}
        >
          <Search className="w-5 h-5" />
          <span className="text-xs">Search</span>
        </Button>

        {/* Search */}
        <Button
          onClick={() => navigate("/pharmacist")}
          variant="ghost"
          className={`flex-col gap-1 h-auto py-2 px-1 ${
            isActive("/pharmacist") ? "text-blue-500" : ""
          }`}
        >
          <Pill className="w-5 h-5" />
          <span className="text-xs">Pharmacy</span>
        </Button>

        <Button
          onClick={() => navigate("/chatbot")}
          variant="ghost"
          className={`flex-col gap-1 h-auto py-2 px-1 ${
            isActive("/chatbot") ? "text-blue-500" : ""
          }`}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs">Chatbot</span>
        </Button>

        {/* Profile */}
        {/* <Button
          variant="ghost"
          className={`hidden sm:flex flex-col gap-1 h-auto py-2 px-1 ${
            isActive("/profile") ? "text-blue-500" : ""
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-xs">Profile</span>
        </Button> */}
      </div>
    </nav>
  );
};

export default MobileNavigation;
