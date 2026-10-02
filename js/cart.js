const Cart = {
    KEY: 'mascotas_cart',

    get() {
        const data = localStorage.getItem(this.KEY);
        return data ? JSON.parse(data) : [];
    },

    save(items) {
        localStorage.setItem(this.KEY, JSON.stringify(items));
        this.updateBadge();
    },

    add(productId, quantity = 1) {
        const items = this.get();
        const existing = items.find(i => i.productId === productId);
        if (existing) {
            existing.quantity += quantity;
        } else {
            const product = MOCK_DATA.products.find(p => p.id === productId);
            if (product) {
                items.push({
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: quantity
                });
            }
        }
        this.save(items);
        showToast(`${MOCK_DATA.products.find(p => p.id === productId)?.name || 'Producto'} agregado al carrito`);
    },

    remove(productId) {
        const items = this.get().filter(i => i.productId !== productId);
        this.save(items);
    },

    updateQuantity(productId, quantity) {
        const items = this.get();
        const item = items.find(i => i.productId === productId);
        if (item) {
            if (quantity <= 0) {
                this.remove(productId);
            } else {
                item.quantity = quantity;
                this.save(items);
            }
        }
    },

    clear() {
        localStorage.removeItem(this.KEY);
        this.updateBadge();
    },

    getTotal() {
        return this.get().reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },

    getCount() {
        return this.get().reduce((sum, item) => sum + item.quantity, 0);
    },

    updateBadge() {
        const badges = document.querySelectorAll('.cart-badge');
        const count = this.getCount();
        badges.forEach(badge => {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        });
    }
};
