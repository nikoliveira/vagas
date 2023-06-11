import request from 'supertest'
import app from '../src/app'

const routes = [
  'get api/users/', 
  'get api/users/', 
  'post api/users/', 
  'delete api/users/', 
  'put api/users/'
];

describe('Route GET /', () => {
  it('deve retornar status 200 ao acessar GET /', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ availableRoutes: routes });
  });
})