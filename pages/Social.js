import React from "react";
import { FaFacebook, FaWhatsapp,FaLinkedin } from "react-icons/fa";
const socialLinks = [
  { id: 1, icon: <FaFacebook />, href: "https://facebook.com", className: "twitter-icon" },
  { id: 2, icon: <FaWhatsapp />, href: "https://whatsapp.com", className: "whatsapp-icon" },
  { id: 3, icon: <FaLinkedin />, href: "https://linkedin.com", className: "linkedin-icon" },
];
const Social = ()=>{
  return (
    <section id="social">
      <div className="container">
        <div className="roww flex-container">
          {/* Section Réseaux Sociaux à gauche */}
          <div className="left-content">
            <div className="resumo_fn_main_title">
              <h3 className="social-title">Nos pages réseaux sociaux :</h3>
              <div className="social-links">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link ${link.className}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Section Politiques à droite */}
          <div className="right-content">
            <h3 className="social-title">Politiques :</h3>
            <ul className="min">
            <li><a className="none" href="/Mention" >Mentions Légales</a></li>
              <li><a className="none" href="/Donnees">Données Personnelles</a></li>
              <li><a className="none" href="/Politiquecookies">Politique de cookies</a></li>
              <li><a className="none" href="/ConditionsGeneralesdeVente">Conditions Générales de Vente</a></li>
              <li><a className="none" href="/ConditionsGeneralesd'Utilisation">Conditions Générales d'Utilisation</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Social;
