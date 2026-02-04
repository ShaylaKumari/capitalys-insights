import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface IndicatorCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  description: string;
  className?: string;
}

export const IndicatorCard = ({
  title,
  value,
  change,
  trend = "neutral",
  description,
  className,
}: IndicatorCardProps) => {
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;

  return (
    <div
      className={cn(
        "bg-card rounded-xl border border-border p-6 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          {title}
        </h3>
        {change && (
          <div
            className={cn(
              "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
              trend === "up" && "bg-success/10 text-success",
              trend === "down" && "bg-destructive/10 text-destructive",
              trend === "neutral" && "bg-muted text-muted-foreground"
            )}
          >
            <TrendIcon className="w-3 h-3" />
            {change}
          </div>
        )}
      </div>

      <p className="text-3xl font-bold text-foreground mb-3">{value}</p>

      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};
