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
| 📢 **DUMAS** | ✅ Aktif | Pengaduan Masyarakat (Form + Tracking Status + Riwayat) |
| 📋 **TUGAS** | ✅ Aktif | Surat Tugas (Form lengkap + Riwayat + Pagination) |
| 📝 **Laporan** | ✅ Aktif | Form laporan hasil kegiatan + simpan ke database |
| 🧾 **SPPD** | ⏳ Coming Soon | Surat Perintah Perjalanan Dinas & Kwitansi |
| 🗃️ **Master Data** | ✅ Aktif | Personil, Layanan, SOP, Lokasi, Kendaraan, Peralatan, dll. |
| ⚙️ **Pengaturan** | ✅ Aktif | Identitas Instansi, Pejabat, Kontak, Default Perjalanan |

### Fitur Tambahan
- 🌙 **Dark Mode** — Toggle tema gelap/terang di sidebar, tersimpan otomatis
- 📊 **Grafik Interaktif** — Grafik batang (pengaduan per bulan) & donat (status)
- 📱 **Responsif** — Sidebar adaptif untuk layar kecil (tablet & HP)
- 🔔 **Badge Counter** — Indikator jumlah di menu sidebar

---

## 🌐 Akses Aplikasi

| Halaman | URL |
|---------|-----|
| **Dashboard** | [si-dilan](https://miftachurrochim82-sketch.github.io/si-dilan/) |
| **Form Input** | [si-dilan/form.html](https://miftachurrochim82-sketch.github.io/si-dilan/form.html) |
| **Master Data** | [si-dilan/master.html](https://miftachurrochim82-sketch.github.io/si-dilan/master.html) |
| **Pengaturan** | [si-dilan/settings.html](https://miftachurrochim82-sketch.github.io/si-dilan/settings.html) |

---

## 🛠 Teknologi

- **Frontend:** HTML5, CSS3 (Tailwind CSS), JavaScript (Vue 3 CDN)
- **Backend/Database:** [Supabase](https://supabase.com) (PostgreSQL, REST API)
- **Hosting:** [GitHub Pages](https://pages.github.com)
- **Icon:** Bootstrap Icons
- **Grafik:** Chart.js 4

---

## 📌 Status Proyek

- 🟢 **Fase 1 – MVP (Minimum Viable Product):** Selesai  
  Dashboard, Form Input (Pengaduan & Surat Tugas), Master Data, Pengaturan — semua sudah berfungsi dengan database live.

- 🟡 **Fase 2 – Pelengkapan Fitur:** Sedang dalam pengembangan  
  Fitur tracking publik, generate PDF (SPPD/Kwitansi), dan notifikasi WhatsApp.

- ⚪ **Fase 3 – VS Code & Vercel:** Rencana migrasi ke environment development profesional untuk kolaborasi dan deployment yang lebih optimal.

---

## 🗺 Rencana Pengembangan (Roadmap)

### Fase 2 – Pelengkapan Fitur (Q3 2026)
- [ ] Generate PDF Surat Tugas & SPPD via Supabase Edge Functions
- [ ] Upload gambar dokumentasi pengaduan & laporan (Supabase Storage)
- [ ] Halaman tracking publik untuk masyarakat cek status aduan
- [ ] Notifikasi WhatsApp otomatis (Fonnte API via Edge Functions)
- [ ] Fitur ekspor data ke Excel

### Fase 3 – Profesionalisasi (Q4 2026)
- [ ] Migrasi ke VS Code + Vite (development environment)
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
