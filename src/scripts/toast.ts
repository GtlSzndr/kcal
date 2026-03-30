export function showToast(message: string, type: 'success' | 'info' = 'success'): void {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = [
    'animate-toast-in rounded-xl px-4 py-2.5 text-sm font-medium shadow-lg',
    type === 'success'
      ? 'bg-primary-600 text-white'
      : 'bg-surface-800 text-white dark:bg-surface-200 dark:text-surface-900',
  ].join(' ');
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toast-out 0.3s var(--ease-smooth) both';
    toast.addEventListener('animationend', () => { toast.remove(); });
  }, 2200);
}
