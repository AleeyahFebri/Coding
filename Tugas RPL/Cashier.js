// =======================
// INPUT BARANG
// =======================

let nama1 = "Pensil Case";
let harga1 = 24000;
let qty1 = 5;

let nama2 = "Buku";
let harga2 = 25000;
let qty2 = 3;

let nama3 = "Spidol";
let harga3 = 15000;
let qty3 = 4;


// =======================
// HITUNG TOTAL PER BARANG
// =======================

let total1 = harga1 * qty1;
let total2 = harga2 * qty2;
let total3 = harga3 * qty3;


// =======================
// TOTAL BELANJA
// =======================

let totalBelanja = total1 + total2 + total3;


// =======================
// PERCABANGAN DISKON
// =======================

let diskon = 0;   // default 0%

if (totalBelanja >= 150000) {
    diskon = 0.15;
} else if (totalBelanja >= 100000) {
    diskon = 0.10;
} else if (totalBelanja >= 50000) {
    diskon = 0.05;
} else {
    diskon = 0;
}

let potongan = totalBelanja * diskon;
let totalBayar = totalBelanja - potongan;


// =======================
// OUTPUT STRUK
// =======================

console.log("=== STRUK PEMBELIAN ===");
console.log("1.", nama1, " | ", harga1, "x", qty1, " = ", total1);
console.log("2.", nama2, "        | ", harga2, "x", qty2, " = ", total2);
console.log("3.", nama3, "      | ", harga3, "x", qty3, " = ", total3);
console.log("----------------------------------------");
console.log("Total Belanja     :", totalBelanja);
console.log("Diskon            :", diskon * 100 + "%");
console.log("Potongan          :", potongan);
console.log("Total Bayar       :", totalBayar);