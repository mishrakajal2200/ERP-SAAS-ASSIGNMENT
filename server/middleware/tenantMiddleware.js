const tenantMiddleware = (req, res, next) => {
  if (!req.user?.companyId) {
    return res.status(400).json({ message: "Company not found" });
  }

  req.companyId = req.user.companyId;
  next();
};

export default tenantMiddleware;