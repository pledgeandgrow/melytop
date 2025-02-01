import Layout from "./src/layouts/Layout";
import Social from './Social';
// pages/politique-cookies.js
const PolitiqueCookies = () => {
    return (
      <Layout>
         <div className="container">
                <div className="header">
                    <h1 className="title10">Conditions Générales de Vente</h1>
                    <p className="update-date">Dernière mise à jour : 30/01/2025</p>
                </div>

                <div className="separator"></div>

                <div className="section">
                    <h2 className="section-title">1. Objet</h2>
                    <p>Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre PLEDGE AND GROW et ses clients pour toute commande de services. En passant commande, le client accepte les termes des CGV.</p>
                </div>

                <div className="separator"></div>

                <div className="section">
                    <h2 className="section-title">2. Services Proposés</h2>
                    <p>PLEDGE AND GROW propose des services de programmation informatique. Les descriptions et tarifs des services sont variables en fonction du besoin du projet. Nous avons une grille tarifaire et conseillons les technologies nécessaires à votre projet.</p>
                </div>

                <div className="separator"></div>

                <div className="section">
                    <h2 className="section-title">3. Commande</h2>
                    <p>La commande est confirmée une fois que le client a signé le devis et accepté les conditions de prestation. Toute modification postérieure doit faire l’objet d’un accord écrit.</p>
                </div>

                <div className="separator"></div>

                <div className="section">
                    <h2 className="section-title">4. Tarification et Paiement</h2>
                    <p>Les prix des services sont indiqués en euros et hors taxes. Le paiement s'effectue via les moyens indiqués au moment de la commande. Les factures sont payables à la date précisée, sous peine de pénalités.</p>
                </div>

                <div className="separator"></div>

                <div className="section">
                    <h2 className="section-title">5. Livraison des Services</h2>
                    <p>Les services sont fournis selon les modalités convenues avec le client. PLEDGE AND GROW s'engage à respecter les délais convenus, sous réserve d’imprévus liés à des tiers ou à des causes de force majeure.</p>
                </div>

                <div className="separator"></div>

                <div className="section">
                    <h2 className="section-title">6. Droit de Rétractation</h2>
                    <p>Conformément à la législation en vigueur, le client dispose d'un délai de 14 jours pour se rétracter après la signature du contrat, sauf si l'exécution du service a commencé avec son accord.</p>
                </div>

                <div className="separator"></div>

                <div className="section">
                    <h2 className="section-title">7. Responsabilité</h2>
                    <p>PLEDGE AND GROW ne saurait être tenue responsable des dommages indirects ou imprévus résultant de l'exécution ou de la non-exécution des services.</p>
                </div>

                <div className="separator"></div>

                <div className="section">
                    <h2 className="section-title">8. Litiges</h2>
                    <p>Tout litige sera soumis à la compétence des tribunaux de Paris, après tentative de résolution à l’amiable.</p>
                </div>

                <div className="separator"></div>

                <div className="section">
                    <h2 className="section-title">9. Modification des CGV/CGU</h2>
                    <p>PLEDGE AND GROW se réserve le droit de modifier les présentes CGV/CGU à tout moment. La version applicable est celle en vigueur sur le site au moment de l’utilisation des services par le Client.</p>
                </div>

                <div className="separator"></div>

                <div className="section">
                    <h2 className="section-title">10. Droit Applicable et Litiges</h2>
                    <p>Ces conditions générales sont régies par les lois en vigueur dans votre pays de résidence. Tout litige découlant de ces conditions sera soumis à la juridiction compétente de votre région.</p>
                </div>

                <div className="separator"></div>

                <div className="section">
                    <h2 className="section-title">11. Contact</h2>
                    <p>Pour toute question ou préoccupation concernant ces conditions générales, veuillez nous contacter à l’adresse suivante : <a href="mailto:contact@pledgeandgrow.com" className="mail">contact@pledgeandgrow.com</a>.</p>
                </div>
                <br />
        <a className="btn0" href="/Accueil">Retourner sur l'accueil</a>
            </div>
        <Social />
      </Layout>
    );
  };
  
  export default PolitiqueCookies;
  