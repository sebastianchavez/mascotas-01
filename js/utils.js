function formatPrice(price) {
    return '$' + price.toLocaleString('es-CL');
}

function generateOrderId() {
    const num = Math.floor(Math.random() * 900) + 100;
    return `PED-${num}`;
}

function formatDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' });
}

function getStatusColor(status) {
    const colors = {
        'Entregado': 'bg-green-100 text-green-800',
        'En camino': 'bg-blue-100 text-blue-800',
        'Procesando': 'bg-yellow-100 text-yellow-800',
        'Cancelado': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
}

function renderStars(rating, interactive = false, inputName = 'rating') {
    let html = '<div class="flex items-center gap-1">';
    for (let i = 1; i <= 5; i++) {
        if (interactive) {
            html += `<label class="cursor-pointer">
                <input type="radio" name="${inputName}" value="${i}" class="hidden peer" ${i <= rating ? 'checked' : ''}>
                <svg class="w-6 h-6 peer-checked:text-yellow-400 text-gray-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
            </label>`;
        } else {
            if (i <= Math.floor(rating)) {
                html += `<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
            } else if (i - 0.5 <= rating) {
                html += `<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
            } else {
                html += `<svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
            }
        }
    }
    html += '</div>';
    return html;
}

function showToast(message, type = 'success') {
    const existing = document.getElementById('toast');
    if (existing) existing.remove();

    const colors = {
        success: 'bg-green-600',
        error: 'bg-red-600',
        info: 'bg-emerald-700'
    };

    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = `fixed bottom-6 right-6 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-2xl z-50 flex items-center gap-3 animate-slide-up`;
    toast.innerHTML = `
        <span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" class="ml-2 text-white/80 hover:text-white">✕</button>
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
