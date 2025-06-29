const { z, ZodError } = require("zod");
const app = require("../../api");

module.exports = app.post('/auth', async (req, res) => {
  const authSchema = z.object({
    login: z.string().min(4, 'O campo login precisa ter no mínimo 4 caracteres.'),
    password: z.string().min(4, 'O campo senha precisa ter no mínimo 4 caracteres.')
  })
  try {
    const { ...authData } = authSchema.parse(req.body)

    return res.status(200).send({
      statusCode: 200,
      message: 'Autenticado com sucesso.',
      user: authData.login,
      pass: authData.password
    })
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Erro ao autenticar.',
        issues: error.issues
      })
    }
  }

  return res.status(500).send({
    statusCode: 500,
    message: 'Erro interno ao processar a requisição.',
  })
})