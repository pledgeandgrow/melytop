const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Melytop</h3>
            <h3 className="title">Parce qu’un enfant heureux, c’est un parent rassuré.</h3>
            <p className="desc">
            Professionnelle de la santé et experte en petite enfance, je bénéficie de 20 ans d’expérience en maternité, pédiatrie, crèches et accompagnement familial. 
            J’ai également travaillé pendant 10 ans à l’Aide Sociale à l’Enfance aux côtés d’une équipe pluridisciplinaire composée de pédiatres, médecins, psychiatres et infirmières. Forte de cette expérience, 
            je vous propose un accompagnement bienveillant et adapté à vos besoins.
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
