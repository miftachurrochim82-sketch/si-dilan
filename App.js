// ============================================
// SI DILAN TERPADU – app.js
// ============================================

// Konfigurasi Global
window.APP_CONFIG = {
  supabaseUrl: 'https://msdacugqzxprxajdudsx.supabase.co',
  supabaseKey: 'sb_publishable_yt8MhUQzKsaK-c_k4bOtTQ_TMXSOTEf',
  kecamatan: ['Bendungan','Dongko','Durenan','Gandusari','Kampak','Karangan','Munjungan','Panggul','Pogalan','Pule','Suruh','Trenggalek','Tugu','Watulimo'],
  desa: {
    'Bendungan':['Botoputih','Depok','Masaran','Sengon','Surenlor'],'Dongko':['Dongko','Pandean','Petung','Pringapus','Salam'],'Durenan':['Durenan','Gador','Kamulan','Pakis','Pandean'],'Gandusari':['Gandusari','Jajar','Krandegan','Sukorame','Widoro'],'Kampak':['Bogoran','Karangrejo','Ngadimulyo','Senden','Timahan'],'Karangan':['Buluagung','Jati','Karangan','Kayen','Sumber'],'Munjungan':['Besuki','Munjungan','Sobo','Tawing','Bangun'],'Panggul':['Banjar','Depok','Manggis','Panggul','Wonocoyo'],'Pogalan':['Bendorejo','Kedunglurah','Ngadirejo','Pogalan','Wonocoyo'],'Pule':['Joho','Kembangan','Pule','Puyung','Sidomulyo'],'Suruh':['Gamping','Mlinjon','Ngrandu','Suruh','Wonokerto'],'Trenggalek':['Kelutan','Ngantru','Sumbergedong','Surondakan','Tamanan'],'Tugu':['Duren','Gading','Prambon','Tumpuk','Winong'],'Watulimo':['Dukuh','Gemaharjo','Prigi','Slawe','Watulimo']
  }
};

// Supabase Client
window.supabase = supabase.createClient(APP_CONFIG.supabaseUrl, APP_CONFIG.supabaseKey);

// Utils
window.formatDate = function(d) {
  if (!d) return '-';
  const date = new Date(d);
  if (isNaN(date)) return '-';
  return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
};
window.statusBadge = function(s) {
  const map = { 'Baru': 'bg-amber-100 text-amber-700', 'Diverifikasi': 'bg-sky-100 text-sky-700', 'Diproses': 'bg-violet-100 text-violet-700', 'Selesai': 'bg-emerald-100 text-emerald-700', 'Ditolak': 'bg-rose-100 text-rose-700' };
  return map[s] || 'bg-gray-100';
};
window.getGambarArray = function(item) {
  if (!item || !item.gambar) return [];
  if (Array.isArray(item.gambar)) return item.gambar;
  try { return JSON.parse(item.gambar); } catch (e) { return []; }
};

// Komponen StatCard (reusable)
const StatCard = {
  template: `
    <div class="glass-card stat-card rounded-2xl p-4 text-white" :style="{ background: color }">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><i :class="icon" class="text-xl"></i></div>
        <div><div class="text-2xl font-black">{{ value }}</div><div class="text-[11px] opacity-90">{{ label }}</div></div>
      </div>
    </div>
  `,
  props: ['icon', 'label', 'value', 'color']
};

// ============================================
// APLIKASI UTAMA
// ============================================
const { createApp } = Vue;

createApp({
  data() {
    return {
      // Auth
      session: null,
      loginEmail: '',
      loginPassword: '',
      loginLoading: false,
      loginError: '',
      // Navigasi
      currentPage: 'dashboard',
      expandedGroup: 'ops',
      sidebarOpen: true,
      isMobile: window.innerWidth < 768,
      isDark: localStorage.getItem('darkMode') === 'true',
      // Toast & Loading
      toasts: [],
      loadingOverlay: { show: false, message: 'Memuat data...' },
      // Data Master (di-cache)
      kategoriList: [],
      personilList: [],
      unitKerjaList: [],
      layananList: [],
      sopList: [],
      kendaraanList: [],
      peralatanList: [],
      lokasiList: [],
      standarBiayaList: [],
      // Data Transaksional
      pengaduanList: [],
      suratTugasList: [],
      laporanList: [],
      // Settings
      settings: {},
      // Peta
      mapInstance: null,
      markersLayer: null,
      // Master Data (tab)
      masterActiveTab: 'kategori_pengaduan',
      masterSearch: '',
      masterShowForm: false,
      masterFormData: {},
      masterEditingId: null,
      masterDeleteModal: { show: false, id: null },
    }
  },
  computed: {
    pageTitle() {
      const titles = { dashboard:'Dashboard', pengaduan:'Pengaduan', st:'Surat Tugas', laporan:'Laporan', peta:'Peta & Crosstab', sppd:'Cetak SPPD', master:'Master Data', settings:'Pengaturan', about:'Tentang Aplikasi' };
      return titles[this.currentPage] || 'Dashboard';
    },
    pageSubtitle() {
      const subs = { dashboard:'Ringkasan operasional', pengaduan:'Form input & riwayat', st:'Buat dan pantau surat tugas', laporan:'Buat laporan hasil kegiatan', peta:'Analisis sebaran pengaduan', sppd:'Generate SPD dan Kwitansi', master:'Kelola data referensi', settings:'Konfigurasi aplikasi', about:'Informasi aplikasi' };
      return subs[this.currentPage] || '';
    },
    currentComponent() {
      const comps = { dashboard:'DashboardPage', pengaduan:'PengaduanPage', st:'STPage', laporan:'LaporanPage', peta:'PetaPage', sppd:'SPPDPage', master:'MasterPage', settings:'SettingsPage', about:'AboutPage' };
      return comps[this.currentPage] || 'DashboardPage';
    }
  },
  methods: {
    // Auth
    async handleLogin() {
      this.loginLoading = true; this.loginError = '';
      try {
        const { data, error } = await supabase.auth.signInWithPassword({ email: this.loginEmail, password: this.loginPassword });
        if (error) throw error;
        this.session = data.session;
        this.addToast('Login berhasil');
        await this.loadAllData();
      } catch (e) { this.loginError = e.message; }
      finally { this.loginLoading = false; }
    },
    async handleLogout() {
      await supabase.auth.signOut();
      this.session = null;
      this.addToast('Anda telah logout', 'info');
    },
    // UI
    toggleDarkMode() {
      this.isDark = !this.isDark;
      localStorage.setItem('darkMode', this.isDark);
      document.documentElement.classList.toggle('dark', this.isDark);
    },
    addToast(message, type = 'success') {
      const id = Date.now();
      this.toasts.push({ id, message, type });
      setTimeout(() => { this.toasts = this.toasts.filter(t => t.id !== id); }, 3000);
    },
    showLoading(msg) { this.loadingOverlay = { show: true, message: msg || 'Memuat data...' }; },
    hideLoading() { this.loadingOverlay.show = false; },
    // Data
    async loadAllData() {
      this.showLoading('Memuat data...');
      try {
        const [kat, pet, unit, lay, sop, ken, alt, lok, std, adu, st, lap] = await Promise.all([
          supabase.from('kategori_pengaduan').select('*').eq('status','Aktif'),
          supabase.from('personil').select('*').eq('status','Aktif'),
          supabase.from('unit_kerja').select('*').eq('status','Aktif'),
          supabase.from('layanan').select('*').eq('status','Aktif'),
          supabase.from('sop').select('*').eq('status','Aktif'),
          supabase.from('kendaraan').select('*'),
          supabase.from('peralatan').select('*'),
          supabase.from('lokasi').select('*'),
          supabase.from('standar_biaya').select('*'),
          supabase.from('pengaduan').select('*, kategori_pengaduan(permasalahan, bidang, prioritas)').order('tanggal_lapor',{ascending:false}),
          supabase.from('surat_tugas').select('*').order('created_at',{ascending:false}),
          supabase.from('laporan').select('*').order('tanggal_laporan',{ascending:false})
        ]);
        this.kategoriList = kat.data||[]; this.personilList = pet.data||[]; this.unitKerjaList = unit.data||[];
        this.layananList = lay.data||[]; this.sopList = sop.data||[]; this.kendaraanList = ken.data||[];
        this.peralatanList = alt.data||[]; this.lokasiList = lok.data||[]; this.standarBiayaList = std.data||[];
        this.pengaduanList = adu.data||[]; this.suratTugasList = st.data||[]; this.laporanList = lap.data||[];
      } catch (e) { this.addToast('Gagal memuat data: '+e.message, 'error'); }
      finally { this.hideLoading(); }
    },
    async loadSettings() {
      try {
        const { data } = await supabase.from('settings').select('*');
        if (data) data.forEach(d => { this.settings[d.key] = d.value; });
      } catch (e) { /* silent */ }
    },
    formatDate: window.formatDate,
    statusBadge: window.statusBadge,
    getGambarArray: window.getGambarArray,
  },
  mounted() {
    if (this.isDark) document.documentElement.classList.add('dark');
    if (this.isMobile) this.sidebarOpen = false;
    window.addEventListener('resize', () => { this.isMobile = window.innerWidth < 768; if (!this.isMobile) this.sidebarOpen = true; });
    // Check auth
    supabase.auth.getSession().then(({ data: { session } }) => {
      this.session = session;
      if (session) { this.loadAllData(); this.loadSettings(); }
      document.getElementById('app-loading')?.classList.add('hide');
    });
  }
}).mount('#app');
