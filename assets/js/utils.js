// assets/js/utils.js
window.formatDate = function(d) {
  if (!d) return '-';
  const date = new Date(d);
  if (isNaN(date)) return '-';
  return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
};

window.statusBadge = function(s) {
  const map = {
    'Baru': 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
    'Diverifikasi': 'bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300',
    'Diproses': 'bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300',
    'Selesai': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300',
    'Ditolak': 'bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300'
  };
  return map[s] || 'bg-gray-100 text-gray-700';
};

window.getGambarArray = function(item) {
  if (!item || !item.gambar) return [];
  if (Array.isArray(item.gambar)) return item.gambar;
  try { return JSON.parse(item.gambar); } catch (e) { return []; }
};

console.log('✅ Utils ready');
