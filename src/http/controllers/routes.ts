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
import { schemasUsers } from './schemas'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', schemasUsers.createUser, createUser)
  app.post('/sessions', schemasUsers.authUser, authenticate)
  app.get('/users', schemasUsers.fetchManyUsersPaginated, fetchManyUsers)
  app.put(
    '/users',
    {
      onRequest: [verifyJWT, verifyUserRole('ADMIN')],
      ...schemasUsers.editUser,
    },
    editUser,
  )
  app.delete(
    '/users',
    {
      onRequest: [verifyJWT, verifyUserRole('ADMIN')],
      ...schemasUsers.deleteUser,
    },
    deleteUser,
  )
  app.get('/users/access', schemasUsers.fetchUserViews, fetchUserViews)

  app.get('/user', schemasUsers.fetchUser, fetchUser)
}
