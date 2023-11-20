const ResponseHandler = require('../middlewares/responses');

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  ResponseHandler.respondWithError(res, err.message, err.status || 500, '에러 발생');
};

module.exports = errorHandler;
