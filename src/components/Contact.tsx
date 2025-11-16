import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Pronto para transformar seus dados em <span className="gradient-text">decisões reais</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre em contato para conversar sobre como posso ajudar sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="mailto:matheusmachado590@gmail.com"
            className="glass-card p-8 rounded-2xl hover-lift group transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">E-mail</h3>
                <p className="text-muted-foreground break-all">
                  matheusmachado590@gmail.com
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Envie um e-mail direto
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/matheus-mendes-machado/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-8 rounded-2xl hover-lift group transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <Linkedin className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">LinkedIn</h3>
                <p className="text-muted-foreground">
                  Conecte-se comigo
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Vamos conversar por lá
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="glass-card p-8 rounded-2xl mt-8 text-center">
          <h4 className="font-semibold text-lg mb-4">Resposta rápida</h4>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Normalmente respondo em até 24 horas. Para consultas urgentes, 
            me adicione no LinkedIn ou envie um e-mail diretamente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
