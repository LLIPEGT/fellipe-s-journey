const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        {/* ALTERE AQUI: Seu nome */}
        <p className="text-2xl font-display font-semibold text-gradient mb-2">
          Fellipe Fernandes Nogueira
        </p>
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} • Minha história, minha jornada
        </p>
      </div>
    </footer>
  );
};

export default Footer;
