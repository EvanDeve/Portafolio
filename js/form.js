document.getElementById("forma").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita el envío tradicional
    
    const formData = new FormData(this);
    
    // Envía los datos a Netlify
    fetch("/", {
      method: "POST",
      body: new URLSearchParams(formData).toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then(() => {
      // Muestra el modal
      const modal = document.getElementById("modal-exito");
      modal.style.display = "block";
      
      // Oculta el modal después de 3 segundos
      setTimeout(() => {
        modal.style.display = "none";
      }, 3000);
      
      // Opcional: Resetear el formulario
      this.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Hubo un error al enviar el formulario.");
    });
  });