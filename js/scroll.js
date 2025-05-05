document.addEventListener("DOMContentLoaded", () => {
    // Enlaces directos en el hero
    document.querySelector(".scroll-to-projects").addEventListener("click", (e) => {
      e.preventDefault(); // Evita el comportamiento predeterminado
  
      // Desplaza suavemente hasta la sección de proyectos
      document.querySelector("#projects-container").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  
    // Enlace "Contactarme" - lleva al formulario
    document.querySelector(".scroll-to-contact").addEventListener("click", (e) => {
      e.preventDefault(); // Evita el comportamiento predeterminado
  
      // Desplaza suavemente hasta el formulario
      document.querySelector("#footer-container").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
    
    // Optimización para reducir la carga de animaciones en móviles
    const isMobile = window.innerWidth <= 768;
    const observerThreshold = isMobile ? 0.1 : 0.2; // Umbral menor para dispositivos móviles
    
    // Cache de elementos DOM para mejor rendimiento
    const hiddenElements = document.querySelectorAll(".hidden");

    // Observer con opciones optimizadas para móviles
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                
                // Animación para barras de progreso de habilidades
                if (entry.target.classList.contains("knowledge")) {
                    const progressBar = entry.target.querySelector(".skill-progress");
                    if (progressBar) {
                        // Guardar el ancho original como un atributo de datos
                        const width = progressBar.style.width;
                        progressBar.style.setProperty('--width', width);
                        
                        // En móviles, reducir el retraso para mejorar la responsividad
                        const delay = isMobile ? 50 : 100;
                        
                        // Iniciar con ancho 0 y luego aplicar la animación
                        progressBar.style.width = "0";
                        
                        // Técnica para forzar un reflow y asegurar que la transición funcione
                        void progressBar.offsetWidth;
                        
                        setTimeout(() => {
                            progressBar.style.width = width;
                        }, delay);
                    }
                }
                
                // Añade animación secuencial para las tarjetas de metodologías
                if (entry.target.classList.contains("method-card")) {
                    // Agrega un retraso más corto en móviles para mejor experiencia
                    const index = Array.from(document.querySelectorAll(".method-card")).indexOf(entry.target);
                    const baseDelay = isMobile ? 0.1 : 0.2; 
                    entry.target.style.transitionDelay = `${baseDelay * index}s`;
                }
                
                // Desconectar el observer una vez que se ha mostrado el elemento
                // para ahorrar recursos del sistema
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: observerThreshold,
        // Agregar margen (rootMargin) para dispositivos móviles para activar animaciones un poco antes
        rootMargin: isMobile ? "50px 0px" : "0px"
    });

    // Observar todos los elementos ocultos
    hiddenElements.forEach((el) => observer.observe(el));
    
    // Optimización: actualizar la detección de dispositivo al cambiar tamaño de ventana
    window.addEventListener("resize", function() {
        const wasMobile = isMobile;
        const nowMobile = window.innerWidth <= 768;
        
        // Solo actuar si cambió entre móvil y desktop
        if (wasMobile !== nowMobile) {
            location.reload(); // Recargar para obtener las configuraciones óptimas
        }
    });
});


  