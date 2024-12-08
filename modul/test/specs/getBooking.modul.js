//Ini adalah contoh api automation menggunakan ES module js
import request from "supertest";
import { expect } from "chai";

const baseUrl = "https://restful-booker.herokuapp.com";
const paramFirstName = "sally";
const paramLastName = "brown";  
const bookingId = "78";

//Describe the test suite 
describe("Get All Booking", () => {
    it('Positive - success get all booking', async () => { //get all booking
        let response = await request(baseUrl) //base url
            .get("/booking") //endpoint

        //Assertion pake chai
        expect((await response).status).to.equal(200)
        //console.log((await response).body)
    })

    it('Positive - success get all booking with param', async () => { //get param
        let response = await request(baseUrl) //base url
            .get("/booking" + "?firstname=${paramFirstName}&lastname=${paramLastName}") //endpoint param

        //Assertion pake chai
        expect((await response).status).to.equal(200)
        console.log((await response).body)
    })

    it('Positive - success get all booking with id', async () => { //get id
        let response = await request(baseUrl) //base url
            .get("/booking/${bookingId}") //endpoint id

        //Assertion pake chai
        expect((await response).status).to.equal(404)
        //console.log((await response).body)
    })
})