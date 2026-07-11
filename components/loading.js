// components/loading.js
const LoadingOverlay = {
  template: `
    <div v-if="show" class="loading-overlay">
      <div class="loading-box">
        <div class="spinner"></div>
        <p class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ message }}</p>
      </div>
    </div>
  `,
  data() {
    return { show: false, message: 'Memuat data...' }
  },
  methods: {
    open(msg) {
      this.message = msg || 'Memuat data...';
      this.show = true;
    },
    close() {
      this.show = false;
    }
  }
};

console.log('✅ LoadingOverlay ready');
