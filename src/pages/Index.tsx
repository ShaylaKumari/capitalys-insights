import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IndicatorCard } from "@/components/IndicatorCard";
import { EconomicChart } from "@/components/EconomicChart";
import { InsightCard } from "@/components/InsightCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Inteligência Macroeconômica para{" "}
              <span className="text-secondary">Decisões Financeiras</span>{" "}
              Estratégicas
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Transformamos indicadores como Selic e IPCA em insights claros para 
              você tomar as melhores decisões sobre empréstimos, consórcios e investimentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="success" size="xl" asChild>
                <Link to="/simulacao">
                  Começar Análise
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#indicadores">Ver Indicadores</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Indicators Section */}
      <section id="indicadores" className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Indicadores Econômicos
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Acompanhe em tempo real os principais indicadores que impactam suas decisões financeiras
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <IndicatorCard
                title="Taxa Selic"
                value="11,75%"
                change="-0,50 p.p."
                trend="down"
                description="Taxa básica de juros em trajetória de queda, favorecendo operações de crédito e refinanciamento."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <IndicatorCard
                title="IPCA Acumulado"
                value="4,62%"
                change="-0,06 p.p."
                trend="down"
                description="Inflação em desaceleração, mantendo poder de compra e previsibilidade para planejamento."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <InsightCard
                title="Insight Econômico"
                content="Com Selic em queda e inflação controlada, o momento é favorável para renegociação de dívidas e análise de novos investimentos em renda fixa pós-fixada."
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <EconomicChart />
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Em 3 passos simples, você obtém recomendações estratégicas personalizadas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Defina seu Objetivo",
                description:
                  "Informe o bem desejado, valor, prazo e sua urgência. Quanto mais detalhes, melhor a análise.",
              },
              {
                icon: BarChart3,
                title: "Análise Inteligente",
                description:
                  "Nosso motor compara cenários de empréstimo, consórcio e investimento com base nos indicadores atuais.",
              },
              {
                icon: TrendingUp,
                title: "Decisão Estratégica",
                description:
                  "Receba uma recomendação clara e fundamentada para alcançar seu objetivo da melhor forma.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Pronto para tomar decisões mais inteligentes?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Comece agora sua análise personalizada e descubra a melhor estratégia 
              para alcançar seus objetivos financeiros.
            </p>
            <Button variant="secondary" size="xl" asChild>
              <Link to="/simulacao">
                Iniciar Simulação Gratuita
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
