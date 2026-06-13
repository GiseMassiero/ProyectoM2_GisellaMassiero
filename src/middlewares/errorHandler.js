

function errorHandler(err, req, res, next) {
  console.error("🔥 Error:", err.message);

  const status = err.status || 500;

  res.status(status).json({
    success: false,
    status,
    error: err.message || "Internal Server Error"
  });
}

module.exports = errorHandler;