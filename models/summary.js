const pgp = require('pg-promise')();
const db = require('../lib/dbconnect');

// render all destinations from the database
function getSummary(req, res, next) {
  db.any(`SELECT * FROM bio;`)
  .then((results) => {
    res.status(200)
        .json({
          data: results,
        });
  })
  .catch(err => next(err));
}

module.exports = {
  getSummary: getSummary,
};


