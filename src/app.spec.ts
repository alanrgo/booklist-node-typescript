import request from 'supertest';
import app from './app';

describe('app endpoints', () => {
    
    it('GET /health', done => {
        request(app)
        .get('/api/health')
        .expect(200, done);
    })
})