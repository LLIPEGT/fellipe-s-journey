import { NavLink } from "@/components/NavLink";
import { Home, User, Heart, Images } from "lucide-react";

const navItems = [
  { name: "Início", path: "/", icon: Home },
  { name: "Sobre Mim", path: "/sobre", icon: User },
  { name: "Interesses", path: "/interesses", icon: Heart },
  { name: "Galeria", path: "/galeria", icon: Images },
];

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Nome */}
          <NavLink to="/" className="font-display text-xl font-semibold text-gradient">
            Fellipe
          </NavLink>

          {/* Menu */}
          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-sm md:text-base"
                activeClassName="!text-primary !bg-primary/10 font-medium"
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden md:inline">{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
