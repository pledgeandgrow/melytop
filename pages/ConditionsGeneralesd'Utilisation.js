import Layout from "./src/layouts/Layout";
import Social from './Social';
// pages/politique-cookies.js
const ConditionsGeneralesdUtilisation = () => {
    return (
      <Layout>
          <div className="container">
        <div className="header">
          <h1 className="title10">Conditions Générales d'Utilisation</h1>
          <p className="update-date">Dernière mise à jour : 30/01/2025</p>
        </div>

        <div className="separator"></div>

        <div className="section">
          <h2 className="section-title">1. Objet</h2>
          <p>Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation du site de Melissa CHEGGOURI. En naviguant sur notre site, l'utilisateur accepte ces CGU.</p>
        </div>

        <div className="separator"></div>

        <div className="section">
          <h2 className="section-title">2. Accès au Site</h2>
          <p>Le site est accessible gratuitement à tout utilisateur disposant d'une connexion internet. Melissa CHEGGOURI ne peut être tenue responsable de toute interruption, maintenance ou mise à jour du site.</p>
        </div>

        <div className="separator"></div>

        <div className="section">
          <h2 className="section-title">3. Propriété Intellectuelle</h2>
          <p>Le contenu du site (textes, images, logos) est la propriété exclusive de Melissa CHEGGOURI. Toute reproduction ou utilisation non autorisée est interdite sans accord préalable.</p>
        </div>

        <div className="separator"></div>

        <div className="section">
          <h2 className="section-title">4. Utilisation des Services</h2>
          <p>L'utilisateur s'engage à utiliser le site de manière légale et à ne pas nuire à son bon fonctionnement. Toute tentative de piratage ou d'utilisation malveillante sera poursuivie.</p>
        </div>

        <div className="separator"></div>

        <div className="section">
          <h2 className="section-title">5. Données Personnelles</h2>
          <p>Les informations personnelles collectées via le site sont traitées conformément à notre politique de confidentialité. L'utilisateur peut exercer ses droits d'accès, de rectification et de suppression de ses données en contactant Melissa CHEGGOURI.</p>
        </div>

        <div className="separator"></div>

        <div className="section">
          <h2 className="section-title">6. Responsabilité</h2>
          <p>Melissa CHEGGOURI décline toute responsabilité en cas d'erreurs ou d'omissions dans le contenu du site ou de dysfonctionnements techniques affectant l'accès au site.</p>
        </div>

        <div className="separator"></div>

        <div className="section">
          <h2 className="section-title">7. Modifications des CGU</h2>
          <p>Melissa CHEGGOURI se réserve le droit de modifier à tout moment les présentes CGU. Les utilisateurs seront informés des changements via le site.</p>
        </div>

        <div className="separator"></div>

        <div className="section">
          <h2 className="section-title">8. Droit applicable</h2>
          <p>Les CGU sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents de Paris.</p>
        </div>
          <br />
        <a className="btn0" href="/Accueil">Retourner sur l'accueil</a>
      </div>
        <Social />
      </Layout>
    );
  };
  
  export default ConditionsGeneralesdUtilisation;
  