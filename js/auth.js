const Auth = {
    KEY: 'mascotas_user',
    USERS_KEY: 'mascotas_users',

    init() {
        if (!localStorage.getItem(this.USERS_KEY)) {
            localStorage.setItem(this.USERS_KEY, JSON.stringify(MOCK_DATA.users));
        }
    },

    getUsers() {
        const data = localStorage.getItem(this.USERS_KEY);
        return data ? JSON.parse(data) : MOCK_DATA.users;
    },

    getCurrentUser() {
        const data = localStorage.getItem(this.KEY);
        return data ? JSON.parse(data) : null;
    },

    login(email, password) {
        const users = this.getUsers();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            const { password: _, ...safeUser } = user;
            localStorage.setItem(this.KEY, JSON.stringify(safeUser));
            return { success: true, user: safeUser };
        }
        return { success: false, message: 'Email o contraseña incorrectos' };
    },

    register(name, email, password, phone) {
        const users = this.getUsers();
        if (users.find(u => u.email === email)) {
            return { success: false, message: 'Este email ya está registrado' };
        }
        const newUser = {
            id: users.length + 1,
            name,
            email,
            password,
            phone,
            address: ''
        };
        users.push(newUser);
        localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
        const { password: _, ...safeUser } = newUser;
        localStorage.setItem(this.KEY, JSON.stringify(safeUser));
        return { success: true, user: safeUser };
    },

    logout() {
        localStorage.removeItem(this.KEY);
        window.location.href = 'index.html';
    },

    recoverPassword(email) {
        const users = this.getUsers();
        const user = users.find(u => u.email === email);
        if (user) {
            return { success: true, message: 'Se ha enviado un enlace de recuperación a tu correo' };
        }
        return { success: false, message: 'No se encontró una cuenta con ese email' };
    },

    updateProfile(updates) {
        const currentUser = this.getCurrentUser();
        if (!currentUser) return { success: false, message: 'No hay sesión activa' };

        const users = this.getUsers();
        const idx = users.findIndex(u => u.id === currentUser.id);
        if (idx === -1) return { success: false, message: 'Usuario no encontrado' };

        users[idx] = { ...users[idx], ...updates };
        localStorage.setItem(this.USERS_KEY, JSON.stringify(users));

        const { password: _, ...safeUser } = users[idx];
        localStorage.setItem(this.KEY, JSON.stringify(safeUser));
        return { success: true, user: safeUser };
    },

    isLoggedIn() {
        return this.getCurrentUser() !== null;
    },

    getUserOrders() {
        const user = this.getCurrentUser();
        if (!user) return [];
        return MOCK_DATA.orders.filter(o => o.userId === user.id);
    }
};
