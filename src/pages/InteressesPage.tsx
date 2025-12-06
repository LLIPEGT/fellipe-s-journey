import { Image } from "lucide-react";

// ALTERE AQUI: Suas categorias de interesse com fotos
const interests = [
  {
    title: "Comidas Favoritas",
    items: ["Empadão 🥧", "Pizza 🍕", "Pudim 🍮"],
    image: null,
    description: "Adoro experimentar comidas diferentes e esses são meus favoritos!",
  },
  {
    title: "Hobbies",
    items: ["Jogar futebol ⚽", "Estudar programação 💻", "Assistir filmes 🎬", "Ouvir músicas 🎵"],
    image: null,
    description: "Como passo meu tempo livre quando não estou trabalhando.",
  },
];

const InteressesPage = () => {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="section-title text-center">O Que Eu Gosto</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Algumas coisas que fazem parte do meu dia a dia e me fazem feliz
        </p>
        
        <div className="space-y-12">
          {interests.map((interest, index) => (
            <div 
              key={interest.title}
              className={`grid md:grid-cols-2 gap-8 items-center`}
            >
              {/* Foto */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="aspect-video rounded-xl overflow-hidden border border-border bg-card">
                  {interest.image ? (
                    <img 
                      src={interest.image} 
                      alt={interest.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                      <Image className="w-12 h-12 mb-2" />
                      <p className="text-sm">Foto: {interest.title}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Conteúdo */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="card-gradient border border-border rounded-xl p-6">
                  <h2 className="text-2xl font-display font-semibold text-gradient mb-3">
                    {interest.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{interest.description}</p>
                  <ul className="space-y-2">
                    {interest.items.map((item) => (
                      <li key={item} className="text-foreground/90 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default InteressesPage;
