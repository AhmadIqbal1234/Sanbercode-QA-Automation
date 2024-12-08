import request from "supertest";
import { baseUrl } from "../data/config.js";


export async function createToken(){
    const payload = {
        "email": "belajarapi@sanbercode.com",
        "password": "12345678Aa!"
    }
    //send request
    const response = await request (baseUrl)
        .post("/authentications") //endpoint
        .send(payload)  //request body
        .set("Content-Type","application/json")  //header
    
    const token = (await response).body.token
    return token
}