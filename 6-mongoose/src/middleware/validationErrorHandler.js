module.exports = (error, req, res, next) => {
  if (error.name === 'ValidationError') {
    return res.status(400).json(error);
  }
  next();
};

// throw new Error("xxxx");
// in controllers or middleware, we can use
// throw new CustomError('xxxx');

// class CustomError extends Error {

// }
