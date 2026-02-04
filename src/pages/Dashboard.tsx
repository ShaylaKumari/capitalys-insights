import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/DashboardLayout";
import { IndicatorCard } from "@/components/IndicatorCard";
import { InsightCard } from "@/components/InsightCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus, ArrowRight, Clock } from "lucide-react";

const recentHistory = [
  {
    id: 1,
    date: "02/02/2026",
    indicator: "Selic + IPCA",
    strategy: "Investimento em renda fixa recomendado",
  },
  {
    id: 2,
    date: "28/01/2026",
    indicator: "Selic",
    strategy: "Refinanciamento de dívidas sugerido",
  },
  {
    id: 3,
    date: "20/01/2026",
    indicator: "IPCA",
    strategy: "Aguardar para consórcio",
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-1">
            Olá, João! 👋
          </h2>
          <p className="text-muted-foreground">
            Aqui está um resumo do cenário econômico atual e suas análises.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <IndicatorCard
              title="Cenário Econômico"
              value="Favorável"
              trend="up"
              description="Selic em queda e inflação controlada. Bom momento para crédito e investimentos."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-card rounded-xl border border-border p-6 shadow-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Objetivos Ativos
              </h3>
              <span className="bg-secondary/10 text-secondary text-xs font-medium px-2 py-1 rounded-full">
                2 ativos
              </span>
            </div>
            <p className="text-3xl font-bold text-foreground mb-3">2</p>
            <p className="text-sm text-muted-foreground mb-4">
              Você tem 2 objetivos em análise ativa.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link to="/dashboard/objetivos">
                Ver todos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <InsightCard
              title="Última Recomendação"
              content="Para seu objetivo de aquisição de veículo, o investimento gradual é a melhor opção no cenário atual."
            />
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex gap-4"
        >
          <Button variant="success" asChild>
            <Link to="/simulacao">
              <Plus className="w-4 h-4" />
              Nova Simulação
            </Link>
          </Button>
          <Button variant="outline-primary" asChild>
            <Link to="/dashboard/objetivos">
              <Plus className="w-4 h-4" />
              Adicionar Objetivo
            </Link>
          </Button>
        </motion.div>

        {/* History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="bg-card rounded-xl border border-border shadow-sm"
        >
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold text-foreground">
                Histórico de Insights
              </h3>
            </div>
          </div>
          <div className="divide-y divide-border">
            {recentHistory.map((item) => (
              <div
                key={item.id}
                className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <div>
                  <p className="font-medium text-foreground">{item.strategy}</p>
                  <p className="text-sm text-muted-foreground">
                    Baseado em: {item.indicator}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">{item.date}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
