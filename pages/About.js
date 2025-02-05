import { useState } from "react";
const About = () => {
  const [toggleList, setToggleList] = useState("tab1");
  const activeList = (value) => (value === toggleList ? "active" : "");
  return (
    <section id="about">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">A propos de moi</h3><br  />
            <h3 className="title1">Biography</h3>
            <p className="desc">
              {`Je suis auxiliaire de puériculture diplômée avec 20 ans d’expérience dans le domaine de la petite enfance.
               Mon parcours m’a conduite à travailler dans divers environnements tels que les maternités, les crèches,
                les foyers mère-enfant, et plus encore.`}
            </p>
          </div>
          {/* /Main Title */}
          {/* About Information */}
          <div className="resumo_fn_about_info">
            <div className="about_left">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Melissa</th>
                  </tr>
                  <tr>
                    <th>Birthday</th>
                    <th>14 Janvier 1985</th>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <th>40 ans</th>
                  </tr>
                  <tr>
                    <th>Addresse</th>
                    <th>Paris, Ile de France</th>
                  </tr>
                  <tr>
                    <th>Telephone</th>
                    <th>
                      <a href="tel:+3846923442364">(+33) 782321168</a>
                    </th>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <th>
                      <a href="mailto:melissarla@yahoo.com">
                      melissarla@yahoo.com
                      </a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="about_right">
              {/* Download CV Button */}
              <div className="resumo_fn_cv_btn">
                <a href="img/cv.jpg" download>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <path d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg arrow replaced-svg"
                    >
                      <path d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z" />
                    </svg>
                  </span>
                  <span>Download CV</span>
                </a>
              </div>
              {/* /Download CV Button */}
            </div>
          </div>
          <section className="info_section_layout_padding">
    <div className="container1">
    <h3 className="title3">Pourquoi choisir Melissa ?</h3><br /><br />
      <div className="info_items">
          <div className="item ">
            <div className="img-box box-1">
            🌟
            </div>
            <div className="detail-box">
              <p>
              20 ans d’expérience 
              </p>
            </div>
          </div>
          <div className="item ">
            <div className="img-box box-2">
            🤝
            </div>
            <div className="detail-box">
              <p>
              Fiable et flexible
              </p>
            </div>
       </div>
        
          <div className="item ">
            <div className="img-box box-3">
            🎨
            </div>
            <div className="detail-box">
              <p>
               Approche éducative
              </p>
            </div>
          </div>
      </div>
    </div>
  </section> 

          {/* /About Information */}
          {/* Tabs Shortcode */}
          <div className="resumo_fn_tabs">
            {/* Tab: Header */}
            <div className="tab_header">
              <ul>
                <li className={activeList("tab1")}>
                  <a href="#" onClick={() => setToggleList("tab1")}>
                    Experience
                  </a>
                </li>
                <li className={activeList("tab2")}>
                  <a href="#" onClick={() => setToggleList("tab2")}>
                    Education
                  </a>
                </li>
                <li className={activeList("tab3")}>
                  <a href="#" onClick={() => setToggleList("tab3")}>
                    Skills
                  </a>
                </li>
              </ul>
            </div>
            {/* /Tab: Header */}
            {/* Tab: Content */}
            <div className="tab_content">
              {/* #1 tab content */}
              <div id="tab1" className={`tab_item ${activeList("tab1")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>En Maternité</h5>
                          <span>( 2001 — Today )</span>
                        </div>
                        <h3>Experience en Maternité</h3>
                        <p>
                        Accompagnement des mamans dans les premiers soins aux nouveau-nés.<br></br>
                        Surveillance et suivi postnatal des enfants et des mères.
                        
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>En Crèche</h5>
                          <span>( 2002 — Today )</span>
                        </div>
                        <h3>Experience d'Aptitude aux Fonctions d'Animateur</h3>
                        <p>
                        Contribution au développement et à l’éveil des enfants à travers des activités adaptées. <br></br>
                        Soins d’hygiène, gestion des repas, et accueil des parents.<br></br>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Baby-sitter</h5>
                          <span>( 2014 — 2019 )</span>
                        </div>
                        <h3>Experience en Baby-sitter</h3>
                        <p>
                        Encadrement et éveil des enfants à travers des activités ludiques et éducatives . <br />
Développement d’une relation de confiance avec les enfants et les parents .<br />
Gestion des situations conflictuelles et des comportements difficiles .<br />
                        
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#1 tab content */}
              {/* #2 tab content */}
              <div id="tab2" className={`tab_item ${activeList("tab2")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>DEAP</h5>
                          <span>( 2005 — 2007 )</span>
                        </div>
                        <h3>Diplôme d'État d'Auxiliaire de Puériculture</h3>
                        <p>
                        Formation spécialisée dans l'accompagnement et les soins aux nourrissons et jeunes enfants,
                         avec une approche axée sur le développement, l'hygiène et le bien-être infantile.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>BAFA</h5>
                          <span>( 2002 — 2004 )</span>
                        </div>
                        <h3>Brevet d'Aptitude aux Fonctions d'Animateur</h3>
                        <p>
                        Formation à l'animation et à l'encadrement de groupes d'enfants et d'adolescents, avec un focus sur la pédagogie,
                         la sécurité et l'organisation d'activités ludiques et éducatives.
                        </p>
                      </div>
                    </li>
                   
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Baccalauréat Sciences Médico-Sociales</h5>
                          <span>( 2000 — 2002 )</span>
                        </div>
                        <h3>Brevet d'Aptitude aux Fonctions d'Animateur</h3>
                        <p>   Formation axée sur les sciences sanitaires et sociales, préparant aux métiers du secteur médical et social,
 avec des connaissances en biologie, psychologie et accompagnement des publics en difficulté.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#2 tab content */}
              {/* #3 tab content */}
              <div id="tab3" className={`tab_item ${activeList("tab3")}`}>
                {/* Progress Bar */}
                <div className="resumo_fn_progress_bar">
                  <div className="progress_item open" data-value={92}>
                    <div className="item_in">
                      <h3 className="progress_title">Coaching post-natal</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "8%" }}
                      >
                        98%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "97%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={95}>
                    <div className="item_in">
                      <h3 className="progress_title">Soutien à la parentalité</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "8%" }}
                      >
                        95%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "95%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={90}>
                    <div className="item_in">
                      <h3 className="progress_title">Gestion de l’alimentation et du sommeil</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "8%" }}
                      >
                        90%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "93%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={90}>
                    <div className="item_in">
                      <h3 className="progress_title">Conseils sur la diversification alimentaire,</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "8%" }}
                      >
                        95%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "95%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* /Progress Bar */}
                {/* Description */}
                <div className="resumo_fn_desc">
                  <p>
                  Avec une expertise approfondie en coaching post-natal, j’aide les parents à aborder les premiers mois de bébé avec sérénité. Mon savoir-faire s’étend au soutien à la parentalité, à la gestion de l’alimentation et du sommeil, ainsi qu’aux conseils pratiques sur la diversification alimentaire. Grâce à une approche bienveillante et adaptée, je mets mes compétences au service du bien-être familial.
                  </p>
                </div>
              </div>
              {/* /#2 tab content */}
            </div>
            {/* /Tab: Content */}
          </div>
          {/* /Tabs Shortcode */}
        </div>
      </div>
    </section>
  );
};

export default About;
