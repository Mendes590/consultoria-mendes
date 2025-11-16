import { DollarSign, TrendingUp, Database, Users } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      icon: DollarSign,
      title: "Dashboard Financeiro para Diretoria",
      description: "Painel executivo com indicadores-chave de performance financeira, análise de receitas, custos e margem de lucro em tempo real.",
      tags: ["Power BI", "SQL", "KPIs Financeiros"],
    },
    {
      icon: TrendingUp,
      title: "Painel Comercial com Funil de Vendas",
      description: "Visualização completa do pipeline de vendas, taxa de conversão por etapa, previsão de fechamento e performance da equipe comercial.",
      tags: ["Power BI", "CRM Integration", "Análise Preditiva"],
    },
    {
      icon: Database,
      title: "Automação de Integração CRM-Database",
      description: "Pipeline automatizado conectando CRM ao banco de dados principal, sincronizando informações de clientes e eliminando entrada manual de dados.",
      tags: ["Python", "APIs", "MySQL"],
    },
    {
      icon: Users,
      title: "Limpeza e Reorganização de Base de Clientes",
      description: "Projeto de data quality: remoção de duplicatas, padronização de campos, enriquecimento de dados e criação de segmentações estratégicas.",
      tags: ["Python", "Data Cleaning", "ETL"],
    },
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Casos de <span className="gradient-text">uso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exemplos de projetos que entregam resultados reais para empresas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;