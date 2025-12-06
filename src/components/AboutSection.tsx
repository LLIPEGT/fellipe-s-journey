const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Sobre Mim</h2>
        <div className="card-gradient border border-border rounded-2xl p-8 md:p-12 glow">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
            Gosto de <span className="text-primary font-medium">jogar futebol</span>, 
            experimentar <span className="text-primary font-medium">comidas diferentes</span>, 
            estudar <span className="text-primary font-medium">conteúdos específicos</span> e 
            assistir <span className="text-primary font-medium">filmes</span>. 
            Procuro aprender um pouco de tudo e desejo sempre entregar os melhores resultados 
            em qualquer lugar que eu estiver.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
