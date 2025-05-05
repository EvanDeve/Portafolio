// Menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav nav ul li a');
    
    // Función para alternar el menú
    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Cerrar menú hamburguesa
            hamburgerMenu.classList.remove('active');
            mainNav.classList.remove('active');
            
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
}); 