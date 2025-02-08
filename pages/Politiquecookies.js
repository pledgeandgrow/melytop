import Layout from "./src/layouts/Layout";
import Social from './Social';
// pages/politique-cookies.js
const PolitiqueCookies = () => {
    return (
      <Layout>
         <div className="container">
                <div className="header">
                    <h1 className="title10">Politiques de cookies</h1>
                    <p className="update-date">Dernière mise à jour : 30/01/2025</p>
                </div>

                <div className="separator"></div>

                <div className="section">
                    <h2 className="section-title">1. Qu'est-ce qu'un cookie ?</h2>
                    <p>Un cookie est un petit fichier texte enregistré sur votre appareil (ordinateur, tablette, smartphone…) par le navigateur lors de la visite d’un site internet. Ces cookies permettent de garantir le bon fonctionnement du site, d’améliorer votre expérience de navigation, de mesurer l’audience et peuvent aussi servir à vous présenter des publicités ciblées en fonction de vos habitudes de navigation</p>
                </div>

                <div className="separator"></div>

                <div className="section">
                    <h2 className="section-title">2. Comment utilisons-nous les cookies ?</h2>
                    <p>Sur le site de PLEDGE AND GROW, nous utilisons des cookies pour :</p>
                    <li>Assurer le bon fonctionnement et la sécurité de notre site.</li>
                    <li>Mémoriser vos préférences de navigation et personnaliser votre expérience.</li>
                    <li>Analyser l’utilisation de notre site et améliorer nos services. </li>
                    <li>Proposer du contenu marketing adapté à vos intérêts.</li>
                </div>

                <div className="separator"></div>

                <div className="section">
                    <h2 className="section-title">3. Consentement :</h2>
                    <p>Nous ne vendons pas vos informations personnelles à des tiers. Cependant, nous pouvons partager vos informations personnelles dans les circonstances suivantes :</p>
                    <li>Avec des prestataires de services tiers qui nous aident à fournir nos services.</li>
                    <li>Avec des partenaires commerciaux lorsque cela est nécessaire pour fournir des services conjoints.</li>
                    <li>Lorsque nous sommes tenus de le faire par la loi, une autorité gouvernementale ou pour protéger nos droits légaux. </li>
                    <li>Dans le cadre de fusions, d’acquisitions ou de ventes d’actifs de l’entreprise, vos informations personnelles peuvent être transférées à un tiers.</li>
                </div>

                <div className="separator"></div>

                <div className="section">
                    <h2 className="section-title">4. Sécurité et confidentialité :</h2>
                    <p>Nous nous engageons à utiliser les cookies de manière responsable, dans le respect de votre vie privée et conformément à la législation en vigueur. Les données collectées via les cookies sont sécurisées et ne sont pas partagées avec des tiers non autorisés.</p>
                </div>

                <div className="separator"></div>

                <div className="section">
                    <h2 className="section-title">5. Mise à jour de la politique de cookies :</h2>
                    <p>Cette politique peut être mise à jour en fonction des évolutions législatives ou des modifications apportées à nos pratiques. Nous vous invitons à consulter régulièrement cette page pour rester informé. Pour toute question relative à notre utilisation des cookies, vous pouvez nous contacter directement sur melissarla@yahoo.com</p>
                </div>

                <div className="separator"></div>

                <div className="section">
                    <h2 className="section-title">Nous Contacter</h2>
                    <p>Pour toute question ou préoccupation concernant cette politique ou vos informations personnelles, veuillez contacter PLEDGE AND GROW à contact@pledgeandgrow.com.</p>
                </div>
                <br />
        <a className="btn0" href="/Accueil">Retourner sur l'accueil</a>
            </div>
        <Social />
      </Layout>
    );
  };
  
  export default PolitiqueCookies;
  