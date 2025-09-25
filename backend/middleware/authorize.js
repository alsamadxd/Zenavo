export default function authorizeRoles(allowedRoles = []) {
  return (req, res, next) => {
    // For example, assume req.user is set after authentication
    const user = req.user;

    if (!user || !allowedRoles.includes(user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
}
