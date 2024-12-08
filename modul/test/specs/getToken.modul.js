//Ini adalah contoh api automation menggunakan ES module js
import request from "supertest";
import { expect } from "chai";
import {createToken} from "../../function/createToken.spec.js"

const baseUrl = "https://restful-booker.herokuapp.com";


//Describe the test suite 
describe("Get Token", () => {
    let token;
    let bookingId;
    
    it('Positive - success get token', async () => { //create booking
        const payload = {
            "username" : "admin",
            "password" : "password123"
        }
            //send request
            const response = await request(baseUrl) //base url
            .post("/authentications")
            .send(payload) //request body
            .set('Content-Type', 'application/json') // header

        //Assertion pake chai
        expect((await response).status).to.equal(200)
        token = (await response).body.token
        
    })

    it('Positive - success implement token', async () => { //create booking
        //put method
        const response = await request(baseUrl) //base url
        .put("/booking/"+bookingId)
        .set("Cookie",token)
        //console.log(await token)
    })

    it('Import token', async () => { //create booking
        const response = await createToken()
        console.log(await token)
    })
})

