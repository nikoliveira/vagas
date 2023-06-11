import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './env'
import { usersRoutes } from './http/controllers/routes'

export const app = fastify()

app.register(usersRoutes)

// app.s('view engine', 'jade')

// app.use(express.json())
// app.use(express.urlencoded())

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// app.use(express.static(__dirname + '/public'))

// app.get('/', function (req, res) {
//   res.send(`get user/ </br>
//   get users/ </br>
//   post users/ </br>
//   delete users/ </br>
//   put users/ </br>
//   `)
// })

// app.get('/user', teste1.getUser)
// app.get('/users', teste1.getUsers)
// app.post('/users', teste2)
// app.delete('/users', teste3)
// app.put('/users', teste4)
// app.get('/users/access', teste5)

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Here we should log to an external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})
