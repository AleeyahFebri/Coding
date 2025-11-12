function displayReport(data) {
    
    console.log("==================================================");
    console.log("LAPORAN KEHADIRAN SISWA RPL (Senin - Sabtu)");
    console.log("==================================================");
    console.log("Nama Siswa   | H | I | S | A | Total");
    console.log("-----------------------------------");
    
    for (const studentName in data) {
        if (data.hasOwnProperty(studentName)) {
            const attendanceList = data[studentName];
            const summary = calculateSummary(attendanceList);
            
            const totalAttendance = attendanceList.length;
            
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


const attendanceData = {
    "Budi Santoso": ["H", "H", "I", "S", "H", "A"],
    "Siti Rahayu": ["H", "H", "H", "H", "H", "H"],
    "Joko Susilo": ["A", "S", "I", "H", "I", "H"],
    "Ayu Lestari": ["H", "A", "H", "S", "A", "H"]
};


displayReport(attendanceData);

// By Muh. Naufal Febriansyah
// Student ID: 544251173
// Class: RPL X-4

// kelas = 85

// if (kelas == 'X RPL 2') {
//     console.log("Selamat datang di X RPL 2 !");
// } else {
//     console.log("kamu salah kelas");
// }

nilai = 85

if (nilai >= 90) {
    console.log("Kamu dapat A");
} else if (nilai >= 80) {
    console.log("Kamu dapat B");
} else if (nilai >= 70) {
    console.log("Kamu dapat C");
}