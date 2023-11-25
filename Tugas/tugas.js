<<<<<<< HEAD
const prompt=require("prompt-sync")({sigint:true});
let nama = prompt("Masukkan Nama Anda : ");

=======
let nama = prompt("Masukkan Nama Anda");
>>>>>>> b7e8c70a078413ebdeeaf9c85cfd867a7eecf291
if (nama == "Salma") {
  alert(
    "Halo " +
      nama +
      " , anda mengambil kelas Javascript. Kelas anda berada di labor 103, kelas dimulai jam 10.00"
  );
} else if (nama == "Andre") {
  alert(
    "Halo " +
      nama +
      ", anda mengambil kelas Design Grafis. Kelas anda berada di labor 101, kelas dimulai jam 13.00"
  );
} else {
  alert("Maaf " + nama + " , anda belum mengambil kelas di Kafekoding");
}
