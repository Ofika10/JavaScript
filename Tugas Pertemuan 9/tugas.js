const Perusahaan = {
    direksi: {
      Rosid: {
        nip: "123456",
        noHP: "08123456789",
        alamat: {
          jalan: "Jalan Melati No. 1",
          kota: "Padang",
          provinsi: "Sumatera Barat"
        }
      }
    },
    manager: {
      Surya: {
        nip: "789012",
        noHP: "082154326545",
        alamat: {
          jalan: "Jalan Angrek No. 2",
          kota: "Aceh",
          provinsi: "Sumatera Utara"
        }
      }
    },
    divisi: {
      pelayanan: {
        anggota: {
          Andre: {
            nip: "234567",
            noHP: "081112233442",
            alamat: {
              jalan: "Jalan Mawar No. 3",
              kota: "Bandar Lampung",
              provinsi: "Lampung"
            }
          },
          Akbar: {
            nip: "345678",
            noHP: "08887776655",
            alamat: {
              jalan: "Jalan Pelayanan No. 4",
              kota: "Yogyakarta",
              provinsi: "DI Yogyakarta"
            }
          }
        }
      },
      pemasaran: {
        anggota: {
          Abdul: {
            nip: "456789",
            nama: "Abdul",
            noHP: "081234567895",
            alamat: {
              jalan: "Jalan Kamboja No. 5",
              kota: "Palembang",
              provinsi: "Sumatera Selatan"
            }
          },
          Rosa: {
            nip: "567890",
            nama: "Rosa",
            noHP: "087654321",
            alamat: {
              jalan: "Jalan Khatib Sulaiman No. 6",
              kota: "Padang",
              provinsi: "Sumatera Barat"
            }
          }
        }
      }
    }
  };
  
console.log(Perusahaan.direksi.Rosid);