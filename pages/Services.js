const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Mes Services</h3>
            <h3 className="title">Service Unique adapté à Vos Attentes!</h3>
            <p className="desc">
            Faites confiance à une professionnelle dévouée pour offrir un environnement sécurisé, 
            stimulant et bienveillant à vos enfants. 
            Mes services s’adressent aussi bien aux familles qu’aux structures collectives souhaitant une expertise fiable et flexible.
            </p>
          </div>
          {/* /Main Title */}
          {/* Services List */}
          <div className="resumo_fn_service_list">
            <ul>
              <li>
                <div className="item">
                  <div className="item_left">
                    <h3>Services de Garde d’Enfants</h3>
                    <p className="classe">
                    Garde à domicile pour nourrissons et enfants. <br />
                    Préparation et gestion des repas équilibrés adaptés à l’âge. <br />
                    Surveillance et sécurité pour un environnement sûr et apaisant.
                    </p>
                  </div>
                  <div className="item_right">
                    <p>Starts from</p>
                    <h3>£599</h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="item_left">
                    <h3>Services d’Éveil et d’Animation</h3>
                    <p>
                    Activités ludiques et éducatives (peinture, lecture, jeux). <br />
                    Ateliers de motricité fine et globale. <br />
                    Sorties éducatives (parcs, musées). <br />
                    </p>
                  </div>
                  <div className="item_right">
                    <p>Starts from</p>
                    <h3>£399</h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="item_left">
                    <h3>Accompagnement Périnatal et Parental</h3>
                    <p>
                    Soutien postnatal à domicile ou en maternité. <br />
                    Ateliers parent-enfant pour renforcer les liens familiaux. <br />
                    Formation aux premiers gestes de secours pour bébé. <br />
                    </p>
                  </div>
                  <div className="item_right">
                    <p>Starts from</p>
                    <h3>£499</h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="item_left">
                    <h3>Assistance en Structures Collectives</h3>
                    <p>
                    Gestion de sections en crèche ou maternité. <br />
                    Organisation d’événements collectifs (fêtes, spectacles). <br />
                    Soutien éducatif en foyers mère-enfant. <br />
                    </p>
                  </div>
                  <div className="item_right">
                    <p>Starts from</p>
                    <h3>£299</h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* /Services List */}
        </div>
      </div>
    </section>
  );
};

export default Services;
