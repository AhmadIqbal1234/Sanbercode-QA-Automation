// Import library
import request from "supertest";
import { expect } from "chai";

// Base URL API
const baseUrl = "https://kasir-api.zelz.my.id";

// Variabel global untuk token
let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1NjQzYWY1LWQzMTEtNDI3YS1hNGYzLTc1ZDE5MzllNTg5NSIsImNvbXBhbnlJZCI6IjI4MDA0ODdhLWNhMzEtNDYwOS04ZTBmLTI2M2IyZDJiYjk2MCIsImlhdCI6MTczMTg0MDg4N30.Iz3yR_lhohgaaBKenYxdaopdS4_cLzmRgpmUMGk_X2g";

// Function untuk mendapatkan token
async function getAuthToken() {
  const payload = {
    email: "testuser@mail.com", // Ganti dengan email valid
    password: "TestPassword123!", // Ganti dengan password valid
  };
  const response = await request(baseUrl)
    .post("/authentications")
    .send(payload)
    .set("Content-Type", "application/json");

  expect(response.status).to.equal(201); // Assert status sukses
  expect(response.body).to.have.property("data"); // Assert data ada
  return response.body.data.accessToken; // Return token
}

// Test suite
describe("API Automation for Kasir AJA", () => {
  // Hook untuk mendapatkan token sebelum semua test dijalankan
  before(async () => {
    authToken = await getAuthToken();
  });

  // Endpoint POST - Create transaksi baru
  it("POST /transactions - Create a new transaction", async () => {
    const payload = {
      invoice: "INV-12345",
      cashier: "John Doe",
      total: 100000,
    };

    const response = await request(baseUrl)
      .post("/transactions")
      .send(payload)
      .set("Authorization", `Bearer ${authToken}`)
      .set("Content-Type", "application/json");

    expect(response.status).to.equal(201); // Assert status sukses
    expect(response.body).to.have.property("data"); // Assert data ada
    expect(response.body.data.invoice).to.equal(payload.invoice); // Assert invoice sesuai
  });

  // Endpoint GET - Get daftar transaksi
  it("GET /transactions - Get all transactions", async () => {
    const response = await request(baseUrl)
      .get("/transactions")
      .set("Authorization", `Bearer ${authToken}`)
      .set("Content-Type", "application/json");

    expect(response.status).to.equal(200); // Assert status sukses
    expect(response.body).to.have.property("data"); // Assert data ada
    expect(response.body.data).to.be.an("array"); // Assert data berupa array
  });

  // Endpoint PUT - Update transaksi berdasarkan ID
  it("PUT /transactions/:id - Update a transaction", async () => {
    const transactionId = "123"; // Ganti dengan ID valid
    const payload = {
      cashier: "Jane Doe",
    };

    const response = await request(baseUrl)
      .put(`/transactions/${transactionId}`)
      .send(payload)
      .set("Authorization", `Bearer ${authToken}`)
      .set("Content-Type", "application/json");

    expect(response.status).to.equal(200); // Assert status sukses
    expect(response.body).to.have.property("data"); // Assert data ada
    expect(response.body.data.cashier).to.equal(payload.cashier); // Assert perubahan sesuai
  });

  // Endpoint DELETE - Delete transaksi berdasarkan ID
  it("DELETE /transactions/:id - Delete a transaction", async () => {
    const transactionId = "123"; // Ganti dengan ID valid

    const response = await request(baseUrl)
      .delete(`/transactions/${transactionId}`)
      .set("Authorization", `Bearer ${authToken}`)
      .set("Content-Type", "application/json");

    expect(response.status).to.equal(200); // Assert status sukses
    expect(response.body).to.have.property("message"); // Assert ada pesan
    expect(response.body.message).to.equal("Transaction deleted successfully"); // Assert pesan sesuai
  });
});
