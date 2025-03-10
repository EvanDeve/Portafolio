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
            } else {
                entry.target.classList.remove("show"); // 🔥 Ahora desaparece cuando ya no está en pantalla
            }
        });
    }, {
        threshold: 0.2 // Se activa cuando el 20% del elemento es visible
    });

    hiddenElements.forEach((el) => observer.observe(el));
});


  