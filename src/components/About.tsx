import { Mail, Linkedin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const About = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("matheusmachado590@gmail.com");
    toast({
      title: "Email copiado!",
      description: "matheusmachado590@gmail.com foi copiado para a área de transferência.",
    });
  };
  const competencies = [
    "Análise de dados com SQL, Python e Power BI",
    "Construção de dashboards executivos",
    "Limpeza e organização de bases de dados",
    "Pipelines de dados e automações",
    "APIs e integrações entre sistemas",
  ];

  return (
    <section id="sobre" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Quem é o <span className="gradient-text">Matheus Mendes</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Main text */}
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-semibold leading-relaxed">
              Transformo bases de dados em informação clara, informação em insights e insights em decisões.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Atuo com <span className="text-accent font-semibold">SQL</span>, <span className="text-accent font-semibold">Python</span> e <span className="text-accent font-semibold">Power BI</span> para analisar, automatizar e dar vida aos dados. Sempre conectando tecnologia ao negócio.
            </p>

            <div className="space-y-4 pt-4">
              <div className="glass-card p-6 rounded-xl hover-lift">
                <h3 className="font-semibold text-lg mb-2 text-accent">Data & Analytics at TOTVS</h3>
                <p className="text-muted-foreground">
                  Foco em estratégia, análise e uso de dados para tomada de decisão baseada em inteligência de negócio.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl hover-lift">
                <h3 className="font-semibold text-lg mb-2 text-accent">Data & Analytics at Pipeline Capital Tech</h3>
                <p className="text-muted-foreground">
                  Desenvolvi dashboards estratégicos, consultas SQL avançadas, organização de bases em MySQL, automações com Python (Pandas) e integrações entre sistemas.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl hover-lift">
                <h3 className="font-semibold text-lg mb-2 text-accent">Formação Acadêmica</h3>
                <p className="text-muted-foreground">
                  Sistemas de Informação pela PUC-Campinas. Especialização em ETL, automações, APIs e análise de dados.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Competencies */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Competências Principais</h3>
              <ul className="space-y-4">
                {competencies.map((competency, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{competency}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact card */}
            <div className="glass-card p-8 rounded-2xl border-accent/20 hover-lift">
              <h3 className="text-xl font-bold mb-4">Vamos conversar?</h3>
              <div className="space-y-3">
                <button 
                  onClick={copyEmail}
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                >
                  <Mail className="w-5 h-5" />
                  <span>matheusmachado590@gmail.com</span>
                </button>
                <Button variant="outline" className="w-full hover-lift" asChild>
                  <a href="https://www.linkedin.com/in/matheus-mendes-machado/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    Conectar no LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;