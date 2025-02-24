import Layout from "./src/layouts/Layout";
import Social from './Social';
import Head from "next/head";
const Mention = () => {
  return (
    <Layout>
       <>
      <Head>
        <title>Les Mentions Légales </title>
        <meta name="description" content="les conditions générales de vente" />
      </Head>
    </>
<div className="container">
      <div className="header">
        <br /> <br/>
        <h1 className="title10">Mentions Légales</h1>
        <p className="update-date">Dernière mise à jour : 24/02/2025</p> <br />
        <p className="intro">
          Bienvenue sur la page des mentions légales de Melissa. Nous nous engageons
          à la transparence et au respect des réglementations. Cette section présente
          notre structure légale, nos pratiques, et les conditions générales
          d’utilisation de notre site. L’utilisation de nos services implique
          l’acceptation de ces termes.
        </p>
      </div>
      <div className="separator" />
      <br />
      <h2 className="section-title">1. Identification de l'éditeur du site :</h2>
      <p><strong>Éditeur et Propriétaire :</strong></p>
      <p>Nom : Melissa CHEGGOURI</p>
      <p>Statut : Entrepreneur individuelle</p>
      <p>Adresse : 25 ALLEE DES DAMADES, 92000, Nanterre</p>
      <p>SIRET : 941 215 238 00010</p>
      <p>Code Naf : 88.91A - Accueil de jeunes enfants</p>
      <p>Téléphone : +33 1 23 45 67 89</p>
      <p>Mail : melissarla@yahoo.com</p>
      <br />
      <div className="separator" />
      <br />
      <h2 className="section-title">2. Identification du l'hébergeur du site :</h2>
      <p>Vercel Inc</p>
      <p>440 N Barranca Ave #4133</p>
      <p>Covina, CA 91723</p>
      <p>Mail : privacy@vercel.com</p>
      <br />
      <p>Pour les utilisateurs de l’EEE, du Royaume-Uni et de Californie, Vercel peut collecter vos données personnelles en tant que « contrôleur de données » lorsqu'il détermine les moyens et objectifs du traitement (ex. : données des visiteurs, participants à des événements, ou clients). En tant que « processeur de données » ou « fournisseur de services », Vercel traite les données pour le compte de ses clients qui utilisent ses services d'hébergement ou ses outils d'analyse. Plus d’informations sont disponibles sur : Vercel.com</p>
      <br />
      <div className="separator" />
      <br />
      <h2 className="section-title">3. Identification du réalisateur du site :</h2>
      <p>PLEDGE AND GROW</p>
      <p>Téléphone : +33 7 53 69 58 40</p>
      <p>Mail : pledgeandgrow@gmail.com</p>
      <p>Site Web : pledgeandgrow.com</p>
      <br />
      <div className="separator" />
      <br />
      <p>
        Conformément au RGPD, vous disposez des droits d’accès, de rectification,
        et d’opposition aux données vous concernant.
      </p>
      <br />
      <div className="separator" />
      <br />
        <a className="btn0" href="/Accueil">Retourner sur l'accueil</a>
    </div>
       <Social />
    </Layout>
  );
};

export default Mention;
