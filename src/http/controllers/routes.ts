import { FastifyInstance } from 'fastify'
import { createUser } from './create-user'
import { fetchUser } from './fetch-user'
import { fetchManyUsers } from './fetch-many-users'
import { editUser } from './edit-user'
import { fetchUserViews } from './fetch-user-view'
import { deleteUser } from './delete-user'
import { verifyUserRole } from '../middlewares/verify-user-role'
import { verifyJWT } from '../middlewares/verify-jwt'
import { authenticate } from './authenticate'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', createUser)
  app.post('/sessions', authenticate)
  app.get('/users', fetchManyUsers)
  app.put(
    '/users',
    {
      onRequest: [verifyJWT, verifyUserRole('ADMIN')],
    },
    editUser,
  )
  app.delete(
    '/users',
    { onRequest: [verifyJWT, verifyUserRole('ADMIN')] },
    deleteUser,
  )
  app.get('/users/access', fetchUserViews)

  app.get('/user', fetchUser)
}
