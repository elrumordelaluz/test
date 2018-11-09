const moment = require('moment')
module.exports = (format = 'MM-DD-YYYY') => moment().format(format)
