import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Minha empresa não tem os dados organizados, dá para começar mesmo assim?",
      answer: "Sim! Na verdade, esse é um dos cenários mais comuns. A consultoria começa justamente com o diagnóstico e organização dos dados. Não importa o quão desorganizada está a base atual - o trabalho inicial sempre envolve limpeza, estruturação e preparação dos dados para análise.",
    },
    {
      question: "Quanto tempo leva um projeto de consultoria de dados?",
      answer: "Depende do escopo e complexidade. Um dashboard simples pode levar de 1 a 2 semanas. Projetos mais complexos de reestruturação de dados e automações podem levar de 1 a 3 meses. No diagnóstico inicial, já conseguimos estimar o prazo com mais precisão.",
    },
    {
      question: "Vocês trabalham com pequenas empresas?",
      answer: "Sim! Atendo desde pequenas empresas até grandes corporações. O importante é ter dados que precisam ser organizados e transformados em insights. Cada projeto é adaptado ao tamanho e necessidade específica do negócio.",
    },
    {
      question: "Que tipos de ferramentas vocês usam?",
      answer: "Trabalho principalmente com SQL para consultas e manipulação de dados, Python para automações e análises complexas, e Power BI para visualização e dashboards. Também faço integrações com diversas ferramentas como CRMs, ERPs e bancos de dados (MySQL, PostgreSQL, etc).",
    },
    {
      question: "Os dados da minha empresa ficam seguros?",
      answer: "Absolutamente. Segurança e confidencialidade são prioridades. Todo projeto começa com acordo de confidencialidade (NDA), os dados são tratados em ambientes seguros, e sigo todas as melhores práticas de proteção de dados, incluindo conformidade com LGPD.",
    },
    {
      question: "Preciso ter conhecimento técnico para acompanhar o projeto?",
      answer: "Não é necessário. Todo o trabalho é explicado de forma clara e acessível. Os entregáveis são feitos para serem intuitivos e fáceis de usar. Quando necessário, forneço treinamento e documentação para que sua equipe consiga utilizar as ferramentas criadas.",
    },
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Respostas para as dúvidas mais comuns sobre a consultoria
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card px-8 py-2 rounded-xl border-none"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;