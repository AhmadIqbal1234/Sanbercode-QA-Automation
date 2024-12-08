import request from "supertest";
import { expect } from "chai";
import { accessToken } from "../data/auth";

// Base URL API
const baseUrl = "https://kasir-api.zelz.my.id";

// CRUD Testing
describe("API Automation for Kontrak Kasir AJA", function () {
  this.timeout(10000); // Set timeout jika API lambat

  // **CREATE (POST)**
  it("POST - Create a new product", async () => {
    const payload = {
        "name": "Testing4",
        "email": "belajar-api10@sanbercode.com",
        "password": "12345678Aa!"
    };

    const response = await request(baseUrl)
      .post("/users")
      .set("Authorization", `Bearer ${accessToken}`)
      .set("Content-Type", "application/json")
      .send(payload);

    // Assertions
    expect(response.status).to.equal(201); // Cek status kode berhasil
    expect(response.body.data).to.include.keys("id", "name"); // Pastikan data produk dibuat
    //expect(response.body.data.name).to.equal("Test Product"); // Cek nama produk
  });

  // // **READ (GET)**
  // it("GET - Retrieve all products", async () => {
  //   const response = await request(baseUrl)
  //     .get("/products")
  //     .set("Authorization", `Bearer ${accessToken}`);

  //   // Assertions
  //   expect(response.status).to.equal(200); // Status kode berhasil
  //   expect(response.body.data).to.be.an("array"); // Pastikan response berbentuk array
  //   expect(response.body.data[0]).to.include.keys("id", "name", "price", "stock"); // Validasi struktur data produk
  // });

  // // **UPDATE (PUT)**
  // it("PUT - Update an existing product", async () => {
  //   const productId = "product_id_here"; // Ganti dengan ID produk yang valid
  //   const payload = {
  //     name: "Updated Product",
  //     price: 150000,
  //     stock: 100,
  //   };

  //   const response = await request(baseUrl)
  //     .put(`/products/${productId}`)
  //     .set("Authorization", `Bearer ${accessToken}`)
  //     .set("Content-Type", "application/json")
  //     .send(payload);

  //   // Assertions
  //   expect(response.status).to.equal(200); // Cek status kode berhasil
  //   expect(response.body.data.name).to.equal("Updated Product"); // Pastikan nama produk diubah
  //   expect(response.body.data.price).to.equal(150000); // Pastikan harga diperbarui
  // });

  // // **DELETE (DELETE)**
  // it("DELETE - Remove an existing product", async () => {
  //   const productId = "product_id_here"; // Ganti dengan ID produk yang valid

  //   const response = await request(baseUrl)
  //     .delete(`/products/${productId}`)
  //     .set("Authorization", `Bearer ${accessToken}`);

  //   // Assertions
  //   expect(response.status).to.equal(200); // Cek status kode berhasil
  //   expect(response.body.message).to.equal("Product deleted successfully"); // Validasi pesan berhasil
  // });
});
