import { Heart, Trophy, Baby, Sparkles, Star } from "lucide-react";

const dreams = [
  { text: "Casar", icon: Heart },
  { text: "Ser bem-sucedido", icon: Trophy },
  { text: "Ter filhos", icon: Baby },
  { text: "Criar algo novo no mundo", icon: Sparkles },
  { text: "Ser motivo de orgulho dos meus pais", icon: Star },
];

const DreamsSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="section-title text-center">Meus Sonhos</h2>
        
        <div className="space-y-4">
          {dreams.map((dream, index) => (
            <div
              key={dream.text}
              className="card-gradient border border-border rounded-xl p-6 flex items-center gap-4 hover-lift cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <dream.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-lg font-medium text-foreground">{dream.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DreamsSection;
