// ========== KONFIGURASI & UTILS ==========
window.APP_CONFIG = {
  supabaseUrl: 'https://msdacugqzxprxajdudsx.supabase.co',
  supabaseKey: 'sb_publishable_yt8MhUQzKsaK-c_k4bOtTQ_TMXSOTEf',
  kecamatan: ['Bendungan','Dongko','Durenan','Gandusari','Kampak','Karangan','Munjungan','Panggul','Pogalan','Pule','Suruh','Trenggalek','Tugu','Watulimo'],
  desa: { Bendungan:['Botoputih','Depok','Masaran','Sengon','Surenlor'], Dongko:['Dongko','Pandean','Petung','Pringapus','Salam'], Durenan:['Durenan','Gador','Kamulan','Pakis','Pandean'], Gandusari:['Gandusari','Jajar','Krandegan','Sukorame','Widoro'], Kampak:['Bogoran','Karangrejo','Ngadimulyo','Senden','Timahan'], Karangan:['Buluagung','Jati','Karangan','Kayen','Sumber'], Munjungan:['Besuki','Munjungan','Sobo','Tawing','Bangun'], Panggul:['Banjar','Depok','Manggis','Panggul','Wonocoyo'], Pogalan:['Bendorejo','Kedunglurah','Ngadirejo','Pogalan','Wonocoyo'], Pule:['Joho','Kembangan','Pule','Puyung','Sidomulyo'], Suruh:['Gamping','Mlinjon','Ngrandu','Suruh','Wonokerto'], Trenggalek:['Kelutan','Ngantru','Sumbergedong','Surondakan','Tamanan'], Tugu:['Duren','Gading','Prambon','Tumpuk','Winong'], Watulimo:['Dukuh','Gemaharjo','Prigi','Slawe','Watulimo'] }
};
window.supabase = supabase.createClient(APP_CONFIG.supabaseUrl, APP_CONFIG.supabaseKey);
window.formatDate = d => { if(!d) return '-'; const dt=new Date(d); return isNaN(dt)?'-':dt.toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'}); };
window.statusBadge = s => ({ Baru:'bg-amber-100 text-amber-700', Diverifikasi:'bg-sky-100 text-sky-700', Diproses:'bg-violet-100 text-violet-700', Selesai:'bg-emerald-100 text-emerald-700', Ditolak:'bg-rose-100 text-rose-700' }[s]||'bg-gray-100');
window.getGambarArray = item => { if(!item||!item.gambar) return[]; return Array.isArray(item.gambar)?item.gambar:(()=>{try{return JSON.parse(item.gambar)}catch{return[]}})(); };

// ========== KOMPONEN GLOBAL ==========
const AppSidebar = {
  template: `...`, // (sama seperti sebelumnya)
  props: { sidebarOpen:Boolean, isMobile:Boolean, currentPage:String, darkMode:Boolean },
  emits: ['toggle-sidebar','toggle-dark','navigate'],
  data:()=>({expandedGroup:'ops'})
};
const ToastContainer = { /*...*/ };
const LoadingOverlay = { /*...*/ };

// ========== APLIKASI UTAMA ==========
const {createApp} = Vue;
createApp({
  components:{AppSidebar,ToastContainer,LoadingOverlay},
  data(){
    return {
      session:null, loginEmail:'', loginPassword:'', loginLoading:false, loginError:'',
      currentPage:'dashboard', sidebarOpen:true, isMobile:window.innerWidth<768,
      isDark:localStorage.getItem('darkMode')==='true',
      pengaduanList:[], suratTugasList:[], kategoriList:[], personilList:[],
      unitKerjaList:[], layananList:[], sopList:[], kendaraanList:[], peralatanList:[], lokasiList:[],
      settings:{}
    }
  },
  computed:{
    pageTitle(){ return {dashboard:'Dashboard',pengaduan:'Pengaduan',st:'Surat Tugas',laporan:'Laporan',peta:'Peta & Crosstab',sppd:'Cetak SPPD',master:'Master Data',settings:'Pengaturan',about:'Tentang Aplikasi'}[this.currentPage]},
    pageSubtitle(){ return {dashboard:'Ringkasan operasional',pengaduan:'Form & riwayat',st:'Buat & pantau ST',laporan:'Laporan kegiatan',peta:'Analisis sebaran',sppd:'SPPD & Kwitansi',master:'Kelola data referensi',settings:'Konfigurasi aplikasi',about:'Informasi aplikasi'}[this.currentPage]},
    currentComponent(){ return {dashboard:'div',pengaduan:'div',st:'div',laporan:'div',peta:'div',sppd:'div',master:'div',settings:'div',about:'div'}[this.currentPage] }
  },
  methods:{
    addToast(m,t){ this.$refs.toastContainer.addToast(m,t) },
    showLoading(msg){ this.$refs.loadingOverlay.open(msg) },
    hideLoading(){ this.$refs.loadingOverlay.close() },
    toggleDarkMode(){ this.isDark=!this.isDark; localStorage.setItem('darkMode',this.isDark); document.documentElement.classList.toggle('dark',this.isDark) },
    async handleLogin(){ /* login */ },
    async handleLogout(){ await supabase.auth.signOut(); this.session=null; this.addToast('Logout berhasil','info') },
    async loadAllData(){ this.showLoading('Memuat data...'); try{ /* fetch semua */ }catch(e){ this.addToast('Gagal memuat data: '+e.message,'error') } finally{ this.hideLoading() } },
    formatDate:window.formatDate,
    statusBadge:window.statusBadge,
    getGambarArray:window.getGambarArray
  },
  async mounted(){
    if(this.isDark) document.documentElement.classList.add('dark');
    if(this.isMobile) this.sidebarOpen=false;
    window.addEventListener('resize',()=>{ this.isMobile=window.innerWidth<768; if(!this.isMobile) this.sidebarOpen=true });
    const {data:{session}} = await supabase.auth.getSession();
    this.session = session;
    if(session) await this.loadAllData();
    document.getElementById('app-loading')?.classList.add('hide');
  }
}).mount('#app');
