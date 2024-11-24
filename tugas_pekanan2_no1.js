// Import module readline dengan menggunakana bawaan Node.js
const readline = require("readline");

// Setup interface input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Prompt user untuk memasukkan angka
rl.question("Masukkan angka: ", (input) => {
  const x = parseInt(input); // Merubah input menjadi integer

  // Cek input bilangan ganjil atau negatif
  if (isNaN(x)) {
    console.log("Peringatan: Input harus angka");
  } else if (x < 0) {
    console.log("Peringatan: Tidak bisa input bilangan negatif");
  } else if (x % 2 !== 0) {
    console.log("Peringatan: Tidak bisa input bilangan ganjil");
  } else {

    // Menghitung akar pangkat dua
    const result = Math.sqrt(x);
    console.log(`Hasil dari akar pangkat dua ${x} adalah ${result}`);
  }

  rl.close(); // Menutup interface readline
});
