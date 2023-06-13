import { expect, test } from 'vitest';
import { User } from '../../entities/User';
import { UsersRepository } from '../../repositories/UsersRepository';

test('list all users', async () => {
    const sut = new User({
        name: 'João Oliveira',
        email: 'joao.oliveira@gmail.com',
        job: 'Desenvolvedor',
        password: 'joaozinho',
        admin: false
    });

    const sut2 = new User({
        name: 'Vithor Carlos',
        email: 'aa.bb@gmail.com',
        job: 'Desenvolvedor Full Stack',
        password: 'vithor123',
        admin: true
    });

    const user = UsersRepository.getInstance();

    user.save(sut);

    user.save(sut2);

    const findAllUsers = user.findAllUsers();

    expect(findAllUsers).toBeTruthy()
});