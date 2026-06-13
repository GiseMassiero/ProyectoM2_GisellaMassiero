module.exports = (req, res, next) => {
  const { name, email, bio } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "name y email son obligatorios"
    });
  }

  if (typeof name !== "string" || typeof email !== "string") {
    return res.status(400).json({
      error: "name y email deben ser strings"
    });
  }

  if (bio && typeof bio !== "string") {
    return res.status(400).json({
      error: "bio debe ser string"
    });
  }

  next();
};