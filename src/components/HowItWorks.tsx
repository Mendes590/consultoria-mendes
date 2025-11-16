import { Button } from "@/components/ui/button";
import { Search, FolderOpen, LineChart, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Diagnóstico inicial gratuito",
      description: "Reunião rápida para entender o cenário da empresa e os problemas com dados.",
    },
    {
      icon: FolderOpen,
      number: "02",
      title: "Mapeamento e organização das bases",
      description: "Coleta, limpeza e estruturação dos dados para criar uma fundação sólida.",
    },
    {
      icon: LineChart,
      number: "03",
      title: "Construção de dashboards e automações",
      description: "Criação de visualizações, scripts, pipelines e relatórios estratégicos.",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Entrega + acompanhamento",
      description: "Revisão com o cliente, explicação dos insights e planejamento dos próximos passos.",
    },
  ];

  return (
    <section id="como-funciona" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Como funciona a <span className="gradient-text">consultoria</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo estruturado e transparente, do diagnóstico inicial até a entrega de resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative glass-card p-8 rounded-2xl hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-accent/10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {step.description}
                </p>

                {/* Connector line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent/50 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-6 hover-lift" asChild>
            <a href="#contato">Quero começar agora</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;