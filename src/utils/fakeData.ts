import { randomUUID } from 'node:crypto'

export const fakeData = [
  {
    id: randomUUID(),
    name: 'João Oliveira',
    job: 'Desenvolvedor',
    created_at: new Date(2),
  },
]
