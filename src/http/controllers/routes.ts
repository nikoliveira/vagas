import { FastifyInstance } from 'fastify'
import { createUser } from './create-user'
import { fetchUser } from './fetch-user'
import { fetchManyUsers } from './fetch-many-users'
import { editUser } from './edit-user'
import { fetchUserViews } from './fetch-user-view'
import { deleteUser } from './delete-user'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', createUser)
  app.get('/users', fetchManyUsers)
  app.put('/users', editUser)
  app.delete('/users', deleteUser)
  app.get('/users/access', fetchUserViews)

  app.get('/user', fetchUser)
}
