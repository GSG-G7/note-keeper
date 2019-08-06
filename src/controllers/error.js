const clientError = (req, res) =>{
  res.status(404)
    .render('clientError');
};

const serverError = (err, req, res, next) =>{
  res.status(500)
    .render('serverError', { err });
};

module.exports = {
  clientError,
  serverError,
};
