export default (req, res) => {
  if (req.method === "POST") {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", "ACCEPTED", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 365 * 24 * 60 * 60, // 1 year
        sameSite: "strict",
        path: "/",
      })
    );
    return res.status(200).json({ success: true });
  }

  // If the method is not POST, return a 405 Method Not Allowed
  res.status(405).json({ success: false, message: "Method Not Allowed" });
};
