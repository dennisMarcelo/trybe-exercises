module.exports = (err, req, res, _next) => {
  const statusCodeDictionary = {
    notFound: 404,
    invalidData: 400,
    InternalServerError: 500,
  };
  
  const statusCode = statusCodeDictionary[err.code];

  return res.status(statusCode).json({ "error": err })
}