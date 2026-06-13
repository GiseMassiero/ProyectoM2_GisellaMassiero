module.exports = (req, res, next) => {
  const { author_id, title, content, published } = req.body;

  if (!author_id || !title || !content) {
    return res.status(400).json({
      error: "author_id, title y content son obligatorios"
    });
  }

  if (typeof author_id !== "number") {
    return res.status(400).json({
      error: "author_id debe ser número"
    });
  }

  if (typeof title !== "string" || typeof content !== "string") {
    return res.status(400).json({
      error: "title y content deben ser strings"
    });
  }

  if (published !== undefined && typeof published !== "boolean") {
    return res.status(400).json({
      error: "published debe ser boolean"
    });
  }

  next();
};