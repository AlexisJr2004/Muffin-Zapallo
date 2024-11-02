gsap.from(".gradient-text", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out"
});

gsap.from("p", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});

// Animación de entrada para los elementos del navbar
gsap.from("nav", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".nav-link", {
    duration: 0.5,
    y: -20,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.out",
    delay: 0.5
});

// Inicializar los íconos de Feather
feather.replace();

// Datos de ingredientes base (para 12 porciones)
const ingredientesBase = [
    { nombre: 'harina', cantidad: 200, unidad: 'gr' },
    { nombre: 'polvo de hornear', cantidad: 1, unidad: 'cdita' },
    { nombre: 'bicarbonato', cantidad: 0.5, unidad: 'cdita' },
    { nombre: 'canela', cantidad: 1.5, unidad: 'cdita' },
    { nombre: 'jengibre', cantidad: 0.25, unidad: 'cdita' },
    { nombre: 'huevos', cantidad: 3, unidad: '' },
    { nombre: 'azúcar blanca', cantidad: 100, unidad: 'gr' },
    { nombre: 'azúcar morena', cantidad: 100, unidad: 'gr' },
    { nombre: 'puré de calabaza', cantidad: 180, unidad: 'gr' },
    { nombre: 'aceite', cantidad: 100, unidad: 'ml' },
];

// Función para actualizar los ingredientes según las porciones
function actualizarIngredientes(porciones) {
    const lista = document.getElementById('ingredientesList');
    lista.innerHTML = '';

    ingredientesBase.forEach(ingrediente => {
        const cantidadAjustada = (ingrediente.cantidad * porciones / 12).toFixed(1);
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center border-b border-gray-100 py-2';
        li.innerHTML = `
            <span class="capitalize">${ingrediente.nombre}</span>
            <span class="font-medium">${cantidadAjustada} ${ingrediente.unidad}</span>
        `;
        lista.appendChild(li);
    });
}

// Evento para el cambio de porciones
document.getElementById('porcionesSelect').addEventListener('change', (e) => {
    actualizarIngredientes(Number(e.target.value));
});

// Inicializar con 12 porciones
actualizarIngredientes(12);


document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var goTopBtn = document.getElementById('goTopBtn');
        if (window.scrollY > 100) {
            goTopBtn.classList.remove('translate-y-20');
            goTopBtn.classList.remove('opacity-0');
            goTopBtn.classList.add('translate-y-0');
            goTopBtn.classList.add('opacity-100');
        } else {
            goTopBtn.classList.add('translate-y-20');
            goTopBtn.classList.add('opacity-0');
            goTopBtn.classList.remove('translate-y-0');
            goTopBtn.classList.remove('opacity-100');
        }
    });

    document.getElementById('goTopBtn').addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Función para manejar el menú móvil y cambiar el ícono
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    mobileMenu.classList.toggle('hidden');
    
    // Cambiar icono a "X"
    if (mobileMenu.classList.contains('hidden')) {
        menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>';
    } else {
        menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
    }
}

// Cerrar menú al hacer clic en un enlace
function closeMobileMenu() {
    document.getElementById('mobile-menu').classList.add('hidden');
    document.getElementById('menu-icon').innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>';
}

// Cerrar menú al hacer clic fuera de él
window.addEventListener('click', function(e) {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('menu-button');
    if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
        closeMobileMenu();
    }
});

// Función para manejar el efecto de blur en el scroll
function handleScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('bg-white/70', 'backdrop-blur-md');
        navbar.classList.remove('bg-white/0', 'backdrop-blur-0');
    } else {
        navbar.classList.remove('bg-white/70', 'backdrop-blur-md');
        navbar.classList.add('bg-white/0', 'backdrop-blur-0');
    }
}

// Agregar el evento de scroll
window.addEventListener('scroll', handleScroll);

// Llamar a handleScroll inicialmente para establecer el estado correcto
handleScroll();