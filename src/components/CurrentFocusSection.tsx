import { Target } from "lucide-react";

const CurrentFocusSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-8">
          <Target className="w-5 h-5 text-primary" />
          <span className="text-primary font-medium">Foco Atual</span>
        </div>
        
        <div className="card-gradient border border-border rounded-2xl p-8 md:p-12 glow">
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-display">
            "Atualmente estou em busca de me encontrar como pessoa e como profissional. 
            Procuro aprender um pouco de tudo e desejo sempre entregar os 
            <span className="text-primary"> melhores resultados</span> em qualquer lugar que eu estiver."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurrentFocusSection;
