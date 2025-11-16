import { Database, BarChart3, Zap, Target, Layers } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Organização & Estruturação de Dados",
      description: "Limpeza, tratamento e padronização de bases de dados. Modelagem de dados para facilitar análise e relatórios.",
      benefit: "Bases confiáveis, organizadas e prontas para uso",
    },
    {
      icon: BarChart3,
      title: "Dashboards & Visualização de Dados",
      description: "Criação de dashboards executivos e operacionais com Power BI. KPIs financeiros, comerciais e operacionais.",
      benefit: "Painéis visuais para acompanhar o negócio em tempo real",
    },
    {
      icon: Zap,
      title: "Pipelines & Automações",
      description: "ETLs e fluxos automatizados com Python + SQL para reduzir tarefas manuais. Integrações entre sistemas.",
      benefit: "Processos mais rápidos, menos erros, mais produtividade",
    },
    {
      icon: Target,
      title: "Consultoria Estratégica Data-Driven",
      description: "Análises aprofundadas de dados do negócio. Geração de insights e recomendações práticas para decisões.",
      benefit: "Suporte à tomada de decisão embasada em dados",
    },
    {
      icon: Layers,
      title: "APIs & Integrações Personalizadas",
      description: "Criação de endpoints em Python ou PHP/Laravel. Integração com sistemas internos e externos.",
      benefit: "Dados fluindo entre ferramentas de forma organizada",
    },
  ];

  return (
    <section id="servicos" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Serviços de <span className="gradient-text">Consultoria</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em dados para transformar a forma como sua empresa toma decisões
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-semibold text-accent flex items-start gap-2">
                    <span className="text-accent/50">→</span>
                    <span>{service.benefit}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;