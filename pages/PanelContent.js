import { useEffect } from "react";

const PanelContent = () => {
  useEffect(() => {
    const Typed = require("typed.js");
    new Typed(".animated_title", {
      strings: ["	Melissa", "Indépendante", "Auxiliaire de la petite enfance"],
      loop: true,
      smartBackspace: false,
      typeSpeed: 40,
      startDelay: 700,
      backDelay: 3e3,
    });
  }, []);
  return (
    <div className="right_in">
      <div className="right_top">
        <div className="border1" />
        <div className="border2" />
        <div className="img_holder">
          <img src="img/affiche-logo.jpg" alt="image" className="fille"/>
          <div className="abs_img" data-bg-img="img/right.jpg" />
        </div>
        <div className="title_holder">
          <h5>Bonjour je suis </h5>
          <p className="h3">
            <span className="animated_title" />
          </p>
        </div>
      </div>
      <div className="right_bottom">
        <a href="#contact">
          <span className="circle" />
          <span className="text">
            J’accompagne vos petits avec patience et amour ! 💖👶
          </span>
        </a>
      </div>
    </div>
  );
};

export default PanelContent;
