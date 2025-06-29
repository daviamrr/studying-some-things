const app = require('./api')
const auth = require('./modules/auth')
const getHome = require('./modules/index')

const PORT = 3333

exports.getHome = getHome
exports.auth = auth

app.listen(PORT, () => { console.log(`API rodando em localhost: ${PORT}`) })