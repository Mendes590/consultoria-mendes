import { Mail, Linkedin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const copyEmail = () => {
    navigator.clipboard.writeText("matheusmachado590@gmail.com");
    toast({
      title: "Email copiado!",
      description: "matheusmachado590@gmail.com foi copiado para a área de transferência.",
    });
  };

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2 gradient-text">
              Matheus Mendes
            </h3>
            <p className="text-muted-foreground mb-4">
              Consultoria em Dados & Analytics
            </p>
            <p className="text-sm text-muted-foreground/80 italic">
              Dados organizados. Decisões inteligentes.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-accent transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                matheusmachado590@gmail.com
              </button>
              <a
                href="https://www.linkedin.com/in/matheus-mendes-machado/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                linkedin.com/in/matheus-mendes-machado
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Matheus Mendes — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;