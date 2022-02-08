module.exports = async (req, res, next) => {
  if (req.user.email !== 'admin') {
    const error = new Error('You do not have access to view this page');
    error.status = 403;
    next(error);
  } else {
    next();
  }
};
