import { expect, test } from 'vitest';
import { User } from '../../entities/User';
import { UsersRepository } from '../../repositories/UsersRepository';

test('delete an user', async () => {
    const sut = new User({
        id: '1',
        name: 'João Oliveira',
        email: 'joao.oliveira@gmail.com',
        job: 'Desenvolvedor',
        password: 'joaozinho',
    });

    const user = UsersRepository.getInstance();

    user.save(sut)

    const userDeleted = user.delete(sut.id)
    
    expect(userDeleted).toBeTruthy()

});