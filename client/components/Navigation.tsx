import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Users, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "Qui sommes-nous", href: "/about" },
  { name: "Nos Actions", href: "/projects" },
  { name: "Actualités", href: "/news" },
  { name: "Rejoignez-nous", href: "/join" },
  { name: "Transparence", href: "/reports" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-sm border border-border overflow-hidden">
              <img
                src="https://static.wixstatic.com/media/ad6561_5d52161614f94c909170f7fe4eedf4c9~mv2.png/v1/crop/x_0,y_14,w_300,h_253/fill/w_344,h_338,al_c,lg_1,q_85,enc_auto/site-logo300.png"
                alt="SE International Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-foreground">
                SE International
              </div>
              <div className="text-sm text-muted-foreground">
                Building a Better World
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/dashboard">
                <Users className="w-4 h-4 mr-2" />
                Espace Membre
              </Link>
            </Button>
            <Button asChild>
              <Link to="/donate">
                <Heart className="w-4 h-4 mr-2" />
                Faire un Don
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block text-base font-medium transition-colors hover:text-primary",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-border">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/dashboard">
                  <Users className="w-4 h-4 mr-2" />
                  Espace Membre
                </Link>
              </Button>
              <Button className="w-full" asChild>
                <Link to="/donate">
                  <Heart className="w-4 h-4 mr-2" />
                  Faire un Don
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
