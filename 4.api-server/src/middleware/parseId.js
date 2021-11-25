module.exports = (req, res, next) => {
  let { id } = req.params;
  req.params.id = Number(id);
  next();
};
