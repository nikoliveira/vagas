import { Router } from 'express';
import { createUserController } from '../modules/users/useCases/CreateUser';
import { listUsersController } from '../modules/users/useCases/ListUsers';
import { deleteUserController } from '../modules/users/useCases/DeleteUser';
import { findUserController } from '../modules/users/useCases/FindUser';
import { updateUserController } from '../modules/users/useCases/UpdateUser';
import { verifyIfUserIsAdmin } from '../middlewares/users/verifyIfUserIsAdmin';

const usersRoutes = Router();

usersRoutes.get('/user', (request, response) => {
    return findUserController.handle(request, response);
})

usersRoutes.get('/users', (request, response) => {
    return listUsersController.handle(request, response);
})

usersRoutes.post('/users', (request, response) => {
    return createUserController.handle(request, response)
});

usersRoutes.delete('/users/:id', verifyIfUserIsAdmin, (request, response) => {
    return deleteUserController.handle(request, response);
})

usersRoutes.put('/users/:id', verifyIfUserIsAdmin, (request, response) => {
    return updateUserController.handle(request, response);
})

export { usersRoutes };