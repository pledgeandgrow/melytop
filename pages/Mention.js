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
        <p className="update-date">Dernière mise à jour : 30/01/2025</p> <br />
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
      <h2 className="section-title">1. Identification de l'éditeur et de l'hébergeur du site :</h2>
      <p><strong>Éditeur et Propriétaire :</strong></p>
      <p>Nom : Melissa CHEGGOURI</p>
      <p>SIRET : En cours</p>
      <p>Adresse : 123 Rue de la Petite Enfance, Paris, France</p>
      <p>Téléphone : +33 1 23 45 67 89</p>
      <p>Mail : melissarla@yahoo.com</p>
      <br />
      <div className="separator" />
      <br />
      <h2 className="section-title">2. Conditions générales d’utilisation :</h2>
      <p>
        L’utilisation du site Melissa implique l’acceptation pleine et entière
        des conditions générales d’utilisation décrites dans notre politique.
      </p>
      <br />
      <div className="separator" />
      <br />
      <h2 className="section-title">3. Données personnelles :</h2>
      <p>
        Conformément au RGPD, vous disposez des droits d’accès, de rectification,
        et d’opposition aux données vous concernant.
      </p>
      <br />
      <div className="separator" />
      <br />
      <h2 className="section-title">4. Propriété intellectuelle :</h2>
      <br />
      <p>
        Les contenus de ce site (textes, images, logos) sont protégés par le
        droit d’auteur.
      </p>
      <br />
      <div className="separator" />
      <br />
      <h2 className="section-title">5. Limitations de responsabilité :</h2>
      <p>
        Melissa ne saurait être tenue responsable des dommages directs ou indirects
        causés à l’utilisateur lors de l’accès au site.
      </p>
      <br />
      <div className="separator" />
      <br />
      <h2 className="section-title">6. Droit applicable et attribution de juridiction :</h2>
      <p>
        Tout litige en relation avec l’utilisation du site est soumis au droit
        français. En cas de litige, les tribunaux français seront seuls compétents.
      </p>
      <br />
      <br />
        <a className="btn0" href="/Accueil">Retourner sur l'accueil</a>
    </div>
       <Social />
    </Layout>
  );
};

export default Mention;
