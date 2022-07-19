function buatObject(penulis, tahun, judul, harga) {
  var buku = {};
  buku.penulis = penulis;
  buku.tahun = tahun;
  buku.judul = judul;
  buku.harga = harga;
  return buku;
}

// Nilai Awal
var bukuFavorit = buatObject('Tere Liye', '2015', ['Pulang', 'Pergi', 'Sepucuk Angpau Merah'], [100000, 90000, 80000]);
console.log(bukuFavorit);
// Menampilkan isi object dengan for in
for (var x in bukuFavorit) {
  console.log(bukuFavorit[x])
}