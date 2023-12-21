const mahasiswa1 = {
    nama: 'Ofika',
    kelas : '1SIB'
}
const mahasiswa2 = {
    nama: 'Ririn',
    kelas: '1SIA',
    umur:'19',
    alamat:{
        jalan: 'jln. belanti indah ujung No1100',
        kota: 'Padang',
        provinsi: 'Sumatera Barat',
        negara:'Indonesia'
    }
} 
console.log(mahasiswa2.alamat.jalan) 

// cara membuat Object menggunakan function Object
function objMahasiswa3(nama, kelas, alamat){
    const mahasiswa = {}
    mahasiswa.nama= nama
    mahasiswa.kelas= kelas
    mahasiswa.alamat= alamat
    
    return mahasiswa
}

console.log(objMahasiswa3('Ofika','1SIB','Padang'))

const warung = {
    makanan:{
             mie:{
                     sakura:{ rasa:'goreng', harga:'3000'},
                        sukses:{
                            rasa:'kuah',
                            harga:'3000'
                        },
                        indomie:{
                            rasa:'goreng',
                            harga:'4000'
                        },
    },
    permen:{
        permen1:'Milkita',
        permen2:'Kopiko',
        permen3:'Relax'
    },
    ciki:{
        ciki1:'potabee',
        ciki2:'momogi',
        ciki3:'lays'
    }
}
        
}
console.log(warung.makanan)

