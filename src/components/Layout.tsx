
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  User, 
  Heart, 
  Calendar, 
  DumbbellIcon, 
  Trophy,
  Settings
} from "lucide-react";

const Layout: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Hide navbar on home page (first page)
  const showNavbar = location.pathname !== "/";

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Profile", path: "/profile", icon: User },
    { name: "Diet", path: "/diet", icon: Heart },
    { name: "Workouts", path: "/workouts", icon: DumbbellIcon },
    { name: "Log", path: "/log", icon: Calendar },
    { name: "Results", path: "/results", icon: Trophy },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <DumbbellIcon className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DIE-ATE Planner
            </span>
          </div>
        </div>
      </header>

      <main className="container py-6 flex-1">
        <Outlet />
      </main>

      {showNavbar && (
        <>
          <nav className="fixed bottom-0 left-0 right-0 w-full border-t bg-background z-40">
            <div className="container mx-auto flex justify-between items-center py-2">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={cn(
                    "flex flex-col items-center p-2 rounded-md transition-colors",
                    isActive(item.path) 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-xs mt-1">{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>
          
          {/* Add padding at the bottom when the navbar is shown */}
          <div className="h-16"></div>
        </>
      )}
    </div>
  );
};

export default Layout;
