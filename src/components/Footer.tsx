import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-sm text-muted-foreground max-w-md">
              Plataforma de inteligência macroeconômica que transforma indicadores 
              econômicos em insights e recomendações financeiras estratégicas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Plataforma</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Visão Econômica</a></li>
              <li><a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a></li>
              <li><a href="/dashboard" className="hover:text-primary transition-colors">Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Aviso:</strong> CAPITALYS é uma plataforma de análise e simulação financeira. 
            Não realizamos contratação direta de produtos financeiros. As recomendações apresentadas 
            são baseadas em indicadores econômicos e não constituem aconselhamento financeiro personalizado.
          </p>
          <p className="text-xs text-muted-foreground text-center mt-4">
            © {new Date().getFullYear()} CAPITALYS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
