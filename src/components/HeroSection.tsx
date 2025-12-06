import { User } from "lucide-react";

const HeroSection = () => {
  // ALTERE AQUI: Coloque o caminho da sua foto de perfil
  const profileImage = null; // Ex: "/sua-foto.jpg" ou import de src/assets

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center relative px-6 py-20">
      {/* Decorative background */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
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
              <span className="sr-only">Adicione sua foto</span>
            </div>
          )}
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
          {/* ALTERE AQUI: Seu nome */}
          <span className="text-foreground">Fellipe</span>{" "}
          <span className="text-gradient">Fernandes Nogueira</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {/* ALTERE AQUI: Sua frase de apresentação */}
          Em busca de me encontrar como pessoa e como profissional.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
