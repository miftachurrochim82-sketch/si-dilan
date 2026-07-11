const ToastContainer = {
  template: `
    <div class="toast-container">
      <div v-for="t in toasts" :key="t.id" class="toast" :style="{ background: t.type === 'success' ? '#10b981' : t.type === 'error' ? '#ef4444' : '#3b82f6' }">
        <i :class="t.type === 'success' ? 'bi bi-check-circle' : t.type === 'error' ? 'bi bi-x-circle' : 'bi bi-info-circle'"></i>
        <span class="ml-2">{{ t.message }}</span>
      </div>
    </div>
  `,
  data() {
    return { toasts: [] }
  },
  methods: {
    addToast(message, type = 'success') {
      const id = Date.now();
      this.toasts.push({ id, message, type });
      setTimeout(() => { this.toasts = this.toasts.filter(t => t.id !== id); }, 3000);
    }
  }
};

console.log('✅ ToastContainer ready');
