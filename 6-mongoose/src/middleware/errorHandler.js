module.exports = (error, req, res, next) => {
  // if (error instanceof ValidationError)
  // if (error instanceof CustomError)
  // if (error.name === 'ValidationError') {
  //   return res.status(400).json(error);
  // }
  // if (error instanceof OtherError)
  console.log(error);
  return res.status(500).json({
    error: 'Something bad happened, please try again later',
  });
};

// throw new Error("xxxx");
// in controllers or middleware, we can use
// throw new CustomError('xxxx');

// class CustomError extends Error {

// }
