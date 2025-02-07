// pages/api/check-cookie.js
export default function handler(req, res) {
  const cookie = req.headers.cookie || '';
  const consentGiven = cookie.includes('cookieAccepted=true');
  
  res.status(200).json({ consentGiven });
}
