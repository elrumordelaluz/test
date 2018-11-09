const format = require('date-fns/format')
module.exports = (frm = 'MM-DD-YYYY') => format(new Date(), frm)
