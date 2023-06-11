import request from 'supertest'
import app from '../src/app'
import fakeData from '../src/fakeData';

describe('Route GET /api/users/:name', () => {
  it('deve retornar apenas um unico registro', async () => {
    const response = await request(app).get("/api/users/:name");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(fakeData[1]);
  });
})

describe('Route GET /api/users', () => {
  it('deve retornar todos registros', async () => {
    const response = await request(app).get("/api/users");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(fakeData);
  });
})
