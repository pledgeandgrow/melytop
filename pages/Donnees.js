import Layout from "./src/layouts/Layout";
import Social from './Social';
// pages/donnees-personnelles.js
const Donnees = () => {
    return (
      <Layout>
        <div className="container">
      {/* Header */}
      <div className="header">
        <h1 className="title10">Politique de Confidentialité</h1>
        <p className="update-date">Dernière mise à jour : 30/01/2025</p>
      {/* Introduction */}
      <p className="intro">
        La protection de vos données personnelles est une priorité. Cette
        politique explique comment nous collectons, utilisons et protégeons vos
        informations.
      </p>
 </div>
      <div className="separator"></div>

      {/* Sections */}
      <div className="section">
        <h2 className="section-title">1. Collecte des Informations Personnelles</h2>
        <p>
          Nous recueillons des informations personnelles lorsque vous utilisez nos
          services de conseil en informatique et marketing, visitez notre site web,
          ou communiquez avec nous. Les types d’informations incluent votre nom,
          adresse électronique, numéro de téléphone, informations professionnelles,
          et toute autre information que vous choisissez de nous fournir.
        </p>
      </div>

      <div className="separator"></div>

      <div className="section">
        <h2 className="section-title">2. Utilisation des Informations</h2>
        <p>
          Vos informations personnelles sont utilisées pour :</p>
          <ul>
            <li>Fournir, gérer et améliorer nos services</li>
            <li>Communiquer avec vous concernant nos services</li>
            <li>Respecter nos obligations légales et réglementaires</li>
            <li>Analyser l’utilisation de nos services pour améliorer l’expérience utilisateur</li>
          </ul>
      
      </div>

      <div className="separator"></div>

      <div className="section">
        <h2 className="section-title">3. Partage des Informations</h2>
        <p>
          Nous ne partageons vos informations personnelles avec des tiers que dans
          les cas suivants :</p>
          <ul>
            <li>Avec votre consentement</li>
            <li>Pour fournir un service que vous avez demandé</li>
            <li>Lorsqu’il est requis par la loi</li>
            <li>Pour protéger les droits, la propriété ou la sécurité de Pledge and Grow</li>
          </ul>
        
      </div>

      <div className="separator"></div>

      <div className="section">
        <h2 className="section-title">4. Sécurité des Données</h2>
        <p>
          Nous prenons des mesures de sécurité techniques et organisationnelles pour
          protéger vos informations personnelles contre l’accès non autorisé, la
          modification, la divulgation, ou la destruction.
        </p>
      </div>

      <div className="separator"></div>

      <div className="section">
        <h2 className="section-title">5. Vos Droits</h2>
        <p>
          Conformément au RGPD, vous avez le droit d’accéder, rectifier, transférer,
          restreindre le traitement, ou supprimer vos informations personnelles.
          Pour exercer ces droits, veuillez nous contacter à{" "}</p>
          <a href="mailto:contact@pledgeandgrow.com" className="mail">contact@pledgeandgrow.com</a>.
        
      </div>

      <div className="separator"></div>

      <div className="section">
        <h2 className="section-title">6. Cookies et Technologies Similaires</h2>
        <p>
          Nous utilisons des cookies pour améliorer votre expérience sur notre site
          Web. Vous pouvez ajuster vos préférences de cookies dans les paramètres de
          votre navigateur. Pour plus d’informations, consultez notre politique
          d’utilisation des cookies.
        </p>
      </div>

      <div className="separator"></div>

      <div className="section">
        <h2 className="section-title">7. Modifications de la Politique</h2>
        <p>
          Nous pouvons mettre à jour cette Politique de Confidentialité. Si nous
          apportons des modifications significatives, nous vous en informerons par
          e-mail ou via notre site avant leur mise en application.
        </p>
      </div>

      <div className="separator"></div>

      <div className="section">
        <h2 className="section-title">8. Nous Contacter</h2>
        <p>
          Pour toute question ou préoccupation concernant cette politique ou vos
          informations personnelles, veuillez contacter Pledge and Grow à{" "}
          <a href="mailto:contact@pledgeandgrow.com" className="mail">contact@pledgeandgrow.com</a>.
        </p>
      </div>
      <br />
        <a className="btn0" href="/Accueil">Retourner sur l'accueil</a>
    </div>
        <Social />
      </Layout>
    );
  };
  
export default Donnees;
  