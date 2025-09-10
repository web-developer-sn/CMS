
export const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user.role;

    if (userRole === 'admin') {
      return next();
    }

    if (allowedRoles.includes(userRole)) {
      return next();
    }

    return res.status(403).json({
      status: 403,
      action:"error",
      message: "Forbidden: You are not authorized for this resource."
    });
  };
};


