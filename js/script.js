// Menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav nav ul li a');
    const body = document.body;
    
    // Función para alternar el menú
    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        mainNav.classList.toggle('active');
        
        // Prevenir desplazamiento de página cuando el menú móvil está abierto
        if (mainNav.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });
    
    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Cerrar menú hamburguesa
            hamburgerMenu.classList.remove('active');
            mainNav.classList.remove('active');
            body.style.overflow = '';
            
            // Obtener el id de la sección a la que se debe desplazar
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Desplazamiento suave a la sección
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mainNav.contains(event.target);
        const isClickOnHamburger = hamburgerMenu.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnHamburger && mainNav.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            mainNav.classList.remove('active');
            body.style.overflow = '';
        }
    });
    
    // Cerrar menú cuando la ventana supera el ancho móvil
    window.addEventListener('resize', function() {
        if (window.innerWidth > 820 && mainNav.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            mainNav.classList.remove('active');
            body.style.overflow = '';
        }
    });
    
    // Destacar elemento de navegación activo al desplazarse
    const sections = document.querySelectorAll('section, header');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 300)) {
                current = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Control del botón volver arriba
    const backToTopButton = document.querySelector('.back-to-top');
    
    // Función para controlar la visibilidad del botón de volver arriba
    function toggleBackToTopButton() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }
    
    // Mostrar/ocultar el botón de volver arriba al hacer scroll
    window.addEventListener('scroll', toggleBackToTopButton);
    
    // Funcionalidad del botón volver arriba
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Inicializar la visibilidad del botón
    toggleBackToTopButton();
    
    // Mejora de rendimiento para dispositivos móviles
    // Optimiza las animaciones durante el desplazamiento
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                scrollTimeout = null;
                // Aquí se ejecutan las funciones de scroll que requieren muchos recursos
                // Este enfoque reduce la frecuencia de ejecución durante scroll rápido
            }, 100);
        }
    });
    
    // Manejo de gestos táctiles para navegación móvil
    let touchstartX = 0;
    let touchendX = 0;
    
    // Implementación simple de reconocimiento de gestos de deslizamiento
    document.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const threshold = 100; // Umbral mínimo para considerar un deslizamiento
        
        // Deslizamiento desde el borde izquierdo para abrir menú
        if (touchstartX < 30 && (touchendX - touchstartX) > threshold) {
            if (!mainNav.classList.contains('active')) {
                hamburgerMenu.classList.add('active');
                mainNav.classList.add('active');
                body.style.overflow = 'hidden';
            }
        }
        
        // Deslizamiento hacia la izquierda para cerrar menú
        if ((touchstartX - touchendX) > threshold && mainNav.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            mainNav.classList.remove('active');
            body.style.overflow = '';
        }
    }
}); 