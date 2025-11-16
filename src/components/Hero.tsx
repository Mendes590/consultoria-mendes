import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Database, Code, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Data Analytics Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="absolute top-0 left-0 right-0 h-1/2" style={{ background: 'var(--gradient-glow)' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto section-padding text-center">
        {/* Tech badges */}
        <div className="flex gap-3 justify-center mb-8 animate-fade-in-up">
          <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
            <Code className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Python</span>
          </div>
          <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
            <Database className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">SQL</span>
          </div>
          <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Power BI</span>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Transformo dados brutos
          <br />
          em <span className="gradient-text">decisões inteligentes</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Consultoria especializada em Data & Analytics para empresas que querem organizar seus dados, 
          ganhar eficiência e tomar decisões com confiança.
        </p>

        {/* Mini description */}
        <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Organização de bases • Limpeza de dados • Dashboards estratégicos • Automações • Insights para tomada de decisão
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="text-lg px-8 py-6 hover-lift" asChild>
            <a href="#contato">Quero uma análise gratuita</a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-lift" asChild>
            <a href="https://www.linkedin.com/in/matheus-mendes-machado/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              Falar com Matheus no LinkedIn
            </a>
          </Button>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a href="mailto:matheusmachado590@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-4 h-4" />
            matheusmachado590@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/matheus-mendes-machado/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-accent/50 flex justify-center pt-2">
          <div className="w-1.5 h-2 rounded-full bg-accent animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;