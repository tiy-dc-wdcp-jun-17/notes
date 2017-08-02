const childprocess = require('child_process');
const shellescape = require('shell-escape');
module.exports = function (cryOutInPain) {

  return function bestLoggerMiddleware(req, res, next) {
    let message = req.query.message
    if (cryOutInPain) {
      console.log("Ow!");
      childprocess.exec(`say -v Samantha ${ shellescape([message]) }`)
    }

    console.log(req.ip, req.path, new Date(), req.query );
    next();
  }
}
