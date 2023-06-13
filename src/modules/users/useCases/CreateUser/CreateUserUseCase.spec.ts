import { expect, test } from 'vitest';
import { User } from '../../entities/User';
import { UsersRepository } from '../../repositories/UsersRepository';

test('create an user', () => {
    const sut = new User({
        name: 'João Oliveira',
        email: 'joao.oliveira@gmail.com',
        job: 'Desenvolvedor',
        password: 'joaozinho',
    });

    const user = UsersRepository.getInstance();

    user.save(sut)

    expect(user).toBeTruthy();
});