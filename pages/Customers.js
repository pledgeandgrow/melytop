import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

const Customers = () => {
  const sliderRef = useRef(null); // Référence pour accéder à l'instance du Slider
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Fonction pour passer à l'élément précédent
  const handlePrevTestimonial = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Fonction pour passer à l'élément suivant
  const handleNextTestimonial = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section id="customers">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Clients</h3>
            <h3 className="title2">Des parents satisfaits</h3>
          </div>
          
          {/* /Main Title */}

          {/* Testimonials */}
          <div className="resumo_fn_testimonials">
            <div className="my_nav" style={{gap:'35px'}}>
              <button
                onClick={handlePrevTestimonial}
                style={{
                  background: "transparent",
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "inherit",
                  cursor: "pointer",
                  border: "none",
                  left: "0",
                  zIndex: "1",
                }}
                className="prev-btn"
              >
                ← 
              </button>
              <button
                onClick={handleNextTestimonial}
                style={{
                  background: "transparent",
                  fontSize: "32px",
                  fontWeight: "bold",
                  
                  color: "inherit",
                  cursor: "pointer",
                  border: "none",
                  right: "0",
                  zIndex: "1",
                }}
                className="next-btn"
              >
                →
              </button>
            </div>
            <br />
            <div className="owl-carousel">
              <div className="title_holder">
                <Slider {...settings} ref={sliderRef}> {/* Passer la référence à Slider */}
                  <div className="des52">
                    <p className="desc">
                      “Une expérience formidable ! Mon fils de 2 ans a été pris en charge avec beaucoup de soin et d'attention.”
                    </p>
                    <h3 className="title">Marie T.</h3>
                    <h3 className="subtitle">Freelancer & Designer</h3>
                  </div>
                  <div className="desc5">
                    <p className="desc">
                      “Un service d’exception ! La garde à domicile pour notre nourrisson a été impeccable.”
                    </p>
                    <h3 className="title">Lucas D.</h3>
                    <h3 className="subtitle">Ingénieur en informatique</h3>
                  </div>
                  <div className="desc5">
                    <p className="desc">
                      “Les ateliers parent-enfant ont vraiment renforcé le lien avec ma fille.”
                    </p>
                    <h3 className="title">Charlie</h3>
                    <h3 className="subtitle">Chef de projet marketing</h3>
                  </div>
                  <div className="desc5">
                    <p className="desc">
                      “Une trés bonne experience ,  parent-enfant ont amélioré  le lien avec ma fille.”
                    </p>
                    <h3 className="title">Othmane</h3>
                    <h3 className="subtitle">Directeur d'agence</h3>
                  </div>
                  <div className="desc5">
                    <p className="desc">
                      “Une bon service qu il fait !  ils m ont aidé trop pour  mes enfants  merci ”
                    </p>
                    <h3 className="title">Koco</h3>
                    <h3 className="subtitle">Professeur</h3>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          {/* /Testimonials */}
        </div>
      </div>
    </section>
  );
};

export default Customers;
