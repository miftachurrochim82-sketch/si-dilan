Vue.component('AppSidebar', {
  template: `
    <aside class="sidebar" :class="{ collapsed: !sidebarOpen && !isMobile, open: sidebarOpen && isMobile }">
      <div class="sidebar-header">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <i class="bi bi-shield-shaded text-2xl"></i>
            <span class="font-bold text-lg">SI DILAN</span>
          </div>
          <button @click="toggleSidebar" class="text-white/70 hover:text-white p-1">
            <i :class="sidebarOpen ? 'bi bi-chevron-left' : 'bi bi-chevron-right'" class="text-xl"></i>
          </button>
        </div>
        <p class="text-xs text-blue-200">Satpol PPK Trenggalek</p>
      </div>
      <nav class="p-3 space-y-1">
        <a href="index.html" class="sidebar-item" :class="{ active: currentPage === 'dashboard' }">
          <i class="bi bi-speedometer2"></i> Dashboard
        </a>
        <div class="sidebar-divider"></div>
        
        <div class="sidebar-group-title" @click="toggleGroup('ops')">
          <span><i class="bi bi-clipboard-data mr-1"></i> Operasional</span>
          <i :class="expandedGroup === 'ops' ? 'bi bi-chevron-down' : 'bi bi-chevron-right'" class="text-xs"></i>
        </div>
        <div v-show="expandedGroup === 'ops'" class="sidebar-sub space-y-1">
          <a href="form_pengaduan.html" class="sidebar-item" :class="{ active: currentPage === 'pengaduan' }">
            <i class="bi bi-megaphone"></i> Pengaduan
          </a>
          <a href="form_st.html" class="sidebar-item" :class="{ active: currentPage === 'st' }">
            <i class="bi bi-envelope-paper"></i> Surat Tugas
          </a>
          <a href="form_laporan.html" class="sidebar-item" :class="{ active: currentPage === 'laporan' }">
            <i class="bi bi-file-earmark-bar-graph"></i> Laporan
          </a>
          <a href="peta.html" class="sidebar-item" :class="{ active: currentPage === 'peta' }">
            <i class="bi bi-geo-alt"></i> Peta & Crosstab
          </a>
          <a href="sppd.html" class="sidebar-item" :class="{ active: currentPage === 'sppd' }">
            <i class="bi bi-file-earmark-pdf"></i> Cetak SPPD
          </a>
        </div>
        
        <div class="sidebar-divider"></div>
        <div class="sidebar-group-title" @click="toggleGroup('adm')">
          <span><i class="bi bi-gear-wide mr-1"></i> Administrasi</span>
          <i :class="expandedGroup === 'adm' ? 'bi bi-chevron-down' : 'bi bi-chevron-right'" class="text-xs"></i>
        </div>
        <div v-show="expandedGroup === 'adm'" class="sidebar-sub space-y-1">
          <a href="master.html" class="sidebar-item" :class="{ active: currentPage === 'master' }">
            <i class="bi bi-server"></i> Master Data
          </a>
          <a href="settings.html" class="sidebar-item" :class="{ active: currentPage === 'settings' }">
            <i class="bi bi-gear"></i> Pengaturan
          </a>
        </div>
        
        <div class="sidebar-divider"></div>
        <a href="about.html" class="sidebar-item" :class="{ active: currentPage === 'about' }">
          <i class="bi bi-info-circle"></i> Tentang Aplikasi
        </a>
        <button @click="toggleDark" class="sidebar-item w-full">
          <i :class="darkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'"></i>
          {{ darkMode ? 'Mode Terang' : 'Mode Gelap' }}
        </button>
      </nav>
    </aside>
  `,
  props: {
    sidebarOpen: Boolean,
    isMobile: Boolean,
    currentPage: { type: String, default: 'dashboard' },
    darkMode: Boolean
  },
  emits: ['toggle-sidebar', 'toggle-dark'],
  data() {
    return { expandedGroup: 'ops' }
  },
  methods: {
    toggleSidebar() { this.$emit('toggle-sidebar'); },
    toggleDark() { this.$emit('toggle-dark'); },
    toggleGroup(name) { this.expandedGroup = this.expandedGroup === name ? '' : name; }
  }
});

console.log('✅ AppSidebar registered');
