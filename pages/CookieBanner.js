import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieChoice = document.cookie.includes('token');
    if (cookieChoice) {
      setShowBanner(false);
    }

    let timer = setTimeout(() => setOpacity(1), 100);
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const acceptCookies = async () => {
    try {
      await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log("Cookies acceptés");
      setShowBanner(false);
      document.body.style.overflow = 'auto';
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  const declineCookies = async () => {
    try {
      await fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log("Cookies refusés");
      setShowBanner(false);
      document.body.style.overflow = 'auto';
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-overlay">
      <div className="cookie-banner" style={{ opacity }}>
        <h3>Politique de cookies</h3>
        <p className='text'>
          Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
          En continuant à naviguer, vous acceptez notre utilisation des cookies.
        </p>
        <div className="button-container">
          <a className="accept-btn" onClick={acceptCookies}>Accepter</a>
          <a className="decline-btn" onClick={declineCookies}>Refuser</a>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;