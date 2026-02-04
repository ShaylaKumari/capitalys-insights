import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Visão Econômica", href: "/" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Acessar Plataforma", href: "/dashboard" },
];

export const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.slice(0, 2).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <Link to="/login">Entrar</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/dashboard">Acessar Plataforma</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
