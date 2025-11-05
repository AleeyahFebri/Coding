console.log("=== PENGISIAN DATA SISWA ===");

let namaSiswa = "FBRI";
let jurusanSiswa = "RPL";
let hobiSiswa = "AYAMBAKAR";

let nilaiPelajaran1 = 85; 
let nilaiPelajaran2 = 68; 
let nilaiPelajaran3 = 92;

function hitungRataRataDanKelulusan(nilai1, nilai2, nilai3) {
    
    // Hitung rata-rata
    const rataRata = (nilai1 + nilai2 + nilai3) / 3;
    const rataRataFormatted = rataRata.toFixed(2); 

    // Tentukan keterangan: Lulus jika rata-rata >= 70
    let keterangan;
    if (rataRata >= 70) {
        keterangan = "Lulus";
    } else {
        keterangan = "Tidak Lulus"; 
    }

    // Kembalikan hasil
    return `Rata-rata: ${rataRataFormatted}\nKeterangan: ${keterangan}`;
}

function tampilkanBiodata(nama, jurusan, hobi) {
    console.log("--- HASIL BIODATA SISWA ---");
    console.log(`Nama    : ${nama}`);
    console.log(`Jurusan : ${jurusan}`);
    console.log(`Hobi    : ${hobi}`);
    console.log("---------------------------------");
}

tampilkanBiodata(namaSiswa, jurusanSiswa, hobiSiswa);

console.log("\n--- HASIL NILAI DAN KELULUSAN ---");
const hasilNilai = hitungRataRataDanKelulusan(nilaiPelajaran1, nilaiPelajaran2, nilaiPelajaran3);
console.log(hasilNilai);
console.log("---------------------------------");