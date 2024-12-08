const request = require('supertest');
const{ expect } = require('chai');

const baseUrl = 'https://restful-booker.herokuapp.com';

// deskripsi test suite
describe('Get All Booking', () => {
    // deskripsi test case
    it('should get all booking', () => {
        const response =  request(baseUrl).get('/booking');
        //assertion pakai chai
        expect(response.status).to.equal(200);
    })
})