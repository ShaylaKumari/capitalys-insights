import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Calculator,
  CreditCard,
  Users,
  TrendingUp,
  Check,
  Save,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SimulationResult {
  type: "emprestimo" | "consorcio" | "investimento";
  title: string;
  icon: typeof CreditCard;
  totalCost: string;
  monthlyPayment: string;
  timeToAchieve: string;
  pros: string[];
  cons: string[];
  recommended: boolean;
}

const Simulacao = () => {
  const [formData, setFormData] = useState({
    tipoBem: "",
    valorBem: "",
    capitalDisponivel: "",
    prazo: "",
    urgencia: "",
  });
  const [showResults, setShowResults] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const results: SimulationResult[] = [
    {
      type: "emprestimo",
      title: "Empréstimo",
      icon: CreditCard,
      totalCost: "R$ 78.500,00",
      monthlyPayment: "R$ 1.308,33",
      timeToAchieve: "Imediato",
      pros: ["Acesso imediato ao bem", "Previsibilidade das parcelas"],
      cons: ["Custo total maior", "Juros compostos"],
      recommended: false,
    },
    {
      type: "consorcio",
      title: "Consórcio",
      icon: Users,
      totalCost: "R$ 66.000,00",
      monthlyPayment: "R$ 1.100,00",
      timeToAchieve: "12 a 48 meses",
      pros: ["Sem juros, apenas taxa de administração", "Parcelas menores"],
      cons: ["Incerteza na contemplação", "Prazo longo"],
      recommended: false,
    },
    {
      type: "investimento",
      title: "Investimento",
      icon: TrendingUp,
      totalCost: "R$ 60.000,00",
      monthlyPayment: "R$ 1.000,00 (aporte)",
      timeToAchieve: "48 meses",
      pros: ["Rendimento sobre o capital", "Flexibilidade", "Menor custo total"],
      cons: ["Requer disciplina", "Adiamento do objetivo"],
      recommended: true,
    },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              Simulação de Cenários
            </h1>
          </div>
          <p className="text-muted-foreground">
            Informe os detalhes do seu objetivo e receba uma análise comparativa
            personalizada.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-card rounded-xl border border-border p-6 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-foreground mb-6">
            Defina seu Objetivo
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="tipoBem">Tipo de Bem</Label>
                <Select
                  value={formData.tipoBem}
                  onValueChange={(v) => setFormData({ ...formData, tipoBem: v })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de bem" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="veiculo">Veículo</SelectItem>
                    <SelectItem value="imovel">Imóvel</SelectItem>
                    <SelectItem value="equipamento">Equipamento</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="valorBem">Valor do Bem</Label>
                <Input
                  id="valorBem"
                  type="text"
                  placeholder="R$ 60.000,00"
                  value={formData.valorBem}
                  onChange={(e) =>
                    setFormData({ ...formData, valorBem: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="capitalDisponivel">Capital Disponível</Label>
                <Input
                  id="capitalDisponivel"
                  type="text"
                  placeholder="R$ 10.000,00"
                  value={formData.capitalDisponivel}
                  onChange={(e) =>
                    setFormData({ ...formData, capitalDisponivel: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="prazo">Prazo Desejado</Label>
                <Select
                  value={formData.prazo}
                  onValueChange={(v) => setFormData({ ...formData, prazo: v })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o prazo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12 meses</SelectItem>
                    <SelectItem value="24">24 meses</SelectItem>
                    <SelectItem value="36">36 meses</SelectItem>
                    <SelectItem value="48">48 meses</SelectItem>
                    <SelectItem value="60">60 meses</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="urgencia">Grau de Urgência</Label>
                <Select
                  value={formData.urgencia}
                  onValueChange={(v) => setFormData({ ...formData, urgencia: v })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Qual a sua urgência?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="baixa">
                      Baixa - Posso esperar o melhor momento
                    </SelectItem>
                    <SelectItem value="media">
                      Média - Gostaria em até 1 ano
                    </SelectItem>
                    <SelectItem value="alta">
                      Alta - Preciso o mais rápido possível
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" variant="success" size="lg" className="w-full md:w-auto">
              <Calculator className="w-4 h-4" />
              Analisar Cenário
            </Button>
          </form>
        </motion.div>

        {/* Results */}
        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-semibold text-foreground">
                Resultado da Análise
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {results.map((result, index) => (
                  <motion.div
                    key={result.type}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={cn(
                      "bg-card rounded-xl border-2 p-6 shadow-sm relative",
                      result.recommended
                        ? "border-success"
                        : "border-border"
                    )}
                  >
                    {result.recommended && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-success text-success-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          Mais vantajoso
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-3 mb-4 mt-2">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center",
                          result.recommended
                            ? "bg-success/10"
                            : "bg-muted"
                        )}
                      >
                        <result.icon
                          className={cn(
                            "w-5 h-5",
                            result.recommended
                              ? "text-success"
                              : "text-muted-foreground"
                          )}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {result.title}
                      </h3>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          Custo Total
                        </p>
                        <p className="text-xl font-bold text-foreground">
                          {result.totalCost}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          Parcela Mensal
                        </p>
                        <p className="text-lg font-semibold text-foreground">
                          {result.monthlyPayment}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          Tempo para Conquista
                        </p>
                        <p className="text-sm text-foreground">
                          {result.timeToAchieve}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-medium text-success">
                        Vantagens:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {result.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2">
                            <Check className="w-3 h-3 text-success mt-1 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Explanation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-success/5 border border-success/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Por que o Investimento é a melhor opção?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Com a Selic atual em <strong>11,75%</strong> e o IPCA em{" "}
                  <strong>4,62%</strong>, investir seu capital enquanto acumula
                  para o objetivo proporciona rendimento real positivo. Considerando
                  seu prazo flexível e urgência baixa/média, você economiza{" "}
                  <strong>R$ 18.500,00</strong> em relação ao empréstimo,
                  mantendo total controle sobre o capital.
                </p>
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button variant="outline-primary" size="lg">
                  <Save className="w-4 h-4" />
                  Salvar Simulação
                </Button>
                <Button
                  variant="success"
                  size="lg"
                  onClick={() => setShowConfirmModal(true)}
                >
                  <Send className="w-4 h-4" />
                  Confirmar Interesse
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Confirmation Modal */}
        <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirmar Interesse</DialogTitle>
              <DialogDescription className="pt-2">
                Ao confirmar seu interesse, um relatório detalhado com sua
                análise será enviado a um parceiro financeiro credenciado que
                entrará em contato para apresentar as melhores opções disponíveis
                no mercado.
              </DialogDescription>
            </DialogHeader>
            <div className="bg-muted/50 rounded-lg p-4 my-4">
              <p className="text-sm text-muted-foreground">
                <strong>Importante:</strong> CAPITALYS não realiza contratação
                direta de produtos financeiros. Atuamos apenas como facilitadores
                de análise e conexão com instituições parceiras.
              </p>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowConfirmModal(false)}
              >
                Cancelar
              </Button>
              <Button
                variant="success"
                onClick={() => {
                  setShowConfirmModal(false);
                  // Handle confirmation
                }}
              >
                Confirmar Envio
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default Simulacao;
