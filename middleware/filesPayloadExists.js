const filesPayloadExists = (req, res, next) => {
  if (!req.files) {
    res.status(400).json({ status: "error", message: "Missing Files" });
  }
  next();
};

module.exports = filesPayloadExists;
