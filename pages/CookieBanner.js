import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => setOpacity(1), 100);
    document.body.style.overflow = 'hidden'; // Désactiver le défilement
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto'; // Réactiver le défilement
    };
  }, []);

  const acceptCookies = () => {
    console.log("Cookies acceptés");
    setShowBanner(false);
    document.body.style.overflow = 'auto'; // Réactiver le défilement
  };

  const declineCookies = () => {
    console.log("Cookies refusés");
    setShowBanner(false);
    document.body.style.overflow = 'auto'; // Réactiver le défilement
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-overlay">
      <div className="cookie-banner" style={{ opacity }}>
        <h3>Politique de cookies</h3>
        <p className='text'>Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer, vous acceptez notre utilisation des cookies.</p>
        <div className="button-container">
          <a className="accept-btn" onClick={acceptCookies}>Accepter</a>
          <a className="decline-btn" onClick={declineCookies}>Refuser</a>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;