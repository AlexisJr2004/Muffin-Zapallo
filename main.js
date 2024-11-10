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

const muffinsData = {
    chocolate: {
        name: "Muffin de Chocolate",
        image: "https://cdn0.recetasgratis.net/es/posts/5/9/7/muffins_de_chocolate_con_chispas_60795_600.jpg",
        chef: {
            name: "Chef María",
            role: "Repostera Principal",
            image: "https://w7.pngwing.com/pngs/53/98/png-transparent-chef-s-uniform-french-cuisine-woman-restaurant-woman.png"
        },
        price: "$3.99",
        ingredients: [
            "Chocolate belga 70%",
            "Harina de trigo",
            "Huevos orgánicos",
            "Azúcar morena",
            "Mantequilla",
            "Chispas de chocolate"
        ],
        nutrition: [
            { label: "Calorías", value: "320 kcal" },
            { label: "Proteínas", value: "5g" },
            { label: "Carbohidratos", value: "42g" },
            { label: "Grasas", value: "16g" }
        ],
        description: "Nuestro muffin de chocolate es elaborado con el mejor chocolate belga, siguiendo una receta tradicional que ha sido perfeccionada durante años. Cada bocado es una experiencia única que combina la suavidad de la masa con la intensidad del chocolate."
    },
    vainilla: {
        name: "Muffin de Vainilla",
        image: "https://lepasteleria.com/wp-content/uploads/media/muffins-de-vainilla/muffins-de-vainilla-imagen-destacada.jpg",
        chef: {
            name: "Chef Carlos",
            role: "Especialista",
            image: "https://w7.pngwing.com/pngs/220/390/png-transparent-man-wearing-chef-chef-s-uniform-cook-restaurant-food-chef-beer.png"
        },
        price: "$4.99",
        ingredients: [
            "Vainilla de Madagascar",
            "Harina pastelera",
            "Huevos de corral",
            "Azúcar glass",
            "Crema de leche",
            "Extracto de vainilla"
        ],
        nutrition: [
            { label: "Calorías", value: "280 kcal" },
            { label: "Proteínas", value: "4g" },
            { label: "Carbohidratos", value: "38g" },
            { label: "Grasas", value: "14g" }
        ],
        description: "Un clásico reinventado con vainilla de Madagascar y una textura increíblemente suave. El interior cremoso y la cobertura de azúcar glass crean una combinación perfecta de sabores y texturas."
    },
    arandanos: {
        name: "Muffin de Arándanos",
        image: "https://deliciaskitchen.b-cdn.net/wp-content/uploads/2022/02/muffins-de-arandanos-receta-facil-y-sana.jpg",
        chef: {
            name: "Chef Ana",
            role: "Pastelera",
            image: "https://statics.lasinnovadoras.com/2023/11/crop/656473872ce7e__800x578.jpeg"
        },
        price: "$4.50",
        ingredients: [
            "Arándanos frescos",
            "Harina integral",
            "Miel orgánica",
            "Aceite de coco",
            "Ralladura de limón",
            "Yogur natural"
        ],
        nutrition: [
            { label: "Calorías", value: "220 kcal" },
            { label: "Proteínas", value: "6g" },
            { label: "Carbohidratos", value: "32g" },
            { label: "Grasas", value: "10g" }
        ],
        description: "Una opción más saludable elaborada con harina integral y arándanos frescos de temporada. El toque de limón realza el sabor de los frutos y crea un equilibrio perfecto entre lo dulce y lo cítrico."
    }
};

function openModal(muffinType) {
    const modal = document.getElementById('muffinModal');
    const modalContent = document.getElementById('modalContent');
    const muffin = muffinsData[muffinType];
    
    modalContent.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <img src="${muffin.image}" alt="${muffin.name}"
                     class="w-full h-64 object-cover rounded-lg shadow-md" />
            </div>
            
            <div class="space-y-4">
                <div class="flex items-center justify-between">
                    <h3 class="text-2xl font-bold text-gray-900">${muffin.name}</h3>
                    <span class="text-lg font-semibold text-blue-600">${muffin.price}</span>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Ingredientes</h4>
                    <ul class="list-disc pl-4 space-y-1">
                        ${muffin.ingredients.map(ingredient => `
                            <li class="text-gray-600">${ingredient}</li>
                        `).join('')}
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Información Nutricional</h4>
                    <div class="grid grid-cols-2 gap-2">
                        ${muffin.nutrition.map(item => `
                            <div class="text-sm">
                                <span class="font-medium">${item.label}:</span>
                                <span class="text-gray-600">${item.value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Preparado por</h4>
                    <div class="flex items-center gap-3">
                        <img src="${muffin.chef.image}" alt="${muffin.chef.name}"
                             class="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                        <div>
                            <p class="font-medium">${muffin.chef.name}</p>
                            <p class="text-sm text-gray-600">${muffin.chef.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="mt-6">
            <h4 class="font-semibold text-lg mb-2">Descripción</h4>
            <p class="text-gray-600">${muffin.description}</p>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('muffinModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera del contenido
document.getElementById('muffinModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Cerrar modal con la tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});