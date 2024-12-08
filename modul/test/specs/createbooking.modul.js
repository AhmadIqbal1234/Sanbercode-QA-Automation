//Ini adalah contoh api automation menggunakan ES module js
import request from "supertest";
import { expect } from "chai";

const baseUrl = "https://restful-booker.herokuapp.com";

//Describe the test suite 
describe("Create Booking", () => {
    it('Positive - success create booking', async () => { //create booking
       // let response = await request(baseUrl) //base url
            const payload = {
                    "firstname" : "Jim",
                        "lastname" : "Brown",
                        "totalprice" : 111,
                        "depositpaid" : true,
                        "bookingdates" : {
                            "checkin" : "2018-01-01",
                            "checkout" : "2019-01-01"
                        },
                        "additionalneeds" : "Breakfast"
            }
            //send request
            const response = await request(baseUrl) //base url
            .post("/booking")
            .send(JSON.stringify(payload)) //request body
            .set('Content-Type', 'application/json') // header

        //Assertion pake chai
        expect((await response).status).to.equal(418)
        //console.log(await response)     
    })
})

