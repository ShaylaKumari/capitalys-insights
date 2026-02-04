import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/DashboardLayout";
import { FileText, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  {
    id: 1,
    title: "Análise Mensal - Janeiro 2026",
    date: "01/02/2026",
    type: "Relatório Mensal",
    summary: "Resumo das análises e recomendações do período.",
  },
  {
    id: 2,
    title: "Simulação: Veículo Novo",
    date: "28/01/2026",
    type: "Simulação",
    summary: "Comparativo entre empréstimo, consórcio e investimento.",
  },
  {
    id: 3,
    title: "Análise Mensal - Dezembro 2025",
    date: "02/01/2026",
    type: "Relatório Mensal",
    summary: "Resumo das análises e recomendações do período.",
  },
];

const Relatorios = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Relatórios</h1>
          </div>
          <p className="text-muted-foreground">
            Acesse seus relatórios e histórico de análises.
          </p>
        </motion.div>

        {/* Reports List */}
        <div className="space-y-4">
          {reports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {report.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {report.summary}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {report.date}
                    </span>
                    <span className="bg-muted px-2 py-0.5 rounded text-xs font-medium">
                      {report.type}
                    </span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Relatorios;
