import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export const Logo = ({ className, variant = "dark" }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn(
        "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg",
        variant === "dark" ? "bg-primary text-primary-foreground" : "bg-white/20 text-white"
      )}>
        C
      </div>
      <span className={cn(
        "text-xl font-bold tracking-tight",
        variant === "dark" ? "text-primary" : "text-white"
      )}>
        CAPITALYS
      </span>
    </div>
  );
};
