import request from 'supertest'
import app from '../src/app'
import fakeData from '../src/fakeData';
import { testingToken } from './testingUtils';

describe('Route GET /api/users/:user_id', () => {
  it('deve retornar apenas um unico registro', async () => {
    const response = await request(app).get("/api/users/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(fakeData[0]);
    expect(response.body).not.toEqual(fakeData[1]);
  });
  it('deve retornar um error', async () => {
    const response = await request(app).get("/api/users/20");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "User does not exist"});
  });
})

describe('Route GET /api/users', () => {
  it('deve retornar todos registros', async () => {
    const response = await request(app).get("/api/users");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(fakeData);
  });
})

describe('Route POST /api/users', () => {
  it('Deve criar o user', async () => {
    const response = await request(app)
    .post("/api/users")
    .send({
      name: "Doctor",
      job: "Time Lord"
    }).expect(201);
    expect(response.body).toEqual({
      id: 3,
      name: 'Doctor',
      job: 'Time Lord',
    });
  });
  it('deve retornar um error', async () => {
    const response = await request(app)
    .post("/api/users")
    .send({ teste: 123 }).expect(400);
    expect(response.body).toEqual({ error: "Name or Job is missing"});
  });
})

describe('Route PUT /api/users/id', () => {  
  it('Deve atualizar o user', async () => {
    const response = await request(app)
    .put("/api/users/1")
    .send({
      name: "Doctor",
      job: "Time Lord"
    })
    .set('Authorization', 'Bearer ' + testingToken)
    .expect(200);
    expect(response.body).toEqual({
      id: 1,
      name: 'Doctor',
      job: 'Time Lord',
    });
  });
  it('deve retornar um error', async () => {
    await request(app)
    .put("/api/users/1")
    .send({ 
      name: "Doctor",
      job: "Time Lord" 
    }).expect(401);
  });
})

describe('Route DELETE /api/users/id', () => {  
  it('Deve deletar o user', async () => {
    await request(app)
    .delete("/api/users/1")
    .set('Authorization', 'Bearer ' + testingToken)
    .expect(200);
  });
  it('deve retornar um error', async () => {
    await request(app)
    .delete("/api/users/1")
    .expect(401);
  });
})

describe('Route GET /api/users/access/user', () => {  
  it('Deve retornar 200', async () => {
    await request(app)
    .get("/api/users/access/user")
    .expect(200);
  });
})
