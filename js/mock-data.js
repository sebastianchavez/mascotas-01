const MOCK_DATA = {
    categories: [
        { id: 1, name: 'Alimento Perros', icon: '🦴', description: 'Alimento premium para perros de todas las edades' },
        { id: 2, name: 'Alimento Gatos', icon: '🐱', description: 'Alimento balanceado para gatos sanos y felices' },
        { id: 3, name: 'Juguetes', icon: '🎾', description: 'Juguetes interactivos y divertidos para tus mascotas' },
        { id: 4, name: 'Camas y Accesorios', icon: '🛏️', description: 'Camas, collares, correas y más accesorios' },
        { id: 5, name: 'Higiene y Cuidado', icon: '🧴', description: 'Productos de higiene, baño y cuidado del pelaje' },
        { id: 6, name: 'Salud y Bienestar', icon: '💊', description: 'Vitaminas, antiparasitarios y productos veterinarios' }
    ],

    products: [
        { id: 1, name: 'Croquetas Premium Perro Adulto', categoryId: 1, price: 18990, stock: 45, image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&h=300&fit=crop', description: 'Alimento balanceado con pollo y arroz para perros adultos. Rico en proteínas y vitaminas para mantener a tu perro activo y saludable.', rating: 4.8, reviews: 234, featured: true },
        { id: 2, name: 'Croquetas Cachorro', categoryId: 1, price: 15990, stock: 38, image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=300&fit=crop', description: ' Fórmula especial para cachorros en crecimiento con calcio y DHA para un desarrollo óptimo.', rating: 4.9, reviews: 187, featured: true },
        { id: 3, name: 'Snack Dental Perros', categoryId: 1, price: 4990, stock: 60, image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop', description: 'Snacks masticables que ayudan a la limpieza dental y refrescan el aliento de tu perro.', rating: 4.6, reviews: 98, featured: false },
        { id: 4, name: 'Comida Húmeda Perros', categoryId: 1, price: 2490, stock: 80, image: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=400&h=300&fit=crop', description: 'Latas de comida húmeda con trozos de carne real. Complemento perfecto para una dieta balanceada.', rating: 4.5, reviews: 76, featured: false },

        { id: 5, name: 'Croquetas Gato Adulto', categoryId: 2, price: 16990, stock: 42, image: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=300&fit=crop', description: 'Alimento premium con salmón y atún para gatos adultos. Saludable y delicioso para tu felino.', rating: 4.7, reviews: 312, featured: true },
        { id: 6, name: 'Croquetas Gatito', categoryId: 2, price: 14490, stock: 35, image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=300&fit=crop', description: 'Fórmula especial para gatitos con taurina y proteínas para un crecimiento saludable.', rating: 4.9, reviews: 145, featured: true },
        { id: 7, name: 'Snack Salmón Gato', categoryId: 2, price: 3490, stock: 55, image: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400&h=300&fit=crop', description: 'Snacks crujientes con sabor a salmón, perfectos como premio o recompensa para tu gato.', rating: 4.6, reviews: 89, featured: false },
        { id: 8, name: 'Comida Húmeda Gato', categoryId: 2, price: 1990, stock: 70, image: 'https://images.unsplash.com/photo-1583511666372-62fc211f8377?w=400&h=300&fit=crop', description: 'Pack de sobres de comida húmeda premium con diferentes sabores para variar la dieta.', rating: 4.5, reviews: 67, featured: false },

        { id: 9, name: 'Pelota Indestructible', categoryId: 3, price: 8990, stock: 30, image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=400&h=300&fit=crop', description: 'Pelota de caucho natural resistente a mordidas fuertes. Ideal para juegos de búsqueda.', rating: 4.8, reviews: 156, featured: true },
        { id: 10, name: 'Cuerda Trenzada', categoryId: 3, price: 4990, stock: 50, image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=400&h=300&fit=crop', description: 'Cuerda de algodón trenzado para jugar a tirar yFetch. Perfecta para perros medianos y grandes.', rating: 4.5, reviews: 94, featured: false },
        { id: 11, name: 'Ratón Interactivo Gato', categoryId: 3, price: 6990, stock: 40, image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=300&fit=crop', description: 'Ratón automático con plumas que estimula el instinto cazador de tu gato.', rating: 4.7, reviews: 112, featured: true },
        { id: 12, name: 'Frisbee Flexible', categoryId: 3, price: 5990, stock: 35, image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=300&fit=crop', description: 'Frisbee suave y flexible, seguro para los dientes de tu perro. Perfecto para jugar en el parque.', rating: 4.4, reviews: 78, featured: false },

        { id: 13, name: 'Cama Acolchada Premium', categoryId: 4, price: 24990, stock: 18, image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop', description: 'Cama acolchada con memory foam para máximo confort. Funda removible y lavable.', rating: 4.9, reviews: 198, featured: true },
        { id: 14, name: 'Collar Antiparasitario', categoryId: 4, price: 12990, stock: 28, image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop', description: 'Collar ajustable con protección antiparasitaria de hasta 6 meses. Cómodo y resistente.', rating: 4.6, reviews: 134, featured: false },
        { id: 15, name: 'Correa Retráctil', categoryId: 4, price: 15990, stock: 22, image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=300&fit=crop', description: 'Correa retráctil de 5 metros con freno de seguridad. Ideal para paseos cómodos y seguros.', rating: 4.7, reviews: 87, featured: true },

        { id: 16, name: 'Champú Hipoalergénico', categoryId: 5, price: 7990, stock: 32, image: 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=400&h=300&fit=crop', description: 'Champú suave especial para pieles sensibles. Con avena y aloe vera, sin fragancias artificiales.', rating: 4.8, reviews: 145, featured: true },
        { id: 17, name: 'Cepillo Deslanador', categoryId: 5, price: 9990, stock: 25, image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=400&h=300&fit=crop', description: 'Cepillo profesional que elimina el pelo suelto y previene nudos. Ideal para razas de pelo largo.', rating: 4.6, reviews: 92, featured: false },

        { id: 18, name: 'Vitaminas Multivitamínicas', categoryId: 6, price: 11990, stock: 30, image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=300&fit=crop', description: 'Suplemento vitamínico completo para perros y gatos. Fortalece el sistema inmunológico.', rating: 4.5, reviews: 67, featured: false }
    ],

    reviews: [
        { id: 1, productId: 1, userId: 1, userName: 'María González', rating: 5, comment: 'Mi perro come muy bien estas croquetas, se nota el cambio en su pelaje. Excelente calidad!', date: '2026-09-18' },
        { id: 2, productId: 1, userId: 2, userName: 'Carlos Pérez', rating: 5, comment: 'El mejor alimento que he probado. Mi perro está mucho más activo y saludable.', date: '2026-09-15' },
        { id: 3, productId: 5, userId: 1, userName: 'María González', rating: 5, comment: 'A mis gatos les encanta este alimento. Desde que lo consumen tienen un pelaje brillante.', date: '2026-09-17' },
        { id: 4, productId: 5, userId: 3, userName: 'Ana Martínez', rating: 5, comment: 'Mis gatos son muy exigentes con la comida y este es el único que les gusta. Recomendado 100%.', date: '2026-09-14' },
        { id: 5, productId: 9, userId: 2, userName: 'Carlos Pérez', rating: 5, comment: 'Increíblemente resistente! Mi perro es muy mordedor y esta pelota sigue intacta después de meses.', date: '2026-09-16' },
        { id: 6, productId: 13, userId: 4, userName: 'Pedro Sánchez', rating: 5, comment: 'La mejor cama que hemos comprado. Mi perro duerme profundamente y se levanta sin dolor en las articulaciones.', date: '2026-09-13' },
        { id: 7, productId: 16, userId: 3, userName: 'Ana Martínez', rating: 4, comment: 'Muy buen champú, no irrita la piel de mi perro sensible. Huele suave y agradable.', date: '2026-09-12' },
        { id: 8, productId: 11, userId: 4, userName: 'Pedro Sánchez', rating: 5, comment: 'Mi gato pasa horas jugando con este ratón. Lo mejor que le he comprado en mucho tiempo.', date: '2026-09-11' }
    ],

    users: [
        { id: 1, name: 'María González', email: 'maria@example.com', password: 'password123', phone: '+56912345678', address: 'Av. Las Mascotas 123, Santiago' },
        { id: 2, name: 'Carlos Pérez', email: 'carlos@example.com', password: 'password123', phone: '+56923456789', address: 'Calle de los Animales 456, Valparaíso' },
        { id: 3, name: 'Ana Martínez', email: 'ana@example.com', password: 'password123', phone: '+56934567890', address: 'Pasaje Patitas 789, Concepción' },
        { id: 4, name: 'Pedro Sánchez', email: 'pedro@example.com', password: 'password123', phone: '+56945678901', address: 'Ruta del Parque 321, Temuco' }
    ],

    orders: [
        {
            id: 'PED-001',
            userId: 1,
            date: '2026-09-18',
            status: 'Entregado',
            items: [
                { productId: 1, name: 'Croquetas Premium Perro Adulto', quantity: 2, price: 18990, image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&h=300&fit=crop' },
                { productId: 9, name: 'Pelota Indestructible', quantity: 1, price: 8990, image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=400&h=300&fit=crop' }
            ],
            subtotal: 46970,
            shipping: 2990,
            total: 49960,
            address: 'Av. Las Mascotas 123, Santiago',
            shippingMethod: 'Express',
            paymentMethod: 'Tarjeta de crédito'
        },
        {
            id: 'PED-002',
            userId: 1,
            date: '2026-09-12',
            status: 'Entregado',
            items: [
                { productId: 5, name: 'Croquetas Gato Adulto', quantity: 1, price: 16990, image: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=300&fit=crop' },
                { productId: 16, name: 'Champú Hipoalergénico', quantity: 2, price: 7990, image: 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=400&h=300&fit=crop' }
            ],
            subtotal: 32970,
            shipping: 2990,
            total: 35960,
            address: 'Av. Las Mascotas 123, Santiago',
            shippingMethod: 'Estándar',
            paymentMethod: 'Transferencia bancaria'
        },
        {
            id: 'PED-003',
            userId: 1,
            date: '2026-09-21',
            status: 'En camino',
            items: [
                { productId: 13, name: 'Cama Acolchada Premium', quantity: 1, price: 24990, image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop' }
            ],
            subtotal: 24990,
            shipping: 3990,
            total: 28980,
            address: 'Av. Las Mascotas 123, Santiago',
            shippingMethod: 'Express',
            paymentMethod: 'Tarjeta de débito'
        }
    ],

    team: [
        { name: 'Dr. Patricio Vet', role: 'Veterinario Jefe', image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=300&h=300&fit=crop&crop=face', bio: 'Veterinario con más de 15 años de experiencia en cuidado animal y nutrición.' },
        { name: 'Camila Peluquera', role: 'Groomer Profesional', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face', bio: 'Especialista en estética y peluquería canina y felina con certificación internacional.' },
        { name: 'Lucas Vendedor', role: 'Asesor Comercial', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face', bio: 'Apasionado por los animales, te ayudará a encontrar lo mejor para tu mascota.' },
        { name: 'Sofía Gerente', role: 'Gerente General', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face', bio: 'Fundadora de Patitas Felices con más de 10 años de experiencia en el rubro.' }
    ],

    shippingMethods: [
        { id: 'standard', name: 'Envío Estándar', price: 2990, days: '3-5 días hábiles' },
        { id: 'express', name: 'Envío Express', price: 4990, days: '1-2 días hábiles' },
        { id: 'pickup', name: 'Retiro en tienda', price: 0, days: 'Disponible hoy' }
    ],

    paymentMethods: [
        { id: 'credit', name: 'Tarjeta de crédito', icon: '💳' },
        { id: 'debit', name: 'Tarjeta de débito', icon: '💳' },
        { id: 'transfer', name: 'Transferencia bancaria', icon: '🏦' },
        { id: 'cash', name: 'Efectivo contra entrega', icon: '💵' }
    ]
};
