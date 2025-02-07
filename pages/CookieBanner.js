import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Vérifier si le cookie a été défini ou si 24h sont passées
    fetch('/api/check-cookie')
      .then((res) => res.json())
      .then((data) => {
        if (data.consentGiven) {
          setShowBanner(false); // Masquer la bannière si le cookie existe
        } else {
          setShowBanner(true); // Afficher la bannière si le cookie n'est pas défini
        }
      })
      .catch((err) => console.error("Erreur:", err));

    let timer = setTimeout(() => setOpacity(1), 100);
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const acceptCookies = async () => {
    await fetch('/api/set-cookie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ consentGiven: true }), // Marque le consentement comme "accepté"
    });

    setShowBanner(false); // Masquer la bannière
    document.body.style.overflow = 'auto';
  };

  const declineCookies = () => {
    setShowBanner(false); // Masquer la bannière si refusé
    document.body.style.overflow = 'auto';
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-overlay">
      <div className="cookie-banner" style={{ opacity }}>
        <h3>Politique de cookies</h3>
        <p className="text">
          Nous utilisons des cookies pour améliorer votre expérience sur notre site.
          En continuant à naviguer, vous acceptez notre utilisation des cookies.
        </p>
        <div className="button-container">
          <button className="accept-btn" onClick={acceptCookies}>Accepter</button>
          <button className="decline-btn" onClick={declineCookies}>Refuser</button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
