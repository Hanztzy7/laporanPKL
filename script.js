function generateLaporan() {
  const judul = document.getElementById('judul').value;
  const lokasi = document.getElementById('lokasi').value;
  const kegiatan = document.getElementById('kegiatan').value;
  const kesimpulan = document.getElementById('kesimpulan').value;
  const fotoFiles = document.getElementById('foto').files;

  const laporanText = `
LAPORAN PKL

Nama       : Farhan Ardiansyah
Kelas      : XI TKJ
Sekolah    : SMK PGRI 1 Kota Blitar

Judul Laporan:
${judul}

Tempat PKL:
${lokasi}

Kegiatan yang Dilakukan:
${kegiatan}

Kesimpulan:
${kesimpulan}
  `;

  const output = document.getElementById('output');
  output.innerHTML = `<pre>${laporanText}</pre>`;

  if (fotoFiles.length > 0) {
    const previewDiv = document.createElement("div");
    previewDiv.id = "fotoPreview";
    output.appendChild(document.createElement("hr"));
    output.appendChild(document.createElement("h3")).innerText = "Foto Kegiatan:";
    output.appendChild(previewDiv);

    for (let i = 0; i < fotoFiles.length; i++) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        previewDiv.appendChild(img);
      }
      reader.readAsDataURL(fotoFiles[i]);
    }
  }

  setTimeout(() => {
    window.print();
  }, 500); // beri waktu gambar muncul sebelum cetak
}

