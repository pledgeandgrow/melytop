// pages/api/set-cookie.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    const consentGiven = req.body.consentGiven || false;

    // Définir un cookie sécurisé avec HttpOnly et SameSite
    res.setHeader('Set-Cookie', `cookieAccepted=${consentGiven}; HttpOnly; Secure; SameSite=Strict; Max-Age=86400; Path=/;`);

    // Optionnel : Stocker l'IP de l'utilisateur (si nécessaire)
    const userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(`IP de l'utilisateur: ${userIP}`);

    res.status(200).json({ message: 'Cookie défini avec succès', consentGiven });
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
