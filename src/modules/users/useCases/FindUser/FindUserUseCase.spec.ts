import { expect, test } from 'vitest';
import { User } from '../../entities/User';
import { UsersRepository } from '../../repositories/UsersRepository';

test('find an user', async () => {
    const sut = new User({
        name: 'João Oliveira',
        email: 'joao.oliveira@gmail.com',
        job: 'Desenvolvedor',
        password: 'joaozinho',
        admin: true
    });

    const user = UsersRepository.getInstance();

    user.save(sut)

    const findUser = user.findByEmail(sut.email)
    
    expect(findUser).toBeTruthy()

});