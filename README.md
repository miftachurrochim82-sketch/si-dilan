# SI DILAN - Sistem Informasi Digital Melayani

Aplikasi terpadu untuk **Satuan Polisi Pamong Praja dan Kebakaran (Satpol PPK) Kabupaten Trenggalek**.

Dibangun dengan teknologi modern dan gratis:
- **Frontend:** Vue.js 3 + Tailwind CSS (CDN, Hosting di GitHub Pages)
- **Backend & Database:** Supabase (PostgreSQL, REST API, Auth)

---

## 🔐 Autentikasi

Aplikasi sekarang dilengkapi **login page** menggunakan **Supabase Auth** (email & password).  
Setelah login, session disimpan dan digunakan untuk mengakses seluruh modul.

---

## 🚀 Modul & Fitur

| Modul | Status | Deskripsi |
|-------|--------|-----------|
| 🔐 **Login** | ✅ Aktif | Autentikasi email/password via Supabase Auth |
| 📊 **Dashboard** | ✅ Aktif | Ringkasan pengaduan, ST, grafik, export Excel, dark mode, toast notification |
| 📢 **DUMAS** | ✅ Aktif | Pengaduan Masyarakat (Form + Tracking Status + Riwayat + Upload Foto + Validasi) |
| 📋 **TUGAS** | ✅ Aktif | Surat Tugas (Form lengkap + Riwayat + Pagination + Export Excel/CSV) |
| 📝 **Laporan** | ✅ Aktif | Form laporan hasil kegiatan + dokumentasi + cetak & unduh kolase |
| 🗺️ **Peta & Crosstab** | ✅ Aktif | Peta sebaran Leaflet (marker warna + legenda) + Tabel tabulasi Kecamatan × Kategori |
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
- 📄 **Export Excel & CSV** — Berfungsi penuh (SheetJS) di Dashboard, Pengaduan, ST, dan Laporan
- 🖼️ **Upload & Preview Foto** — Dengan validasi ukuran (maks 5MB) dan tipe file
- 🖨️ **Cetak & Unduh Kolase Laporan** — Menggunakan html2canvas
- 📱 **Responsif** — Sidebar adaptif dengan overlay mobile, grid responsif di semua form
- ♿ **Aksesibilitas Dasar** — ARIA labels, keyboard navigation, semantic HTML
- 🧩 **Komponen Modular** — Sidebar, Toast, Loading, dan CSS dipisah ke file terpisah

---

## 🌐 Akses Aplikasi

| Halaman | URL |
|---------|-----|
| **Dashboard** | [si-dilan](https://miftachurrochim82-sketch.github.io/si-dilan/) |
| **Pengaduan** | [si-dilan/form_pengaduan.html](https://miftachurrochim82-sketch.github.io/si-dilan/form_pengaduan.html) |
| **Surat Tugas** | [si-dilan/form_st.html](https://miftachurrochim82-sketch.github.io/si-dilan/form_st.html) |
| **Laporan** | [si-dilan/form_laporan.html](https://miftachurrochim82-sketch.github.io/si-dilan/form_laporan.html) |
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
- **Kolase:** html2canvas

---

## 🏗 Struktur Proyek
