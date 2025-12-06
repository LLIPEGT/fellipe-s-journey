import { Image } from "lucide-react";

const BiographySection = () => {
  // ALTERE AQUI: Coloque o caminho de uma foto sua
  const bioImage = null; // Ex: "/foto-biografia.jpg"

  return (
    <section id="sobre" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center">Quem Sou Eu</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Foto */}
          <div className="order-2 md:order-1">
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
          <div className="order-1 md:order-2 space-y-6">
            <div className="card-gradient border border-border rounded-xl p-6">
              <h3 className="text-primary font-semibold mb-3">Sobre mim</h3>
              {/* ALTERE AQUI: Escreva sobre você */}
              <p className="text-foreground/90 leading-relaxed">
                Gosto de jogar futebol, experimentar comidas diferentes, estudar 
                conteúdos específicos e assistir filmes. Procuro aprender um pouco 
                de tudo e desejo sempre entregar os melhores resultados em qualquer 
                lugar que eu estiver.
              </p>
            </div>

            <div className="card-gradient border border-border rounded-xl p-6">
              <h3 className="text-primary font-semibold mb-3">Meu foco atual</h3>
              {/* ALTERE AQUI: Seu foco atual */}
              <p className="text-foreground/90 leading-relaxed">
                Atualmente estou em busca de me encontrar como pessoa e como 
                profissional. Procuro aprender um pouco de tudo e desejo sempre 
                entregar os melhores resultados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
