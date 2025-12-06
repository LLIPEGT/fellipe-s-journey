import { UtensilsCrossed } from "lucide-react";

const foods = [
  { name: "Empadão", emoji: "🥧" },
  { name: "Pizza", emoji: "🍕" },
  { name: "Pudim", emoji: "🍮" },
];

const FoodSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <UtensilsCrossed className="w-8 h-8 text-primary" />
          <h2 className="section-title !mb-0">Comidas Favoritas</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {foods.map((food, index) => (
            <div
              key={food.name}
              className="card-gradient border border-border rounded-xl p-8 text-center hover-lift cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-5xl mb-4 block">{food.emoji}</span>
              <h3 className="text-xl font-semibold text-foreground">{food.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
