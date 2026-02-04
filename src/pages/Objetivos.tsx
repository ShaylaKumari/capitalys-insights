import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus, Target, Car, Home, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";

const objectives = [
  {
    id: 1,
    title: "Veículo Novo",
    icon: Car,
    value: "R$ 60.000,00",
    status: "active",
    recommendation: "Investimento gradual",
    progress: 35,
  },
  {
    id: 2,
    title: "Entrada do Apartamento",
    icon: Home,
    value: "R$ 150.000,00",
    status: "active",
    recommendation: "Consórcio + Investimento",
    progress: 12,
  },
  {
    id: 3,
    title: "Equipamentos",
    icon: Laptop,
    value: "R$ 15.000,00",
    status: "completed",
    recommendation: "Empréstimo pessoal",
    progress: 100,
  },
];

const Objetivos = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">
                Meus Objetivos
              </h1>
            </div>
            <p className="text-muted-foreground">
              Gerencie seus objetivos financeiros e acompanhe o progresso.
            </p>
          </div>
          <Button variant="success" asChild>
            <Link to="/simulacao">
              <Plus className="w-4 h-4" />
              Novo Objetivo
            </Link>
          </Button>
        </motion.div>

        {/* Objectives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, index) => (
            <motion.div
              key={obj.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={cn(
                "bg-card rounded-xl border border-border p-6 shadow-sm",
                obj.status === "completed" && "opacity-75"
              )}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <obj.icon className="w-6 h-6 text-primary" />
                </div>
                <span
                  className={cn(
                    "text-xs font-medium px-2 py-1 rounded-full",
                    obj.status === "active"
                      ? "bg-success/10 text-success"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {obj.status === "active" ? "Ativo" : "Concluído"}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1">
                {obj.title}
              </h3>
              <p className="text-2xl font-bold text-foreground mb-4">
                {obj.value}
              </p>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Progresso</span>
                  <span className="font-medium text-foreground">
                    {obj.progress}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-secondary rounded-full transition-all"
                    style={{ width: `${obj.progress}%` }}
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  Recomendação
                </p>
                <p className="text-sm font-medium text-foreground">
                  {obj.recommendation}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Add New Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link
              to="/simulacao"
              className="flex flex-col items-center justify-center h-full min-h-[280px] bg-card rounded-xl border-2 border-dashed border-border p-6 hover:border-primary/50 hover:bg-muted/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                <Plus className="w-6 h-6 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground font-medium">
                Adicionar Objetivo
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Objetivos;
