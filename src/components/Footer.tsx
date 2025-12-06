const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl font-display font-semibold text-gradient mb-2">
          Fellipe Fernandes Nogueira
        </p>
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} • Construindo o futuro
        </p>
      </div>
    </footer>
  );
};

export default Footer;
