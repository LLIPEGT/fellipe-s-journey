import { Gamepad2, Code, Film, Music } from "lucide-react";

const hobbies = [
  { name: "Jogar Futebol", icon: Gamepad2, description: "Minha paixão no esporte" },
  { name: "Programação", icon: Code, description: "Estudar e criar soluções" },
  { name: "Filmes", icon: Film, description: "Todos os gêneros" },
  { name: "Música", icon: Music, description: "Ouvir e descobrir" },
];

const HobbiesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Meus Hobbies</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.name}
              className="group card-gradient border border-border rounded-xl p-6 text-center hover-lift cursor-default"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <hobby.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{hobby.name}</h3>
              <p className="text-sm text-muted-foreground">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
