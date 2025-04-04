document.addEventListener("DOMContentLoaded", () => {
    // Enlace "Ver proyectos" - lleva a la sección de proyectos
    document.querySelector(".scroll-to-projects").addEventListener("click", (e) => {
      e.preventDefault(); // Evita el comportamiento predeterminado
  
      // Desplaza suavemente hasta la sección de proyectos
      document.querySelector(".projects-container").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  
    // Enlace "Contactarme" - lleva al formulario
    document.querySelector(".scroll-to-contact").addEventListener("click", (e) => {
      e.preventDefault(); // Evita el comportamiento predeterminado
  
      // Desplaza suavemente hasta el formulario
      document.querySelector(".form-container").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                
                // Añade animación especial para las tarjetas de metodologías
                if (entry.target.classList.contains("method-card")) {
                    // Agrega un pequeño retraso para que aparezcan secuencialmente
                    const index = Array.from(document.querySelectorAll(".method-card")).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${0.2 * index}s`;
                }
            } else {
                // Solo para elementos que no son tarjetas de metodología
                if (!entry.target.classList.contains("method-card")) {
                    entry.target.classList.remove("show");
                }
            }
        });
    }, {
        threshold: 0.2 // Se activa cuando el 20% del elemento es visible
    });

    hiddenElements.forEach((el) => observer.observe(el));
    
    // Añade un efecto de hover en las tarjetas de metodología para mostrar detalles
    const methodCards = document.querySelectorAll(".method-card");
    methodCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("expanded");
        });
        
        card.addEventListener("mouseleave", () => {
            card.classList.remove("expanded");
        });
    });
});


  