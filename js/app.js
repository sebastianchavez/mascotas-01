function initApp() {
    Auth.init();
    Cart.updateBadge();
    updateNavAuth();
    initMobileMenu();
}

function updateNavAuth() {
    const authLinks = document.querySelectorAll('.auth-links');
    const user = Auth.getCurrentUser();

    authLinks.forEach(container => {
        if (user) {
            container.innerHTML = `
                <a href="perfil.html" class="flex items-center gap-2 text-emerald-900 hover:text-emerald-700 transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    <span class="hidden md:inline">${user.name.split(' ')[0]}</span>
                </a>
                <button onclick="Auth.logout()" class="text-emerald-900 hover:text-emerald-700 transition-colors" title="Cerrar sesión">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                    </svg>
                </button>
            `;
        } else {
            container.innerHTML = `
                <a href="login.html" class="text-emerald-900 hover:text-emerald-700 transition-colors font-medium">Iniciar Sesión</a>
                <a href="registro.html" class="bg-emerald-700 text-white px-4 py-2 rounded-lg hover:bg-emerald-800 transition-colors">Registrarse</a>
            `;
        }
    });
}

function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

function renderHeader(activePage = '') {
    const navLinks = [
        { href: 'index.html', label: 'Inicio', key: 'inicio' },
        { href: 'productos.html', label: 'Productos', key: 'productos' },
        { href: 'nosotros.html', label: 'Nosotros', key: 'nosotros' },
        { href: 'contacto.html', label: 'Contacto', key: 'contacto' }
    ];

    const linksHtml = navLinks.map(link =>
        `<a href="${link.href}" class="text-emerald-900 hover:text-emerald-700 transition-colors font-medium ${activePage === link.key ? 'border-b-2 border-emerald-700' : ''}">${link.label}</a>`
    ).join('');

    const mobileLinksHtml = navLinks.map(link =>
        `<a href="${link.href}" class="block px-4 py-2 text-emerald-900 hover:bg-emerald-50 rounded-lg ${activePage === link.key ? 'bg-emerald-50 font-bold' : ''}">${link.label}</a>`
    ).join('');

    return `
    <header class="bg-emerald-50 shadow-md sticky top-0 z-40">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <a href="index.html" class="flex items-center gap-2">
                    <span class="text-3xl">🐾</span>
                    <span class="text-2xl font-bold text-emerald-900">Patitas Felices</span>
                </a>

                <nav class="hidden md:flex items-center gap-6">
                    ${linksHtml}
                </nav>

                <div class="flex items-center gap-4">
                    <a href="carrito.html" class="relative text-emerald-900 hover:text-emerald-700 transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/>
                        </svg>
                        <span class="cart-badge absolute -top-2 -right-2 bg-emerald-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center" style="display:none">0</span>
                    </a>
                    <div class="auth-links hidden md:flex items-center gap-3"></div>
                    <button id="mobile-menu-btn" class="md:hidden text-emerald-900">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div id="mobile-menu" class="hidden md:hidden pb-4 space-y-1">
                ${mobileLinksHtml}
                <div class="auth-links flex flex-col gap-2 px-4 pt-2"></div>
            </div>
        </div>
    </header>`;
}

function renderFooter() {
    return `
    <footer class="bg-emerald-900 text-emerald-100 mt-16">
        <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center gap-2 mb-4">
                        <span class="text-3xl">🐾</span>
                        <span class="text-xl font-bold">Patitas Felices</span>
                    </div>
                    <p class="text-emerald-200 text-sm">Tu tienda de confianza para consentir a tus mascotas con los mejores productos del mercado.</p>
                </div>
                <div>
                    <h3 class="font-bold mb-4">Enlaces</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="index.html" class="hover:text-white transition-colors">Inicio</a></li>
                        <li><a href="productos.html" class="hover:text-white transition-colors">Productos</a></li>
                        <li><a href="nosotros.html" class="hover:text-white transition-colors">Nosotros</a></li>
                        <li><a href="contacto.html" class="hover:text-white transition-colors">Contacto</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-bold mb-4">Legal</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="privacidad.html" class="hover:text-white transition-colors">Políticas de Privacidad</a></li>
                        <li><a href="terminos.html" class="hover:text-white transition-colors">Términos y Condiciones</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-bold mb-4">Contacto</h3>
                    <ul class="space-y-2 text-sm">
                        <li>📍 Av. Las Mascotas 123, Santiago</li>
                        <li>📞 +56 9 5678 1234</li>
                        <li>✉️ info@patitasfelices.cl</li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-emerald-800 mt-8 pt-8 text-center text-sm text-emerald-300">
                <p>&copy; 2026 Patitas Felices. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>`;
}

function renderProductCard(product) {
    return `
    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
        <a href="producto-detalle.html?id=${product.id}" class="block overflow-hidden">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
        </a>
        <div class="p-4">
            <h3 class="font-bold text-emerald-900 text-lg mb-1">
                <a href="producto-detalle.html?id=${product.id}" class="hover:text-emerald-700">${product.name}</a>
            </h3>
            <div class="flex items-center gap-1 mb-2">
                ${renderStars(product.rating)}
                <span class="text-sm text-gray-500">(${product.reviews})</span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-xl font-bold text-emerald-700">${formatPrice(product.price)}</span>
                <button onclick="Cart.add(${product.id})" class="bg-emerald-700 text-white px-3 py-2 rounded-lg hover:bg-emerald-800 transition-colors text-sm">
                    Agregar
                </button>
            </div>
        </div>
    </div>`;
}

document.addEventListener('DOMContentLoaded', initApp);
