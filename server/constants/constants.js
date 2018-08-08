const statusCodes = {
  InternalServerError: 500,
  BadRequest: 400,
  AccessDenied: 403,
  Unauthorized: 401
}

const saltRounds = 10
const perPagelimit = 3

const typeOfNull = 'null'

module.exports = {
  statusCodes,
  saltRounds,
  typeOfNull,
  perPagelimit
}
