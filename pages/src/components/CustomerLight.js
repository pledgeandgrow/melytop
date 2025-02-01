import { Swiper, SwiperSlide } from "swiper/react";
import { customersSliderProps } from "../sliderProps";
const CustomerLight = () => {
  return (
    <section id="customers">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Customers</h3>
            <h3 className="title">Happy People</h3>
          </div>
          {/* /Main Title */}
          {/* Partners */}
          <div className="resumo_fn_partners">
            <ul>
              <li>
                <a href="www.google.com" rel="noreferrer" target="_blank">
                  <img src="img/partners/dark/1.png" alt="" />
                </a>
              </li>
              <li>
                <a href="www.google.com"  rel="noreferrer" target="_blank">
                  <img src="img/partners/dark/2.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="www.google.com"
                  rel="noreferrer"
                  target="_blank"

                >
                  <img src="img/partners/dark/3.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="www.google.com"
                  rel="noreferrer"
                  target="_blank"

                >
                  <img src="img/partners/dark/4.png" alt="" />
                </a>
              </li>
              <li>
                <a href="www.google.com" rel="noreferrer" target="_blank">
                  <img src="img/partners/dark/5.png" alt="" />
                </a>
              </li>
              <li>
                <a href="www.google.com" rel="noreferrer" target="_blank">
                  <img src="img/partners/dark/6.png" alt="" />
                </a>
              </li>
              <li>
                <a href="www.google.com" rel="noreferrer" target="_blank">
                  <img src="img/partners/dark/7.png" alt="" />
                </a>
              </li>
              <li>
                <a href="www.google.com" rel="noreferrer" target="_blank">
                  <img src="img/partners/dark/3.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          {/* /Partners */}
          {/* Testimonials */}
          <div className="resumo_fn_testimonials">
            <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div>
            <Swiper {...customersSliderProps} className="owl-carousel">
              <SwiperSlide className="item" key={1} >
                <div className="title_holder">
                  <p className="desc">
                    “ Une expérience formidable ! Mon fils de 2 ans a été pris en charge avec beaucoup de soin et d'attention.
                     Les activités proposées étaient à la fois ludiques et éducatives. Je recommande vivement ! ”
                  </p>
                  <h3 className="title">Marie T.</h3>
                  <h3 className="subtitle">Freelancer &amp; Designer</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key={2}>
                <div className="title_holder">
                  <p className="desc">
                    {`“ Un service d’exception ! La garde à domicile pour notre nourrisson a été impeccable. 
                    Tout était bien organisé, et nous avons ressenti une vraie tranquillité d’esprit. ”`}
                  </p>
                  <h3 className="title">Lucas D.</h3>
                  <h3 className="subtitle">Ingénieur en informatique</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key={3}>
                <div className="title_holder">
                  <p className="desc">
                    “ Les ateliers parent-enfant ont vraiment renforcé le lien avec ma fille. Une équipe à l'écoute,
                     des conseils précieux et une approche très humaine. Merci infiniment ! ”
                  </p>
                  <h3 className="title">Charlie</h3>
                  <h3 className="subtitle">Chef de projet marketing</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key={4}>
                <div className="title_holder">
                  <p className="desc">
                    “ La préparation des repas équilibrés a été un véritable soulagement pour notre famille.
                     Les enfants adorent, et nous sommes rassurés par la qualité du service. Bravo ! ”
                  </p>
                  <h3 className="title">Isabelle</h3>
                  <h3 className="subtitle">Enseignante en maternelle</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key={5}>
                <div className="title_holder">
                  <p className="desc">
                    “ Nous avons fait appel aux services pour la garde en soirée, et tout s'est déroulé à merveille.
                     La sécurité et le bien-être de nos enfants étaient clairement une priorité. Un grand merci à toute l'équipe !”
                  </p>
                  <h3 className="title"> Thomas</h3>
                  <h3 className="subtitle">Specialisé en Marketing digital</h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* /Testimonials */}
        </div>
      </div>
    </section>
  );
};

export default CustomerLight;
