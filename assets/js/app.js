// ========== KONFIGURASI & UTILS ==========
window.APP_CONFIG = {
  supabaseUrl: 'https://msdacugqzxprxajdudsx.supabase.co',
  supabaseKey: 'sb_publishable_yt8MhUQzKsaK-c_k4bOtTQ_TMXSOTEf',
  kecamatan: ['Bendungan','Dongko','Durenan','Gandusari','Kampak','Karangan','Munjungan','Panggul','Pogalan','Pule','Suruh','Trenggalek','Tugu','Watulimo'],
  desa: {
    Bendungan:['Botoputih','Depok','Masaran','Sengon','Surenlor'],
    Dongko:['Dongko','Pandean','Petung','Pringapus','Salam'],
    Durenan:['Durenan','Gador','Kamulan','Pakis','Pandean'],
    Gandusari:['Gandusari','Jajar','Krandegan','Sukorame','Widoro'],
    Kampak:['Bogoran','Karangrejo','Ngadimulyo','Senden','Timahan'],
    Karangan:['Buluagung','Jati','Karangan','Kayen','Sumber'],
    Munjungan:['Besuki','Munjungan','Sobo','Tawing','Bangun'],
    Panggul:['Banjar','Depok','Manggis','Panggul','Wonocoyo'],
    Pogalan:['Bendorejo','Kedunglurah','Ngadirejo','Pogalan','Wonocoyo'],
    Pule:['Joho','Kembangan','Pule','Puyung','Sidomulyo'],
    Suruh:['Gamping','Mlinjon','Ngrandu','Suruh','Wonokerto'],
    Trenggalek:['Kelutan','Ngantru','Sumbergedong','Surondakan','Tamanan'],
    Tugu:['Duren','Gading','Prambon','Tumpuk','Winong'],
    Watulimo:['Dukuh','Gemaharjo','Prigi','Slawe','Watulimo']
  }
};

window.supabase = supabase.createClient(APP_CONFIG.supabaseUrl, APP_CONFIG.supabaseKey);

window.formatDate = function(d) {
  if (!d) return '-';
  const dt = new Date(d);
  return isNaN(dt) ? '-' : dt.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
};

window.statusBadge = function(s) {
  return {
    Baru: 'bg-amber-100 text-amber-700',
    Diverifikasi: 'bg-sky-100 text-sky-700',
    Diproses: 'bg-violet-100 text-violet-700',
    Selesai: 'bg-emerald-100 text-emerald-700',
    Ditolak: 'bg-rose-100 text-rose-700'
  }[s] || 'bg-gray-100';
};

window.getGambarArray = function(item) {
  if (!item || !item.gambar) return [];
  if (Array.isArray(item.gambar)) return item.gambar;
  try { return JSON.parse(item.gambar); } catch (e) { return []; }
};

// ========== KOMPONEN GLOBAL ==========
const AppSidebar = {
  template: `
    <aside class="sidebar" :class="{ collapsed: !sidebarOpen && !isMobile, open: sidebarOpen && isMobile }">
      <div class="sidebar-header">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2"><i class="bi bi-shield-shaded text-2xl"></i><span class="font-bold text-lg">SI DILAN</span></div>
          <button @click="$emit('toggle-sidebar')" class="text-white/70 hover:text-white p-1"><i :class="sidebarOpen ? 'bi bi-chevron-left' : 'bi bi-chevron-right'" class="text-xl"></i></button>
        </div>
        <p class="text-xs text-blue-200">Satpol PPK Trenggalek</p>
      </div>
      <nav class="p-3 space-y-1">
        <a href="#" @click.prevent="$emit('navigate','dashboard')" class="sidebar-item" :class="{active:currentPage==='dashboard'}"><i class="bi bi-speedometer2"></i> Dashboard</a>
        <div class="sidebar-divider"></div>
        <div class="sidebar-group-title" @click="expandedGroup=expandedGroup==='ops'?'':'ops'"><span><i class="bi bi-clipboard-data mr-1"></i> Operasional</span><i :class="expandedGroup==='ops'?'bi bi-chevron-down':'bi bi-chevron-right'" class="text-xs"></i></div>
        <div v-show="expandedGroup==='ops'" class="sidebar-sub space-y-1">
          <a href="#" @click.prevent="$emit('navigate','pengaduan')" class="sidebar-item" :class="{active:currentPage==='pengaduan'}"><i class="bi bi-megaphone"></i> Pengaduan</a>
          <a href="#" @click.prevent="$emit('navigate','st')" class="sidebar-item" :class="{active:currentPage==='st'}"><i class="bi bi-envelope-paper"></i> Surat Tugas</a>
          <a href="#" @click.prevent="$emit('navigate','laporan')" class="sidebar-item" :class="{active:currentPage==='laporan'}"><i class="bi bi-file-earmark-bar-graph"></i> Laporan</a>
          <a href="#" @click.prevent="$emit('navigate','peta')" class="sidebar-item" :class="{active:currentPage==='peta'}"><i class="bi bi-geo-alt"></i> Peta & Crosstab</a>
          <a href="#" @click.prevent="$emit('navigate','sppd')" class="sidebar-item" :class="{active:currentPage==='sppd'}"><i class="bi bi-file-earmark-pdf"></i> Cetak SPPD</a>
        </div>
        <div class="sidebar-divider"></div>
        <div class="sidebar-group-title" @click="expandedGroup=expandedGroup==='adm'?'':'adm'"><span><i class="bi bi-gear-wide mr-1"></i> Administrasi</span><i :class="expandedGroup==='adm'?'bi bi-chevron-down':'bi bi-chevron-right'" class="text-xs"></i></div>
        <div v-show="expandedGroup==='adm'" class="sidebar-sub space-y-1">
          <a href="#" @click.prevent="$emit('navigate','master')" class="sidebar-item" :class="{active:currentPage==='master'}"><i class="bi bi-server"></i> Master Data</a>
          <a href="#" @click.prevent="$emit('navigate','settings')" class="sidebar-item" :class="{active:currentPage==='settings'}"><i class="bi bi-gear"></i> Pengaturan</a>
        </div>
        <div class="sidebar-divider"></div>
        <a href="#" @click.prevent="$emit('navigate','about')" class="sidebar-item" :class="{active:currentPage==='about'}"><i class="bi bi-info-circle"></i> Tentang Aplikasi</a>
        <button @click="$emit('toggle-dark')" class="sidebar-item w-full"><i :class="darkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'"></i> {{ darkMode ? 'Mode Terang' : 'Mode Gelap' }}</button>
      </nav>
    </aside>
  `,
  props: { sidebarOpen: Boolean, isMobile: Boolean, currentPage: String, darkMode: Boolean },
  emits: ['toggle-sidebar', 'toggle-dark', 'navigate'],
  data: () => ({ expandedGroup: 'ops' })
};

const ToastContainer = {
  template: `
    <div class="toast-container">
      <div v-for="t in toasts" :key="t.id" class="toast" :style="{ background: t.type === 'success' ? '#10b981' : t.type === 'error' ? '#ef4444' : '#3b82f6' }">
        <i :class="t.type === 'success' ? 'bi bi-check-circle' : t.type === 'error' ? 'bi bi-x-circle' : 'bi bi-info-circle'"></i>
        <span class="ml-2">{{ t.message }}</span>
      </div>
    </div>
  `,
  data: () => ({ toasts: [] }),
  methods: {
    addToast(m, type = 'success') {
      const id = Date.now();
      this.toasts.push({ id, message: m, type });
      setTimeout(() => { this.toasts = this.toasts.filter(t => t.id !== id); }, 3000);
    }
  }
};

const LoadingOverlay = {
  props: { visible: Boolean, message: { type: String, default: 'Memuat data...' } },
  template: `
    <div v-if="visible" class="loading-overlay">
      <div class="loading-box">
        <div class="spinner"></div>
        <p class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ message }}</p>
      </div>
    </div>
  `
};

// ========== APLIKASI UTAMA ==========
const { createApp } = Vue;

createApp({
  components: { AppSidebar, ToastContainer, LoadingOverlay },
  data() {
    return {
      session: null,
      loginEmail: '',
      loginPassword: '',
      loginLoading: false,
      loginError: '',
      currentPage: 'dashboard',
      sidebarOpen: true,
      isMobile: window.innerWidth < 768,
      isDark: localStorage.getItem('darkMode') === 'true',
      pengaduanList: [],
      suratTugasList: [],
      kategoriList: [],
      personilList: [],
      unitKerjaList: [],
      layananList: [],
      sopList: [],
      kendaraanList: [],
      peralatanList: [],
      lokasiList: [],
      settings: {},
      // Loading overlay (prop-based)
      loadingVisible: false,
      loadingMessage: 'Memuat data...'
    }
  },
  computed: {
    pageTitle() {
      return {
        dashboard: 'Dashboard', pengaduan: 'Pengaduan', st: 'Surat Tugas',
        laporan: 'Laporan', peta: 'Peta & Crosstab', sppd: 'Cetak SPPD',
        master: 'Master Data', settings: 'Pengaturan', about: 'Tentang Aplikasi'
      }[this.currentPage];
    },
    pageSubtitle() {
      return {
        dashboard: 'Ringkasan operasional', pengaduan: 'Form & riwayat',
        st: 'Buat & pantau ST', laporan: 'Laporan kegiatan',
        peta: 'Analisis sebaran', sppd: 'SPPD & Kwitansi',
        master: 'Kelola data referensi', settings: 'Konfigurasi aplikasi',
        about: 'Informasi aplikasi'
      }[this.currentPage];
    },
    currentComponent() {
      return {
        dashboard: 'div', pengaduan: 'div', st: 'div', laporan: 'div',
        peta: 'div', sppd: 'div', master: 'div', settings: 'div', about: 'div'
      }[this.currentPage];
    }
  },
  methods: {
    addToast(m, t) { this.$refs.toastContainer?.addToast(m, t); },
    showLoading(msg) { this.loadingVisible = true; this.loadingMessage = msg || 'Memuat data...'; },
    hideLoading() { this.loadingVisible = false; },
    toggleDarkMode() {
      this.isDark = !this.isDark;
      localStorage.setItem('darkMode', this.isDark);
      document.documentElement.classList.toggle('dark', this.isDark);
    },
    async handleLogin() {
      this.loginLoading = true;
      this.loginError = '';
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: this.loginEmail,
          password: this.loginPassword
        });
        if (error) throw error;
        this.session = data.session;
        this.addToast('Login berhasil');
        await this.loadAllData();
      } catch (e) {
        this.loginError = e.message;
      } finally {
        this.loginLoading = false;
      }
    },
    async handleLogout() {
      await supabase.auth.signOut();
      this.session = null;
      this.addToast('Anda telah logout', 'info');
    },
    async loadAllData() {
      this.showLoading('Memuat data...');
      try {
        const [kat, pet, unit, lay, sop, ken, alt, lok, adu, st] = await Promise.all([
          supabase.from('kategori_pengaduan').select('*').eq('status', 'Aktif'),
          supabase.from('personil').select('*').eq('status', 'Aktif'),
          supabase.from('unit_kerja').select('*').eq('status', 'Aktif'),
          supabase.from('layanan').select('*').eq('status', 'Aktif'),
          supabase.from('sop').select('*').eq('status', 'Aktif'),
          supabase.from('kendaraan').select('*'),
          supabase.from('peralatan').select('*'),
          supabase.from('lokasi').select('*'),
          supabase.from('pengaduan').select('*, kategori_pengaduan(permasalahan, bidang, prioritas)').order('tanggal_lapor', { ascending: false }),
          supabase.from('surat_tugas').select('*').order('created_at', { ascending: false })
        ]);
        this.kategoriList = kat.data || [];
        this.personilList = pet.data || [];
        this.unitKerjaList = unit.data || [];
        this.layananList = lay.data || [];
        this.sopList = sop.data || [];
        this.kendaraanList = ken.data || [];
        this.peralatanList = alt.data || [];
        this.lokasiList = lok.data || [];
        this.pengaduanList = adu.data || [];
        this.suratTugasList = st.data || [];
      } catch (e) {
        this.addToast('Gagal memuat data: ' + e.message, 'error');
      } finally {
        this.hideLoading();
      }
    },
    formatDate: window.formatDate,
    statusBadge: window.statusBadge,
    getGambarArray: window.getGambarArray
  },
  async mounted() {
    if (this.isDark) document.documentElement.classList.add('dark');
    if (this.isMobile) this.sidebarOpen = false;
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
      if (!this.isMobile) this.sidebarOpen = true;
    });

    const { data: { session } } = await supabase.auth.getSession();
    this.session = session;
    if (session) await this.loadAllData();

    document.getElementById('app-loading')?.classList.add('hide');
    console.log('🚀 App ready');
  }
}).mount('#app');
