const { PORT, API_URL } = process.env;

const loggerOne = (request, response, next) => {
  console.log(`An origin url: ${API_URL}:${PORT}`);
  console.log("Request Type:", request.method);

  next();
};

module.exports = loggerOne;
