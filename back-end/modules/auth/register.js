const { z } = require("zod");
const app = require("../../api");

module.exports = app.post('/register', async (req, res) => {
  const registerSchema = z.object({
    login: z.string().min(4),
    password: z.string().min(4)
  })

  try {
    const {...registerData} = registerSchema.parse(req.body)
    
    return res.status(201).send({
      statusCode: 201,
      message: 'Usuário cadastrado com sucesso.',
    })
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Erro ao cadastrar usuário.',
        issues: error.issues
      })
    }
  }

  return res.status(500).send({
    statusCode: 500,
    message: 'Erro interno ao processar a requisição.',
  })
})