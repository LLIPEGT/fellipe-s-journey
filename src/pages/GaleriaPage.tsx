import { Image } from "lucide-react";

// ALTERE AQUI: Adicione suas fotos favoritas
const photos = [
  { src: null, caption: "Momento especial 1" },
  { src: null, caption: "Momento especial 2" },
  { src: null, caption: "Momento especial 3" },
  { src: null, caption: "Momento especial 4" },
  { src: null, caption: "Momento especial 5" },
  { src: null, caption: "Momento especial 6" },
];

const GaleriaPage = () => {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="section-title text-center">Galeria de Momentos</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Algumas fotos que contam um pouco da minha história
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group aspect-square rounded-xl overflow-hidden border border-border bg-card hover-lift cursor-pointer"
            >
              {photo.src ? (
                <div className="relative w-full h-full">
                  <img 
                    src={photo.src} 
                    alt={photo.caption} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-background text-sm">{photo.caption}</p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                  <Image className="w-10 h-10 mb-2" />
                  <p className="text-xs text-center px-2">{photo.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default GaleriaPage;
