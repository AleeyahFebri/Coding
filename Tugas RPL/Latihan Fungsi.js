// --- PROSEDUR OUTPUT DENGAN CONCATENATION ---
function displayReport(data) {
    
    console.log("==================================================");
    console.log("LAPORAN KEHADIRAN SISWA RPL (Senin - Sabtu)");
    console.log("==================================================");
    console.log("Nama Siswa   | H | I | S | A | Total");
    console.log("-----------------------------------");
    
    // Perulangan untuk setiap siswa
    for (const studentName in data) {
        if (data.hasOwnProperty(studentName)) {
            const attendanceList = data[studentName];
            const summary = calculateSummary(attendanceList);
            
            const totalAttendance = attendanceList.length;
            
            // Output menggunakan CONCATENATION (+)
            // padEnd(12) digunakan untuk menjaga format kolom.
            const outputLine = 
                studentName.padEnd(12) + " | " + 
                summary.Hadir + " | " + 
                summary.Izin + " | " + 
                summary.Sakit + " | " + 
                summary.Alpha + " | " + 
                totalAttendance;
            
            console.log(outputLine);
        }
    }
    
    console.log("-----------------------------------");
    console.log("Keterangan: H=Hadir, I=Izin, S=Sakit, A=Alpha");
}

// --- FUNGSI UTAMA (Tidak Berubah) ---
function calculateSummary(attendanceList) {
    let summary = { Hadir: 0, Izin: 0, Sakit: 0, Alpha: 0 };
    for (const status of attendanceList) {
        if (status === "H") {
            summary.Hadir++;
        } else if (status === "I") {
            summary.Izin++;
        } else if (status === "S") {
            summary.Sakit++;
        } else if (status === "A") {
            summary.Alpha++;
        }
    }
    return summary;
}

// --- Contoh Data (Tidak Berubah) ---
const attendanceData = {
    "Budi Santoso": ["H", "H", "I", "S", "H", "A"],
    "Siti Rahayu": ["H", "H", "H", "H", "H", "H"],
    "Joko Susilo": ["A", "S", "I", "H", "I", "H"],
    "Ayu Lestari": ["H", "A", "H", "S", "A", "H"]
};

// --- Eksekusi ---
displayReport(attendanceData);