# SI DILAN - Sistem Informasi Digital Melayani

Aplikasi terpadu untuk **Satuan Polisi Pamong Praja dan Kebakaran (Satpol PPK) Kabupaten Trenggalek**.

Dibangun dengan teknologi modern dan gratis:
- **Frontend:** Vue.js + Tailwind CSS (Hosting di GitHub Pages)
- **Backend & Database:** Supabase (PostgreSQL)

---

## 🚀 Modul & Fitur

| Modul | Status | Deskripsi |
|-------|--------|-----------|
| 📊 **Dashboard** | ✅ Aktif | Ringkasan pengaduan, ST, personil, grafik, dark mode |
| 📢 **DUMAS** | ✅ Aktif | Pengaduan Masyarakat (Form + Tracking Status + Riwayat + Upload Foto) |
| 📋 **TUGAS** | ✅ Aktif | Surat Tugas (Form lengkap + Riwayat + Pagination) |
| 📝 **Laporan** | ✅ Aktif | Form laporan hasil kegiatan + dokumentasi + kolase |
| 🗺️ **Peta & Crosstab** | ✅ Aktif | Peta sebaran Leaflet + Tabel tabulasi Kecamatan × Kategori |
| 🧾 **SPPD & Kwitansi** | 🟡 Parsial | Input biaya & simpan ke database (cetak PDF menunggu Edge Functions) |
| 🗃️ **Master Data** | ✅ Aktif | Personil, Layanan, SOP, Lokasi, Kendaraan, Peralatan, dll. |
| ⚙️ **Pengaturan** | ✅ Aktif | Identitas Instansi, Pejabat, Kontak, Preferensi Sistem |
| ℹ️ **Tentang** | ✅ Aktif | Informasi aplikasi & kontak |

### Fitur Tambahan
- 🌙 **Dark Mode** — Toggle tema gelap/terang di sidebar, tersimpan otomatis
- 📊 **Grafik Interaktif** — Grafik batang (pengaduan per bulan) & donat (status)
- 📱 **Responsif** — Sidebar adaptif untuk layar kecil (tablet & HP)
- 🔔 **Badge Counter** — Indikator jumlah di menu sidebar
- 🖼️ **Upload & Preview Foto** — Di form pengaduan dan laporan
- 🖨️ **Cetak Kolase** — Via html2canvas (laporan)

---

## 🌐 Akses Aplikasi

| Halaman | URL |
|---------|-----|
| **Dashboard** | [si-dilan](https://miftachurrochim82-sketch.github.io/si-dilan/) |
| **Form Input** | [si-dilan/form.html](https://miftachurrochim82-sketch.github.io/si-dilan/form.html) |
| **Peta & Crosstab** | [si-dilan/peta.html](https://miftachurrochim82-sketch.github.io/si-dilan/peta.html) |
| **Cetak SPPD** | [si-dilan/sppd.html](https://miftachurrochim82-sketch.github.io/si-dilan/sppd.html) |
| **Master Data** | [si-dilan/master.html](https://miftachurrochim82-sketch.github.io/si-dilan/master.html) |
| **Pengaturan** | [si-dilan/settings.html](https://miftachurrochim82-sketch.github.io/si-dilan/settings.html) |
| **Tentang** | [si-dilan/about.html](https://miftachurrochim82-sketch.github.io/si-dilan/about.html) |

---

## 🛠 Teknologi

- **Frontend:** HTML5, CSS3 (Tailwind CSS), JavaScript (Vue 3 CDN)
- **Backend/Database:** [Supabase](https://supabase.com) (PostgreSQL, REST API)
- **Hosting:** [GitHub Pages](https://pages.github.com)
- **Icon:** Bootstrap Icons
- **Grafik:** Chart.js 4
- **Peta:** Leaflet.js
- **Kolase:** html2canvas

---

## 📌 Status Proyek

- 🟢 **Fase 1 – MVP (Minimum Viable Product):** Selesai  
  Dashboard, Form Input (Pengaduan, Surat Tugas, Laporan), Master Data, Pengaturan, Peta & Crosstab — semua sudah berfungsi dengan database live.

- 🟡 **Fase 2 – Pelengkapan Fitur:** Sedang berjalan  
  - [x] Peta Sebaran & Crosstab  
  - [x] Halaman SPPD (input biaya)  
  - [ ] Generate PDF Surat Tugas & SPPD via Supabase Edge Functions  
  - [ ] Upload gambar ke Supabase Storage (cloud)  
  - [ ] Halaman tracking publik  
  - [ ] Notifikasi WhatsApp (Fonnte API via Edge Functions)  
  - [ ] Fitur ekspor data ke Excel  

- ⚪ **Fase 3 – Profesionalisasi:** Rencana migrasi ke VS Code + Vite + Vercel  
- ⚪ **Fase 4 – Peluncuran Publik:** Portal pengaduan resmi, integrasi website Pemkab, pelatihan  

---

## 🗺 Rencana Pengembangan (Roadmap)

### Fase 2 – Pelengkapan Fitur (Q3 2026)
- [x] Peta Sebaran Pengaduan + Crosstab Kecamatan × Kategori
- [x] Halaman input biaya SPPD & kwitansi
- [ ] Generate PDF Surat Tugas, Laporan, SPPD, Kwitansi (Edge Functions)
- [ ] Upload gambar ke Supabase Storage
- [ ] Halaman tracking publik untuk masyarakat cek status aduan
- [ ] Notifikasi WhatsApp otomatis (Fonnte API via Edge Functions)
- [ ] Ekspor data ke Excel

### Fase 3 – Profesionalisasi (Q4 2026)
- [ ] Migrasi ke VS Code + Vite
- [ ] Deploy frontend ke Vercel dengan CI/CD
- [ ] Implementasi autentikasi login (Supabase Auth)
- [ ] Role-based access control (Admin, Operator, Viewer)

### Fase 4 – Peluncuran Publik (2027)
- [ ] Portal pengaduan publik resmi
- [ ] Integrasi dengan website Pemkab Trenggalek
- [ ] Dashboard monitoring real-time untuk pimpinan
- [ ] Dokumentasi lengkap & pelatihan pengguna

---

## 🏗 Struktur Proyek
