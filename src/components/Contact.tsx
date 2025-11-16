import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would typically send the data to a backend
    console.log("Form data:", data);
    
    toast.success("Mensagem enviada com sucesso! Entrarei em contato em breve.");
    e.currentTarget.reset();
  };

  return (
    <section id="contato" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Pronto para transformar seus dados em <span className="gradient-text">decisões reais</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Preencha o formulário abaixo e receba um diagnóstico gratuito sobre os dados da sua empresa
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Entre em contato</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:matheusmachado590@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-accent/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">E-mail</p>
                    <p className="text-sm text-muted-foreground break-all">
                      matheusmachado590@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/matheus-mendes-machado/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-accent/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">
                      Conecte-se comigo
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h4 className="font-semibold mb-4">Resposta rápida</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Normalmente respondo em até 24 horas. Para consultas urgentes, 
                me adicione no LinkedIn ou envie um e-mail diretamente.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="João Silva"
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="joao@empresa.com"
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    name="company"
                    required
                    placeholder="Nome da empresa"
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="size">Tamanho da empresa</Label>
                  <select
                    id="size"
                    name="size"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Selecione</option>
                    <option value="1-10">1-10 funcionários</option>
                    <option value="11-50">11-50 funcionários</option>
                    <option value="51-200">51-200 funcionários</option>
                    <option value="201+">201+ funcionários</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">Área principal</Label>
                <select
                  id="area"
                  name="area"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Selecione</option>
                  <option value="financeiro">Financeiro</option>
                  <option value="comercial">Comercial</option>
                  <option value="operacoes">Operações</option>
                  <option value="marketing">Marketing</option>
                  <option value="rh">Recursos Humanos</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Descreva seu desafio com dados</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Conte-me mais sobre o que você precisa..."
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full hover-lift">
                <Send className="mr-2 h-5 w-5" />
                Solicitar diagnóstico gratuito
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;