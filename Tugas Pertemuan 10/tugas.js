function hitungGajiKaryawan() {
    const gajiPerBulan = 2500000;
    const tunjanganPerTahun = 600000;
    const bonusPerProyek = 400000;
    const jumlahProyek = 7;
    const jumlahTahun = 6;
  
    const gajiPerTahun = gajiPerBulan * 12;
    const totalTunjangan = tunjanganPerTahun * jumlahTahun;
    const totalBonus = bonusPerProyek * jumlahProyek;
    const totalGaji = gajiPerTahun + totalTunjangan + totalBonus;
  
    return totalGaji;
  }
  
  const totalGajiKaryawan = hitungGajiKaryawan();
  console.log(`Gaji bersih anda selama 6 tahun adalah Rp. ${totalGajiKaryawan}.`);
  