import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="text-center z-10 max-w-4xl">
        <p className="text-muted-foreground text-lg md:text-xl mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Olá, eu sou
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <span className="text-foreground">Fellipe</span>{" "}
          <span className="text-gradient">Fernandes</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          Em busca de me encontrar como pessoa e como profissional.
          Sempre buscando entregar os melhores resultados.
        </p>
      </div>

      <a 
        href="#sobre"
        className="absolute bottom-12 opacity-0 animate-fade-up cursor-pointer"
        style={{ animationDelay: "1s" }}
      >
        <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
