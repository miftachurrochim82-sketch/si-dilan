Vue.component('LoadingOverlay', {
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
    close() { this.show = false; }
  }
});

Vue.prototype.$loading = {
  show(message) {
    const app = document.getElementById('app')?.__vue_app__;
    if (app) {
      const root = app._instance?.proxy;
      if (root && root.$refs && root.$refs.loadingOverlay) {
        root.$refs.loadingOverlay.open(message);
      }
    }
  },
  hide() {
    const app = document.getElementById('app')?.__vue_app__;
    if (app) {
      const root = app._instance?.proxy;
      if (root && root.$refs && root.$refs.loadingOverlay) {
        root.$refs.loadingOverlay.close();
      }
    }
  }
};

console.log('✅ Loading system registered');
