const statusCodes = {
  InternalServerError: 500,
  BadRequest: 400,
}

const saltRounds = 10

module.exports = {
  statusCodes: statusCodes,
  saltRounds: saltRounds,
}
