# SI DILAN - Sistem Informasi Digital Melayani

Aplikasi terpadu untuk **Satuan Polisi Pamong Praja dan Kebakaran (Satpol PPK) Kabupaten Trenggalek**.

Dibangun dengan teknologi modern dan gratis:
- **Frontend:** Vue.js 3 + Tailwind CSS (CDN, Hosting di GitHub Pages)
- **Backend & Database:** Supabase (PostgreSQL, REST API, Auth)

---

## 🔐 Autentikasi

Aplikasi sekarang dilengkapi **login page** menggunakan **Supabase Auth** (email & password).  
Setelah login, session disimpan dan digunakan untuk mengakses seluruh modul.

> **Catatan:** Pastikan Supabase Auth diaktifkan di project Anda dan user sudah terdaftar.

---

## 🚀 Modul & Fitur

| Modul | Status | Deskripsi |
|-------|--------|-----------|
| 🔐 **Login** | ✅ Aktif | Autentikasi email/password via Supabase Auth |
| 📊 **Dashboard** | ✅ Aktif | Ringkasan pengaduan, ST, grafik, export Excel, dark mode, toast notification |
| 📢 **DUMAS** | ✅ Aktif | Pengaduan Masyarakat (Form + Tracking Status + Riwayat + Upload Foto + Validasi) |
| 📋 **TUGAS** | ✅ Aktif | Surat Tugas (Form lengkap + Riwayat + Pagination + Export Excel) |
| 📝 **Laporan** | ✅ Aktif | Form laporan hasil kegiatan + dokumentasi + cetak kolase |
| 🗺️ **Peta & Crosstab** | ✅ Aktif | Peta sebaran Leaflet (marker warna berdasarkan status) + Tabel tabulasi Kecamatan × Kategori |
| 🧾 **SPPD & Kwitansi** | 🟡 Parsial | Input biaya & simpan ke database (cetak PDF menunggu Edge Functions) |
| 🗃️ **Master Data** | ✅ Aktif | Personil, Layanan, SOP, Lokasi, Kendaraan, Peralatan, dll. (CRUD + Search + Modal Konfirmasi Hapus) |
| ⚙️ **Pengaturan** | ✅ Aktif | Identitas Instansi, Pejabat, Kontak, Preferensi Sistem (Batch Upsert) |
| ℹ️ **Tentang** | ✅ Aktif | Informasi aplikasi & kontak (Dark Mode support) |

### Fitur Tambahan (Baru)
- 🔐 **Login/Logout** — Supabase Auth, session management
- 🌙 **Dark Mode** — Toggle tema gelap/terang di sidebar, tersimpan otomatis, konsisten di semua halaman
- 🔔 **Toast Notification** — Feedback sukses/gagal di setiap aksi, tanpa alert() native
- 🗑️ **Modal Konfirmasi Hapus** — Menggantikan confirm() native di Master Data
- 🔍 **Search & Filter Real-time** — Di Master Data dan Riwayat Pengaduan/ST
- 📄 **Export Excel** — Berfungsi penuh (SheetJS) di Dashboard, Pengaduan, ST, dan Laporan
- 🖼️ **Upload & Preview Foto** — Dengan validasi ukuran (maks 5MB) dan tipe file
- 🖨️ **Cetak Kolase Laporan** — Membuka jendela print dengan gambar
- 📱 **Responsif** — Sidebar adaptif dengan overlay mobile, grid responsif di semua form
- ♿ **Aksesibilitas Dasar** — ARIA labels, keyboard navigation, semantic HTML

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

- **Frontend:** HTML5, CSS3 (Tailwind CSS CDN), JavaScript (Vue 3 CDN, Options API)
- **Backend/Database:** [Supabase](https://supabase.com) (PostgreSQL, REST API, Auth)
- **Hosting:** [GitHub Pages](https://pages.github.com)
- **Icon:** Bootstrap Icons
- **Grafik:** Chart.js 4
- **Peta:** Leaflet.js 1.9.4
- **Export:** SheetJS (xlsx)
- **Kolase:** html2canvas (akan diintegrasikan)

---

## 📌 Status Proyek

- 🟢 **Fase 1 – MVP (Minimum Viable Product):** Selesai  
  Dashboard, Form Input (Pengaduan, Surat Tugas, Laporan), Master Data, Pengaturan, Peta & Crosstab — semua sudah berfungsi dengan database live.

- 🟡 **Fase 2 – Pelengkapan Fitur:** Sedang berjalan  
  - [x] Autentikasi Login (Supabase Auth)
  - [x] Peta Sebaran & Crosstab
  - [x] Halaman SPPD (input biaya)
  - [x] Validasi upload gambar (ukuran & tipe)
  - [x] Toast notification system
  - [x] Modal konfirmasi hapus
  - [x] Search & filter real-time
  - [ ] Generate PDF Surat Tugas & SPPD via Supabase Edge Functions
  - [ ] Upload gambar ke Supabase Storage (cloud)
  - [ ] Halaman tracking publik
  - [ ] Notifikasi WhatsApp (Fonnte API via Edge Functions)
  - [ ] Fitur ekspor data ke Excel/CSV yang lebih lengkap

- ⚪ **Fase 3 – Profesionalisasi:** Rencana migrasi ke VS Code + Vite + Vercel
  - [ ] Migrasi ke Vite + Vue SFC
  - [ ] Deploy frontend ke Vercel dengan CI/CD
  - [ ] Role-based access control (Admin, Operator, Viewer)
  - [ ] Komponen reusable (sidebar, toast, modal) sebagai package

- ⚪ **Fase 4 – Peluncuran Publik:** Portal pengaduan resmi, integrasi website Pemkab, pelatihan

---

## 🗺 Rencana Pengembangan (Roadmap)

### Fase 2 – Pelengkapan Fitur (Q3 2026)
- [x] Peta Sebaran Pengaduan + Crosstab Kecamatan × Kategori
- [x] Halaman input biaya SPPD & kwitansi
- [x] Autentikasi login
- [x] Toast notification & modal konfirmasi
- [x] Validasi upload & search filter
- [ ] Generate PDF Surat Tugas, Laporan, SPPD, Kwitansi (Edge Functions)
- [ ] Upload gambar ke Supabase Storage
- [ ] Halaman tracking publik untuk masyarakat cek status aduan
- [ ] Notifikasi WhatsApp otomatis (Fonnte API via Edge Functions)
- [ ] Ekspor data ke Excel yang lebih lengkap

### Fase 3 – Profesionalisasi (Q4 2026)
- [ ] Migrasi ke VS Code + Vite
- [ ] Deploy frontend ke Vercel dengan CI/CD
- [ ] Implementasi autentikasi login (Supabase Auth) — ✅ sudah ada
- [ ] Role-based access control (Admin, Operator, Viewer)
- [ ] Komponen reusable (npm package)

### Fase 4 – Peluncuran Publik (2027)
- [ ] Portal pengaduan publik resmi
- [ ] Integrasi dengan website Pemkab Trenggalek
- [ ] Dashboard monitoring real-time untuk pimpinan
- [ ] Dokumentasi lengkap & pelatihan pengguna

---

## 🏗 Struktur Proyek
