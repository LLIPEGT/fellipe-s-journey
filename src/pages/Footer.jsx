import { User } from "lucide-react";
import { Link } from "react-router-dom";

const Seila = () => {
  // ALTERE AQUI: Coloque o caminho da sua foto de perfil

  return (
      <div className="py-8 px-6 border-t border-border text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Fellipe Fernandes
        </p>
      </div>
  );
};

export default Seila;
