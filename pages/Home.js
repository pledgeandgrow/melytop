const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Bienvenue à </h3>
            <h3 className="title">Auxiliaire de Puériculture Diplômée d’État</h3>
            <p className="desc">
            Professionnelle de la santé et experte en petite enfance, avec 20 ans d’expérience en maternité,
             pédiatrie, crèches et accompagnement familial, je vous propose un accompagnement bienveillant
              et adapté à vos besoins.
            </p>
            <a href="#contact" className="btn-animation"><p>Dire Bonjour</p></a>
          </div>
          {/* /Main Title */}
        </div>
      </div>
    </section>
  );
};

export default Home;
