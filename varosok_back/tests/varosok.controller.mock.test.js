const request = require('supertest');
const app = require('../app'); // Az Express alkalmazás

describe('VarosokController', () => {
  // Teszt a városok lekérésére
  it('should return a list of cities', async () => {
    const response = await request(app).get('/varosok');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});