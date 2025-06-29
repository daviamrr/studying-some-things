const app = require('../api')

module.exports = app.get('/', async (_, res) => {
  return res.status(200).send({
    statusCode: 200,
    message: 'Requisição feita com sucesso.',
  })
})