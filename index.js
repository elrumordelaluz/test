const pkg = require('./package.json')
const format = require('date-fns/format')
module.exports = {
  date: (frm = 'MM/DD/YYYY') => format(new Date(), frm),
  version: pkg.version,
}
