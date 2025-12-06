import { Image } from "lucide-react";
import bioImage from "../img/sobremim.png";

const SobrePage = () => {
  // ALTERE AQUI: Coloque o caminho de uma foto sua

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="section-title text-center">Quem Sou Eu</h1>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Foto */}
          <div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-secondary">
              {bioImage ? (
                <img 
                  src={bioImage} 
                  alt="Foto pessoal" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                  <Image className="w-16 h-16 mb-3" />
                  <p className="text-sm">Adicione uma foto sua aqui</p>
                </div>
              )}
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <div className="card-gradient border border-border rounded-xl p-6">
              <h2 className="text-primary font-semibold text-lg mb-3">Sobre mim</h2>
              {/* ALTERE AQUI: Escreva sobre você */}
              <p className="text-foreground/90 leading-relaxed">
                Gosto de jogar futebol, experimentar comidas diferentes, estudar 
                conteúdos específicos e assistir filmes. Procuro aprender um pouco 
                de tudo e desejo sempre entregar os melhores resultados em qualquer 
                lugar que eu estiver.
              </p>
            </div>

            <div className="card-gradient border border-border rounded-xl p-6">
              <h2 className="text-primary font-semibold text-lg mb-3">Meu foco atual</h2>
              {/* ALTERE AQUI: Seu foco atual */}
              <p className="text-foreground/90 leading-relaxed">
                Atualmente estou em busca de me encontrar como pessoa e como 
                profissional. Procuro aprender um pouco de tudo e estou em busca da efetivação.
              </p>
            </div>

            <div className="card-gradient border border-border rounded-xl p-6">
              <h2 className="text-primary font-semibold text-lg mb-3">Meus sonhos</h2>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Casar 💍
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Ser bem-sucedido 🏆
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Ter filhos 👨‍👩‍👧
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Criar algo novo no mundo ✨
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Orgulhar meus pais ⭐
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SobrePage;
