import { expect, test } from 'vitest';
import { User } from '../../entities/User';
import { UsersRepository } from '../../repositories/UsersRepository';

test('update an user', async () => {
    const sut = new User({
        id: '1',
        name: 'João Oliveira',
        email: 'joao.oliveira@gmail.com',
        job: 'Desenvolvedor',
        password: 'joaozinho',
    }) as any;

    const sutToUpdate = new User({
        id: '1',
        name: 'Vithor',
        email: 'vithor.oliveira@gmail.com',
        job: 'Dev',
        password: 'vivith',
    }) as any;

    const user = UsersRepository.getInstance();

    user.save(sut)

    const findUser = user.update(sutToUpdate)

    expect(findUser).toBeTruthy()
});