import { Lightbulb } from "lucide-react";

interface InsightCardProps {
  title: string;
  content: string;
}

export const InsightCard = ({ title, content }: InsightCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-secondary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed">{content}</p>
    </div>
  );
};
