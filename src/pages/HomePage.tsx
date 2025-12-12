import { User } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  // ALTERE AQUI: Coloque o caminho da sua foto de perfil
  const profileImage = null;

  return (
    <main className="min-h-screen bg-background pt-16">
      <section className="min-h-[85vh] flex flex-col items-center justify-center relative px-6 py-20">
      
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
        
        <div className="text-center z-10 max-w-4xl">
          {/* Foto de perfil */}
          <div className="w-40 h-40 md:w-52 md:h-52 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/30 glow">
            {profileImage ? (
              <img 
                src={profileImage} 
                alt="Foto de perfil" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <User className="w-20 h-20 text-muted-foreground" />
              </div>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
            <span className="text-foreground">QUEM</span>{" "}
            <span className="text-gradient">SOU EU</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Venham conhecer um pouco sobre mim.
          </p>

          {/* Botões de navegação */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/sobre" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Conhecer mais
            </Link>
            <Link 
              to="/galeria" 
              className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              Ver galeria
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HomePage;
