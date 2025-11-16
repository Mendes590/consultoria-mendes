import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO",
      company: "TechCorp Solutions",
      content: "A consultoria do Matheus foi essencial para organizarmos nossa base de dados. Agora tomamos decisões muito mais rápidas e embasadas.",
    },
    {
      name: "Ana Paula Santos",
      role: "Diretora Financeira",
      company: "Investimentos Premium",
      content: "Os dashboards criados transformaram nossa visão do negócio. Conseguimos identificar oportunidades que antes passavam despercebidas.",
    },
    {
      name: "Ricardo Oliveira",
      role: "Gerente Comercial",
      company: "VendaMais",
      content: "As automações implementadas economizaram dezenas de horas por semana da equipe. O ROI foi impressionante.",
    },
  ];

  return (
    <section id="depoimentos" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            O que dizem os <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reais de empresas que transformaram seus dados em vantagem competitiva
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-accent/30 mb-4" />
              
              <p className="text-lg leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="pt-4 border-t border-border/50">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} • {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;